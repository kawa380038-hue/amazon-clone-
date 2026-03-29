import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface CategoryHeaderProps {
  breadcrumbs: string[];
  title: string;
  description?: string;
}

export const CategoryHeader = ({ breadcrumbs, title, description }: CategoryHeaderProps) => {
  return (
    <div className="bg-white border-b border-[#DDD] mt-16 md:mt-0 w-full">
      <div className="w-full px-4 py-2">
        {/* Breadcrumbs */}
      <nav className="flex items-center text-[12px] text-[#565959] mb-0.5 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {breadcrumbs.map((crumb, idx) => (
          <React.Fragment key={idx}>
            <Link href="#" className="hover:text-[#C45500] hover:underline">
              {crumb}
            </Link>
            {idx < breadcrumbs.length - 1 && (
              <ChevronRight className="w-2.5 h-2.5 mx-1 text-[#888]" />
            )}
          </React.Fragment>
        ))}
      </nav>
 
      {/* Title */}
      <h1 className="text-[28px] font-bold text-[#E47911] leading-tight mb-0.5">
        {title}
      </h1>
 
      {/* Description */}
      {description && (
        <p className="text-[13px] text-[#565959] leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
          {description}
        </p>
      )}
      </div>
    </div>
  );
};
