import { Card, CardContent } from "@/components/ui/card";
import { 
  Timer, 
  TrendingUp, 
  Clock, 
  MousePointer,
  DollarSign,
  CheckCircle2
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const successMetrics = [
  {
    icon: Timer,
    metric: "Faster Audits",
    description: "Audits completed faster with higher consistency",
    indicator: "Speed & Quality",
  },
  {
    icon: TrendingUp,
    metric: "Increased Upsell",
    description: "Increased upsell rate from early advisory to advanced audits",
    indicator: "Conversion",
  },
  {
    icon: Clock,
    metric: "Reduced Quote Time",
    description: "Reduced time to quote for efficiency engagements",
    indicator: "Efficiency",
  },
  {
    icon: MousePointer,
    metric: "Platform Adoption",
    description: "Measurable adoption of in-product efficiency recommendations",
    indicator: "Engagement",
  },
  {
    icon: DollarSign,
    metric: "Revenue Contribution",
    description: "Tangible contribution to RA+ recurring revenue",
    indicator: "Business Impact",
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
        <div className="max-w-5xl mx-auto">
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

          {/* Metrics Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {successMetrics.slice(0, 3).map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider mb-2 block">
                      {item.indicator}
                    </span>
                    <h3 className="font-bold text-lg text-foreground mb-2">
                      {item.metric}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Bottom Row - 2 cards centered */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {successMetrics.slice(3).map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider mb-2 block">
                      {item.indicator}
                    </span>
                    <h3 className="font-bold text-lg text-foreground mb-2">
                      {item.metric}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Summary Card */}
          <Card className="mt-12 glass-card border-primary/30 glow-border">
            <CardContent className="p-8 text-center">
              <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-4" />
              <p className="text-lg text-foreground leading-relaxed max-w-2xl mx-auto">
                These metrics directly tie to the three value pillars: 
                <span className="text-primary font-semibold"> productivity gains</span>, 
                <span className="text-primary font-semibold"> upsell engine</span>, and 
                <span className="text-primary font-semibold"> recurring RA+ revenue</span>.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
