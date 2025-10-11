"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
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
        pagination={{ clickable: true }}
        speed={1500}
        autoplay={false}
        className="w-full"
      >
        {/* Slide 1 - AI Baggage Scanner */}
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
                    We provide customized model solutions for our AI X-Ray baggage scanner, including software customization and barcode integration to meet your specific needs.
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
              
              <div className="flex-1 mt-5 md:mt-0 relative">
                {/* Decorative elements - Desktop only */}
                <div className="hidden md:block">
                  {/* Security badge */}
                  <div className="absolute -top-10 -left-8 z-10 bg-primary text-white px-6 py-3 rounded-full shadow-lg transform rotate-12">
                    <div className="text-xs font-bold">AI POWERED</div>
                  </div>
                  
                  {/* Scanning effect lines */}
                  <div className="absolute top-20 -right-4 w-32 h-1 bg-secondary opacity-70"></div>
                  <div className="absolute top-32 -right-8 w-24 h-1 bg-primary opacity-50"></div>
                  <div className="absolute top-44 -right-2 w-28 h-1 bg-secondary opacity-60"></div>
                  
                  {/* Security icon circles */}
                  <div className="absolute bottom-20 -left-12 w-20 h-20 border-4 border-primary rounded-full opacity-30"></div>
                  <div className="absolute bottom-32 -left-6 w-12 h-12 border-4 border-secondary rounded-full opacity-40"></div>
                  
                  {/* Tech dots pattern */}
                  <div className="absolute top-1/3 -right-6 grid grid-cols-3 gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full opacity-60"></div>
                    <div className="w-2 h-2 bg-secondary rounded-full opacity-60"></div>
                    <div className="w-2 h-2 bg-primary rounded-full opacity-60"></div>
                    <div className="w-2 h-2 bg-secondary rounded-full opacity-60"></div>
                    <div className="w-2 h-2 bg-primary rounded-full opacity-60"></div>
                    <div className="w-2 h-2 bg-secondary rounded-full opacity-60"></div>
                  </div>
                </div>

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

        {/* Slide 2 - TrueFace Device */}
        <SwiperSlide>
          <div className="bg-gray-50 overflow-hidden pt-14 md:pt-0">
            <div className="container h-[60vh] md:h-[100vh] 2xl:h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center">
              <div className="flex-1 flex flex-col justify-center ">
                <div className="max-w-[600px]">
                  <h1 className="text-3xl md:text-6xl font-bold text-primary">
                    TrueFace Series Device
                    <span className="text-secondary"> with 2 Year Warranty</span>
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
              
              <div className="flex-1 mt-5 md:mt-0 relative">
                {/* Decorative elements - Desktop only */}
                <div className="hidden md:block">
                  {/* Warranty badge */}
                  <div className="absolute -top-6 -left-10 z-10 bg-secondary text-white px-5 py-2 rounded-lg shadow-lg transform -rotate-6">
                    <div className="text-sm font-bold">2 YEAR WARRANTY</div>
                  </div>
                  
                  {/* Biometric fingerprint circle */}
                  <div className="absolute top-16 -right-8 w-24 h-24 border-2 border-dashed border-primary rounded-full opacity-40 animate-spin" style={{animationDuration: '20s'}}></div>
                  
                  {/* Feature highlights */}
                  <div className="absolute bottom-28 -left-8 bg-white px-4 py-2 rounded-full shadow-md border-2 border-primary">
                    <div className="text-xs font-semibold text-primary">HRM Integration</div>
                  </div>
                  
                  {/* Tech corner accent */}
                  <div className="absolute bottom-12 -right-4">
                    <div className="w-16 h-16 border-t-4 border-r-4 border-secondary opacity-50"></div>
                  </div>
                  
                  {/* Floating squares */}
                  <div className="absolute top-1/2 -left-6 w-8 h-8 bg-primary opacity-20 transform rotate-45"></div>
                  <div className="absolute top-2/3 -right-2 w-6 h-6 bg-secondary opacity-20 transform rotate-12"></div>
                </div>

                <div className="relative w-[280px] h-[130px] md:h-[500px] md:w-[600px] 2xl:w-[750px]">
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

        {/* Slide 3 - Employee Tracking */}
        <SwiperSlide>
          <div className="bg-gray-50 overflow-hidden pt-14 md:pt-0">
            <div className="container h-[60vh] md:h-[100vh] 2xl:h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center">
              <div className="flex-1 flex flex-col justify-center ">
                <div className="max-w-[600px]">
                  <h1 className="text-3xl md:text-6xl font-bold text-primary">
                    Simple way to<br/>
                    <span className="text-secondary"> TRACK YOUR EMPLOYEE</span>
                  </h1>
                  <hr className="w-1/3 rounded-2xl h-1.5 mt-2 md:h-2 bg-primary border-0" />
                  <p className="text-md md:text-lg text-gray-600 leading-relaxed mt-5">
                    Track employees in real time with geo-fencing, ensuring accurate attendance, productivity, and secure work monitoring.
                  </p>
                </div>
              </div>
              
              <div className="flex-1 mt-5 md:mt-0 relative">
                {/* Decorative elements - Desktop only */}
                <div className="hidden md:block">
                  {/* GPS Location pin */}
                  <div className="absolute -top-8 left-10 z-10 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-6 h-6 border-2 border-white rounded-full"></div>
                  </div>
                  
                  {/* Real-time badge */}
                  <div className="absolute top-8 -left-12 bg-secondary text-white px-4 py-2 rounded-full shadow-md transform -rotate-12">
                    <div className="text-xs font-bold">REAL-TIME</div>
                  </div>
                  
                  {/* Geo-fence circles */}
                  <div className="absolute bottom-24 -right-6 w-32 h-32 border-4 border-primary rounded-full opacity-20"></div>
                  <div className="absolute bottom-32 -right-2 w-20 h-20 border-4 border-secondary rounded-full opacity-30"></div>
                  
                  {/* Signal waves */}
                  <div className="absolute top-1/3 -right-8">
                    <div className="w-4 h-4 bg-primary rounded-full opacity-60"></div>
                    <div className="w-6 h-6 border-2 border-primary rounded-full absolute top-0 left-0 -translate-x-1 -translate-y-1 opacity-40"></div>
                    <div className="w-8 h-8 border-2 border-primary rounded-full absolute top-0 left-0 -translate-x-2 -translate-y-2 opacity-20"></div>
                  </div>
                  
                  {/* Mobile device indicator */}
                  <div className="absolute bottom-16 -left-8 border-4 border-secondary rounded-lg w-12 h-16 opacity-40"></div>
                  
                  {/* Connection lines */}
                  <div className="absolute top-1/2 left-0 w-20 h-0.5 bg-primary opacity-30 transform -rotate-45"></div>
                </div>

                <div className="relative w-[300px] h-[220px] md:h-[500px] md:w-[600px] 2xl:w-[750px]">
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