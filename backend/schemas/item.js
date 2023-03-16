const Joi = require("joi");

const getItemSchema = Joi.object({
  sortBy: Joi.string().optional(),
  sortOrder: Joi.string().valid("asc", "desc").optional(),
});

const addItemSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number(),
  quantity: Joi.number(),
  madeIn: Joi.string().required(),
  deptCode: Joi.string().required(),
  category: Joi.string().required(),
  image: Joi.string().required(),
  rating: Joi.number(),
});

exports.getItemSchema = getItemSchema;
exports.addItemSchema = addItemSchema;
