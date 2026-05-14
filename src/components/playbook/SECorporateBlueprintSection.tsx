import { Card, CardContent } from "@/components/ui/card";
import { seCorporateBlueprint } from "@/data/playbook-data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Building2, Award } from "lucide-react";

export const SECorporateBlueprintSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="se-corporate-blueprint"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 sm:py-24 bg-muted/20 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="mb-10 max-w-3xl">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
            <Building2 className="w-4 h-4" />
            RA Classic IDM Client
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">{seCorporateBlueprint.title}</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {seCorporateBlueprint.scale.map((s) => (
            <Card key={s.label} className="bg-card border-border/50">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-primary">{s.value}</div>
                <div className="text-xs font-semibold text-foreground mt-1">{s.label}</div>
                <div className="text-[11px] text-muted-foreground mt-1 leading-snug">{s.detail}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-primary/30 bg-primary/5 mb-8">
          <CardContent className="p-5 flex items-start gap-3">
            <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-foreground leading-relaxed">{seCorporateBlueprint.trainingSignal}</p>
          </CardContent>
        </Card>

      </div>
    </section>
  );
};
