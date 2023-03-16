const mongoose = require("mongoose");

const truckSchema = new mongoose.Schema({
  tripId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  truckCode: {
    type: String,
    required: true,
  },
  availabilityCode: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Available",
  },
  location: {
    type: String,
    required: true,
  },
  currentStatus: {
    type: String,
    default: "Idle",
  },
  currentDistance: {
    type: Number,
    default: 0,
  },
  currentLocation: {
    type: String,
    default: "Idle",
  },
  currentDestination: {
    type: String,
    default: "Idle",
  },
  currentETD: Date,
  currentETA: Date,
});

module.exports = mongoose.model("Truck", truckSchema);
