const mongoose = require("mongoose");

const truckSchema = new mongoose.Schema({
  tripId: mongoose.SchemaTypes.ObjectId,
  code: String,
  availabiliyCode: String,
  type: String,
  status: {
    type: String,
    default: "Available",
  },
  location: String,
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
