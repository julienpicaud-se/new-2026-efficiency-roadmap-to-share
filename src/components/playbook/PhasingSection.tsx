import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Database, Library, Building2, Check, Clock, AlertCircle } from "lucide-react";

type Status = "urgent" | "strategic" | "exploration";

const phases = [
  {
    id: "idm",
    phase: "Phase 1",
    title: "IDM Evolution",
    tagline: "Urgent, no-regret",
    icon: Database,
    status: "urgent" as Status,
    statusLabel: "In flight",
    timing: "MVP target Q4 2025 / Q1 2026",
    summary:
      "Not a lift-and-shift. Re-platform IDM into RA+ to drive market differentiation through agentic capabilities, richer context, and SaaS-ready delivery.",
    bullets: [
      "Closes a competitive gap that becomes urgent if left unaddressed",
      "Anchored by SE Corporate as RA Classic client and design partner",
      "Aligned to SE Corporate RA+ go-live in early Q1 2027",
      "Embeds into the broader efficiency workflow, not a standalone module",
    ],
    dependencies: "Foundation for Phase 2 and 3. Sets the data, agent, and context patterns reused downstream.",
  },
  {
    id: "ecm",
    phase: "Phase 2",
    title: "ECM Library",
    tagline: "Cross-COE feeder",
    icon: Library,
    status: "strategic" as Status,
    statusLabel: "Adjacent strategic",
    timing: "Sequenced with Pricing & Savings Accelerator",
    summary:
      "ECM Library is a feeder for many capabilities across RA+. It connects construction services, consultancy, and the energy efficiency product into one knowledge backbone.",
    bullets: [
      "Connects efficiency, consultancy, and construction services",
      "Strong overlap in mindset with the Pricing & Savings Accelerator data hub",
      "Powers Sera reasoning with codified measures, assumptions, and outcomes",
      "Reuses data patterns established by IDM in Phase 1",
    ],
    dependencies: "Builds on the IDM data foundation. Co-evolves with the Pricing & Savings Accelerator workstream.",
  },
  {
    id: "akitabox",
    phase: "Phase 3",
    title: "AkitaBox",
    tagline: "Build vs. integrate decision",
    icon: Building2,
    status: "exploration" as Status,
    statusLabel: "Open question",
    timing: "Sequencing TBD",
    summary:
      "AkitaBox is a no-regret strategic move, but the shape is undefined. Open questions: do we build, and if so, inside RA+ or as a separate module?",
    bullets: [
      "Confirmed as one of three no-regret strategic moves",
      "Build vs. partner vs. integrate not yet decided",
      "Surface area within RA+ vs. standalone module to be scoped",
      "Differentiation vs. adjacent SNS products (BDP, Foresight) must be clear",
    ],
    dependencies: "Sequencing depends on IDM and ECM groundwork plus a clearer commercial case.",
  },
];

const statusStyles: Record<Status, string> = {
  urgent: "bg-primary/15 text-primary border-primary/30",
  strategic: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  exploration: "bg-muted text-muted-foreground border-border",
};

const statusIcons: Record<Status, typeof Clock> = {
  urgent: Clock,
  strategic: Check,
  exploration: AlertCircle,
};

export const PhasingSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="phasing"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-muted/50 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Sequencing · Axis: over time
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Phasing: Three No-Regret Moves
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            A clear order of operations for the Energy Efficiency build inside RA+. IDM first, then ECM Library, then AkitaBox.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {phases.map((p) => {
            const Icon = p.icon;
            const StatusIcon = statusIcons[p.status];
            return (
              <div
                key={p.id}
                className="flex flex-col bg-card rounded-xl border border-border/50 p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border flex items-center gap-1.5 ${statusStyles[p.status]}`}>
                    <StatusIcon className="w-3 h-3" />
                    {p.statusLabel}
                  </span>
                </div>

                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                  {p.phase}
                </span>
                <h3 className="text-2xl font-bold text-foreground mb-1">{p.title}</h3>
                <p className="text-primary font-medium mb-4">{p.tagline}</p>

                <div className="bg-muted/50 rounded-lg border-l-2 border-primary pl-4 pr-4 py-3 mb-6">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Timing</p>
                  <p className="text-sm text-foreground">{p.timing}</p>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {p.summary}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-4 text-sm">Why this, why now</h4>
                  <ul className="space-y-3">
                    {p.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border/50 my-2" />

                <div className="mt-auto pt-4">
                  <h4 className="font-semibold text-muted-foreground uppercase text-xs tracking-wider mb-2">
                    Sequencing logic
                  </h4>
                  <p className="text-sm text-foreground/80 leading-relaxed">{p.dependencies}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
