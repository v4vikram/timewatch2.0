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
    (_, i) => `../../flipbook/Artboard ${i + 1}@2x-100.jpg`
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
       <Image src="/images/flipbook/Artboard 1@2x-100.jpg" key={1} alt="Image 1" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 2@2x-100.jpg" key={2} alt="Image 2" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 3@2x-100.jpg" key={3} alt="Image 3" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 4@2x-100.jpg" key={4} alt="Image 4" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 5@2x-100.jpg" key={5} alt="Image 5" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 6@2x-100.jpg" key={6} alt="Image 6" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 7@2x-100.jpg" key={7} alt="Image 7" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 8@2x-100.jpg" key={8} alt="Image 8" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 9@2x-100.jpg" key={9} alt="Image 9" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 10@2x-100.jpg" key={10} alt="Image 10" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 11@2x-100.jpg" key={11} alt="Image 11" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 12@2x-100.jpg" key={12} alt="Image 12" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 13@2x-100.jpg" key={13} alt="Image 13" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 14@2x-100.jpg" key={14} alt="Image 14" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 15@2x-100.jpg" key={15} alt="Image 15" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 16@2x-100.jpg" key={16} alt="Image 16" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 17@2x-100.jpg" key={17} alt="Image 17" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 18@2x-100.jpg" key={18} alt="Image 18" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 19@2x-100.jpg" key={19} alt="Image 19" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 20@2x-100.jpg" key={20} alt="Image 20" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 21@2x-100.jpg" key={21} alt="Image 21" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 22@2x-100.jpg" key={22} alt="Image 22" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 23@2x-100.jpg" key={23} alt="Image 23" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 24@2x-100.jpg" key={24} alt="Image 24" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 25@2x-100.jpg" key={25} alt="Image 25" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 26@2x-100.jpg" key={26} alt="Image 26" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 27@2x-100.jpg" key={27} alt="Image 27" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 28@2x-100.jpg" key={28} alt="Image 28" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 29@2x-100.jpg" key={29} alt="Image 29" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 30@2x-100.jpg" key={30} alt="Image 30" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 31@2x-100.jpg" key={31} alt="Image 31" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 32@2x-100.jpg" key={32} alt="Image 32" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 33@2x-100.jpg" key={33} alt="Image 33" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 34@2x-100.jpg" key={34} alt="Image 34" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 35@2x-100.jpg" key={35} alt="Image 35" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 36@2x-100.jpg" key={36} alt="Image 36" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 37@2x-100.jpg" key={37} alt="Image 37" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 38@2x-100.jpg" key={38} alt="Image 38" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 39@2x-100.jpg" key={39} alt="Image 39" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 40@2x-100.jpg" key={40} alt="Image 40" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 41@2x-100.jpg" key={41} alt="Image 41" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 42@2x-100.jpg" key={42} alt="Image 42" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 43@2x-100.jpg" key={43} alt="Image 43" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 44@2x-100.jpg" key={44} alt="Image 44" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 45@2x-100.jpg" key={45} alt="Image 45" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 46@2x-100.jpg" key={46} alt="Image 46" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 47@2x-100.jpg" key={47} alt="Image 47" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 48@2x-100.jpg" key={48} alt="Image 48" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 49@2x-100.jpg" key={49} alt="Image 49" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 50@2x-100.jpg" key={50} alt="Image 50" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 51@2x-100.jpg" key={51} alt="Image 51" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 52@2x-100.jpg" key={52} alt="Image 52" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 53@2x-100.jpg" key={53} alt="Image 53" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 54@2x-100.jpg" key={54} alt="Image 54" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 55@2x-100.jpg" key={55} alt="Image 55" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 56@2x-100.jpg" key={56} alt="Image 56" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 57@2x-100.jpg" key={57} alt="Image 57" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 58@2x-100.jpg" key={58} alt="Image 58" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 59@2x-100.jpg" key={59} alt="Image 59" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/Artboard 60@2x-100.jpg" key={60} alt="Image 60" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>


        {/* {imagePaths.map((src, index) => (
          <Image
          src={"/images/flipbook/Artboard 1@2x-100.jpg"}
            key={index}
            alt={`Image ${index + 1}`}
            width={dimensions.width}
            height={dimensions.height}
            style={{ objectFit: "cover" }}
          />
        ))} */}
      </HTMLFlipBook>
    </div>
  );
}
