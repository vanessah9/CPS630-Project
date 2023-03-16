const mongoose = require("mongoose");

const truckSchema = new mongoose.Schema({
  truckCode: {
    type: String,
    required: true,
  },
  availabilityCode: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Truck", truckSchema);
