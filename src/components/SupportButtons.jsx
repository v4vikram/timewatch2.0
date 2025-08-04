"use client";

import { Phone, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function SupportButtons() {
  return (
    <div className="fixed right-4 top-1/2. -translate-y-1/2. bottom-4 z-50 flex flex-col gap-2">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919999999999" // replace with your number
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
        href="tel:+919999999999" // replace with your number
        className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition"
        title="Call Us"
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  );
}
