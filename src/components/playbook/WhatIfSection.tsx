import { Card, CardContent } from "@/components/ui/card";
import { 
  Zap, 
  FileText, 
  Database, 
  MousePointer, 
  TrendingUp,
  Sparkles 
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const scenarios = [
  {
    icon: Zap,
    title: "Prioritize across the portfolio",
    description: "Walk into a customer meeting with a clear view of where to act first across sites, systems, and portfolios, grounded in IDM 2.0 data plus the context Consulting and Bureau already hold",
  },
  {
    icon: FileText,
    title: "Explain every KPI in context",
    description: "Move from static audit decks to explainable readouts where each KPI links back to the data, assumptions, and engineering context that produced it",
  },
  {
    icon: Database,
    title: "One connected spine for data and context",
    description: "Capture WAGES, asset telemetry, audit findings, and Bureau insights once on the RA+ spine and reuse them across recommendations, execution, and verification",
  },
  {
    icon: MousePointer,
    title: "Answer recurring customer questions inside the platform",
    description: "Resolve the recurring questions efficiency teams answer today (anomalies, baselines, what changed, what to do next) inside Sera, with experts pulled in when judgment is required",
  },
  {
    icon: TrendingUp,
    title: "Carry ECMs through their full lifecycle",
    description: "Structure ECMs as a lifecycle (detect, feasibility, design, constructability, implementation, verification) where the platform carries the data and engineering context from one stage to the next",
  },
];

export const WhatIfSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="what-if"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-muted/30 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
              The Vision · Powered by RA+
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
              What if you could, <span className="text-primary">tomorrow</span>...
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
              With IDM 2.0 as the interval-data and context spine inside RA+, Efficiency Transformation reshapes how efficiency teams work and how customers experience value
            </p>
          </div>

          {/* Scenarios Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {scenarios.map((scenario, index) => {
              const Icon = scenario.icon;
              return (
                <Card
                  key={index}
                  className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {scenario.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {scenario.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Conclusion Card */}
          <Card className="glass-card border-primary/30 glow-border">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">That is Efficiency Transformation</span>
              </div>
              <p className="text-lg text-foreground leading-relaxed max-w-2xl mx-auto">
                IDM 2.0 holds the trusted data and context. Consulting and Bureau enrich it. Sera connects it to customer workflows. The same data carries through from prioritization to validation, with engineering judgment always in the loop on complex calls.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
