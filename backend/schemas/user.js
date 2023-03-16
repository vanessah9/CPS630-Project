const Joi = require("joi");

const registerSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  phoneNo: Joi.string().min(10).max(10).required(),
  address: Joi.string().required(),
  city: Joi.string().required(),
  province: Joi.string().required(),
  postalCode: Joi.string().required(),
  country: Joi.string().required(),
  balance: Joi.number().default(0),
  isAdmin: Joi.boolean().default(false),
});

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

exports.registerSchema = registerSchema;
exports.loginSchema = loginSchema
