const express = require("express");
const router = express.Router();
const {
  registerUser,
  authenticateUser,
  getMe,
} = require("../controllers/userControllers.js");
const { protect } = require("../middleware/authMiddleware.js");

router.post("/", registerUser);
router.post("/login", authenticateUser);
router.get("/me", protect, getMe);

module.exports = router;
