// app/flipbook/page.jsx (SERVER COMPONENT)

import FlipBookClient from "@/components/FlipBookClient";

export const metadata = {
  title: "TimeWatch Product Catalogue | Biometric Attendance & Access Control Devices",
  description:"Explore the complete TimeWatch product catalogue featuring biometric attendance machines, access control systems, turnstiles, flap barriers, boom barriers, and advanced RFID solutions. Download detailed specs and choose the best security & time management device for your organization.",
  keywords:[
 "timewatch catalogue",
  "biometric attendance devices",
  "access control systems",
  "turnstile gates",
  "flap barrier",
  "boom barrier",
  "timewatch products",
  "security solutions india",
  "best biometric machines"
],

  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/product-catalouge`,
  },

  openGraph: {
    title: "TimeWatch Product Catalogue | Biometric Attendance & Access Control Devices",
    description:
      "xplore the complete TimeWatch product catalogue featuring biometric attendance machines, access control systems, turnstiles, flap barriers, boom barriers, and advanced RFID solutions. Download detailed specs and choose the best security & time management device for your organization.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/product-catalouge`,
    images: ["/images/flipbook/artboard-1.jpg"],
  },
};


export default function FlipbookPage() {
  return (
    <div className="min-h-screen bg-[#e0e0e0]">
      <FlipBookClient />
    </div>
  );
}
