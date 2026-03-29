"use client";

import React from 'react';
import Link from 'next/link';
import { Trash2, Plus, Minus } from 'lucide-react';
import { CartItem as CartItemType } from '@/types/cart';
import { useCartStore } from '@/store/cartStore';

interface CartItemProps {
  item: CartItemType;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeItem } = useCartStore();

  return (
    <div className="flex py-6 border-b border-gray-200 gap-4 sm:gap-6">
      {/* Product Image */}
      <div className="w-24 h-24 sm:w-44 sm:h-44 flex-shrink-0 flex items-center justify-center p-2">
        <img
          src={item.image}
          alt={item.name}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex-grow flex flex-col">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
          <Link 
            href={`/product/${item.id}`}
            className="text-[14px] sm:text-[18px] font-medium text-[#0F1111] hover:text-[#C7511F] hover:underline line-clamp-2 leading-tight"
          >
            {item.name}
          </Link>
          <div className="text-[14px] sm:text-[18px] font-bold text-[#0F1111]">
            ₹{item.price.toLocaleString()}
          </div>
        </div>

        <div className="text-[12px] text-[#007600] mt-1 font-medium">In stock</div>
        
        <div className="flex items-center gap-2 mt-1">
          <img 
            src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18._CB485936079_.png" 
            alt="Fulfilled" 
            className="h-[12px]"
          />
          <span className="text-[12px] text-[#565959]">Eligible for FREE Shipping</span>
        </div>

        {/* Actions Row */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-5 mt-auto pt-4">
          {/* Quantity Controls */}
          <div className="flex items-center border border-[#D5D9D9] rounded-lg shadow-sm bg-[#F0F2F2] overflow-hidden">
            <button 
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="p-1.5 hover:bg-[#E3E6E6] border-r border-[#D5D9D9] disabled:opacity-50"
              disabled={item.quantity <= 1}
            >
              <Minus size={14} />
            </button>
            <span className="px-3 py-1 text-[13px] font-medium min-w-[32px] text-center">
              {item.quantity}
            </span>
            <button 
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="p-1.5 hover:bg-[#E3E6E6] border-l border-[#D5D9D9]"
            >
              <Plus size={14} />
            </button>
          </div>

          <div className="h-4 w-[1px] bg-gray-300 hidden sm:block"></div>

          <button 
            onClick={() => removeItem(item.id)}
            className="text-[12px] text-[#007185] hover:underline"
          >
            Delete
          </button>
          
          <div className="h-4 w-[1px] bg-gray-300 hidden sm:block"></div>
          
          <button className="text-[12px] text-[#007185] hover:underline">
            Save for later
          </button>
          
          <div className="h-4 w-[1px] bg-gray-300 hidden sm:block"></div>
          
          <button className="text-[12px] text-[#007185] hover:underline">
            See more like this
          </button>
        </div>
      </div>
    </div>
  );
};
