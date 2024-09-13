import React, { useState } from "react";
import { updateProduct } from "./api";

function EditProductForm({ product, onProductUpdated }) {
  const [name, setName] = useState(product.name || "");
  const [description, setDescription] = useState(product.description || "");
  const [price, setPrice] = useState(product.price || "");
  const [category, setCategory] = useState(product.category || "");
  const [stock, setStock] = useState(product.stock || "");
  const [imageUrls, setImageUrls] = useState(product.imageUrls || []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedProduct = {
      ...product,
      name,
      description,
      price,
      category,
      stock,
      imageUrls,
    };

    try {
      const response = await updateProduct(product._id, updatedProduct);
      onProductUpdated(response.data);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "600px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <div style={{ marginBottom: "12px" }}>
        <label htmlFor="name" style={{ display: "block", marginBottom: "4px" }}>
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter product name"
          required
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>

      <div style={{ marginBottom: "12px" }}>
        <label
          htmlFor="description"
          style={{ display: "block", marginBottom: "4px" }}
        >
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter product description"
          required
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            minHeight: "100px",
          }}
        />
      </div>

      <div style={{ marginBottom: "12px" }}>
        <label
          htmlFor="price"
          style={{ display: "block", marginBottom: "4px" }}
        >
          Price
        </label>
        <input
          id="price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter product price"
          required
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>

      <div style={{ marginBottom: "12px" }}>
        <label
          htmlFor="category"
          style={{ display: "block", marginBottom: "4px" }}
        >
          Category
        </label>
        <input
          id="category"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter product category"
          required
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>

      <div style={{ marginBottom: "12px" }}>
        <label
          htmlFor="stock"
          style={{ display: "block", marginBottom: "4px" }}
        >
          Stock
        </label>
        <input
          id="stock"
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          placeholder="Enter product stock"
          required
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>

      <div style={{ marginBottom: "12px" }}>
        <label
          htmlFor="imageUrls"
          style={{ display: "block", marginBottom: "4px" }}
        >
          Image URLs
        </label>
        <input
          id="imageUrls"
          type="text"
          value={imageUrls.join(", ")}
          onChange={(e) =>
            setImageUrls(e.target.value.split(", ").map((url) => url.trim()))
          }
          placeholder="Enter image URLs (comma separated)"
          required
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>

      <button
        type="submit"
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "4px",
          backgroundColor: "#007bff",
          color: "#fff",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Update Product
      </button>
    </form>
  );
}

export default EditProductForm;
