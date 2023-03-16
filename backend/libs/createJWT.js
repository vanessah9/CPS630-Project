const jwt = require("jsonwebtoken");

function createJWT(data) {
  return jwt.sign(data, process.env.JWT_SECRET);
}

module.exports = createJWT;
