const Joi = require("joi");

const orderPayload = Joi.object({
  tripId: Joi.string().required(),
  receiptId: Joi.string().required(),
  paymentMethod: Joi.string().required(),
});

exports.orderPayload = orderPayload;
