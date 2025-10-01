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
        // startZIndex={1}
        autoSize={true}
        usePortrait={true}
      >
       {/* <Image src="/images/flipbook/artboard-1.jpg" key={1} alt="Image 1" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-2.jpg" key={2} alt="Image 2" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-3.jpg" key={3} alt="Image 3" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-4.jpg" key={4} alt="Image 4" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-5.jpg" key={5} alt="Image 5" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-6.jpg" key={6} alt="Image 6" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-7.jpg" key={7} alt="Image 7" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-8.jpg" key={8} alt="Image 8" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-9.jpg" key={9} alt="Image 9" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-10.jpg" key={10} alt="Image 10" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-11.jpg" key={11} alt="Image 11" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-12.jpg" key={12} alt="Image 12" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-13.jpg" key={13} alt="Image 13" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-14.jpg" key={14} alt="Image 14" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-15.jpg" key={15} alt="Image 15" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-16.jpg" key={16} alt="Image 16" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-17.jpg" key={17} alt="Image 17" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-18.jpg" key={18} alt="Image 18" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-19.jpg" key={19} alt="Image 19" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-20.jpg" key={20} alt="Image 20" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-21.jpg" key={21} alt="Image 21" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-22.jpg" key={22} alt="Image 22" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-23.jpg" key={23} alt="Image 23" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-24.jpg" key={24} alt="Image 24" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-25.jpg" key={25} alt="Image 25" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-26.jpg" key={26} alt="Image 26" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-27.jpg" key={27} alt="Image 27" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-28.jpg" key={28} alt="Image 28" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-29.jpg" key={29} alt="Image 29" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-30.jpg" key={30} alt="Image 30" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-31.jpg" key={31} alt="Image 31" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-32.jpg" key={32} alt="Image 32" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-33.jpg" key={33} alt="Image 33" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-34.jpg" key={34} alt="Image 34" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-35.jpg" key={35} alt="Image 35" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-36.jpg" key={36} alt="Image 36" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-37.jpg" key={37} alt="Image 37" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-38.jpg" key={38} alt="Image 38" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-39.jpg" key={39} alt="Image 39" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-40.jpg" key={40} alt="Image 40" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-41.jpg" key={41} alt="Image 41" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-42.jpg" key={42} alt="Image 42" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-43.jpg" key={43} alt="Image 43" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-44.jpg" key={44} alt="Image 44" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-45.jpg" key={45} alt="Image 45" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-46.jpg" key={46} alt="Image 46" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-47.jpg" key={47} alt="Image 47" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-48.jpg" key={48} alt="Image 48" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-49.jpg" key={49} alt="Image 49" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-50.jpg" key={50} alt="Image 50" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-51.jpg" key={51} alt="Image 51" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-52.jpg" key={52} alt="Image 52" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-53.jpg" key={53} alt="Image 53" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-54.jpg" key={54} alt="Image 54" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-55.jpg" key={55} alt="Image 55" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-56.jpg" key={56} alt="Image 56" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-57.jpg" key={57} alt="Image 57" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-58.jpg" key={58} alt="Image 58" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-59.jpg" key={59} alt="Image 59" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image>
       <Image src="/images/flipbook/artboard-60.jpg" key={60} alt="Image 60" width={dimensions.width} height={dimensions.height} style={{objectFit:"cover"}}></Image> */}


    <div class="bg-red-500 text-white font-bold flex items-center justify-center h-12">1</div>
<div class="bg-green-500 text-white font-bold flex items-center justify-center h-12">2</div>
<div class="bg-blue-500 text-white font-bold flex items-center justify-center h-12">3</div>
<div class="bg-yellow-500 text-white font-bold flex items-center justify-center h-12">4</div>
<div class="bg-purple-500 text-white font-bold flex items-center justify-center h-12">5</div>
<div class="bg-pink-500 text-white font-bold flex items-center justify-center h-12">6</div>
<div class="bg-indigo-500 text-white font-bold flex items-center justify-center h-12">7</div>
<div class="bg-orange-500 text-white font-bold flex items-center justify-center h-12">8</div>
<div class="bg-teal-500 text-white font-bold flex items-center justify-center h-12">9</div>
<div class="bg-red-400 text-white font-bold flex items-center justify-center h-12">10</div>
<div class="bg-green-400 text-white font-bold flex items-center justify-center h-12">11</div>
<div class="bg-blue-400 text-white font-bold flex items-center justify-center h-12">12</div>
<div class="bg-yellow-400 text-white font-bold flex items-center justify-center h-12">13</div>
<div class="bg-purple-400 text-white font-bold flex items-center justify-center h-12">14</div>
<div class="bg-pink-400 text-white font-bold flex items-center justify-center h-12">15</div>
<div class="bg-indigo-400 text-white font-bold flex items-center justify-center h-12">16</div>
<div class="bg-orange-400 text-white font-bold flex items-center justify-center h-12">17</div>
<div class="bg-teal-400 text-white font-bold flex items-center justify-center h-12">18</div>
<div class="bg-red-300 text-white font-bold flex items-center justify-center h-12">19</div>
<div class="bg-green-300 text-white font-bold flex items-center justify-center h-12">20</div>
<div class="bg-blue-300 text-white font-bold flex items-center justify-center h-12">21</div>
<div class="bg-yellow-300 text-white font-bold flex items-center justify-center h-12">22</div>
<div class="bg-purple-300 text-white font-bold flex items-center justify-center h-12">23</div>
<div class="bg-pink-300 text-white font-bold flex items-center justify-center h-12">24</div>
<div class="bg-indigo-300 text-white font-bold flex items-center justify-center h-12">25</div>
<div class="bg-orange-300 text-white font-bold flex items-center justify-center h-12">26</div>
<div class="bg-teal-300 text-white font-bold flex items-center justify-center h-12">27</div>
<div class="bg-red-200 text-white font-bold flex items-center justify-center h-12">28</div>
<div class="bg-green-200 text-white font-bold flex items-center justify-center h-12">29</div>
<div class="bg-blue-200 text-white font-bold flex items-center justify-center h-12">30</div>
<div class="bg-yellow-200 text-white font-bold flex items-center justify-center h-12">31</div>
<div class="bg-purple-200 text-white font-bold flex items-center justify-center h-12">32</div>
<div class="bg-pink-200 text-white font-bold flex items-center justify-center h-12">33</div>
<div class="bg-indigo-200 text-white font-bold flex items-center justify-center h-12">34</div>
<div class="bg-orange-200 text-white font-bold flex items-center justify-center h-12">35</div>
<div class="bg-teal-200 text-white font-bold flex items-center justify-center h-12">36</div>
<div class="bg-red-600 text-white font-bold flex items-center justify-center h-12">37</div>
<div class="bg-green-600 text-white font-bold flex items-center justify-center h-12">38</div>
<div class="bg-blue-600 text-white font-bold flex items-center justify-center h-12">39</div>
<div class="bg-yellow-600 text-white font-bold flex items-center justify-center h-12">40</div>
<div class="bg-purple-600 text-white font-bold flex items-center justify-center h-12">41</div>
<div class="bg-pink-600 text-white font-bold flex items-center justify-center h-12">42</div>
<div class="bg-indigo-600 text-white font-bold flex items-center justify-center h-12">43</div>
<div class="bg-orange-600 text-white font-bold flex items-center justify-center h-12">44</div>
<div class="bg-teal-600 text-white font-bold flex items-center justify-center h-12">45</div>
<div class="bg-red-700 text-white font-bold flex items-center justify-center h-12">46</div>
<div class="bg-green-700 text-white font-bold flex items-center justify-center h-12">47</div>
<div class="bg-blue-700 text-white font-bold flex items-center justify-center h-12">48</div>
<div class="bg-yellow-700 text-white font-bold flex items-center justify-center h-12">49</div>
<div class="bg-purple-700 text-white font-bold flex items-center justify-center h-12">50</div>
<div class="bg-pink-700 text-white font-bold flex items-center justify-center h-12">51</div>
<div class="bg-indigo-700 text-white font-bold flex items-center justify-center h-12">52</div>
<div class="bg-orange-700 text-white font-bold flex items-center justify-center h-12">53</div>
<div class="bg-teal-700 text-white font-bold flex items-center justify-center h-12">54</div>
<div class="bg-red-800 text-white font-bold flex items-center justify-center h-12">55</div>
<div class="bg-green-800 text-white font-bold flex items-center justify-center h-12">56</div>
<div class="bg-blue-800 text-white font-bold flex items-center justify-center h-12">57</div>
<div class="bg-yellow-800 text-white font-bold flex items-center justify-center h-12">58</div>
<div class="bg-purple-800 text-white font-bold flex items-center justify-center h-12">59</div>
<div class="bg-pink-800 text-white font-bold flex items-center justify-center h-12">60</div>

      </HTMLFlipBook>
    </div>
  );
}
