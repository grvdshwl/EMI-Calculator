const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const validator = require("validator");
const databaseName = process.env.DATABASE_NAME;
const databasePort = process.env.DATABASE_PORT;

mongoose
  .connect(`mongodb://localhost:${databasePort}/${databaseName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`database is connected on ${databasePort}.`));

module.exports = mongoose;
