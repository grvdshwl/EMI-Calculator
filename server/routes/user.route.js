const express = require("express");
const User = require("../models/user.models");
const bcrypt = require("bcrypt");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const findUser = await User.find({ email: email });

  if (!findUser.length) {
    res.status(400).send("User not found");
  } else {
    const dbPassword = findUser[0].password;

    const isPasswordMatching = bcrypt.compareSync(password, dbPassword);

    if (!isPasswordMatching) {
      res.status(400).send("Incorrect Email or password");
    } else {
      const data = {
        email,
        firstname: findUser[0].firstname,
        lastname: findUser[0].lastname,
      };

      res.status(200).json(data);
    }
  }
});

router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const findUser = await User.find({ email: email });

  if (!!findUser.length) {
    res.status(400).send("User with email already exits");
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    const userData = await User.create({
      ...req.body,
      password: hashedPassword,
    });

    res.status(201).json({
      email: userData.email,
      firstname: userData.firstname,
      lastname: userData.lastname,
    });
  }
});

module.exports = router;
