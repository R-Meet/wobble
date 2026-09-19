import mongoose from "mongoose";

export const followSchema = new mongoose.Schema({
  follower: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userAccount"
  },
  following: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userAccount"
  }
});

export const Follow = mongoose.models.follows || mongoose.model("follows", followSchema);