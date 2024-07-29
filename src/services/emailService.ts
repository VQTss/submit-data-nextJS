// src/services/emailService.ts
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load biến môi trường từ .env
dotenv.config();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // Địa chỉ SMTP của Gmail
  port: 587, // Cổng cho TLS
  secure: false, // false vì chúng ta sử dụng STARTTLS
  auth: {
    user: process.env.EMAIL_USERNAME, // Địa chỉ email của bạn
    pass: process.env.EMAIL_PASSWORD, // Mật khẩu ứng dụng của bạn
  },
});

export const sendEmail = async (formData: any) => {
  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: 'marketing@example.com', // Thay thế bằng email người nhận
    subject: 'New Form Submission',
    text: `Form data: ${JSON.stringify(formData)}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (err) {
    console.error('Error sending email:', err);
  }
};
