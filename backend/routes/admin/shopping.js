const express = require("express");
const router = express.Router();

const verifyJWT = require("../../middleware/verifyJWT");
const verifyAdmin = require("../../middleware/verifyAdmin");

const Shopping = require("../../models/shopping");

// get all invoices
router.get("/all", [verifyJWT, verifyAdmin], async (req, res) => {
  try {
    const invoices = await Shopping.find({});
    return res.status(200).json({ data: invoices });
  } catch (e) {
    return res.status(400).json({ error: e });
  }
});

// create a new invoice
router.post("/", [verifyJWT, verifyAdmin], async (req, res) => {
  body = req.body;

  try {
    const invoice = await Shopping.create(body);

    if (invoice) {
      return res.status(200).json({ data: "Added invoice successfully" });
    } else {
      return res.status(400).json({ error: "Invoice could not be added" });
    }
  } catch (e) {
    return res.status(400).json({ error: e });
  }
});

// delete an invoice by id
router.delete("/:id", [verifyJWT, verifyAdmin], (req, res) => {
  const id = req.params.id;
  Shopping.findByIdAndRemove(id)
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Invoice deleted",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

// update an invoice by id
router.put("/:id", [verifyJWT, verifyAdmin], (req, res) => {
  const id = req.params.id;

  Shopping.findByIdAndUpdate(id, req.body, { new: true })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Invoice updated",
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
