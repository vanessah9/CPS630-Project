const verifyJWT = require("../middleware/verifyJWT");

const Item = require("../models/item");
const { getItemSchema, addItemSchema } = require("../schemas/item");

module.exports = function (app) {
  app.get("/item", verifyJWT, async (req, res) => {
    user = req.user;
    body = req.body;

    const { error, value } = getItemSchema.validate(body);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    const { sortBy, sortOrder } = value;

    try {
      const items = await Item.find({ sortBy, sortOrder });

      return res.status(200).json({ data: items });
    } catch (e) {
      return res.status(400).json({ error: e });
    }
  });

  app.post("/item", verifyJWT, async (req, res) => {
    body = req.body;

    const { error, value } = addItemSchema.validate(body);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    const itemPayload = value;

    try {
      const item = await Item.create(itemPayload);

      if (item) {
        return res.status(200).json({ data: "Added item successfully" });
      } else {
        return res.status(400).json({ error: "Item could not be added" });
      }
    } catch (e) {
      return res.status(400).json({ error: e });
    }
  });
};
