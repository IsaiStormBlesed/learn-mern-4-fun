const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel.js");

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({});

  res.status(200).json(goals);
});

// @desc  New goal
// @route POST /api/goals
// @access Private
const postGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const newGoal = await Goal.create({
    text: req.body.text,
  });

  res.status(200).json(newGoal);
});

// @desc  Update a goal
// @route PUT /api/goals/:id
// @access Private
const editGoal = asyncHandler(async (req, res) => {
  const goalID = await Goal.findById(req.params.id);

  if (!goalID) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const goalUpdated = await Goal.findByIdAndUpdate(goalID, req.body, {
    new: true,
  });

  res.json(goalUpdated);
});

// @desc  Delete a goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goalID = await Goal.findById(req.params.id);

  if (!goalID) {
    res.status(400);
    throw new Error("Goal not found");
  }

  await goalID.remove();

  res.json({ id: req.params.id });
});

module.exports = {
  getGoals,
  postGoal,
  editGoal,
  deleteGoal,
};
