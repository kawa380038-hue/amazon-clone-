import React from "react";

export default function ProductCarouselRowSkeleton() {
  return (
    <div className="bg-white w-full rounded-md p-5 relative overflow-hidden shadow-sm animate-pulse">
      <div className="flex items-end gap-3 mb-4">
        {/* Title block */}
        <div className="h-6 bg-gray-200 rounded w-1/3"></div>
        <div className="h-4 bg-gray-200 rounded w-16 mb-1"></div>
      </div>

      {/* Scrollable Container Skeletons */}
      <div className="flex gap-4 overflow-hidden h-[200px]">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex-none w-[200px] h-full bg-gray-100 rounded-sm"></div>
        ))}
      </div>
    </div>
  );
}
