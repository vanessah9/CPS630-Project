const verifyJWT = require("../middleware/verifyJWT");
const verifyAdmin = require("../middleware/verifyAdmin");

const Truck = require("../models/truck");
const { createTruckPayload } = require("../schemas/truck");

module.exports = function (app) {
  app.post("/truck", verifyJWT, verifyAdmin, async (req, res) => {
    const body = req.body;

    const { error, value } = createTruckPayload.validate(body);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    const { truckCode, availabilityCode, location } = value;

    try {
      const truck = await Truck.create({
        truckCode,
        availabilityCode,
        location,
      });

      return res.status(200).json({ data: truck._id });
    } catch (e) {
      return res.status(400).json({ error: e });
    }
  });
};
