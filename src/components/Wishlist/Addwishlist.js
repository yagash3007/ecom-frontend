import React from "react";
import axios from "axios";

// const addToWishlist = async (itemId) => {
//   try {
//     const response = await fetch('https://ecom-backend-deploy.onrender.com/wishlist', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ itemId }), // Adjust payload according to your API's needs
//     });

//     if (!response.ok) {
//       throw new Error('Failed to add item to wishlist');
//     }

//     const result = await response.json();
//     console.log('Item added to wishlist:', result);
//   } catch (error) {
//     console.error('Error adding item to wishlist:', error);
//   }
// };

export const addToWishlist = async (itemId) => {
  try {
    const response = await axios.post(
      "https://ecom-backend-deploy.onrender.com/wishlist",
      {
        itemId,
      }
    ); // Adjust payload according to your API's needs
    console.log("Item added to wishlist:", response.data);
  } catch (error) {
    console.error("Error adding item to wishlist:", error);
  }
};
