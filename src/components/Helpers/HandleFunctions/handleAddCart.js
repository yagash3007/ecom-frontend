import {
  createCart,
  getCartByUserId,
  updateCartByUserId,
} from "../../../apis/cart_services";

export const handleAddToCart = async (datas) => {
  const userId = localStorage.getItem("UserID");
  const token = localStorage.getItem("token");

  if (!userId || !token) {
    alert("User not authenticated. Please log in.");
    return;
  }

  try {
    let cart;

    try {
      cart = await getCartByUserId(userId, token);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        cart = null;
      } else {
        throw error;
      }
    }

    if (cart) {
      if (!cart.items) {
        cart.items = [];
      }

      const existingItem = cart.items.find(
        (item) => item.product?._id.toString() === datas?._id.toString()
      );

      console.log("Prve", existingItem);

      if (existingItem) {
        alert("This product is already in your cart. Quantity updated.");
        existingItem.quantity += 1;
      } else {
        cart.items.push({ product: datas?._id, quantity: 1 });
      }

      await updateCartByUserId(cart, token);
      alert("Product added to cart!");
    } else {
      const newCart = {
        user: userId,
        items: [{ product: datas?._id, quantity: 1 }],
      };
      await createCart(newCart, token);
      alert("Cart created and product added!");
    }
  } catch (error) {
    console.error(
      "Error adding product to cart:",
      error.response ? error.response.data : error.message
    );
    alert("An error occurred while adding the product to the cart.");
  }
};
