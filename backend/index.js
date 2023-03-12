require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.routes");
const { authRouter } = require("./routes/auth.routes");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/auth", authRouter);
app.use("/user", userRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Server is connected to db");
  } catch (err) {
    console.log("Something went wrong while connecting");
  }
  console.log("Server is running on port", process.env.port);
});
