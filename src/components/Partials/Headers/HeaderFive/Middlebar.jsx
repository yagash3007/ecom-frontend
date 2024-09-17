import Cart from "../../../Cart";
import Compair from "../../../Helpers/icons/Compair";
import ThinBag from "../../../Helpers/icons/ThinBag";
import ThinLove from "../../../Helpers/icons/ThinLove";
import ThinPeople from "../../../Helpers/icons/ThinPeople";
import { Link, useNavigate } from "react-router-dom";
import SearchBox from "../../../Helpers/SearchBox";

export default function Middlebar({ className }) {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile");
  };
  return (
    <div className={`w-full h-[86px] bg-white ${className}`}>
      <div className="h-full mx-auto container-x">
        <div className="relative h-full">
          <div className="flex items-center justify-between h-full">
            <div>
              <Link to="/">
                <img
                  width="152"
                  height="36"
                  src={`${
                    import.meta.env.VITE_PUBLIC_URL
                  }/assets/images/logo-5.svg`}
                  alt="logo"
                />
              </Link>
            </div>
            <div className="w-[517px] h-[44px]">
              <SearchBox className="search-com" />
            </div>
            <div className="flex items-center space-x-6">
              {/* <div className="relative compaire">
                <Link to="/products-compaire">
                  <span>
                    <Compair />
                  </span>
                </Link>
                <span className="w-[18px] h-[18px] rounded-full bg-qh5-bwhite absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] text-qblack">
                  2
                </span>
              </div> */}
              <div className="relative favorite">
                {/* <Link to="/wishlist">
                  <span>
                    <ThinLove />
                  </span>
                </Link> */}
                {/* <span className="w-[18px] h-[18px] rounded-full bg-qh5-bwhite absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] text-qblack">
                  1
                </span> */}
              </div>
              <div className="relative py-4 cart-wrapper ">
                <div className="relative cursor-pointer cart">
                  <Link to="/cart">
                    <span>
                      <ThinBag />
                    </span>
                  </Link>
                  {/* <span className="w-[18px] h-[18px] rounded-full bg-qh5-bwhite absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] text-qblack">
                    15
                  </span> */}
                </div>
                {/* <div className="fixed top-0 left-0 z-40 w-full h-full"></div> */}
                {/* hidden group-hover:block" */}
                <Cart className="absolute -right-[45px] top-11 z-50 hidden group-hover:block" />
              </div>
              <div>
                <span onClick={handleProfileClick} className="cursor-pointer">
                  <ThinPeople />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
