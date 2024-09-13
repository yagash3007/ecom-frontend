import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  TablePagination,
  Checkbox,
  IconButton,
  Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function CategoryTable({ categories, onEdit, onDelete }) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("name");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sortedCategories = [...categories].sort((a, b) => {
    if (order === "asc") {
      return a[orderBy] < b[orderBy] ? -1 : 1;
    } else {
      return a[orderBy] > b[orderBy] ? -1 : 1;
    }
  });

  const visibleCategories = sortedCategories.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox color="primary" />
            </TableCell>
            <TableCell sortDirection={orderBy === "name" ? order : false}>
              <TableSortLabel
                active={orderBy === "name"}
                direction={orderBy === "name" ? order : "asc"}
                onClick={() => handleRequestSort("name")}
              >
                Name
              </TableSortLabel>
            </TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {visibleCategories.map((category) => (
            <TableRow key={category._id}>
              <TableCell padding="checkbox">
                <Checkbox color="primary" />
              </TableCell>
              <TableCell>{category.name}</TableCell>
              <TableCell>{category.description}</TableCell>
              <TableCell>
                <IconButton onClick={() => onEdit(category)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => onDelete(category._id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
          {categories.length === 0 && (
            <TableRow>
              <TableCell colSpan={4}>No categories found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={categories.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}

export default CategoryTable;
