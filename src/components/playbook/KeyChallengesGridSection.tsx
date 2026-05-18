import { Database, ScanText, Clock, Users, FileText, Layers } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const challenges = [
  {
    icon: FileText,
    color: "rose",
    title: "Knowledge Fragmentation",
    points: [
      "Decades of audit IP locked inside PowerPoint deliverables that are hard to search or reuse",
      "ECM measures, assumptions, and savings logic are scattered across consultants and engagements",
      "Every new audit starts from a near-blank page instead of building on prior evidence",
    ],
  },
  {
    icon: Clock,
    color: "amber",
    title: "Manual Audit Workflows",
    points: [
      "ECM scoping is slow, expert-bound, and hard to scale beyond a handful of senior auditors",
      "Templated calculations and sensitivity sweeps are redone by hand on every engagement",
      "Capacity to serve more clients is capped by available expert time, not by opportunity",
    ],
  },
  {
    icon: ScanText,
    color: "orange",
    title: "Opportunity Latency",
    points: [
      "Customers wait for a full audit cycle to learn what efficiency moves are possible",
      "Early advisory is delivered late and does not scale beyond individual consultants",
      "RA+ users see operational data but no in-product efficiency recommendations",
    ],
  },
  {
    icon: Users,
    color: "violet",
    title: "Disconnected Deliverables",
    points: [
      "Slide-driven outputs require manual assembly and break the link to underlying data",
      "M&V results rarely feed back into future recommendations or scoping logic",
      "No shared building data spine across discovery, scoping, proposals, and follow-up",
    ],
  },
];

const colorStyles: Record<string, { border: string; bg: string; iconBg: string; iconText: string }> = {
  rose: {
    border: "border-rose-500/30",
    bg: "bg-gradient-to-br from-rose-500/10 to-rose-500/5",
    iconBg: "bg-rose-500/15",
    iconText: "text-rose-400",
  },
  amber: {
    border: "border-amber-500/30",
    bg: "bg-gradient-to-br from-amber-500/10 to-amber-500/5",
    iconBg: "bg-amber-500/15",
    iconText: "text-amber-400",
  },
  orange: {
    border: "border-orange-500/30",
    bg: "bg-gradient-to-br from-orange-500/10 to-orange-500/5",
    iconBg: "bg-orange-500/15",
    iconText: "text-orange-400",
  },
  violet: {
    border: "border-violet-500/30",
    bg: "bg-gradient-to-br from-violet-500/10 to-violet-500/5",
    iconBg: "bg-violet-500/15",
    iconText: "text-violet-400",
  },
};

const kpis = [
  { value: "1000s", label: "Legacy audit deliverables waiting to be reactivated", color: "text-rose-400" },
  { value: "Weeks", label: "Typical time to first ECM proposal today", color: "text-amber-400" },
  { value: "1 spine", label: "Unified building data target across every service line", color: "text-orange-400" },
];

export const KeyChallengesGridSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="key-challenges-grid"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            The Problem
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Key Challenges
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
            Efficiency value today is bottlenecked by knowledge sitting in slides, manual scoping, and deliverables that do not connect back to the RA+ data spine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto mb-8">
          {challenges.map((c) => {
            const Icon = c.icon;
            const s = colorStyles[c.color];
            return (
              <div
                key={c.title}
                className={`rounded-xl border ${s.border} ${s.bg} p-6`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-11 h-11 rounded-lg ${s.iconBg} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-5 h-5 ${s.iconText}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground pt-2">{c.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {c.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                      <div className={`w-1.5 h-1.5 rounded-full ${s.iconText} bg-current mt-2 shrink-0`} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-3 gap-3 max-w-6xl mx-auto">
          {kpis.map((k) => (
            <div
              key={k.label}
              className="rounded-xl bg-muted/30 border border-border/50 p-5 text-center"
            >
              <div className={`text-3xl sm:text-4xl font-bold mb-1 ${k.color}`}>{k.value}</div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-snug">{k.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
