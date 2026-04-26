import { Card, CardContent } from "@/components/ui/card";
import {
  existingTools,
  marketConstraints,
  idmCapabilities,
  competitiveLandscape,
  marketTrends,
  serviceModelComparison,
  intelligenceFlywheel,
} from "@/data/playbook-data";
import {
  Download,
  Calculator,
  Settings,
  Monitor,
  FileSearch,
  BarChart3,
  AlertTriangle,
  XCircle,
  Globe,
  Database,
  Brain,
  Eye,
  FileText,
  Zap,
  TrendingUp,
  Shield,
  ArrowRight,
  Activity,
  Target,
  ArrowDownToLine,
  ArrowUpFromLine,
  Cable,
  Building,
  Clock,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const iconMap: Record<string, React.ElementType> = {
  IDM: Download,
  ACT: Calculator,
  CBMS: Settings,
  "RA Classic": Monitor,
  "IDP / Blair Agent": FileSearch,
  "Variance Check Agent": BarChart3,
};

const flywheelIconMap: Record<string, React.ElementType> = {
  Database,
  Brain,
  Settings,
  Eye,
  FileText,
  Zap,
};

export const ExistingToolsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="existing-tools"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-muted/30 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Current State & Vision
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Efficiency Strategy Landscape
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Where we are today, what the market demands, and the intelligence flywheel
            that will set us apart.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* IDM Capabilities */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary" />
              IDM: Step Zero or Step Last
            </h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
              {idmCapabilities.tagline}
            </p>

            {/* Positioning: Step Zero / Step Last */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {idmCapabilities.positioning.modes.map((mode, i) => {
                const Icon = i === 0 ? ArrowDownToLine : ArrowUpFromLine;
                return (
                  <Card
                    key={mode.label}
                    className="bg-primary/5 border-primary/20"
                  >
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <div className="text-[10px] uppercase tracking-wider text-primary font-semibold">
                            {mode.label}
                          </div>
                          <h4 className="font-semibold text-foreground text-sm">
                            {mode.role}
                          </h4>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                        {mode.description}
                      </p>
                      <div className="flex items-start gap-1.5 text-xs text-foreground border-t border-border/40 pt-3">
                        <Target className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span className="italic">{mode.outcome}</span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="bg-card border-border/50 mb-8">
              <CardContent className="p-4 flex items-start gap-3">
                <Layers className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground italic">
                  {idmCapabilities.positioning.principle}
                </p>
              </CardContent>
            </Card>

            {/* Stats row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {idmCapabilities.stats.map((stat, i) => (
                <Card key={i} className="bg-primary/5 border-primary/20">
                  <CardContent className="p-5 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-foreground mb-0.5">
                      {stat.label}
                    </div>
                    <div className="text-xs text-muted-foreground">{stat.detail}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Capability categories */}
            <div className="grid md:grid-cols-3 gap-4">
              {idmCapabilities.categories.map((cat, i) => (
                <Card key={i} className="bg-card border-border/50">
                  <CardContent className="p-5">
                    <h4 className="font-semibold text-foreground mb-3 text-sm">
                      {cat.name}
                    </h4>
                    <ul className="space-y-2">
                      {cat.capabilities.map((cap, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <ArrowRight className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* BMS Integration: Bypass Submeter Install */}
            <div className="mt-10">
              <div className="flex items-center gap-2 mb-2">
                <Cable className="w-5 h-5 text-primary" />
                <h4 className="text-base font-semibold text-foreground">
                  {idmCapabilities.bmsBypass.title}
                </h4>
              </div>
              <p className="text-sm text-muted-foreground mb-5 max-w-3xl">
                {idmCapabilities.bmsBypass.subtitle}
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                {idmCapabilities.bmsBypass.benefits.map((b, i) => {
                  const icons = [Building, Clock, Target, Cable];
                  const Icon = icons[i] || Cable;
                  return (
                    <Card key={i} className="bg-card border-border/50">
                      <CardContent className="p-4">
                        <Icon className="w-4 h-4 text-primary mb-2" />
                        <div className="text-sm font-semibold text-foreground mb-1">
                          {b.label}
                        </div>
                        <p className="text-xs text-muted-foreground leading-snug">
                          {b.detail}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <Card className="bg-orange-500/5 border-orange-500/20">
                <CardContent className="p-4 flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">Fallback:</span>{" "}
                    {idmCapabilities.bmsBypass.fallback}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Internal Tools */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <Settings className="w-5 h-5 text-primary" />
              Internal Tools & Agents
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {existingTools.map((tool, index) => {
                const Icon = iconMap[tool.name] || Settings;
                return (
                  <Card
                    key={index}
                    className="bg-card border-border/50 hover:border-border transition-all duration-300"
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground mb-1 text-sm">
                            {tool.name}
                          </h4>
                          <p className="text-xs text-muted-foreground mb-2">
                            {tool.description}
                          </p>
                          <div className="flex items-start gap-1.5 text-xs text-orange-400">
                            <XCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                            <span>{tool.limitation}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Competitive Landscape */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
              <Target className="w-5 h-5 text-orange-400" />
              Competitive Landscape
            </h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
              Segment-focused leaders are investing in AI workflows and acquisitions to deepen their action layer.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {competitiveLandscape.map((comp, i) => (
                <Card key={i} className="bg-card border-border/50">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground text-sm">
                        {comp.name}
                      </h4>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                        {comp.scope}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      {comp.description}
                    </p>
                    <div className="flex items-start gap-1.5 text-xs text-orange-400">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>{comp.threat}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Market Trends */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Market Trends & Signals
            </h3>
            <Card className="bg-card border-border/50">
              <CardContent className="p-6">
                <div className="grid sm:grid-cols-2 gap-3">
                  {marketTrends.map((trend, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{trend}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              {serviceModelComparison.map((model) => (
                <Card key={model.model} className="bg-card border-border/50">
                  <CardContent className="p-6">
                    <div className="mb-5">
                      <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                        {model.fullName}
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-2">
                        {model.model}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {model.description}
                      </p>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <h5 className="text-sm font-semibold text-foreground mb-2">
                          Typical outcomes
                        </h5>
                        <ul className="space-y-2">
                          {model.typicalOutcomes.map((outcome) => (
                            <li key={outcome} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-sm font-semibold text-foreground mb-2">
                          Data needs
                        </h5>
                        <ul className="space-y-2">
                          {model.dataNeeds.map((need) => (
                            <li key={need} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Database className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span>{need}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                        <h5 className="text-sm font-semibold text-foreground mb-1">
                          Verification level
                        </h5>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {model.verificationLevel}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Persistent Intelligence Flywheel */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              {intelligenceFlywheel.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
              {intelligenceFlywheel.subtitle}
            </p>

            <Card className="bg-card border-border/50 mb-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Database className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-base font-semibold text-foreground mb-2">
                      {intelligenceFlywheel.veeExplainer.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {intelligenceFlywheel.veeExplainer.description}
                    </p>
                    <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-5">
                      <div>
                        <h5 className="text-sm font-semibold text-foreground mb-2">
                          Used when
                        </h5>
                        <ul className="space-y-2">
                          {intelligenceFlywheel.veeExplainer.usedWhen.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                        <h5 className="text-sm font-semibold text-foreground mb-1">
                          Outcome
                        </h5>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {intelligenceFlywheel.veeExplainer.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Flywheel stages */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
              {intelligenceFlywheel.stages.map((stage, i) => {
                const Icon = flywheelIconMap[stage.icon] || Settings;
                return (
                  <Card key={i} className="bg-primary/5 border-primary/20 relative">
                    <CardContent className="p-4 text-center">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-xs font-semibold text-foreground mb-1">
                        {stage.name}
                      </div>
                      <div className="text-[10px] text-muted-foreground leading-tight">
                        {stage.description}
                      </div>
                    </CardContent>
                    {i < intelligenceFlywheel.stages.length - 1 && (
                      <ArrowRight className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/40 z-10" />
                    )}
                  </Card>
                );
              })}
            </div>

            {/* Differentiators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {intelligenceFlywheel.differentiators.map((diff, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center p-4 rounded-lg bg-card border border-border/50 text-center"
                >
                  <span className="text-xs text-muted-foreground mb-1">
                    {diff.label}
                  </span>
                  <span
                    className={`text-sm font-bold ${
                      diff.status === "Differentiator"
                        ? "text-primary"
                        : diff.status === "Essential"
                        ? "text-orange-400"
                        : diff.status === "Expectation"
                        ? "text-yellow-500"
                        : "text-muted-foreground"
                    }`}
                  >
                    {diff.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Key Insight */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6 text-center">
                <p className="text-base sm:text-lg text-foreground italic">
                  "{intelligenceFlywheel.keyInsight}"
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Market Constraints */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-orange-400" />
              Known Market & Industry Constraints
            </h3>
            <Card className="bg-orange-500/5 border-orange-500/20">
              <CardContent className="p-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  {marketConstraints.map((constraint, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {constraint}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
