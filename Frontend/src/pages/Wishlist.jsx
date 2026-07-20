import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlist, RemovefromWish } = useWishlist();
  return (
    <>
      <section>
        <div className="bg-[#282828] h-45 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-white text-center">Wishlist</h1>
          <Link to="/" className="text-white hover:text-green-300">
            Home
          </Link>
        </div>
      </section>

      <div className="max-w-8xl mx-auto p-5">
        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-5 py-10">
            <h1 className="text-2xl font-bold text-gray-700">
              Your Wishlist is Empty
            </h1>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto p-5   gap-5">
            <h2 className="text-2xl font-bold text-gray-700 text-center">
              Your Wishlist
            </h2>
            <div className="">
              {wishlist.map((item) => (
                <div
                  key={item._id}
                  className="border rounded-sm p-3 flex  gap-5  justify-between items-center "
                >
                  <img src={`http://localhost:5000${item.image}`} alt={item.title} className="w-50 h-50" />
                  <p className="text-xl ">{item.title}</p>
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <p className="text-xl font-bold">${item.price.toFixed(2)}</p>
                  <button
                    onClick={() => RemovefromWish(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-sm hover:bg-red-600"
                  >
                    Remove from Wishlist
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

export default Wishlist;
