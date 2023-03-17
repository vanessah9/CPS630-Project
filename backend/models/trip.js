const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  truckId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "tuck",
  },
  sourceCode: {
    type: String,
    required: true,
  },
  destinationCode: {
    type: String,
    required: true,
  },
  distance: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    default: 0,
  },
  date: Date,
  status: {
    type: String,
    default: "Pending",
  },
});

module.exports = mongoose.model("Trip", tripSchema);
