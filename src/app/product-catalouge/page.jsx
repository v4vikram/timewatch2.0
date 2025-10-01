"use client";
import NextImage from "next/image";
import React, { useRef, useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";

export default function MyFlipBook() {
  const bookRef = useRef(null);
  const isFlipping = useRef(false);

  const totalImages = 60;
  const firstLoadCount = 10; // first N images to load immediately

  const imagePaths = Array.from(
    { length: totalImages },
    (_, i) => `/images/flipbook/artboard-${i + 1}.jpg`
  );

  const [dimensions, setDimensions] = useState({ width: 550, height: 800 });
  const [loadedImages, setLoadedImages] = useState(
    imagePaths.slice(0, firstLoadCount).map(() => false)
  );

  // Responsive dimensions
  useEffect(() => {
    const updateDimensions = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 500) {
        const mobileWidth = Math.min(screenWidth * 0.95, 470);
        const mobileHeight = mobileWidth * (420 / 300);
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

  // Preload first N images immediately
  useEffect(() => {
    imagePaths.slice(0, firstLoadCount).forEach((src, index) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        setLoadedImages((prev) => {
          const newLoaded = [...prev];
          newLoaded[index] = true;
          return newLoaded;
        });
      };
    });
  }, []);

  // Preload remaining images in background progressively
  const preloadNextImages = (currentIndex) => {
    const nextImages = imagePaths.slice(currentIndex + 1, totalImages);
    nextImages.forEach((src, i) => {
      const img = new window.Image();
      img.src = src;
    });
  };

  // Smooth wheel handling
  useEffect(() => {
    const handleWheel = (e) => {
      if (!bookRef.current || isFlipping.current) return;
      const flip = bookRef.current.pageFlip();
      const totalPages = flip.getPageCount();
      const currentPage = flip.getCurrentPageIndex();

      // Preload next images when user flips near end of loaded ones
      if (currentPage + 3 > loadedImages.length && loadedImages.length < totalImages) {
        // load next batch of 5 images
        const nextBatchCount = Math.min(5, totalImages - loadedImages.length);
        imagePaths
          .slice(loadedImages.length, loadedImages.length + nextBatchCount)
          .forEach((src) => {
            const img = new window.Image();
            img.src = src;
          });
        setLoadedImages((prev) => [
          ...prev,
          ...Array(nextBatchCount).fill(false),
        ]);
      }

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
  }, [loadedImages]);

  if (loadedImages.length < firstLoadCount || !loadedImages.slice(0, firstLoadCount).every(Boolean)) {
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
        flippingTime={400}
        showCover={false}
        maxShadowOpacity={0.5}
        autoSize={true}
        usePortrait={true}
        swipeDistance={30}
        onFlip={(e) => preloadNextImages(e.data)} // preload next images
      >
        {imagePaths.map((src, i) => (
          <NextImage
            key={i}
            src={src}
            alt={`Page ${i + 1}`}
            width={dimensions.width}
            height={dimensions.height}
            style={{ objectFit: "cover" }}
            priority={i < firstLoadCount} // only first images priority
          />
        ))}
      </HTMLFlipBook>
    </div>
  );
}
