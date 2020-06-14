const _jwt = require("jsonwebtoken");
const User = require("../Models/User");

const jwtCheck = async (req, res, next) => {
  const jwt = req.headers.authorization.split(" ")[1];
  try {
    const uid = _jwt.verify(jwt, process.env.SECRET);
    const u = await User.findById(uid);
    if (u.jwt == jwt) {
      req.body.user = u;
      next();
    } else {
      res.send({ msg: "Expired Token" });
    }
  } catch (e) {
    res.send({ msg: "invalid jwt" });
  }
};

module.exports = jwtCheck;
