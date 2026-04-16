import { Card, CardContent } from "@/components/ui/card";
import { strategicContext, northStarMetrics } from "@/data/playbook-data";
import { Clock, Calendar, BarChart3 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const iconMap = {
  "Time to Baseline": Clock,
  "Time to Plan": Calendar,
  "Time to Governance View": BarChart3,
};

export const ExecutiveSummary = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="executive-summary"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
              Overview
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
              Strategic Context
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
              {strategicContext.summary}
            </p>
          </div>

          {/* North Star Metrics */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {northStarMetrics.map((item, index) => {
              const Icon = iconMap[item.metric as keyof typeof iconMap] || Clock;
              return (
                <Card
                  key={index}
                  className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {item.target}
                    </div>
                    <h3 className="font-semibold mb-2">{item.metric}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* North Star Statement */}
          <Card className="glass-card border-primary/30 glow-border">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4 gradient-text">
                Our North Star
              </h3>
              <p className="text-lg text-foreground leading-relaxed">
                {strategicContext.northStar}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
