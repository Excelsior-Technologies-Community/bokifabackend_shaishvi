import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
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
                  <img src={item.img} alt={item.title} className="w-50 h-50" />
                  <p className="text-xl">{item.title}</p>
                  <p className="text-xl font-bold">${item.price.toFixed(2)}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-sm hover:bg-red-600"
                  >
                    Remove
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
