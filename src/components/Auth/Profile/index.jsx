import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import datas from "../../../data/products.json";
import BreadcrumbCom from "../../BreadcrumbCom";
import Layout from "../../Partials/Layout";
import IcoAdress from "./icons/IcoAdress";
import IcoCart from "./icons/IcoCart";
import IcoDashboard from "./icons/IcoDashboard";
import IcoLogout from "./icons/IcoLogout";
import IcoLove from "./icons/IcoLove";
import IcoPassword from "./icons/IcoPassword";
import IcoPayment from "./icons/IcoPayment";
import IcoPeople from "./icons/IcoPeople";
import IcoReviewHand from "./icons/IcoReviewHand";
import IcoSupport from "./icons/IcoSupport";
import AddressesTab from "./tabs/AddressesTab";
import Dashboard from "./tabs/Dashboard";
import OrderTab from "./tabs/OrderTab";
import PasswordTab from "./tabs/PasswordTab";
import Payment from "./tabs/Payment";
import ProfileTab from "./tabs/ProfileTab";
import ReviewTab from "./tabs/ReviewTab";
import SupportTab from "./tabs/SupportTab";
import WishlistTab from "./tabs/WishlistTab";

export default function Profile() {
  const [switchDashboard, setSwitchDashboard] = useState(false);
  const location = useLocation();
  const getHashContent = location.hash.split("#");
  const [active, setActive] = useState("dashboard");
  useEffect(() => {
    setActive(
      getHashContent && getHashContent.length > 1
        ? getHashContent[1]
        : "dashboard"
    );
  }, [getHashContent]);
  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem("token");

    // Optionally, you can also redirect the user to the login page or homepage
    window.location.href = "/login"; // Or any other page you want to redirect to
  };
  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="w-full profile-page-wrapper">
        <div className="mx-auto container-x">
          <div className="w-full my-10">
            <BreadcrumbCom
              paths={[
                { name: "home", path: "/" },
                { name: "profile", path: "/profile" },
              ]}
            />
            <div className="w-full px-10 bg-white py-9">
              {/* <div className="flex items-center justify-between w-full title-area">
                <h1 className="text-[22px] font-bold text-qblack">
                  Your Dashboard
                </h1>
                <div className="flex items-center space-x-3 switch-dashboard">
                  <p className="text-base text-qgray">Switch Dashboard</p>
                  <button
                    onClick={() => setSwitchDashboard(!switchDashboard)}
                    type="button"
                    className="w-[73px] h-[31px] border border-[#D9D9D9] rounded-full relative "
                  >
                    <div
                      className={`w-[23px] h-[23px] bg-qblack rounded-full absolute top-[3px] transition-all duration-300 ease-in-out ${
                        switchDashboard ? "left-[44px]" : "left-[4px]"
                      }`}
                    ></div>
                  </button>
                </div>
              </div> */}
              <div className="flex w-full mt-8 space-x-10 profile-wrapper">
                <div className="w-[236px] min-h-[600px] border-r border-[rgba(0, 0, 0, 0.1)]">
                  <div className="flex flex-col space-y-10">
                    {/* <div className="item group">
                      <Link to="/profile#dashboard">
                        <div className="flex items-center space-x-3 text-qgray hover:text-qblack">
                          <span>
                            <IcoDashboard />
                          </span>
                          <span className="text-base font-normal ">
                            Dashbaord
                          </span>
                        </div>
                      </Link>
                    </div> */}
                    {/* <div className="item group">
                      <Link to="/profile#profile">
                        <div className="flex items-center space-x-3 text-qgray hover:text-qblack">
                          <span>
                            <IcoPeople />
                          </span>
                          <span className="text-base font-normal ">
                            Parsonal Info
                          </span>
                        </div>
                      </Link>
                    </div> */}

                    {/* <div className="item group">
                      <Link to="/profile#payment">
                        <div className="flex items-center space-x-3 text-qgray hover:text-qblack">
                          <span>
                            <IcoPayment />
                          </span>
                          <span className="text-base font-normal ">
                            Payment Method
                          </span>
                        </div>
                      </Link>
                    </div> */}
                    {/* <div className="item group">
                      <Link to="/profile#order">
                        <div className="flex items-center space-x-3 text-qgray hover:text-qblack">
                          <span>
                            <IcoCart />
                          </span>
                          <span className="text-base font-normal ">Order</span>
                        </div>
                      </Link>
                    </div> */}
                    {/* <div className="item group">
                      <Link to="/profile#wishlist">
                        <div className="flex items-center space-x-3 text-qgray hover:text-qblack">
                          <span>
                            <IcoLove />
                          </span>
                          <span className="text-base font-normal ">
                            Wishlist
                          </span>
                        </div>
                      </Link>
                    </div> */}
                    {/* <div className="item group">
                      <Link to="/profile#address">
                        <div className="flex items-center space-x-3 text-qgray hover:text-qblack">
                          <span>
                            <IcoAdress />
                          </span>
                          <span className="text-base font-normal ">
                            Address
                          </span>
                        </div>
                      </Link>
                    </div> */}
                    {/* <div className="item group">
                      <Link to="/profile#review">
                        <div className="flex items-center space-x-3 text-qgray hover:text-qblack">
                          <span>
                            <IcoReviewHand />
                          </span>
                          <span className="text-base font-normal ">
                            Reviews
                          </span>
                        </div>
                      </Link>
                    </div> */}
                    {/* <div className="item group">
                      <Link to="/profile#password">
                        <div className="flex items-center space-x-3 text-qgray hover:text-qblack">
                          <span>
                            <IcoPassword />
                          </span>
                          <span className="text-base font-normal ">
                            Change Password
                          </span>
                        </div>
                      </Link>
                    </div> */}
                    {/* <div className="item group">
                      <Link to="/profile#support">
                        <div className="flex items-center space-x-3 text-qgray hover:text-qblack">
                          <span>
                            <IcoSupport />
                          </span>
                          <span className="text-base font-normal ">
                            Support Ticket
                          </span>
                        </div>
                      </Link>
                    </div> */}
                    <div className="item group">
                      <Link to="/profile#profile" onClick={handleLogout}>
                        <div className="flex items-center space-x-3 text-qgray hover:text-qblack">
                          <span>
                            <IcoLogout />
                          </span>
                          <span className="text-base font-normal ">
                            Logoout
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="w-full item-body dashboard-wrapper">
                    {active === "dashboard" ? (
                      <Dashboard />
                    ) : active === "profile" ? (
                      <>
                        <ProfileTab />
                      </>
                    ) : active === "payment" ? (
                      <>
                        <Payment />
                      </>
                    ) : active === "order" ? (
                      <>
                        <OrderTab />
                      </>
                    ) : active === "wishlist" ? (
                      <>
                        <WishlistTab />
                      </>
                    ) : active === "address" ? (
                      <>
                        <AddressesTab />
                      </>
                    ) : active === "password" ? (
                      <>
                        <PasswordTab />
                      </>
                    ) : active === "support" ? (
                      <>
                        <SupportTab />
                      </>
                    ) : active === "review" ? (
                      <>
                        <ReviewTab products={datas.products} />
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
