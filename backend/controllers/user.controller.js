const { PostModule } = require("../models/post.model");

exports.getAllPosts = async (req, res) => {
  try {
    let data = await PostModule.find();
    res.send(data);
  } catch (err) {
    res.send({ msg: "something went wrong while getting data" });
  }
};

exports.getIndivisual = async (req, res) => {
  let id = req.params.id;
  try {
    let data = await PostModule.find({ _id: id });
    res.send(data);
  } catch (err) {
    res.send({ msg: "something went wrong while getting data" });
  }
};

exports.postNewData = async (req, res) => {
  let data = req.body;
  try {
    let post = new PostModule(data);
    await post.save();
    res.send({ msg: "data added successfully" });
  } catch (err) {
    res.send({ msg: "something went wrong while posting", err });
  }
};

exports.updateData = async (req, res) => {
  let id = req.params.id;
  let data = req.body;
  try {
    await PostModule.findByIdAndUpdate({ _id: id }, data);
    res.send({ msg: "data added successfully" });
  } catch (err) {
    res.send({ msg: "something went wrong while posting", err });
  }
};

exports.deleteData = async (req, res) => {
  let id = req.params.id;
  try {
    await PostModule.findByIdAndDelete({ _id: id });
    res.send({ msg: "data deleted successfully" });
  } catch (err) {
    res.send({ msg: "something went wrong while deleting", err });
  }
};
