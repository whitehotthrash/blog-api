const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
      required: false,
    },
    usersWeFollow: {
      type: [{ type: mongoose.Types.ObjectId, ref: "User" }],
      default: []
    },
    postsWeReactedTo: {
      type: [{ type: mongoose.Types.ObjectId, ref: "Post" }],
      default: []
    }
  },
  {
    timestamps: true,
  },
);
