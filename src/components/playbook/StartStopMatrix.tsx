import { startStopMatrix } from "@/data/playbook-data";
import { X, Check, ArrowRight, Layers, Database, Lightbulb, Bot, DollarSign, Send, Scale, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const themeIcons: Record<string, React.ElementType> = {
  "Platform Delivery": Layers,
  "Data Foundation": Database,
  "Product Strategy": Lightbulb,
  "AI Execution": Bot,
  "Cost Impact": DollarSign,
  "Go-to-Market": Send,
  "Governance": Scale,
  "Prioritization": Target,
};

export const StartStopMatrix = () => {
  const { ref, isVisible } = useScrollAnimation();

  const matrixItems = Object.values(startStopMatrix);

  return (
    <section
      id="start-stop"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Transformation
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Start / Stop Matrix
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            The behaviors and practices we're leaving behind, and the new approaches we're embracing.
          </p>
        </div>

        {/* Table Header */}
        <div className="hidden md:grid md:grid-cols-[300px_1fr_1fr] gap-0 mb-2">
          <div className="text-sm font-medium text-muted-foreground px-6 py-3">Theme</div>
          <div className="flex items-center gap-2 text-sm font-medium text-destructive px-6 py-3 border-l border-border/30">
            <X className="w-4 h-4" />
            Stop Doing
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-primary px-6 py-3 border-l border-border/30">
            <Check className="w-4 h-4" />
            Start Doing
          </div>
        </div>

        {/* Matrix Rows */}
        <div className="space-y-2">
          {matrixItems.map((item, index) => {
            const Icon = themeIcons[item.theme] || Layers;
            return (
              <div
                key={item.theme}
                className="group bg-card rounded-lg border border-border/50 overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:scale-[1.01]"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-[300px_1fr_1fr] gap-0 min-h-[80px]">
                  {/* Theme - with left accent border */}
                  <div className="flex items-center gap-3 px-6 py-5 border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-transparent group-hover:from-primary/10 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-semibold text-foreground">{item.theme}</span>
                  </div>

                  {/* Stop - with left border separator */}
                  <div className="flex items-center gap-3 px-6 py-5 border-l border-border/30">
                    <X className="w-4 h-4 text-destructive shrink-0" />
                    <p className="text-sm text-muted-foreground">{item.stop}</p>
                  </div>

                  {/* Start - with left border separator */}
                  <div className="flex items-center gap-3 px-6 py-5 border-l border-border/30">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <p className="text-sm text-foreground font-medium">{item.start}</p>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden border-l-4 border-l-primary">
                  <div className="p-5 space-y-4">
                    {/* Theme */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-semibold text-foreground">{item.theme}</span>
                    </div>

                    {/* Stop */}
                    <div className="flex items-start gap-2 pl-1 pt-2 border-t border-border/30">
                      <X className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">{item.stop}</p>
                    </div>

                    {/* Start */}
                    <div className="flex items-start gap-2 pl-1 pt-2 border-t border-border/30">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground font-medium">{item.start}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Old Ways → New Normal Pill */}
        <div className="flex justify-center mt-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border/50 hover:border-primary/30 transition-colors">
            <span className="text-sm font-medium text-destructive">Old Ways</span>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-primary">New Normal</span>
          </div>
        </div>
      </div>
    </section>
  );
};
