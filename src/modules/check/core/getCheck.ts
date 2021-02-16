import { ICheck } from "../Abstract/ICheck";
import { repo } from "../repo";

export const getCheck = async (check: any) => {
  return await repo.getOne({ _id: check._id }).then((check: ICheck) => {
    return check;
  }).catch((err) => {
      throw err;
  })
};
