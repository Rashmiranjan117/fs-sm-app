const express = require("express");

require("dotenv").config();
const authRouter = express.Router();
var jwt = require("jsonwebtoken");
const { UserModel } = require("../models/auth.model");
const bcrypt = require("bcrypt");
var saltRounds = 5;
const authController = require("../controllers/auth.controller");
const session = require('express-session');

authRouter.use(session({
  secret: process.env.privateKey,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

authRouter.get("/", async (req, res) => {
  // res.send("Auth Route");
  try {
    let data = await UserModel.find();
    res.send(data);
  } catch (err) {
    res.send({ msg: "Something went wrong", err });
  }
});

authRouter.post("/register", authController.register);
//demo account
// {
//   "email":"abc@gmail.com",
//   "password":"abc",
//   "username":"abc"
// }
authRouter.post("/login", authController.login);

authRouter.get('/current', async(req,res)=>{
  try{
    // if (!req.session.userId) {
    //   return res.status(401).json({ msg: 'User not authenticated' });
    // }
    // const userId = req.session.userId;
    // const user = await UserModel.findById({})
  }catch(err){}
})

module.exports = { authRouter };
