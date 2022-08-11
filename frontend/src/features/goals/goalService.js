import axios from "axios";

const API_URL = "/api/goals/";

//Create goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, goalData, config);
  return response.data;
};

//Fetch goals
const fetchGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);
  return response.data;
};

//Delete Goal
const deleteGoal = async (goalID, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + goalID, config);
  return response.data;
};

const goalService = { createGoal, fetchGoals, deleteGoal };

export default goalService;
