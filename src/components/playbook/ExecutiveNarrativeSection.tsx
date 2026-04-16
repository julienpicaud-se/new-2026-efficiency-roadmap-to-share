import { Card, CardContent } from "@/components/ui/card";
import { executiveNarrative, timeline } from "@/data/playbook-data";
import { 
  FileText, 
  AlertCircle, 
  Target, 
  Lightbulb, 
  TrendingUp, 
  Rocket, 
  Shield, 
  CheckCircle2,
  Calendar,
  ArrowRight
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const ExecutiveNarrativeSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="executive-narrative"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-muted/30 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Steve's Ready Narrative
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Executive Summary
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive view of the transformation opportunity for executive stakeholders
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* What's Happening */}
          <Card className="border-border/50 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500/10 to-transparent p-1">
              <CardContent className="bg-card p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">What's Happening</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {executiveNarrative.whatsHappening}
                    </p>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* The True Problem */}
          <Card className="border-border/50 overflow-hidden">
            <div className="bg-gradient-to-r from-red-500/10 to-transparent p-1">
              <CardContent className="bg-card p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center shrink-0">
                    <AlertCircle className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">The True Problem</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {executiveNarrative.trueProblem}
                    </p>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Our North Star */}
          <Card className="border-primary/30 glow-border overflow-hidden">
            <div className="bg-gradient-to-r from-primary/20 to-transparent p-1">
              <CardContent className="bg-card p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold gradient-text mb-3">Our North Star</h3>
                    <p className="text-foreground leading-relaxed">
                      {executiveNarrative.northStar}
                    </p>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* A Pragmatic Way to Win */}
          <Card className="border-border/50 overflow-hidden">
            <div className="bg-gradient-to-r from-amber-500/10 to-transparent p-1">
              <CardContent className="bg-card p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center shrink-0">
                    <Lightbulb className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">A Pragmatic Way to Win</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {executiveNarrative.pragmaticWay}
                    </p>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Economic Impact */}
          <Card className="border-border/50 overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-500/10 to-transparent p-1">
              <CardContent className="bg-card p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Economic Impact</h3>
                    <p className="text-muted-foreground mb-4">Within two quarters of MVP, we expect to:</p>
                    <ul className="space-y-3">
                      {executiveNarrative.economicImpact.map((impact, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-foreground">{impact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Strategic Upside */}
          <Card className="border-border/50 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500/10 to-transparent p-1">
              <CardContent className="bg-card p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0">
                    <Rocket className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Strategic Upside</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {executiveNarrative.strategicUpside}
                    </p>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Risks & Mitigations */}
          <Card className="border-border/50">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Risks & Mitigations</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {executiveNarrative.risks.map((item, i) => (
                  <div key={i} className="bg-muted/50 rounded-lg p-4 border border-border/50">
                    <div className="flex items-start gap-2 mb-2">
                      <AlertCircle className="w-4 h-4 text-orange-400 shrink-0 mt-1" />
                      <span className="font-medium text-foreground text-sm">{item.risk}</span>
                    </div>
                    <div className="flex items-start gap-2 pl-6">
                      <ArrowRight className="w-3 h-3 text-emerald-400 shrink-0 mt-1" />
                      <span className="text-muted-foreground text-sm">{item.mitigation}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* What We Need Now */}
          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                What We Need Now
              </h3>
              <ul className="space-y-3">
                {executiveNarrative.needsNow.map((need, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm font-semibold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-foreground">{need}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Timeline */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Timeline
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(timeline).map(([key, phase], index) => (
                <Card 
                  key={key} 
                  className={`border-border/50 ${index === 0 ? 'ring-2 ring-primary/30' : ''}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`w-3 h-3 rounded-full ${
                        index === 0 ? 'bg-primary' : index === 1 ? 'bg-amber-400' : 'bg-muted-foreground'
                      }`} />
                      <h4 className="font-semibold text-foreground">{phase.title}</h4>
                    </div>
                    <ul className="space-y-2">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary/60 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
