import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface SearchBarProps {
  onSearch: (keyword: string, minPrice: number, maxPrice: number) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [keyword, setKeyword] = useState("");
  const [priceRange, setPriceRange] = useState([10000, 50000]);

  const handleSearch = () => {
    onSearch(keyword, priceRange[0], priceRange[1]);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input
            type="text"
            placeholder="搜尋地點、捷運站、關鍵字（例如：中山區、可養寵物）"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            className="pl-10 h-12 text-base"
          />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="h-12 w-12">
              <SlidersHorizontal className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>進階篩選</SheetTitle>
              <SheetDescription>設定您的租屋條件</SheetDescription>
            </SheetHeader>
            <div className="space-y-6 mt-6">
              <div>
                <Label className="text-base font-semibold mb-4 block">
                  價格區間
                </Label>
                <div className="space-y-4">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    min={5000}
                    max={100000}
                    step={1000}
                    className="mt-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>NT$ {priceRange[0].toLocaleString()}</span>
                    <span>NT$ {priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <Button onClick={handleSearch} size="lg" className="h-12 px-8">
          搜尋
        </Button>
      </div>
    </div>
  );
};
