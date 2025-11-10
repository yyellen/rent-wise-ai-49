import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MarketAnalysis } from "@/components/MarketAnalysis";
import {
  MapPin,
  Bed,
  Bath,
  Square,
  ArrowLeft,
  Phone,
  Mail,
  Share2,
} from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";

const mockPropertyDetails = {
  1: {
    image: property1,
    title: "溫馨套房 近捷運",
    location: "大安區 近大安站",
    price: 18000,
    bedrooms: 1,
    bathrooms: 1,
    size: 10,
    tags: ["近捷運", "獨立陽台", "家具齊全"],
    description:
      "位於大安區精華地段，步行 3 分鐘即達捷運大安站。室內空間規劃完善，採光充足，家具家電一應俱全，拎包即可入住。社區管理完善，24 小時保全，生活機能佳，周邊有各式餐廳、便利商店、超市等。",
    averagePrice: 17500,
  },
  2: {
    image: property2,
    title: "明亮一房一廳",
    location: "信義區 近市政府站",
    price: 25000,
    bedrooms: 1,
    bathrooms: 1,
    size: 15,
    tags: ["可養寵物", "新裝潢", "採光佳"],
    description:
      "全新裝潢的一房一廳，開放式廚房設計，空間寬敞明亮。歡迎攜帶寵物入住，社區設有寵物活動區。鄰近 101 商圈，生活便利，適合喜愛都會生活的您。",
    averagePrice: 26000,
  },
  3: {
    image: property3,
    title: "景觀兩房 有陽台",
    location: "中山區 近中山站",
    price: 32000,
    bedrooms: 2,
    bathrooms: 1,
    size: 20,
    tags: ["電梯大樓", "景觀好", "管理嚴謹"],
    description:
      "高樓層景觀兩房，擁有寬敞陽台可欣賞城市美景。電梯大樓管理嚴謹，住戶單純。近中山站商圈，生活機能完善，適合小家庭或需要獨立空間的租客。",
    averagePrice: 30000,
  },
  4: {
    image: property4,
    title: "寵物友善套房",
    location: "松山區 近南京三民站",
    price: 20000,
    bedrooms: 1,
    bathrooms: 1,
    size: 12,
    tags: ["可養寵物", "採光佳", "近公園"],
    description:
      "溫馨寵物友善套房，鄰近大型公園，適合帶寵物散步。室內採光極佳，通風良好。社區環境清幽，生活品質優良。距離捷運站步行約 5 分鐘。",
    averagePrice: 19000,
  },
};

const PropertyDetail = () => {
  const { id } = useParams();
  const property = mockPropertyDetails[Number(id) as keyof typeof mockPropertyDetails];

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-foreground">找不到此物件</h2>
          <Link to="/">
            <Button>返回首頁</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回搜尋結果
            </Button>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image */}
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-[400px] object-cover"
              />
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-4 right-4"
              >
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            {/* Property Info */}
            <Card className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">
                    {property.title}
                  </h1>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span className="text-lg">{property.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground mb-1">月租金</div>
                  <div className="text-3xl font-bold text-primary">
                    NT$ {property.price.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="flex gap-6 mb-6 pb-6 border-b">
                <div className="flex items-center">
                  <Bed className="w-5 h-5 mr-2 text-muted-foreground" />
                  <span className="font-medium">{property.bedrooms} 房</span>
                </div>
                <div className="flex items-center">
                  <Bath className="w-5 h-5 mr-2 text-muted-foreground" />
                  <span className="font-medium">{property.bathrooms} 衛</span>
                </div>
                <div className="flex items-center">
                  <Square className="w-5 h-5 mr-2 text-muted-foreground" />
                  <span className="font-medium">{property.size} 坪</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {property.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  物件描述
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {property.description}
                </p>
              </div>
            </Card>

            {/* Market Analysis */}
            <MarketAnalysis
              currentPrice={property.price}
              averagePrice={property.averagePrice}
              location={property.location.split(" ")[0]}
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6 sticky top-4">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                聯絡房東
              </h3>
              <div className="space-y-3">
                <Button className="w-full" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  撥打電話
                </Button>
                <Button className="w-full" variant="outline" size="lg">
                  <Mail className="w-5 h-5 mr-2" />
                  發送訊息
                </Button>
              </div>
              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-muted-foreground">
                  提醒：看房前請確認物件真實性，注意個人安全
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-secondary/30">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                租屋小提醒
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 確認租金是否包含管理費</li>
                <li>• 詢問押金及違約金規定</li>
                <li>• 查看水電瓦斯收費方式</li>
                <li>• 確認可否遷入戶籍</li>
                <li>• 了解租約期限及續約規定</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
