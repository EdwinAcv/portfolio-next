import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { LRUCache } from 'lru-cache';

// Configuración de la caché para limitar el número de peticiones
const rateLimitCache = new LRUCache<string, { count: number, timestamp: number }>({
  max: 500, // Máximo 500 IPs almacenadas
  ttl: 60 * 15000, // 5 minuto de retención
});

export async function POST(req: Request) {
  const clientIP = req.headers.get("x-forwarded-for") || "unknown"; // Obtener la IP del usuario
  
  // Aplicar rate limit (máximo 5 intentos por minuto)
  const requestInfo = rateLimitCache.get(clientIP) || { count: 0, timestamp: Date.now() };
  if (requestInfo.count >= 3) {
    return NextResponse.json({ message: "Límite de solicitudes alcanzado. Intente más tarde." }, { status: 429 });
  }

  // Incrementar contador y actualizar cache
  rateLimitCache.set(clientIP, { count: requestInfo.count + 1, timestamp: Date.now() });

  const { name, email, message } = await req.json(); // Obtener datos del cuerpo de la solicitud

  // Configura el transportador de Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS_APLICATION,
    },
  });

  // Configura el correo electrónico
  const mailOptions = {
    from: email,
    to: process.env.GMAIL_USER,
    subject: `Contacto por portafolio web`,
    text: `Sr/a "${name}" Correo: "${email}"\n\n ${message} \n\n\n`,
  };

  
  const logError = (error: Error) => {
    const logMessage = `${new Date().toISOString()} - IP: ${clientIP} - Error: ${error.message}\n`;
    const logFilePath = path.join(process.cwd(), 'errorLogs.txt');
    fs.appendFileSync(logFilePath, logMessage, 'utf8');
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Correo enviado satisfactoriamente' }, { status: 200 });
  } catch (error) {
    logError(error as Error);
    return NextResponse.json({ message: 'Error procesando la solicitud', error }, { status: 500 });
  }
}
