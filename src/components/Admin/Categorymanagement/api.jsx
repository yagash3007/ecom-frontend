// import axios from "axios";

// const BASEURL = "https://ecom-backend-deploy.onrender.com/admin";

// // Category APIs
// export const getCategories = () => axios.get(`${BASEURL}/categories`);
// export const addCategory = (category) =>
//   axios.post(`${BASEURL}/categories`, category);
// export const updateCategory = (id, category) =>
//   axios.put(`${BASEURL}/categories/${id}`, category);
// export const deleteCategory = (id) =>
//   axios.delete(`${BASEURL}/categories/${id}`);
import axios from "axios";

const BASEURL = "https://ecom-backend-deploy.onrender.com/admin";

// Helper function to get the token from local storage
const getToken = () => localStorage.getItem("token");

// Function to set up headers with token
const getAuthHeaders = () => {
  const token = getToken();
  return token ? { Authorization: `${token}` } : {};
};

export const getCategories = () =>
  axios.get(`${BASEURL}/category`, { headers: getAuthHeaders() });

export const addCategory = (category) =>
  axios.post(`${BASEURL}/category`, category, { headers: getAuthHeaders() });

export const updateCategory = (id, category) =>
  axios.put(`${BASEURL}/category/${id}`, category, {
    headers: getAuthHeaders(),
  });

export const deleteCategory = (id) =>
  axios.delete(`${BASEURL}/category/${id}`, { headers: getAuthHeaders() });
