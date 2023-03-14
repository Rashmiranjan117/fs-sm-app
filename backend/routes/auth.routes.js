const express = require("express");

require("dotenv").config();
const authRouter = express.Router();
var jwt = require("jsonwebtoken");
const { UserModel } = require("../models/auth.model");
const bcrypt = require("bcrypt");
var saltRounds = 5;
const authController = require('../controllers/auth.controller')

authRouter.get("/", async (req, res) => {
  res.send("Auth Route");
});

authRouter.post("/register", authController.register);
//demo account
// {
//   "email":"abc@gmail.com",
//   "password":"abc",
//   "username":"abc"
// }
authRouter.post("/login", authController.login);

module.exports = { authRouter };
