const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  itemsId: {
    type: [mongoose.SchemaTypes.ObjectId],
    required: true,
  },
  tripId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  receiptId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  totalPrice: {
    type: Number,
    default: 0,
  },
  shippingAddress: {
    type: String,
    required: true,
  },
  billingAddress: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    default: "",
  },
  trackingNumber: {
    type: String,
    unique: true,
  },
  dateIssued: {
    type: Date,
    default: Date.now,
  },
  dateShipped: Date,
  dateReceived: Date,
  status: {
    type: String,
    default: "Pending",
  },
});

module.exports = mongoose.model("Order", orderSchema);
