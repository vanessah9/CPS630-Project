const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  phoneNo: {
    type: String,
    unique: true,
  },
  password: String,
  address: String,
  city: String,
  province: String,
  postalCode: {
    type: String,
    minlength: 6,
    maxlength: 6,
  },
  country: String,
  balance: {
    type: Number,
    default: 0,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", userSchema);
