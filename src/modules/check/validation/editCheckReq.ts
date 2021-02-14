import Joi from "@hapi/joi";
import { isValidObjectId } from "mongoose";
import { Protocol } from "../Abstract/enum";

export const validateEditCheckReq = (reqBody: any) => {
  const chckReqSchema = Joi.object({
    checkId: Joi.string().custom(isValidObjectId).required(),
    updates: Joi.object().keys({
        name: Joi.string().optional(),
        url: Joi.string().optional(),
        protocol: Joi.string()
          .valid(...Object.values(Protocol))
          .optional(),
        path: Joi.string().optional(),
        port: Joi.number().optional(),
        webhook: Joi.string().optional(),
        timeout: Joi.number().optional(),
        interval: Joi.number().optional(),
        threshold: Joi.number().optional(),
        authentication: {
          username: Joi.string().optional(),
          password: Joi.string().optional(),
        },
        httpHeaders: {
          key: Joi.string().optional(),
          value: Joi.string().optional(),
        },
        assert: {
          statusCode: Joi.number().optional(),
        },
        tags: Joi.string().optional(),
        ignoreSSL: Joi.boolean().optional(),
    }).required()
  });
  return chckReqSchema.validate(reqBody) 
};
