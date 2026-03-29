"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';
import { CartItem } from '@/components/cart/CartItem';
import { OrderSummary } from '@/components/cart/OrderSummary';
import { ShoppingCart, ArrowLeft } from 'lucide-react';

export default function CartPage() {
  const { items, getCartTotal, getItemCount } = useCartStore();
  const [mounted, setMounted] = useState(false);
  const [isHydrated, setIsHydrated] = useState(
    useCartStore.persist.hasHydrated()
  );

  useEffect(() => {
    setMounted(true);
    if (!useCartStore.persist.hasHydrated()) {
      const unsub = useCartStore.persist.onFinishHydration(() => {
        setIsHydrated(true);
      });
      return unsub;
    }
  }, []);

  if (!mounted || !isHydrated) return null;

  const total = getCartTotal();
  const count = getItemCount();

  if (items.length === 0) {
    return (
      <div className="max-w-[1500px] mx-auto px-4 py-12">
        <div className="bg-white p-10 rounded-lg border border-[#DDD] shadow-sm flex flex-col md:flex-row items-center gap-12">
          <div className="w-64 h-64 bg-[#f8f8f8] rounded-full flex items-center justify-center p-8">
            <ShoppingCart size={120} className="text-[#007185] opacity-20" />
          </div>
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h1 className="text-[28px] font-bold text-[#0F1111]">Your Amazon Cart is empty</h1>
            <p className="text-[#565959] text-[14px]">Your Shopping Cart lives to serve. Give it purpose — fill it with groceries, clothing, household supplies, electronics, and more.</p>
            <p className="text-[14px] text-[#0F1111]">
              Continue shopping on the <Link href="/" className="text-[#007185] hover:text-[#C7511F] hover:underline">Amazon.in homepage</Link>, learn about <Link href="#" className="text-[#007185] hover:text-[#C7511F] hover:underline">today's deals</Link>, or visit your <Link href="#" className="text-[#007185] hover:text-[#C7511F] hover:underline">Wish List</Link>.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
              <Link 
                href="/"
                className="bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-lg px-8 py-2 text-[14px] text-[#0F1111] shadow-sm font-medium transition-colors"
              >
                Continue Shopping
              </Link>
              <button className="border border-[#D5D9D9] hover:bg-gray-50 bg-white rounded-lg px-8 py-2 text-[14px] text-[#0F1111] shadow-sm font-medium transition-colors">
                Sign in to your account
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#EAEDED] min-h-screen">
      <main className="max-w-[1500px] mx-auto p-4 flex flex-col lg:flex-row gap-6">
        
        {/* Left Section: Cart Items */}
        <div className="flex-grow bg-white p-4 sm:p-6 shadow-sm border border-[#DDD]">
          <div className="flex flex-col border-b border-gray-200 pb-2 mb-2">
            <h1 className="text-[28px] font-medium text-[#0F1111]">Shopping Cart</h1>
            <div className="hidden sm:flex justify-end pr-4 text-[14px] text-[#565959]">Price</div>
          </div>

          <div className="flex flex-col">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="flex justify-end items-center mt-6 text-[18px]">
            Subtotal ({count} item{count !== 1 ? 's' : ''}): <span className="font-bold ml-1 text-[#0F1111]">₹{total.toLocaleString()}.00</span>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-between text-[12px] text-[#565959]">
              <p>The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price.</p>
          </div>
        </div>

        {/* Right Section: Order Summary (Sidebar) */}
        <div className="lg:w-[300px] flex-shrink-0">
          <OrderSummary />
        </div>
      </main>

      {/* Suggested Items Placeholder */}
      <section className="max-w-[1500px] mx-auto px-4 py-8 mt-4 bg-white border border-[#DDD] shadow-sm mb-12">
          <h2 className="text-[21px] font-bold mb-4">Your recently viewed items and featured recommendations</h2>
          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-4">
              {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="min-w-[150px] flex flex-col">
                      <div className="w-[150px] h-[150px] bg-gray-50 border border-gray-100 rounded-md mb-2 flex items-center justify-center p-4">
                         <div className="w-full h-full bg-gray-200 animate-pulse rounded-md" />
                      </div>
                      <div className="h-4 w-3/4 bg-gray-100 animate-pulse mb-1" />
                      <div className="h-3 w-1/2 bg-gray-100 animate-pulse" />
                  </div>
              ))}
          </div>
      </section>
    </div>
  );
}
