import { Leaf, TrendingDown, ShieldCheck, ArrowRight, Activity, Database } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const signals = [
  {
    icon: TrendingDown,
    quote: "Our energy bills keep climbing and we cannot tell which sites are worst",
    response: "Portfolio-wide ECM screening grounded in IDM 2.0 interval data, surfacing the highest-impact sites and measures first.",
  },
  {
    icon: Leaf,
    quote: "We have to hit our carbon targets and need credible efficiency moves",
    response: "Calibrated ECM recommendations tied to verified savings logic, ready to feed Scope 2 and CSRD-aligned reporting.",
  },
  {
    icon: ShieldCheck,
    quote: "We do not trust the numbers in our last audit report",
    response: "Transparent assumptions, reusable audit IP, and M&V feedback loops grounded in IDM-grade interval data that make every recommendation traceable.",
  },
  {
    icon: Activity,
    quote: "Our interval data sits in IDM and never reaches the people making decisions",
    response: "IDM 2.0 re-platformed inside RA+ so telemetry, asset context, and audit IP flow into the same workflow Energy Managers and Sera already use.",
  },
  {
    icon: Database,
    quote: "We want to run our own analyses, not wait for a consultant every time",
    response: "Give Me, Help Me, Do It For Me profiles on one IDM-powered platform, so clients can self-serve, co-pilot, or stay fully serviced as they mature.",
  },
];


export const ClientPainEngagementSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="client-pain-engagement"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 sm:py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How Customer Pain Translates Into Engagement
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Three recurring signals from customers, three integrated responses from the Efficiency CoE and RA+.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {signals.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.quote}
                className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-6"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="italic text-sm text-foreground mb-4 leading-relaxed">
                  "{s.quote}"
                </p>
                <div className="border-t border-border/50 pt-4 flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.response}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
