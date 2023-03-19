const mongoose = require("mongoose");

const verifyJWT = require("../middleware/verifyJWT");

const { createTrip } = require("./trip");
const { createInvoice } = require("./shopping");

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

    const {
      sourceCode,
      location,
      destination,
      storeCode,
      items,
      paymentMethod,
    } = value;

    try {
      const { invoiceId } = await createInvoice(
        user,
        items,
        paymentMethod,
        storeCode
      );

      const { tripId } = await createTrip(
        user,
        sourceCode,
        location,
        destination
      );

      const order = await Order.create({
        userId: new mongoose.Types.ObjectId(user.id),
        tripId: new mongoose.Types.ObjectId(tripId),
        receiptId: new mongoose.Types.ObjectId(invoiceId),
        paymentMethod,
      });

      return res.status(200).json({ data: order._id });
    } catch (e) {
      return res.status(400).json({ error: "Order couldn't be fulfilled" });
    }
  });
};
