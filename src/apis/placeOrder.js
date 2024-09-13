import axios from "axios";

const API_BASE_URL = "https://ecom-backend-deploy.onrender.com"; // Replace with your actual API URL

export const placeOrder = async (cartItems) => {
  console.log(cartItems);

  try {
    const response = await axios.post(`${API_BASE_URL}/order/`, cartItems);
    console.log("orderPlaced", response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching cart by user ID:", error);
    throw error;
  }
};
