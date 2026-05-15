import { Card, CardContent } from "@/components/ui/card";
import { maturityLadder } from "@/data/playbook-data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TrendingUp } from "lucide-react";

export const MaturityLadderSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="maturity-ladder"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 sm:py-24 bg-muted/50 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="mb-10 max-w-3xl">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Customer Maturity Ladder · Axis: capability depth
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Meet Customers Where They Are, Pull Them Up
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{maturityLadder.intro}</p>
        </div>

        <div className="grid md:grid-cols-4 gap-3 mb-6">
          {maturityLadder.stages.map((s, i) => (
            <Card key={s.num} className="bg-card border-border/50 relative">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold text-primary font-mono">{s.num}</span>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Stage {i + 1}</div>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{s.label}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-xs text-muted-foreground italic max-w-3xl">{maturityLadder.note}</p>
      </div>
    </section>
  );
};
