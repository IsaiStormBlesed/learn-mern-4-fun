const express = require("express");
const router = express.Router();
const {
  getGoals,
  postGoal,
  editGoal,
  deleteGoal,
} = require("../controllers/goalControllers");

router.get("/", getGoals);

router.post("/", postGoal);

router.put("/:id", editGoal);

router.delete("/:id", deleteGoal);

module.exports = router;
