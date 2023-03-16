const mongoose = require("mongoose");

const shoppingSchema = new mongoose.Schema({
  itemId: {
    type: [mongoose.SchemaTypes.ObjectId],
    required: true,
  },
  storeCode: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  time: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Shopping", shoppingSchema);
