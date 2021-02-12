import Joi from "@hapi/joi";

export const validateRegisterReq = (reqBody: any) => {
  const registerReqSchema = Joi.object({
    email: Joi.string().required(), //email not registered before
    username: Joi.string().required(), //not taken
    password: Joi.string().required(), //
  });
  return registerReqSchema.validate(reqBody);
};