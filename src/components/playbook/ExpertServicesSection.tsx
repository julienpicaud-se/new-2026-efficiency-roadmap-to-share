import { UserCog, Sparkles, ShieldCheck, MessageSquare, Lightbulb, AlertTriangle, Presentation, Bot, HeartHandshake } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const archetypes = [
  {
    icon: Bot,
    title: "Self-Serve Operator",
    tagline: "FULL AUTONOMY, AI-DRIVEN",
    description:
      "Wants the keys. Runs IDM 2.0 analytics, builds ECM scenarios, and acts on Sera recommendations without waiting for a human. RA+ is their cockpit; the platform must stand on its own.",
    bullets: [
      "Self-directed exploration of IDM 2.0 interval data and benchmarks",
      "Agent-led scoping, ROM estimates, and what-if scenarios on demand",
      "Expert services available a-la-carte, never required to make progress",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Guided Decision Client",
    tagline: "HUMAN IN THE LOOP",
    description:
      "Wants a trusted expert in the room for high-stakes calls. The platform still drives the work, but a Schneider expert validates, interprets, and translates IDM 2.0 outputs into board-ready decisions.",
    bullets: [
      "Senior auditor co-pilots IDM 2.0 readouts and ECM trade-offs",
      "Expert-led risk framing for capital, compliance, and tenant impact",
      "Recurring advisory cadence tied to the same RA+ workspace and IDM 2.0 spine",
    ],
  },
];

const judgementPillars = [
  {
    icon: ShieldCheck,
    title: "Validation",
    description:
      "Experts pressure-test IDM 2.0 baselines, ECM assumptions, and Sera outputs before they become commitments — confirming that what the agent proposes survives engineering and field reality.",
  },
  {
    icon: Lightbulb,
    title: "Interpretation",
    description:
      "Translates IDM 2.0 telemetry, anomaly patterns, and ECM stacks into a clear narrative — what is happening in the portfolio, why it matters, and what the realistic envelope of action looks like.",
  },
  {
    icon: AlertTriangle,
    title: "Risk translation",
    description:
      "Frames downside, tenant impact, compliance exposure, and execution risk for measures that IDM 2.0 surfaces — so clients see both the upside model and the operational guardrails.",
  },
  {
    icon: Presentation,
    title: "Executive communication",
    description:
      "Packages IDM 2.0 evidence and Sera reasoning into board-grade recommendations, capital narratives, and stakeholder talking points that move decisions, not just dashboards.",
  },
];

const tiers = [
  {
    name: "Self-Serve",
    audience: "Self-Serve Operator",
    cadence: "On demand",
    human: "Expert services available a-la-carte",
    platform: "Full RA+ + IDM 2.0 + Sera autonomy",
  },
  {
    name: "Assisted",
    audience: "Mixed maturity",
    cadence: "Async reviews + QBRs",
    human: "Expert validates IDM 2.0 outputs and ECM scopes on cadence",
    platform: "Shared RA+ workspace with annotated IDM 2.0 readouts",
  },
  {
    name: "Advisory",
    audience: "Guided Decision Client",
    cadence: "Embedded engagement",
    human: "Named expert owns interpretation and exec communication",
    platform: "Co-piloted RA+ + IDM 2.0 spine with expert IP layered in",
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
            Human in the Loop
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Expert Services Layer on the RA+ Spine
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            AI executes, humans apply judgment. RA+ runs the analytics; Schneider experts step in where validation, interpretation, risk, and executive communication make the difference.
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
            <h3 className="font-semibold text-foreground">Service Advisors as the Judgment Layer</h3>
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
            One IDM 2.0 spine, one RA+ workspace. Clients move between tiers without losing context, history, or model continuity.
          </p>
        </div>
      </div>
    </section>
  );
};
