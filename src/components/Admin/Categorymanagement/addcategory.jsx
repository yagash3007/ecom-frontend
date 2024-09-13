import React, { useState } from "react";
import Modal from "react-modal";
import { addCategory } from "./api";

Modal.setAppElement("#root");

Modal.setAppElement("#root");

function AddCategoryModal({ isOpen, onRequestClose, onCategoryAdded }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCategory = { name, description };
    try {
      const response = await addCategory(newCategory); // Use the addCategory function from the API service
      onCategoryAdded(response.data); // Pass the new category data from the server
      setName("");
      setDescription("");
      onRequestClose(); // Close the modal after submitting the form
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 flex items-center justify-center p-4 bg-gray-500 bg-opacity-75"
      overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75"
      contentLabel="Add Category"
    >
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">Add Category</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Category Name"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Add Category
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
    </Modal>
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  const handleCategoryAdded = (newCategory) => {
    setCategories([...categories, newCategory]);
  };

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Add Category
      </button>
      <AddCategoryModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onCategoryAdded={handleCategoryAdded}
      />
      <ul className="mt-4">
        {categories.map((category, index) => (
          <li key={index} className="py-2 border-b border-gray-300">
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
