"use client";

import React, { useRef } from "react";
import Link from "next/link";

export interface CarouselItem {
  id: string;
  image: string;
}

export interface ProductCarouselRowProps {
  title: string;
  linkText: string;
  items: CarouselItem[];
}

export default function ProductCarouselRow({ title, linkText, items }: ProductCarouselRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white w-full shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 rounded-md p-5 relative overflow-hidden group">
      <div className="flex items-end gap-3 mb-4">
        <h2 className="text-[21px] font-bold text-[#0F1111] leading-[28px]">
          {title}
        </h2>
        <a href="#" className="text-[13px] font-medium text-[#007185] hover:text-[#C7511F] hover:underline mb-[4px]">
          {linkText}
        </a>
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={scrollLeft}
        className="absolute left-0 top-[50%] -translate-y-1/2 z-10 bg-white hover:bg-white border shadow-[0_2px_5px_rgba(0,0,0,0.15)] w-[45px] h-[90px] rounded-r-[4px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-[#0F1111]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button 
        onClick={scrollRight}
        className="absolute right-0 top-[50%] -translate-y-1/2 z-10 bg-white hover:bg-white border shadow-[0_2px_5px_rgba(0,0,0,0.15)] w-[45px] h-[90px] rounded-l-[4px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-[#0F1111]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Scrollable Container */}
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scrolly-smooth h-[200px]"
      >
        {items.map((item) => (
          <Link 
            key={item.id} 
            href={`/product/${item.id}`}
            className="flex-none w-[200px] h-full cursor-pointer flex items-center justify-center bg-[#F7F7F7] p-2 hover:bg-gray-100 transition-colors rounded-sm no-underline"
          >
            <img 
              src={item.image} 
              alt="Carousel Item" 
              className="object-contain h-[180px] w-full mix-blend-multiply hover:scale-[1.03] transition-transform duration-300"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
