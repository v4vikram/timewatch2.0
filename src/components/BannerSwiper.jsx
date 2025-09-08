"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

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
        delay: 10000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true, // Pause on hover
      }}
      loop={false}
      className="w-full h-full"
    >
      <SwiperSlide>
        <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] xl:h-screen">
          <Image
            fill
            src="/images/sliders/home/time-attendance-and-access-controll.jpg"
            alt="time-attendance-and-access-controll"
            className="object-cover"
            quality={100}
            priority
            sizes="100vw"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-[300px] md:h-[500px] lg:h-[600px] xl:h-screen">
          <Image
            fill
            src="/images/sliders/home/geo-fencing.jpg"
            alt="True Face Series"
            className="w-full h-auto object-cover"
            quality={100}
            priority
            sizes="100vw"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
