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
      "Efficiency expertise is valuable, but it is not yet productized at scale",
    icon: Activity,
    tone: "muted",
    body:
      "Today, Energy Efficiency value is still delivered largely through expert-led audits, manual analysis, and bespoke deliverables. That creates high-quality outcomes, but it limits throughput, makes consistency harder, and keeps early efficiency advice outside the recurring RA+ experience.",
    kpis: [
      { value: "Manual", label: "Audit delivery model" },
      { value: "Fragmented", label: "Strategy foundation" },
      { value: "Limited", label: "Recurring advice loop" },
    ],
  },
  {
    num: "02",
    id: "true-problem",
    label: "The True Problem",
    title: "The issue is not demand, it is repeatability",
    icon: AlertTriangle,
    tone: "destructive",
    body:
      "Customers want clear guidance on what to do next, and our teams have the expertise to answer. The constraint is that opportunity logic, assumptions, applicability rules, and customer context are not yet governed as a reusable product foundation across Strategy, Building View, audit workflows, and customer-facing recommendations.",
  },
  {
    num: "03",
    id: "north-star",
    label: "Our North Star",
    title: "A governed Efficiency strategy foundation embedded in RA+",
    icon: Compass,
    tone: "primary",
    body:
      "The north star is an authoritative Efficiency strategy foundation inside RA+ that standardizes opportunity types, assumptions, confidence levels, applicability logic, and evidence. It should power goal-based Strategy recommendations, site-level Building View discovery, structured deliverables, and a clear path from early insight to expert engagement.",
  },
  {
    num: "04",
    id: "way-to-win",
    label: "A Pragmatic Way to Win",
    title: "Start with reusable content, then expand into guided workflows",
    icon: Wrench,
    tone: "muted",
    body:
      "The practical sequence is to finalize the unified efficiency taxonomy, publish a provisional guidance base with SME review, define clean service boundaries, and connect the guidance to Strategy first. From there, we can introduce Building View, rule-based opportunity surfacing, customer self-service exploration, and platform-native audit outputs.",
  },
  {
    num: "05",
    id: "economic-impact",
    label: "Economic Impact",
    title: "The value case spans productivity, upsell, and recurring revenue",
    icon: TrendingUp,
    tone: "secondary",
    body:
      "This transformation lowers cost to serve by reducing rework and manual slide building, creates better qualified demand for advanced audits, and strengthens RA+ stickiness through continuous efficiency guidance that customers can act on between formal engagements.",
    kpis: [
      { value: "Faster", label: "Audit throughput" },
      { value: "Higher", label: "Advanced audit pull" },
      { value: "Stickier", label: "RA+ value proposition" },
    ],
  },
  {
    num: "06",
    id: "strategic-upside",
    label: "Strategic Upside",
    title: "Efficiency becomes a continuous RA+ capability, not a one-off service",
    icon: Rocket,
    tone: "muted",
    body:
      "The end state is a credible, governed efficiency layer in RA+ where customers receive contextual recommendations, teams reuse a consistent knowledge base, and expert services are pulled in at the right moments for deeper analysis without turning early guidance into a contractual commitment.",
  },
];

const risks: { risk: string; mitigation: string }[] = [
  {
    risk: "Advice could be interpreted as a guarantee",
    mitigation:
      "Use confidence labels, ranges, assumptions, and clear escalation paths to expert audits before any commitment is made.",
  },
  {
    risk: "Efficiency guidance becomes inconsistent across teams",
    mitigation:
      "Govern taxonomy, required fields, calculation assumptions, and SME review so the library becomes the single source of truth.",
  },
  {
    risk: "Customer context is too thin for useful recommendations",
    mitigation:
      "Start with data-light guidance, show data gaps transparently, and progressively enrich with site, audit, AkitaBox, SCADA, and customer inputs.",
  },
  {
    risk: "Scope expands into detailed engineering or pricing",
    mitigation:
      "Keep the product focused on guidance, prioritization, and workflow enablement while reserving detailed design and commercial terms for expert services.",
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
            <div className="mt-6 flex flex-col items-center justify-center gap-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground sm:flex-row sm:gap-5">
              <span>Distribution / Internal</span>
              <span>Audience / Executive Committee</span>
              <span className="text-primary">Status / For decision</span>
            </div>
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
