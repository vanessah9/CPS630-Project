const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  truckId: mongoose.SchemaTypes.ObjectId,
  sourceCode: String,
  destinationCode: String,
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
