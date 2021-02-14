import { CheckStatus } from "../Abstract/enum";
import { UpdateCheckReq } from "../Abstract/type";
import { repo } from "../repo";

export const editCheck = async (check: any,updates: UpdateCheckReq) => {
  return await repo.updateOne(check, {status: CheckStatus.UP});
};
