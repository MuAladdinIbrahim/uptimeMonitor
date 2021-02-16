import { watch } from "../../monitor";
import { ICheck } from "../Abstract/ICheck";
import { repo } from "../repo";

export const addCheck = async (check: any, user: any) => {
  return await repo.add(check, user).then((addedCheck: ICheck | boolean) =>{
    if(typeof(addedCheck) !== "boolean") watch(addedCheck)
    return addedCheck;
  })
};
