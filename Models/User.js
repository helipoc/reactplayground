const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  posts: [
    {
      Title: String,
      Body: String,
    },
  ],
  jwt: {
    type: String,
  },
});

UserSchema.methods.removePost = function (id) {
  this.posts.pull(id);
  this.save();
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
