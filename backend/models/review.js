const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  itemId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "item",
  },
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
});

module.exports = mongoose.model("Review", reviewSchema);
