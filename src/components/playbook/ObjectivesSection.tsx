import { Badge } from "@/components/ui/badge";
import { objectives } from "@/data/playbook-data";
import { Target, TrendingUp, Layers, Users, Briefcase, ChevronUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

const pillarIcons = {
  proactive: TrendingUp,
  unified: Layers,
  adaptive: Target,
};

export const ObjectivesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="objectives"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Goals & Key Results
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            2026 Objectives
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Customer-outcome focused objectives with measurable key results
          </p>
        </div>

        <div className="space-y-4">
          {objectives.map((objective, index) => {
            const Icon = pillarIcons[objective.linkedPillar as keyof typeof pillarIcons] || Target;
            const isOpen = openItems.includes(objective.id);

            return (
              <Collapsible
                key={objective.id}
                open={isOpen}
                onOpenChange={() => toggleItem(objective.id)}
              >
                <div
                  className="rounded-xl bg-muted/30 border border-border/50 overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Header */}
                  <CollapsibleTrigger className="w-full">
                    <div className="flex items-center justify-between p-6 hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center shrink-0">
                          <Target className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-left">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="text-primary font-semibold">
                              {objective.id}
                            </span>
                            <Badge
                              variant="outline"
                              className="bg-primary/10 text-primary border-primary/30 text-xs"
                            >
                              <Icon className="w-3 h-3 mr-1" />
                              {objective.linkedPillar.charAt(0).toUpperCase() +
                                objective.linkedPillar.slice(1)}
                            </Badge>
                          </div>
                          <h3 className="text-lg font-semibold text-foreground">
                            {objective.title}
                          </h3>
                        </div>
                      </div>
                      <ChevronUp
                        className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                          isOpen ? "" : "rotate-180"
                        }`}
                      />
                    </div>
                  </CollapsibleTrigger>

                  {/* Content */}
                  <CollapsibleContent>
                    <div className="px-6 pb-6 space-y-6">
                      {/* Customer Outcome & Business Value */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-muted/50 rounded-lg p-4 border border-border/30">
                          <div className="flex items-center gap-2 mb-3 text-primary">
                            <Users className="w-4 h-4" />
                            <span className="text-sm font-medium">Customer Outcome</span>
                          </div>
                          <p className="text-sm text-foreground leading-relaxed">
                            {objective.customerOutcome}
                          </p>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-4 border border-border/30">
                          <div className="flex items-center gap-2 mb-3 text-primary">
                            <Briefcase className="w-4 h-4" />
                            <span className="text-sm font-medium">Business Value</span>
                          </div>
                          <p className="text-sm text-foreground leading-relaxed">
                            {objective.businessValue}
                          </p>
                        </div>
                      </div>

                      {/* Key Results */}
                      <div>
                        <h4 className="text-sm text-muted-foreground mb-4">
                          Key Results
                        </h4>
                        <div className="space-y-3">
                          {objective.keyResults.map((kr) => (
                            <div
                              key={kr.id}
                              className="bg-muted/50 rounded-lg p-4 border border-border/30"
                            >
                              <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                  <span className="text-primary font-semibold text-sm">
                                    {kr.id}
                                  </span>
                                  <p className="text-foreground font-medium mt-1">
                                    {kr.title}
                                  </p>
                                  <p className="text-sm text-muted-foreground mt-1">
                                    Client ROI: {kr.roiMetric}
                                  </p>
                                </div>
                                <Badge
                                  variant="outline"
                                  className="bg-primary/10 text-primary border-primary/30 shrink-0"
                                >
                                  Target: {kr.metric}
                                </Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            );
          })}
        </div>
      </div>
    </section>
  );
};
