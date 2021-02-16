import configs from "../../../configs";
import { compare } from "../../../lib/bcrypt";
import { generateToken } from "../../../lib/jwt";
import { LoginReq, User } from "../Abstracts/types";
import { repo } from "../repo";
export const login = async (req: LoginReq): Promise<string | boolean> => {
  try {
    let filter = req.email ? { email: req.email } : { username: req.username };
    const savedUser: User = await repo.getOne(filter);
    const isSamePassword: boolean = await compare(
      req.password,
      savedUser.password
    );
    if (isSamePassword)
      return generateToken({ username: savedUser.username }, configs.AUTH_TOKEN);
    return false;
  } catch (error) {
    throw error;
  }
};
