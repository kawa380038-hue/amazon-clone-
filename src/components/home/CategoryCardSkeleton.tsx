import React from "react";

export default function CategoryCardSkeleton() {
  return (
    <div className="bg-white shadow-sm rounded-md flex flex-col h-[420px] z-20 mx-2 lg:mx-0 p-4 lg:p-5 relative md:mx-0 pt-4 animate-pulse">
      {/* Title text block */}
      <div className="h-7 bg-gray-200 rounded-md w-3/4 mb-4"></div>
      
      {/* The 2x2 image grid */}
      <div className="flex-grow grid grid-cols-2 gap-4 mb-6">
        {[...Array(4)].map((_, i) => (
           <div key={i} className="flex flex-col">
             {/* Image block */}
             <div className="w-full aspect-square bg-gray-200 rounded-sm"></div>
             {/* Subtitle text line */}
             <div className="h-3 bg-gray-200 rounded-sm w-3/4 mt-2"></div>
           </div>
        ))}
      </div>
      
      {/* Bottom link text */}
      <div className="mt-auto">
        <div className="h-4 bg-gray-200 rounded-md w-1/4"></div>
      </div>
    </div>
  );
}
