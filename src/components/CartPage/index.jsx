import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BreadcrumbCom from "../BreadcrumbCom";
import EmptyCardError from "../EmptyCardError";
import InputCom from "../Helpers/InputCom";
import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";
import ProductsTable from "./ProductsTable";
import { getCartByUserId, updateCartByUserId } from "../../apis/cart_services";
// Import cart services

export default function CardPage({ cart = true }) {
  const [cartData, setCartData] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [discountCode, setDiscountCode] = useState("");
  const [shippingOption, setShippingOption] = useState("Free Shipping");
  const userId = localStorage.getItem("UserID");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const data = await getCartByUserId(userId, token);
        setCartData(data);
        console.log(data);
        setCartItems(data);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartData();
  }, []);

  const handleUpdateCart = async () => {
    try {
      const updatedCart = { ...cartData, items: cartItems };
      await updateCartByUserId(userId, updatedCart, token);
      alert("Cart updated successfully!");
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };

  const handleApplyDiscount = () => {
    alert(`Discount code "${discountCode}" applied!`);
  };

  const handleShippingChange = (event) => {
    setShippingOption(event.target.value);
  };

  return (
    <Layout childrenClasses={cart ? "pt-0 pb-0" : ""}>
      {cart === false ? (
        <div className="w-full cart-page-wrapper">
          <div className="mx-auto container-x">
            <BreadcrumbCom
              paths={[
                { name: "home", path: "/" },
                { name: "cart", path: "/cart" },
              ]}
            />
            <EmptyCardError />
          </div>
        </div>
      ) : (
        <div className="cart-page-wrapper w-full bg-white pb-[60px]">
          <div className="w-full">
            <PageTitle
              title="Your Cart"
              breadcrumb={[
                { name: "home", path: "/" },
                { name: "cart", path: "/cart" },
              ]}
            />
          </div>
          <div className="w-full mt-[23px]">
            <div className="mx-auto container-x">
              <ProductsTable
                className="mb-[30px]"
                cartItemsInitial={cartItems}
              />
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
