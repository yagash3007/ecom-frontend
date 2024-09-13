import React, { useState } from "react";
import { addUser } from "./userapi";
import Modal from "react-modal";

// Ensure to set the app element for accessibility
Modal.setAppElement("#root");

function AddUserForm({ isOpen, onRequestClose, onUserAdded }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting new user..."); // Log to verify the function is called

    const newUser = { name, email, role };
    setLoading(true); // Start loading state

    try {
      const response = await addUser(newUser); // Use addUser from api file
      console.log("User added:", response.data); // Log to check the response
      onUserAdded(response.data); // Notify the parent component of the new user
      setName("");
      setEmail("");
      setRole("");
      onRequestClose(); // Close the modal
    } catch (error) {
      console.error(
        "Error adding user:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 flex items-center justify-center p-4 bg-gray-500 bg-opacity-75"
      overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75"
      contentLabel="Add User"
    >
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Role"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            disabled={loading} // Disable button while loading
          >
            {loading ? "Adding..." : "Add User"}
          </button>
        </form>
        <button
          onClick={onRequestClose}
          className="w-full py-2 mt-4 font-bold text-gray-800 bg-gray-300 rounded-md hover:bg-gray-400"
        >
          Close
        </button>
      </div>
    </Modal>
  );
}

export default AddUserForm;
