import { CheckStatus } from "../Abstract/enum";
import { repo } from "../repo";

export const changeStatus = async (check: any, status: CheckStatus) => {
  return await repo.updateOne({ _id: check._id }, { status }).catch((err) => {
    throw err;
  });
};
