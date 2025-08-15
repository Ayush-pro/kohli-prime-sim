import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatsCard } from "./StatsCard";
import { StatsChart } from "./StatsChart";

interface FormatData {
  format: string;
  stats: {
    runs: { actual: number; hypothetical: number };
    average: { actual: number; hypothetical: number };
    centuries: { actual: number; hypothetical: number };
    fifties: { actual: number; hypothetical: number };
    matches: { actual: number; hypothetical: number };
  };
}

const testData: FormatData = {
  format: "Test",
  stats: {
    runs: { actual: 8848, hypothetical: 15500 },
    average: { actual: 49.15, hypothetical: 62.80 },
    centuries: { actual: 29, hypothetical: 55 },
    fifties: { actual: 31, hypothetical: 45 },
    matches: { actual: 113, hypothetical: 180 }
  }
};

const odiData: FormatData = {
  format: "ODI", 
  stats: {
    runs: { actual: 13906, hypothetical: 22500 },
    average: { actual: 58.18, hypothetical: 68.50 },
    centuries: { actual: 50, hypothetical: 85 },
    fifties: { actual: 72, hypothetical: 95 },
    matches: { actual: 295, hypothetical: 420 }
  }
};

export const FormatTabs = () => {
  return (
    <Tabs defaultValue="odi" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-8">
        <TabsTrigger value="odi" className="text-lg">ODI Format</TabsTrigger>
        <TabsTrigger value="test" className="text-lg">Test Format</TabsTrigger>
      </TabsList>
      
      <TabsContent value="odi" className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatsCard
            title="Total Runs"
            actual={odiData.stats.runs.actual}
            hypothetical={odiData.stats.runs.hypothetical}
            format={odiData.format}
          />
          <StatsCard
            title="Batting Average"
            actual={odiData.stats.average.actual}
            hypothetical={odiData.stats.average.hypothetical}
            format={odiData.format}
            isPercentage={true}
          />
          <StatsCard
            title="Centuries"
            actual={odiData.stats.centuries.actual}
            hypothetical={odiData.stats.centuries.hypothetical}
            format={odiData.format}
          />
          <StatsCard
            title="Half Centuries"
            actual={odiData.stats.fifties.actual}
            hypothetical={odiData.stats.fifties.hypothetical}
            format={odiData.format}
          />
          <StatsCard
            title="Matches Played"
            actual={odiData.stats.matches.actual}
            hypothetical={odiData.stats.matches.hypothetical}
            format={odiData.format}
          />
        </div>
        <StatsChart data={odiData} />
      </TabsContent>
      
      <TabsContent value="test" className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatsCard
            title="Total Runs"
            actual={testData.stats.runs.actual}
            hypothetical={testData.stats.runs.hypothetical}
            format={testData.format}
          />
          <StatsCard
            title="Batting Average"
            actual={testData.stats.average.actual}
            hypothetical={testData.stats.average.hypothetical}
            format={testData.format}
            isPercentage={true}
          />
          <StatsCard
            title="Centuries"
            actual={testData.stats.centuries.actual}
            hypothetical={testData.stats.centuries.hypothetical}
            format={testData.format}
          />
          <StatsCard
            title="Half Centuries"
            actual={testData.stats.fifties.actual}
            hypothetical={testData.stats.fifties.hypothetical}
            format={testData.format}
          />
          <StatsCard
            title="Matches Played"
            actual={testData.stats.matches.actual}
            hypothetical={testData.stats.matches.hypothetical}
            format={testData.format}
          />
        </div>
        <StatsChart data={testData} />
      </TabsContent>
    </Tabs>
  );
};