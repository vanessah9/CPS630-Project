const express = require("express");
const router = express.Router();

const verifyJWT = require("../../middleware/verifyJWT");
const verifyAdmin = require("../../middleware/verifyAdmin");

const Trip = require("../../models/trip");

// get all trips
router.get("/all", [verifyJWT, verifyAdmin], async (req, res) => {
  try {
    const trips = await Trip.find({});
    return res.status(200).json({ data: trips });
  } catch (e) {
    return res.status(400).json({ error: e });
  }
});

// create a new trip
router.post("/", [verifyJWT, verifyAdmin], async (req, res) => {
  body = req.body;

  try {
    const trip = await Trip.create(body);

    if (trip) {
      return res.status(200).json({ data: "Added trip successfully" });
    } else {
      return res.status(400).json({ error: "Trip could not be added" });
    }
  } catch (e) {
    return res.status(400).json({ error: e });
  }
});

// delete a trip by id
router.delete("/:id", [verifyJWT, verifyAdmin], (req, res) => {
  const id = req.params.id;
  Trip.findByIdAndRemove(id)
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Trip deleted",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

// update a trip by id
router.put("/:id", [verifyJWT, verifyAdmin], (req, res) => {
  const id = req.params.id;
  Trip.findByIdAndUpdate(id, req.body, { new: true })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Trip updated",
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
