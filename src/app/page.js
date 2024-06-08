"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Trending from "./components/TopDestination";
import Navbar from "./components/Navbar";
import TopDestinations from "./components/TopDestination";
import PopularExperience from "./components/PopularExperience";
import Categories from "./components/Categories";
import HeroImage from "./components/Heroimage";

export default function Home() {
  const [hideBtn, setHideBtn] = useState(false)
  return (
    <>
      <Navbar />
      <HeroImage/>
      <TopDestinations />
      <PopularExperience />
      <Categories />
    </>
  );
}
