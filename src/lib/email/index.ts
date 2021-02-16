import * as nodemailer from "./nodemailer";
export const send = async (to: any, link: any) => {
  return await nodemailer.send(to, link);
};
