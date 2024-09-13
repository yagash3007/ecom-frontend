import React, { useState, useEffect } from "react";
import { getProducts, addProduct, updateProduct, deleteProduct } from "./api";
import ProductForm from "./addproduct";
import ProductTable from "./tableproduct";
import EditProductForm from "./editproduct";
import Modal from "react-modal";

Modal.setAppElement("#root");

function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleDelete = async (id) => {
    console.log("Deleting product with ID:", id);
    try {
      await deleteProduct(id);
      fetchProducts(); // Refresh the product list after deletion
    } catch (error) {
      console.error("Error deleting product:", error.response || error.message);
    }
  };

  const handleProductAdded = (newProduct) => {
    setProducts([...products, newProduct]);
    closeModal();
  };

  const handleProductUpdated = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product._id === updatedProduct._id ? updatedProduct : product
      )
    );
    closeModal();
  };

  const openModal = (product = null, editMode = false) => {
    setSelectedProduct(product);
    setIsEditMode(editMode);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setIsEditMode(false);
  };

  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-bold">Manage Products</h2>
      <button
        onClick={() => openModal(null, false)}
        className="px-4 py-2 mb-4 text-white bg-green-500 rounded"
      >
        Add New Product
      </button>

      <ProductTable
        products={products}
        onEdit={(product) => openModal(product, true)}
        onDelete={handleDelete}
      />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75"
        contentLabel={isEditMode ? "Edit Product" : "Add Product"}
      >
        <ProductForm
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          onProductAdded={handleProductAdded}
          productToEdit={isEditMode ? selectedProduct : null}
        />
      </Modal>
    </div>
  );
}

export default ProductManagement;
