"use client";

import { Phone, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function SupportButtons() {
  return (
    <div className="fixed right-2  bottom-2 md:right-4 md:bottom-4 z-10 flex flex-col gap-2">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919599953923?text=Hello%F0%9F%91%8B%F0%9F%8F%BB%20TimeWatch%2C%0AI%27m%20Interested%20in%20your%20product%20or%20services%0APlease%20Assist%20me%21%20%20" // replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition"
        title="Chat on WhatsApp"
      >
        <div className="w-[45px] h-[45px] relative">
             <Image src={'/images/whatsapp-icon.png'} fill sizes="50" alt="whatsapp support" title="whatsapp support" className="object-contain"/>
        </div>
       
        {/* <MessageCircle className="w-5 h-5" /> */}
      </a>

      {/* Call Button */}
      <a
        href="tel:+91-95999 53923" // replace with your number
        className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition"
        title="Call Us"
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  );
}
