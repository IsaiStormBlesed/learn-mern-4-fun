const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel.js");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //Get token from header
      token = req.headers.authorization.split(" ")[1];

      const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);

      //Get user from the token
      req.user = await User.findById(verifiedToken.id).select("-password");

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("You are not authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("You are not authorized");
  }
});

module.exports = { protect };
