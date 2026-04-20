import { Card, CardContent } from "@/components/ui/card";
import { efficiencyStrategicContext } from "@/data/playbook-data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  CalendarClock,
  AlertTriangle,
  ArrowRight,
  Users,
  Building2,
  Sparkles,
  Leaf,
  Zap,
  Scale,
} from "lucide-react";

export const StrategicContextSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { intro, raClassicSunset, customerArchetypes, ghgTailwind } =
    efficiencyStrategicContext;

  return (
    <section
      id="strategic-context"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Why Now, Why This Way
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Strategic Context
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            {intro}
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* RA Classic Sunset */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-orange-500/10 flex items-center justify-center">
                <CalendarClock className="w-4 h-4 text-orange-400" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="text-lg font-semibold text-foreground">
                    {raClassicSunset.title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border bg-orange-500/10 border-orange-500/30 text-orange-400">
                    {raClassicSunset.badge}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {raClassicSunset.timeframe}
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-5 max-w-3xl">
              {raClassicSunset.summary}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {raClassicSunset.implications.map((imp) => (
                <Card key={imp.label} className="bg-card border-border/50">
                  <CardContent className="p-4">
                    <div className="text-sm font-semibold text-foreground mb-1">
                      {imp.label}
                    </div>
                    <p className="text-xs text-muted-foreground leading-snug">
                      {imp.detail}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Two Customer Archetypes */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {customerArchetypes.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-6 max-w-3xl">
              {customerArchetypes.subtitle}
            </p>

            <div className="grid lg:grid-cols-2 gap-4 mb-4">
              {customerArchetypes.archetypes.map((a, i) => {
                const Icon = i === 0 ? Building2 : Sparkles;
                const accent =
                  i === 0
                    ? "bg-card border-border/50"
                    : "bg-primary/5 border-primary/20";
                return (
                  <Card key={a.name} className={accent}>
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-background/50 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-semibold text-foreground text-sm mb-0.5">
                            {a.name}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {a.tagline}
                          </p>
                        </div>
                      </div>

                      <div className="text-[10px] uppercase tracking-wider text-primary font-semibold mb-3">
                        {a.share}
                      </div>

                      <div className="mb-3">
                        <div className="text-[11px] uppercase tracking-wider text-muted-foreground mb-2">
                          What they want
                        </div>
                        <ul className="space-y-1.5">
                          {a.wants.map((w) => (
                            <li
                              key={w}
                              className="flex items-start gap-2 text-xs text-foreground"
                            >
                              <ArrowRight className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                              <span>{w}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="border-t border-border/40 pt-3 space-y-2">
                        <div className="flex items-start gap-2 text-xs">
                          <AlertTriangle className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">
                            <span className="font-medium text-foreground">
                              Risk.
                            </span>{" "}
                            {a.risk}
                          </span>
                        </div>
                        <div className="flex items-start gap-2 text-xs">
                          <Scale className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">
                            <span className="font-medium text-foreground">
                              Platform fit.
                            </span>{" "}
                            {a.fit}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-5">
                <p className="text-sm text-foreground italic">
                  "{customerArchetypes.tension}"
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Carbon Performance Tailwind */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Leaf className="w-4 h-4 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="text-lg font-semibold text-foreground">
                    {ghgTailwind.title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border bg-primary/10 border-primary/30 text-primary">
                    {ghgTailwind.badge}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-5 max-w-3xl">
              {ghgTailwind.summary}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
              {ghgTailwind.impacts.map((imp) => (
                <Card key={imp.label} className="bg-card border-border/50">
                  <CardContent className="p-4">
                    <Zap className="w-4 h-4 text-primary mb-2" />
                    <div className="text-sm font-semibold text-foreground mb-1">
                      {imp.label}
                    </div>
                    <p className="text-xs text-muted-foreground leading-snug">
                      {imp.detail}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-4 flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">
                  <span className="font-medium">So what.</span>{" "}
                  <span className="text-muted-foreground">
                    {ghgTailwind.soWhat}
                  </span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
