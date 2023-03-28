const mongoose = require("mongoose");

const verifyJWT = require("../middleware/verifyJWT");

const Order = require("../models/order");
const Shopping = require("../models/shopping");
const Items = require("../models/item");
const Trip = require("../models/trip");

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

  app.get("/order", verifyJWT, async (req, res) => {
    const userId = req.user.id;
    const user = req.user;

    try {
      const orders = await Order.find({ userId: user.id });

      const orderInfo = [];

      for (const order of orders) {
        const tripInfo = await getTripInfo(order.tripId);
        console.log(tripInfo)
        const invoiceInfo = await getInvoiceInfo(userId, order.receiptId);

        orderInfo.push({ ...order._doc, trip: tripInfo, invoice: invoiceInfo });
      }

      return res.status(200).json({ data: orderInfo });
    } catch (e) {
      return res.status(400).json({ error: "No orders under this account" });
    }
  });

  app.get("/order/:orderId", verifyJWT, async (req, res) => {
    const userId = req.user.id;
    const orderId = req.params.orderId;

    try {
      const order = await Order.findById(orderId);

      const tripInfo = await getTripInfo(order.tripId);

      const invoiceInfo = await getInvoiceInfo(userId, order.receiptId);

      return res.status(200).json({
        data: { ...order._doc, trip: tripInfo, invoice: invoiceInfo },
      });
    } catch (e) {
      return res.status(400).json({ error: "No orders under this account" });
    }
  });
};

async function getTripInfo(tripId) {
  try {
    const trip = await Trip.findById(tripId);

    return trip;
  } catch (e) {
    return null;
  }
}

async function getInvoiceInfo(userId, invoiceID) {
  try {
    const invoice = await Shopping.findOne({
      _id: invoiceID,
      userId: userId,
    });

    let itemsInfo = [];
    for (const item of invoice.items) {
      const info = await Items.findOne({ _id: item.id }, { _id: 0 });

      itemsInfo.push({ ...item._doc, item: info });
    }

    return { ...invoice._doc, items: itemsInfo };
  } catch (e) {
    return null;
  }
}
