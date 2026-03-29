"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Starting ₹99",
    subtitle: "Bestselling mobile accessories",
    links: ["Wide Selection", "Top Brands"],
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1200&auto=format&fit=crop",
    bgClass: "bg-slate-700",
  },
  {
    id: 2,
    title: "Up to 50% off",
    subtitle: "Home appliances mega sale",
    links: ["Shop Now", "Top Deals"],
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=1200&auto=format&fit=crop",
    bgClass: "bg-amber-800",
  },
  {
    id: 3,
    title: "New Arrivals",
    subtitle: "Upgrade your wardrobe today",
    links: ["Men's Fashion", "Women's Fashion"],
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1200&auto=format&fit=crop",
    bgClass: "bg-blue-900",
  },
];

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-[1500px] mx-auto overflow-hidden group">
      
      {/* Carousel Container */}
      <div 
        className="relative h-[400px] md:h-[600px] w-full flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div 
            key={slide.id} 
            className={`w-full flex-shrink-0 relative ${slide.bgClass}`}
          >
            {/* The right-aligned float image */}
            <div className="absolute inset-0 flex justify-end">
              <img
                src={slide.image}
                alt={slide.subtitle}
                className="w-1/2 md:w-3/5 object-cover object-left mask-image-gradient"
                style={{
                  maskImage: "linear-gradient(to right, transparent, black 30%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 30%)",
                }}
              />
            </div>

            {/* The left-aligned text content */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 to-transparent pointer-events-none" />
            <div className="absolute inset-0 z-20 flex flex-col justify-start pt-16 md:pt-24 px-10 md:px-24 pointer-events-none">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2 drop-shadow-md">
                {slide.title}
              </h1>
              <p className="text-white text-xl md:text-2xl font-light mb-6 drop-shadow-md">
                {slide.subtitle}
              </p>
              <div className="flex gap-4 pointer-events-auto">
                {slide.links.map((link, idx) => (
                  <button 
                    key={idx} 
                    className="text-white text-sm md:text-md border border-white hover:bg-white hover:text-black py-2 px-4 transition-colors bg-black/20 backdrop-blur-sm"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
            
          </div>
        ))}
      </div>

      {/* Persistent Bottom Gradient over the sliding container */}
      <div className="absolute bottom-0 left-0 right-0 h-48 md:h-72 lg:h-96 bg-gradient-to-t from-[#EAEDED] via-[#EAEDED]/60 to-transparent z-30 pointer-events-none mix-blend-normal" />

      {/* Navigation Arrows */}
      <div className="absolute top-0 bottom-32 left-4 flex flex-col justify-center z-40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div 
          onClick={prevSlide}
          className="cursor-pointer pointer-events-auto p-4 hover:border-2 hover:border-white rounded-md group/arrow transition-all bg-black/10 backdrop-blur-sm"
        >
          <ChevronLeft className="w-10 h-10 text-white drop-shadow-lg group-hover/arrow:scale-110 transition-transform" />
        </div>
      </div>

      <div className="absolute top-0 bottom-32 right-4 flex flex-col justify-center z-40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div 
          onClick={nextSlide}
          className="cursor-pointer pointer-events-auto p-4 hover:border-2 hover:border-white rounded-md group/arrow transition-all bg-black/10 backdrop-blur-sm"
        >
          <ChevronRight className="w-10 h-10 text-white drop-shadow-lg group-hover/arrow:scale-110 transition-transform" />
        </div>
      </div>

    </div>
  );
}
