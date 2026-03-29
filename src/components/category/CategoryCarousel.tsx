"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Banner {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

interface CategoryCarouselProps {
  banners: Banner[];
}

export const CategoryCarousel = ({ banners }: CategoryCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative group overflow-hidden bg-white mb-6 select-none shadow-sm border border-[#DDD]">
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {banners.map((banner) => (
          <div key={banner.id} className="min-w-full relative aspect-[3000/700] max-h-[350px]">
            <img 
              src={banner.image} 
              alt={banner.title} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 h-[100px] w-10 flex items-center justify-center bg-white/50 hover:bg-white/80 text-[#111] border border-[#DDD] rounded-r shadow-sm opacity-0 group-hover:opacity-100 transition-all z-10"
      >
        <ChevronLeft className="w-8 h-8 font-thin" strokeWidth={1} />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 h-[100px] w-10 flex items-center justify-center bg-white/50 hover:bg-white/80 text-[#111] border border-[#DDD] rounded-l shadow-sm opacity-0 group-hover:opacity-100 transition-all z-10"
      >
        <ChevronRight className="w-8 h-8 font-thin" strokeWidth={1} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1.5">
        {banners.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-2 h-2 rounded-full border border-gray-400 ${idx === currentSlide ? "bg-gray-700" : "bg-white/80"}`}
          />
        ))}
      </div>
    </div>
  );
};
