const express = require("express");

const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  res.send("Auth Route");
});

module.exports = { userRouter };
