const verifyJWT = require("../middleware/verifyJWT");

const Shopping = require("../models/shopping");
const Items = require("../models/item");
const { postInvoice } = require("../schemas/shopping");

module.exports = function (app, mongoose) {
  app.post("/invoice", verifyJWT, async (req, res) => {
    const user = req.user;
    const body = req.body;

    const { error, value } = postInvoice.validate(body);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    const { items, paymentMethod, storeCode } = value;

    let itemsInfo;

    try {
      itemsInfo = await Items.find({
        _id: { $in: items },
      });
    } catch (e) {
      return res.status(400).json({ error: "Invalid items" });
    }

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

    try {
      const invoice = await Shopping.create({
        userId: userId,
        itemId: itemsPayload,
        storeCode,
        paymentMethod,
        totalPrice,
        time: new Date().getTime(),
      });

      return res
        .status(200)
        .json({ data: { invoiceId: invoice._id, totalPrice } });
    } catch (e) {
      return res.status(400).json({ error: e });
    }
  });
};
