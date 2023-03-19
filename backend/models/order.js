const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
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
  dateIssued: {
    type: Date,
    default: Date.now,
  },
  dateReceived: Date,
});

module.exports = mongoose.model("Order", orderSchema);
