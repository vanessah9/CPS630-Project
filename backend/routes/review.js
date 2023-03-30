const mongoose = require("mongoose");

const verifyJWT = require("../middleware/verifyJWT");

const Review = require("../models/review");
const User = require("../models/user");
const { createReviewPayload } = require("../schemas/review");

module.exports = function (app) {
  app.post("/review", verifyJWT, async (req, res) => {
    const user = req.user;
    const body = req.body;

    const { error, value } = createReviewPayload.validate(body);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    const { services, ratingNumber, review } = value;

    try {
      const userInfo = await User.findById(user.id);

      const newReview = await Review.create({
        userId: new mongoose.Types.ObjectId(user.id),
        name: userInfo.firstName + " " + userInfo.lastName,
        services,
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
      const reviews = await Review.find({}, { _id: 0, __v: 0 });

      return res.status(200).json({ data: reviews });
    } catch (e) {
      return res.status(400).json({ error: "No reviews" });
    }
  });
};
