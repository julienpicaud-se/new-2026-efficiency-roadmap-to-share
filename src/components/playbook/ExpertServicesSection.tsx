import { UserCog, Sparkles, ShieldCheck, MessageSquare, Lightbulb, Presentation, Bot, HeartHandshake, Database } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const archetypes = [
  {
    icon: Bot,
    title: "Self-Serve Operator",
    tagline: "FULL AUTONOMY, AI-DRIVEN",
    description:
      "Wants the keys. Runs IDM 2.0 analytics, explores ECM candidates, and acts on Sera recommendations directly. The platform must stand on its own, with the same data and explainability the experts use.",
    bullets: [
      "Self-directed exploration of IDM 2.0 WAGES, asset context, and benchmarks",
      "Agent-led prioritization, KPI explainability, and recurring-question workflows",
      "Consulting and Bureau available a-la-carte for validation or complex calls",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Guided Decision Client",
    tagline: "EXPERTS IN THE SYSTEM",
    description:
      "Wants Consulting and Bureau embedded in the workflow, not just on call. The platform drives the day-to-day; experts validate, enrich context, frame risk, and oversee execution on high-stakes calls.",
    bullets: [
      "Consulting co-pilots ECM lifecycle decisions inside the same RA+ workspace",
      "Bureau owns ongoing monitoring, validation, and change-management cadence",
      "Findings flow back into IDM as enriched context for the next workflow",
    ],
  },
];

const judgementPillars = [
  {
    icon: Database,
    title: "Data integration & auditing",
    description:
      "Consulting and Bureau bring audit findings, engineering assumptions, and field measurements into IDM as first-class data, so the platform reasons on the same context the experts do.",
  },
  {
    icon: ShieldCheck,
    title: "Validation",
    description:
      "Experts pressure-test baselines, ECM candidates, and Sera outputs against engineering reality before they become commitments. Site validation remains required for ECM design and capital decisions.",
  },
  {
    icon: Lightbulb,
    title: "Interpretation & risk translation",
    description:
      "Turn IDM signals into a clear portfolio narrative, with downside, tenant impact, compliance exposure, and execution risk framed for capital and operational decisions.",
  },
  {
    icon: Presentation,
    title: "Change management & program oversight",
    description:
      "Bureau and Consulting carry change management, stakeholder communication, and program oversight across the ECM lifecycle, with closed-loop validation tracked in the platform.",
  },
];

const tiers = [
  {
    name: "Self-Serve",
    audience: "Self-Serve Operator",
    cadence: "On demand",
    human: "Consulting or Bureau available a-la-carte for validation",
    platform: "Full RA+ + IDM 2.0 + Sera autonomy on the connected spine",
  },
  {
    name: "Assisted",
    audience: "Mixed maturity",
    cadence: "Async reviews + recurring touchpoints",
    human: "Experts validate outputs, enrich IDM context, and co-own complex calls",
    platform: "Shared RA+ workspace with annotated readouts and ECM lifecycle tracking",
  },
  {
    name: "Embedded",
    audience: "Guided Decision Client",
    cadence: "Embedded engagement",
    human: "Consulting + Bureau embedded across audit, ECM lifecycle, validation, and program oversight",
    platform: "Co-piloted RA+ spine with continuous Bureau monitoring and expert IP layered in",
  },
];

export const ExpertServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="expert-services"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Experts in the System
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Consulting & Bureau on the RA+ Spine
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Consulting and the Global Energy Bureau are part of the system, not a layer on top. They enrich IDM with audit and engineering context, validate Sera outputs, frame risk, and own change management and program oversight across the ECM lifecycle.
          </p>
        </div>

        {/* Client archetypes */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5 mb-12">
          {archetypes.map((a) => {
            const Icon = a.icon;
            return (
              <div
                key={a.title}
                className="bg-card rounded-xl border border-border/50 p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{a.title}</h3>
                    <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                      {a.tagline}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {a.description}
                </p>
                <ul className="space-y-2">
                  {a.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                      <Sparkles className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Judgement layer */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex items-center gap-3 mb-6">
            <UserCog className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">How Consulting & Bureau Show Up in the System</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {judgementPillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="bg-card rounded-xl border border-border/50 p-5 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{p.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Engagement tiers */}
        <div className="max-w-6xl mx-auto bg-card rounded-xl border border-border/50 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Engagement Tiers on One RA+ Spine</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[680px]">
              <thead>
                <tr className="border-b border-border/50 text-left">
                  <th className="py-3 pr-4 text-xs uppercase tracking-wider text-primary font-semibold">Tier</th>
                  <th className="py-3 pr-4 text-xs uppercase tracking-wider text-primary font-semibold">Best for</th>
                  <th className="py-3 pr-4 text-xs uppercase tracking-wider text-primary font-semibold">Cadence</th>
                  <th className="py-3 pr-4 text-xs uppercase tracking-wider text-primary font-semibold">Human role</th>
                  <th className="py-3 text-xs uppercase tracking-wider text-primary font-semibold">Platform / IDM 2.0</th>
                </tr>
              </thead>
              <tbody>
                {tiers.map((t) => (
                  <tr key={t.name} className="border-b border-border/30 last:border-0 align-top">
                    <td className="py-3 pr-4 font-bold text-foreground">{t.name}</td>
                    <td className="py-3 pr-4 text-muted-foreground">{t.audience}</td>
                    <td className="py-3 pr-4 text-muted-foreground">{t.cadence}</td>
                    <td className="py-3 pr-4 text-foreground">{t.human}</td>
                    <td className="py-3 text-foreground">{t.platform}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground italic mt-5">
            One connected spine. Clients move between tiers without losing context, history, or validation continuity. Engineering judgment and site validation remain required wherever ECM design or capital commitments are at stake.
          </p>
        </div>
      </div>
    </section>
  );
};
