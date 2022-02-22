const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./routes/index.route");
require("./models/index.model");
const app = express();

dotenv.config();

const port = process.env.PORT || 3000;

const corsOptions = {
  origin: "*",
};

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors(corsOptions));

app.use(router);

app.listen(port, () => {
  console.log(`server is running on port ${port}.`);
});
