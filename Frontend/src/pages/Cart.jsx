import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import API from "../services/api";

const Cart = () => {
  const handlePlaceOrder = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      console.log("LocalStorage User:", user);
      console.log("Cart Items:", cartItems);
      console.log("Subtotal:",cartSubtotal);
      const orderData = {
        user: user.id,
        books: cartItems.map((item) => ({
          book: item._id,
          quantity: item.quantity || 1,
        })),
        totalAmount: cartSubtotal,
      };
      console.log("Order data:", orderData);
      const res = await API.post("/orders", orderData);
      alert("Order placed successfully!");
      console.log("Order response:", res.data);
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  const { cartItems, removeFromCart,  cartSubtotal} = useCart();
  return (
    <>
      <section>
        <div className="bg-[#282828] h-45 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-white text-center">Cart</h1>
          <Link to="/" className="text-white hover:text-green-300">
            Home
          </Link>
        </div>
      </section>
      <div className="max-w-8xl mx-auto p-5">
        {cartItems.length === 0 ? (
          <div>
            <h1 className="text-2xl font-bold text-gray-700 text-center py-10">
              Your Cart is Empty
            </h1>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto p-3 ">
            <h2 className="text-2xl font-bold text-gray-700 text-center">
              Your Cart
            </h2>
            <div className=" space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border p-2   rounded-md  "
                >
                  <img
                    src={`http://localhost:5000${item.image}`}
                    alt={item.title}
                    className="w-50 h-50"
                  />
                  <p className="text-xl">{item.title}</p>
                  <p className="text-xl font-bold">${item.price}</p>
                  <p>Total Amount: ₹{cartSubtotal}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-sm hover:bg-red-600"
                  >
                    Remove
                  </button>
                  <button
                    onClick={handlePlaceOrder}
                    className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600"
                  >
                    Place Order
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
