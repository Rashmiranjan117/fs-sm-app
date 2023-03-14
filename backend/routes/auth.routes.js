const express = require("express");

require("dotenv").config();
const authRouter = express.Router();
var jwt = require("jsonwebtoken");
const { UserModel } = require("../models/auth.model");
const bcrypt = require("bcrypt");
var saltRounds = 5;

authRouter.get("/", async (req, res) => {
  res.send("Auth Route");
});

authRouter.post("/register", async (req, res) => {
  let { email, password, username } = req.body;
  try {
    bcrypt.hash(password, saltRounds, async (err, hashed_password) => {
      if (err) {
        console.log(err);
        res.send("Something went Wrong", err);
      } else {
        const user = new UserModel({
          email,
          password: hashed_password,
          username,
        });
        await user.save();
        res.send("Account Created Successfully");
      }
    });
  } catch (err) {
    console.log("Something went wrong while creating an account.", err);
    res.send(err);
  }
});

authRouter.post("/login", async (req, res) => {
  let { email, password, username } = req.body;

  try {
    let user = await UserModel.find({ email, username });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (result) {
          var token = jwt.sign(
            { email, password, userId: user[0]._id, username },
            process.env.privateKey,
            { algorithm: "RS256" }
          );
          res.send({ msg: "Login Successfull", token });
        } else {
          res.send({ msg: "Invalid Credentials", err });
        }
      });
    }
  } catch (err) {
    res.send({ msg: "Login error", err });
  }
});

module.exports = { authRouter };
