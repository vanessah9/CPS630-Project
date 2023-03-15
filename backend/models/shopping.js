const mongoose = require("mongoose");

const shoppingSchema = new mongoose.Schema({
  storeCode: String,
  storeAddress: String,
  storeName: String,
  storePhone: {
    type: String,
    unique: true,
  },
  storeEmail: {
    type: String,
    unique: true,
  },
  storeWebsite: String,
  date: Date,
  time: String,
  transactionCode: String,
  items: [
    {
      itemId: mongoose.SchemaTypes.ObjectId,
      itemName: String,
      description: String,
      price: {
        type: Number,
        default: 0,
      },
      quantity: {
        type: Number,
        default: 0,
      },
      madeIn: String,
      deptCode: String,
      category: String,
      image: String,
      rating: {
        type: Number,
        default: 0,
      },
    },
  ],
  totalPrice: {
    type: Number,
    default: 0,
  },
  trasactionType: String, //sale, return, exchange
  paymentMethod: String,
});

module.exports = mongoose.model("Shopping", shoppingSchema);
