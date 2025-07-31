"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image  from "next/image";


export default function BannerSwiper() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
      speed={1500}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true, // Pause on hover
      }}
      loop={false}
      className="w-full h-full"
    >
      <SwiperSlide>
        <div className="relative w-full h-[550px]">
        <Image
          fill
          src="/images/banners/1.jpg"
          alt="True Face Series"
          className="w-full h-auto"
        />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-[550px]">
        <Image
          fill
          src="/images/banners/2.jpg"
          alt="K4 Crash Rated Certified Bollard"
          className="w-full h-auto"
        />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-[550px]">
        <Image
          fill
          src="/images/banners/3.jpg"
          alt="Ai Face Device"
          className="w-full h-auto"
        />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-[550px]">
        <Image
          fill
          src="/images/banners/4.jpg"
          alt="X-Ray Baggage Scanner"
          className="w-full h-auto"
        />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-[550px]">
        <Image
          fill
          src="/images/banners/5.jpg"
          alt="Mobile Application"
          className="w-full h-auto"
        />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-[550px]">
        <Image
          fill
          src="/images/banners/6.jpg"
          alt="Ul Listed EM Lock"
          className="w-full h-auto"
        />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-[550px]">
        <Image
          fill
          src="/images/banners/7.jpg"
          alt="Door Frame Metal Detector"
          className="w-full h-auto"
        />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-[550px]">
        <Image
          fill
          src="/images/banners/8.jpg"
          alt="Research & Development"
          className="w-full h-auto"
        />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
