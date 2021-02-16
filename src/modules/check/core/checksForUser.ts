import { IUser } from "../../../lib/dataAccess/mongoDB/user/model";
import { repo } from "../../check/repo";

export const getChecksForUser = async (user: IUser) => {
  return await repo
    .getAll({ user: user._id })
    .then((checks) => checks)
    .catch((err) => {
      throw err;
    });
};
