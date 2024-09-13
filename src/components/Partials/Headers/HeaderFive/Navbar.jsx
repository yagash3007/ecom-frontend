import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Arrow from "../../../Helpers/icons/Arrow";
import { getAllCategories } from "../../../../apis/api";
import { NavbarCategory } from "./NavBarCategory";
import axios from "axios";
import "../../../../index.css";
import { useNavigate } from "react-router-dom/dist";
export default function Navbar({ className }) {
  const [categoryToggle, setToggle] = useState(false);
  const [elementsSize, setSize] = useState("0px");
  const [categories, setCategories] = useState([]);
  // const getItems = document.querySelectorAll(`.categories-list li`).length;
  // if (categoryToggle && getItems > 0) {
  //   setSize(`${40 * getItems}px`);
  // }

  const navigate = useNavigate();
  const handler = () => {
    setToggle(!categoryToggle);
  };

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(token, "Token retrieved from localStorage");

        if (token) {
          const decodedToken = JSON.parse(atob(token.split(".")[1]));
          console.log(decodedToken, "Decoded Token");
          const userId = decodedToken.userId;
          console.log(userId, "User ID from token");

          const response = await axios.get(
            `https://ecom-backend-deploy.onrender.com/users/${userId}`,
            {
              headers: {
                Authorization: `${token}`,
              },
            }
          );

          console.log(response.data, "Response Data");
          setUserData(response.data);
        } else {
          console.error("No token found");
        }
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchUserData();
  }, []);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        setCategories(data);
        console.log(data, "Data used to set categories");
      } catch (error) {
        setError("An error occurred while fetching categories.");
        console.error("Fetch categories error:", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    console.log(categories, "Updated categories state");
  }, []);

  categories.map((category) => {
    console.log(category.name);
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (categoryToggle) {
      const getItems = 10;
      console.log(getItems);

      if (categoryToggle && getItems > 0) {
        setSize(`${42 * getItems}px`);
      }
    } else {
      setSize(`0px`);
    }
  }, [categoryToggle]);

  return (
    <div
      className={`nav-widget-wrapper w-full bg-qh5-bwhite h-[60px] relative z-30  ${
        className || ""
      }`}
    >
      <div className="h-full mx-auto container-x">
        <div className="relative w-full h-full">
          <div className="flex items-center justify-between w-full h-full">
            <div className="flex items-center space-x-3 category-and-nav xl:space-x-7">
              <div className="category w-[270px] h-[53px] bg-white px-5 rounded-t-md mt-[6px] relative">
                <button
                  onClick={handler}
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
                    onClick={handler}
                  ></div>
                )}
                <div
                  className="category-dropdown w-full absolute left-0 top-[53px] overflow-hidden"
                  style={{ height: `${elementsSize} ` }}
                >
                  <ul className="categories-list">
                    {categories.map((category) => (
                      <NavbarCategory id={category._id} name={category.name} />
                    ))}
                  </ul>
                </div>
              </div>
              <div className="nav">
                <ul className="flex space-x-5 nav-wrapper xl:space-x-10">
                  <li className="relative">
                    <Link to="/">
                      <span className="flex items-center text-sm cursor-pointer text-qblack font-600 ">
                        <span>Home</span>
                      </span>
                    </Link>
                    <div className="sub-menu w-[220px] absolute left-0 top-[60px]">
                      <div
                        className="flex items-center justify-between w-full bg-white "
                        style={{
                          boxShadow: "0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                        }}
                      ></div>
                    </div>
                  </li>

                  <li>
                    <Link to="/contact">
                      <span className="flex items-center text-sm cursor-pointer text-qblack font-600 ">
                        <span>Contact</span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div
                className="become-seller-btn h-[40px] cursor-pointer"
                onClick={handleToggleMenu}
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
              {isMenuOpen && (
                <div className="absolute right-0 px-10 py-4 mt-2 bg-white border rounded shadow-lg top-full">
                  <button
                    onClick={() => {
                      localStorage.removeItem("token");
                      localStorage.removeItem("UserID");
                      navigate("/login");
                    }}
                    className="w-full text-black hover:text-black font-500 focus:outline-none"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
