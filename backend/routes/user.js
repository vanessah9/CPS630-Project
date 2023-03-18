const bcrypt = require("bcryptjs");

const { registerSchema, loginSchema } = require("../schemas/user");

const User = require("../models/user");
const createJWT = require("../libs/createJWT");

const verifyJWT = require("../middleware/verifyJWT");

module.exports = function (app) {
  app.post("/login", async (req, res) => {
    const body = req.body;
    const { error, value } = loginSchema.validate(body);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    const { email, password } = value;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(409).json({ error: "Email/password incorrect" });
      }

      const isCorrectPassword = await bcrypt.compare(password, user.password);

      if (isCorrectPassword) {
        const token = createJWT({ id: user._id, email: user.email });
        return res.status(200).json({ token });
      }

      return res.status(409).json({ error: "Email/password incorrect" });
    } catch (e) {
      return res.status(409).json({ error: "Email/password incorrect" });
    }
  });

  app.post("/register", async (req, res) => {
    const body = req.body;
    const { error } = registerSchema.validate(body);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    try {
      body.password = await bcrypt.hash(body.password, 13);

      const user = await User.create(body);

      const token = createJWT({ id: user._id, email: user.email });

      return res.status(200).json({ token });
    } catch (e) {
      return res.status(409).json({ error: e });
    }
  });

  app.get("/checklogin", verifyJWT, (req, res) => {
    res.status(200).json({ message: "success" });
  });
  
};
