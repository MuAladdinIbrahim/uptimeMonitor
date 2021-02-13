export type RegisterReq = {
  username: string;
  email: string;
  password: string;
};
export type LoginReq = {
  password: string;
  username?: string;
  email?: string;
};
export type User = {
  username: string;
  password: string;
  email: string;
  isVerified: boolean;
  checks: string[];
};
