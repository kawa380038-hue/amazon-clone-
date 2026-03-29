import React from "react";
import ProductFeatureCardSkeleton from "./ProductFeatureCardSkeleton";
import CategoryCardSkeleton from "./CategoryCardSkeleton";
import ProductCarouselRowSkeleton from "./ProductCarouselRowSkeleton";

export default function MixedContentSectionSkeleton() {
  return (
    <section className="bg-transparent w-full max-w-[1500px] mx-auto px-4 pb-8 flex flex-col gap-6 -mt-8 relative z-30">
      
      {/* Top Row: Grid of 4 Skeletons */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        <ProductFeatureCardSkeleton />
        <CategoryCardSkeleton />
        <CategoryCardSkeleton />
        <ProductFeatureCardSkeleton />
      </div>

      {/* Bottom Row: Horizontal Carousel Skeleton */}
      <ProductCarouselRowSkeleton />
      
    </section>
  );
}
