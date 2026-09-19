
import mongoose from "mongoose";

export const commentSchema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "post",
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userAccount",
    required: true
  },
  content: {
    type: String,
    maxLength: 1000,
    trim: true,
    required: true
  },
  stats: {
    likes: {
      type: Number,
      default: 0,
    },
  },
}, {
  timestamps: true
});

export const Comment = mongoose.models.comments || mongoose.model("comments", commentSchema);