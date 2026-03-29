"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface DealItemProps {
  id: string | number;
  image: string;
  altText?: string;
}

export interface HorizontalDealsProps {
  title: string;
  linkText: string;
  linkUrl?: string;
  items: DealItemProps[];
}

export default function HorizontalDeals({ title, linkText, linkUrl = "#", items }: HorizontalDealsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      // Scroll by roughly 60% of the visible width
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.6;
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.6;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 relative z-20 mt-4 mb-4 group font-sans">
      <div className="bg-white p-5 lg:p-6 shadow-sm border border-transparent hover:border-gray-200 transition-all rounded-[4px]">
        {/* Header Section */}
        <div className="flex items-baseline gap-4 mb-6">
          <h2 className="text-[20px] font-bold text-[#0F1111] leading-tight">{title}</h2>
          <a
            href={linkUrl}
            className="text-[13px] font-semibold text-[#007185] hover:text-[#C7511F] hover:underline transition-colors"
          >
            {linkText}
          </a>
        </div>

        {/* Scrollable Container Wrapper for positioning arrows */}
        <div className="relative">
          
          {/* Scrollable List */}
          <div 
            ref={scrollContainerRef}
            className="flex flex-row overflow-x-auto gap-4 no-scrollbar scroll-smooth snap-x snap-mandatory"
          >
            {items.map((item) => (
              <Link 
                key={item.id} 
                href={`/product/${item.id}`}
                className="flex-shrink-0 cursor-pointer snap-start no-underline"
              >
                {/* Fixed height to match Amazon's horizontal bars */}
                <div className="bg-[#F7F8F8] h-[200px] w-[200px] flex items-center justify-center overflow-hidden rounded-[4px] p-4 transition-all duration-300 border border-transparent hover:border-gray-100 group-hover:shadow-sm">
                  <img
                    src={item.image}
                    alt={item.altText || "Deal variation"}
                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-110 mix-blend-multiply"
                  />
                </div>
              </Link>
            ))}
          </div>

          {/* Navigation Overlay - Left Arrow (hidden by default, shows on hover of the entire section) */}
          <div className="absolute top-0 bottom-0 left-[-15px] w-12 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button 
              onClick={scrollLeft}
              className="bg-white hover:bg-[#F7F8F8] border border-gray-200 shadow-lg h-[80px] w-[45px] flex items-center justify-center text-gray-800 pointer-events-auto rounded-[4px] transition-all hover:scale-105 active:scale-95"
              aria-label="Previous deals"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          </div>

          {/* Navigation Overlay - Right Arrow */}
          <div className="absolute top-0 bottom-0 right-[-15px] w-12 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button 
              onClick={scrollRight}
              className="bg-white hover:bg-[#F7F8F8] border border-gray-200 shadow-lg h-[80px] w-[45px] flex items-center justify-center text-gray-800 pointer-events-auto rounded-[4px] transition-all hover:scale-105 active:scale-95"
              aria-label="Next deals"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
