function verifyAdmin(req, res, next) {
  if (req.user.isAdmin) {
    next();
  } else {
    return res.status(401).send("Unauthorized");
  }
}

module.exports = verifyAdmin;
