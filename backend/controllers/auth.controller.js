var jwt = require("jsonwebtoken");
const { UserModel } = require("../models/auth.model");
const bcrypt = require("bcrypt");
var saltRounds = 5;

exports.register = async (req, res) => {
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
};

exports.login = async (req, res) => {
  let { email, password, username } = req.body;

  try {
    let user = await UserModel.find({ email, username });
    console.log(user);
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (result) {
          var token = jwt.sign(
            { email, password, userId: user[0]._id },
            process.env.privateKey
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
};
