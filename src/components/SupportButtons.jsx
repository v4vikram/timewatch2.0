"use client";

import { MessageCircleMore, Phone } from "lucide-react";
import Image from "next/image";

export default function SupportButtons() {
  return (
    <div className="fixed right-2 bottom-2 md:right-4 md:bottom-4 z-10 flex flex-col gap-2  w-[160px] items-end">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919599953923?text=Hello%F0%9F%91%8B%F0%9F%8F%BB%20TimeWatch%2C%0AI%27m%20Interested%20in%20your%20product%20or%20services%0APlease%20Assist%20me%21%20%20"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center w-[48px] hover:w-[140px] h-12 bg-[#2ba520] text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out overflow-hidden"
        title="Chat on WhatsApp"
      >
        <div className="w-12 h-12 flex items-center justify-center shrink-0">
          <Image
            src={"/images/whatsapp-icon.png"}
            width={36}
            height={36}
            alt="whatsapp support"
            title="whatsapp support"
          />
          {/* <MessageCircleMore className="w-7 h-7"/> */}
        </div>
        <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
          WhatsApp
        </span>
      </a>

      {/* Call Button */}
      <a
        href="tel:+91-9599953923"
        className="group flex items-center w-[48px] hover:w-[140px] h-12 bg-primary text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out overflow-hidden"
        title="Call Us"
      >
        <div className="w-12 h-12 flex items-center justify-center shrink-0">
          <Phone className="w-6 h-6" />
        </div>
        <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
          Contact Us
        </span>
      </a>
    </div>
  );
}
