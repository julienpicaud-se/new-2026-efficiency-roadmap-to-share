import { Card, CardContent } from "@/components/ui/card";
import { quarterlyRoadmap } from "@/data/playbook-data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Calendar, Check, Target, Zap } from "lucide-react";

const quarterColors: Record<string, string> = {
  amber: "border-amber-500/30 bg-amber-500/10 text-amber-400",
  emerald: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
  blue: "border-blue-500/30 bg-blue-500/10 text-blue-400",
  violet: "border-violet-500/30 bg-violet-500/10 text-violet-400",
};

export const DeliveryRoadmapSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="delivery-roadmap"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 sm:py-24 bg-background section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="mb-10 sm:mb-14 max-w-3xl">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Quarterly Plan
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            2026 Delivery Roadmap
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            The visible delivery path for ECM and IDM foundations: assess what IDM should bring into RA+, launch the initial ECM library in late Q3, then ship the first Energy Efficiency MVP in Q4.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
          {quarterlyRoadmap.map((q) => {
            const colorClass = quarterColors[q.color] || quarterColors.amber;

            return (
              <Card key={q.quarter} className="bg-card border-border/50 overflow-hidden h-full">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="px-5 py-4 border-b border-border/30">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${colorClass} inline-block mb-3`}>
                      {q.quarter}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-foreground leading-tight">
                      {q.theme}
                    </h3>
                  </div>

                  <div className="p-5 space-y-5 flex-1">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-primary" />
                        What we deliver
                      </h4>
                      <ul className="space-y-2.5">
                        {q.deliverables.map((deliverable, index) => (
                          <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                            <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-lg border border-border/30 bg-muted/20 p-4">
                      <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Target className="w-4 h-4 text-primary" />
                        Team impact
                      </h4>
                      <ul className="space-y-2.5">
                        {q.teamImpact.map((impact, index) => (
                          <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                            <ArrowRight className="w-3 h-3 text-primary/70 shrink-0 mt-0.5" />
                            <span>{impact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};