var jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticate = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const decoded_token = jwt.verify(token, process.env.privateKey);
    // console.log("userId: ", req.body.userId);

    if (decoded_token) {
      const userId = decoded_token.userId;
      req.body.userId = userId;
      next();
    } else {
      res.send("Please Login First");
    }
  } else {
    res.send("Invalid Token");
  }
};

module.exports = { authenticate };
