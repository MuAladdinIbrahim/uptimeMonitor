import nodemailer from "nodemailer";
import configs from "../../configs";
var transporter: any;
const initNodeMailerService = () => {
  transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "0f8c74b70dd45d",
      pass: "0c06daaaf665b2",
    },
  });
  return transporter;
};

export const send = async (to: string, link: string) => {
    if (!transporter) {
      transporter = initNodeMailerService();
    }
  try {
    let info = await transporter.sendMail({
      from: configs.SENDER_EMAIL,
      to,
      subject: "Account Verification",
      text: "Please click the link below to verify your newly created account",
      html: `<a>${link}</a>`,
    });
    console.log("Message sent: ", info.messageId);
  } catch (error) {
    console.log({ ErrorInNodeMailer: error });
  }
};
