"use client";
import NextImage from "next/image";
import React, { useRef, useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";

export default function MyFlipBook() {
  const bookRef = useRef(null);
  const isFlipping = useRef(false);

  const totalImages = 60;
  const imagePaths = Array.from(
    { length: totalImages },
    (_, i) => `/images/flipbook/artboard-${i + 1}.jpg`
  );

  // Responsive dimensions
  const [dimensions, setDimensions] = useState({ width: 550, height: 800 });

  // Track if images are loaded
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 500) {
        const mobileWidth = Math.min(screenWidth * 0.95, 470);
        const mobileHeight = mobileWidth * (420 / 300); // maintain aspect ratio
        setDimensions({ width: mobileWidth, height: mobileHeight });
      } else {
        const desktopWidth = Math.min(screenWidth * 0.8, 550);
        const desktopHeight = desktopWidth * (750 / 550);
        setDimensions({ width: desktopWidth, height: desktopHeight });
      }
    };

    window.addEventListener("resize", updateDimensions);
    updateDimensions();
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Preload images
  useEffect(() => {
    const firstBatch = imagePaths.slice(0, 10); // first 10 images
    const remainingBatch = imagePaths.slice(10); // remaining images

    let loadedCount = 0;

    // Helper to mark when first 10 images are loaded
    const checkFirstBatchLoaded = () => {
      loadedCount++;
      if (loadedCount === firstBatch.length) {
        setImagesLoaded(true); // show flipbook after first 10
        // Start preloading remaining images in background
        remainingBatch.forEach((src) => {
          const img = new window.Image();
          img.src = src;
        });
      }
    };

    firstBatch.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = checkFirstBatchLoaded;
    });
  }, []);

  // Smooth wheel/touch handling
  useEffect(() => {
    const handleWheel = (e) => {
      if (!bookRef.current || isFlipping.current) return;
      const flip = bookRef.current.pageFlip();
      const totalPages = flip.getPageCount();
      const currentPage = flip.getCurrentPageIndex();

      if (e.deltaY > 0 && currentPage < totalPages - 1) {
        isFlipping.current = true;
        flip.flipNext();
        setTimeout(() => (isFlipping.current = false), 300);
      } else if (e.deltaY < 0 && currentPage > 0) {
        isFlipping.current = true;
        flip.flipPrev();
        setTimeout(() => (isFlipping.current = false), 300);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  if (!imagesLoaded) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-b-4 border-gray-300"></div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center bg-[#e0e0e0] h-screen overflow-hidden">
      <HTMLFlipBook
        width={dimensions.width}
        height={dimensions.height}
        ref={bookRef}
        drawShadow={false}
        mobileScrollSupport={true}
        flippingTime={400} // faster for mobile
        showCover={false}
        maxShadowOpacity={0.5}
        autoSize={true}
        usePortrait={true}
        swipeDistance={30} // easier swipe on mobile
      >
        {imagePaths.map((src, i) => (
          <NextImage
            key={i}
            src={src}
            alt={`Page ${i + 1}`}
            width={dimensions.width}
            height={dimensions.height}
            style={{ objectFit: "cover" }}
            priority
          />
        ))}

        {/* Optional colored numbered divs */}
        {Array.from({ length: 60 }, (_, i) => (
          <div
            key={i}
            className={`flex items-center justify-center h-12 text-white font-bold bg-[${getColor(
              i
            )}]`}
          >
            {i + 1}
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
}

// Helper function for colored divs (example gradient colors)
function getColor(index) {
  const colors = [
    "red-500",
    "green-500",
    "blue-500",
    "yellow-500",
    "purple-500",
    "pink-500",
    "indigo-500",
    "orange-500",
    "teal-500",
    "red-400",
    "green-400",
    "blue-400",
    "yellow-400",
    "purple-400",
    "pink-400",
    "indigo-400",
    "orange-400",
    "teal-400",
    "red-300",
    "green-300",
    "blue-300",
    "yellow-300",
    "purple-300",
    "pink-300",
    "indigo-300",
    "orange-300",
    "teal-300",
    "red-200",
    "green-200",
    "blue-200",
    "yellow-200",
    "purple-200",
    "pink-200",
    "indigo-200",
    "orange-200",
    "teal-200",
    "red-600",
    "green-600",
    "blue-600",
    "yellow-600",
    "purple-600",
    "pink-600",
    "indigo-600",
    "orange-600",
    "teal-600",
    "red-700",
    "green-700",
    "blue-700",
    "yellow-700",
    "purple-700",
    "pink-700",
    "indigo-700",
    "orange-700",
    "teal-700",
    "red-800",
    "green-800",
    "blue-800",
    "yellow-800",
    "purple-800",
    "pink-800",
  ];
  return colors[index % colors.length];
}
