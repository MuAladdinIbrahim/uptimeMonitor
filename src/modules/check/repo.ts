import Check from "../../services/dataAccess/mongoDB/check/model";
import User from "../../services/dataAccess/mongoDB/user/model";
export const repo = {
  add: async (check: any, user: any) => {
    check.user = user._id;
    const createdCheck = await Check.create(check);
    const updatedUser: any = await User.findOneAndUpdate(
      { _id: user._id },
      { $push: { checks: createdCheck._id } },
      { new: true }
    );
    if (updatedUser.checks.includes(createdCheck._id)) return createdCheck;
    else return false;
  },
  getOne: async (criteria: any) => {
    return await Check.findOne(criteria)
      .then((user: any) => user)
      .catch((error: any) => {
        console.log(`error in getting User frouser db ${error}`);
        throw error;
      });
  },
};
