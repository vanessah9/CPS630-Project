const Joi = require("joi");

const createReviewPayload = Joi.object({
  itemId: Joi.string().required(),
  ratingNumber: Joi.number().min(0).max(5).required(),
  review: Joi.string().required(),
});

const getReviewsPayload = Joi.object({
  itemId: Joi.string().required(),
});

exports.createReviewPayload = createReviewPayload;
exports.getReviewsPayload = getReviewsPayload;
