const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel.js");
const User = require("../models/userModel.js");

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });

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
    user: req.user.id,
  });

  res.status(200).json(newGoal);
});

// @desc  Update a goal
// @route PUT /api/goals/:id
// @access Private
const editGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (user.id !== goal.user.toString()) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const goalUpdated = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.json(goalUpdated);
});

// @desc  Delete a goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (user.id !== goal.user.toString()) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await goal.remove();

  res.json({ id: req.params.id });
});

module.exports = {
  getGoals,
  postGoal,
  editGoal,
  deleteGoal,
};
