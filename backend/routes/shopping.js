const mongoose = require("mongoose");

const verifyJWT = require("../middleware/verifyJWT");

const Shopping = require("../models/shopping");
const Items = require("../models/item");
const { postInvoice } = require("../schemas/shopping");

module.exports = {
  routes: function (app) {
    app.post("/invoice", verifyJWT, async (req, res) => {
      const user = req.user;
      const body = req.body;

      const { error, value } = postInvoice.validate(body);

      if (error) {
        return res.status(400).json({ error: error.message });
      }

      const { items, paymentMethod, storeCode } = value;

      const { invoiceId, totalPrice } = await createInvoice(
        user,
        items,
        paymentMethod,
        storeCode
      );

      if (invoiceId) {
        return res.status(200).json({ data: { id: invoiceId, totalPrice } });
      } else {
        return res.status(400).json({ error: "Couldn't create the invoice" });
      }
    });

    app.get("/invoice", verifyJWT, async (req, res) => {
      const user = req.user;

      try {
        const invoices = await Shopping.find({ userId: user.id });

        let newInvoices = [];

        for (const invoice of invoices) {
          let itemsInfo = [];
          for (const item of invoice.items) {
            const info = await Items.findOne({ _id: item.id }, { _id: 0 });

            itemsInfo.push({ ...item._doc, item: info });
          }
          newInvoices.push({ ...invoice._doc, items: itemsInfo });
        }

        return res.status(200).json({ data: newInvoices });
      } catch (e) {
        return res.status(400).json({ error: "No invoices in our records" });
      }
    });

    app.get("/invoice/:invoiceId", verifyJWT, async (req, res) => {
      const user = req.user;
      const invoiceId = req.params.invoiceId;

      try {
        const invoice = await Shopping.findOne({
          _id: invoiceId,
          userId: user.id,
        });

        let itemsInfo = [];
        for (const item of invoice.items) {
          const info = await Items.findOne({ _id: item.id }, { _id: 0 });

          itemsInfo.push({ ...item._doc, item: info });
        }

        return res.status(200).json({ data: { ...invoice._doc, items: itemsInfo } });
      } catch (e) {
        return res
          .status(400)
          .json({ error: "No invoices in our records with that invoice ID" });
      }
    });
  },
  createInvoice,
};

async function createInvoice(user, items, paymentMethod, storeCode) {
  try {
    let totalPrice = 0;

    for (const item of items) {
      itemInfo = await Items.findOne({ _id: item.id });
      totalPrice += itemInfo.price * item.quantity;
    }

    totalPrice *= 1.13;

    totalPrice = Number(totalPrice.toFixed(2));

    const itemsPayload = items.map((item) => {
      const mId = new mongoose.Types.ObjectId(item.id);
      return { ...item, id: mId };
    });

    const userId = new mongoose.Types.ObjectId(user.id);

    const invoice = await Shopping.create({
      userId: userId,
      items: itemsPayload,
      storeCode,
      paymentMethod,
      totalPrice,
      time: new Date().getTime(),
    });

    return { invoiceId: invoice._id, invoicePrice: totalPrice };
  } catch (e) {
    return { error: e.message };
  }
}
