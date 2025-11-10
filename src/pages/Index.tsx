import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Sparkles, TrendingUp, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-apartment.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";

const mockProperties = [
  {
    id: 1,
    image: property1,
    title: "溫馨套房 近捷運",
    location: "大安區 近大安站",
    price: 18000,
    bedrooms: 1,
    bathrooms: 1,
    size: 10,
    tags: ["近捷運", "獨立陽台", "家具齊全"],
  },
  {
    id: 2,
    image: property2,
    title: "明亮一房一廳",
    location: "信義區 近市政府站",
    price: 25000,
    bedrooms: 1,
    bathrooms: 1,
    size: 15,
    tags: ["可養寵物", "新裝潢", "採光佳"],
  },
  {
    id: 3,
    image: property3,
    title: "景觀兩房 有陽台",
    location: "中山區 近中山站",
    price: 32000,
    bedrooms: 2,
    bathrooms: 1,
    size: 20,
    tags: ["電梯大樓", "景觀好", "管理嚴謹"],
  },
  {
    id: 4,
    image: property4,
    title: "寵物友善套房",
    location: "松山區 近南京三民站",
    price: 20000,
    bedrooms: 1,
    bathrooms: 1,
    size: 12,
    tags: ["可養寵物", "採光佳", "近公園"],
  },
];

const Index = () => {
  const [filteredProperties, setFilteredProperties] = useState(mockProperties);

  const handleSearch = (keyword: string, minPrice: number, maxPrice: number) => {
    let filtered = mockProperties;

    // Filter by keyword
    if (keyword) {
      const lowerKeyword = keyword.toLowerCase();
      filtered = filtered.filter(
        (property) =>
          property.title.toLowerCase().includes(lowerKeyword) ||
          property.location.toLowerCase().includes(lowerKeyword) ||
          property.tags.some((tag) => tag.toLowerCase().includes(lowerKeyword))
      );
    }

    // Filter by price range
    filtered = filtered.filter(
      (property) => property.price >= minPrice && property.price <= maxPrice
    );

    setFilteredProperties(filtered);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              AI 租屋助理
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12">
            智慧搜尋 · 市場分析 · 找到最適合您的理想居所
          </p>
          <SearchBar onSearch={handleSearch} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">智慧搜尋</h3>
              <p className="text-muted-foreground">
                透過 AI 快速找到符合需求的房源，節省您的時間
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">市場分析</h3>
              <p className="text-muted-foreground">
                即時顯示區域行情，避免租貴了，做出明智決策
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">安心保障</h3>
              <p className="text-muted-foreground">
                嚴格審核房源，提供真實資訊，讓您租得安心
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">精選房源</h2>
              <p className="text-muted-foreground">
                {filteredProperties.length} 個物件符合您的搜尋條件
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
          {filteredProperties.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">
                找不到符合條件的房源
              </p>
              <Button onClick={() => setFilteredProperties(mockProperties)}>
                查看所有房源
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Index;
