import React from "react";
import Link from "next/link";

export interface CategoryCardItem {
  label?: string;
  image: string;
  href?: string;
}

export interface CategoryCardProps {
  title: string;
  items: CategoryCardItem[];
  linkText?: string;
  linkUrl?: string;
}

export default function CategoryCard({ title, items, linkText, linkUrl = "#" }: CategoryCardProps) {
  // Determine layout based on item count
  const isQuad = items.length >= 4;
  const isAsymmetric = items.length === 3;
  
  const displayItems = isQuad ? items.slice(0, 4) : isAsymmetric ? items.slice(0, 3) : items.slice(0, 1);

  return (
    <div className="bg-white rounded-[4px] flex flex-col h-full z-20 p-5 relative transition-all duration-300 shadow-sm hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-transparent hover:border-gray-100">
      
      {/* Title at top */}
      <h2 className="text-[20px] font-bold text-[#0F1111] mb-5 leading-tight min-h-[50px]">
        {title}
      </h2>

      {/* Grid Layout / Main Content Area */}
      <div className="flex-grow flex flex-col justify-start">
        {isQuad ? (
          // 2x2 Grid Layout
          <div className="grid grid-cols-2 gap-x-4 gap-y-4 flex-grow mb-2">
            {displayItems.map((item, index) => (
              <Link key={index} href={item.href || linkUrl} className="flex flex-col group h-full no-underline">
                <div className="relative w-full aspect-square overflow-hidden mb-1 flex items-center justify-center bg-[#F7F7F7] rounded-sm p-1">
                  <img
                    src={item.image}
                    alt={item.label || `Category ${index + 1}`}
                    className="object-contain w-full h-full mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                {item.label && (
                  <span className="text-[12px] text-[#0F1111] line-clamp-1 mt-[2px] group-hover:text-[#C7511F] transition-colors leading-relaxed">
                    {item.label}
                  </span>
                )}
              </Link>
            ))}
          </div>
        ) : isAsymmetric ? (
          // Asymmetric Layout
          <div className="flex flex-col gap-y-4 flex-grow mb-2 h-full">
            <Link href={displayItems[0].href || linkUrl} className="flex flex-col group h-[50%] no-underline">
              <div className="relative w-full h-full min-h-[120px] overflow-hidden mb-1 flex items-center justify-center bg-[#F7F7F7] rounded-sm p-2">
                <img
                  src={displayItems[0].image}
                  alt={displayItems[0].label || "Category Top"}
                  className="object-contain w-full h-full mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              {displayItems[0].label && (
                <span className="text-[12px] text-[#0F1111] line-clamp-1 mt-[2px] group-hover:text-[#C7511F] transition-colors leading-relaxed">
                  {displayItems[0].label}
                </span>
              )}
            </Link>
            <div className="grid grid-cols-2 gap-x-4 flex-grow h-[50%]">
              {displayItems.slice(1, 3).map((item, index) => (
                <Link key={index + 1} href={item.href || linkUrl} className="flex flex-col group h-full no-underline">
                  <div className="relative w-full h-full overflow-hidden mb-1 flex items-center justify-center bg-[#F7F7F7] rounded-sm p-1">
                    <img
                      src={item.image}
                      alt={item.label || `Category Bottom ${index + 1}`}
                      className="object-contain w-full h-full mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  {item.label && (
                    <span className="text-[12px] text-[#0F1111] line-clamp-1 mt-[2px] group-hover:text-[#C7511F] transition-colors leading-relaxed">
                      {item.label}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          // Single Image Layout
          <Link href={linkUrl} className="w-full flex-grow flex flex-col no-underline">
            <div className="w-full h-[260px] bg-[#F7F7F7] rounded-sm p-4 mb-2 flex items-center justify-center">
              <img
                src={displayItems[0]?.image}
                alt={displayItems[0]?.label || title}
                className="object-contain max-h-[240px] w-full mix-blend-multiply hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </Link>
        )}
      </div>

      {/* Optional small link at bottom */}
      {linkText && (
        <Link href={linkUrl} className="mt-auto block pt-2 no-underline">
          <span className="text-[13px] font-medium text-[#007185] hover:text-[#C7511F] hover:underline">
            {linkText}
          </span>
        </Link>
      )}
    </div>
  );
}
