"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/store/cartStore';
import { ShieldCheck, ChevronDown, CheckCircle2 } from 'lucide-react';

interface OrderSummaryProps {
  isCheckout?: boolean;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({ isCheckout = false }) => {
  const router = useRouter();
  const { items, getCartTotal, getItemCount } = useCartStore();
  const total = getCartTotal();
  const count = getItemCount();

  const handleProceed = () => {
    if (isCheckout) {
      // Logic for placing order is handled in checkout page
      return;
    }
    router.push('/checkout');
  };

  if (count === 0 && !isCheckout) return null;

  return (
    <div className="bg-white p-4 sm:p-5 border border-[#DDD] rounded-[8px] flex flex-col gap-4 shadow-sm h-fit sticky top-20">
      {!isCheckout && total >= 499 && (
        <div className="flex items-start gap-2 py-1">
          <CheckCircle2 size={18} className="text-[#067D62] mt-0.5 flex-shrink-0" />
          <div className="text-[12px] text-[#0F1111]">
            <span className="text-[#067D62] font-medium leading-tight">Your order is eligible for FREE Delivery.</span>
            <span className="block text-[#565959]">Choose FREE Delivery option at checkout.</span>
          </div>
        </div>
      )}

      <div className="text-[18px] text-[#0F1111]">
        Subtotal ({count} item{count !== 1 ? 's' : ''}): <span className="font-bold text-[21px]">₹{total.toLocaleString()}.00</span>
      </div>

      {!isCheckout && (
        <>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="gift" className="w-[18px] h-[18px] accent-[#007185]" />
            <label htmlFor="gift" className="text-[14px] text-[#0F1111] cursor-pointer">This order contains a gift</label>
          </div>

          <button 
            onClick={handleProceed}
            className="w-full bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-lg py-2 text-[14px] text-[#0F1111] shadow-sm font-medium transition-colors cursor-pointer"
          >
            Proceed to Buy
          </button>
        </>
      )}

      {isCheckout && (
        <div className="flex flex-col gap-3">
          <button 
             type="submit"
             form="checkout-form"
             className="w-full bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-lg py-2 text-[14px] text-[#0F1111] shadow-sm font-medium transition-colors cursor-pointer"
          >
            Place your order
          </button>
          <div className="text-[12px] text-[#565959] text-center px-2">
            By placing your order, you agree to Amazon's <span className="text-[#007185] hover:underline cursor-pointer">privacy notice</span> and <span className="text-[#007185] hover:underline cursor-pointer">conditions of use</span>.
          </div>
        </div>
      )}

      <div className="border-t border-[#DDD] pt-4 mt-2">
        <div className="flex items-center justify-between text-[14px] font-bold mb-1">
            <span>Order Summary</span>
        </div>
        <div className="flex items-center justify-between text-[12px] text-[#565959] mb-1">
            <span>Items:</span>
            <span>₹{total.toLocaleString()}.00</span>
        </div>
        <div className="flex items-center justify-between text-[12px] text-[#565959] mb-1">
            <span>Delivery:</span>
            <span>₹0.00</span>
        </div>
        <div className="flex items-center justify-between text-[14px] text-[#B12704] font-bold border-t border-[#DDD] pt-2 mt-2">
            <span>Order Total:</span>
            <span>₹{total.toLocaleString()}.00</span>
        </div>
      </div>

      <div className="bg-[#f0f2f2] p-3 rounded-md flex items-start gap-2 mt-2">
        <ShieldCheck size={18} className="text-[#565959] mt-0.5" />
        <div className="text-[12px] text-[#565959]">
          <span className="font-bold text-[#0F1111]">Secure transaction</span>
          <p className="mt-0.5 text-[11px]">Your data is encrypted and secure.</p>
        </div>
      </div>
    </div>
  );
};
