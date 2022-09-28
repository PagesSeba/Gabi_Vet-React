import { createTransport } from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.PASSWORD,
  },
});

const sendEmailToAdmin = async (message, asunto) => {
  const mailOptions = {
    from: "servidor Node.js",
    to: process.env.ADMIN_EMAIL,
    subject: asunto,
    html: message,
  };
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
};

export { sendEmailToAdmin };
