import { repo } from "../repo";

export const addCheck = async (check: any, user: any) => {
  return await repo.add(check, user);
};
