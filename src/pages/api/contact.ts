// pages/api/contact.ts

import nodemailer from 'nodemailer';

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter using your email provider's SMTP settings
    const transporter = nodemailer.createTransport({
        service: 'koushikvarma6369@gmail.com',  // Replace with your email service provider (e.g., 'gmail', 'yahoo', 'sendgrid', etc.)
        auth: {
          user: 'koushikvarma6369@gmail.com',  // Your email address
          pass: 'stmk ffal darj wynj',     // Your email password (or app-specific password if using 2FA)
        },
      });

    // Define the email options
    const mailOptions = {
      from: email, // sender address
      to: 'koushikvarma6369@gmail.com', // replace with your email address
      subject: `New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send message. Please try again.' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
