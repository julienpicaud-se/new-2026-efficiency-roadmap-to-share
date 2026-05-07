import { Card, CardContent } from "@/components/ui/card";
import { personas } from "@/data/playbook-data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Users, ArrowRight } from "lucide-react";

const rankStyles: Record<string, string> = {
  Primary: "bg-primary/15 text-primary border-primary/30",
  Secondary: "bg-secondary/30 text-foreground border-secondary/40",
  Tertiary: "bg-muted text-muted-foreground border-border/50",
  Inform: "bg-muted/50 text-muted-foreground border-border/40",
};

export const PersonasSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="personas"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 sm:py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="mb-10 max-w-3xl">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
            <Users className="w-4 h-4" />
            Personas
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Four Roles, One Design Sequence
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{personas.intro}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {personas.roles.map((r) => (
            <Card key={r.name} className="bg-card border-border/50 h-full">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg font-bold text-foreground">{r.name}</h3>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border ${rankStyles[r.rank] ?? rankStyles.Tertiary}`}>
                    {r.rank}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-3">{r.context}</p>
                <p className="text-sm text-foreground/90 leading-relaxed mb-4">{r.summary}</p>
                <ul className="space-y-1.5">
                  {r.outcomes.map((o, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <ArrowRight className="w-3 h-3 text-primary/70 shrink-0 mt-1" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-primary/30 bg-primary/5">
          <CardContent className="p-5">
            <p className="text-sm text-foreground leading-relaxed">
              <span className="font-semibold text-primary">Design sequence principle. </span>
              {personas.designPrinciple}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
