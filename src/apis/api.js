import axios from "axios";
import Login from "../components/Auth/Login";
const baseurl = "https://ecom-backend-deploy.onrender.com";

export async function loginUser(email, password) {
  try {
    const response = await axios.post(`${baseurl}/login`, {
      email,
      password,
    });
    if (response.status === 200) {
      const { token, role, navigate } = response.data.data;
      localStorage.setItem("authToken", token);
      localStorage.setItem("userRole", navigate);
      console.log("Login successful:", response.data.message);
      const login_data = response.data.data;
      return login_data;
    } else {
      console.error("Unexpected response:", response.status, response.data);
    }
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      console.error("Error:", error.response.data.message);
    } else {
      console.error("Error logging in:", error.message);
    }
  }
}
export async function signupUser(
  firstname,
  lastname,
  email,
  password,
  phoneno,
  name
) {
  try {
    const data = {
      firstname: firstname,
      lastname: lastname,
      name: firstname + " " + lastname,
      email: email,
      password: password,
      phoneno: phoneno,
    };
    console.log(data);
    const response = await axios.post(`${baseurl}/users/signup`, data);

    if (response.status === 201) {
      // Handle successful signup
      console.log("User created successfully:", response.data.message);
      // Redirect or update UI after successful signup
    } else {
      // Handle unexpected status codes
      console.error("Unexpected response:", response.status, response.data);
    }
  } catch (error) {
    // Handle errors, such as validation failures or server errors
    if (error.response && error.response.data && error.response.data.message) {
      console.error("Error:", error.response.data.message);
    } else {
      console.error("Error signing up:", error.message);
    }
  }
}

//category post
// export const createCategory = async (categoryData) => {
//   try {
//     const response = await fetch(`${baseurl}/category`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(categoryData),
//     });
//     if (!response.ok) {
//       throw new Error('Failed to create category');
//     }
//     return await response.json();
//   } catch (error) {
//     console.error('Error creating category:', error);
//     throw error;
//   }
// };

// Get all categories
export const getAllCategories = async () => {
  try {
    const response = await axios.get(`${baseurl}/category`);
    if (!response) {
      throw new Error("Failed to fetch categories");
    }
    console.log(response.data); // Log the data property
    return response.data; // Return the data property directly
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
export const getCategoryById = async (id) => {
  try {
    const response = await axios.get(`${baseurl}/product/by_category/${id}`);
    if (!response) {
      throw new Error("Failed to fetch category");
    }
    return await response.data;
  } catch (error) {
    console.error("Error fetching category by ID:", error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${baseurl}/product/${id}`);
    return await response.data;
  } catch (error) {
    console.error("Error fetching category by ID:", error);
    throw error;
  }
};
