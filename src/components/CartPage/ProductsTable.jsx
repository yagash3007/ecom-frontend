import React, { useState, useEffect } from "react";
import axios from "axios";
import InputQuantityCom from "../Helpers/InputQuantityCom";
import { placeOrder } from "../../apis/placeOrder";
import { deleteCart } from "../../apis/cart_services";
import { useNavigate } from "react-router-dom/dist";

export default function ProductsTable({ className, cartItemsInitial }) {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  const handleOpen = () => setOpen(!open);

  console.log(cartItemsInitial);

  useEffect(() => {
    handleTotalChange();
  }, [cartItems]);

  useEffect(() => {
    handleTotalChange();
    if (cartItemsInitial.items && cartItemsInitial.items.length > 0) {
      setCartItems(cartItemsInitial.items);
    }
  }, [cartItemsInitial.items]);

  const handleQuantityChange = (index, newQuantity) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item, i) =>
        i === index ? { ...item, quantity: newQuantity } : item
      )
    );
    handleTotalChange();
    console.log(cartItemsInitial);
  };

  const handleTotalChange = () => {
    const total = cartItems.reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);

    setTotal(total.toFixed(2));
  };

  const handleRemoveItem = async (itemId) => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("UserID");

      if (!token || !userId) {
        console.error("No token or userId found");
        alert("Error: No token or userId found.");
        return;
      }
      const body = {
        userId: userId,
        productId: itemId,
      };

      await axios.put(`https://ecom-backend-deploy.onrender.com/cart/`, body);

      setCartItems((prevCartItems) =>
        prevCartItems.filter((item) => item.product._id !== itemId)
      );

      alert("Item removed from cart successfully!");
      handleTotalChange();
    } catch (error) {
      console.error("Error removing item from cart:", error);
      alert("Failed to remove item from cart.");
    }
  };

  const handleOrderSubmit = async () => {
    console.log("orderSubmission");

    const userId = localStorage.getItem("UserID");

    const OrderData = {
      user: userId,
      items: cartItems.map((item) => ({
        product: item.product._id,
        quantity: item.quantity,
      })),
      totalAmount: total,
    };

    placeOrder(OrderData).then((res) => {
      console.log(res);
      deleteCart(userId).then((res) => {
        alert("Successfully Order Placed");
        navigate("/");
      });
    });
  };

  return (
    <>
      <div className={`w-full ${className || ""}`}>
        <div className="relative w-full overflow-x-auto border border-[#EDEDED]">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead>
              <tr className="text-[13px] font-medium text-black bg-[#F6F6F6] whitespace-nowrap px-2 border-b default-border-bottom uppercase">
                <th className="py-4 pl-10 block whitespace-nowrap min-w-[300px]">
                  Product
                </th>
                <th className="py-4 text-center whitespace-nowrap">
                  Description
                </th>
                <th className="py-4 text-center whitespace-nowrap">Price</th>
                <th className="py-4 text-center whitespace-nowrap">Quantity</th>
                <th className="py-4 text-center whitespace-nowrap">Total</th>
                <th className="py-4 whitespace-nowrap text-right w-[114px]"></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr
                  key={item._id}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <td className="pl-10 py-4 w-[380px]">
                    <div className="flex items-center space-x-6">
                      <div className="w-[80px] h-[80px] overflow-hidden flex justify-center items-center border border-[#EDEDED]">
                        <img
                          src={item.product.imageUrls[0]}
                          alt={item.product.name}
                          className="object-contain w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col flex-1">
                        <p className="font-medium text-[15px] text-qblack">
                          {item.product.name}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 py-4 text-center">
                    <div className="flex items-center justify-center">
                      <span className="text-[13px] text-gray-600">
                        {item.product.description}
                      </span>
                    </div>
                  </td>
                  <td className="px-2 py-4 text-center">
                    <div className="flex items-center justify-center space-x-1">
                      <span className="text-[15px] font-normal">
                        ${item.product.price.toFixed(2)}
                      </span>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center justify-center">
                      <InputQuantityCom
                        value={item.quantity}
                        onChange={(newQuantity) =>
                          handleQuantityChange(index, newQuantity)
                        }
                      />
                    </div>
                  </td>
                  <td className="py-4 text-right">
                    <div className="flex items-center justify-center space-x-1">
                      <span className="text-[15px] font-normal">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 text-right">
                    <div className="flex items-center justify-center space-x-1">
                      <span
                        onClick={() => handleRemoveItem(item.product._id)}
                        className="cursor-pointer"
                      >
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.7 0.3C9.3 -0.1 8.7 -0.1 8.3 0.3L5 3.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L3.6 5L0.3 8.3C-0.1 8.7 -0.1 9.3 0.3 9.7C0.7 10.1 1.3 10.1 1.7 9.7L5 6.4L8.3 9.7C8.7 10.1 9.3 10.1 9.7 9.7C10.1 9.3 10.1 8.7 9.7 8.3L6.4 5L9.7 1.7C10.1 1.3 10.1 0.7 9.7 0.3Z"
                            fill="#AAAAAA"
                          />
                        </svg>
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="justify-between w-full sm:flex">
        <div className="w-full mt-[30px] flex sm:justify-end">
          <div className="sm:w-[370px] w-full border border-[#EDEDED] px-[30px] py-[26px]">
            <div className="mb-6 sub-total">
              <div className="flex items-end mb-6 gap-7">
                <p className="text-[15px] font-medium text-qblack">Subtotal</p>
                <p className="text-[15px] font-medium text-qred">${total}</p>
              </div>
              <div className="shipping mt-[30px]">
                <ul className="flex flex-col space-y-1">
                  <li className="mb-5 ">
                    <div className="flex space-x-2.5 items-center mb-4">
                      <div className="input-radio">
                        <input
                          type="radio"
                          name="price"
                          className="accent-pink-500"
                          id="transfer"
                        />
                      </div>
                      <label
                        htmlFor="transfer"
                        className="text-[18px] text-normal text-qblack"
                      >
                        Direct Bank Transfer
                      </label>
                    </div>
                    <p className="text-qgraytwo text-[15px] ml-6">
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference.
                    </p>
                  </li>
                  <li>
                    <div className="flex space-x-2.5 items-center mb-5">
                      <div className="input-radio">
                        <input
                          type="radio"
                          name="price"
                          className="accent-pink-500"
                          id="delivery"
                        />
                      </div>
                      <label
                        htmlFor="delivery"
                        className="text-[18px] text-normal text-qblack"
                      >
                        Cash on Delivery
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="flex space-x-2.5 items-center mb-5">
                      <div className="input-radio">
                        <input
                          type="radio"
                          name="price"
                          className="accent-pink-500"
                          id="bank"
                        />
                      </div>
                      <label
                        htmlFor="bank"
                        className="text-[18px] text-normal text-qblack"
                      >
                        Credit/Debit Cards or Paypal
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-end">
                <button
                  className="w-[220px] h-[50px] bg-qyellow flex justify-center items-center"
                  onClick={() => handleOrderSubmit()}
                >
                  <span className="text-sm font-semibold">Place Order</span>
                </button>
              </div>
              <div className="w-full h-[1px] bg-[#EDEDED]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
