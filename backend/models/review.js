const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  ratingNumber: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  review: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "user",
  },
  services: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Review", reviewSchema);
