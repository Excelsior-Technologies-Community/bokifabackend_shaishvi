import React from "react";
import Card from "../components/Card";
import Category from "../components/Category";

const Home = () => {
  return (
    <>
      {/* hero section */}
      <section className="w-full bg-[#f5eee8]">
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-12 p-5 gap-5 ">
          <div className=" col-span-12  md:col-span-8 p-5 ">
            <div className="relative">
              <img
                src="//ap-bokifa.myshopify.com/cdn/shop/files/bo_banner_1.jpg?v=1730260501&width=1010"
                alt=""
                className=" md:h-87.5 lg:h-112.5 w-full"
              />
              <div className=" max-w-sm absolute inset-0  left-5  lg:left-1/10 flex flex-col items-start justify-center text-center text-white gap-2 md:gap-5 ">
                <h1 className="text-[12px] font-medium text-[#ef0f1f] md:text-[16px] lg:text-[18px]">
                  Books you should read
                </h1>
                <span className="text-start text-sm md:text-2xl lg:text-4xl font-serif leading-normal">
                  THE BEST <br /> SALE BOOKS <br /> OF ALL THE TIMES{" "}
                </span>
                <button className="bg-[#ffffff] text-black rounded-full px-2 md:px-8 py-2  hover:bg-[#015a2a] transition-all duration-300 hover:text-white">
                  Discover Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 p-5 ">
            <div className="relative">
              <img
                src="//ap-bokifa.myshopify.com/cdn/shop/files/bo_banner_2.jpg?v=1730260501&width=490"
                alt=""
                className="h-auto md:h-87.5 lg:h-112.5 w-full rounded-md"
              />
              <div className="absolute inset-0 top-1/2 md:top-40 flex  flex-col items-center justify-center gap-5 md:gap-0">
                <span className="text-[#415dc1] text-[20px] md:text-[16px] lg:text-[18px] ">
                  Buy and save $20.
                </span>
                <h1 className="text-white text-[42px] md:text-[24px] lg:text-[32px] font-bold text-center uppercase font-serif">
                  a divergent <br />
                  collection
                </h1>
                <button className="bg-[#ffffff] text-black rounded-full px-4 md:px-8 py-2  hover:bg-[#015a2a] transition-all duration-300 hover:text-white">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* card component */}
      <section className="w-full  py-10">
        <Card />
      </section>
      {/* category component */}
      <section className="w-full  py-5">
        <Category />
      </section>
      {/* categoryControllerContr */}
    
    </>
  );
};

export default Home;
