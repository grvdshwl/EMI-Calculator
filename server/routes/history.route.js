const express = require("express");
const History = require("../models/history.model");

const router = express.Router();

router.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  if (!!userId) {
    const findHistoryData = await History.find({ userId });
    res.status(200).json(findHistoryData);
  } else {
    res.status(400).send("Error! Please provide a userId param");
  }
});

router.post("/:userId", async (req, res) => {
  const { data } = req.body;
  const { userId } = req.params;

  const findHistoryData = await History.find({ userId });

  if (!findHistoryData.length) {
    await History.create({
      userId,
      data,
    });
    res.status(200).send("history saved successfully");
  } else {
    findHistoryData[0].data = findHistoryData[0].data.concat(data);
    await findHistoryData[0].save();

    res.status(200).send("history saved successfully");
  }
});

module.exports = router;
