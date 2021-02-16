import * as bcrypt from "../../../lib/bcrypt";
import { RegisterReq, User } from "../Abstracts/types";
import { repo } from "../repo";
import { emailVerification } from "./emailVerification";
export const register = async (req: RegisterReq) => {
  try {
    req.password = await bcrypt.hash(req.password)
    const result: User = await repo.add(req);
    console.log({result})
    if(result) {
        emailVerification(result.email)
    }
    return result;
  } catch (error) {
    throw error;
  }
};
