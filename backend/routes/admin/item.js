const express = require("express");
const router = express.Router();

const verifyJWT = require("../../middleware/verifyJWT");
const verifyAdmin = require("../../middleware/verifyAdmin");

const Item = require("../../models/item");
const { getItemSchema, addItemSchema } = require("../../schemas/item");

// get all items
router.get("/all", [verifyJWT, verifyAdmin], async (req, res) => {
  try {
    const items = await Item.find({});
    return res.status(200).json({ data: items });
  } catch (e) {
    return res.status(400).json({ error: e });
  }
});

// create a new item
router.post("/", [verifyJWT, verifyAdmin], async (req, res) => {
  body = req.body;

  try {
    const item = await Item.create(body);

    if (item) {
      return res.status(200).json({ data: "Added item successfully" });
    } else {
      return res.status(400).json({ error: "Item could not be added" });
    }
  } catch (e) {
    return res.status(400).json({ error: e });
  }
});

// delete an item by id
router.delete("/:id", [verifyJWT, verifyAdmin], (req, res) => {
  const id = req.params.id;
  Item.findByIdAndRemove(id)
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Item deleted",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

// update an item by id
router.put("/:id", [verifyJWT, verifyAdmin], (req, res) => {
  const id = req.params.id;
  Item.findByIdAndUpdate(id, req.body, { new: true })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Item updated",
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
