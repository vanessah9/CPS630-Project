const jwt = require("jsonwebtoken");
const User = require("../models/user");

function verifyJWT(req, res, next) {
  const token = req.get("x-access-token");

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(400).json({
          error: "Failed To Authenticate",
        });
      }
      let user;
      try {
        user = await User.findOne({ _id: decoded.id });
      } catch (e) {
        return res.status(400).json({ error: "Incorrect Token Given" });
      }
      req.user = { id: user._id, email: user.email, isAdmin: user.isAdmin };
      next();
    });
  } else {
    return res.status(400).json({ error: "Incorrect Token Given" });
  }
}

module.exports = verifyJWT;
