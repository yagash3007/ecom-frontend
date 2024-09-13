const API_BASE_URL = "https://ecom-backend-deploy.onrender.com/wishlist";

export async function addToWishlist(itemId, quantity) {
  try {
    const response = await fetch(`${API_BASE_URL}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        itemId,
        quantity,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to add item to wishlist");
    }

    return await response.json();
  } catch (error) {
    console.error("Error adding item to wishlist:", error);
    throw error;
  }
}

export async function removeFromWishlist(itemId) {
  try {
    const response = await fetch(`${API_BASE_URL}/remove`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        itemId,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to remove item from wishlist");
    }

    return await response.json();
  } catch (error) {
    console.error("Error removing item from wishlist:", error);
    throw error;
  }
}
