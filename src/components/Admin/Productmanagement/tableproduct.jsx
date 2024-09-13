import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { IconButton, TextField, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";

function ProductTable({ products, onEdit, onDelete }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Define columns for the DataTable
  const columns = [
    {
      name: "ID",
      selector: (row) => row._id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description || "N/A",
    },
    {
      name: "Price",
      selector: (row) => `$${row.price.toFixed(2)}`,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category || "N/A",
    },
    {
      name: "Stock",
      selector: (row) => row.stock,
      sortable: true,
    },
    {
      name: "Image URLs",
      selector: (row) => row.imageUrls?.join(", ") || "N/A",
    },
    {
      name: "Actions",
      cell: (row) => (
        <>
          <IconButton
            color="primary"
            onClick={() => onEdit(row)}
            style={{ marginRight: 8 }}
          >
            <EditIcon />
          </IconButton>
          <IconButton color="secondary" onClick={() => onDelete(row._id)}>
            <DeleteIcon />
          </IconButton>
        </>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <TextField
        label="Search Products"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <DataTable
        columns={columns}
        data={filteredProducts}
        pagination
        highlightOnHover
        striped
        responsive
        noDataComponent="No products available"
      />
    </Box>
  );
}

// Define PropTypes for validation
ProductTable.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      price: PropTypes.number.isRequired,
      category: PropTypes.string,
      stock: PropTypes.number.isRequired,
      imageUrls: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ProductTable;
