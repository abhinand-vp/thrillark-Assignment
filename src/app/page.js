"use client";
import React from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/custom.css/styles.css";

// import required modules
import HeroImage from "@/components/HeroImage";
import TopDestinations from "@/components/TopDestination";


export default function Home() {
  return (
    <>
      <HeroImage/>
      <TopDestinations />
    </>
  );
}
