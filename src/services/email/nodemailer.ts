import nodemailer from "nodemailer";
import configs from "../../configs";
var transporter: any;
var count = 0;
const initNodeMailerService = () => {
  count++;
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
    // if (!transporter) {
    //   transporter = initNodeMailerService();
    // }
  console.log(count);
  try {
    console.log("hi1");
    let info = await transporter.sendMail({
      from: configs.SENDER_EMAIL,
      to,
      subject: "Account Verification",
      text: "Please click the link below to verify your newly created account",
      html: `<a>${link}</a>`,
    });
    console.log("hi2");
    console.log("Message sent: ", info.messageId);
  } catch (error) {
    console.log({ ErrorInNodeMailer: error });
  }
};
