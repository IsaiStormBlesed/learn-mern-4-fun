const express = require("express");
const router = express.Router();
const {
  getGoals,
  postGoal,
  editGoal,
  deleteGoal,
} = require("../controllers/goalControllers");
const { protect } = require("../middleware/authMiddleware.js");

router.route("/").get(protect, getGoals).post(protect, postGoal);
router.route("/:id").put(protect, editGoal).delete(protect, deleteGoal);

module.exports = router;
