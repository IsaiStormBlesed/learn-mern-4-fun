// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = (req, res) => {
  res.json({ some: "GET goals" });
};

// @desc  New goal
// @route POST /api/goals
// @access Private
const postGoal = (req, res) => {
  res.json({ some: "POST goals" });
};

// @desc  Update a goal
// @route PUT /api/goals/:id
// @access Private
const editGoal = (req, res) => {
  res.json({ some: `PUT goal number ${req.params.id}` });
};

// @desc  Delete a goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = (req, res) => {
  res.json({ some: `DELETE goal number ${req.params.id}` });
};

module.exports = {
  getGoals,
  postGoal,
  editGoal,
  deleteGoal,
};
