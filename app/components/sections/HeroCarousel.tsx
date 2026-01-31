'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Array of images for mobile and desktop
  const images = [
    "/HeroDesk/hero.jpeg",
    "/HeroMedia/1.JPG",
    "/HeroMedia/2.JPG",
    "/HeroMedia/3.JPG",
    "/HeroMedia/4.JPG",
    "/HeroMedia/5.JPG",
    "/HeroMedia/6.JPG",
    "/HeroMedia/7.JPG",
    "/HeroMedia/8.JPG",
  ];
  const imagesDesk = [
    "/HeroDesk/Desk1.JPG",
    "/HeroDesk/Desk2.JPG",
    "/HeroDesk/Desk3.JPG",
    "/HeroDesk/Desk4.JPG",
    "/HeroMedia/5.JPG",
    "/HeroDesk/Desk6.JPG",
    "/HeroDesk/Desk7.JPG",
    "/HeroDesk/Desk8.JPG",
    
  ];

  // Dynamically set images based on screen width
  const imageList = isMobile ? images : imagesDesk;

  useEffect(() => {
    // Function to check the screen width
    const checkScreenSize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true); // If the screen width is <= 768px, it's mobile
      } else {
        setIsMobile(false); // Otherwise, it's desktop
      }
    };

    // Initial check when the component mounts
    checkScreenSize();

    // Event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  useEffect(() => {
    // Set up the carousel interval
    const interval = setInterval(() => {
      setActiveIndex((prev) => prev === (imageList.length - 1) ? 0 : prev + 1);
    }, 5000);

    // Cleanup the interval on unmount
    return () => clearInterval(interval);
  }, [imageList]);

  // Function to handle moving to the next slide
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % imageList.length);
  };

  // Function to handle moving to the previous slide
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + imageList.length) % imageList.length);
  };

  return (
    <div id="default-carousel" className="relative w-full h-[60vh] md:h-screen" data-carousel="slide">
      <div className="relative overflow-hidden h-full">
        {imageList.map((src, index) => (
          <div
            key={index}
            className={`absolute h-[60vh] md:h-screen inset-0 transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={src}
              layout="fill"
              className="object-cover"
              alt={`Slide ${index + 1}`}
              priority={index === activeIndex} // Set priority for active slide
            />
          </div>
        ))}
      </div>

      {/* Carousel navigation dots */}
      <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 transform -translate-x-1/2">
        {imageList.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-primary' : 'bg-gray-300'}`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {/* Book Now Button - Centered */}
      <div className="absolute z-30 top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Link href="/pages/contact-us">
          <button className="md:px-8 md:py-4 px-4 py-2 bg-primary text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300 ease-in-out">
            Book Now
          </button>
        </Link>
      </div>

      {/* Previous Button */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </span>
      </button>

      {/* Next Button */}
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </button>
    </div>
  );
}

export default HeroCarousel;
