import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Database, Leaf, Droplets, Trash2, Users, Briefcase } from "lucide-react";

const activityDataSources = [
  { icon: Leaf, label: "Energy usage", color: "text-primary" },
  { icon: Trash2, label: "Waste volumes", color: "text-orange-400" },
  { icon: Droplets, label: "Water consumption", color: "text-blue-400" },
  { icon: Briefcase, label: "Travel activity", color: "text-purple-400" },
  { icon: Users, label: "Workforce metrics", color: "text-pink-400" },
];

const carbonOutcomes = [
  "Scope 1, 2, 3 inventories",
  "Emissions tracking",
  "Carbon targets & scenarios",
];

const sustainabilityOutcomes = [
  "Waste & water KPIs",
  "HR & workforce metrics",
  "Supplier sustainability",
  "ESG reporting",
  "Operational efficiency",
];

export const ScopeExpansion = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="scope-expansion"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 md:py-24 lg:py-28 px-6 md:px-12 lg:px-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-center min-h-[70vh]">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary text-sm md:text-base font-semibold tracking-wider uppercase mb-4 block">
            Scope Expansion
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            From Carbon to Sustainability Performance
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            All activity data is modeled once and reused across carbon performance and sustainability performance. 
            No carbon-only data.
          </p>
        </div>

        {/* Activity Data Foundation */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-6 md:mb-8">
            <Database className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            <h3 className="text-xl md:text-2xl font-semibold text-foreground">Activity Data Foundation</h3>
          </div>
          
          <div className="glass-card rounded-2xl p-6 md:p-8 lg:p-10 glow-border">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
              {activityDataSources.map((source, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl bg-muted/50 flex items-center justify-center mb-3 group-hover:bg-muted transition-colors">
                    <source.icon className={`w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 ${source.color}`} />
                  </div>
                  <span className="text-sm md:text-base text-muted-foreground font-medium">{source.label}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-border/50">
              <p className="text-center text-sm md:text-base text-muted-foreground">
                <span className="text-primary font-medium">Unified governed data model</span> with lineage and evidence
              </p>
            </div>
          </div>
        </div>

        {/* Performance Outcomes Flow */}
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 items-stretch">
          {/* Carbon Performance */}
          <div className="glass-card rounded-2xl p-5 md:p-6 lg:p-8 border-l-4 border-l-primary">
            <div className="flex items-center gap-3 mb-4 md:mb-5">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Leaf className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-base md:text-lg">Carbon Performance</h4>
                <span className="text-xs md:text-sm text-muted-foreground">Launch focus</span>
              </div>
            </div>
            <ul className="space-y-2 md:space-y-3">
              {carbonOutcomes.map((outcome, index) => (
                <li key={index} className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary flex-shrink-0" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>

          {/* Arrow Connector */}
          <div className="hidden md:flex items-center justify-center px-2 lg:px-4">
            <div className="flex flex-col items-center gap-2">
              <ArrowRight className="w-8 h-8 lg:w-10 lg:h-10 text-primary animate-pulse" />
              <span className="text-xs md:text-sm text-muted-foreground font-medium">Expand</span>
            </div>
          </div>
          
          {/* Mobile Arrow */}
          <div className="flex md:hidden items-center justify-center py-3">
            <div className="flex items-center gap-2 rotate-90">
              <ArrowRight className="w-6 h-6 text-primary" />
            </div>
          </div>

          {/* Sustainability Performance */}
          <div className="glass-card rounded-2xl p-5 md:p-6 lg:p-8 border-l-4 border-l-secondary relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4 md:mb-5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <Database className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-base md:text-lg">Sustainability Performance</h4>
                  <span className="text-xs md:text-sm text-muted-foreground">Rapid expansion</span>
                </div>
              </div>
              <ul className="space-y-2 md:space-y-3">
                {sustainabilityOutcomes.map((outcome, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-secondary flex-shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Principle Callout */}
        <div className="mt-10 md:mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-primary font-semibold text-sm md:text-base">Principle:</span>
            <span className="text-foreground text-sm md:text-base">No carbon-only data. Start with carbon. Reuse everywhere. Extend to sustainability.</span>
          </div>
        </div>
      </div>
    </section>
  );
};