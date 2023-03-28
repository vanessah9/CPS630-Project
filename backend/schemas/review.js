const Joi = require("joi");

const createReviewPayload = Joi.object({
  itemId: Joi.string().required(),
  review: Joi.string().required(),
});

const getReviewsPayload = Joi.object({
  itemId: Joi.string().required(),
});

exports.createReviewPayload = createReviewPayload;
exports.getReviewsPayload = getReviewsPayload;
