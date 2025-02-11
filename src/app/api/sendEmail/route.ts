import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
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
    text: `Sr/a "${name}" Correo: "${email}"\n\n ${message} \n`,
  };

  try {
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Correro enviado satisfactoriamente' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error procesando la solicitud', error }, { status: 500 });
  }

}