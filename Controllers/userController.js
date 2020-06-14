const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Models/User");

module.exports = {
  addUser: (req, res) => {
    const { username, password } = req.body;
    const hash = bcrypt.hashSync(password, 8);
    User.create({ username, password: hash });
    res.send({ msg: "User Created !" });
  },
  /**
   * Showing users expect user friends
   */
  showUsers: async (req, res) => {
    const { user } = req.body;
    let userFriends = req.body.user.friends;
    const users = await User.find({
      $and: [{ _id: { $ne: user._id } }, { _id: { $nin: userFriends } }],
    });
    let usersInfos = users.map((u) => {
      let chunk = {};
      chunk.id=u._id;
      chunk.username = u.username;
      chunk.postCount = u.posts.length;
      return chunk;
    });
    res.send(usersInfos);
  },
  addFriend: async (req, res) => {
    const { user, friendId } = req.body;
    const friend = await User.findById(friendId);

    user.friends.push(friend.id);
    user.save();
    res.send({ msg: "Success" });
  },
  displayFriends: async (req, res) => {
    const { user } = req.body;
    User.findById(user._id)
      .populate("friends")
      .exec((err, { friends }) => {
        if (err) res.send({ message: "Error" });
        else {
          res.send(friends);
        }
      });
  },
  login: async (req, res) => {
    const { username, password } = req.body;
    const user = (await User.findOne({ username })) || null;
    if (user == null) res.status(400).send({ msg: "Invalid user" });
    bcrypt.compare(password, user.password, (err, same) => {
      if (same && !user.jwt) {
        user.jwt = jwt.sign(user.id, process.env.SECRET);
        user.save();
        res.send({ jwt: user.jwt });
      } else if (!same) {
        res.send({ error: "Invalid pass" });
      } else {
        res.send({ jwt: user.jwt });
      }
    });
  },
  logout: async (req, res) => {
    const { user } = req.body;
    user.jwt = "";
    user.save();
    res.send("ok");
  },
  delUser: (req, res) => {
    const { username } = req.body;
    User.findOneAndRemove({ username }).then((d) => d.save());
    res.send({ msg: "Ok" });
  },
};
