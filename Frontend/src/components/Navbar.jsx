import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaRegHeart, FaShoppingBag, FaUser } from "react-icons/fa";
import { FaAngleLeft, FaAngleRight, FaBars } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <section className="w-full bg-[rgba(9,51,26)]  py-3">
        <div className="max-w-lg mx-auto flex justify-between items-center">
          <FaAngleLeft className="text-white" />
          <span className="text-white text-sm  lg:text-[16px] font-medium">
            All books at least 50% off list prices every day
          </span>
          <FaAngleRight className="text-white" />
        </div>
      </section>
      {/* second header */}
      <section className="hidden lg:block w-full bg-[#ffffff] py-5 shadow-2xl">
        <div className="flex justify-between items-center max-w-8xl mx-5">
          <div>
            <img
              src="//ap-bokifa.myshopify.com/cdn/shop/files/logo.png?v=1729482566
            "
              alt=""
            />
          </div>
          <div className="mx-auto flex-1 max-w-[50%]">
            <form role="search">
              <div className="relative w-full">
                <input
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  className="w-full py-3 rounded-full border border-gray-300 px-5 focus:outline-none focus:ring-0"
                />

                <button
                  type="submit"
                  className="absolute right-0 top-0 h-full w-[20%] rounded-full bg-[#027A36] text-white hover:bg-[#09331A] flex items-center justify-center gap-2"
                >
                  <FaSearch />
                  <span className="text-lg font-medium">Search</span>
                </button>
              </div>
            </form>
          </div>
          <div className="flex items-center justify-between gap-5">
            <select name="" id="">
              <option value="">EUR$</option>
              <option value="">USD$</option>
              <option value="">GBP£</option>
              <option value="">JPY¥</option>
              <option value="">CAD$</option>
              <option value="">AUD$</option>
              <option value="">CHF franc</option>
            </select>
            <select name="" id="">
              <option value="">English</option>
              <option value="">French</option>
              <option value="">Spanish</option>
              <option value="">German</option>
            </select>
            <Link className="flex items-center" to="/wishlist">
              <FaRegHeart className="font-bold text-2xl" />
              <span>(0)</span>
            </Link>

            <div className="relative group">
              <FaUser className="text-2xl" />
              <div className="bg-[#ffffff] border rounded-sm h-36 w-30 absolute top-6 right-0 p-2 hidden  group-hover:block ">
                <ul className="space-y-1">
                  <Link to="/login">
                    <li>Login</li>
                  </Link>
                  <li>Register</li>
                  <li>My Account</li>
                  <Link to="/wishlist">
                    <li>Wishlist</li>
                  </Link>
                  <li>Logout</li>
                </ul>
              </div>
            </div>
            <Link className="flex items-center" to="/cart">
              <FaShoppingBag className="text-2xl" />
            </Link>
          </div>
        </div>
      </section>
      {/* mobileview header */}
      <section className="lg:hidden w-full bg-[#ffffff] py-5 border ">
        <div className="flex justify-between items-center max-w-8xl mx-2">
          <div>
            <FaBars className="text-2xl" />
          </div>
          <div>
            <img
              src="//ap-bokifa.myshopify.com/cdn/shop/files/logo.png?v=1729482566"
              alt=""
            />
          </div>
          <div className="flex items-center justify-between gap-3">
            <Link className="flex items-center" to="/wishlist">
              <FaRegHeart className="font-bold text-2xl" />
              <span>(0)</span>
            </Link>

            <div className="relative group">
              <FaUser className="text-2xl" />
              <div className="bg-[#ffffff] border rounded-sm h-36 w-30 absolute top-6 right-0 p-2 hidden  group-hover:block ">
                <ul className="space-y-1">
                  <Link to="/login">
                    <li>Login</li>
                  </Link>
                  <li>Register</li>
                  <li>My Account</li>
                  <Link to="/wishlist">
                    <li>Wishlist</li>
                  </Link>
                  <li>Logout</li>
                </ul>
              </div>
            </div>
            <Link className="flex items-center" to="/cart">
              <FaShoppingBag className="text-2xl" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
