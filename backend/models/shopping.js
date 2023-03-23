const mongoose = require("mongoose");

const shoppingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "user",
  },
  items: [
    {
      id: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: "item",
      },
      quantity: { type: Number, required: true },
    },
  ],
  storeCode: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  time: {
    type: Number,
    default: 0,
  },
  paymentMethod: {
    type: String,
    default: "",
  },
  totalPrice: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Shopping", shoppingSchema);
