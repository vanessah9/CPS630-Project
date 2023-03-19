const verifyJWT = require("../middleware/verifyJWT");

const { createTrip } = require("./trip");
const { createInvoice } = require("./shopping");

const Order = require("../models/order");
const User = require("../models/user");
const Trip = require("../models/trip");
const Shooping = require("../models/shopping");

const { orderPayload } = require("../schemas/order");

module.exports = function (app) {
  app.post("/order", verifyJWT, (req, res) => {
    const user = req.user;
    const body = req.body;
    const { error, value } = orderPayload.validate(body);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    const { tripId, receiptId, paymentMethod } = value;

    try {
      return res.status(200).json({ data: "under development" });
    } catch (e) {
      return res.status(400).json({ error: "Order couldn't be fulfilled" });
    }
  });
};
