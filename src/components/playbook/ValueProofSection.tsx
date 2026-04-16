import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { roiLevers, aiScorecard, valuePillars, roiScorecard } from "@/data/playbook-data";
import { 
  Clock, 
  TrendingDown, 
  BarChart3, 
  Shield, 
  Rocket, 
  PiggyBank, 
  Zap,
  CheckCircle2,
  Target
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const leverIcons: Record<string, React.ElementType> = {
  Clock: Clock,
  TrendingDown: TrendingDown,
  BarChart3: BarChart3,
  Shield: Shield,
};

const valueIcons: Record<string, React.ElementType> = {
  Rocket: Rocket,
  PiggyBank: PiggyBank,
  Shield: Shield,
  Zap: Zap,
};

export const ValueProofSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="value-proof"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-muted/30 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Measuring Success
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Value Proof & Governance
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Value delivery is governed through standardized ROI and AI scorecards, explicit linkage to client cost levers, and quarterly prioritization.
          </p>
        </div>

        {/* Value Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {valuePillars.map((pillar, index) => {
            const Icon = valueIcons[pillar.icon as keyof typeof valueIcons] || Rocket;
            return (
              <Card
                key={pillar.title}
                className="glass-card border-border/50 hover:border-primary/30 transition-all duration-300 text-center group hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground">{pillar.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* ROI Levers */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">ROI Levers</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {roiLevers.map((lever, index) => {
              const Icon = leverIcons[lever.icon as keyof typeof leverIcons] || Clock;
              return (
                <Card
                  key={lever.lever}
                  className="glass-card border-border/50 hover:border-primary/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{lever.lever}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{lever.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {lever.metrics.map((metric, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* ROI Scorecard */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">ROI Scorecard</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {roiScorecard.map((item, index) => (
              <Card
                key={item.metric}
                className="glass-card border-border/50 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary mb-2">{item.target}</div>
                  <h4 className="font-semibold mb-1">{item.metric}</h4>
                  <p className="text-xs text-muted-foreground">{item.definition}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* AI Scorecard */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">AI Scorecard</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {aiScorecard.map((item, index) => (
              <Card
                key={item.metric}
                className="glass-card border-border/50 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary mb-2">{item.target}</div>
                  <h4 className="font-semibold mb-1">{item.metric}</h4>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
