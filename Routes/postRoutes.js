const express = require("express");
const Router = express.Router();
const jwtCheck = require("./jwtCheck");
const controllers = require("../Controllers/postController");

Router.use(jwtCheck);
Router.post("/new", controllers.addPost);
Router.get("/myposts", controllers.MyPosts);
Router.post("/delete", controllers.removePost);
Router.get("/friendposts", controllers.friendsPosts);
module.exports = Router;
