import { RegisterReq } from "../Abstracts/types";
import { repo } from "../repo";
export const register = async (req: RegisterReq) => {
  try {
    const result = await repo.add(req);
    return result;
  } catch (error) {
    throw error;
  }
};
