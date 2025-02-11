import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    console.log( 'hola' );
    console.log( { name, email, message } );

    // Configura el transportador de Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Configura el correo electrónico
    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER,
      subject: `Nuevo mensaje de ${name}`,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Correo enviado con éxito' });
    } catch (error) {
      res.status(500).json({ error: 'Error al enviar el correo' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}