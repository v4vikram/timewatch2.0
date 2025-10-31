"use client";

import { MessageCircleMore, Phone, ArrowUp } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SupportButtons() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300); // show button after 300px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Right Side Support Buttons */}
      <div className="fixed right-4 bottom-[66px] md:right-[11px] md:bottom-20 z-10 flex flex-col gap-2 w-[160px] items-end">

 {/* WhatsApp Button */}
      <a
        href="https://wa.me/919599953923?text=Hello%20TimeWatch%2C%20I'm%20interested%20in%20your%20product%20or%20services.%20Please%20assist%20me!"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center bg-transparent hover:bg-[#25D366] text-white rounded-full shadow-lg w-[45px] h-[45px] lg:w-[55px] lg:h-[55px] hover:w-36 transition-all duration-300 overflow-hidden"
        title="Chat on WhatsApp"
      >
        <div className="flex items-center justify-center w-[45px] h-[45px] lg:w-[55px] lg:h-[55px] shrink-0">
          {/* <MessageCircleMore className="w-[24px] h-[24px]" /> */}
          <img src="/images/whatsapp.png" alt="whatsapp-color" className=""/>
        </div>
        <span className="ml-2 text-sm font-medium opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
          WhatsApp
        </span>
      </a>
      {/* Call Button (visible only on mobile) */}
      <a
        href="tel:+919599953923"
        className="group flex items-center bg-primary text-white rounded-full shadow-lg w-[45px] h-[45px] lg:w-[55px] lg:h-[55px] lg:w-[55px] lg:h-[55px] hover:w-36 transition-all duration-300 overflow-hidden md:hidden"
        title="Call Us"
      >
        <div className="flex items-center justify-center w-[45px] h-[45px] shrink-0">
          <Phone className="w-[24px] h-[24px]" />
        </div>
        <span className="ml-2 text-sm font-medium opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
          Call Us
        </span>
      </a>
      </div>

      {/* Scroll to Top Button (Left Bottom) */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed left-2 bottom-2 md:left-4 md:bottom-4 !z-[99999] flex items-center justify-center w-12 h-12 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/80 transition-all duration-300 cursor-pointer"
          title="Go to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
}
