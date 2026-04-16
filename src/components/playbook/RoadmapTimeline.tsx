import { roadmapBets } from "@/data/playbook-data";
import { Layers, TrendingUp, Sparkles, ArrowRight, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const pillarIcons = {
  unified: Layers,
  proactive: TrendingUp,
  adaptive: Sparkles,
};

const timeframes = [
  { key: "now", label: "Now", date: "Q1-Q2 2026", active: true },
  { key: "next", label: "Next", date: "Q3-Q4 2026", active: true },
  { key: "later", label: "Later", date: "2027+", active: false },
];

const filterOptions = [
  { key: "all", label: "All Pillars", icon: null },
  { key: "unified", label: "Unified", icon: Layers },
  { key: "proactive", label: "Proactive", icon: TrendingUp },
  { key: "adaptive", label: "Adaptive", icon: Sparkles },
];

export const RoadmapTimeline = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState("all");

  const filterBets = (bets: typeof roadmapBets.now) => {
    if (activeFilter === "all") return bets;
    return bets.filter((bet) => bet.pillar === activeFilter);
  };

  return (
    <section
      id="roadmap"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 sm:py-24 bg-muted/30 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Delivery Horizons
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Roadmap Timeline
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
            Our strategic bets organized by delivery horizon. Each initiative is linked to a strategic pillar.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12 px-2">
          {filterOptions.map((option) => {
            const Icon = option.icon;
            const isActive = activeFilter === option.key;
            return (
              <button
                key={option.key}
                onClick={() => setActiveFilter(option.key)}
                className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground border border-border/50 hover:bg-muted hover:text-foreground"
                }`}
              >
                {Icon && <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                {option.label}
              </button>
            );
          })}
        </div>

        {/* Timeline - Horizontal scroll on mobile, grid on desktop */}
        <div className="lg:hidden overflow-x-auto -mx-4 px-4 pb-4 scrollbar-hide">
          <div className="flex gap-4 min-w-max">
            {timeframes.map((timeframe, tfIndex) => {
              const bets = filterBets(
                roadmapBets[timeframe.key as keyof typeof roadmapBets]
              );
              return (
                <div key={timeframe.key} className="w-[280px] sm:w-[320px] flex-shrink-0">
                  {/* Timeline Header */}
                  <div className="flex items-start gap-2.5 mb-4">
                    <div
                      className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 ${
                        timeframe.active ? "bg-primary" : "bg-muted-foreground/50"
                      }`}
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-foreground">{timeframe.label}</h3>
                      <div
                        className={`h-0.5 w-full mt-1.5 ${
                          timeframe.active ? "bg-primary" : "bg-muted-foreground/30"
                        }`}
                      />
                      <div className="flex items-center gap-1.5 mt-1.5 text-muted-foreground text-xs">
                        <Calendar className="w-3 h-3" />
                        <span>{timeframe.date}</span>
                      </div>
                    </div>
                  </div>
                  {/* Cards */}
                  <div className="space-y-2.5">
                    {bets.map((bet, index) => {
                      const Icon = pillarIcons[bet.pillar as keyof typeof pillarIcons] || Layers;
                      return (
                        <div
                          key={index}
                          className="bg-card rounded-lg p-3 border border-border/50"
                        >
                          <div className="flex items-start gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                              <Icon className="w-4 h-4 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-foreground text-xs leading-snug mb-1.5">
                                {bet.title}
                              </h4>
                              <div className="flex items-start gap-1 text-muted-foreground">
                                <ArrowRight className="w-2.5 h-2.5 mt-0.5 shrink-0 text-primary/70" />
                                <span className="text-[10px] leading-relaxed">{bet.outcome}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    {bets.length === 0 && (
                      <div className="text-center py-6 text-muted-foreground text-xs">
                        No items for this filter
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:block">
          {/* Timeline Header */}
          <div className="grid lg:grid-cols-3 gap-8 mb-6">
            {timeframes.map((tf) => (
              <div key={tf.key} className="flex items-start gap-3">
                <div
                  className={`w-3 h-3 rounded-full mt-1.5 shrink-0 ${
                    tf.active ? "bg-primary" : "bg-muted-foreground/50"
                  }`}
                />
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-foreground">{tf.label}</h3>
                  <div
                    className={`h-0.5 w-full mt-2 ${
                      tf.active ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                  />
                  <div className="flex items-center gap-1.5 mt-2 text-muted-foreground text-sm">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{tf.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline Content */}
          <div className="grid lg:grid-cols-3 gap-6">
            {timeframes.map((timeframe, tfIndex) => {
              const bets = filterBets(
                roadmapBets[timeframe.key as keyof typeof roadmapBets]
              );
              return (
                <div key={timeframe.key} className="space-y-3">
                  {bets.map((bet, index) => {
                    const Icon = pillarIcons[bet.pillar as keyof typeof pillarIcons] || Layers;
                    return (
                      <div
                        key={index}
                        className="bg-card rounded-xl p-4 border border-border/50 hover:border-primary/30 transition-all duration-300"
                        style={{ animationDelay: `${(tfIndex * 6 + index) * 0.05}s` }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-foreground text-sm leading-snug mb-2">
                              {bet.title}
                            </h4>
                            <div className="flex items-start gap-1.5 text-muted-foreground">
                              <ArrowRight className="w-3 h-3 mt-0.5 shrink-0 text-primary/70" />
                              <span className="text-xs leading-relaxed">{bet.outcome}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {bets.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground text-sm">
                      No items for this filter
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
