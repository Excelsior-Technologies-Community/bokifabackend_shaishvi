import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";

const Category = () => {
  const Swiperdata = [
    {
      id: 1,
      title: "Romance",
      color: "#eda1d3",
      image:
        "https://ap-bokifa.myshopify.com/cdn/shop/files/1_10_3.png?v=1730275702&width=100",
      items: [
        "Historical",
        "Biographies",
        "Leaders & Notable",
        "Modern Biographies",
        "Sports Biographies",
        "UK Biographies",
      ],
    },
    {
      id: 2,
      title: "Biographies",
      color: "#dbb661",
      image:
        "https://ap-bokifa.myshopify.com/cdn/shop/files/1_10_4.png?v=1730275702&width=100",
      items: [
        "Historical",
        "Biographies",
        "Leaders & Notable",
        "Modern Biographies",
        "Sports Biographies",
        "UK Biographies",
      ],
    },
    {
      id: 3,
      title: "History",
      color: "#83b2c1",
      image:
        "https://ap-bokifa.myshopify.com/cdn/shop/files/1_10_5.png?v=1730275702&width=100",
      items: [
        "Historical",
        "Biographies",
        "Leaders & Notable",
        "Modern Biographies",
        "Sports Biographies",
        "UK Biographies",
      ],
    },
    {
      id: 4,
      title: "Children's Book",
      color: "#f6ae88",
      image:
        "https://ap-bokifa.myshopify.com/cdn/shop/files/1_10_6.png?v=1730275702&width=100",
      items: [
        "Historical",
        "Biographies",
        "Leaders & Notable",
        "Modern Biographies",
        "Sports Biographies",
        "UK Biographies",
      ],
    },
  ];
  return (
    <>
      <div className="max-w-8xl mx-5  text-center md:text-start text-3xl md:text-5xl ">
        Shop By Category
      </div>
      <div className="hidden max-w-8xl mx-4 py-20  lg:grid grid-cols-4  gap-5">
        <div className=" mx-2 relative bg-white rounded-3xl shadow-sm overflow-visible">
          {/* header */}
          <div className="bg-[#eda1d3] w-full h-10 flex justify-end rounded-t-2xl ">
            <h2 className=" mx-2 text-3xl font-bold text-white"> Romance</h2>
          </div>
          <img
            src="https://ap-bokifa.myshopify.com/cdn/shop/files/1_10_3.png?v=1730275702&width=100"
            alt=""
            className="absolute -top-15 left-8 "
          />
          <div className="p-8 pt-10 text-end flex justify-end">
            <ul className="space-y-4 text-gray-500 text-xl">
              <li>Historical</li>
              <li>Biographies</li>
              <li>Leaders & Notable</li>
              <li>Modern Biographies</li>
              <li>Sports Biographies</li>
              <li>UK Biographies</li>
            </ul>
          </div>
        </div>
        <div className=" mx-2 relative bg-white rounded-3xl shadow-sm overflow-visible">
          {/* header */}
          <div className="bg-[#dbb661] w-full h-10 flex justify-end rounded-t-2xl ">
            <h2 className="text-3xl font-bold text-white  mx-2 ">
              {" "}
              Biographies
            </h2>
          </div>
          <img
            src="https://ap-bokifa.myshopify.com/cdn/shop/files/1_10_4.png?v=1730275702&width=100"
            alt=""
            className="absolute -top-15 left-5 "
          />
          <div className="p-8 pt-10 text-end flex justify-end">
            <ul className="space-y-4 text-gray-500 text-xl">
              <li>Historical</li>
              <li>Biographies</li>
              <li>Leaders & Notable</li>
              <li>Modern Biographies</li>
              <li>Sports Biographies</li>
              <li>UK Biographies</li>
            </ul>
          </div>
        </div>
        <div className=" mx-2 relative bg-white rounded-3xl shadow-sm overflow-visible">
          {/* header */}
          <div className="bg-[#83b2c1] w-full h-10 flex justify-end rounded-t-2xl ">
            <h2 className="text-3xl font-bold text-white mx-2 ">History</h2>
          </div>
          <img
            src="https://ap-bokifa.myshopify.com/cdn/shop/files/1_10_5.png?v=1730275702&width=100"
            alt=""
            className="absolute -top-15 left-8 "
          />
          <div className="p-8 pt-10 text-end flex justify-end">
            <ul className="space-y-4 text-gray-500 text-xl">
              <li>Historical</li>
              <li>Biographies</li>
              <li>Leaders & Notable</li>
              <li>Modern Biographies</li>
              <li>Sports Biographies</li>
              <li>UK Biographies</li>
            </ul>
          </div>
        </div>

        <div className=" mx-2 relative bg-white rounded-3xl shadow-sm overflow-visible">
          {/* header */}
          <div className="bg-[#f6ae88] w-full h-10 flex justify-end rounded-t-2xl ">
            <h2 className="text-2xl font-bold text-white  mx-2 ">
              Children's Book
            </h2>
          </div>
          <img
            src="https://ap-bokifa.myshopify.com/cdn/shop/files/1_10_6.png?v=1730275702&width=100"
            alt=""
            className="absolute -top-15 left-5 "
          />
          <div className="p-8 pt-10 text-end flex justify-end">
            <ul className="space-y-4 text-gray-500 text-xl">
              <li>Historical</li>
              <li>Biographies</li>
              <li>Leaders & Notable</li>
              <li>Modern Biographies</li>
              <li>Sports Biographies</li>
              <li>UK Biographies</li>
            </ul>
          </div>
        </div>
      </div>

      {/* mobile AND tablet view */}
      <div className="lg:hidden max-w-8xl mx-4 py-20  ">
        <Swiper
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
          }}
        >
          {Swiperdata.map((item) => (
            <SwiperSlide key={item.id}>
              <div className=" mx-2  relative bg-white rounded-3xl shadow-sm overflow-visible">
                {/* header */}
                <div
                  style={{
                    backgroundColor: item.color,
                  }}
                  className=" w-full h-10 flex justify-end rounded-t-2xl "
                >
                  <h2 className=" mx-2 text-3xl font-bold text-white">
                    {" "}
                    {item.title}
                  </h2>
                </div>
                <img
                  src={item.image}
                  alt=""
                  className="absolute top-0 left-8 w-50 "
                />
                <div className="p-8 pt-10 text-end flex justify-end">
                  <ul className="space-y-4 text-gray-500 text-xl">
                    {item.items.map((listItem, index) => (
                      <li key={index}>{listItem}</li>
                    ))}
                  </ul>
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
