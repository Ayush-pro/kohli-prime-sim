import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ChartData {
  format: string;
  stats: {
    runs: { actual: number; hypothetical: number };
    average: { actual: number; hypothetical: number };
    centuries: { actual: number; hypothetical: number };
    fifties: { actual: number; hypothetical: number };
    matches: { actual: number; hypothetical: number };
  };
}

export const StatsChart = ({ data }: { data: ChartData }) => {
  const chartData = [
    {
      name: 'Runs',
      Actual: data.stats.runs.actual,
      'Prime Extended': data.stats.runs.hypothetical,
    },
    {
      name: 'Centuries',
      Actual: data.stats.centuries.actual,
      'Prime Extended': data.stats.centuries.hypothetical,
    },
    {
      name: 'Half Centuries',
      Actual: data.stats.fifties.actual,
      'Prime Extended': data.stats.fifties.hypothetical,
    },
    {
      name: 'Matches',
      Actual: data.stats.matches.actual,
      'Prime Extended': data.stats.matches.hypothetical,
    },
  ];

  return (
    <Card className="bg-gradient-to-br from-card to-background border-border/50 shadow-cricket">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-center">
          {data.format} Format Comparison
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="name" 
              className="text-sm"
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
            />
            <YAxis 
              className="text-sm"
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
              }}
            />
            <Legend />
            <Bar 
              dataKey="Actual" 
              fill="hsl(var(--muted-foreground))" 
              radius={[4, 4, 0, 0]}
              name="Actual Career"
            />
            <Bar 
              dataKey="Prime Extended" 
              fill="hsl(var(--cricket-green))" 
              radius={[4, 4, 0, 0]}
              name="Prime Extended"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};