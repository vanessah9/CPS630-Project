const jwt = require("jsonwebtoken");

function verifyJWT(req, res, next) {
  const token = req.get("x-access-token");

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(400).json({
          error: "Failed To Authenticate",
        });
      }
      req.user = { id: decoded.id, username: decoded.username };
      next();
    });
  } else {
    res.status(400).json({ error: "Incorrect Token Given" });
  }
}

module.exports = verifyJWT;
