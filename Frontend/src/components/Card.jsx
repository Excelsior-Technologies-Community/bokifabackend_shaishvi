import React from "react";
import { homeData } from "../data/homeData";
import { FaRegHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Card = () => {
  return (
    <>
      <section className="w-full py-5 ">
        <div className="max-w-8xl mx-5 flex justify-between items-center">
          <h1 className="text-5xl"> Shop BestSeller </h1>
          <button className="px-4 py-2 rounded-full border border-gray text-black font-medium text-xl hover:text-white hover:bg-[#027a36] transition-all duration-700">
            Browse All
          </button>
        </div>
        <div className="max-w-8xl mx-auto  hidden lg:grid grid-cols-6 gap-5 p-5">
          {homeData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col h-full rounded-lg overflow-hidden bg-white shadow-sm  hover:shadow-lg transition-shadow duration-300 group "
            >
              <div className="w-full h-70 flex items-center justify-center relative group rounded-md overflow-hidden">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full  object-contain"
                />
                <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm text-gray-400 hover:text-red-500">
                  <FaRegHeart />
                </button>
              </div>
              <div className="flex flex-col items-center grow mt-4 gap-1 ">
                <p className=" text-gray-800 text-center">{item.title}</p>
                <span className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                  Ap Bokifa
                </span>
                <span className="text-lg font-bold  text-[#027a36]">
                  ${item.price.toFixed(2)}
                </span>
                <button className=" group-hover:block hidden w-40 mx-2 my-2 bg-emerald-800 hover:bg-emerald-900 text-white font-medium py-2 px-4 rounded transition-colors duration-200 text-sm">
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* mobile and tablet views */}
      <div className="lg:hidden py-2 max-w-8xl mx-auto p-4 ">
        <Swiper
          modules={[Navigation]}
          spaceBetween={16} // Thoda gap slides ke beech me
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {homeData.map((item) => (
            <SwiperSlide key={item.id} className="h-auto flex">
          

              {/* Main Card Container */}
              <div className="flex flex-col w-full h-full rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 ">
                
                <div className="relative h-170 md:h-120 flex items-center justify-center bg-gray-100 overflow-hidden">
                  <img
                    src={`https:${item.img}`}
                    alt={item.title}
                 
                    className="w-full h-full object-cover"
                  />

                  <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm text-gray-400 hover:text-red-500">
                    <FaRegHeart />
                  </button>
                </div>

                {/* Content Area */}
                <div className="flex flex-col grow items-center mt-4 text-center p-4 pt-0">
                 

                  <p className="text-3xl font-medium text-gray-800 line-clamp-2  px-2">
                    {item.title}
                  </p>

                  <span className="text-lg text-gray-400 uppercase tracking-wider block mt-1">
                    Ap Bokifa
                  </span>

                  
                  <div className="mt-auto w-full flex flex-col items-center pt-2">
                    <span className="text-2xl font-bold text-[#027a36]">
                      ${item.price.toFixed(2)}
                    </span>

                    <button className="w-full max-w-50 my-2 bg-emerald-800 hover:bg-emerald-900 transition-colors text-white py-2 rounded text-2xl font-medium">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Card;
