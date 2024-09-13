import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Arrow from "../../../Helpers/icons/Arrow";
import { getAllCategories } from "../../../../apis/api";
import { NavbarCategory } from "./NavBarCategory";
import axios from "axios";
import "../../../../index.css";

export default function Navbar({ className }) {
  const [categoryToggle, setToggle] = useState(false);
  const [elementsSize, setSize] = useState("0px");
  const [categories, setCategories] = useState([]);
  const [userData, setUserData] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const toggleCategoryMenu = () => {
    setToggle(!categoryToggle);
  };

  const toggleUserMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("UserID");
    setUserData(null);
    setIsLoggedIn(false);
    navigate("/login");
  };

  useEffect(() => {
    const checkAuthentication = () => {
      const token = localStorage.getItem("token");
      if (token) {
        const decodedToken = JSON.parse(atob(token.split(".")[1]));
        const userId = decodedToken.userId;
        axios
          .get(`https://ecom-backend-deploy.onrender.com/users/${userId}`, {
            headers: { Authorization: `${token}` },
          })
          .then((response) => {
            setUserData(response.data);
            setIsLoggedIn(true);
          })
          .catch(() => {
            setIsLoggedIn(false);
          });
      } else {
        setIsLoggedIn(false);
      }
    };

    checkAuthentication();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        setCategories(data);
      } catch (error) {
        console.error("Fetch categories error:", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (categoryToggle) {
      const getItems = categories.length;
      if (getItems > 0) {
        setSize(`${42 * getItems}px`);
      }
    } else {
      setSize(`0px`);
    }
  }, [categoryToggle, categories]);

  return (
    <div
      className={`nav-widget-wrapper w-full bg-qh5-bwhite h-[60px] relative z-30 ${
        className || ""
      }`}
    >
      <div className="h-full mx-auto container-x">
        <div className="relative w-full h-full">
          <div className="flex items-center justify-between w-full h-full">
            <div className="flex items-center space-x-3 category-and-nav xl:space-x-7">
              <div className="category w-[270px] h-[53px] bg-white px-5 rounded-t-md mt-[6px] relative">
                <button
                  onClick={toggleCategoryMenu}
                  type="button"
                  className="flex items-center justify-between w-full h-full"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-qblack">
                      <svg
                        className="fill-current"
                        width="14"
                        height="9"
                        viewBox="0 0 14 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="14" height="1" />
                        <rect y="8" width="14" height="1" />
                        <rect y="4" width="10" height="1" />
                      </svg>
                    </span>
                    <span className="text-sm font-600 text-qblacktext">
                      All Categories
                    </span>
                  </div>
                  <div>
                    <Arrow
                      width="5.78538"
                      height="1.28564"
                      className="fill-current text-qblacktext"
                    />
                  </div>
                </button>
                {categoryToggle && (
                  <div
                    className="fixed top-0 left-0 w-full h-full -z-10"
                    onClick={toggleCategoryMenu}
                  ></div>
                )}
                <div
                  className="category-dropdown w-full absolute left-0 top-[53px] overflow-hidden"
                  style={{ height: `${elementsSize}` }}
                >
                  <ul className="categories-list">
                    {categories.map((category) => (
                      <NavbarCategory
                        key={category._id}
                        id={category._id}
                        name={category.name}
                      />
                    ))}
                  </ul>
                </div>
              </div>
              <div className="nav">
                <ul className="flex space-x-5 nav-wrapper xl:space-x-10">
                  <li className="relative">
                    <Link to="/">
                      <span className="flex items-center text-sm cursor-pointer text-qblack font-600">
                        <span>Home</span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <span className="flex items-center text-sm cursor-pointer text-qblack font-600">
                        <span>Contact</span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              {isLoggedIn && (
                <div
                  className="become-seller-btn h-[40px] cursor-pointer"
                  onClick={toggleUserMenu}
                >
                  <div className="flex items-center justify-center h-full">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">
                        Welcome Back!{" "}
                        <span className="font-600">{userData?.name}</span>
                      </span>
                    </div>
                  </div>
                </div>
              )}
              {isMenuOpen && isLoggedIn && (
                <div className="absolute right-0 px-10 py-4 mt-2 bg-white border rounded shadow-lg top-full">
                  <button
                    onClick={handleLogout}
                    className="w-full text-black hover:text-black font-500 focus:outline-none"
                  >
                    Logout
                  </button>
                </div>
              )}
              {!isLoggedIn && (
                <button
                  onClick={handleLogin}
                  className="login-btn h-[40px] px-4 py-2 bg-black-500 text-white rounded hover:bg-black-600 focus:outline-none"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
