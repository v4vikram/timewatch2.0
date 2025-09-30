"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";

export default function MyFlipBook() {
  const bookRef = useRef(null);
  const isFlipping = useRef(false);

  const totalImages = 60;
  const imagePaths = Array.from(
    { length: totalImages },
    (_, i) => `/images/flipbook/Artboard ${i + 1}@2x-100.jpg`
  );

  // State to store responsive dimensions
  const [dimensions, setDimensions] = useState({ width: 550, height: 800 });

  useEffect(() => {
    // Function to update flipbook dimensions based on window size
    const updateDimensions = () => {
      const screenWidth = window.innerWidth;
      const containerWidth = window.innerWidth * 0.5; // 80% of viewport width
      const containerHeight = containerWidth * (800 / 500); // maintain aspect ratio

      if (screenWidth < 500) {
        // 📱 Mobile layout
        const mobileWidth = Math.min(screenWidth * 0.95, 470);
        const mobileHeight = mobileWidth * (500 / 300); // keep aspect ratio
        setDimensions({ width: mobileWidth, height: mobileHeight });
      } else {
        // 💻 Desktop layout
        const desktopWidth = Math.min(screenWidth * 0.8, 550);
        const desktopHeight = desktopWidth * (800 / 550);
        setDimensions({ width: desktopWidth, height: desktopHeight });
      }
    };

    window.addEventListener("resize", updateDimensions);
    updateDimensions(); // initial call

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!bookRef.current) return;
      if (isFlipping.current) return;

      const flip = bookRef.current.pageFlip();
      const totalPages = flip.getPageCount();
      const currentPage = flip.getCurrentPageIndex();

      if (e.deltaY > 0 && currentPage < totalPages - 1) {
        isFlipping.current = true;
        flip.flipNext();
        setTimeout(() => (isFlipping.current = false), 500);
      } else if (e.deltaY < 0 && currentPage > 0) {
        isFlipping.current = true;
        flip.flipPrev();
        setTimeout(() => (isFlipping.current = false), 500);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="flex justify-center items-center bg-[#e0e0e0] h-screen overflow-hidden">
      <HTMLFlipBook
        width={dimensions.width}
        height={dimensions.height}
        ref={bookRef}
        drawShadow={false}
        mobileScrollSupport={true}
        flippingTime={500}
        showCover={false}
        maxShadowOpacity={0.5}
        // drawShadow={true}
        // flippingTime={800}
        startZIndex={1}
        autoSize={true}
        usePortrait={true}
      >
        {imagePaths.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            width={dimensions.width}
            height={dimensions.height}
            style={{ objectFit: "cover" }}
          />
        ))}
      </HTMLFlipBook>
    </div>
  );
}
