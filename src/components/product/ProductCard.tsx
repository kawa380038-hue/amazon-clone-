"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, StarHalf, ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export interface ProductCardProps {
  id: string | number;
  title: string;
  price: string | number;
  image: string;
  rating?: number;
  reviewCount?: number;
  category?: string;
}

export const ProductCard = ({ 
  id, 
  title, 
  price, 
  image, 
  rating = 4.5, 
  reviewCount = Math.floor(Math.random() * 1000) + 100 
}: ProductCardProps) => {
  const addItem = useCartStore((state) => state.addItem);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars.push(<Star key={i} className="w-[14px] h-[14px] fill-[#FFA41C] text-[#FFA41C]" />);
        } else if (i === fullStars && hasHalfStar) {
            stars.push(<StarHalf key={i} className="w-[14px] h-[14px] fill-[#FFA41C] text-[#FFA41C]" />);
        } else {
            stars.push(<Star key={i} className="w-[14px] h-[14px] text-gray-300" />);
        }
    }
    return stars;
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Convert price string like "₹1,299" to number
    const numericPrice = typeof price === 'string' 
      ? parseFloat(price.replace(/[^\d.]/g, '')) 
      : price;

    addItem({
      id: String(id),
      name: title,
      price: numericPrice,
      image,
      originalPrice: numericPrice * 1.2, // Mock original price
      rating,
      reviewCount
    }, 1);
  };

  return (
    <Link 
      href={`/product/${id}`}
      className="bg-white border border-gray-200 rounded-md overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1"
    >
      <div className="relative w-full aspect-[4/5] bg-[#F7F8F8] flex items-center justify-center p-6 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <button 
             onClick={handleAddToCart}
             className="bg-[#FFD814] hover:bg-[#F7CA00] p-2 rounded-full shadow-md text-black transition-colors"
           >
             <ShoppingCart className="w-4 h-4" />
           </button>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-[14px] font-medium text-[#0F1111] line-clamp-2 mb-2 group-hover:text-[#007185] transition-colors leading-snug h-[40px]">
          {title}
        </h3>
        
        <div className="flex items-center gap-1 mb-2">
           <div className="flex">
             {renderStars(rating)}
           </div>
           <span className="text-[12px] text-[#007185] font-medium ml-1">
             {reviewCount.toLocaleString()}
           </span>
        </div>

        <div className="mt-auto">
          <div className="flex items-baseline gap-1">
            <span className="text-[18px] font-bold text-[#0F1111]">
              {typeof price === 'string' ? price : `₹${price.toLocaleString()}`}
            </span>
          </div>
          <p className="text-[12px] text-gray-500 mt-1">Get it by Tomorrow</p>
        </div>
      </div>
    </Link>
  );
};

