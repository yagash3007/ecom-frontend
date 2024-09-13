// userapi.js

import axios from "axios";

// Base URL for API
const API_BASE_URL = "https://ecom-backend-deploy.onrender.com/admin/product";

// Create an Axios instance with default configuration
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to get the token from local storage
const getAuthToken = () => localStorage.getItem("token");

// Define API functions with token handling
export const getProducts = async () => {
  const token = getAuthToken();
  const headers = token ? { Authorization: `${token}` } : {};
  return apiClient.get("/", { headers });
};

export const addProduct = async (product) => {
  const token = getAuthToken();
  const headers = token ? { Authorization: `${token}` } : {};

  try {
    const response = await apiClient.post("/", product, { headers });
    return response;
  } catch (error) {
    console.error(
      "Error adding product:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const updateProduct = async (id, product) => {
  const token = getAuthToken();
  const headers = token ? { Authorization: `${token}` } : {}; // No "Bearer"
  return apiClient.put(`/${id}`, product, { headers });
};

export const deleteProduct = async (id) => {
  const token = getAuthToken();
  const headers = token ? { Authorization: `${token}` } : {}; // No "Bearer"
  return apiClient.delete(`/${id}`, { headers });
};
