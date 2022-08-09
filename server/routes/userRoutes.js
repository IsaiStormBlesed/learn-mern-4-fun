const express = require("express");
const router = express.Router();
const {
  registerUser,
  authenticateUser,
  getMe,
} = require("../controllers/userControllers.js");

router.post("/", registerUser);
router.post("/login", authenticateUser);
router.get("/me", getMe);

module.exports = router;
