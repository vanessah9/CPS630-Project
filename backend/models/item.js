const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: {
    type: Number,
    default: 0,
  },
  quantity: {
    type: Number,
    default: 0,
  },
  madeIn: String,
  deptCode: String,
  category: String,
  image: String,
  rating: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Item", itemSchema);
