import Joi from "@hapi/joi";
import { isValidObjectId } from "mongoose";

export const validateCheckIdCheckReq= (reqBody: any) => {
  const chckReqSchema = Joi.object({
    checkId: Joi.string().custom(isValidObjectId).required(),
  });
  return chckReqSchema.validate(reqBody);
};
