// pages/api/contact.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or any other email service you are using
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    // Set up email data
    const mailOptions = {
      from: email, // sender address (could be the user's email)
      to: process.env.RECIPIENT_EMAIL, // the recipient email (where the form messages will be sent)
      subject: subject, // subject of the email
      text: `You have received a new message from ${name} (${email})\n\nMessage:\n${message}`,
      html: `<p>You have received a new message from <strong>${name}</strong> (${email})</p><p><strong>Message:</strong><br>${message}</p>`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending message.' });
    }
  } else {
    // If the request method is not POST
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
