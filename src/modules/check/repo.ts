import Check from "../../lib/dataAccess/mongoDB/check/model";
import User from "../../lib/dataAccess/mongoDB/user/model";
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
      .then((check: any) => check)
      .catch((error: any) => {
        console.log(`error in getting check from db ${error}`);
        throw error;
      });
  },
  updateOne: async (criteria: any, updates: any) => {
    return await Check.findOneAndUpdate(criteria, updates, { new: true })
      .then((check: any) => check)
      .catch((error: any) => {
        console.log(`error in updating Check in db ${error}`);
        throw error;
      });
  },
};
