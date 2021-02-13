import jwt from "jsonwebtoken";

export const generateToken = (
  payload: string | object,
  secret: string,
  expiry?: any
) => {
  if(expiry) return jwt.sign(payload, secret, { expiresIn: expiry });
  return jwt.sign(payload, secret)
  
};

export const decodeToken = (token: string, secret: string) => {
  return jwt.verify(token, secret)
}