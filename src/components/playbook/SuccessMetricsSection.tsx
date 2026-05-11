import { Card, CardContent } from "@/components/ui/card";
import { 
  Timer, 
  TrendingUp, 
  Clock, 
  MousePointer,
  DollarSign,
  CheckCircle2,
  ArrowUpRight,
  Sparkles
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { seraKPIs } from "@/data/playbook-data";

const successMetrics = [
  {
    icon: Timer,
    metric: "Faster Audits",
    description: "Audits completed faster with higher consistency",
    indicator: "Speed & Quality",
    signal: "Delivery throughput",
  },
  {
    icon: TrendingUp,
    metric: "Increased Upsell",
    description: "Increased upsell rate from early advisory to advanced audits",
    indicator: "Conversion",
    signal: "Expert advisory pull",
  },
  {
    icon: Clock,
    metric: "Reduced Quote Time",
    description: "Reduced time to quote for efficiency engagements",
    indicator: "Efficiency",
    signal: "Faster qualification",
  },
  {
    icon: MousePointer,
    metric: "Platform Adoption",
    description: "Measurable adoption of in-product efficiency recommendations",
    indicator: "Engagement",
    signal: "RA+ usage depth",
  },
  {
    icon: DollarSign,
    metric: "Revenue Contribution",
    description: "Tangible contribution to RA+ recurring revenue",
    indicator: "Business Impact",
    signal: "Recurring value",
  },
];

export const SuccessMetricsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="success-metrics"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-muted/30 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
              Measuring Impact
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
              Success Looks Like
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
              Five key indicators that demonstrate Efficiency Transformation is delivering value
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_1.9fr] gap-6 lg:gap-8 items-stretch">
            <Card className="border-primary/30 bg-primary/5 overflow-hidden">
              <CardContent className="p-6 sm:p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 leading-tight">
                    The signal is simple: more qualified work, delivered with less friction.
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Success should show up in team productivity, stronger expert advisory pull, and recurring RA+ engagement without relying on one-off delivery artifacts.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3 border-t border-border/50 pt-6">
                  {[
                    ["01", "Productivity"],
                    ["02", "Upsell"],
                    ["03", "Revenue"],
                  ].map(([num, label]) => (
                    <div key={label}>
                      <div className="text-xl font-bold text-primary">{num}</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 gap-4">
            {successMetrics.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className={`bg-card border-border/50 hover:border-primary/50 transition-all duration-300 group ${index === 0 ? "sm:col-span-2" : ""}`}
                >
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider mb-2 block">
                      {item.indicator}
                    </span>
                    <h3 className="font-bold text-xl text-foreground mb-2">
                      {item.metric}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="rounded-md border border-border/50 bg-muted/30 px-3 py-2">
                      <span className="text-xs text-foreground font-medium">{item.signal}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
            </div>
          </div>

          {/* Summary Card */}
          <Card className="mt-8 glass-card border-primary/30 glow-border">
            <CardContent className="p-5 sm:p-6 text-center">
              <p className="text-base sm:text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
                These metrics directly tie to the three value pillars: 
                <span className="text-primary font-semibold"> productivity gains</span>, 
                <span className="text-primary font-semibold"> upsell engine</span>, and 
                <span className="text-primary font-semibold"> recurring RA+ revenue</span>.
              </p>
            </CardContent>
          </Card>

          {/* Sera-specific KPIs */}
          <div className="mt-12">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider">
                Sera Interface Signals
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-5 max-w-3xl">{seraKPIs.intro}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {seraKPIs.kpis.map((k) => (
                <Card key={k.label} className="bg-card border-border/50">
                  <CardContent className="p-4">
                    <h4 className="text-sm font-semibold text-foreground mb-1.5">{k.label}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{k.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
