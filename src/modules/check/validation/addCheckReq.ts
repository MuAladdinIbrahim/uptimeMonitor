import Joi from "@hapi/joi";

export const validateAddCheckReq = (check: any) => {
  const chckReqSchema = Joi.object({
    name: Joi.string().required(),
    url: Joi.string().required(),
    protocol: Joi.string().required(),
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
  });
  return chckReqSchema.validate(check);
};
