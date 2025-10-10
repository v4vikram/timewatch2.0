"use client";

import { FileText, ChevronLeft, ChevronRight } from "lucide-react";
import NextImage from "next/image";
import React, { useRef, useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";

export default function MyFlipBook() {
  const bookRef = useRef(null);
  const isFlipping = useRef(false);
  const audio = useRef(null);
  const [page, setPage] = useState(0);
  const [css, setCss] = useState("-272.5px");
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 550, height: 800 });
  const [width, setWidth] = useState();

  const totalImages = 60;
  const imagePaths = Array.from(
    { length: totalImages },
    (_, i) => `/images/flipbook/artboard-${i + 1}.jpg`
  );

  // Create audio only in browser
  useEffect(() => {
    if (typeof window !== "undefined") {
      audio.current = new Audio("/videos/page-flip-sound.mp3");
    }
  }, []);

  // Responsive dimensions
  useEffect(() => {
    const updateDimensions = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 1023) {
        const desktopWidth = Math.min(screenWidth * 0.3, 500);
        const desktopHeight = desktopWidth * (650 / 500);
        setDimensions({ width: desktopWidth, height: desktopHeight });

      } 
      // else if (screenWidth < 500 && screenWidth < 1024) {
      //   const mobileWidth = Math.min(screenWidth * 0.95, 470);
      //   const mobileHeight = mobileWidth * (420 / 300);
      //   setDimensions({ width: mobileWidth, height: mobileHeight });

      // }
       else {
        const mobileWidth = Math.min(screenWidth * 0.95, 470);
        const mobileHeight = mobileWidth * (420 / 300);
        setDimensions({ width: mobileWidth, height: mobileHeight });
      }
    };
    window.addEventListener("resize", updateDimensions);
    updateDimensions();
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Preload images
  useEffect(() => {
    const firstBatch = imagePaths.slice(0, 3);
    const remainingBatch = imagePaths.slice(5);
    let loadedCount = 0;

    const checkFirstBatchLoaded = () => {
      loadedCount++;
      if (loadedCount === firstBatch.length) {
        setImagesLoaded(true);
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

  // Scroll / wheel handler
  useEffect(() => {
    const handleWheel = (e) => {
      if (!bookRef.current || isFlipping.current) return;

      const flip = bookRef.current.pageFlip();
      const totalPages = flip.getPageCount();
      const currentPage = flip.getCurrentPageIndex();

      if (e.deltaY > 0 && currentPage < totalPages - 1) {
        handleNext();
      } else if (e.deltaY < 0 && currentPage > 0) {
        handlePrev();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [audioEnabled]);

  const handleNext = () => {
    if (!bookRef.current || isFlipping.current) return;
    const flip = bookRef.current.pageFlip();
    if (flip.getCurrentPageIndex() < flip.getPageCount() - 1) {
      isFlipping.current = true;
      flip.flipNext();
      if (audioEnabled && audio.current) audio.current.play().catch(() => {});
      setTimeout(() => (isFlipping.current = false), 700);
    }
  };

  const handlePrev = () => {
    if (!bookRef.current || isFlipping.current) return;
    const flip = bookRef.current.pageFlip();
    if (flip.getCurrentPageIndex() > 0) {
      isFlipping.current = true;
      flip.flipPrev();
      if (audioEnabled && audio.current) audio.current.play().catch(() => {});
      setTimeout(() => (isFlipping.current = false), 700);
    }
  };

  // ✅ Keep CSS position based on page number
  useEffect(() => {
    if (width > 1281) {
      if (page <= 0) setCss("-272.5px");
      else if (page + 1 == totalImages) setCss("272.5px");
      else setCss("0px");
    } else {
      if (page <= 0) setCss("-204.5px");
      else if (page + 1 == totalImages) setCss("204.5px");
      else setCss("0px");
    }
  }, [page, width]);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", function () {
      setWidth(window.innerWidth);
    });
  }, [width]);

  if (!imagesLoaded) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-b-4 border-gray-300"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center bg-[#e0e0e0] h-screen overflow-hidden relative">
      {/* Speaker toggle button */}
      <div className="absolute top-4 right-4 flex items-center gap-4">
        {/* Download Catalogue */}
        <div className="mt-4 max-w-[750px]">
          <a
            href="/images/product-catalogue.pdf"
            download="product-catalogue.pdf"
            className="p-3 rounded-full border border-gray-600 bg-white text-gray-800 hover:bg-gray-100 flex items-center mb-4"
          >
            <FileText className="text-primary mr-2" />
            <strong>Download Catalogue</strong>
          </a>
        </div>
        <button
          className={` p-3 rounded-full border border-gray-600 bg-white text-gray-800 ${
            audioEnabled ? "bg-green-500 text-white" : ""
          }`}
          onClick={() => setAudioEnabled((prev) => !prev)}
        >
          {audioEnabled ? "🔊 On" : "🔇 Off"}
        </button>
      </div>

      {/* Flipbook wrapper */}
      <div
        className={`!flex !justify-center !items-center !w-full relative transition-all ease-in duration-400`}
        style={{ left: width > 768 ? css : "" }}
      >
        <HTMLFlipBook
          width={dimensions.width}
          height={dimensions.height}
          ref={bookRef}
          drawShadow={false}
          mobileScrollSupport={true}
          flippingTime={500}
          showCover={true}
          maxShadowOpacity={0.5}
          autoSize={true}
          usePortrait={true}
          swipeDistance={30}
          style={{ margin: "0 auto", display: "block" }}
          onFlip={(e) => {
            setPage(e.data);
            if (audioEnabled && audio.current)
              audio.current.play().catch(() => {});
          }}
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
        </HTMLFlipBook>
      </div>
      {/* Prev / Next buttons */}
      <div className="flex gap-4 mt-4 justify-between">
        <button
          onClick={handlePrev}
          className="p-3 bg-white border border-gray-400 rounded-full shadow hover:bg-gray-100 cursor-pointer"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={handleNext}
          className="p-3 bg-white border border-gray-400 rounded-full shadow hover:bg-gray-100 cursor-pointer"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
