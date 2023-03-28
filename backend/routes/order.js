const mongoose = require("mongoose");

const verifyJWT = require("../middleware/verifyJWT");

const Order = require("../models/order");

const { orderPayload } = require("../schemas/order");

module.exports = function (app) {
  app.post("/order", verifyJWT, async (req, res) => {
    const user = req.user;
    const body = req.body;
    const { error, value } = orderPayload.validate(body);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    const { invoiceId, tripId, paymentMethod } = value;

    try {
      const order = await Order.create({
        userId: new mongoose.Types.ObjectId(user.id),
        tripId: new mongoose.Types.ObjectId(tripId),
        receiptId: new mongoose.Types.ObjectId(invoiceId),
        paymentMethod,
      });

      return res.status(200).json({ data: { id: order._id } });
    } catch (e) {
      return res.status(400).json({ error: "Order couldn't be fulfilled" });
    }
  });

  app.get("/order", verifyJWT, async (req, res) => {});

  app.get("/order/:id", verifyJWT, async (req, res) => {});
};
