const Joi = require("joi");

const coordinatePayload = Joi.object({
  lng: Joi.number().required(),
  lat: Joi.number().required(),
}).required();

const orderPayload = Joi.object({
  sourceCode: Joi.string().required(),
  location: coordinatePayload,
  destination: coordinatePayload,
  storeCode: Joi.string().required(),
  items: Joi.array().items(Joi.string()).min(1).required(),
  paymentMethod: Joi.string().required(),
});

exports.orderPayload = orderPayload;
