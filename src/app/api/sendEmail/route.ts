import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
  const { name, email, message } = await req.json(); // Obtener datos del cuerpo de la solicitud

  console.log(process.env.GMAIL_USER)
  console.log(process.env.GMAIL_PASS_APLICATION)

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
    text: `Sr/a "${name}" Correo: "${email}"\n\n ${message} \n\n`,
  };

  const logError = (error: any) => {
    const logMessage = `${new Date().toISOString()} - Error: ${error.message}\n`;
    const logFilePath = path.join(process.cwd(), 'errorLogs.txt');
    fs.appendFileSync(logFilePath, logMessage, 'utf8');
  };

  try {
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Correro enviado satisfactoriamente' }, { status: 200 });
  } catch (error) {
    logError(error);
    return NextResponse.json({ message: 'Error procesando la solicitud', error }, { status: 500 });
  }

}