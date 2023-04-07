const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "user",
  },
  tripId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "trip",
  },
  receiptId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "shopping",
  },
  paymentMethod: {
    type: String,
    default: "",
  },
  cardNumber: {
    type: String,
    required: true,
  },
  dateIssued: {
    type: Date,
    default: Date.now,
  },
  dateReceived: Date,
});

module.exports = mongoose.model("Order", orderSchema);
