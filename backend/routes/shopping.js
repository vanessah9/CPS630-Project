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
        return res.status(200).json({ data: { invoiceId, totalPrice } });
      } else {
        return res.status(400).json({ error: "Couldn't create the invoice" });
      }
    });

    app.get("/invoice", verifyJWT, async (req, res) => {
      const user = req.user;

      try {
        const invoices = await Shopping.find({ userId: user.id });

        let invoicesWithItemsInfo = [];

        for (const invoice of invoices) {
          const items = await Items.find({ _id: { $in: invoice._doc.itemId } });

          invoicesWithItemsInfo.push({ ...invoice._doc, itemId: items });
        }

        return res.status(200).json({ data: invoicesWithItemsInfo });
      } catch (e) {
        return res.status(400).json({ error: "No invoices in our records" });
      }
    });
  },
  createInvoice,
};

async function createInvoice(user, items, paymentMethod, storeCode) {
  let itemsInfo;

  try {
    itemsInfo = await Items.find({
      _id: { $in: items },
    });

    let totalPrice = 0;

    itemsInfo.forEach((item) => {
      totalPrice += item.price;
    });

    totalPrice *= 1.13;

    totalPrice = Number(totalPrice.toFixed(2));

    const itemsPayload = items.map((item) => {
      return new mongoose.Types.ObjectId(item);
    });

    const userId = new mongoose.Types.ObjectId(user.id);

    const invoice = await Shopping.create({
      userId: userId,
      itemId: itemsPayload,
      storeCode,
      paymentMethod,
      totalPrice,
      time: new Date().getTime(),
    });

    return { invoiceId: invoice._id, invoicePrice: totalPrice };
  } catch (e) {
    console.log(e);
    return { error: e.message };
  }
}
