import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { roiScorecard, aiScorecard } from "@/data/playbook-data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
  RadialBarChart,
  RadialBar,
  Legend,
  Tooltip,
  ComposedChart,
  Line,
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

// Transform ROI data for bar chart
const roiChartData = [
  { name: "FTE Reduction", value: 35, target: "30-40%", color: "hsl(var(--primary))" },
  { name: "Backlog Cleared", value: 80, target: "80,000+", color: "hsl(var(--chart-2))" },
  { name: "Cycle Time", value: 75, target: "75% faster", color: "hsl(var(--chart-3))" },
  { name: "Error Reduction", value: 50, target: "50% fewer", color: "hsl(var(--chart-4))" },
];

// Transform AI scorecard for radial chart
const aiRadialData = [
  { name: "Automation Rate", value: 90, fill: "hsl(var(--primary))" },
  { name: "Pseudo-Bill Accuracy", value: 95, fill: "hsl(var(--chart-2))" },
  { name: "Identity Resolution", value: 98, fill: "hsl(var(--chart-3))" },
];

// Economic Impact data for pie chart
const economicImpactData = [
  { name: "Backlog Reduction", value: 50, fill: "hsl(var(--primary))" },
  { name: "Touches per Bill", value: 40, fill: "hsl(var(--chart-2))" },
  { name: "Budget Cycle Cut", value: 75, fill: "hsl(var(--chart-3))" },
  { name: "Automation Target", value: 90, fill: "hsl(var(--chart-4))" },
];

// Before vs After comparison data
const beforeAfterData = [
  { 
    metric: "Budget Cycle", 
    before: 8, 
    after: 2, 
    unit: "weeks",
    improvement: "75%"
  },
  { 
    metric: "Invoice Backlog", 
    before: 160, 
    after: 80, 
    unit: "K issues",
    improvement: "50%"
  },
  { 
    metric: "Manual Touches", 
    before: 100, 
    after: 60, 
    unit: "% baseline",
    improvement: "40%"
  },
  { 
    metric: "Automation", 
    before: 20, 
    after: 90, 
    unit: "% coverage",
    improvement: "350%"
  },
];

const chartConfig = {
  value: {
    label: "Target",
  },
  before: {
    label: "Current State",
    color: "hsl(var(--muted-foreground))",
  },
  after: {
    label: "Target State",
    color: "hsl(var(--primary))",
  },
  fteReduction: {
    label: "FTE Reduction",
    color: "hsl(var(--primary))",
  },
  backlog: {
    label: "Backlog Cleared",
    color: "hsl(var(--chart-2))",
  },
  cycleTime: {
    label: "Cycle Time",
    color: "hsl(var(--chart-3))",
  },
  errorReduction: {
    label: "Error Reduction",
    color: "hsl(var(--chart-4))",
  },
};

export const ROIChartsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="roi-charts"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Data Visualization
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            ROI & Impact Analytics
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Interactive visualization of expected returns, automation targets, and economic impact metrics
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* ROI Targets Bar Chart */}
          <Card className="glass-card border-border/50">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">ROI Target Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={roiChartData} layout="vertical" margin={{ left: 20, right: 30 }}>
                    <XAxis type="number" domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
                    <YAxis 
                      type="category" 
                      dataKey="name" 
                      width={100}
                      tick={{ fontSize: 12 }}
                    />
                    <ChartTooltip 
                      content={<ChartTooltipContent />}
                      cursor={{ fill: 'hsl(var(--muted))' }}
                    />
                    <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                      {roiChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {roiChartData.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-muted-foreground">{item.name}:</span>
                    <span className="font-semibold text-foreground">{item.target}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Scorecard Radial Chart */}
          <Card className="glass-card border-border/50">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">AI Automation Targets</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart 
                    cx="50%" 
                    cy="50%" 
                    innerRadius="20%" 
                    outerRadius="90%" 
                    barSize={20} 
                    data={aiRadialData}
                    startAngle={90}
                    endAngle={-270}
                  >
                    <RadialBar
                      background
                      dataKey="value"
                      cornerRadius={10}
                    />
                    <Tooltip 
                      content={({ payload }) => {
                        if (payload && payload.length > 0) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-background border border-border rounded-lg p-3 shadow-lg">
                              <p className="font-semibold text-foreground">{data.name}</p>
                              <p className="text-primary text-lg font-bold">{data.value}%</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                  </RadialBarChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="mt-4 flex flex-wrap justify-center gap-4">
                {aiRadialData.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.fill }} />
                    <span className="text-muted-foreground">{item.name}:</span>
                    <span className="font-semibold text-foreground">{item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Before vs After Comparison Chart */}
        <Card className="glass-card border-border/50 mb-12">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-center">Transformation Impact: Before vs After</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                  data={beforeAfterData} 
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  barGap={8}
                >
                  <XAxis 
                    dataKey="metric" 
                    tick={{ fontSize: 12 }}
                    tickLine={false}
                  />
                  <YAxis 
                    tickFormatter={(v) => `${v}`}
                    tick={{ fontSize: 12 }}
                  />
                  <Tooltip 
                    content={({ payload, label }) => {
                      if (payload && payload.length > 0) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-background border border-border rounded-lg p-4 shadow-lg">
                            <p className="font-semibold text-foreground mb-2">{label}</p>
                            <div className="space-y-1">
                              <p className="text-muted-foreground text-sm">
                                Before: <span className="font-medium text-foreground">{data.before} {data.unit}</span>
                              </p>
                              <p className="text-primary text-sm">
                                After: <span className="font-medium">{data.after} {data.unit}</span>
                              </p>
                              <p className="text-emerald-500 text-sm font-semibold mt-2">
                                ↓ {data.improvement} improvement
                              </p>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar 
                    dataKey="before" 
                    fill="hsl(var(--muted-foreground))" 
                    radius={[4, 4, 0, 0]}
                    name="Current State"
                  />
                  <Bar 
                    dataKey="after" 
                    fill="hsl(var(--primary))" 
                    radius={[4, 4, 0, 0]}
                    name="Target State"
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="mt-6 flex justify-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-muted-foreground" />
                <span className="text-sm text-muted-foreground">Current State</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-primary" />
                <span className="text-sm text-muted-foreground">Target State</span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {beforeAfterData.map((item, i) => (
                <div key={i} className="bg-muted/50 rounded-lg p-4 text-center border border-border/50">
                  <p className="text-xs text-muted-foreground mb-1">{item.metric}</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-muted-foreground line-through">{item.before}</span>
                    <span className="text-primary font-bold">→ {item.after}</span>
                  </div>
                  <p className="text-xs text-emerald-500 font-medium mt-1">{item.improvement} better</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Economic Impact Pie Chart */}
        <Card className="glass-card border-border/50 max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-center">Economic Impact Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={economicImpactData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={3}
                    dataKey="value"
                    label={({ name, value }) => `${value}%`}
                    labelLine={false}
                  >
                    {economicImpactData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip 
                    content={({ payload }) => {
                      if (payload && payload.length > 0) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-background border border-border rounded-lg p-3 shadow-lg">
                            <p className="font-semibold text-foreground">{data.name}</p>
                            <p className="text-primary text-lg font-bold">{data.value}% target</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Legend 
                    verticalAlign="bottom"
                    height={36}
                    formatter={(value) => <span className="text-muted-foreground text-sm">{value}</span>}
                  />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Expected improvements within two quarters of MVP deployment
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};