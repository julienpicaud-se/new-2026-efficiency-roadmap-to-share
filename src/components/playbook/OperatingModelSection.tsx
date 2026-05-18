import { Users, Bot, Zap, Database, Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const pillars = [
  {
    icon: Users,
    title: "Expert Auditors",
    tagline: "JUDGMENT, ENGINEERING, CLIENT RELATIONSHIPS",
    description:
      "Senior energy engineers, ECM specialists, and sustainability advisors who own the recommendation and the customer conversation, working from IDM 2.0 interval data and asset context inside RA+.",
  },
  {
    icon: Bot,
    title: "Agentic AI Assistants",
    tagline: "CO-PILOTS THAT COMPRESS AUDIT HOURS INTO MINUTES",
    description:
      "Purpose-built agents (Sera and peers) that reason over the IDM 2.0 spine plus legacy audits, draft ROM estimates, stack measures, and explain assumptions so experts focus on calibration and trade-offs.",
  },
  {
    icon: Zap,
    title: "Automation Engine",
    tagline: "PARAMETRIC EFFICIENCY AT SCALE",
    description:
      "Templated ECM calculations, sensitivity sweeps, CPQ handoffs, and M&V scaffolding generated automatically from IDM 2.0 interval telemetry, asset, and tariff data — with always-on detection between formal audit cycles.",
  },
  {
    icon: Database,
    title: "IDM 2.0 Data Spine",
    tagline: "AGENT-READY TELEMETRY + WORK PRODUCT, NATIVE TO RA+",
    description:
      "IDM re-platformed as a native RA+ capability: resolves building identity, ingests interval meter and asset data, blends in field/consultancy work product, and exposes one enriched context layer to experts and agents — no module hop.",
  },
];

const principles = [
  "Software absorbs the repeatable work; auditors own the judgment calls",
  "Every service line shares the same IDM 2.0 spine — interval data, asset context, and audit IP in one place, no swivel-chair handoffs",
  "Agents are accountable to humans; humans are accountable to clients; IDM-grade data is accountable to both",
  "Automation targets 90%+ of recurring ECM scoping touches over the horizon, powered by always-on IDM 2.0 discovery",
];

export const OperatingModelSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="operating-model"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Operating Model
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Experts Supported by Software
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            We are not a software vendor and we are not a pure consultancy. We are experts supported by software, humans on point for judgment, software on point for scale.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="flex items-start gap-5 bg-card rounded-xl border border-border/50 p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                    <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
                    <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                      {p.tagline}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-5xl mx-auto mt-10 bg-card rounded-xl border border-border/50 p-6 sm:p-8">
          <h3 className="font-semibold text-foreground mb-6">Operating Principles</h3>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            {principles.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
