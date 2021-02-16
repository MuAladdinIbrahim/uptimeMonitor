import Joi from "@hapi/joi";

export const validateRegisterReq = (reqBody: any) => {
  const registerReqSchema = Joi.object({
    email: Joi.string().email().required(), //email not registered before
    username: Joi.string().required(), //not taken
    password: Joi.string().required(), //
  });
  return registerReqSchema.validate(reqBody);
};
export const validateLoginReq = (reqBody: any) => {
  const registerReqSchema = Joi.object({
    email: Joi.string().optional(),
    username: Joi.string().optional(),
    password: Joi.string().required(),
  }).or('email','username')
  return registerReqSchema.validate(reqBody);
};
export const validateGetReportReq = (reqBody: any) => {
  const registerReqSchema = Joi.object({
    email: Joi.string().optional(),
    username: Joi.string().optional(),
  }).or('email','username')
  return registerReqSchema.validate(reqBody);
};
