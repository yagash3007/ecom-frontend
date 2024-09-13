import axios from "axios";

const API_BASE_URL = "https://ecom-backend-deploy.onrender.com"; // Replace with your actual API URL

export const getCartByUserId = async (userId, token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cart/${userId}`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    console.log("cartData", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching cart by user ID:", error);
    throw error;
  }
};

export const createCart = async (cartData, token) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/cart`, cartData, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating cart:", error);
    throw error;
  }
};

export const updateCartByUserId = async (updatedCartData, token) => {
  console.log(updatedCartData);

  try {
    const response = await axios.put(
      `${API_BASE_URL}/cart/updatecart/`,
      updatedCartData,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating cart:", error);
    throw error;
  }
};

export const deleteCart = async (userId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/cart/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error updating cart:", error);
    throw error;
  }
};
