import User from "../../services/dataAccess/mongoDB/user/model";
import { RegisterReq } from "./Abstracts/types";
export const repo = {
  add: async (data: RegisterReq) => {
      console.log("add");
      
    return await User.create(data)
      .then((createdUser: any) => createdUser)
      .catch((error: any) => {  
        console.log(`error in creating User in db ${error}`)
        throw error;
      });
  },
  confirmEmail: async (email: string) => {
    return await User.findOneAndUpdate(
      { email },
      { isConfirmed: true },
      { new: true }
    )
      .then((updatedUser: any) => updatedUser)
      .catch((error: any) => {
        console.log(`error in updating User in db ${error}`)
        throw error;
      });
  },
};
