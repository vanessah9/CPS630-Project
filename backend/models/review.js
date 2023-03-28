const { string } = require("joi");
const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  itemId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "item",
  },
  review: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Review", reviewSchema);
