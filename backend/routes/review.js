const mongoose = require("mongoose");

const verifyJWT = require("../middleware/verifyJWT");

const Review = require("../models/review");
const { createReviewPayload, getReviewsPayload } = require("../schemas/review");

module.exports = function (app) {
  app.post("/review", verifyJWT, async (req, res) => {
    const body = req.body;

    const { error, value } = createReviewPayload.validate(body);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    const { itemId, ratingNumber, review } = value;

    try {
      const newReview = await Review.create({
        itemId: new mongoose.Types.ObjectId(itemId),
        ratingNumber,
        review,
      });

      return res.status(200).json({ message: "Success", data: newReview });
    } catch (e) {
      return res.status(400).json({ error: "Was unable to create the review" });
    }
  });

  app.get("/review", verifyJWT, async (_req, res) => {
    try {
      const reviews = await Review.find({}, { itemId: 0, _id: 0, __v: 0 });

      return res.status(200).json({ data: reviews });
    } catch (e) {
      return res.status(400).json({ error: "No reviews" });
    }
  });

  app.get("/review/:itemId", verifyJWT, async (req, res) => {
    const itemId = req.params.itemId;

    try {
      const reviews = await Review.find(
        { itemId: itemId },
        { itemId: 0, _id: 0, __v: 0 }
      );

      return res.status(200).json({ data: reviews });
    } catch (e) {
      return res.status(400).json({ error: "No reviews" });
    }
  });
};
