import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.RECIPIENT_EMAIL,
      subject: subject,
      text: `You have received a new message from ${name} (${email})\n\nMessage:\n${message}`,
      html: `<p>You have received a new message from <strong>${name}</strong> (${email})</p><p><strong>Message:</strong><br>${message}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Message sent successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Error sending message.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
