import jwt from "jsonwebtoken";

export const generateToken = (
  payload: string | object,
  secret: string,
  expiry?: any
) => {
  return jwt.sign(payload, secret, { expiresIn: expiry });
};
