import { UpdateCheckReq } from "../Abstract/type";
import { repo } from "../repo";

export const editCheck = async (check: any, updates: UpdateCheckReq) => {
  return await repo
    .updateOne(check, updates)
    .then((updatedCheck) => updatedCheck)
    .catch(err => {
      throw err;
    })
};
