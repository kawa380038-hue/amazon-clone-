import React from "react";

export default function ProductFeatureCardSkeleton() {
  return (
    <div className="bg-white rounded-md flex flex-col h-[440px] z-20 p-5 relative pt-5 shadow-sm animate-pulse">
      {/* Title text block */}
      <div className="h-6 bg-gray-200 rounded w-4/5 mb-4"></div>
      
      {/* Main image block */}
      <div className="w-full flex items-center justify-center mb-4 h-[240px] bg-gray-100 rounded-sm"></div>
      
      {/* Subtitle text line */}
      <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
      <div className="h-3 bg-gray-200 rounded w-2/3 mb-4"></div>
      
      {/* Price block */}
      <div className="h-6 bg-gray-200 rounded w-1/3 mb-5"></div>
      
      {/* Thumbnails */}
      <div className="flex gap-[6px] mt-auto">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-[48px] h-[48px] rounded-[4px] bg-gray-200"></div>
        ))}
      </div>
    </div>
  );
}
