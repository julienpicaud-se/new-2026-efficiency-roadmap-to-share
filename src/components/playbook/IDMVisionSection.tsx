import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Database,
  Activity,
  Target,
  Workflow,
  Users,
  Sparkles,
  ShieldCheck,
  Building,
  Check,
} from "lucide-react";

const useCases = [
  {
    icon: Activity,
    title: "Program Management & M&V",
    body: "Follow up on actions, track KPIs, run causal analysis across factories, sites, and buildings. IPMVP-aligned savings validation built into the platform.",
  },
  {
    icon: Target,
    title: "Optimization Discovery",
    body: "Use interval data to surface staging opportunities, compressed air inefficiencies, control re-architecture, and other ECMs the consultancy team would normally find manually.",
  },
  {
    icon: Workflow,
    title: "Cross-Functional Data Reuse",
    body: "Make interval data natively available for sourcing, budgeting, forecasting, and risk management. One source of truth, multiple downstream use cases.",
  },
];

const profiles = [
  {
    title: "Give Me",
    subtitle: "Full self-serve",
    body: "Clients with internal expertise who want to run analyses, configure KPIs, and manage their own program inside RA+.",
  },
  {
    title: "Help Me",
    subtitle: "Hybrid",
    body: "Clients who want platform autonomy for daily work plus targeted Schneider expertise for complex moments.",
  },
  {
    title: "Do It For Me",
    subtitle: "Full service",
    body: "Clients who continue to rely on Schneider for data integration, KPI configuration, analysis, and program management.",
  },
];

const moatPoints = [
  "Bring asset, ECM, audit, and energy-flow context into RA+, not just telemetry",
  "Make field and consultancy work product first-class data inside the platform",
  "Expose the enriched context to Sera and downstream agents for richer reasoning",
  "Right to win comes from the combination of data plus expertise, not software alone",
];

const principles = [
  {
    icon: Sparkles,
    title: "New capabilities, not faster sameness",
    body: "Take advantage of the agentic framework and new RA+ primitives. Replicating IDM cheaper is not the goal.",
  },
  {
    icon: Building,
    title: "Embedded, not bolted on",
    body: "IDM 2.0 is an integral part of the efficiency workflow inside RA+, not a standalone tab at the end of the journey.",
  },
  {
    icon: ShieldCheck,
    title: "Differentiated within S&S",
    body: "Clearly defensible against adjacent S&S products (BDP, Foresight) so re-platforming is justified in budget reviews.",
  },
  {
    icon: Users,
    title: "Anchored on real users",
    body: "Validate scope with SE Corporate as design partner plus a small set of industrial clients (Alfa Laval, OP Mobility, Velux, Tetra Pak, Sanofi).",
  },
];

export const IDMVisionSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="idm-vision"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-muted/40 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Phase 1 Deep Dive · Axis: client autonomy
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            IDM 2.0 Vision
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Re-platform IDM into RA+ as a differentiated, agent-ready capability. Not a lift-and-shift, not a tab, not a faster version of today.
          </p>
        </div>

        {/* North Star */}
        <div className="bg-card rounded-2xl border border-primary/30 p-8 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                North Star
              </span>
            </div>
            <p className="text-lg sm:text-xl text-foreground leading-relaxed max-w-4xl">
              IDM 2.0 turns interval data into an enriched, agent-ready context layer inside RA+, blending telemetry with the field and consultancy work product that only Schneider can bring.
            </p>
          </div>
        </div>

        {/* Use cases */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Core Use Cases</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((u, i) => {
              const Icon = u.icon;
              return (
                <div
                  key={i}
                  className="bg-card rounded-xl border border-border/50 p-6 hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{u.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{u.body}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Client profiles */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
            Client Engagement Profiles
          </h3>
          <p className="text-sm text-muted-foreground mb-6 max-w-3xl">
            One platform, three ways to consume it. Designed to open new market segments we cannot serve today.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {profiles.map((p, i) => (
              <div
                key={i}
                className="bg-card rounded-xl border border-border/50 p-6 flex flex-col"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                  {p.subtitle}
                </span>
                <h4 className="text-xl font-bold text-foreground mb-3">{p.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The Moat */}
        <div className="mb-16 bg-card rounded-2xl border border-border/50 p-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">
            Defensibility
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">The Moat</h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-3xl">
            Telemetry alone gets commoditized as reasoning matures. Our edge is the on-premise context that pure software players cannot reach.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {moatPoints.map((m, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-muted/40 rounded-lg p-4 border-l-2 border-primary"
              >
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-foreground leading-relaxed">{m}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Design principles */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
            Design Principles
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="flex gap-4 bg-card rounded-xl border border-border/50 p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{p.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
