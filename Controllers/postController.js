const User = require("../Models/User");

module.exports = {
  /**
   * @Post /post/new
   * jwtheck On
   *
   */
  addPost: async (req, res) => {
    const { user, post } = req.body;
    post.Title && post.Body
      ? user.posts.push(post)
      : res.send({ error: "invalid post data" });
    user
      .save()
      .then(() => res.send({ msg: "success" }))
      .catch(() => res.status(401).send({ error: "something went wrong" }));
  },
  /**
   * @post /post/myposts
   * jwtCheck on
   */
  MyPosts: async (req, res) => {
    const { posts } = req.body.user;
    res.send(posts);
  },
  removePost: (req, res) => {
    const { user, postId } = req.body;
    user.removePost(postId);
    res.send({ msg: "Success" });
  },
  /**
   * @Post /post/friendposts
   * jwtCheck on
   */
  friendsPosts: async (req, res) => {
    const { user } = req.body;
    User.findById(user._id)
      .populate("friends")
      .exec((err, { friends }) => {
        if (err) res.send({ message: "error" });

        res.send(friends.map((friend) => {
return {posts:friend.posts,postedBy:friend.username};
}));
      });
  },
};
