const Joi = require("joi");

const coordinatePayload = Joi.object({
  lng: Joi.number().required(),
  lat: Joi.number().required(),
}).required();

const tripPayload = Joi.object({
  sourceCode: Joi.string().required(),
  location: coordinatePayload,
  destination: coordinatePayload,
});

exports.tripPayload = tripPayload;
