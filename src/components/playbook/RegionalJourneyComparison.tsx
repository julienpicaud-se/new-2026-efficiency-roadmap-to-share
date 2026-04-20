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
  { Icon: React.ElementType; label: string; dotClass: string; iconClass: string }
> = {
  core: {
    Icon: CheckCircle2,
    label: "Core",
    dotClass: "bg-primary",
    iconClass: "text-primary",
  },
  light: {
    Icon: Circle,
    label: "Light",
    dotClass: "bg-yellow-500",
    iconClass: "text-yellow-500",
  },
  optional: {
    Icon: Circle,
    label: "Optional",
    dotClass: "bg-muted-foreground/40",
    iconClass: "text-muted-foreground",
  },
  none: {
    Icon: MinusCircle,
    label: "Out",
    dotClass: "bg-orange-400/60",
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
      className={`py-16 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 sm:mb-3 block">
            Regional Reality Check
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-foreground">
            Regional Journey Comparison
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
            {intro}
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-6">
          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            {Object.entries(levelStyles).map(([key, s]) => (
              <div key={key} className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${s.dotClass}`} />
                <span>{s.label}</span>
              </div>
            ))}
          </div>

          {/* Comparison matrix */}
          <Card className="bg-card border-border/50 overflow-hidden">
            <CardContent className="p-0">
              {/* Desktop table */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/50 bg-muted/30">
                      <th className="text-left px-4 py-3 font-semibold text-foreground w-44">
                        Journey Stage
                      </th>
                      {journeys.map((j) => {
                        const Icon = journeyIconMap[j.id] || Compass;
                        return (
                          <th
                            key={j.id}
                            className="text-left px-4 py-3 font-semibold text-foreground align-top"
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
                        <td className="px-4 py-2.5 font-medium text-foreground align-top">
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground tabular-nums">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="text-xs">{stage}</span>
                          </div>
                        </td>
                        {journeys.map((j) => {
                          const cell =
                            j.coverage[stage as keyof typeof j.coverage];
                          const style = levelStyles[cell.level];
                          const StyleIcon = style.Icon;
                          return (
                            <td key={j.id} className="px-4 py-2.5 align-top">
                              <div className="flex items-start gap-2">
                                <StyleIcon
                                  className={`w-4 h-4 shrink-0 mt-0.5 ${style.iconClass}`}
                                />
                                <p className="text-xs text-muted-foreground leading-snug min-w-0">
                                  {cell.note}
                                </p>
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
                    <div key={j.id} className="p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-4 h-4 text-primary" />
                        <h4 className="font-semibold text-foreground text-sm">
                          {j.name}
                        </h4>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">
                        {j.tagline}
                      </p>
                      <ul className="space-y-1.5">
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
                                <span className="text-xs font-medium text-foreground block mb-0.5">
                                  {stage}
                                </span>
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

          {/* Selling point summary - compact */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {journeys.map((j) => {
              const Icon = journeyIconMap[j.id] || Compass;
              return (
                <Card key={j.id} className="bg-card border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground text-sm leading-tight">
                        {j.name}
                      </h4>
                    </div>
                    <p className="text-xs text-foreground mb-2 leading-snug">
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

          {/* Convergence + Divergence + Design Principle */}
          <div className="grid lg:grid-cols-2 gap-4">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <ArrowDownToLine className="w-4 h-4 text-primary" />
                  <h3 className="font-semibold text-foreground text-sm">
                    {convergence.title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 border border-primary/30 text-primary">
                    {convergence.point}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  {convergence.description}
                </p>
                <p className="text-xs text-foreground italic border-t border-primary/20 pt-3">
                  "{designPrinciple}"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <GitBranch className="w-4 h-4 text-orange-400" />
                  <h3 className="font-semibold text-foreground text-sm">
                    Where they diverge
                  </h3>
                </div>
                <ul className="space-y-2">
                  {divergence.map((d) => (
                    <li key={d.title} className="text-xs">
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
        </div>
      </div>
    </section>
  );
};
