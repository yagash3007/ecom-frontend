import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen p-4 text-white bg-gray-800 sidebar">
      <div className="mb-8 sidebar-header">
        <h2 className="text-2xl font-semibold">Admin Panel</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li className="mb-4">
            <NavLink
              to="/admin/users"
              className={({ isActive }) =>
                isActive
                  ? "block px-4 py-2 rounded bg-gray-700"
                  : "block px-4 py-2 rounded hover:bg-gray-700"
              }
            >
              Users
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="/admin/products"
              className={({ isActive }) =>
                isActive
                  ? "block px-4 py-2 rounded bg-gray-700"
                  : "block px-4 py-2 rounded hover:bg-gray-700"
              }
            >
              Products
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="/admin/orders"
              className={({ isActive }) =>
                isActive
                  ? "block px-4 py-2 rounded bg-gray-700"
                  : "block px-4 py-2 rounded hover:bg-gray-700"
              }
            >
              Orders
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="/admin/category"
              className={({ isActive }) =>
                isActive
                  ? "block px-4 py-2 rounded bg-gray-700"
                  : "block px-4 py-2 rounded hover:bg-gray-700"
              }
            >
              Categories
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
