import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  isVerified: boolean;
}

const schemaOptions = {
  timestamps: true,
};

const UserSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: [3, "too short"],
      maxlength: [25, "too long"],
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    checks: {
      type: [String],
    },
  },
  schemaOptions
);

export default mongoose.model<IUser>("User", UserSchema);
