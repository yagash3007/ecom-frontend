import { useNavigate } from "react-router-dom";
export const NavbarCategory = ({ name, id }) => {
  const navigate = useNavigate();
  const handleNavigation = (category_id) => {
    // Navigate to the route dynamically using the key
    navigate(`/all-products/${category_id}`);
  };
  return (
    <li className="category-item">
      <div onClick={() => handleNavigation(id)}>
        <div className="flex items-center justify-between h-10 px-5 transition-all duration-300 ease-in-out bg-white cursor-pointer hover:bg-qh2-green text-qblack hover:text-white">
          <div className="flex items-center space-x-6">
            <span className="text-xs font-400">{name}</span>
          </div>

          <div>
            <span>
              <svg
                className="fill-current"
                width="6"
                height="9"
                viewBox="0 0 6 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.49805"
                  y="0.818359"
                  width="5.78538"
                  height="1.28564"
                  transform="rotate(45 1.49805 0.818359)"
                />
                <rect
                  x="5.58984"
                  y="4.90918"
                  width="5.78538"
                  height="1.28564"
                  transform="rotate(135 5.58984 4.90918)"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};
