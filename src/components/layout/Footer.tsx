"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Globe, ChevronUp } from "lucide-react";

export function Footer() {
  const pathname = usePathname();
  
  if (pathname === '/checkout') {
    return null;
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full text-white text-[13px]">
      
      {/* Back to top bar */}
      <button 
        onClick={scrollToTop}
        className="w-full bg-[#37475A] hover:bg-[#485769] transition-colors py-4 text-center text-[13px] font-medium"
      >
        Back to top
      </button>

      {/* Main Links Section */}
      <div className="bg-[#232F3E] pb-10">
        <div className="max-w-[1000px] mx-auto px-4 pt-10 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-[10px]">
            <h3 className="text-base font-bold text-white mb-1">Get to Know Us</h3>
            <a href="#" className="text-[#DDDDDD] hover:underline">About Amazon</a>
            <a href="#" className="text-[#DDDDDD] hover:underline">Careers</a>
            <a href="#" className="text-[#DDDDDD] hover:underline">Press Releases</a>
            <a href="#" className="text-[#DDDDDD] hover:underline">Amazon Science</a>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-[10px]">
            <h3 className="text-base font-bold text-white mb-1">Connect with Us</h3>
            <a href="#" className="text-[#DDDDDD] hover:underline">Facebook</a>
            <a href="#" className="text-[#DDDDDD] hover:underline">Twitter</a>
            <a href="#" className="text-[#DDDDDD] hover:underline">Instagram</a>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-[10px]">
            <h3 className="text-base font-bold text-white mb-1">Make Money with Us</h3>
            <a href="#" className="text-[#DDDDDD] hover:underline">Sell on Amazon</a>
            <a href="#" className="text-[#DDDDDD] hover:underline">Sell under Amazon Accelerator</a>
            <a href="#" className="text-[#DDDDDD] hover:underline">Protect and Build Your Brand</a>
            <a href="#" className="text-[#DDDDDD] hover:underline">Amazon Global Selling</a>
            <a href="#" className="text-[#DDDDDD] hover:underline">Supply to Amazon</a>
            <a href="#" className="text-[#DDDDDD] hover:underline">Become an Affiliate</a>
            <a href="#" className="text-[#DDDDDD] hover:underline">Fulfilment by Amazon</a>
            <a href="#" className="text-[#DDDDDD] hover:underline">Advertise Your Products</a>
            <a href="#" className="text-[#DDDDDD] hover:underline">Amazon Pay on Merchants</a>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-[10px]">
            <h3 className="text-base font-bold text-white mb-1">Let Us Help You</h3>
            <a href="#" className="text-[#DDDDDD] hover:underline">Your Account</a>
            <a href="#" className="text-[#DDDDDD] hover:underline">Returns Centre</a>
            <a href="#" className="text-[#DDDDDD] hover:underline">Recalls and Product Safety Alerts</a>
            <a href="#" className="text-[#DDDDDD] hover:underline">100% Purchase Protection</a>
            <a href="#" className="text-[#DDDDDD] hover:underline">Amazon App Download</a>
            <a href="#" className="text-[#DDDDDD] hover:underline">Help</a>
          </div>

        </div>

        {/* Divider & Selectors */}
        <div className="border-t border-[#3A4553] mt-10 p-8 flex flex-col md:flex-row items-center justify-center gap-6">
          <img src="/amazon-logo-white.svg" alt="Amazon Logo" className="h-7 w-auto pt-1 mr-8 hidden md:block" onError={(e) => { e.currentTarget.src = 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'; e.currentTarget.className = 'h-7 w-auto pt-1 brightness-0 invert opacity-90 mr-8 hidden md:block'; }} />
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 border border-[#848688] rounded-[3px] px-3 py-2 hover:border-white transition-colors">
              <Globe className="w-4 h-4 text-white font-light" strokeWidth={1.5} />
              <span className="text-[#DDDDDD]">English</span>
              <div className="flex flex-col gap-0 justify-center ml-1">
                <ChevronUp className="w-3 h-3 text-[#848688] rotate-180" strokeWidth={3} />
                <ChevronUp className="w-3 h-3 text-[#848688] -mt-[6px]" strokeWidth={3} />
              </div>
            </button>
            
            <button className="flex items-center gap-2 border border-[#848688] rounded-[3px] px-3 py-2 hover:border-white transition-colors">
              <div className="w-[18px] h-[12px] bg-white rounded-sm overflow-hidden flex flex-col">
                <div className="w-full h-1/3 bg-[#FF9933]"></div>
                <div className="w-full h-1/3 bg-white flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full border border-[#000080]"></div>
                </div>
                <div className="w-full h-1/3 bg-[#138808]"></div>
              </div>
              <span className="text-[#DDDDDD]">India</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sub-brands Section */}
      <div className="bg-[#131A22] text-[#999999] py-8 text-[11px] font-sans">
        <div className="max-w-[1000px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-8 mb-8 justify-between">
            
            <div className="flex flex-col gap-6 w-max mx-auto md:mx-0">
              <a href="#" className="hover:underline flex flex-col hover:text-white group">
                <span className="text-[#DDDDDD] font-medium group-hover:underline">AbeBooks</span>
                <span>Books, art</span>
                <span>& collectibles</span>
              </a>
              <a href="#" className="hover:underline flex flex-col hover:text-white group">
                <span className="text-[#DDDDDD] font-medium group-hover:underline">Shopbop</span>
                <span>Designer</span>
                <span>Fashion Brands</span>
              </a>
            </div>

            <div className="flex flex-col gap-6 w-max mx-auto md:mx-0">
              <a href="#" className="hover:underline flex flex-col hover:text-white group">
                <span className="text-[#DDDDDD] font-medium group-hover:underline">Amazon Web Services</span>
                <span>Scalable Cloud</span>
                <span>Computing Services</span>
              </a>
              <a href="#" className="hover:underline flex flex-col hover:text-white group">
                <span className="text-[#DDDDDD] font-medium group-hover:underline">Amazon Business</span>
                <span>Everything For</span>
                <span>Your Business</span>
              </a>
            </div>

            <div className="flex flex-col gap-6 w-max mx-auto md:mx-0">
              <a href="#" className="hover:underline flex flex-col hover:text-white group">
                <span className="text-[#DDDDDD] font-medium group-hover:underline">Audible</span>
                <span>Download</span>
                <span>Audio Books</span>
              </a>
              <a href="#" className="hover:underline flex flex-col hover:text-white group leading-[14px]">
                <span className="text-[#DDDDDD] font-medium group-hover:underline block mb-[2px]">Amazon Prime Music</span>
                <span>100 million songs, ad-free</span>
                <span>Over 15 million podcast</span>
                <span>episodes</span>
              </a>
            </div>

            <div className="flex flex-col gap-6 w-max mx-auto md:mx-0">
              <a href="#" className="hover:underline flex flex-col hover:text-white group">
                <span className="text-[#DDDDDD] font-medium group-hover:underline">IMDb</span>
                <span>Movies, TV</span>
                <span>& Celebrities</span>
              </a>
            </div>

          </div>

          <div className="flex justify-center items-center gap-4 mb-1 mt-10">
            <a href="#" className="text-[#DDDDDD] hover:underline">Conditions of Use & Sale</a>
            <a href="#" className="text-[#DDDDDD] hover:underline">Privacy Notice</a>
            <a href="#" className="text-[#DDDDDD] hover:underline">Interest-Based Ads</a>
          </div>
          <div className="text-center">
            © 1996-2026, Amazon.com, Inc. or its affiliates
          </div>
        </div>
      </div>
      
    </footer>
  );
}
