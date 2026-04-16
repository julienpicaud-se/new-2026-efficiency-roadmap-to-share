import { Card, CardContent } from "@/components/ui/card";
import { existingTools, marketConstraints } from "@/data/playbook-data";
import { 
  Download, 
  Calculator, 
  Settings, 
  Monitor, 
  FileSearch, 
  BarChart3,
  AlertTriangle,
  XCircle,
  Globe
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const iconMap: Record<string, React.ElementType> = {
  "IDM": Download,
  "ACT": Calculator,
  "CBMS": Settings,
  "RA Classic": Monitor,
  "IDP / Blair Agent": FileSearch,
  "Variance Check Agent": BarChart3,
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
            Current State
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Existing Tools & Agents
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Current internal tools are fragmented, reactive, and hard to integrate. 
            Agents are constrained by incomplete upstream data.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Existing Tools Grid */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <Settings className="w-5 h-5 text-primary" />
              Internal Tools
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

          {/* Market Constraints */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <Globe className="w-5 h-5 text-orange-400" />
              Known Market & Industry Constraints
            </h3>
            <Card className="bg-orange-500/5 border-orange-500/20">
              <CardContent className="p-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  {marketConstraints.map((constraint, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{constraint}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Insight */}
          <Card className="mt-8 border-border/50 bg-card">
            <CardContent className="p-6 text-center">
              <p className="text-lg text-foreground italic">
                "Once the data foundation is solved, <span className="text-primary font-semibold">90%+ of Managed Services can be automated.</span>"
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
