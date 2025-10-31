"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
/* styles/globals.css */
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
        {/* <SwiperSlide>
          <div className="bg-gray-50 overflow-hidden pt-14 md:pt-0">
            <div className="container h-[60vh] md:h-[100vh] 2xl:h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center">
              <div className="flex-1 flex flex-col justify-center ">
                <div className="max-w-[600px]">
                  <h1 className="text-3xl md:text-6xl font-bold text-primary">
                    App Download Now
                    <br />
                    <span className="text-secondary"> Client Connect</span>
                  </h1>
                  <hr className="w-1/3 rounded-2xl h-1.5 mt-2 md:h-2 bg-primary border-0" />
                  <p className="text-md md:text-lg text-gray-600 leading-relaxed mt-5">
                    Client Connect lets customers instantly log complaints,
                    track progress anytime, and enjoy faster, transparent
                    support.
                  </p>
                  <Image
                    src="/images/sliders/home/client-search-bar.png"
                    alt="client-search-bar"
                    className="object-containp-2 mt-2"
                    width={180}
                    height={75}
                    quality={75}
                    priority
                    sizes="75vw"
                  />
                </div>

                <div className="relative max-w-[400px] h-[100px] items-start mt-4 hidden md:flex gap-x-4">
                  <Image
                    src="/images/sliders/home/app-store.png"
                    alt="app-store"
                    className="object-contain border border-black p-2"
                    width={75}
                    height={75}
                    quality={75}
                    priority
                    sizes="75vw"
                  />
                  <Image
                    src="/images/sliders/home/play-store.png"
                    alt="play-store"
                    className="object-contain border border-black p-2"
                    width={75}
                    height={75}
                    quality={75}
                    priority
                    sizes="75vw"
                  />
                </div>
              </div>
              <div className="flex-1 mt-5 md:mt-0">
                <div className="relative w-[300px] h-[200px] md:h-[500px] md:w-[600px] 2xl:w-[1000px]">
                  <Image
                    src="/images/sliders/home/client-phone.png"
                    alt="Instantly log complaints and effortlessly track their progress anytime"
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
        </SwiperSlide> */}
        <SwiperSlide>
          <div className="bg-gray-50 overflow-hidden pt-14 md:pt-0">
            <div className="container h-[60vh] md:h-[100vh] 2xl:h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center">
              <div className="flex-1 flex flex-col justify-center ">
                <div className="max-w-[600px]">
                  <h1 className="text-3xl md:text-6xl font-bold text-primary">
                    AI Based X-Ray
                    <span className="text-secondary"> Baggage Scanner</span>
                  </h1>
                  <hr className="w-1/3 rounded-2xl h-1.5 mt-2 md:h-2 bg-primary border-0" />
                  <p className="text-md md:text-lg text-gray-600 leading-relaxed mt-5">
                    We provide customized model solutions for our AI X-Ray
                    baggage scanner, including software customization and
                    barcode integration to meet your specific needs.
                  </p>
                </div>

                <div className="relative max-w-[500px] h-[100px] items-start mt-5 hidden md:block">
                  <Image
                    fill
                    src="/images/sliders/home/baggage-features.png"
                    alt="baggage-features"
                    className="object-contain mr-auto"
                    quality={100}
                    priority
                    sizes="100vw"
                  />
                </div>
              </div>
              <div className="flex-1 mt-5 md:mt-0">
                <div className="relative w-[310px] h-[190px] md:h-[500px] md:w-[600px] 2xl:w-[750px]">
                  <Image
                    src="/images/sliders/home/baggage.png"
                    alt="baggage scanner"
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
          <div className="bg-gray-50 overflow-hidden pt-14 md:pt-0">
            <div className="container h-[60vh] md:h-[100vh] 2xl:h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center">
              <div className="flex-1 flex flex-col justify-center ">
                <div className="max-w-[600px]">
                  <h1 className="text-3xl md:text-6xl font-bold text-primary">
                    TrueFace Series Device
                    <span className="text-secondary"> with 2 Year Waranty</span>
                  </h1>
                  <hr className="w-1/3 rounded-2xl h-1.5 mt-2 md:h-2 bg-primary border-0" />
                  <p className="text-md md:text-lg text-gray-600 leading-relaxed mt-5">
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
                <div className="relative w-[280px] h-[190px] md:h-[500px] md:w-[600px] 2xl:w-[750px]">
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
          <div className="bg-gray-50 overflow-hidden pt-14 md:pt-0">
            <div className="container h-[60vh] md:h-[100vh] 2xl:h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center">
              <div className="flex-1 flex flex-col justify-center ">
                <div className="max-w-[600px]">
                  <h1 className="text-3xl md:text-6xl font-bold text-primary">
                    Simple way to
                    <br />
                    <span className="text-secondary"> TRACK YOUR EMPLOYEE</span>
                  </h1>
                  <hr className="w-1/3 rounded-2xl h-1.5 mt-2 md:h-2 bg-primary border-0" />
                  <p className="text-md md:text-lg text-gray-600 leading-relaxed mt-5">
                    Track employees in real time with geo-fencing, ensuring
                    accurate attendance, productivity, and secure work
                    monitoring.
                  </p>
                </div>

                <div className="relative max-w-[400px] h-[100px] items-start mt-4 hidden md:flex gap-x-4">
                  <Image
                    src="/images/sliders/home/app-store.png"
                    alt="app-store"
                    className="object-contain border border-black p-2"
                    width={75}
                    height={75}
                    quality={75}
                    priority
                    sizes="75vw"
                  />
                  <Image
                    src="/images/sliders/home/play-store.png"
                    alt="play-store"
                    className="object-contain border border-black p-2"
                    width={75}
                    height={75}
                    quality={75}
                    priority
                    sizes="75vw"
                  />
                </div>
              </div>
              <div className="flex-1 mt-5 md:mt-0">
                <div className="relative w-[300px] h-[200px] md:h-[500px] md:w-[600px] 2xl:w-[750px]">
                  <Image
                    src="/images/sliders/home/mobile-applications.png"
                    alt="mobile-applications"
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
