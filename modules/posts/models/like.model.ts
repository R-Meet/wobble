import mongoose from "mongoose";

export const likeSchema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "post",
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userAccount",
    required: true
  }
}, {
  timestamps: true
});

export const Like = mongoose.models.likes || mongoose.model("likes", likeSchema);