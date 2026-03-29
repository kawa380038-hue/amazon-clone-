"use client";

import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import CategoryCardSkeleton from "./CategoryCardSkeleton";
import { PRODUCT_DATA } from "@/lib/mockData";
import { CategoryCardProps } from "./CategoryCard";

export default function CategoryGrid() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);
  const cards = PRODUCT_DATA.categories;

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 relative z-30 -mt-[120px] md:-mt-[180px] lg:-mt-[260px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
        {isLoading ? (
          [...Array(4)].map((_, idx) => (
            <CategoryCardSkeleton key={idx} />
          ))
        ) : (
          cards.map((card, idx) => (
            <CategoryCard
              key={idx}
              title={card.title}
              items={card.items}
              linkText={card.linkText}
              linkUrl={card.linkUrl}
            />
          ))
        )}
      </div>
    </div>
  );
}
