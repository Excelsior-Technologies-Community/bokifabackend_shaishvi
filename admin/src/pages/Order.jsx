import React, { useEffect, useState } from "react";
import API from "../services/api";

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await API.get("/orders");
      setOrders(res.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await API.patch(`/orders/${id}`, { status });

      fetchOrders();

      alert("Order status updated successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-700";

      case "confirmed":
        return "bg-blue-100 text-blue-700";

      case "shipped":
        return "bg-purple-100 text-purple-700";

      case "delivered":
        return "bg-green-100 text-green-700";

      case "cancelled":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Orders Management</h1>

        <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-semibold">
          Total Orders: {orders.length}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Book</th>
              <th className="p-3 text-center">Qty</th>
              <th className="p-3 text-center">Total</th>
              <th className="p-3 text-center">Status</th>
              <th className="p-3 text-center">Change Status</th>
              <th className="p-3 text-left">Order ID</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order._id}
                className="border-b hover:bg-gray-50 transition"
              >
                {/* Customer */}
                <td className="p-3">
                  {order.user?.firstName} {order.user?.lastName}
                </td>

                {/* Books */}
                <td className="p-3">
                  {order.books.map((item) => item.book?.title).join(", ")}
                </td>

                {/* Quantity */}
                <td className="p-3 text-center">
                  {order.books.map((item) => item.quantity).join(", ")}
                </td>

                {/* Total Amount */}
                <td className="p-3 text-center font-semibold">
                  ₹{order.totalAmount}
                </td>

                {/* Current Status */}
                <td className="p-3 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold capitalize ${getStatusClass(
                      order.status,
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>

                {/* Change Status */}
                <td className="p-3 text-center">
                  <select
                    value={order.status}
                    onChange={(e) => updateStatus(order._id, e.target.value)}
                    className="border rounded-md px-3 py-2 focus:outline-none"
                  >
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </td>

                {/* Order ID */}
                <td className="p-3 text-sm text-gray-600">{order._id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
