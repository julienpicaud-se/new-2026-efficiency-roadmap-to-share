import { Card, CardContent } from "@/components/ui/card";
import { appendixPillars, supportingScorecard, roadmapSummary, quarterlyRoadmap, capabilityMatrix, phasedRoadmap } from "@/data/playbook-data";
import { Layers, TrendingUp, Sparkles, Target, CheckCircle2, Calendar, Check, Zap, ArrowRight, X, Minus } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const pillarIcons: Record<string, React.ElementType> = {
  "Productivity Gains": Layers,
  "Upsell Engine": TrendingUp,
  "Recurring RA+ Revenue": Sparkles,
  Layers: Layers,
  TrendingUp: TrendingUp,
  Sparkles: Sparkles,
};

const quarterColors: Record<string, string> = {
  amber: "border-amber-500/30 bg-amber-500/10 text-amber-400",
  emerald: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
  blue: "border-blue-500/30 bg-blue-500/10 text-blue-400",
  violet: "border-violet-500/30 bg-violet-500/10 text-violet-400",
};

const phaseColors: Record<string, string> = {
  amber: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  emerald: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  primary: "bg-primary/20 text-primary border-primary/30",
  violet: "bg-violet-500/20 text-violet-400 border-violet-500/30",
  "muted-foreground": "bg-muted text-muted-foreground border-border/50",
};

const StatusIcon = ({ status }: { status: string }) => {
  if (status === "done") return <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />;
  if (status === "partial") return <Minus className="w-4 h-4 text-muted-foreground shrink-0" />;
  return <X className="w-4 h-4 text-destructive/60 shrink-0" />;
};

export const AppendixSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="appendix"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-muted/30 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Reference Materials
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            Beyond ECM Library Details
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mt-4">
            Deep dive into phased delivery, capability evolution, quarterly plans, and supporting metrics.
          </p>
        </div>

        {/* ============ Phased Roadmap ============ */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 block">
              Delivery Phases
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
              Phased Roadmap
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
              From foundational research to a stand-alone efficiency product, each phase builds on the last.
            </p>
          </div>

          <div className="space-y-6">
            {phasedRoadmap.map((phase) => (
              <div key={phase.phase} className="bg-card rounded-xl border border-border/50 overflow-hidden">
                <div className={`px-6 py-3 border-b border-border/30 flex items-center gap-3`}>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${phaseColors[phase.color] || phaseColors.primary}`}>
                    {phase.phase}
                  </span>
                  <span className="text-sm text-muted-foreground">{phase.items.length} workstream{phase.items.length > 1 ? "s" : ""}</span>
                </div>
                <div className="p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {phase.items.map((item, i) => (
                    <div key={i} className="bg-muted/30 rounded-lg border border-border/30 p-4">
                      <h4 className="font-semibold text-foreground text-sm mb-3">{item.title}</h4>
                      <ul className="space-y-1.5">
                        {item.details.map((detail, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <span className="w-1 h-1 rounded-full bg-primary shrink-0 mt-1.5" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="w-2 h-2 rounded-full bg-primary/50" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* ============ Capability Matrix ============ */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 block">
              Capability Evolution
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
              Opportunity × Phase Matrix
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
              How each capability evolves across delivery phases, from foundational database work to the full EE product.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left p-3 text-muted-foreground font-semibold w-[200px]">#</th>
                  <th className="text-left p-3 text-muted-foreground font-semibold w-[220px]">Opportunity / Problem</th>
                  {capabilityMatrix.phases.map((phase) => (
                    <th key={phase} className="text-left p-3 text-muted-foreground font-semibold text-xs">{phase}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {capabilityMatrix.capabilities.map((cap) => (
                  <tr key={cap.id} className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                    <td className="p-3 text-muted-foreground text-xs font-mono">{cap.id}</td>
                    <td className="p-3 text-foreground text-xs font-medium">{cap.opportunity}</td>
                    {cap.statuses.map((s, i) => (
                      <td key={i} className="p-3">
                        <div className="flex items-start gap-1.5">
                          <StatusIcon status={s.status} />
                          {s.note && <span className="text-xs text-muted-foreground leading-tight">{s.note}</span>}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="lg:hidden space-y-4">
            <Accordion type="single" collapsible className="space-y-3">
              {capabilityMatrix.capabilities.map((cap) => (
                <AccordionItem
                  key={cap.id}
                  value={String(cap.id)}
                  className="bg-card rounded-lg border border-border/50 overflow-hidden"
                >
                  <AccordionTrigger className="px-4 py-3 hover:no-underline text-left">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-muted-foreground w-6">{cap.id}</span>
                      <span className="text-sm font-medium text-foreground">{cap.opportunity}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <div className="space-y-2 mt-2">
                      {capabilityMatrix.phases.map((phase, i) => (
                        <div key={phase} className="flex items-start gap-2 bg-muted/30 rounded-lg p-2.5">
                          <StatusIcon status={cap.statuses[i].status} />
                          <div className="flex-1 min-w-0">
                            <span className="text-xs font-semibold text-muted-foreground block mb-0.5">{phase}</span>
                            {cap.statuses[i].note && (
                              <span className="text-xs text-foreground">{cap.statuses[i].note}</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="w-2 h-2 rounded-full bg-primary/50" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* ============ Quarterly Roadmap ============ */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 block">
              Quarterly Plan
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
              2026 Delivery Roadmap
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
              What we deliver each quarter and what it means for efficiency teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {quarterlyRoadmap.map((q) => {
              const colorClass = quarterColors[q.color] || quarterColors.amber;
              return (
                <div
                  key={q.quarter}
                  className="bg-card rounded-xl border border-border/50 overflow-hidden"
                >
                  {/* Quarter Header */}
                  <div className="px-6 py-4 border-b border-border/30">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${colorClass} inline-block mb-2`}>
                      {q.quarter}
                    </span>
                    <h4 className="text-lg font-bold text-foreground">{q.theme}</h4>
                  </div>

                  <div className="p-6 space-y-6">
                    {/* Deliverables */}
                    <div>
                      <h5 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-primary" />
                        What we deliver
                      </h5>
                      <ul className="space-y-2">
                        {q.deliverables.map((d, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Team Impact */}
                    <div className="bg-muted/30 rounded-lg border border-border/30 p-4">
                      <h5 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Target className="w-4 h-4 text-primary" />
                        What this means for efficiency teams
                      </h5>
                      <ul className="space-y-2">
                        {q.teamImpact.map((impact, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <ArrowRight className="w-3 h-3 text-primary/70 shrink-0 mt-0.5" />
                            <span>{impact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="w-2 h-2 rounded-full bg-primary/50" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* ============ Value Pillar Deep Dive ============ */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            Value Pillar Deep Dive
          </h3>
          <Accordion type="single" collapsible className="space-y-4">
            {appendixPillars.map((pillar) => {
              const Icon = pillarIcons[pillar.pillar] || Layers;
              return (
                <AccordionItem
                  key={pillar.pillar}
                  value={pillar.pillar}
                  className="glass-card border border-border/50 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-semibold text-lg">{pillar.pillar}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="grid md:grid-cols-2 gap-6 mt-4">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Target className="w-4 h-4 text-primary" />
                          Focus Areas
                        </h4>
                        <ul className="space-y-2">
                          {pillar.focus.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-primary" />
                          Expected Outcomes
                        </h4>
                        <ul className="space-y-2">
                          {pillar.outcomes.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Key Themes</h4>
                        <div className="flex flex-wrap gap-2">
                          {pillar.themes.map((theme, i) => (
                            <span
                              key={i}
                              className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                            >
                              {theme}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Value Proof Metrics</h4>
                        <ul className="space-y-2">
                          {pillar.valueProof.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="w-2 h-2 rounded-full bg-primary/50" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* ============ Supporting Scorecard ============ */}
        <div>
          <div className="text-center mb-10">
            <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
              Tracking Progress
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Supporting Scorecard
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Key metrics that measure our progress toward the Beyond ECM Library vision.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {supportingScorecard.map((item, index) => (
              <Card
                key={item.metric}
                className="glass-card border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4">
                  <h4 className="font-semibold text-primary mb-2">{item.metric}</h4>
                  <p className="text-sm text-muted-foreground">{item.definition}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
