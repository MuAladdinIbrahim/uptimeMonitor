import User from "../../lib/dataAccess/mongoDB/user/model";
import { RegisterReq } from "./Abstracts/types";
export const repo = {
  add: async (data: RegisterReq) => {
    return await User.create(data)
      .then((createdUser: any) => createdUser)
      .catch((error: any) => {
        console.log(`error in creating User in db ${error}`);
        throw error;
      });
  },
  confirmEmail: async (email: string) => {
    return await User.findOneAndUpdate(
      { email },
      { isVerified: true },
      { new: true }
    )
      .then((updatedUser: any) => updatedUser)
      .catch((error: any) => {
        console.log(`error in updating User in db ${error}`);
        throw error;
      });
  },
  getOne: async (criteria: any) => {
    return await User.findOne(criteria)
      .then((user: any) => user)
      .catch((error: any) => {
        console.log(`error in getting User frouser db ${error}`);
        throw error;
      });
  },
};
