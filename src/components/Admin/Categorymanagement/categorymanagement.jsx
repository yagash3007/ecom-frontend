import React, { useState, useEffect } from "react";
import {
  getCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} from "./api";
import AddCategoryForm from "./addcategory";
import EditCategoryFormModal from "./editcategory"; // Import the modal component
import CategoryTable from "./categorytable";

function CategoryManagement() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getCategories()
      .then((response) => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      deleteCategory(id)
        .then(() => {
          setCategories(categories.filter((category) => category._id !== id));
        })
        .catch((error) => {
          console.error("Error deleting category:", error);
          setError("Failed to delete category.");
        });
    }
  };

  const handleCategoryAdded = (newCategory) => {
    addCategory(newCategory)
      .then((response) => {
        setCategories([...categories, response.data]);
      })
      .catch((error) => {
        console.error("Error adding category:", error);
        setError("Failed to add category.");
      });
  };

  const handleCategoryUpdated = (updatedCategory) => {
    updateCategory(updatedCategory._id, updatedCategory)
      .then((response) => {
        setCategories(
          categories.map((category) =>
            category._id === updatedCategory._id ? response.data : category
          )
        );
        setSelectedCategory(null); // Clear the selection after update
        setIsModalOpen(false); // Close the modal after update
      })
      .catch((error) => {
        console.error("Error updating category:", error);
        setError("Failed to update category.");
      });
  };

  const handleEditClick = (category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  return (
    <div className="category-management">
      <h2>Manage Categories</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <AddCategoryForm onCategoryAdded={handleCategoryAdded} />

      <CategoryTable
        categories={categories}
        onEdit={handleEditClick} // Pass the edit handler to the table
        onDelete={handleDelete}
      />

      <EditCategoryFormModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        category={selectedCategory}
        onCategoryUpdated={handleCategoryUpdated}
      />
    </div>
  );
}

export default CategoryManagement;
