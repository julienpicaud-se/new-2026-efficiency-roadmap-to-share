import { strategicPillars } from "@/data/playbook-data";
import { Layers, TrendingUp, Sparkles, Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const iconMap = {
  Layers: Layers,
  LineChart: TrendingUp,
  Sparkles: Sparkles,
};

export const StrategicPillars = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="strategic-pillars"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-muted/30 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Foundation
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Strategic Pillars
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Three interconnected pillars that define our platform strategy
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {strategicPillars.map((pillar, index) => {
            const Icon = iconMap[pillar.icon as keyof typeof iconMap] || Layers;
            return (
              <div
                key={pillar.id}
                className="flex flex-col bg-card rounded-xl border border-border/50 p-6 hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title & Tagline */}
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-primary font-medium mb-6">{pillar.tagline}</p>

                {/* Promise Quote */}
                <div className="bg-muted rounded-lg p-4 mb-6">
                  <p className="text-foreground italic text-sm leading-relaxed">
                    "{pillar.promise}"
                  </p>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  {pillar.description}
                </p>

                {/* What Lives Here */}
                <div className="mb-8">
                  <h4 className="font-semibold text-foreground mb-4">
                    What Lives Here:
                  </h4>
                  <ul className="space-y-3">
                    {pillar.whatLivesHere.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Divider */}
                <div className="border-t border-border/50 my-6" />

                {/* Success Metrics */}
                <div className="mt-auto">
                  <h4 className="font-semibold text-muted-foreground uppercase text-xs tracking-wider mb-4">
                    Success Metrics
                  </h4>
                  <div className="space-y-3">
                    {pillar.successMetrics.map((metric, i) => (
                      <div
                        key={i}
                        className="bg-muted/50 rounded-lg border-l-2 border-primary pl-4 pr-4 py-3"
                      >
                        <p className="text-primary text-sm leading-relaxed">{metric}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
