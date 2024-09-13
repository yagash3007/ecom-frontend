import React from "react";
import { Link } from "react-router-dom";

function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <ul>
          <li>
            <Link to="/admin/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/products">Products</Link>
          </li>
          <li>
            <Link to="/admin/users">Users</Link>
          </li>
          <li>
            <Link to="/admin/orders">oorders</Link>
          </li>
          <li>
            <Link to="/admin/categories">Categories</Link>
          </li>
        </ul>
      </aside>
      <div className="main-content">
        <header className="admin-header">
          <h1>Admin Dashboard</h1>
        </header>
        <div className="content-area">{children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;
