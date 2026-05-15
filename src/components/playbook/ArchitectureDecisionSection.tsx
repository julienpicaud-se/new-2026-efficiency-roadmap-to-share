import { Card, CardContent } from "@/components/ui/card";
import { architectureDecision } from "@/data/playbook-data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GitBranch, Check, X, AlertCircle } from "lucide-react";

export const ArchitectureDecisionSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="architecture-decision"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 sm:py-24 bg-muted/40 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="mb-10 max-w-3xl">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
            <GitBranch className="w-4 h-4" />
            Open Architectural Decision · Technical rationale
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Plan A vs Plan B: How We Land RA+ by Q4 2026
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Two viable technical paths for the Energy Efficiency build inside RA+. Compare on data model, governance, and shared services only. Sequencing, scope, and customer-facing value are covered in their dedicated sections.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-8">
          {architectureDecision.options.map((opt) => (
            <Card key={opt.id} className="bg-card border-border/60">
              <CardContent className="p-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest">{opt.label}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{opt.title}</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{opt.summary}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">Pros</h4>
                    <ul className="space-y-1.5">
                      {opt.pros.map((p, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-1" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-destructive mb-2">Trade-offs</h4>
                    <ul className="space-y-1.5">
                      {opt.cons.map((c, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <X className="w-3.5 h-3.5 text-destructive shrink-0 mt-1" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-primary/40 bg-primary/5">
          <CardContent className="p-5">
            <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-primary" />
              Decision criteria
            </h4>
            <ul className="grid md:grid-cols-2 gap-2 mb-4">
              {architectureDecision.decisionCriteria.map((c, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary">•</span> {c}
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground italic border-t border-border/40 pt-3">{architectureDecision.status}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
