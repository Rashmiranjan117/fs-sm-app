const express = require("express");

const authRouter = express.Router();

authRouter.get("/", async (req, res) => {
  res.send("Auth Route");
});

module.exports = { authRouter };
