const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minLength: [8, "Username too short"]
    },
    password: {
      type: String,
      required: true,
      minLength: [8, "Password too short"]
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
      type: [
        {
          type: mongoose.Types.ObjectId,
          ref: "User",
        },
      ],
      default: [],
    },
    postsWeReactedTo: {
      type: [
        {
          type: mongoose.Types.ObjectId,
          ref: "Post",
        },
      ],
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

const UserModel = mongoose.model("User", UserSchema);

module.exports = {
  UserSchema,
  UserModel,
};
