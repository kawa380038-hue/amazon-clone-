"use client";

import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';
import { Search, MapPin, ShoppingCart, Menu, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const AmazonLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 603 182"
    className="h-[32px] w-[95px] text-white"
    fill="currentColor"
  >
    <path
       d="m 374.00642,142.18404 c -34.99948,25.79739 -85.72909,39.56123 -129.40634,39.56123 -61.24255,0 -116.37656,-22.65135 -158.08757,-60.32496 -3.2771,-2.96252 -0.34083,-6.9999 3.59171,-4.69283 45.01431,26.19064 100.67269,41.94697 158.16623,41.94697 38.774689,0 81.4295,-8.02237 120.6499,-24.67006 5.92501,-2.51683 10.87999,3.88009 5.08607,8.17965"
       fill="#ff9900" />
    <path
       d="m 388.55678,125.53635 c -4.45688,-5.71527 -29.57261,-2.70033 -40.84585,-1.36327 -3.43442,0.41947 -3.95874,-2.56925 -0.86517,-4.71905 20.00346,-14.07844 52.82696,-10.01483 56.65462,-5.2958 3.82764,4.74526 -0.99624,37.64741 -19.79373,53.35128 -2.88385,2.41195 -5.63662,1.12734 -4.35198,-2.07113 4.2209,-10.53917 13.68519,-34.16054 9.20211,-39.90203"
       fill="#ff9900" />
    <path
       d="M 348.49744,20.06598 V 6.38079 c 0,-2.07113 1.57301,-3.46062 3.46062,-3.46062 h 61.26875 c 1.96628,0 3.53929,1.41571 3.53929,3.46062 v 11.71893 c -0.0262,1.96626 -1.67788,4.53551 -4.61418,8.59912 l -31.74859,45.32893 c 11.79759,-0.28837 24.25059,1.46814 34.94706,7.49802 2.41195,1.36327 3.06737,3.35575 3.25089,5.32203 V 99.4506 c 0,1.99248 -2.20222,4.32576 -4.5093,3.1198 -18.84992,-9.88376 -43.887,-10.95865 -64.72939,0.10487 -2.12356,1.15354 -4.35199,-1.15354 -4.35199,-3.14602 V 85.66054 c 0,-2.22843 0.0262,-6.02989 2.25463,-9.41186 l 36.78224,-52.74829 h -32.01076 c -1.96626,0 -3.53927,-1.38948 -3.53927,-3.43441" />
    <path
       d="m 124.99883,105.45424 h -18.64017 c -1.78273,-0.13107 -3.19845,-1.46813 -3.32954,-3.17224 V 6.61676 c 0,-1.91383 1.59923,-3.43442 3.59171,-3.43442 h 17.38176 c 1.80898,0.0786 3.25089,1.46814 3.38199,3.19845 v 12.50545 h 0.34082 c 4.53551,-12.08598 13.05597,-17.7226 24.53896,-17.7226 11.66649,0 18.95477,5.63662 24.19814,17.7226 4.5093,-12.08598 14.76008,-17.7226 25.74495,-17.7226 7.81262,0 16.35931,3.22467 21.57646,10.46052 5.89879,8.04857 4.69281,19.74128 4.69281,29.99208 l -0.0262,60.37739 c 0,1.91383 -1.59923,3.46061 -3.59171,3.46061 h -18.61397 c -1.86138,-0.13107 -3.35574,-1.62543 -3.35574,-3.46061 V 51.29025 c 0,-4.03739 0.36702,-14.10466 -0.52434,-17.93233 -1.38949,-6.42311 -5.55797,-8.23209 -10.95865,-8.23209 -4.5093,0 -9.22833,3.01494 -11.14216,7.83885 -1.91383,4.8239 -1.73031,12.89867 -1.73031,18.32557 v 50.70338 c 0,1.91383 -1.59923,3.46061 -3.59171,3.46061 h -18.61395 c -1.88761,-0.13107 -3.35576,-1.62543 -3.35576,-3.46061 L 152.946,51.29025 c 0,-10.67025 1.75651,-26.37415 -11.48298,-26.37415 -13.39682,0 -12.87248,15.31063 -12.87248,26.37415 v 50.70338 c 0,1.91383 -1.59923,3.46061 -3.59171,3.46061" />
    <path
       d="m 469.51439,1.16364 c 27.65877,0 42.62858,23.75246 42.62858,53.95427 0,29.17934 -16.54284,52.32881 -42.62858,52.32881 -27.16066,0 -41.94697,-23.75246 -41.94697,-53.35127 0,-29.78234 14.96983,-52.93181 41.94697,-52.93181 m 0.15729,19.53156 c -13.73761,0 -14.60278,18.71881 -14.60278,30.38532 0,11.69271 -0.18352,36.65114 14.44549,36.65114 14.44548,0 15.12712,-20.13452 15.12712,-32.40403 0,-8.07477 -0.34082,-17.72257 -2.779,-25.3779 -2.09735,-6.65906 -6.26581,-9.25453 -12.19083,-9.25453" />
    <path
       d="M 548.00762,105.45424 H 529.4461 c -1.86141,-0.13107 -3.35577,-1.62543 -3.35577,-3.46061 l -0.0262,-95.69149 c 0.1573,-1.75653 1.7041,-3.1198 3.59171,-3.1198 h 17.27691 c 1.62543,0.0786 2.96249,1.17976 3.32954,2.67412 v 14.62899 h 0.3408 c 5.21717,-13.0822 12.53165,-19.32181 25.40412,-19.32181 8.36317,0 16.51662,3.01494 21.75999,11.27324 4.87633,7.65532 4.87633,20.5278 4.87633,29.78233 v 60.22011 c -0.20973,1.67786 -1.75653,3.01492 -3.59169,3.01492 h -18.69262 c -1.70411,-0.13107 -3.11982,-1.38948 -3.30332,-3.01492 V 50.47753 c 0,-10.46052 1.20597,-25.77117 -11.66651,-25.77117 -4.5355,0 -8.70399,3.04117 -10.77512,7.65532 -2.62167,5.84637 -2.96249,11.66651 -2.96249,18.11585 v 51.5161 c -0.0262,1.91383 -1.65166,3.46061 -3.64414,3.46061" />
    <path
       d="M 55.288261,59.75829 V 55.7209 c -13.475471,0 -27.711211,2.88385 -27.711211,18.77125 0,8.04857 4.16847,13.50169 11.32567,13.50169 5.24337,0 9.93618,-3.22467 12.8987,-8.46805 3.670341,-6.44935 3.486841,-12.50544 3.486841,-19.7675 m 18.79747,45.43378 c -1.23219,1.10111 -3.01495,1.17976 -4.40444,0.4457 -6.18716,-5.1385 -7.28828,-7.52423 -10.69647,-12.42678 -10.224571,10.4343 -17.460401,13.55409 -30.726141,13.55409 -15.67768,0 -27.89471,-9.67401 -27.89471,-29.04824 0,-15.12713 8.20587,-25.43035 19.87236,-30.46398 10.1197,-4.45688 24.25058,-5.24337 35.051931,-6.47556 v -2.41195 c 0,-4.43066 0.34082,-9.67403 -2.25465,-13.50167 -2.280881,-3.43442 -6.632861,-4.85013 -10.460531,-4.85013 -7.10475,0 -13.44924,3.64414 -14.99603,11.19459 -0.31461,1.67789 -1.5468,3.32955 -3.22467,3.4082 L 6.26276,32.67628 C 4.74218,32.33548 3.0643,31.10327 3.48377,28.76999 7.65225,6.85271 27.44596,0.24605 45.16856,0.24605 c 9.071011,0 20.921021,2.41195 28.078221,9.28076 9.07104,8.46804 8.20587,19.7675 8.20587,32.06321 v 29.04826 c 0,8.73022 3.61794,12.55786 7.02613,17.27691 1.20597,1.67786 1.46814,3.69656 -0.05244,4.95497 -3.80144,3.17225 -10.56538,9.07104 -14.28819,12.37436 l -0.05242,-0.0525" />
    <path
       d="M 55.288261,59.75829 V 55.7209 c -13.475471,0 -27.711211,2.88385 -27.711211,18.77125 0,8.04857 4.16847,13.50169 11.32567,13.50169 5.24337,0 9.93618,-3.22467 12.8987,-8.46805 3.670341,-6.44935 3.486841,-12.50544 3.486841,-19.7675 m 18.79747,45.43378 c -1.23219,1.10111 -3.01495,1.17976 -4.40444,0.4457 -6.18716,-5.1385 -7.28828,-7.52423 -10.69647,-12.42678 -10.224571,10.4343 -17.460401,13.55409 -30.726141,13.55409 -15.67768,0 -27.89471,-9.67401 -27.89471,-29.04824 0,-15.12713 8.20587,-25.43035 19.87236,-30.46398 10.1197,-4.45688 24.25058,-5.24337 35.051931,-6.47556 v -2.41195 c 0,-4.43066 0.34082,-9.67403 -2.25465,-13.50167 -2.280881,-3.43442 -6.632861,-4.85013 -10.460531,-4.85013 -7.10475,0 -13.44924,3.64414 -14.99603,11.19459 -0.31461,1.67789 -1.5468,3.32955 -3.22467,3.4082 L 6.26276,32.67628 C 4.74218,32.33548 3.0643,31.10327 3.48377,28.76999 7.65225,6.85271 27.44596,0.24605 45.16856,0.24605 c 9.071011,0 20.921021,2.41195 28.078221,9.28076 9.07104,8.46804 8.20587,19.7675 8.20587,32.06321 v 29.04826 c 0,8.73022 3.61794,12.55786 7.02613,17.27691 1.20597,1.67786 1.46814,3.69656 -0.05244,4.95497 -3.80144,3.17225 -10.56538,9.07104 -14.28819,12.37436 l -0.05242,-0.0525" transform="translate(244.36719)" />
  </svg>
);

export const Navbar = () => {
  const pathname = usePathname();
  const items = useCartStore((state) => state.items);
  const [mounted, setMounted] = useState(false);
  
  // To avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (pathname === '/checkout') {
    return null;
  }

  const totalItems = mounted ? items.reduce((acc, item) => acc + item.quantity, 0) : 0;

  return (
    <header className="w-full sticky top-0 z-[60]">
      {/* Top Nav */}
      <div className="bg-[#131921] text-white flex items-center justify-between px-2 sm:px-4 py-1 text-sm sm:h-[60px]">
        
        {/* Left Side */}
        <div className="flex items-center gap-1 sm:gap-2 h-full py-1">
          {/* Mobile Menu Icon (Only visible on mobile) */}
          <button className="sm:hidden p-1">
            <Menu className="h-6 w-6" />
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center border border-transparent hover:border-white px-2 py-1 rounded-[2px] shrink-0 mt-[2px] sm:mt-0">
            <div className="flex items-center pt-1.5 pb-1">
              <AmazonLogo />
              <span className="text-[14px] text-white mt-1 ml-0.5">.in</span>
            </div>
          </Link>
          
          {/* Location */}
          <div className="hidden sm:flex items-center border border-transparent hover:border-white p-1 px-2 rounded-[2px] cursor-pointer h-[50px] shrink-0">
            <MapPin className="h-[18px] w-[18px] mt-[10px]" />
            <div className="flex flex-col ml-1 justify-center">
              <span className="text-[12px] text-[#cccccc] leading-3">Delivering to Jammu 180002</span>
              <span className="text-[14px] font-bold leading-4 mt-0.5 text-white">Update location</span>
            </div>
          </div>
        </div>

        {/* Middle - Search Bar (Desktop) */}
        <div className="flex-grow hidden sm:flex items-center mx-4 rounded-[4px] overflow-hidden bg-white text-black h-[40px] focus-within:ring-[2px] focus-within:ring-[#f90] transition-shadow duration-200 shadow-sm">
          <div className="bg-[#f3f3f3] hover:bg-[#d4d4d4] border-r border-[#cdcdcd] text-[13px] text-gray-700 h-full flex items-center justify-center cursor-pointer w-auto min-w-[52px] px-3 relative transition-colors duration-200">
            <select className="absolute inset-0 opacity-0 cursor-pointer w-full h-full">
              <option>All Categories</option>
            </select>
            <span className="mr-1">All</span>
            <ChevronDown className="h-3 w-3 text-gray-600" />
          </div>
          <input 
            type="text" 
            placeholder="Search Amazon.in" 
            className="flex-grow px-4 h-full w-full outline-none text-[15px] placeholder:text-gray-500"
          />
          <button className="bg-[#febd69] hover:bg-[#f3a847] w-[45px] h-full flex shrink-0 justify-center items-center transition-all duration-200 active:bg-[#e29a3a]">
            <Search className="h-[22px] w-[22px] text-gray-900" strokeWidth={2.5} />
          </button>
        </div>

        {/* Right Side */}
        <div className="flex items-center h-full py-1 shrink-0 gap-[2px]">
           {/* Language */}
           <div className="hidden md:flex items-center border border-transparent hover:border-white p-1 px-2 rounded-[2px] cursor-pointer font-bold h-[50px] shrink-0">
             <div className="h-[14px] w-[20px] bg-white rounded-sm overflow-hidden flex items-center justify-center mt-2.5 mr-1 border border-gray-300">
                <span className="text-[14px]">🇮🇳</span>
             </div>
             <span className="text-[14px] mt-2.5 text-white">EN</span>
             <ChevronDown className="h-[10px] w-[10px] text-gray-400 ml-1 mt-3" strokeWidth={3} />
           </div>

           {/* Account & Lists */}
           <div className="hidden sm:flex flex-col border border-transparent hover:border-white p-1 px-2 rounded-[2px] cursor-pointer h-[50px] justify-center shrink-0">
              <span className="text-[12px] text-white leading-3">Hello, sign in</span>
              <div className="flex items-center mt-0.5">
                <span className="text-[14px] font-bold leading-4 text-white">Account & Lists</span>
                <ChevronDown className="h-[10px] w-[10px] text-gray-400 mt-1 ml-1" strokeWidth={3} />
              </div>
           </div>
           
           {/* Mobile Login Text */}
           <div className="sm:hidden flex flex-col justify-center border border-transparent hover:border-white p-1 cursor-pointer rounded-[2px] shrink-0">
             <span className="text-[12px]">Sign in &rsaquo;</span>
           </div>

           {/* Returns & Orders */}
           <div className="hidden lg:flex flex-col border border-transparent hover:border-white p-1 px-2 rounded-[2px] cursor-pointer h-[50px] justify-center shrink-0">
              <span className="text-[12px] text-white leading-3">Returns</span>
              <span className="text-[14px] font-bold leading-4 mt-0.5 text-white">&amp; Orders</span>
           </div>

           {/* Cart */}
           <Link href="/cart" className="flex items-center border border-transparent hover:border-white p-1 px-2 rounded-[2px] cursor-pointer relative h-[50px] shrink-0">
              <div className="relative flex items-center mt-2 group">
                <ShoppingCart className="h-[34px] w-[34px] sm:h-[38px] sm:w-[38px]" strokeWidth={1.5} />
                <span className="absolute top-[-6px] left-[13px] sm:left-[16px] text-[#f08804] font-bold text-[14px] sm:text-[16px] leading-none">
                  {totalItems}
                </span>
              </div>
              <span className="hidden sm:flex text-[14px] font-bold mt-5 ml-1 text-white">Cart</span>
           </Link>
        </div>
      </div>

      {/* Mobile Search - shows only on mobile */}
      <div className="bg-[#131921] px-2 pb-3 sm:hidden flex w-full">
        <div className="flex-grow flex items-center rounded-md overflow-hidden bg-white text-black h-[44px] focus-within:ring-[3px] focus-within:ring-[#f90]">
          <input 
            type="text" 
            placeholder="Search Amazon.in" 
            className="flex-grow px-3 h-full w-full outline-none text-[15px]"
          />
          <button className="bg-[#febd69] hover:bg-[#f3a847] px-4 w-[50px] h-full flex items-center justify-center">
            <Search className="h-[22px] w-[22px] text-gray-900" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="bg-[#232f3e] text-white flex items-center justify-between px-2 sm:px-4 py-1.5 text-[14px] overflow-x-auto whitespace-nowrap no-scrollbar relative font-medium w-full h-[39px]">
        <div className="flex items-center h-full">
          <div className="flex items-center border border-transparent hover:border-white p-1 px-2 rounded-[2px] cursor-pointer font-bold gap-1 mr-1 h-[30px]">
            <Menu className="h-[18px] w-[18px]" strokeWidth={2.5} />
            <span className="mt-[2px]">All</span>
          </div>
          
          {/* Links */}
          <div className="flex items-center h-full">
            {['MX Player', 'Sell', 'Bestsellers', 'Mobiles', "Today's Deals", 'Customer Service', 'New Releases', 'Prime', 'Fashion', 'Electronics', 'Amazon Pay', 'Home & Kitchen', 'Computers'].map((link) => (
              <div key={link} className="flex items-center border border-transparent hover:border-white p-1 px-2 rounded-[2px] cursor-pointer hidden sm:flex h-[30px] mt-[1px]">
                {link}
              </div>
            ))}
            {/* Mobile links */}
            {['Fresh', 'Amazon minis', 'Sell', 'Bestsellers', 'Mobiles', "Today's Deals"].map((link) => (
              <div key={`mobile-${link}`} className="flex items-center border border-transparent hover:border-white p-1 px-2 rounded-[2px] cursor-pointer sm:hidden h-[30px] mt-[1px]">
                {link}
              </div>
            ))}
          </div>
        </div>

        {/* Right side banner (hidden on small screens) */}
        <div className="hidden lg:flex items-center border border-transparent hover:border-white p-1 px-2 rounded-[2px] cursor-pointer font-bold h-[30px]">
          <span className="text-[14px]">New Launches from Mobiles, Electronics &amp; more | Shop now</span>
        </div>
      </div>
    </header>
  );
};
