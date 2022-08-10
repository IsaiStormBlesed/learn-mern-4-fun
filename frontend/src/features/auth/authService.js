import axios from "axios";

const API_URL =
  "https://5000-isaistormbl-learnmern4f-sgwukgw293d.ws-us59.gitpod.io/api/users/";

const register = async (userData) => {
  const response = await axios.post(API_URL, userData, {
    withCredentials: true,
  });

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const authService = {
  register,
};

export default authService;
