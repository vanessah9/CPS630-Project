const Joi = require("joi");

const coordinatePayload = Joi.object({
  lng: Joi.number().required(),
  lat: Joi.number().required(),
}).required();

const orderPayload = Joi.object({
  tripId: Joi.string().required(),
  invoiceId: Joi.string().required(),
  paymentMethod: Joi.string().required(),
});

exports.orderPayload = orderPayload;
