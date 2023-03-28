const express = require("express");
const router = express.Router();

const verifyJWT = require("../../middleware/verifyJWT");
const verifyAdmin = require("../../middleware/verifyAdmin");

const Order = require("../../models/order");

// get all orders
router.get("/all", [verifyJWT, verifyAdmin], async (req, res) => {
  try {
    const orders = await Order.find({});
    return res.status(200).json({ data: orders });
  } catch (e) {
    return res.status(400).json({ error: e });
  }
});

// create a new order
router.post("/", [verifyJWT, verifyAdmin], async (req, res) => {
  body = req.body;

  try {
    const order = await Order.create(body);

    if (order) {
      return res.status(200).json({ data: "Added order successfully" });
    } else {
      return res.status(400).json({ error: "Order could not be added" });
    }
  } catch (e) {
    return res.status(400).json({ error: e });
  }
});

// delete an order by id
router.delete("/:id", [verifyJWT, verifyAdmin], (req, res) => {
  const id = req.params.id;
  Order.findByIdAndRemove(id)
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Order deleted",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

// update an order by id
router.put("/:id", [verifyJWT, verifyAdmin], (req, res) => {
  const id = req.params.id;
  Order.findByIdAndUpdate(id, req.body, { new: true })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Order updated",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
