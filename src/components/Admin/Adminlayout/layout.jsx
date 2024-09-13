import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import { Outlet, useLocation, useParams } from "react-router-dom";
import CategoryManagement from "../Categorymanagement/categorymanagement";
import ProductManagement from "../Productmanagement/productmangement";
import UserManagement from "../Usermanagemet/usermanagement";

import OrderManagement from "../Ordermanagement/ordermanagement";
function AdminLayout() {
  const [path, setpath] = useState("");
  const location = useLocation();

  const getRoutes = () => {
    const urlPath = location.pathname;
    const result = urlPath.replace("/admin", "");
    return result;
  };

  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    if (token) {
    }
    return result;
  };

  useEffect(() => {
    const path = getRoutes();
    setpath(path);
    console.log(path);
  }, [location]);

  const Component = () => {
    console.log("inside fun");

    if (path === "/dashboard") {
      return <CategoryManagement />;
    } else if (path === "/orders") {
      return <OrderManagement />;
    } else if (path === "/category") {
      return <CategoryManagement />;
    } else if (path === "/products") {
      console.log("jasdoiajsdojasodjaosd");

      return <ProductManagement />;
    } else if (path === "/users") {
      return <UserManagement />;
    } else {
      return null;
    }
  };
  return (
    <div className="flex admin-layout">
      <Sidebar />
      <div className="flex-1 main-content">
        <Header />
        <div className="p-4 content-wrapper">{Component()}</div>
      </div>
    </div>
  );
}

export default AdminLayout;
