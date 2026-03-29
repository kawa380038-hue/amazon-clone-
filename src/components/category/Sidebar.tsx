"use client";

import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface Category {
  name: string;
  href: string;
  count?: number;
  current?: boolean;
  parent?: string;
  subcategories?: { name: string; count: number }[];
}

interface Brand {
  id: string;
  name: string;
  count: number;
}

interface SidebarProps {
  categories: Category[];
  brands: Brand[];
}

export const Sidebar = ({ categories, brands }: SidebarProps) => {
  // Find the current active category to show its subcategories
  const currentCategory = categories.find(c => c.current);
  const parentCategory = categories.find(c => !c.current);

  return (
    <aside className="w-[240px] flex-shrink-0 px-4 hidden lg:block bg-white border-r border-gray-200 h-fit pb-10">
      {/* Category Section */}
      <div className="mb-2">
        <h3 className="text-[14px] font-bold text-[#0F1111] mb-0.5 mt-1">Category</h3>
        
        <div className="flex flex-col">
          {parentCategory && (
            <Link href={parentCategory.href} className="flex items-center text-[14px] text-[#0F1111] hover:text-[#C45500] py-[1px] -ml-0.5">
              <ChevronLeft className="w-2.5 h-2.5 mr-0.5" strokeWidth={4} />
              <span className="font-normal">{parentCategory.name}</span>
            </Link>
          )}
          
          <div className="pl-2.5 flex flex-col">
             {currentCategory && (
               <>
                 <span className="text-[14px] font-bold text-[#0F1111] py-[1px]">{currentCategory.name}</span>
                 
                 <ul className="pl-3 space-y-0 text-[14px]">
                   {currentCategory.subcategories?.map((sub, idx) => (
                     <li key={idx}>
                       <Link href="#" className="text-[#0F1111] hover:text-[#C45500] leading-[1.2] py-[1px] block whitespace-nowrap overflow-hidden text-ellipsis">
                         {sub.name}
                       </Link>
                     </li>
                   ))}
                 </ul>
               </>
             )}
          </div>
        </div>
      </div>

      {/* Amazon Prime Section */}
      <div className="mb-3">
        <h3 className="text-[14px] font-bold text-[#0F1111] mb-0.5 pt-1">Amazon Prime</h3>
        <label className="flex items-center cursor-pointer group">
          <input 
            type="checkbox" 
            className="w-[14px] h-[14px] mr-2 rounded-[2px] border-[#888c8c] focus:ring-0 focus:ring-offset-0 appearance-none border bg-white checked:bg-white checked:border-[#888c8c]" 
          />
          <div className="flex items-center select-none h-4">
             <span className="text-[#E47911] text-[18px] font-bold mr-0.5 translate-y-[-1px]">✓</span>
             <span className="text-[#00A8E1] text-[15px] italic font-extrabold tracking-tighter">prime</span>
          </div>
        </label>
      </div>

      {/* Delivery Day Section */}
      <div className="mb-3">
        <h3 className="text-[14px] font-bold text-[#0F1111] mb-0.5 pt-1">Delivery Day</h3>
        <label className="flex items-center cursor-pointer text-[14px] text-[#0F1111] hover:text-[#C45500] group">
          <input 
            type="checkbox" 
            className="w-[14px] h-[14px] mr-2 rounded-[2px] border-[#888c8c] focus:ring-0 focus:ring-offset-0 appearance-none border bg-white" 
          />
          <span className="leading-tight">Get It by Tomorrow</span>
        </label>
      </div>

      {/* Brands Section */}
      <div className="mb-3">
        <h3 className="text-[14px] font-bold text-[#0F1111] mb-0.5 pt-1">Brands</h3>
        <ul className="space-y-0.5">
          {brands.map((brand: any) => {
            const brandName = typeof brand === 'string' ? brand : brand.name;
            return (
              <li key={brandName}>
                <label className="flex items-center cursor-pointer text-[14px] text-[#0F1111] hover:text-[#C45500] group">
                  <input 
                    type="checkbox" 
                    className="w-[14px] h-[14px] mr-2 rounded-[2px] border-[#888c8c] flex-shrink-0 focus:ring-0 focus:ring-offset-0 appearance-none border bg-white" 
                  />
                  <span className="leading-tight truncate">{brandName}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Price Section */}
      <div className="mb-3">
        <h3 className="text-[14px] font-bold text-[#0F1111] mb-0.5 pt-1">Price</h3>
        <ul className="space-y-0.5 text-[14px]">
          {["Under ₹500", "₹500 - ₹1,000", "₹1,000 - ₹2,000", "₹2,000 - ₹3,000", "Over ₹3,000"].map((price) => (
            <li key={price}>
              <Link href="#" className="text-[#0F1111] hover:text-[#C45500] leading-[1.3] py-[1px] block whitespace-nowrap overflow-hidden text-ellipsis">
                {price}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Deals & Discounts Section */}
      <div className="mb-3">
        <h3 className="text-[14px] font-bold text-[#0F1111] mb-0.5 pt-1">Deals & Discounts</h3>
        <ul className="space-y-0.5 text-[14px]">
          {["All Discounts", "Today's Deals"].map((deal) => (
            <li key={deal}>
              <Link href="#" className="text-[#0F1111] hover:text-[#C45500] leading-[1.3] py-[1px] block">
                {deal}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Pay On Delivery Section */}
      <div className="mb-3">
        <h3 className="text-[14px] font-bold text-[#0F1111] mb-0.5 pt-1">Pay On Delivery</h3>
        <label className="flex items-start cursor-pointer text-[14px] text-[#0F1111] hover:text-[#C45500] group">
          <input 
            type="checkbox" 
            className="w-[14px] h-[14px] mr-2 mt-0.5 rounded-[2px] border-[#888c8c] flex-shrink-0 focus:ring-0 focus:ring-offset-0 appearance-none border bg-white" 
          />
          <span className="leading-tight">Eligible for Pay On Delivery</span>
        </label>
      </div>

      {/* Availability Section */}
      <div className="mb-3">
        <h3 className="text-[14px] font-bold text-[#0F1111] mb-0.5 pt-1">Availability</h3>
        <label className="flex items-center cursor-pointer text-[14px] text-[#0F1111] hover:text-[#C45500] group">
          <input 
            type="checkbox" 
            className="w-[14px] h-[14px] mr-2 rounded-[2px] border-[#888c8c] flex-shrink-0 focus:ring-0 focus:ring-offset-0 appearance-none border bg-white" 
          />
          <span className="leading-tight">Include Out of Stock</span>
        </label>
      </div>

      {/* Discount Section */}
      <div className="mb-3">
        <h3 className="text-[14px] font-bold text-[#0F1111] mb-0.5 pt-1">Discount</h3>
        <ul className="space-y-0.5 text-[14px]">
          {["10% Off or more", "25% Off or more", "35% Off or more", "50% Off or more", "60% Off or more", "70% Off or more"].map((disc) => (
            <li key={disc}>
              <Link href="#" className="text-[#0F1111] hover:text-[#C45500] leading-[1.3] py-[1px] block">
                {disc}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Seller Section */}
      <div className="mb-3">
        <h3 className="text-[14px] font-bold text-[#0F1111] mb-0.5 pt-1">Seller</h3>
        <ul className="space-y-0.5">
          {["GOTO MART", "ETrade Online", "TULIP SALES", "AVENTRA INDIA", "ETRADE_FRESH_MAA4", "SHUBH SAI ENTERPRISES", "Etrade_Fresh_Del5"].map((seller) => (
            <li key={seller}>
              <label className="flex items-center cursor-pointer text-[14px] text-[#0F1111] hover:text-[#C45500] group">
                <input 
                  type="checkbox" 
                  className="w-[14px] h-[14px] mr-2 rounded-[2px] border-[#888c8c] flex-shrink-0 focus:ring-0 focus:ring-offset-0 appearance-none border bg-white" 
                />
                <span className="leading-tight truncate uppercase text-[13px]">{seller}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Top Brands Section */}
      <div className="mb-3">
        <h3 className="text-[14px] font-bold text-[#0F1111] mb-0.5 pt-1 leading-tight">Top Brands</h3>
        <label className="flex items-center cursor-pointer text-[14px] text-[#0F1111] hover:text-[#C45500] group">
          <input 
            type="checkbox" 
            className="w-[14px] h-[14px] mr-2 rounded-[2px] border-[#888c8c] flex-shrink-0 focus:ring-0 focus:ring-offset-0 appearance-none border bg-white" 
          />
          <span className="leading-tight">Top Brands</span>
        </label>
      </div>
    </aside>
  );
};
