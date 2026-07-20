import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";

const Category = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = React.useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await API.get("/categories");
      setCategories(response.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  // const Swiperdata = [
  //   {
  //     id: 1,
  //     title: "Romance",
  //     color: "#eda1d3",
  //     image:
  //       "https://ap-bokifa.myshopify.com/cdn/shop/files/1_10_3.png?v=1730275702&width=100",
  //     items: [
  //       "Historical",
  //       "Biographies",
  //       "Leaders & Notable",
  //       "Modern Biographies",
  //       "Sports Biographies",
  //       "UK Biographies",
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "Biographies",
  //     color: "#dbb661",
  //     image:
  //       "https://ap-bokifa.myshopify.com/cdn/shop/files/1_10_4.png?v=1730275702&width=100",
  //     items: [
  //       "Historical",
  //       "Biographies",
  //       "Leaders & Notable",
  //       "Modern Biographies",
  //       "Sports Biographies",
  //       "UK Biographies",
  //     ],
  //   },
  //   {
  //     id: 3,
  //     title: "History",
  //     color: "#83b2c1",
  //     image:
  //       "https://ap-bokifa.myshopify.com/cdn/shop/files/1_10_5.png?v=1730275702&width=100",
  //     items: [
  //       "Historical",
  //       "Biographies",
  //       "Leaders & Notable",
  //       "Modern Biographies",
  //       "Sports Biographies",
  //       "UK Biographies",
  //     ],
  //   },
  //   {
  //     id: 4,
  //     title: "Children's Book",
  //     color: "#f6ae88",
  //     image:
  //       "https://ap-bokifa.myshopify.com/cdn/shop/files/1_10_6.png?v=1730275702&width=100",
  //     items: [
  //       "Historical",
  //       "Biographies",
  //       "Leaders & Notable",
  //       "Modern Biographies",
  //       "Sports Biographies",
  //       "UK Biographies",
  //     ],
  //   },
  // ];
  return (
    <>
      <div className="max-w-8xl mx-5  text-center md:text-start text-3xl md:text-5xl ">
        Shop By Category
      </div>
      <div className="hidden max-w-8xl mx-4 py-20 lg:grid grid-cols-4 gap-5">
        {categories.map((category) => (
          <div
            onClick={() => navigate(`/category/${category._id}`)}
            key={category._id}
            className="mx-2 bg-white rounded-3xl shadow-sm"
          >
            <div className="bg-[#eda1d3] w-full h-10 flex justify-center items-center rounded-t-2xl">
              <h2 className="text-3xl font-bold text-white">{category.name}</h2>
            </div>

            <div className="p-8 text-center">
              <button className="px-5 py-2 bg-[#015a2a] text-white rounded-full">
                View Books
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* mobile AND tablet view */}
      <div className="lg:hidden max-w-8xl mx-4 py-20">
        <Swiper
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {categories.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="bg-white rounded-3xl shadow-sm">
                {/* Header */}
                <div className="bg-[#eda1d3] w-full h-10 flex justify-center items-center rounded-t-2xl">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {item.name}
                  </h2>
                </div>

                {/* Body */}
                <div className="p-8 text-center">
                  <button className="px-5 py-2 bg-[#015a2a] text-white rounded-full">
                    View Books
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Category;
