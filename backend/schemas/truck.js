const Joi = require("joi");

const createTruckPayload = Joi.object({
  truckCode: Joi.string().required(),
  availabilityCode: Joi.number().required(),
  location: Joi.string().required(),
});

exports.createTruckPayload = createTruckPayload;
