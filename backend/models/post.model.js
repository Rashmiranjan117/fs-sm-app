const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  post: {
    type: Buffer,
    required: true,
  },
  mimeType: {
    type: String,
    enum: ["image/jpeg", "image/png", "image/gif"],
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
