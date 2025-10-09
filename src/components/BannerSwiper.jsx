"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

export default function BannerSwiper() {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        speed={1500}
        autoplay={false}
        // autoplay={{
        //   delay: 10000,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: true,
        // }}
        // loop={false}
        className="w-full"
      >
        <SwiperSlide>
          <div className="bg-gray-200 overflow-hidden pt-14 md:pt-0">
            <div className="container h-[60vh] lg:h-[80vh] flex flex-col lg:flex-row items-center">
              <div className="flex-1 flex flex-col justify-center ">
                <div className="max-w-[600px]">
                  <h1 class="text-3xl md:text-6xl font-bold text-primary">
                    TrueFace Series Device
                    <span class="text-secondary"> with 2 Year Waranty</span>
                  </h1>
                  <hr className="w-1/3 rounded-2xl h-1.5 mt-2 md:h-2 bg-primary border-0" />
                  <p class="text-md md:text-lg text-gray-600 leading-relaxed mt-5">
                    Revolutionary biometric time attendance system with advanced
                    HRM integration. Transform your workforce management with
                    cutting-edge technology.
                  </p>
                </div>

                <div className="relative max-w-[400px] h-[100px] items-start mt-9 hidden md:block">
                  <Image
                    fill
                    src="/images/sliders/home/Features-icon.png"
                    alt="time-attendance-and-access-controll"
                    className="object-contain mr-auto brightness-0 contrast-200"
                    quality={100}
                    priority
                    sizes="100vw"
                  />
                </div>
              </div>
              <div className="flex-1 mt-5 md:mt-0">
                <div className="relative w-[280px] h-[130px] md:h-[500px] md:w-[750px]">
                  <Image
                    src="/images/sliders/home/trueface-products.png"
                    alt="time-attendance-and-access-controll"
                    fill
                    className="object-contain w-full h-full"
                    quality={100}
                    priority
                    sizes="100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-200 overflow-hidden pt-14 md:pt-0">
            <div className="container h-[60vh] lg:h-[80vh] flex flex-col lg:flex-row items-center">
              <div className="flex-1 flex flex-col justify-center ">
                <div className="max-w-[600px]">
                  <h1 class="text-3xl md:text-6xl font-bold text-primary">
                    Simple way to<br/>
                    <span class="text-secondary"> TRACK YOUR EMPLOYEE</span>
                  </h1>
                  <hr className="w-1/3 rounded-2xl h-1.5 mt-2 md:h-2 bg-primary border-0" />
                  <p class="text-md md:text-lg text-gray-600 leading-relaxed mt-5">
                    Track employees in real time with geo-fencing, ensuring accurate attendance, productivity, and secure work monitoring.
                  </p>
                </div>

                <div className="relative max-w-[400px] h-[100px] items-start mt-9 hidden md:block">
                  <Image
                    fill
                    src="/images/sliders/home/Features-icon.png"
                    alt="time-attendance-and-access-controll"
                    className="object-contain mr-auto brightness-0 contrast-200"
                    quality={100}
                    priority
                    sizes="100vw"
                  />
                </div>
              </div>
              <div className="flex-1 mt-5 md:mt-0">
                <div className="relative w-[280px] h-[130px] md:h-[500px] md:w-[750px]">
                  <Image
                    src="/images/sliders/home/trueface-products.png"
                    alt="time-attendance-and-access-controll"
                    fill
                    className="object-contain w-full h-full"
                    quality={100}
                    priority
                    sizes="100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
