const express = require("express");
const router = express.Router();

const verifyJWT = require("../../middleware/verifyJWT");
const verifyAdmin = require("../../middleware/verifyAdmin");

const Truck = require("../../models/truck");

// get all trucks
router.get("/all", [verifyJWT, verifyAdmin], async (req, res) => {
  try {
    const trucks = await Truck.find({});
    return res.status(200).json({ data: trucks });
  } catch (e) {
    return res.status(400).json({ error: e });
  }
});

// create a new truck
router.post("/", [verifyJWT, verifyAdmin], async (req, res) => {
  body = req.body;

  try {
    const truck = await Truck.create(body);

    if (truck) {
      return res.status(200).json({ data: "Added truck successfully" });
    } else {
      return res.status(400).json({ error: "Truck could not be added" });
    }
  } catch (e) {
    return res.status(400).json({ error: e });
  }
});

// delete a truck by id
router.delete("/:id", [verifyJWT, verifyAdmin], (req, res) => {
  const id = req.params.id;
  Truck.findByIdAndRemove(id)
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Truck deleted",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

// update a truck by id
router.put("/:id", [verifyJWT, verifyAdmin], (req, res) => {
  const id = req.params.id;
  Truck.findByIdAndUpdate(id, req.body, { new: true })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Truck updated",
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
