import mongoose from 'mongoose';

export const userAccountSchema = new mongoose.Schema({
  profile: {
    name: {
      type: String,
      trim: true,
    },
    profile_photo: String,
    bio: String,
    dob: Date,
    gender: {
      type: String,
      enum: ["male", "female", "other"]
    },
    website: String,
    phone: String,
    email: String
  },
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  isPrivate: {
    type: Boolean,
    default: false
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  stats: {
    followersCount: {
      type: Number,
      default: 0
    },
    followingsCount: {
      type: Number,
      default: 0
    },
    postsCount: {
      type: Number,
      default: 0
    }
  },
}, {
  timestamps: true
});

export const UserAccount = mongoose.models.userAccount || mongoose.model("userAccount", userAccountSchema);