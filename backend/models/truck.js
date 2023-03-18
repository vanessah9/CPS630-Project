const mongoose = require("mongoose");

const truckSchema = new mongoose.Schema({
  truckCode: {
    type: Number,
    required: true,
  },
  availabilityCode: {
    type: Number,
    required: true,
    default: 0,
  },
  location: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Truck", truckSchema);
