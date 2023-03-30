const Joi = require("joi");

const createReviewPayload = Joi.object({
  ratingNumber: Joi.number().min(0).max(5).required(),
  review: Joi.string().required(),
  services: Joi.array().required(),
});

exports.createReviewPayload = createReviewPayload;