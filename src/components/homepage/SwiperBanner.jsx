"use client";
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "@/app/globals.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function SwiperBanner() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        initialSlide={0}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide className="h-75! w-75!">
          <img src="/tile1.jpg" />
        </SwiperSlide>
        <SwiperSlide className="h-75! w-75!">
          <img src="/tile2.webp" />
        </SwiperSlide>
        <SwiperSlide className="h-75! w-75!">
          <img src="/tile3.jpg" />
        </SwiperSlide>
        <SwiperSlide className="h-75! w-75!">
          <img src="/tile4.png" />
        </SwiperSlide>
        <SwiperSlide className="h-75! w-75!">
          <img src="/tile5.webp" />
        </SwiperSlide>
        <SwiperSlide className="h-75! w-75!">
          <img src="/tile6.webp" />
        </SwiperSlide>
        <SwiperSlide className="h-75! w-75!">
          <img src="/tile3.jpg" />
        </SwiperSlide>
        <SwiperSlide className="h-75! w-75!">
          <img src="/tile4.png" />
        </SwiperSlide>
        <SwiperSlide className="h-75! w-75!">
          <img src="/tile5.webp" />
        </SwiperSlide>
        <SwiperSlide className="h-75! w-75!">
          <img src="/tile1.jpg" />
        </SwiperSlide>
        <SwiperSlide className="h-75! w-75!">
          <img src="/tile2.webp" />
        </SwiperSlide>
        <SwiperSlide className="h-75! w-75!">
          <img src="/tile3.jpg" />
        </SwiperSlide>
        <SwiperSlide className="h-75! w-75!">
          <img src="/tile4.png" />
        </SwiperSlide>
        <SwiperSlide className="h-75! w-75!">
          <img src="/tile5.webp" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
