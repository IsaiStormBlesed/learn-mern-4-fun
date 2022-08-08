const express = require("express");
const router = express.Router();
const {
  getGoals,
  postGoal,
  editGoal,
  deleteGoal,
} = require("../controllers/goalControllers");

router.route("/").get(getGoals).post(postGoal);
router.route("/:id").put(editGoal).delete(deleteGoal);

module.exports = router;
