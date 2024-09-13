import React, { useState, useEffect } from "react";
import { updateCategory } from "./api";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";

function EditCategoryFormModal({ open, onClose, category, onCategoryUpdated }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (category) {
      setName(category.name);
      setDescription(category.description);
    }
  }, [category]); // Update state when the category changes

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedCategory = { name, description };
    updateCategory(category._id, updatedCategory)
      .then((response) => {
        onCategoryUpdated(response.data);
        onClose(); // Close the modal after successful update
      })
      .catch((error) => console.error("Error updating category:", error));
  };

  if (!category) return null; // Do not render the modal if category is null

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="edit-category-modal-title"
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 1,
        }}
      >
        <Typography id="edit-category-modal-title" variant="h6" component="h2">
          Edit Category
        </Typography>
        <TextField
          fullWidth
          label="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin="normal"
          multiline
          rows={4}
        />
        <Box mt={2}>
          <Button type="submit" variant="contained" color="primary">
            Update Category
          </Button>
          <Button
            onClick={onClose}
            variant="outlined"
            color="secondary"
            sx={{ ml: 2 }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default EditCategoryFormModal;
