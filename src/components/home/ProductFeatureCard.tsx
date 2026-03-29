"use client";

import React, { useState } from "react";
import Link from "next/link";

export interface ProductFeatureCardProps {
  id: string;
  title: string;
  mainImage: string;
  description: string;
  price: string;
  mrp?: string;
  thumbnails: string[];
}

export default function ProductFeatureCard({
  id,
  title,
  mainImage,
  description,
  price,
  mrp,
  thumbnails,
}: ProductFeatureCardProps) {
  const [activeThumb, setActiveThumb] = useState(0);

  // Combine mainImage and thumbnails if mainImage isn't primarily in thumbnails array
  const allThumbnails = thumbnails.length > 0 ? thumbnails : [mainImage];
  const currentImage = allThumbnails[activeThumb] || mainImage;

  return (
    <div className="bg-white rounded-[4px] flex flex-col h-full z-20 p-5 relative transition-all duration-300 shadow-sm hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-transparent hover:border-gray-100">
      
      <Link href={`/product/${id}`} className="flex flex-col flex-grow group no-underline">
        {/* Title at top */}
        <h2 className="text-[20px] font-bold text-[#0F1111] mb-5 leading-tight min-h-[50px]">
          {title}
        </h2>

        {/* Main visual */}
        <div className="flex-grow flex flex-col justify-start text-left">
          
          {/* Large product image (centered and properly scaled) */}
          <div className="w-full flex items-center justify-center mb-4 h-[220px] bg-[#F7F7F7] overflow-hidden rounded-sm p-2">
            <img
              src={currentImage}
              alt={title}
              className="object-contain w-full h-full mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>
          
          {/* Product name (small text) */}
          <p className="text-[13px] text-[#0F1111] leading-snug line-clamp-2 mb-2 group-hover:text-[#C7511F] transition-colors">
            {description}
          </p>
          
          {/* Price (bold, larger) */}
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-[21px] font-medium text-[#0F1111] leading-none">
              <span className="text-[14px] font-normal relative top-[-1px]">₹</span>{price.replace('₹', '')}
            </span>
            {mrp && (
              <span className="text-[13px] text-[#565959] line-through">
                {mrp}
              </span>
            )}
          </div>
        </div>
      </Link>

      {/* Thumbnail images below (horizontal row, properly separated, pushed to bottom) */}
      <div className="flex gap-[8px] mt-auto pt-2">
        {allThumbnails.slice(0, 4).map((thumb, index) => (
          <div 
            key={index} 
            onMouseEnter={() => setActiveThumb(index)}
            onClick={() => setActiveThumb(index)}
            className={`w-[50px] h-[50px] rounded-[4px] border p-1 flex items-center justify-center cursor-pointer transition-all ${
              activeThumb === index 
                ? "border-[#007185] shadow-[0_0_0_1px_#007185]" 
                : "border-gray-200 hover:border-[#007185]"
            }`}
          >
            <img 
              src={thumb} 
              alt={`Thumbnail ${index + 1}`} 
              className="object-contain w-full h-full mix-blend-multiply" 
            />
          </div>
        ))}
      </div>

    </div>
  );
}
