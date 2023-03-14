const express = require("express");
const { PostModule } = require("../models/post.model");
const userController = require("../controllers/user.controller");
const userRouter = express.Router();

userRouter.get("/", userController.getAllPosts);

userRouter.get("/:id", userController.getIndivisual);

userRouter.post("/add", userController.postNewData);

userRouter.patch("/update/:id", userController.updateData);

userRouter.delete("/:id", userController.deleteData);

module.exports = { userRouter };
