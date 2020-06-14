require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const userRouter = require("./Routes/userRoute");
const PostRouter = require("./Routes/postRoutes");
const cors = require("cors");

require("./Models/connectDb");
app.use(express.json());
app.use(express.static(path.join(__dirname, "/build"))); //Final react Build goes here
app.use(cors());
app.use("/post", PostRouter);
app.use(userRouter);
app.listen(process.env.PORT, () =>
  console.log("Listening on " + process.env.PORT)
);
