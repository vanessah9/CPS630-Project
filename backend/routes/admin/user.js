const express = require("express");
const router = express.Router();

const verifyJWT = require("../../middleware/verifyJWT");
const verifyAdmin = require("../../middleware/verifyAdmin");

const User = require("../../models/user");

// get all users
router.get("/all", [verifyJWT, verifyAdmin], async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json({ data: users });
  } catch (e) {
    return res.status(400).json({ error: e });
  }
});

// create a new user
router.post("/", [verifyJWT, verifyAdmin], async (req, res) => {
  body = req.body;

  try {
    const user = await User.create(body);

    if (user) {
      return res.status(200).json({ data: "Added user successfully" });
    } else {
      return res.status(400).json({ error: "User could not be added" });
    }
  } catch (e) {
    return res.status(400).json({ error: e });
  }
});

// delete a user by id
router.delete("/:id", [verifyJWT, verifyAdmin], (req, res) => {
  const id = req.params.id;
  User.findByIdAndRemove(id)
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "User deleted",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

// update a user by id
router.put("/:id", [verifyJWT, verifyAdmin], (req, res) => {
  const id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { new: true })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "User updated",
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
