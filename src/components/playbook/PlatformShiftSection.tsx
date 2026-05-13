import { Card, CardContent } from "@/components/ui/card";
import { platformShift } from "@/data/playbook-data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Layers, Network, Check, X } from "lucide-react";

export const PlatformShiftSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="platform-shift"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 sm:py-24 bg-muted/20 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="mb-12 max-w-3xl">
            <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              Efficiency Transformation
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Energy Efficiency in RA+
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {platformShift.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-8">
          <Card className="border-destructive/30 bg-destructive/5">
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-foreground">{platformShift.classic.title}</h3>
                <p className="text-xs text-destructive uppercase tracking-wider font-semibold mt-1">{platformShift.classic.tagline}</p>
              </div>
              <ul className="space-y-2.5">
                {platformShift.classic.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <X className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/40 bg-primary/5">
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-foreground">{platformShift.raPlus.title}</h3>
                <p className="text-xs text-primary uppercase tracking-wider font-semibold mt-1">{platformShift.raPlus.tagline}</p>
              </div>
              <ul className="space-y-2.5">
                {platformShift.raPlus.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="border-border/60 bg-card mb-10">
          <CardContent className="p-5 text-center">
            <p className="text-sm sm:text-base text-foreground italic">{platformShift.thesis}</p>
          </CardContent>
        </Card>

        <div className="mt-12">
          <div className="mb-6 flex items-center gap-3">
            <Network className="w-5 h-5 text-primary" />
            <div>
              <h3 className="text-xl font-bold text-foreground">{platformShift.bureauAnchor.title}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">{platformShift.bureauAnchor.subtitle}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {platformShift.bureauAnchor.lines.map((l) => (
              <Card key={l.name} className="bg-card border-border/50">
                <CardContent className="p-5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-primary">{l.layer}</span>
                  <h4 className="mt-1 font-semibold text-foreground">{l.name}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{l.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-4xl">{platformShift.bureauAnchor.soWhat}</p>
        </div>
      </div>
    </section>
  );
};
