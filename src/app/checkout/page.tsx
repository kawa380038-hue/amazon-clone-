"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/store/cartStore';
import { OrderSummary } from '@/components/cart/OrderSummary';
import { Lock, MapPin, CreditCard, Box, ChevronRight, AlertCircle } from 'lucide-react';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getCartTotal, getItemCount } = useCartStore();
  const [mounted, setMounted] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    pincode: '',
    address: '',
    city: '',
    state: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Use Zustand's built-in persist hydration API
  const [isHydrated, setIsHydrated] = useState(
    useCartStore.persist.hasHydrated()
  );

  useEffect(() => {
    setMounted(true);
    // If not already hydrated, subscribe to the hydration finish event
    if (!useCartStore.persist.hasHydrated()) {
      const unsub = useCartStore.persist.onFinishHydration(() => {
        setIsHydrated(true);
      });
      return unsub;
    }
  }, []);

  useEffect(() => {
    if (mounted && isHydrated && items.length === 0 && !isSubmitting) {
      router.push('/cart');
    }
  }, [mounted, isHydrated, items.length, router, isSubmitting]);

  if (!mounted || !isHydrated) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name]) {
        setErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors[name];
            return newErrors;
        });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Please enter your full name.";
    if (!formData.phone.trim()) newErrors.phone = "Please enter your phone number.";
    if (!formData.pincode.trim()) newErrors.pincode = "Please enter your pincode.";
    if (!formData.address.trim()) newErrors.address = "Please enter your full address.";
    if (!formData.city.trim()) newErrors.city = "Please enter your city.";
    if (!formData.state.trim()) newErrors.state = "Please enter your state.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
        const firstError = Object.keys(errors)[0];
        document.getElementsByName(firstError)[0]?.focus();
        return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      router.push('/order-success');
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Checkout Header */}
      <header className="bg-gray-50 border-b border-[#DDD] py-4 sticky top-0 z-[100]">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
          <Link href="/">
             <div className="flex items-center text-[#131921]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 603 182"
                    className="h-8 w-24"
                    fill="currentColor"
                >
                    <path
                        d="m 374.00642,142.18404 c -34.99948,25.79739 -85.72909,39.56123 -129.40634,39.56123 -61.24255,0 -116.37656,-22.65135 -158.08757,-60.32496 -3.2771,-2.96252 -0.34083,-6.9999 3.59171,-4.69283 45.01431,26.19064 100.67269,41.94697 158.16623,41.94697 38.774689,0 81.4295,-8.02237 120.6499,-24.67006 5.92501,-2.51683 10.87999,3.88009 5.08607,8.17965"
                        fill="#000" />
                    <path
                        d="m 388.55678,125.53635 c -4.45688,-5.71527 -29.57261,-2.70033 -40.84585,-1.36327 -3.43442,0.41947 -3.95874,-2.56925 -0.86517,-4.71905 20.00346,-14.07844 52.82696,-10.01483 56.65462,-5.2958 3.82764,4.74526 -0.99624,37.64741 -19.79373,53.35128 -2.88385,2.41195 -5.63662,1.12734 -4.35198,-2.07113 4.2209,-10.53917 13.68519,-34.16054 9.20211,-39.90203"
                        fill="#ff9900" />
                </svg>
             </div>
          </Link>
          <h1 className="text-[28px] font-medium text-[#0F1111] hidden sm:block">Checkout</h1>
          <div className="text-gray-400">
            <Lock size={24} />
          </div>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto p-4 flex flex-col lg:flex-row gap-6">
        {/* Left Form Section */}
        <div className="flex-grow flex flex-col gap-6">
          
          <form id="checkout-form" onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            {/* 1. Shipping Address Section */}
            <div className="border border-[#DDD] rounded-md overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-b border-[#DDD]">
                    <div className="flex items-center gap-2">
                        <span className="text-[#0F1111] font-bold text-[18px]">1. Shipping address</span>
                        <MapPin size={18} className="text-[#007185]" />
                    </div>
                </div>
                <div className="p-6 flex flex-col gap-4 max-w-[600px]">
                    <div className="flex flex-col gap-1">
                        <label className="text-[14px] font-bold text-[#0F1111]">Full name (First and Last name)</label>
                        <input 
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className={`border ${errors.fullName ? 'border-[#CC0C39] ring-1 ring-[#CC0C39]' : 'border-gray-500'} rounded-[4px] px-3 py-1.5 focus:border-[#e77600] focus:ring-2 focus:ring-[#e77600]/20 outline-none`} 
                        />
                        {errors.fullName && <div className="text-[#CC0C39] text-[12px] font-medium"><AlertCircle size={14} className="inline mr-1 mb-0.5" />{errors.fullName}</div>}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-[14px] font-bold text-[#0F1111]">Phone number</label>
                        <input 
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`border ${errors.phone ? 'border-[#CC0C39] ring-1 ring-[#CC0C39]' : 'border-gray-300'} rounded-[4px] px-3 py-1.5 focus:border-[#e77600] focus:ring-2 focus:ring-[#e77600]/20 outline-none`} 
                            placeholder="10-digit mobile number without prefix"
                        />
                        {errors.phone && <div className="text-[#CC0C39] text-[12px] font-medium"><AlertCircle size={14} className="inline mr-1 mb-0.5" />{errors.phone}</div>}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-[14px] font-bold text-[#0F1111]">Pincode</label>
                        <input 
                            name="pincode"
                            value={formData.pincode}
                            onChange={handleInputChange}
                            className={`border ${errors.pincode ? 'border-[#CC0C39] ring-1 ring-[#CC0C39]' : 'border-gray-300'} rounded-[4px] px-3 py-1.5 focus:border-[#e77600] focus:ring-2 focus:ring-[#e77600]/20 outline-none`} 
                            placeholder="6 digits [0-9] PIN code"
                        />
                        {errors.pincode && <div className="text-[#CC0C39] text-[12px] font-medium"><AlertCircle size={14} className="inline mr-1 mb-0.5" />{errors.pincode}</div>}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-[14px] font-bold text-[#0F1111]">Address</label>
                        <input 
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            className={`border ${errors.address ? 'border-[#CC0C39] ring-1 ring-[#CC0C39]' : 'border-gray-300'} rounded-[4px] px-3 py-1.5 focus:border-[#e77600] focus:ring-2 focus:ring-[#e77600]/20 outline-none`} 
                            placeholder="Flat, House no., Building, Company, Apartment"
                        />
                        {errors.address && <div className="text-[#CC0C39] text-[12px] font-medium"><AlertCircle size={14} className="inline mr-1 mb-0.5" />{errors.address}</div>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                            <label className="text-[14px] font-bold text-[#0F1111]">City</label>
                            <input 
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                className={`border ${errors.city ? 'border-[#CC0C39] ring-1 ring-[#CC0C39]' : 'border-gray-300'} rounded-[4px] px-3 py-1.5 focus:border-[#e77600] focus:ring-2 focus:ring-[#e77600]/20 outline-none`} 
                            />
                            {errors.city && <div className="text-[#CC0C39] text-[12px] font-medium">{errors.city}</div>}
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-[14px] font-bold text-[#0F1111]">State</label>
                            <input 
                                name="state"
                                value={formData.state}
                                onChange={handleInputChange}
                                className={`border ${errors.state ? 'border-[#CC0C39] ring-1 ring-[#CC0C39]' : 'border-gray-300'} rounded-[4px] px-3 py-1.5 focus:border-[#e77600] focus:ring-2 focus:ring-[#e77600]/20 outline-none`} 
                            />
                            {errors.state && <div className="text-[#CC0C39] text-[12px] font-medium">{errors.state}</div>}
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Payment Method Section */}
            <div className="border border-[#DDD] rounded-md overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 flex items-center gap-2 border-b border-[#DDD]">
                    <span className="text-[#0F1111] font-bold text-[18px]">2. Payment method</span>
                    <CreditCard size={18} className="text-[#007185]" />
                </div>
                <div className="p-6">
                    <div className="flex flex-col gap-4 border border-[#e77600] bg-[#FCF5EE] p-4 rounded-md">
                         <div className="flex items-start gap-3">
                            <input type="radio" checked readOnly name="payment" className="w-[18px] h-[18px] mt-1 accent-[#e77600]" />
                            <div className="flex flex-col">
                                <span className="text-[14px] font-bold text-[#0F1111]">Credit or Debit Card</span>
                                <div className="flex items-center gap-3 mt-2">
                                     <div className="px-2 py-0.5 border border-[#DDD] rounded-sm text-[10px] font-bold bg-white">VISA</div>
                                     <div className="px-2 py-0.5 border border-[#DDD] rounded-sm text-[10px] font-bold bg-white">MASTERCARD</div>
                                     <div className="px-2 py-0.5 border border-[#DDD] rounded-sm text-[10px] font-bold bg-white">AMEX</div>
                                </div>
                                <Link href="#" className="text-[12px] text-[#007185] hover:underline mt-2">Add a new card</Link>
                            </div>
                         </div>
                    </div>
                    <div className="flex items-start gap-3 mt-4 opacity-70 p-4 border border-transparent">
                        <input type="radio" disabled name="payment" className="w-[18px] h-[18px] mt-1" />
                        <div className="flex flex-col">
                            <span className="text-[14px] font-bold text-[#565959]">Net Banking (Unavailable)</span>
                            <span className="text-[12px] text-[#565959]">Not available for currently selected address.</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Items and Delivery Section */}
            <div className="border border-[#DDD] rounded-md overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 flex items-center gap-2 border-b border-[#DDD]">
                    <span className="text-[#0F1111] font-bold text-[18px]">3. Items and delivery</span>
                    <Box size={18} className="text-[#007185]" />
                </div>
                <div className="p-6">
                    <div className="flex flex-col gap-4">
                        {items.map((item) => (
                            <div key={item.id} className="flex gap-4 border-b border-gray-100 pb-4">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 flex items-center justify-center">
                                    <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain" />
                                </div>
                                <div className="flex-grow flex flex-col">
                                    <span className="text-[14px] font-bold text-[#0F1111] line-clamp-1">{item.name}</span>
                                    <span className="text-[12px] text-[#B12704] font-bold">₹{item.price.toLocaleString()}</span>
                                    <span className="text-[12px] text-[#565959]">Qty: {item.quantity}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 p-4 bg-[#F0F2F2] rounded-lg border border-[#DDD]">
                        <h4 className="text-[16px] font-bold text-[#0F1111] mb-2">Delivery Speed</h4>
                        <div className="flex items-start gap-3 border border-[#007185] bg-white p-3 rounded-md">
                            <input type="radio" checked readOnly className="w-[18px] h-[18px] mt-1 accent-[#007185]" />
                            <div className="flex flex-col">
                                <span className="text-[14px] font-bold text-[#0F1111]">Tomorrow by 9:00 PM</span>
                                <span className="text-[13px] text-[#0F1111]">FREE delivery with Prime.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </form>

        </div>

        {/* Right Section: Order Summary (Sidebar) */}
        <div className="lg:w-[350px] flex-shrink-0">
          <OrderSummary isCheckout={true} />
          <div className="mt-4 p-4 border border-[#DDD] rounded-md flex flex-col gap-2">
             <h4 className="text-[14px] font-bold">How are shipping costs calculated?</h4>
             <p className="text-[12px] text-[#565959]">Amazon Prime members get FREE shipping on all Prime-eligible items in all stores.</p>
             <Link href="#" className="text-[12px] text-[#007185] hover:underline flex items-center">Learn more about Prime <ChevronRight size={12} /></Link>
          </div>
        </div>
      </main>

      {/* Loading Overlay */}
      {isSubmitting && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200] flex flex-col items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-gray-200 border-t-[#e77600] rounded-full animate-spin"></div>
              <span className="text-[#0F1111] font-medium">Placing your order...</span>
          </div>
        </div>
      )}
    </div>
  );
}
