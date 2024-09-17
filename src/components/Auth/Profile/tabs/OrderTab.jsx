import React, { useEffect, useState } from "react";
import axios from "axios";

const baseurl = "https://ecom-backend-deploy.onrender.com";

export default function OrderTab() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");

        if (token) {
          // Decode the token to get the userId
          const decodedToken = JSON.parse(atob(token.split(".")[1]));
          const userId = decodedToken.userId;
          console.log(userId, "User ID from token");

          // Fetch all orders
          const response = await axios.get(`${baseurl}/order`, {
            headers: {
              Authorization: `${token}`,
            },
          });

          console.log(response.data, "All Orders Data");

          // Filter the orders to show only those that belong to the current user
          const userOrders = response.data.filter(
            (order) => order.user === userId
          );

          console.log(userOrders, "Filtered User Orders");

          setOrders(userOrders);
        } else {
          console.error("No token found");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (orders.length === 0) {
    return <p>No orders found</p>;
  }

  return (
    <div className="relative w-full overflow-x-auto sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead>
          <tr className="text-base border-b text-qgray whitespace-nowrap default-border-bottom">
            <th className="py-4 text-center whitespace-nowrap">Order</th>
            <th className="py-4 text-center whitespace-nowrap">Date</th>
            <th className="py-4 text-center whitespace-nowrap">Status</th>
            <th className="py-4 text-center whitespace-nowrap">Amount</th>
            <th className="py-4 text-center whitespace-nowrap">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id} className="bg-white border-b hover:bg-gray-50">
              <td className="py-4 text-center">
                <span className="text-lg font-medium text-qgray">
                  #{order._id}
                </span>
              </td>
              <td className="px-2 py-4 text-center">
                <span className="text-base text-qgray whitespace-nowrap">
                  {new Date(order.createdAt).toLocaleDateString()}
                </span>
              </td>
              <td className="px-2 py-4 text-center">
                <span
                  className={`p-2 text-sm rounded ${
                    order.status === "completed"
                      ? "text-green-500 bg-green-100"
                      : order.status === "pending"
                      ? "text-yellow-500 bg-yellow-100"
                      : "text-red-500 bg-red-100"
                  }`}
                >
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </td>
              <td className="px-2 py-4 text-center">
                <span className="px-2 text-base text-qblack whitespace-nowrap">
                  ${order.totalAmount}
                </span>
              </td>
              <td className="py-4 text-center">
                <button
                  type="button"
                  className="w-[116px] h-[46px] bg-qyellow text-qblack font-bold"
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
