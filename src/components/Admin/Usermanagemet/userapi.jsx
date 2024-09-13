import axios from "axios";

// Function to get the token from local storage
const getAuthToken = () => localStorage.getItem("token");

const BASEURL = "https://ecom-backend-deploy.onrender.com/admin";

// Define API functions with token handling
export const getUsers = async () => {
  const token = getAuthToken();
  const headers = token ? { Authorization: `${token}` } : {};
  return axios.get(`${BASEURL}/users`, { headers });
};

export const addUser = async (user) => {
  const token = getAuthToken();
  const headers = token ? { Authorization: `${token}` } : {};
  console.log("Headers:", headers); // Log headers to verify token inclusion

  try {
    const response = await axios.post(`${BASEURL}/users`, user, { headers });
    console.log("API response:", response); // Log response from the API
    return response;
  } catch (error) {
    console.error(
      "Error in addUser API:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const updateUser = async (id, user) => {
  const token = getAuthToken();
  const headers = token ? { Authorization: `${token}` } : {};
  return axios.put(`${BASEURL}/users/${id}`, user, { headers });
};

export const deleteUser = async (id) => {
  const token = getAuthToken();
  const headers = token ? { Authorization: `${token}` } : {};
  return axios.delete(`${BASEURL}/users/${id}`, { headers });
};
