const Joi = require("joi");

const postInvoice = Joi.object({
  storeCode: Joi.string().required(),
  paymentMethod: Joi.string().required(),
  items: Joi.array().items(Joi.string()).min(1).required(),
});

exports.postInvoice = postInvoice;
