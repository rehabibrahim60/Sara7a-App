import jwt from"jsonwebtoken"
import nodemailer from "nodemailer"
import { htmlTemplate } from "./htmlTemplate.js";

export const sendEmail = async (email) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "rehabibrahim484@gmail.com",
      pass: "mbeujigonvpijlql",
    },
  });

  let token=jwt.sign(email,'rehab')

  const info = await transporter.sendMail({
    from: '"Sara7a app" <rehabibrahim484@gmail.com>',
    to: email,
    subject: "verify your Email",
    html: htmlTemplate(token),
  });
}