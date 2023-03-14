const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  post: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    default: Date.now,
  },
  liked: {
    type: [String],
    default: [],
  },
  comments: {
    type: [String],
    default: [],
  },
  userId: String,
});

const PostModule = mongoose.model("Post", postSchema);

module.exports = { PostModule };
