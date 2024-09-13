import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { updateUser } from "./userapi"; // Make sure the path is correct

function EditUserForm({ user, onUserUpdated, isOpen, onRequestClose }) {
  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");
  const [role, setRole] = useState(user.role || "");
  const [loading, setLoading] = useState(false); // Add loading state
  const [error, setError] = useState(""); // Add error state

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
      setRole(user.role || "");
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedUser = { name, email, role };
    setLoading(true); // Start loading state
    setError(""); // Clear previous errors

    try {
      const response = await updateUser(user._id, updatedUser);
      onUserUpdated(response.data); // Update the user list in the parent component
      onRequestClose(); // Close the modal
    } catch (error) {
      console.error("Error updating user:", error);
      setError("Failed to update user. Please try again."); // Set error message
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
      contentLabel="Edit User"
    >
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">Edit User</h2>
        {error && <p className="text-red-500">{error}</p>}{" "}
        {/* Display error message */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Role"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onRequestClose}
              className="px-4 py-2 font-bold text-gray-800 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              {loading ? "Updating..." : "Update User"}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default EditUserForm;
