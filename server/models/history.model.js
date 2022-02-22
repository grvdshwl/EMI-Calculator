const mongoose = require("./index.model");

const historySchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
});

const History = mongoose.model("History", historySchema);

module.exports = History;
