const Joi = require("joi");

const itemSchema = Joi.object({
  id: Joi.string().required(),
  quantity: Joi.number().min(1).required(),
});

const postInvoice = Joi.object({
  storeCode: Joi.string().required(),
  paymentMethod: Joi.string().required(),
  items: Joi.array().items(itemSchema).min(1).required(),
});

exports.postInvoice = postInvoice;
