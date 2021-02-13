import configs from "../../../configs";
import * as email from "../../../services/email";
import { generateToken } from "../../../services/jwt";
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
};
