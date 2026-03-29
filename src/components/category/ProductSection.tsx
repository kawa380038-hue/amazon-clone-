import React from "react";
import Link from "next/link";
import { Star } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  isPrime: boolean;
  delivery: string;
}

interface ProductSectionProps {
  products: Product[];
  title?: string;
}

export const ProductSection = ({ products, title }: ProductSectionProps) => {
  return (
    <div className="bg-white p-6 shadow-sm border border-[#DDD] mb-8">
      {title && (
        <h2 className="text-[20px] font-bold text-[#0F1111] mb-4">{title}</h2>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id} className="flex flex-col group cursor-pointer relative pb-4">
            <div className="aspect-square relative flex items-center justify-center p-4 bg-[#F7F8F8] mb-3 overflow-hidden">
               <img 
                 src={product.image} 
                 alt={product.name} 
                 className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform"
               />
            </div>
            
            <h3 className="text-[14px] text-[#0F1111] font-medium line-clamp-2 hover:text-[#C45500] mb-1">
              {product.name}
            </h3>
            
            <div className="flex items-center space-x-1 mb-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? "fill-[#FFA41C] text-[#FFA41C]" : "text-[#DDD]"}`} 
                  />
                ))}
              </div>
              <span className="text-[12px] text-[#007185] hover:text-[#C45500] hover:underline">
                {product.reviewCount.toLocaleString()}
              </span>
            </div>

            <div className="flex items-baseline space-x-1 mb-1">
              <span className="text-[10px] text-[#0F1111] self-start mt-0.5">₹</span>
              <span className="text-[21px] font-bold text-[#0F1111]">
                {product.price.toLocaleString("en-IN")}
              </span>
            </div>

            {product.originalPrice && (
              <div className="text-[12px] text-[#565959] mb-1">
                M.R.P: <span className="line-through">₹{product.originalPrice.toLocaleString("en-IN")}</span>
              </div>
            )}

            {product.isPrime && (
              <div className="flex items-center mb-1">
                <img src="https://m.media-amazon.com/images/S/stores-image-nd-amazon-com/d/00000000-0000-0000-0000-000000000000/logos/prime-logo._CB485934571_.png" alt="prime" className="h-[18px] mt-1" />
              </div>
            )}

            <div className="text-[12px] text-[#565959]">
              {product.delivery}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
