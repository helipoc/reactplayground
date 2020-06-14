const express = require("express");
const Router = express.Router();
const controller = require("../Controllers/userController");
const jwtCheck = require("./jwtCheck");

Router.get("/", (req, res) => {
  res.send("Api Server");
});

Router.post("/user/new", controller.addUser);
Router.get("/users", jwtCheck, controller.showUsers).delete(
  "/users",
  controller.delUser
);
Router.post("/user/newfriend", jwtCheck, controller.addFriend);
Router.post("/friends", jwtCheck, controller.displayFriends);
Router.post("/login", controller.login);
Router.post("/logout", jwtCheck, controller.logout);

Router.use((req, res) => {
  res.redirect("/");
});

module.exports = Router;
