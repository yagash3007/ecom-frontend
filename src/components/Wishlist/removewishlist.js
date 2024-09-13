import axios from "axios";
// const removeFromWishlist = async (itemId) => {
//     try {
//       const response = await fetch('https://ecom-backend-deploy.onrender.com/wishlist/remove', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ itemId }), // Adjust payload according to your API's needs
//       });

//       if (!response.ok) {
//         throw new Error('Failed to remove item from wishlist');
//       }

//       const result = await response.json();
//       console.log('Item removed from wishlist:', result);
//     } catch (error) {
//       console.error('Error removing item from wishlist:', error);
//     }
//   };
export const removeFromWishlist = async (itemId) => {
  try {
    const response = await axios.post(
      "https://ecom-backend-deploy.onrender.com/wishlist/remove",
      {
        itemId,
      }
    ); // Adjust payload according to your API's needs
    console.log("Item removed from wishlist:", response.data);
  } catch (error) {
    console.error("Error removing item from wishlist:", error);
  }
};
