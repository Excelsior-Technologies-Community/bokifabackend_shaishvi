import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <section className="w-full py-10 border border-gray-300 bg-white">
        <div className="max-w-8xl mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 items-center px-5 ">
          <div>
            <h1 className="text-4xl font-serif leading-tight max-w-55">
              Stay in the Known
            </h1>
          </div>
          <div>
            <p className="text-gray-600 text-lg leading-8 max-w-sm">
              Subscribe to our newsletter and stay updated on latest offers,
              discounts and events near you.
            </p>
          </div>
          <div className=" relative flex items-center border border-gray-400 rounded-full overflow-hidden h-14 w-full max-w-lg">
            <input
              type="email"
              placeholder="Email id"
              className="flex-1 px-6 outline-none"
            />

            <button className=" absolute bg-gray-100 h-full px-8 text-[#027A36] font-semibold hover:bg-gray-200 transition rounded-full right-0 ">
              Subscribe →
            </button>
          </div>
          <div className="flex gap-3 justify-end ">
            {/* Facebook */}
            <div className="w-16 h-16 border flex items-center justify-center">
              <a
                href="#"
                className="w-15 h-15 rounded-full bg-[#1877F2] flex items-center justify-center text-white text-2xl hover:opacity-80 transition"
              >
                <FaFacebookF />
              </a>
            </div>

            {/* X (Twitter) */}
            <div className="w-16 h-16 border flex items-center justify-center">
              <a
                href="#"
                className="w-15 h-15 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white text-2xl hover:opacity-80 transition"
              >
                <FaXTwitter />
              </a>
            </div>

            {/* Instagram */}
            <div className="w-16 h-16 border flex items-center justify-center">
              <a
                href="#"
                className="w-15 h-15 rounded-full bg-[#8A3AB9] flex items-center justify-center text-white text-2xl hover:opacity-80 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-10 ">
        <div className="max-w-7xl md:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 justify-items-center mx-5">
          <div className="flex flex-col gap-2 item-start col-span-1 md:col-span-2 lg:col-span-3 ">
            <img
              src="https://ap-bokifa.myshopify.com/cdn/shop/files/logo_1.png?v=1729758360&width=144"
              alt=""
            />
            <p className="text-md text-gray-800 leading-normal mt-2">
              Bokifa draws book lovers of all ages into a community, engage with
              booklovers and meet their favourite literary personalities.
            </p>
            <h1 className="text-[34px] text-[#e2bb80] font-semibold">
              +(84) - 1800 - 4635
            </h1>

            <span className="font-serif text-md text-gray-500">
              contact@example.com
            </span>
          </div>
          <div className="grid grid-cols-4 gap-10 col-span-1 md:col-span-2 lg:col-span-9">
            {" "}
            <div>
              <h2 className="text-3xl font-serif border-b border-gray-300 pb-4 mb-6">
                Category
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li className="hover:text-[#027A36] cursor-pointer">
                  Action Books
                </li>
                <li className="hover:text-[#027A36] cursor-pointer">Comedy</li>
                <li className="hover:text-[#027A36] cursor-pointer">Drama</li>
                <li className="hover:text-[#027A36] cursor-pointer">Horror</li>
                <li className="hover:text-[#027A36] cursor-pointer">
                  Kids Books
                </li>
                <li className="hover:text-[#027A36] cursor-pointer">
                  Top 50 Books
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-serif border-b border-gray-300 pb-4 mb-6">
                Useful Links
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>Secure Shopping</li>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
                <li>Shipping Policy</li>
                <li>Returns Policy</li>
                <li>Payment Option</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-serif border-b border-gray-300 pb-4 mb-6">
                Explore
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>About us</li>
                <li>Store Locator</li>
                <li>Kids Club</li>
                <li>Blogs</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-serif border-b border-gray-300 pb-4 mb-6">
                Get in touch
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>Careers</li>
                <li>Become a Franchisee</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
