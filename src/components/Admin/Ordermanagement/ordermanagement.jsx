import React, { useState, useEffect } from "react";
import axios from "axios";

function OrderManagement() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    // Fetch orders when the component loads
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        "https://ecom-backend-deploy.onrender.com/admin/orders"
      );
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
  };

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await axios.put(
        `https://ecom-backend-deploy.onrender.com/admin/orders/${orderId}`,
        {
          status: newStatus,
        }
      );
      fetchOrders(); // Refresh the orders list
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  const handleDeleteOrder = async (orderId) => {
    try {
      await axios.delete(
        `https://ecom-backend-deploy.onrender.com/admin/orders/${orderId}`
      );
      fetchOrders(); // Refresh the orders list
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  return (
    <div className="p-4 order-management">
      <h2 className="mb-4 text-2xl font-bold">Manage Orders</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Order ID</th>
            <th className="py-2">Customer Name</th>
            <th className="py-2">Date</th>
            <th className="py-2">Total Amount</th>
            <th className="py-2">Status</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="px-4 py-2 border">{order.id}</td>
              <td className="px-4 py-2 border">{order.customerName}</td>
              <td className="px-4 py-2 border">
                {new Date(order.date).toLocaleDateString()}
              </td>
              <td className="px-4 py-2 border">
                ${order.totalAmount.toFixed(2)}
              </td>
              <td className="px-4 py-2 border">
                <select
                  value={order.status}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                  className="p-2 border border-gray-300 rounded"
                >
                  <option value="Pending">Pending</option>
                  <option value="Processing">Processing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </td>
              <td className="px-4 py-2 border">
                <button
                  onClick={() => handleViewOrder(order)}
                  className="px-2 py-1 mr-2 text-white bg-blue-500 rounded"
                >
                  View
                </button>
                <button
                  onClick={() => handleDeleteOrder(order.id)}
                  className="px-2 py-1 text-white bg-red-500 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedOrder && (
        <div className="p-4 mt-4 border border-gray-300 rounded">
          <h3 className="text-xl font-bold">Order Details</h3>
          <p>
            <strong>Order ID:</strong> {selectedOrder.id}
          </p>
          <p>
            <strong>Customer Name:</strong> {selectedOrder.customerName}
          </p>
          <p>
            <strong>Date:</strong>{" "}
            {new Date(selectedOrder.date).toLocaleDateString()}
          </p>
          <p>
            <strong>Total Amount:</strong> $
            {selectedOrder.totalAmount.toFixed(2)}
          </p>
          <p>
            <strong>Status:</strong> {selectedOrder.status}
          </p>
          <h4 className="mt-2 text-lg font-bold">Products:</h4>
          <ul className="list-disc list-inside">
            {selectedOrder.products.map((product, index) => (
              <li key={index}>
                {product.name} - ${product.price} x {product.quantity}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default OrderManagement;
