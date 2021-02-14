import mongoose from "mongoose";

export const isValidMongoId: any = (value: any, helpers: any) => {
  if (mongoose.Types.ObjectId.isValid(value)) {
    return true;
  } else {
    return helpers.message(
      `\"${helpers.state.path}\" with value \"${value}\" fails to match the valid mongo id pattern`
    );
  }
};
