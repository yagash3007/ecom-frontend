import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddUserForm from "./adduser";
import EditUserForm from "./edituser";
import UserTable from "./usertable";
import { getUsers, addUser, updateUser, deleteUser } from "./userapi";

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selected, setSelected] = useState([]);
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      fetchUsers(); // Refresh the user list after deletion
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleUserAdded = async (newUser) => {
    try {
      await addUser(newUser);
      fetchUsers(); // Refresh the user list after adding
      setIsAddUserModalOpen(false); // Close the modal
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const handleUserUpdated = async (updatedUser) => {
    try {
      await updateUser(updatedUser._id, updatedUser);
      fetchUsers(); // Refresh the user list after updating
      setSelectedUser(null); // Clear the form after update
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleOpenAddUserModal = () => setIsAddUserModalOpen(true);
  const handleCloseAddUserModal = () => setIsAddUserModalOpen(false);

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <Toolbar
          sx={[
            { pl: { sm: 2 }, pr: { xs: 1, sm: 1 } },
            selected.length > 0 && {
              bgcolor: (theme) => theme.palette.action.selected,
            },
          ]}
        >
          {selected.length > 0 ? (
            <Typography
              sx={{ flex: "1 1 100%" }}
              color="inherit"
              variant="subtitle1"
              component="div"
            >
              {selected.length} selected
            </Typography>
          ) : (
            <Typography
              sx={{ flex: "1 1 100%" }}
              variant="h6"
              id="tableTitle"
              component="div"
            >
              Manage Users
            </Typography>
          )}
          {selected.length === 0 && (
            <Tooltip title="Add User">
              <Button
                variant="contained"
                color="primary"
                onClick={handleOpenAddUserModal}
              >
                Add
              </Button>
            </Tooltip>
          )}
          {selected.length > 0 && (
            <Tooltip title="Delete">
              <IconButton onClick={() => selected.forEach(handleDelete)}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          )}
        </Toolbar>

        <UserTable
          users={users}
          onEdit={setSelectedUser}
          onDelete={handleDelete}
        />
      </Paper>

      <AddUserForm
        isOpen={isAddUserModalOpen}
        onRequestClose={handleCloseAddUserModal}
        onUserAdded={handleUserAdded}
      />

      {selectedUser && (
        <EditUserForm
          user={selectedUser}
          onUserUpdated={handleUserUpdated}
          isOpen={true}
          onRequestClose={() => setSelectedUser(null)}
        />
      )}
    </Box>
  );
}

export default UserManagement;
