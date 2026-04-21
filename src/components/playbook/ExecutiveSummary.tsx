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

type Section = {
  num: string;
  id: string;
  label: string;
  title: string;
  icon: React.ElementType;
  body: string;
  kpis?: { value: string; label: string }[];
};

const sections: Section[] = [
  {
    num: "01",
    id: "whats-happening",
    label: "What's Happening",
    title:
      "Managed services carry too much manual cost on a fragmented data foundation",
    icon: Activity,
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
    body:
      "When interval and contract data are available and mapped to sites and accounts, we can compute what a bill should be and automate downstream workflows. Where we fail is identity (meter to account to site mapping outside the UK), reactive regulatory content, market delays (D+15), and fragmented ingestion that sometimes mutates invoices on entry, undermining trust.",
  },
  {
    num: "03",
    id: "north-star",
    label: "Our North Star",
    title: "A unified energy data platform inside RA+",
    icon: Compass,
    body:
      "We will build a unified energy data platform inside RA+: an as-received data lake with provenance, a schema registry, an identity registry that resolves global meter, account, and site keys (MPAN first, expanding to EAN, POD, and others), a regulatory content service with proactive completeness management, and APIs that power budgeting, forecasts, sourcing, invoice validation, and risk modules. Clients can securely contribute occupancy and production, or connect ERP and BMS, to enhance accuracy.",
  },
  {
    num: "04",
    id: "way-to-win",
    label: "A Pragmatic Way to Win",
    title: "Do more with less: pseudo-bills first, reconcile later",
    icon: Wrench,
    body:
      "Start with Interval, Contract, and Tariffs to generate pseudo-bills at D+1 (end of month), then reconcile with the retailer's invoice when it arrives. This avoids the D+15 market dependency and eliminates today's brittle tolerance checks. Adding weather (easy) and optional occupancy or production (via portal or API) dramatically reduces false positives. We will also stop mutating invoice data at entry; transformations will only happen downstream, with lineage.",
  },
  {
    num: "05",
    id: "economic-impact",
    label: "Economic Impact",
    title: "Material gains within two quarters of MVP",
    icon: TrendingUp,
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

export const ExecutiveSummary = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="executive-summary"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 sm:py-28 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        {/* ============ Briefing Header ============ */}
        <div className="max-w-6xl mx-auto mb-12 sm:mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-6 border-b border-border/60">
            <div>
              <div className="flex items-center gap-3 mb-3 font-mono text-[11px] tracking-widest uppercase text-muted-foreground">
                <span className="text-primary">§</span>
                <span>Briefing / Steve's Ready Narrative</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Executive Summary
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl">
                A comprehensive view of the transformation opportunity for executive stakeholders.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-1 font-mono text-[11px] tracking-widest uppercase text-muted-foreground">
              <span>Distribution / Internal</span>
              <span>Audience / Executive Committee</span>
              <span className="text-primary">Status / For decision</span>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8">
          {/* ============ Left rail: Contents ============ */}
          <aside className="hidden lg:block col-span-3">
            <div className="sticky top-28">
              <div className="font-mono text-[11px] tracking-widest uppercase text-muted-foreground mb-4 pb-2 border-b border-border/60">
                Contents
              </div>
              <ol className="space-y-2.5">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="group flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span className="font-mono text-[11px] text-primary mt-0.5 shrink-0">
                        {s.num}
                      </span>
                      <span className="leading-snug group-hover:translate-x-0.5 transition-transform">
                        {s.label}
                      </span>
                    </a>
                  </li>
                ))}
                <li className="pt-2 mt-2 border-t border-border/40">
                  <a
                    href="#exec-risks"
                    className="group flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="font-mono text-[11px] text-primary mt-0.5 shrink-0">
                      07
                    </span>
                    <span className="leading-snug group-hover:translate-x-0.5 transition-transform">
                      Risks & Mitigations
                    </span>
                  </a>
                </li>
              </ol>
            </div>
          </aside>

          {/* ============ Main column ============ */}
          <div className="col-span-12 lg:col-span-9 space-y-12 sm:space-y-14">
            {sections.map((s) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.id}
                  id={s.id}
                  className="group scroll-mt-28 grid grid-cols-12 gap-4 sm:gap-6 pb-12 border-b border-border/50 last:border-b-0 last:pb-0"
                >
                  {/* Number marker */}
                  <div className="col-span-2 sm:col-span-1">
                    <div className="font-mono text-2xl sm:text-3xl font-light text-primary/80 leading-none">
                      {s.num}
                    </div>
                    <div className="mt-3 hidden sm:flex w-7 h-7 rounded-md border border-border/60 items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/40 transition-colors">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Body */}
                  <div className="col-span-10 sm:col-span-11">
                    <div className="font-mono text-[11px] tracking-widest uppercase text-primary mb-2">
                      {s.label}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground leading-snug mb-4">
                      {s.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl">
                      {s.body}
                    </p>

                    {s.kpis && (
                      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-px bg-border/50 border border-border/50 rounded-lg overflow-hidden">
                        {s.kpis.map((k) => (
                          <div
                            key={k.label}
                            className="bg-card px-5 py-4"
                          >
                            <div className="text-xl sm:text-2xl font-semibold text-primary leading-tight">
                              {k.value}
                            </div>
                            <div className="mt-1 font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                              {k.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}

            {/* ============ Risks & Mitigations table ============ */}
            <article
              id="exec-risks"
              className="scroll-mt-28 grid grid-cols-12 gap-4 sm:gap-6"
            >
              <div className="col-span-2 sm:col-span-1">
                <div className="font-mono text-2xl sm:text-3xl font-light text-primary/80 leading-none">
                  07
                </div>
                <div className="mt-3 hidden sm:flex w-7 h-7 rounded-md border border-border/60 items-center justify-center text-muted-foreground">
                  <ShieldAlert className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="col-span-10 sm:col-span-11">
                <div className="font-mono text-[11px] tracking-widest uppercase text-primary mb-2">
                  Risks & Mitigations
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground leading-snug mb-5">
                  What could slow us down, and how we de-risk it
                </h3>

                <div className="border border-border/60 rounded-lg overflow-hidden">
                  <div className="hidden md:grid grid-cols-12 bg-muted/40 border-b border-border/60 font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                    <div className="col-span-5 px-5 py-3">Risk</div>
                    <div className="col-span-7 px-5 py-3 border-l border-border/60">
                      Mitigation
                    </div>
                  </div>
                  {risks.map((r, i) => (
                    <div
                      key={r.risk}
                      className={`grid grid-cols-1 md:grid-cols-12 ${
                        i !== risks.length - 1
                          ? "border-b border-border/60"
                          : ""
                      }`}
                    >
                      <div className="md:col-span-5 px-5 py-4 flex items-start gap-3">
                        <span className="font-mono text-[11px] text-primary mt-0.5 shrink-0">
                          R{String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm font-medium text-foreground leading-snug">
                          {r.risk}
                        </span>
                      </div>
                      <div className="md:col-span-7 px-5 py-4 md:border-l border-t md:border-t-0 border-border/60 flex items-start gap-2">
                        <ArrowRight className="w-3.5 h-3.5 text-primary/70 shrink-0 mt-1" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {r.mitigation}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
