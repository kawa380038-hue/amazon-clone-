"use client";

import React, { useState, use, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { findProductById } from "@/lib/mockData/categoryData";
import { useCartStore } from "@/store/cartStore";
import { Star, ChevronRight, MapPin, ShieldCheck, Lock, RotateCcw, Share2, Info, ChevronDown, CheckCircle2 } from "lucide-react";

export default function ProductPage({ params: paramsPromise }: { params: Promise<{ id: string }> }) {
  const params = use(paramsPromise);
  const id = params.id;
  const product = findProductById(id);
  const router = useRouter();
  const { addItem } = useCartStore();
  
  // States for dynamic updates
  const [selectedVariation, setSelectedVariation] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [activeThumb, setActiveThumb] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showFeedback, setShowFeedback] = useState(false);

  // Initialize states once product is loaded
  useEffect(() => {
    if (product) {
      const defaultVar = product.variations?.find((v: any) => v.selected) || product.variations?.[0];
      setSelectedVariation(defaultVar);
      setSelectedImage(product.image);
    }
  }, [product]);

  const handleAddToCart = () => {
    if (!product) return;
    
    // Create a product object with current state (like selected variation price/name)
    const productToCart = {
      ...product,
      price: currentPrice,
      originalPrice: currentMRP,
      name: selectedVariation ? `${product.name} (${selectedVariation.name})` : product.name,
      image: selectedVariation?.image || product.image,
    };

    addItem(productToCart, quantity);
    setShowFeedback(true);
    setTimeout(() => setShowFeedback(false), 3000);
  };

  const handleBuyNow = () => {
    if (!product) return;

    const productToCart = {
      ...product,
      price: currentPrice,
      originalPrice: currentMRP,
      name: selectedVariation ? `${product.name} (${selectedVariation.name})` : product.name,
      image: selectedVariation?.image || product.image,
    };

    addItem(productToCart, quantity);

    // Zustand persist writes to localStorage asynchronously.
    // We must manually sync the updated state to localStorage BEFORE
    // navigating, otherwise the new page will hydrate with stale data.
    const currentState = useCartStore.getState();
    const storageValue = JSON.stringify({
      state: { items: currentState.items },
      version: 0,
    });
    localStorage.setItem('amazon-cart-storage', storageValue);

    // Now navigate — the checkout page will read the correct cart
    window.location.href = '/checkout';
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-10">
        <h1 className="text-2xl font-bold text-[#0F1111] mb-4">Looking for something?</h1>
        <p className="text-[#565959] mb-6">We're sorry. The Web address you've entered is not a functioning page on our site.</p>
        <Link href="/" className="text-[#007185] hover:text-[#C7511F] hover:underline">Go to Amazon.in's Home Page</Link>
      </div>
    );
  }

  const currentPrice = selectedVariation ? selectedVariation.price : product.price;
  const currentMRP = selectedVariation ? selectedVariation.originalPrice : product.originalPrice;
  const discountPercent = Math.round(((currentMRP - currentPrice) / currentMRP) * 100);
  const images = product.images || [product.image];

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Top Banner Placeholder */}
      <div className="w-full bg-[#f8f8f8] border-b border-[#ddd] py-2">
        <div className="max-w-[1500px] mx-auto px-4 flex items-center justify-between text-[12px] text-[#0F1111] overflow-x-auto whitespace-nowrap gap-6 no-scrollbar">
            {["Industrial and Scientific", "Best Sellers", "Lab & Scientific Products", "Janitorial & Sanitation Supplies", "Test, Measure & Inspect", "Tapes, Adhesives & Sealants", "Occupational Health & Safety Products"].map(item => (
                <span key={item} className="hover:text-[#C7511F] hover:underline cursor-pointer font-bold">{item}</span>
            ))}
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="max-w-[1500px] mx-auto px-4 py-2 flex items-center gap-1 text-[12px] text-[#565959]">
        {(product.breadcrumbs || ["Home", "Product"]).map((crumb: string, idx: number) => (
          <React.Fragment key={idx}>
            <Link href="#" className="hover:underline hover:text-[#C7511F]">{crumb}</Link>
            {idx < (product.breadcrumbs?.length || 2) - 1 && <ChevronRight size={10} />}
          </React.Fragment>
        ))}
      </div>

      <main className="max-w-[1500px] mx-auto flex flex-col lg:flex-row gap-6 px-4 pt-2">
        
        {/* Left Column: Image Gallery (Approx 42%) */}
        <div className="lg:w-[42%] flex gap-4 sticky top-4 self-start">
          {/* Vertical Thumbnails */}
          <div className="hidden lg:flex flex-col gap-2">
            {images.map((img: string, idx: number) => (
              <div 
                key={idx}
                onMouseEnter={() => {
                    setSelectedImage(img);
                    setActiveThumb(idx);
                }}
                className={`w-[40px] h-[50px] border rounded-[4px] cursor-pointer p-0.5 overflow-hidden flex items-center justify-center transition-all ${activeThumb === idx ? 'border-[#e77600] ring-1 ring-[#e77600] shadow-[0_0_3px_rgba(231,118,0,0.5)]' : 'border-[#DDD] hover:border-[#aaa]'}`}
              >
                <img src={img} alt="thumbnail" className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>
          
          {/* Main Image Container */}
          <div className="flex-grow flex flex-col items-center">
            <div className="relative group w-full flex items-center justify-center p-4 min-h-[400px] bg-white">
                <img 
                    src={selectedImage || product.image} 
                    alt={product.name} 
                    className="max-w-full max-h-[500px] object-contain cursor-zoom-in" 
                />
                <div className="absolute top-2 right-2 p-2 rounded-full hover:bg-gray-100 cursor-pointer text-gray-500">
                    <Share2 size={20} />
                </div>
            </div>
            <p className="text-[14px] text-[#565959] mt-4">Click to see full view</p>
          </div>
        </div>

        {/* Center Column: Product Details (Approx 38%) */}
        <div className="lg:w-[38%] flex flex-col">
          <div className="flex flex-col mb-1 border-b border-[#DDD] pb-2">
            <h1 className="text-[24px] font-medium leading-[1.2] text-[#0F1111] mb-1">
                {product.name}
            </h1>
            <Link href="#" className="text-[14px] text-[#007185] hover:text-[#C7511F] hover:underline mb-1">Visit the {product.technicalDetails?.Brand || "Store"}</Link>
            
            <div className="flex items-center gap-2 flex-wrap">
                <div className="flex items-center gap-1 group cursor-pointer">
                <span className="text-[14px] font-medium pt-0.5">{product.rating}</span>
                <div className="flex items-center text-[#F3A847]">
                    {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} strokeWidth={1} />
                    ))}
                </div>
                <ChevronDown size={14} className="text-gray-500" />
                </div>
                <span className="text-[14px] text-[#007185] hover:text-[#C7511F] hover:underline cursor-pointer border-r border-[#DDD] pr-2">
                {product.reviewCount.toLocaleString()} ratings
                </span>
                {product.amazonChoice && (
                    <div className="bg-[#232F3E] text-white text-[12px] px-2 py-0.5 flex items-center gap-1 leading-none h-[22px]">
                        <span className="text-[#F3A847]">Amazon's</span> <span className="text-white font-bold">Choice</span>
                    </div>
                )}
            </div>
            {product.boughtInLastMonth && (
                <div className="text-[14px] font-bold text-[#0F1111] mt-2">
                    {product.boughtInLastMonth} bought in past month
                </div>
            )}
          </div>

          {/* Pricing Section */}
          <div className="flex flex-col py-4">
            <div className="flex items-baseline gap-2">
              <span className="text-[28px] text-[#CC0C39] font-light leading-none">-{discountPercent}%</span>
              <div className="flex items-start">
                <span className="text-[13px] mt-1 font-medium">₹</span>
                <span className="text-[28px] font-medium">{currentPrice.toLocaleString()}</span>
              </div>
            </div>
            <div className="text-[13px] text-[#565959] mt-1">
              M.R.P.: <span className="line-through">₹{currentMRP.toLocaleString()}</span>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18._CB485936079_.png" alt="Fulfilled" className="h-[15px]" />
              <span className="text-[14px] font-bold text-[#0F1111]">Inclusive of all taxes</span>
            </div>
          </div>

          <hr className="border-[#DDD]" />

          {/* Offers Section */}
          {product.offers && (
            <div className="py-4">
                <div className="flex items-center gap-2 mb-3">
                    <span className="font-bold text-[16px]">Offers</span>
                </div>
                <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                    {product.offers.map((offer: any, idx: number) => (
                        <div key={idx} className="min-w-[150px] p-3 border border-[#DDD] rounded-[8px] flex flex-col gap-1 shadow-sm hover:shadow-md cursor-pointer transition-shadow">
                            <span className="text-[14px] font-bold">{offer.title}</span>
                            <span className="text-[12px] text-[#0F1111] line-clamp-2">{offer.content}</span>
                            <Link href="#" className="text-[12px] text-[#007185] font-bold hover:underline mt-auto">{offer.linkText}</Link>
                        </div>
                    ))}
                </div>
            </div>
          )}

          <hr className="border-[#DDD]" />

          {/* Service Icons Section */}
          {product.services && (
            <div className="flex items-center justify-between gap-2 overflow-x-auto no-scrollbar py-4">
                {product.services.map((service: any, idx: number) => (
                    <div key={idx} className="flex flex-col items-center text-center min-w-[70px] group cursor-pointer">
                        <div className="w-9 h-9 flex items-center justify-center mb-1">
                            {/* Handled dynamic icons or static Amazon icons */}
                            <div className="bg-[#007185]/5 p-2 rounded-full group-hover:bg-[#007185]/10 transition-colors">
                                <RotateCcw size={20} className="text-[#007185]" />
                            </div>
                        </div>
                        <span className="text-[11px] text-[#007185] font-medium leading-tight group-hover:underline">
                            {service.label}
                        </span>
                    </div>
                ))}
            </div>
          )}

          <hr className="border-[#DDD]" />

          {/* Style Selector */}
          {product.variations && (
            <div className="py-4">
                <h3 className="text-[14px] font-bold mb-2">Style Name: <span className="font-normal">{selectedVariation?.name}</span></h3>
                <div className="flex flex-wrap gap-2">
                    {product.variations.map((variation: any, idx: number) => (
                        <div 
                            key={idx}
                            onClick={() => setSelectedVariation(variation)}
                            className={`flex flex-col p-2 border rounded-[4px] cursor-pointer min-w-[80px] hover:bg-gray-50 transition-all ${selectedVariation?.name === variation.name ? 'border-[#e77600] border-2 bg-white' : 'border-[#DDD]'}`}
                        >
                            <span className="text-[12px] font-bold">{variation.name}</span>
                            <span className="text-[12px] text-[#CC0C39] font-medium">₹{variation.price.toLocaleString()}</span>
                            <span className="text-[10px] text-[#565959] line-through">₹{variation.originalPrice.toLocaleString()}</span>
                        </div>
                    ))}
                </div>
            </div>
          )}

          {/* Summary Table Preview */}
          <div className="py-4 border-t border-[#DDD]">
              <table className="w-full text-[14px]">
                  <tbody>
                    {Object.entries(product.technicalDetails || {}).slice(0, 4).map(([key, value]: [string, any]) => (
                        <tr key={key}>
                            <td className="font-bold py-1 w-[45%] text-[#0F1111]">{key}</td>
                            <td className="py-1 text-[#0F1111]">{value}</td>
                        </tr>
                    ))}
                  </tbody>
              </table>
          </div>

          <hr className="border-[#DDD]" />

          {/* About this item */}
          <div className="py-6">
            <h3 className="text-[16px] font-bold text-[#0F1111] mb-2">About this item</h3>
            <ul className="list-disc pl-5 space-y-1">
              {product.aboutThisItem?.map((point: string, idx: number) => (
                <li key={idx} className="text-[14px] text-[#0F1111] leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
             <div className="mt-4 flex items-center gap-1 text-[13px] text-[#007185] hover:text-[#C7511F] hover:underline cursor-pointer group">
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                <span>See more product details</span>
            </div>
          </div>
        </div>

        {/* Right Column: Buy Box (Approx 20%) */}
        <div className="lg:w-[20%] border border-[#DDD] rounded-[8px] p-4 h-fit flex flex-col bg-white sticky top-4">
          <div className="flex items-start mb-1">
            <span className="text-[13px] mt-1 font-medium">₹</span>
            <span className="text-[28px] font-medium">{currentPrice.toLocaleString()}</span>
            <span className="text-[14px] mt-1 font-medium ml-1">00</span>
          </div>
          
          <div className="flex items-center gap-2 mb-2">
             <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18._CB485936079_.png" alt="Fulfilled" className="h-[15px]" />
             <span className="text-[14px] text-[#007185] hover:underline cursor-pointer font-medium italic">Fulfilled</span>
          </div>

          <div className="text-[14px] text-[#0F1111] mb-1">
             <span className="font-bold">FREE delivery</span> <span className="font-bold">{product.delivery}</span>. Order within <span className="text-[#007600] font-medium">7 hrs 41 mins</span>. <Link href="#" className="text-[#007185] hover:underline">Details</Link>
          </div>

          <div className="flex items-center gap-1 text-[12px] text-[#007185] mb-4">
            <MapPin size={14} />
            <span className="hover:text-[#C7511F] hover:underline cursor-pointer">Delivering to Jammu 180002 - Update location</span>
          </div>

          <div className="text-[18px] text-[#007600] font-medium mb-1">
            In stock
          </div>

          <div className="text-[12px] text-[#565959] mb-4">
             <div className="flex">
                <span className="w-16">Ships from</span>
                <span className="text-[#0F1111]">Amazon</span>
             </div>
             <div className="flex">
                <span className="w-16">Sold by</span>
                <span className="text-[#007185] hover:underline">Clicktech Retail Private Ltd</span>
             </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-4">
              <div className="relative group">
                  <select 
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full bg-[#F0F2F2] border border-[#D5D9D9] rounded-[8px] px-3 py-1 shadow-sm hover:bg-[#E3E6E6] cursor-pointer appearance-none text-[13px] outline-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                        <option key={n} value={n}>Quantity: {n}</option>
                    ))}
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-2.5 text-gray-500 pointer-events-none" />
              </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2 mb-4">
             <button 
                onClick={handleAddToCart}
                className="w-full bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-full py-2 text-[14px] text-[#0F1111] shadow-sm font-medium transition-colors"
             >
                Add to Cart
             </button>
             <button 
                onClick={handleBuyNow}
                className="w-full bg-[#FFA41C] hover:bg-[#FA8900] border border-[#FF8F00] rounded-full py-2 text-[14px] text-[#0F1111] shadow-sm font-medium transition-colors"
             >
                Buy Now
             </button>
          </div>
          
          {/* FeedBack Message */}
          {showFeedback && (
              <div className="mb-4 p-2 bg-green-50 border border-green-200 rounded-md flex items-center gap-2 animate-in fade-in slide-in-from-top-1 duration-300">
                  <CheckCircle2 size={16} className="text-green-600" />
                  <span className="text-[12px] text-green-800 font-medium">Added to Cart</span>
                  <Link href="/cart" className="text-[12px] text-[#007185] hover:underline ml-auto font-bold">View</Link>
              </div>
          )}

          <div className="flex items-center gap-2 text-[12px] text-[#565959] mb-4 pb-4 border-b border-[#DDD]">
            <Lock size={12} className="text-gray-400" />
            <span className="hover:text-[#C7511F] cursor-pointer">Secure transaction</span>
          </div>
          
          <button className="w-full bg-white hover:bg-gray-50 border border-[#D5D9D9] rounded-[4px] py-1 text-[13px] text-[#0F1111] shadow-sm mb-4">
             Add to Wish List
          </button>
        </div>
      </main>

      {/* Product Description Section (A+ Content) */}
      <section className="max-w-[1500px] mx-auto px-4 mt-12 pt-12 border-t border-[#DDD]">
        <h2 className="text-[21px] font-bold text-[#0F1111] mb-8">Product Description</h2>
        
        <div className="flex flex-col gap-16">
            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <img src="/products/scale-context.png" alt="Precision Performance" className="w-full h-auto rounded-lg shadow-lg border border-gray-100" />
                </div>
                <div className="md:w-1/2">
                    <div className="flex items-center gap-2 mb-4">
                        <ShieldCheck className="text-[#007600]" size={24} />
                        <h3 className="text-[28px] font-bold text-[#0F1111]">Precision Performance</h3>
                    </div>
                    <p className="text-[16px] text-[#565959] leading-relaxed">
                        The ATOM ALISTON K1 Series is engineered with high-accuracy loaded sensors to provide instantaneous and accurate results. 
                        Whether you're measuring ingredients for a delicate cake or tracking your daily nutrition, 
                        this scale ensures you have the exact weight every time. The precision is optimized for increments of 1g, 
                        making it ideal for both professional chefs and home bakers.
                    </p>
                    <ul className="mt-6 space-y-3">
                        {["High-precision strain gauge sensors", "Quick 1-second response time", "Stabilization indicator"].map(item => (
                            <li key={item} className="flex items-center gap-2 text-[14px] text-[#0F1111]">
                                <span className="w-1.5 h-1.5 bg-[#007600] rounded-full"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                <div className="md:w-1/2">
                    <img src="/products/scale-main.png" alt="Smart Design" className="w-full h-auto rounded-lg shadow-lg border border-gray-100" />
                </div>
                <div className="md:w-1/2">
                    <div className="flex items-center gap-2 mb-4">
                        <Info className="text-[#007185]" size={24} />
                        <h3 className="text-[28px] font-bold text-[#0F1111]">Smart Design & Reliability</h3>
                    </div>
                    <p className="text-[16px] text-[#565959] leading-relaxed">
                        Featuring a clear, backlit LCD display, the K1 scale is easy to read in any environment. 
                        The TARE function allows you to weigh multiple ingredients in the same container by simply stripping the weight 
                        between additions. Its compact profile makes it easy to store in any kitchen drawer or cabinet. 
                        The A+ design ensures durability and style, fitting perfectly on any modern marble or granite countertop.
                    </p>
                    <div className="mt-8 grid grid-cols-2 gap-4">
                        <div className="bg-[#F7F7F7] p-4 rounded-md">
                            <span className="block font-bold text-[14px]">TARE Feature</span>
                            <span className="text-[12px] text-[#565959]">Easy net-weight calculation</span>
                        </div>
                        <div className="bg-[#F7F7F7] p-4 rounded-md">
                            <span className="block font-bold text-[14px]">Auto-Off</span>
                            <span className="text-[12px] text-[#565959]">Battery-saving technology</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Detailed Technical Specs Table (Full Table) */}
      <section className="max-w-[1500px] mx-auto px-4 mt-20 pt-12 border-t border-[#DDD]">
        <h2 className="text-[21px] font-bold text-[#0F1111] mb-6">Product Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
            {Object.entries(product.technicalDetails || {}).map(([key, value]: [string, any]) => (
                <div key={key} className="flex border-b border-[#F0F2F2] py-4">
                    <span className="w-1/2 font-bold text-[14px] text-[#444]">{key}</span>
                    <span className="w-1/2 text-[14px] text-[#0F1111]">{value}</span>
                </div>
            ))}
        </div>
      </section>

      {/* Footer Info Placeholder */}
      <section className="max-w-[1500px] mx-auto px-4 mt-16 pt-12 border-t border-[#DDD]">
          <div className="flex flex-col gap-4">
              <h2 className="text-[21px] font-bold text-[#0F1111]">Customer Ratings & Reviews</h2>
              <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                      <div className="flex items-center gap-1">
                          <Star size={24} fill="#F3A847" stroke="#F3A847" />
                          <span className="text-[24px] font-bold">4.8 out of 5</span>
                      </div>
                      <span className="text-[14px] text-[#565959]">22,207 global ratings</span>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
}
