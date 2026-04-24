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
      "Managed services carry too much manual cost on a fragmented data foundation",
    icon: Activity,
    tone: "muted",
    body:
      "Our managed services business carries significant operating cost and manual effort because we lack a single, authoritative way to ingest, standardize, and use the data that powers every offer: budgeting, invoice validation, sourcing, risk management, accruals, and PPA advisory. Teams spend outsized time reconciling interval, contract, invoice, tariff, and offer data across thousands of formats and retailer portals.",
    kpis: [
      { value: "~8 wks", label: "Budget cycle" },
      { value: "~160k", label: "Validation queue" },
      { value: "Multi-team", label: "Duplicated portfolio work" },
    ],
  },
  {
    num: "02",
    id: "true-problem",
    label: "The True Problem",
    title: "It is not the service logic, it is the data foundation",
    icon: AlertTriangle,
    tone: "destructive",
    body:
      "When interval and contract data are available and mapped to sites and accounts, we can compute what a bill should be and automate downstream workflows. Where we fail is identity (meter to account to site mapping outside the UK), reactive regulatory content, market delays (D+15), and fragmented ingestion that sometimes mutates invoices on entry, undermining trust.",
  },
  {
    num: "03",
    id: "north-star",
    label: "Our North Star",
    title: "A unified energy data platform inside RA+",
    icon: Compass,
    tone: "primary",
    body:
      "We will build a unified energy data platform inside RA+: an as-received data lake with provenance, a schema registry, an identity registry that resolves global meter, account, and site keys (MPAN first, expanding to EAN, POD, and others), a regulatory content service with proactive completeness management, and APIs that power budgeting, forecasts, sourcing, invoice validation, and risk modules. Clients can securely contribute occupancy and production, or connect ERP and BMS, to enhance accuracy.",
  },
  {
    num: "04",
    id: "way-to-win",
    label: "A Pragmatic Way to Win",
    title: "Do more with less: pseudo-bills first, reconcile later",
    icon: Wrench,
    tone: "muted",
    body:
      "Start with Interval, Contract, and Tariffs to generate pseudo-bills at D+1 (end of month), then reconcile with the retailer's invoice when it arrives. This avoids the D+15 market dependency and eliminates today's brittle tolerance checks. Adding weather (easy) and optional occupancy or production (via portal or API) dramatically reduces false positives. We will also stop mutating invoice data at entry; transformations will only happen downstream, with lineage.",
  },
  {
    num: "05",
    id: "economic-impact",
    label: "Economic Impact",
    title: "Material gains within two quarters of MVP",
    icon: TrendingUp,
    tone: "secondary",
    body:
      "Within two quarters of MVP, we expect to reduce the validation backlog and touches per bill, compress the budget cycle for pilot portfolios, and unlock near real-time actions for Efficiency and Microgrid teams.",
    kpis: [
      { value: "50%+", label: "Backlog reduction" },
      { value: "-40%", label: "Touches per bill" },
      { value: "<2 wks", label: "Pilot budget cycle" },
    ],
  },
  {
    num: "06",
    id: "strategic-upside",
    label: "Strategic Upside",
    title: "RA+ powers our services and third-party consultants globally",
    icon: Rocket,
    tone: "muted",
    body:
      "Once the platform is operating reliably, RA+ can power not only our services but also third-party consultants globally, a step-change in TAM similar to how Octopus commercialized Kraken for utilities. Our differentiator remains data and risk expertise, and a truly global footprint of regulatory content and identity mapping.",
  },
];

const risks: { risk: string; mitigation: string }[] = [
  {
    risk: "Connector coverage and LOA complexity",
    mitigation:
      "Partner where it is faster; digitize LOA issuance and renewals with audit trail; prioritize UK, US, and 1 to 2 EU markets first.",
  },
  {
    risk: "Identity mapping outside the UK",
    mitigation:
      "Build the registry with progressive coverage; select pilots where identifiers are achievable.",
  },
  {
    risk: "Change management",
    mitigation:
      "Establish single ownership for portfolio and contract truth; codify 'no mutation at entry'.",
  },
  {
    risk: "Client context (occupancy and production)",
    mitigation:
      "Provide both lightweight portal capture and enterprise APIs into SAP and BMS.",
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
