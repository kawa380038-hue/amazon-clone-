import HeroBanner from "@/components/home/HeroBanner";
import CategoryGrid from "@/components/home/CategoryGrid";
import HorizontalDeals from "@/components/home/HorizontalDeals";
import MixedContentSection from "@/components/home/MixedContentSection";
import { PRODUCT_DATA } from "@/lib/mockData";

export default function Home() {
  return (
    <div className="bg-[#EAEDED] min-h-screen w-full font-sans">
      <main className="w-full flex flex-col pb-20 overflow-x-hidden">
        <HeroBanner />
        
        {/* Category Cards overlap the hero banner slightly */}
        <CategoryGrid />
        
        {/* Horizontal Deal Sections */}
        <div className="mt-4 md:mt-8 px-4 max-w-[1400px] mx-auto w-full">
          <HorizontalDeals 
            title="Min. 50% off | Unique home finds | Amazon Brands & more"
            linkText="See all"
            items={PRODUCT_DATA.homeFinds}
          />
        </div>
        
        <div className="mt-4 md:mt-6 px-4 max-w-[1400px] mx-auto w-full">
          <HorizontalDeals 
            title="Up to 50% Off | Steal deals on stylish furniture"
            linkText="See all offers"
            items={PRODUCT_DATA.furnitureDeals}
          />
        </div>
        
        {/* Mixed Content Section */}
        <div className="mt-8">
          <MixedContentSection />
        </div>
      </main>
    </div>
  );
}


