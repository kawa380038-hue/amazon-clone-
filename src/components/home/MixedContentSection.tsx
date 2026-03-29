"use client";

import React from "react";
import ProductFeatureCard from "./ProductFeatureCard";
import CategoryCard from "./CategoryCard";
import ProductCarouselRow from "./ProductCarouselRow";

// Helper constant for mock images to easily update them
const MOCK_IMAGE_SPEAKER_MAIN = "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=600";
const MOCK_IMAGE_SPEAKER_THUMB = "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=200";
const MOCK_IMAGE_SHIRT_MAIN = "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=600";
const MOCK_IMAGE_SHIRT_THUMB = "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=200";

const KITCHEN_IMAGES = [
  "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=400",
  "https://images.unsplash.com/photo-1584988771966-51f71df4284b?q=80&w=400",
  "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=400",
  "https://images.unsplash.com/photo-1584988771804-0994519fcf49?q=80&w=400",
];

const CLOTHING_IMAGES = [
  "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=400",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=400",
  "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=400",
  "https://images.unsplash.com/photo-1582266255765-fa5cf1a1d501?q=80&w=400"
];

const CAROUSEL_ITEMS = [
  { id: '1', image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=500" },
  { id: '2', image: "https://images.unsplash.com/photo-1595166415555-5dc1fa4e3c99?q=80&w=500" },
  { id: '3', image: "https://images.unsplash.com/photo-1626806787426-591081ef607a?q=80&w=500" },
  { id: '4', image: "https://images.unsplash.com/photo-1585659722983-3a6750f2fd82?q=80&w=500" },
  { id: '5', image: "https://images.unsplash.com/photo-1584281720448-6a56b69b828a?q=80&w=500" },
  { id: '6', image: "https://images.unsplash.com/photo-1585565507452-f472251a31d9?q=80&w=500" },
  { id: '7', image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=500" },
];

export default function MixedContentSection() {
  return (
    <section className="bg-transparent w-full max-w-[1400px] mx-auto px-4 pb-12 flex flex-col gap-8 relative z-30 font-sans">
      
      {/* Top Row: Grid of 4 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        
        {/* Card 1: Large Product Highlight (Electronics) */}
        <ProductFeatureCard 
          id="elec-1"
          title="Up to 50% off | Speakers, home theaters & more"
          mainImage={MOCK_IMAGE_SPEAKER_MAIN}
          description="TRONICA PS07 Premium Series 7.1 Digital 60W Bluetooth Home Theater System PenDrive FM Aux..."
          price="₹2,563.00"
          mrp="M.R.P: ₹4,000.00"
          thumbnails={[
            MOCK_IMAGE_SPEAKER_THUMB, MOCK_IMAGE_SPEAKER_THUMB, MOCK_IMAGE_SPEAKER_THUMB, MOCK_IMAGE_SPEAKER_THUMB
          ]}
        />

        {/* Card 2: Multi-Item Grid (Home & Kitchen) */}
        <CategoryCard 
          title="Best Sellers in Home & Kitchen"
          items={[
            { image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=300", label: "Mixers", href: "/product/hk-1" },
            { image: "/products/scale-main.png", label: "Scales", href: "/product/hk-scale" },
            { image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=300", label: "Cookware", href: "/category/home-kitchen" },
            { image: "https://images.unsplash.com/photo-1584988771804-0994519fcf49?q=80&w=300", label: "Storage", href: "/category/home-kitchen" },
          ]}
        />

        {/* Card 3: Large Product Highlight (Fashion) */}
        <ProductFeatureCard 
          id="fas-1"
          title="Up to 40% off | Latest trends in Women's Fashion"
          mainImage={MOCK_IMAGE_SHIRT_MAIN}
          description="Bewakoof Official Disney Merchandise Minnie Women's Graphic Printed Boyfriend Fit Half Sleev..."
          price="₹495.00"
          mrp="M.R.P: ₹1,099.00"
          thumbnails={[
            MOCK_IMAGE_SHIRT_THUMB, MOCK_IMAGE_SHIRT_THUMB, MOCK_IMAGE_SHIRT_THUMB, MOCK_IMAGE_SHIRT_THUMB
          ]}
        />

        {/* Card 4: Multi-Item Grid (Clothing & Accessories) */}
        <CategoryCard 
          title="Best Sellers in Clothing & Accessories"
          items={[
            { image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=300", label: "Dresses", href: "/category/fashion" },
            { image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=300", label: "T-Shirts", href: "/product/fas-1" },
            { image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=300", label: "Sweatshirts", href: "/category/fashion" },
            { image: "https://images.unsplash.com/photo-1582266255765-fa5cf1a1d501?q=80&w=300", label: "Bottoms", href: "/category/fashion" },
          ]}
        />
        
      </div>

      {/* Bottom Row: Horizontal Carousel */}
      <ProductCarouselRow 
        title="Starting ₹299 | Upgrade your kitchen today"
        linkText="See all offers"
        items={[
            { id: 'hk-1', image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=400" },
            { id: 'app-1', image: "https://images.unsplash.com/photo-1595166415555-5dc1fa4e3c99?q=80&w=400" },
            { id: 'hk-scale', image: "/products/scale-main.png" },
            { id: 'app-2', image: "https://images.unsplash.com/photo-1585659722983-3a6750f2fd82?q=80&w=400" },
            { id: 'lit-1', image: "https://images.unsplash.com/photo-1584281720448-6a56b69b828a?q=80&w=400" },
            { id: 'auto-1', image: "https://images.unsplash.com/photo-1585565507452-f472251a31d9?q=80&w=400" },
            { id: 'fas-1', image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=400" },
        ]}
      />
      
    </section>
  );
}
