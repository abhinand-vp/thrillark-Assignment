"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/custom.css/styles.css";

// import required modules
import HeroImage from "@/components/HeroImage";
import TopDestinations from "@/components/TopDestination";
import PopularExperience from "@/components/PopularExperience";
import Navbar from "@/components/Navbar";


export default function Home() {
  const [hideBtn, setHideBtn] = useState(false)
  return (
    <>
      {/* <Navbar /> */}
      <HeroImage/>
      <TopDestinations />
      <PopularExperience />
      {/* <Categories /> */}
    </>
  );
}
