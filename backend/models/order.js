const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: mongoose.SchemaTypes.ObjectId,
  itemsId: [mongoose.SchemaTypes.ObjectId],
  tripId: mongoose.SchemaTypes.ObjectId,
  receiptId: mongoose.SchemaTypes.ObjectId,
  totalPrice: {
    type: Number,
    default: 0,
  },
  shippingAddress: String,
  billingAddress: String,
  paymentMethod: String,
  trackingNumber: {
    type: String,
    unique: true,
  },
  dateIssued: Date,
  dateShipped: Date,
  dateReceived: Date,
  status: {
    type: String,
    default: "Pending",
  },
});

module.exports = mongoose.model("Order", orderSchema);
