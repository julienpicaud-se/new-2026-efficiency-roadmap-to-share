import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Activity,
  AlertTriangle,
  Compass,
  Wrench,
  TrendingUp,
  Rocket,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";

type Tone = "primary" | "destructive" | "secondary" | "muted";

type Section = {
  num: string;
  id: string;
  label: string;
  title: string;
  icon: React.ElementType;
  tone: Tone;
  body: string;
  kpis?: { value: string; label: string }[];
};

const toneStyles: Record<Tone, { card: string; icon: string; text: string; glow: string }> = {
  primary: {
    card: "border-primary/45 bg-primary/5",
    icon: "bg-primary/15 text-primary",
    text: "text-primary",
    glow: "shadow-[0_0_38px_hsl(var(--primary)/0.12)]",
  },
  destructive: {
    card: "border-destructive/35 bg-destructive/5",
    icon: "bg-destructive/15 text-destructive",
    text: "text-destructive",
    glow: "shadow-[0_0_30px_hsl(var(--destructive)/0.08)]",
  },
  secondary: {
    card: "border-secondary/40 bg-secondary/10",
    icon: "bg-secondary/25 text-primary",
    text: "text-primary",
    glow: "shadow-[0_0_34px_hsl(var(--secondary)/0.14)]",
  },
  muted: {
    card: "border-border/70 bg-card",
    icon: "bg-muted text-muted-foreground",
    text: "text-foreground",
    glow: "",
  },
};

const sections: Section[] = [
  {
    num: "01",
    id: "whats-happening",
    label: "What's Happening",
    title:
      "Proven CoE and Bureau capacity, ready to become a digital overlay",
    icon: Activity,
    tone: "muted",
    body:
      "The Efficiency CoE, Consulting practice, and Global Energy Bureau already deliver trusted advisory, IDM, auditing, implementation, and ongoing monitoring across public and private sectors (38 people, 428 clients, 195K connected meters, $75M in performance guarantees). The opportunity is to turn that human capacity into a digital overlay on top of RA+, so the same expertise enriches IDM, informs Sera, and reaches more customers without scaling the team linearly.",
  },
  {
    num: "02",
    id: "true-problem",
    label: "The True Problem",
    title: "The issue is connection, not demand",
    icon: AlertTriangle,
    tone: "destructive",
    body:
      "Data, context, and execution do not flow through one system. IDM holds WAGES and asset telemetry. Consulting and Bureau hold the engineering context, audit findings, and lifecycle knowledge. Customer workflows live in slides, trackers, and email. Sustainability teams cannot prioritize portfolios with confidence, efficiency teams cannot explain KPIs in context, and customers cannot see why an action is recommended or whether it was validated.",
  },
  {
    num: "03",
    id: "north-star",
    label: "Our North Star",
    title: "A connected intelligence system on the RA+ spine",
    icon: Compass,
    tone: "primary",
    body:
      "IDM becomes the trusted foundation for WAGES and contextual data, enriched continuously by Consulting and Bureau work product. Sera is the interface that turns that combined data and context into prioritization, explainable insights, structured execution, and closed-loop validation, with the same underlying data used to verify outcomes. Asset Planning sits adjacent; the Energy Manager experience leads the sequence.",
  },
  {
    num: "04",
    id: "way-to-win",
    label: "A Pragmatic Way to Win",
    title: "Connect IDM, expert context, and Sera one workflow at a time",
    icon: Wrench,
    tone: "muted",
    body:
      "Finalize the unified efficiency taxonomy, capture audit and Bureau findings as first-class data inside IDM, and wire Sera into the recurring questions efficiency teams already answer. Start with prioritization and KPI explainability, then layer ECM detection (with engineering judgment and site validation always required), structured execution tied to specific assets, and closed-loop validation using the same data that surfaced the opportunity.",
  },
  {
    num: "05",
    id: "economic-impact",
    label: "Economic Impact",
    title: "Productivity for our teams, clarity for customers, stickier RA+",
    icon: TrendingUp,
    tone: "secondary",
    body:
      "Connecting data, context, and execution reduces rework across Consulting and Bureau, makes recurring customer questions answerable inside the platform, and creates pull for deeper engagements when the system surfaces opportunities customers want to act on. The same data carries through from detection to verification.",
    kpis: [
      { value: "Less", label: "Rework across teams" },
      { value: "Clearer", label: "Customer prioritization" },
      { value: "Stickier", label: "RA+ value proposition" },
    ],
  },
  {
    num: "06",
    id: "strategic-upside",
    label: "Strategic Upside",
    title: "An explainable, closed-loop operating model",
    icon: Rocket,
    tone: "muted",
    body:
      "The end state is a connected system that links data, context, and outcomes across Strategy, Building View, audit workflows, and customer-facing guidance. Customers see why an action is recommended, what evidence supports it, and whether it was verified. Expert services are pulled in for validation, interpretation, and complex calls, never as the only way to get value from the platform.",
  },
];

const risks: { risk: string; mitigation: string }[] = [
  {
    risk: "Customer context is too thin for useful recommendations",
    mitigation:
      "Start with data-light guidance, show data gaps transparently, and progressively enrich with site, audit, AkitaBox, BMS, and customer inputs.",
  },
  {
    risk: "Efficiency guidance becomes inconsistent across teams",
    mitigation:
      "Govern taxonomy, required fields, calculation assumptions, and SME review so the library becomes the single source of truth.",
  },
];

const SummaryCard = ({ section }: { section: Section }) => {
  const Icon = section.icon;
  const styles = toneStyles[section.tone];

  return (
    <article
      id={section.id}
      className={`scroll-mt-28 rounded-lg border p-6 sm:p-8 transition-colors ${styles.card} ${styles.glow}`}
    >
      <div className="grid gap-5 sm:grid-cols-[3rem_1fr] sm:gap-6">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${styles.icon}`}
          aria-hidden="true"
        >
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className={`text-lg font-semibold leading-tight ${styles.text}`}>
              {section.label}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {section.num}
            </span>
          </div>
          <h3 className="mb-3 text-xl font-semibold leading-snug text-foreground sm:text-2xl">
            {section.title}
          </h3>
          <p className="max-w-4xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {section.body}
          </p>

          {section.kpis && (
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {section.kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-md border border-border/60 bg-background/35 px-4 py-3"
                >
                  <div className="text-2xl font-semibold leading-none text-primary">
                    {kpi.value}
                  </div>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {kpi.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export const ExecutiveSummary = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="executive-summary"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 sm:py-28 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="mx-auto max-w-6xl">
          <header className="mb-12 text-center sm:mb-16">
            <div className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-widest text-primary">
              Briefing / Steve's Ready Narrative
            </div>
            <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              Executive Summary
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A comprehensive view of the transformation opportunity for executive stakeholders.
            </p>
          </header>

          <div className="space-y-8 sm:space-y-9">
            {sections.map((section) => (
              <SummaryCard key={section.id} section={section} />
            ))}

            <article
              id="exec-risks"
              className="scroll-mt-28 rounded-lg border border-border/70 bg-card p-6 sm:p-8"
            >
              <div className="mb-7 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                  <ShieldAlert className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    07
                  </div>
                  <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                    Risks & Mitigations
                  </h3>
                </div>
              </div>

              <p className="mb-6 text-sm text-muted-foreground">
                Two cross-cutting risks live here. Operating rules are detailed in{" "}
                <a href="#guardrails" className="text-primary underline-offset-4 hover:underline">Guardrails</a>{" "}
                and boundaries in{" "}
                <a href="#out-of-scope" className="text-primary underline-offset-4 hover:underline">Out of Scope</a>.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                {risks.map((item) => (
                  <div
                    key={item.risk}
                    className="rounded-lg border border-border/60 bg-background/35 p-5"
                  >
                    <div className="mb-3 flex items-start gap-3">
                      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                      <h4 className="text-sm font-semibold leading-snug text-foreground">
                        {item.risk}
                      </h4>
                    </div>
                    <div className="flex items-start gap-3 pl-7">
                      <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" />
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.mitigation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
