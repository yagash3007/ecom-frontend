import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    console.log("logout sucessfully");
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow admin-header">
      <h1 className="items-center justify-between text-2xl font-bold text-center">
        Shopo Admin
      </h1>
      <div className="header-actions">
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-white bg-red-500 rounded"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
