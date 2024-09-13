import React, { useState, useEffect } from "react";
import { addProduct, updateProduct } from "./api";
import Modal from "react-modal";

Modal.setAppElement("#root");

function ProductForm({
  isOpen,
  onRequestClose,
  onProductAdded,
  productToEdit,
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(0);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    if (productToEdit) {
      setName(productToEdit.name || "");
      setDescription(productToEdit.description || "");
      setPrice(productToEdit.price || "");
      setCategory(productToEdit.category || "");
      setStock(productToEdit.stock || 0);
      setImageUrls(productToEdit.imageUrls || []);
    } else {
      resetForm();
    }
  }, [productToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      name,
      description,
      price: parseFloat(price), // Ensure price is a number
      category,
      stock: parseInt(stock, 10), // Ensure stock is an integer
      imageUrls,
    };

    console.log("Submitting product:", newProduct);

    if (productToEdit) {
      updateProduct(productToEdit._id, newProduct)
        .then((response) => {
          onProductAdded(response.data);
          resetForm();
          onRequestClose();
        })
        .catch((error) =>
          console.error(
            "Error updating product:",
            error.response?.data || error.message
          )
        );
    } else {
      addProduct(newProduct)
        .then((response) => {
          onProductAdded(response.data);
          resetForm();
          onRequestClose();
        })
        .catch((error) =>
          console.error(
            "Error adding product:",
            error.response?.data || error.message
          )
        );
    }
  };

  const resetForm = () => {
    setName("");
    setDescription("");
    setPrice("");
    setCategory("");
    setStock(0);
    setImageUrls([]);
  };

  return (
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
      <h2 className="mb-4 text-2xl font-bold">
        {productToEdit ? "Edit Product" : "Add Product"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          placeholder="Stock"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          value={imageUrls.join(", ")}
          onChange={(e) =>
            setImageUrls(e.target.value.split(", ").filter((url) => url))
          }
          placeholder="Image URLs (comma separated)"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="w-full py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          {productToEdit ? "Update Product" : "Add Product"}
        </button>
        <button
          type="button"
          onClick={onRequestClose}
          className="w-full py-2 font-bold text-gray-800 bg-gray-300 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
