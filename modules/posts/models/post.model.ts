import mongoose from "mongoose";

export const postSchema = new mongoose.Schema({
  caption: String,
  media: String,
  mediaType: {
    type: String,
    enum: ["video", "image"]
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userAccount"
  },
  stats: {
    likesCount: {
      type: String,
      default: 0
    },
    commentsCount: {
      type: String,
      default: 0
    },
    repostsCount: {
      type: String,
      default: 0
    },
    saveCount: {
      type: String,
      default: 0
    },
  },
});

export const Post = mongoose.models.post || mongoose.model("post", postSchema);
