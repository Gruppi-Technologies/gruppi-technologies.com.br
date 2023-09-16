import nodemailer from 'nodemailer';

const email = process.env.USER_EMAIL!;
const pass = process.env.USER_PASSWORD!;

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
