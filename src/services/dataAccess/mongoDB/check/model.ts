import mongoose, { Schema, Document } from "mongoose";
import { CheckState, Protocol , CheckStatus} from "../../../../modules/check/Abstract/enum";

const schemaOptions = {
  timestamps: true,
};

const CheckSchema: Schema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    protocol: {
      type: String,
      enum: Object.values(Protocol),
      required: true,
    },
    state: {
      type: String,
      enum: Object.values(CheckState),
      default: CheckState.RUNNING,
    },
    status: {
      type: String,
      enum: Object.values(CheckStatus),
      required: false,
    },
    path: {
      type: String,
      required: false,
    },
    port: {
      type: Number,
      required: false,
    },
    webhook: {
      type: String,
      required: false,
    },
    timeout: {
      type: Number,
      required: false,
    },
    interval: {
      type: Number,
      required: false,
    },
    threshold: {
      type: Number,
      required: false,
    },
    authentication: {
      required: false,
      _id: false,
      username: String,
      password: String,
    },
    httpHeaders: {
      required: false,
      _id: false,
      key: String,
      value: String,
    },
    assert: {
      required: false,
      _id: false,
      statusCode: Number,
    },
    tags: {
      type: [String],
      required: false,
    },
    ignoreSSL: {
      type: Boolean,
      required: false,
    },
  },
  schemaOptions
);

export default mongoose.model("Check", CheckSchema);
