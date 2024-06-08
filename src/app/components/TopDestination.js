"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function TopDestinations() {
  const slideOne = [
    {
      place: "Dubai",
      country: "United Arab Emirates",
      img: "https://thrillarkdev.imgix.net/city_details/1146d03f84c40f1490240197834a9d3a.jpeg?ch=Width,DPR&w=325&h=300&dpr=1&auto=enhance&fm=webp&fit=min",
    },
    {
      place: "Abu Dhabi",
      country: "United Arab Emirates",
      img: "https://thrillarkdev.imgix.net/city_details/4a59a260aeeac6d1e866d8ec5c0ec0de.jpeg?ch=Width,DPR&w=325&h=300&dpr=1&auto=enhance&fm=webp&fit=min",
    },
    {
      place: "Muscat",
      country: "Oman",
      img: "https://thrillarkdev.imgix.net/city_details/5bbd71c1c7a41c9ad6781e0dcbaaf5fb.jpg?ch=Width,DPR&w=325&h=300&dpr=1&auto=enhance&fm=webp&fit=min",
    },
    {
      place: "Riyadh",
      country: "Saudi Arabia",
      img: "https://thrillarkdev.imgix.net/city_details/f9106ef4645ba0e35adb7a97be51ac56.jpg?ch=Width,DPR&w=325&h=300&dpr=1&auto=enhance&fm=webp&fit=min",
    },
    {
      place: "Singapore",
      country: "Singapore",
      img: "https://thrillarkdev.imgix.net/city_details/36f4a4c83ea4a7d92e688f3c21b7d8e4.jpg?ch=Width,DPR&w=325&h=300&dpr=1&auto=enhance&fm=webp&fit=min",
    },
    {
      place: "Kula Lampur",
      country: "Malaysia",
      img: "https://thrillarkdev.imgix.net/city_details/c3c45bf75d1b0985bd676611f11b5702.jpg?ch=Width,DPR&w=325&h=300&dpr=1&auto=enhance&fm=webp&fit=min",
    },
    {
      place: "Bangkok",
      country: "Thailand",
      img: "https://thrillarkdev.imgix.net/city_details/0eae4fc01877f905feec1a52df73fd93.jpg?ch=Width,DPR&w=325&h=300&dpr=1&auto=enhance&fm=webp&fit=min",
    },
    {
      place: "Hanoi",
      country: "vietnam",
      img: "https://thrillarkdev.imgix.net/city_details/bfbb355b1d935a8e8073f444f269f34a.jpg?ch=Width,DPR&w=325&h=300&dpr=1&auto=enhance&fm=webp&fit=min",
    },
  ];

  const [hideBtn, setHideBtn] = useState(false);
  return (
    <div className="px-[1vw] md:px-[5vw] md:my-8">
      <h1 className="text-black font-medium text-xl px-[2.5vw]">Top Destinations</h1>
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
          {slideOne.map((ele) => (
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
