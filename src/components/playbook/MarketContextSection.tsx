import { Zap, TrendingUp, Layers, Sparkles, Leaf, ShieldCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const forces = [
  {
    icon: Zap,
    title: "Rising Energy Costs & Volatility",
    body: "Customers face unpredictable utility bills and capacity charges, putting efficiency back at the top of the operating agenda.",
  },
  {
    icon: TrendingUp,
    title: "Decarbonization Pressure",
    body: "Scope 1 and 2 commitments turn efficiency from a nice-to-have into a measurable contribution to corporate climate targets.",
  },
  {
    icon: Layers,
    title: "Aging Building Stock",
    body: "Portfolios mix legacy HVAC, controls, and envelopes, creating broad ECM opportunity but also high diagnostic complexity.",
  },
  {
    icon: Sparkles,
    title: "AI & Self-Service Expectations",
    body: "Energy Managers expect guided, in-product recommendations, not static reports delivered weeks after data is collected.",
  },
  {
    icon: Leaf,
    title: "Audit & Incentive Programs",
    body: "Utility rebates, tax credits, and disclosure mandates reward customers who can show calibrated, evidence-backed ECM plans.",
  },
  {
    icon: ShieldCheck,
    title: "Operational Resilience",
    body: "Efficiency is increasingly tied to resilience and uptime, not only cost, raising the bar on data quality and traceability.",
  },
];

export const MarketContextSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="market-context"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 sm:py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 block">
            Market Context
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Forces Shaping Customer Needs
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Customers face the most demanding efficiency landscape in a generation. These pressures define where the Efficiency CoE and RA+ must deliver.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {forces.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="rounded-xl border border-border/50 bg-muted/20 p-6"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
