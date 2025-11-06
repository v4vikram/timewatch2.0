"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SupportButtons from "@/components/SupportButtons";
import { useEffect } from "react";
import LandingHeader from "./LandingHeader";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  console.log("pathname", pathname);

  // ✅ Example: hide Header/Footer on specific pages
  const hideLayout = [
    "/biometric-attendance-system-bio-1se-india",
    "/product-catalouge",
    "/access-control-security-gate-manufacturer-in-India",
    "/ai-face-t7hd",
    "/biometric-attendance-access-control-system",
    "/entrance-control-systems-secure-intelligent-pedestrian",
  ].includes(pathname);

  useEffect(() => {
    // Example: scroll to top or analytics event
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {/* Conditionally render header/footer */}
      {!hideLayout && <Header />}
      {hideLayout && pathname !== "/product-catalouge" && <LandingHeader />}

      <div>{children}</div>

      {!hideLayout && <Footer />}
      <SupportButtons />
    </>
  );
}
