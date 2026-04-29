import { Card, CardContent } from "@/components/ui/card";
import { ecmIngestionEngine } from "@/data/playbook-data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  FileUp,
  ScanText,
  CheckCheck,
  Database,
  ArrowRight,
  Dices,
  Sparkles,
  Shield,
  Zap,
} from "lucide-react";

const flowIcons = [FileUp, ScanText, CheckCheck, Database];

export const ECMIngestionEngineSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { intro, prototype, monteCarlo, enablers, guardrails } =
    ecmIngestionEngine;

  return (
    <section
      id="ecm-ingestion-engine"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-muted/30 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Turning Latent IP Into Strategy
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Efficiency Knowledge Engine
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            {intro}
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">
          {/* PPT Extraction Prototype */}
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-1 text-center">
              <ScanText className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">
                {prototype.title}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground mb-5 max-w-2xl mx-auto text-center">
              {prototype.subtitle}
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 items-stretch">
              {prototype.flow.map((step, i) => {
                const Icon = flowIcons[i] || FileUp;
                return (
                  <Card
                    key={step.step}
                    className="bg-card border-border/50 relative"
                  >
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-[10px] tabular-nums text-muted-foreground font-mono">
                          {step.step}
                        </span>
                      </div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">
                        {step.name}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-snug">
                        {step.description}
                      </p>
                    </CardContent>
                    {i < prototype.flow.length - 1 && (
                      <ArrowRight className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/40 z-10" />
                    )}
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Monte Carlo */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Dices className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">
                {monteCarlo.title}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6 max-w-3xl">
              {monteCarlo.subtitle}
            </p>

            <div className="grid lg:grid-cols-3 gap-4">
              <Card className="bg-card border-border/50 lg:col-span-1">
                <CardContent className="p-5">
                  <h4 className="font-semibold text-foreground text-sm mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary" />
                    Inputs
                  </h4>
                  <ul className="space-y-2">
                    {monteCarlo.inputs.map((input, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <ArrowRight className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                        <span>{input}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20 lg:col-span-2">
                <CardContent className="p-5">
                  <h4 className="font-semibold text-foreground text-sm mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    Output
                  </h4>
                  <p className="text-sm text-foreground mb-4 leading-relaxed">
                    {monteCarlo.output}
                  </p>
                  <div className="border-t border-border/40 pt-3">
                    <p className="text-xs text-muted-foreground italic leading-relaxed">
                      <span className="font-medium not-italic text-foreground">
                        Why probabilistic?
                      </span>{" "}
                      {monteCarlo.why}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Enablers + Guardrails */}
          <div className="grid lg:grid-cols-2 gap-4">
            <Card className="bg-card border-border/50">
              <CardContent className="p-5">
                <h4 className="font-semibold text-foreground text-sm mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Enablers in motion
                </h4>
                <ul className="space-y-2">
                  {enablers.map((e, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <ArrowRight className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-orange-500/5 border-orange-500/20">
              <CardContent className="p-5">
                <h4 className="font-semibold text-foreground text-sm mb-3 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-orange-400" />
                  Guardrails
                </h4>
                <ul className="space-y-2">
                  {guardrails.map((g, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <ArrowRight className="w-3 h-3 text-orange-400 shrink-0 mt-0.5" />
                      <span>{g}</span>
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
