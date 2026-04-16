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
    title: "Show opportunities in minutes",
    description: "Walk into a first meeting and show site-relevant efficiency opportunities in RA+ within minutes",
  },
  {
    icon: FileText,
    title: "Replace PowerPoint with platform",
    description: "Replace audit PowerPoint decks with structured, visual, interactive deliverables in the platform",
  },
  {
    icon: Database,
    title: "Centralize context once",
    description: "Centralize all client context once and reuse it across audits, quotes, and follow-ups",
  },
  {
    icon: MousePointer,
    title: "One-click audit requests",
    description: "Let customers discover early efficiency insights on their own, then request deeper audits with one click",
  },
  {
    icon: TrendingUp,
    title: "Continuous improvement",
    description: "Turn every delivered audit into data that improves future recommendations",
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
              The Vision
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
              What if you could, <span className="text-primary">tomorrow</span>...
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
              Beyond ECM Library transforms how efficiency teams work and how customers experience value
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
                <span className="text-sm font-medium text-primary">That is Beyond ECM Library</span>
              </div>
              <p className="text-lg text-foreground leading-relaxed max-w-2xl mx-auto">
                From internal productivity to scalable revenue and in-product efficiency advisory:
                transforming expert knowledge into scalable product value.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
