import { CheckState } from "../Abstract/enum";
import { repo } from "../repo";

export const deleteCheck = async (check: any) => {
  return await repo.updateOne(check, { state: CheckState.DELETED });
};
