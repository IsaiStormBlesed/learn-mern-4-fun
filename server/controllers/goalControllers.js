const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel.js");

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ some: "GET goals" });
});

// @desc  New goal
// @route POST /api/goals
// @access Private
const postGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  res.status(200).json({ some: "POST goals" });
});

// @desc  Update a goal
// @route PUT /api/goals/:id
// @access Private
const editGoal = asyncHandler(async (req, res) => {
  res.json({ some: `PUT goal number ${req.params.id}` });
});

// @desc  Delete a goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.json({ some: `DELETE goal number ${req.params.id}` });
});

module.exports = {
  getGoals,
  postGoal,
  editGoal,
  deleteGoal,
};
