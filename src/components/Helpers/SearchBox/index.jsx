import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SearchBox({ className, type }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const navigate = useNavigate();

  // Fetch categories when the component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://ecom-backend-deploy.onrender.com/category"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Filter categories based on search term
  useEffect(() => {
    if (searchTerm) {
      setFilteredCategories(
        categories.filter((category) =>
          category.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredCategories([]);
    }
  }, [searchTerm, categories]);

  // Handle input changes
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle category click to navigate to products by category
  const handleCategoryClick = (categoryId) => {
    navigate(`/all-products/${categoryId}`);
  };

  return (
    <div
      className={`w-full h-full flex items-center border border-qgray-border bg-white ${
        className || ""
      }`}
    >
      <div className="flex-1 h-full">
        <form onSubmit={(e) => e.preventDefault()} className="flex h-full">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full search-input"
            placeholder="Search Category..."
          />
          <button
            type="button"
            className={`w-[93px] h-full text-sm font-600 ${
              type === 3 ? "bg-qh3-blue text-white" : "search-btn"
            }`}
          >
            Search
          </button>
        </form>
      </div>
      <div className="w-[1px] h-[22px] bg-qgray-border"></div>
      {filteredCategories.length > 0 && (
        <div
          className="absolute z-50 bg-white border border-gray-200 shadow-lg category-results"
          style={{ top: "100%", left: 0, right: 0 }}
        >
          <ul>
            {filteredCategories.map((category) => (
              <li
                key={category._id}
                className="p-2 cursor-pointer category-item hover:bg-gray-100"
                onClick={() => handleCategoryClick(category._id)}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
