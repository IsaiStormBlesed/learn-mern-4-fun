const asyncHandler = require("express-async-handler");

// @desc Register User
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  res.json({ msg: "User registered" });
});

// @desc Authenticate user
// @route POST /api/users/login
// @access Public
const authenticateUser = asyncHandler(async (req, res) => {
  res.json({ msg: "User authenticated" });
});

// @desc Get user data
// @route GET /api/users/me
// @access Public
const getMe = asyncHandler(async (req, res) => {
  res.json({ msg: "My data" });
});

module.exports = {
  registerUser,
  authenticateUser,
  getMe,
};
