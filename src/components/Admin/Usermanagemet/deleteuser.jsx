function UserManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the API
    axios
      .get("https://ecom-backend-deploy.onrender.com/api/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://ecom-backend-deploy.onrender.com/api/users/${id}`)
      .then(() => {
        setUsers(users.filter((user) => user._id !== id));
      })
      .catch((error) => console.error("Error deleting user:", error));
  };

  return (
    <div className="user-management">
      <h2>Manage Users</h2>
      {/* Table of users */}
      <table>
        {/* Table headers */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
