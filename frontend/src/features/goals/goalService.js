import axios from "axios";

const API_URL =
  "https://5000-isaistormbl-learnmern4f-njb1r0t4jp8.ws-us60.gitpod.io/api/goals/";

//Create goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
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
    withCredentials: true,
  };
  const response = await axios.get(API_URL, config);
  return response.data;
};

const goalService = { createGoal, fetchGoals };

export default goalService;
