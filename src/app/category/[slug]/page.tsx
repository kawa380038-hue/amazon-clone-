import { CategoryHeader } from "@/components/category/CategoryHeader";
import { Sidebar } from "@/components/category/Sidebar";
import { CategoryCarousel } from "@/components/category/CategoryCarousel";
import { ProductSection } from "@/components/category/ProductSection";
import { categoryDataMap } from "@/lib/mockData/categoryData";
import { notFound } from "next/navigation";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const data = categoryDataMap[params.slug] || categoryDataMap["lighting"];
  
  if (!data) return notFound();

  return (
    <div className="flex flex-col min-h-screen bg-[#EAEDED]">
      <CategoryHeader 
        breadcrumbs={data.header.breadcrumbs} 
        title={data.header.title} 
        description={data.header.description} 
      />
      
      <div className="w-full flex gap-0 px-2">
        {/* Sidebar Panel */}
        <Sidebar 
          categories={data.sidebar.categories} 
          brands={data.sidebar.brands} 
        />
        
        {/* Main Content Area */}
        <main className="flex-grow min-w-0 flex flex-col pt-1 px-4">
          <CategoryCarousel banners={data.banners} />
          
          {/* Intermediate Text Banner - High Precision Match */}
          <div className="bg-white mb-6 shadow-sm border border-[#DDD] overflow-hidden">
             <img 
               src="https://m.media-amazon.com/images/G/31/IMG20/Home/2024/Lightingstore/Comp_1.gif" 
               alt="promo text banner" 
               className="w-full h-auto cursor-pointer border-r border-[#dee1e1]"
             />
          </div>

          <ProductSection 
            title="Recommended for you" 
            products={data.products} 
          />
          
          {/* Secondary promo banner */}
          <div className="bg-white p-2 border border-[#DDD] mb-8 shadow-sm">
             <img 
               src="https://m.media-amazon.com/images/G/31/IMG20/Home/2024/Lightingstore/Lighting_SubHeader_Philips_PC_3000x700._CB583202234_.gif" 
               alt="philips promo" 
               className="w-full h-auto cursor-pointer"
             />
          </div>

          <ProductSection 
            title="Best Sellers in Lighting" 
            products={[...data.products].reverse()} 
          />
        </main>
      </div>
    </div>
  );
}
