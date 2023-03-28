require("dotenv").config();

const express = require("express");
const parser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(parser());
app.use(cors());

mongoose.connect(process.env.CONNECTION_STRING);

require("./routes")(app);

app.use("/admin/item", require("./routes/admin/item"));

app.listen(PORT);
