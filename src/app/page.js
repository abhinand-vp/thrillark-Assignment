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


export default function Home() {
  const [hideBtn, setHideBtn] = useState(false)
  return (
    <>
      <HeroImage/>
      <TopDestinations />
      {/* <PopularExperience /> */}
    </>
  );
}
