import { Card, CardContent } from "@/components/ui/card";
import { regionalJourneys } from "@/data/playbook-data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Globe2,
  Building2,
  Briefcase,
  Activity,
  CheckCircle2,
  Circle,
  MinusCircle,
  ArrowDownToLine,
  Sparkles,
  GitBranch,
  Compass,
} from "lucide-react";

const journeyIconMap: Record<string, React.ElementType> = {
  europe: Globe2,
  "us-public": Building2,
  "us-private": Briefcase,
  idm: Activity,
};

const levelStyles: Record<
  string,
  { Icon: React.ElementType; label: string; chipClass: string; iconClass: string }
> = {
  core: {
    Icon: CheckCircle2,
    label: "Core",
    chipClass: "bg-primary/10 border-primary/30 text-primary",
    iconClass: "text-primary",
  },
  light: {
    Icon: Circle,
    label: "Light",
    chipClass: "bg-yellow-500/10 border-yellow-500/30 text-yellow-500",
    iconClass: "text-yellow-500",
  },
  optional: {
    Icon: Circle,
    label: "Optional",
    chipClass: "bg-muted border-border text-muted-foreground",
    iconClass: "text-muted-foreground",
  },
  none: {
    Icon: MinusCircle,
    label: "Out",
    chipClass: "bg-orange-500/10 border-orange-500/30 text-orange-400",
    iconClass: "text-orange-400/60",
  },
};

export const RegionalJourneyComparison = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { intro, stages, journeys, convergence, divergence, designPrinciple } =
    regionalJourneys;

  return (
    <section
      id="regional-journeys"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Regional Reality Check
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Regional Journey Comparison
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            {intro}
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Comparison matrix */}
          <Card className="bg-card border-border/50 overflow-hidden">
            <CardContent className="p-0">
              {/* Desktop table */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/50 bg-muted/30">
                      <th className="text-left p-4 font-semibold text-foreground w-44">
                        Journey Stage
                      </th>
                      {journeys.map((j) => {
                        const Icon = journeyIconMap[j.id] || Compass;
                        return (
                          <th
                            key={j.id}
                            className="text-left p-4 font-semibold text-foreground align-top"
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <Icon className="w-4 h-4 text-primary" />
                              <span>{j.name}</span>
                            </div>
                            <div className="text-xs font-normal text-muted-foreground">
                              {j.tagline}
                            </div>
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {stages.map((stage, i) => (
                      <tr
                        key={stage}
                        className={`border-b border-border/30 ${
                          i % 2 === 0 ? "bg-background" : "bg-muted/10"
                        }`}
                      >
                        <td className="p-4 font-medium text-foreground align-top">
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground tabular-nums">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span>{stage}</span>
                          </div>
                        </td>
                        {journeys.map((j) => {
                          const cell =
                            j.coverage[stage as keyof typeof j.coverage];
                          const style = levelStyles[cell.level];
                          const StyleIcon = style.Icon;
                          return (
                            <td key={j.id} className="p-4 align-top">
                              <div className="flex items-start gap-2">
                                <StyleIcon
                                  className={`w-4 h-4 shrink-0 mt-0.5 ${style.iconClass}`}
                                />
                                <div className="min-w-0">
                                  <span
                                    className={`inline-block text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border mb-1 ${style.chipClass}`}
                                  >
                                    {style.label}
                                  </span>
                                  <p className="text-xs text-muted-foreground leading-snug">
                                    {cell.note}
                                  </p>
                                </div>
                              </div>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile / tablet stacked view */}
              <div className="lg:hidden divide-y divide-border/50">
                {journeys.map((j) => {
                  const Icon = journeyIconMap[j.id] || Compass;
                  return (
                    <div key={j.id} className="p-5">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-4 h-4 text-primary" />
                        <h4 className="font-semibold text-foreground text-sm">
                          {j.name}
                        </h4>
                      </div>
                      <p className="text-xs text-muted-foreground mb-4">
                        {j.tagline}
                      </p>
                      <ul className="space-y-2">
                        {stages.map((stage) => {
                          const cell =
                            j.coverage[stage as keyof typeof j.coverage];
                          const style = levelStyles[cell.level];
                          const StyleIcon = style.Icon;
                          return (
                            <li key={stage} className="flex items-start gap-2">
                              <StyleIcon
                                className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${style.iconClass}`}
                              />
                              <div className="min-w-0">
                                <div className="flex items-center gap-2 mb-0.5">
                                  <span className="text-xs font-medium text-foreground">
                                    {stage}
                                  </span>
                                  <span
                                    className={`text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded-full border ${style.chipClass}`}
                                  >
                                    {style.label}
                                  </span>
                                </div>
                                <p className="text-[11px] text-muted-foreground leading-snug">
                                  {cell.note}
                                </p>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Selling point summary */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {journeys.map((j) => {
              const Icon = journeyIconMap[j.id] || Compass;
              return (
                <Card key={j.id} className="bg-card border-border/50">
                  <CardContent className="p-5">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">
                      {j.name}
                    </h4>
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-2">
                      Selling point
                    </p>
                    <p className="text-xs text-foreground mb-3 leading-snug">
                      {j.sellingPoint}
                    </p>
                    <p className="text-[11px] text-muted-foreground italic">
                      {j.revenue}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Convergence + Divergence */}
          <div className="grid lg:grid-cols-2 gap-4">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <ArrowDownToLine className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">
                    {convergence.title}
                  </h3>
                </div>
                <div className="inline-block text-xs uppercase tracking-wider px-2 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary mb-3">
                  {convergence.point}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {convergence.description}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <GitBranch className="w-5 h-5 text-orange-400" />
                  <h3 className="font-semibold text-foreground">
                    Where they diverge
                  </h3>
                </div>
                <ul className="space-y-3">
                  {divergence.map((d) => (
                    <li key={d.title} className="text-sm">
                      <span className="font-medium text-foreground">
                        {d.title}.
                      </span>{" "}
                      <span className="text-muted-foreground">{d.detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Design principle */}
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="p-6 text-center">
              <Sparkles className="w-5 h-5 text-primary mx-auto mb-3" />
              <p className="text-base sm:text-lg text-foreground italic max-w-3xl mx-auto">
                "{designPrinciple}"
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
