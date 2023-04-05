const Joi = require("joi");

const coordinatePayload = Joi.object({
  lng: Joi.number().required(),
  lat: Joi.number().required(),
}).required();

const itemSchema = Joi.object({
  id: Joi.string().required(),
  quantity: Joi.number().min(1).required(),
});

const orderPayload = Joi.object({
  storeCode: Joi.string().required(),
  items: Joi.array().items(itemSchema).min(1).required(),
  sourceCode: Joi.string().required(),
  location: coordinatePayload,
  destination: coordinatePayload,
  paymentMethod: Joi.string().required(),
});

exports.orderPayload = orderPayload;
