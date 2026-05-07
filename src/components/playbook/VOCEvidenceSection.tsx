import { Card, CardContent } from "@/components/ui/card";
import { vocEvidence } from "@/data/playbook-data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MessageSquare, Quote } from "lucide-react";

export const VOCEvidenceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="voc-evidence"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 sm:py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="mb-10 max-w-3xl">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            VOC Validation
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Customer Evidence
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{vocEvidence.intro}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {vocEvidence.signals.map((s) => (
            <Card key={s.label} className="bg-card border-border/50">
              <CardContent className="p-4">
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">{s.label}</div>
                <div className="text-2xl font-bold text-primary">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.detail}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-4">
          {vocEvidence.customers.map((c) => (
            <Card key={c.name} className="bg-card border-border/50">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-foreground">{c.name}</h3>
                  <p className="text-sm text-primary">{c.contact}</p>
                  <p className="text-xs text-muted-foreground mt-1">{c.context}</p>
                </div>
                <ul className="space-y-2 mb-4">
                  {c.findings.map((f, i) => (
                    <li key={i} className="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-border/40">{f}</li>
                  ))}
                </ul>
                <div className="flex items-start gap-2 rounded-lg border border-primary/20 bg-primary/5 p-3">
                  <Quote className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm italic text-foreground/90">{c.quote}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
