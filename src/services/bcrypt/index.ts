import bcrypt from "bcrypt";

export const hash = async (password: string) => {
  return await bcrypt.hash(password, 10);
};

export const compare = async (
  incoming: string,
  saved: string
): Promise<boolean> => {
  return await bcrypt.compare(incoming, saved);
};
