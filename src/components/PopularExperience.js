"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/custom.css/styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useDestContext } from "@/context/destination.context";

export default function PopularExperience() {
  const { popularDestination } = useDestContext()

  const [hideBtn, setHideBtn] = useState(false);
  return (
    <div className="px-[1vw] md:px-[5vw] md:my-8">
      <h1 className="text-black font-medium text-xl px-[2.5vw]">Popular Destinations</h1>
      <div
        onMouseOver={() => setHideBtn(true)}
        onMouseOut={() => setHideBtn(false)}
      >
        <Swiper
          slidesPerView={4}
          centeredSlides={false}
          spaceBetween={30}
          navigation={hideBtn}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {popularDestination.map((ele) => (
            <SwiperSlide key={ele.place}>
              <div>
                <img src={ele.img} alt={ele.place} />
              </div>
              <div className="block py-[1vw]">
                <div className="text-base font-normal">{ele.place}</div>
                <div className="py-2 text-sm">{ele.country}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
