const mongoose = require("./index.model");

const validator = require("validator");

const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email format.");
      }
    },
  },
  password: {
    type: String,
    required: false,
    trim: true,
    min: 8,
    max: 50,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
