import configs from "../../../configs";
import * as email from "../../../services/email";
import { generateToken, decodeToken } from "../../../services/jwt";
import { repo } from "../repo";

export const emailVerification = (userMail: string) => {
  const verificationCode = generateToken(
    { email: userMail },
    configs.EMAIL_TOKEN,
    "1h"
  );
  email.send(
    userMail,
    `${configs.SERVER_URL}:${configs.SERVER_PORT}/user/verify/${verificationCode}`
  );
  console.log(`${configs.SERVER_URL}:${configs.SERVER_PORT}/user/verify/${verificationCode}`)
};

export const verify = async (verificationCode: string) => {
  let decoded: any = decodeToken(verificationCode, configs.EMAIL_TOKEN);
  return await repo
    .confirmEmail(decoded.email)
    .then((verifiedUser) => {
      return verifiedUser?.isVerified;
    })
    .catch((error: any) => {
      throw error;
    });
};
