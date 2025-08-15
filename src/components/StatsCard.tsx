import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatsCardProps {
  title: string;
  actual: number;
  hypothetical: number;
  format: string;
  unit?: string;
  isPercentage?: boolean;
}

export const StatsCard = ({ 
  title, 
  actual, 
  hypothetical, 
  format,
  unit = "",
  isPercentage = false 
}: StatsCardProps) => {
  const difference = hypothetical - actual;
  const percentageChange = ((difference / actual) * 100);
  const isIncrease = difference > 0;

  return (
    <Card className="bg-gradient-to-br from-card to-background border-border/50 shadow-cricket transition-all duration-300 hover:shadow-glow hover:scale-105">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
          <Badge variant="outline" className="text-xs">
            {format}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Actual</span>
            <span className="text-lg font-semibold">
              {isPercentage ? actual.toFixed(2) : actual.toLocaleString()}{unit}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Prime Extended</span>
            <span className="text-lg font-bold text-primary">
              {isPercentage ? hypothetical.toFixed(2) : hypothetical.toLocaleString()}{unit}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
          <div className="flex items-center gap-2">
            {isIncrease ? (
              <TrendingUp className="h-4 w-4 text-cricket-green" />
            ) : (
              <TrendingDown className="h-4 w-4 text-destructive" />
            )}
            <span className="text-sm font-medium">
              {isIncrease ? "+" : ""}{difference > 0 ? difference.toLocaleString() : 0}{unit}
            </span>
          </div>
          <Badge 
            variant={isIncrease ? "default" : "destructive"}
            className={isIncrease ? "bg-cricket-green hover:bg-cricket-green/80" : ""}
          >
            {isIncrease ? "+" : ""}{percentageChange.toFixed(1)}%
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};