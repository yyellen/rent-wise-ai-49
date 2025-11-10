import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface MarketAnalysisProps {
  currentPrice: number;
  averagePrice: number;
  location: string;
}

export const MarketAnalysis = ({
  currentPrice,
  averagePrice,
  location,
}: MarketAnalysisProps) => {
  const priceDiff = currentPrice - averagePrice;
  const percentDiff = ((priceDiff / averagePrice) * 100).toFixed(1);
  const isAboveAverage = priceDiff > 0;

  // Mock historical data
  const historicalData = [
    { month: "6個月前", price: averagePrice - 1500 },
    { month: "5個月前", price: averagePrice - 1000 },
    { month: "4個月前", price: averagePrice - 800 },
    { month: "3個月前", price: averagePrice - 500 },
    { month: "2個月前", price: averagePrice - 200 },
    { month: "1個月前", price: averagePrice + 100 },
    { month: "本月", price: currentPrice },
  ];

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-gradient-to-br from-secondary/30 to-secondary/10 border-secondary">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-1">市場行情分析</h3>
            <p className="text-sm text-muted-foreground">{location} 同類型物件</p>
          </div>
          <Activity className="w-6 h-6 text-primary" />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">此房源租金</p>
            <p className="text-2xl font-bold text-foreground">
              NT$ {currentPrice.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">區域平均租金</p>
            <p className="text-2xl font-bold text-foreground">
              NT$ {averagePrice.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="mt-4 p-4 rounded-lg bg-card">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">價格比較</span>
            <div className="flex items-center gap-2">
              {isAboveAverage ? (
                <>
                  <TrendingUp className="w-5 h-5 text-destructive" />
                  <span className="text-destructive font-semibold">
                    高於平均 {percentDiff}%
                  </span>
                </>
              ) : (
                <>
                  <TrendingDown className="w-5 h-5 text-primary" />
                  <span className="text-primary font-semibold">
                    低於平均 {Math.abs(Number(percentDiff))}%
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h4 className="text-lg font-semibold text-foreground mb-4">歷史價格趨勢</h4>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={historicalData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="month" 
                stroke="hsl(var(--muted-foreground))"
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
                tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  color: 'hsl(var(--foreground))'
                }}
                formatter={(value: number) => [`NT$ ${value.toLocaleString()}`, '租金']}
              />
              <Line 
                type="monotone" 
                dataKey="price" 
                stroke="hsl(var(--primary))" 
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--primary))', r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          * 數據基於該區域過去 6 個月的租金變化趨勢
        </p>
      </Card>
    </div>
  );
};
