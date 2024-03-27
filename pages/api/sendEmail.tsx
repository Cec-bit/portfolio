import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Use nodemailer to send email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'contactdigital365@gmail.com',
                pass: process.env.EMAIL_PASSWORD, 
            },
        });

        // Compose email
        const mailOptions = {
            from: 'contactdigital365@gmail.com',
            to: 'cecil707@outlook.com',
            subject: 'New Contact Form Submission',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully!' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Error sending email.' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
