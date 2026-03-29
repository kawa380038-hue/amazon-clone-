"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';
import { CheckCircle2, ShoppingBag, ArrowRight, Package, Truck, ShieldCheck } from 'lucide-react';

export default function OrderSuccessPage() {
  const [mounted, setMounted] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const { clearCart } = useCartStore();

  useEffect(() => {
    setMounted(true);
    setOrderNumber(`403-${Math.floor(Math.random() * 9000000) + 1000000}-${Math.floor(Math.random() * 9000000) + 1000000}`);
    clearCart();
  }, [clearCart]);

  if (!mounted) return null;

  return (
    <div className="bg-[#EAEDED] min-h-screen pb-20">
      <main className="max-w-[1000px] mx-auto p-4 sm:p-8">
        
        {/* Success Banner */}
        <div className="bg-white border border-[#DDD] rounded-md p-6 sm:p-10 shadow-sm mb-6 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 border border-green-100">
             <CheckCircle2 size={48} className="text-[#067D62]" />
          </div>
          <h1 className="text-[28px] font-bold text-[#0F1111] mb-2">Order placed, thank you!</h1>
          <p className="text-[#565959] text-[14px] max-w-[600px] mb-6">
            Confirmation will be sent to your email. We'll send a notification when your items are shipped.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Link 
              href="/"
              className="bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-lg px-8 py-2 text-[14px] text-[#0F1111] shadow-sm font-medium transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag size={18} />
              Continue Shopping
            </Link>
            <Link 
              href="#"
              className="border border-[#D5D9D9] hover:bg-gray-50 bg-white rounded-lg px-8 py-2 text-[14px] text-[#0F1111] shadow-sm font-medium transition-colors flex items-center justify-center gap-2"
            >
              View your orders
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Order Details Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Box */}
            <div className="md:col-span-2 flex flex-col gap-6">
                <div className="bg-white border border-[#DDD] rounded-md p-6 shadow-sm">
                    <h2 className="text-[18px] font-bold text-[#0F1111] mb-4 flex items-center gap-2">
                        <Package size={20} className="text-[#007185]" />
                        Order Details
                    </h2>
                    <div className="flex flex-col gap-3 text-[14px]">
                        <div className="flex justify-between border-b border-gray-100 pb-2">
                            <span className="text-[#565959]">Order Number:</span>
                            <span className="font-bold text-[#0F1111]">{orderNumber}</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-100 pb-2">
                            <span className="text-[#565959]">Estimated Delivery:</span>
                            <span className="font-bold text-[#007600]">Tomorrow by 9:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[#565959]">Shipping Address:</span>
                            <span className="font-medium text-[#0F1111] text-right">John Doe, 123 Amazon St., Seattle, WA 98101</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white border border-[#DDD] rounded-md p-6 shadow-sm">
                    <h2 className="text-[18px] font-bold text-[#0F1111] mb-4 flex items-center gap-2">
                        <Truck size={20} className="text-[#007185]" />
                        Tracking Updates
                    </h2>
                    <div className="relative pl-8 border-l-2 border-gray-100 flex flex-col gap-8">
                         <div className="relative">
                            <div className="absolute left-[-42px] top-0 w-5 h-5 bg-[#067D62] rounded-full border-4 border-white shadow-sm"></div>
                            <span className="block text-[14px] font-bold text-[#0F1111]">Order Placed</span>
                            <span className="block text-[12px] text-[#565959]">Today, 2:15 PM</span>
                         </div>
                         <div className="relative opacity-50">
                            <div className="absolute left-[-42px] top-0 w-5 h-5 bg-gray-300 rounded-full border-4 border-white shadow-sm"></div>
                            <span className="block text-[14px] font-bold text-[#565959]">Shipped</span>
                            <span className="block text-[12px] text-[#565959]">Estimated: Tonight</span>
                         </div>
                         <div className="relative opacity-50">
                            <div className="absolute left-[-42px] top-0 w-5 h-5 bg-gray-300 rounded-full border-4 border-white shadow-sm"></div>
                            <span className="block text-[14px] font-bold text-[#565959]">Delivered</span>
                            <span className="block text-[12px] text-[#565959]">Estimated: Tomorrow</span>
                         </div>
                    </div>
                </div>
            </div>

            {/* Right Box / Ad */}
            <div className="flex flex-col gap-6">
                 <div className="bg-[#FCF5EE] border border-[#e77600] rounded-md p-6 shadow-sm">
                    <h3 className="text-[16px] font-bold text-[#0F1111] mb-2">Get rewarded for your order!</h3>
                    <p className="text-[12px] text-[#565959] mb-4">You just earned 10 Amazon Points for this purchase. Redeem them on your next order.</p>
                    <button className="w-full bg-white border border-[#D5D9D9] py-1.5 rounded-md text-[13px] font-medium hover:bg-gray-50">See your points</button>
                 </div>

                 <div className="bg-white border border-[#DDD] rounded-md p-6 shadow-sm flex flex-col items-center text-center">
                    <ShieldCheck size={40} className="text-[#007185] mb-4 opacity-20" />
                    <h3 className="text-[15px] font-bold text-[#0F1111] mb-1">A-to-z Guarantee</h3>
                    <p className="text-[11px] text-[#565959]">The A-to-z Guarantee protects you when you purchase items sold and fulfilled by a third party seller.</p>
                 </div>
            </div>
        </div>
      </main>
    </div>
  );
}
