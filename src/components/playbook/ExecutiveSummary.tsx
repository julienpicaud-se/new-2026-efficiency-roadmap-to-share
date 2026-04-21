import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Activity,
  AlertTriangle,
  Compass,
  Wrench,
  TrendingUp,
  Rocket,
  ShieldAlert,
  ListChecks,
  Check,
} from "lucide-react";

type Block = {
  id: string;
  label: string;
  title: string;
  icon: React.ElementType;
  body: string;
  bullets?: string[];
};

const narrativeBlocks: Block[] = [
  {
    id: "whats-happening",
    label: "What's Happening",
    title: "Managed services carry too much manual cost on a fragmented data foundation",
    icon: Activity,
    body:
      "Our managed services business carries significant operating cost and manual effort because we lack a single, authoritative way to ingest, standardize, and use the data that powers every offer: budgeting, invoice validation, sourcing, risk management, accruals, and PPA advisory. Teams spend outsized time reconciling interval, contract, invoice, tariff, and offer data across thousands of formats and retailer portals. The result: long budget cycles (around 8 weeks), a ballooning invoice validation queue (around 160k issues), and duplicated portfolio work across multiple teams.",
  },
  {
    id: "true-problem",
    label: "The True Problem",
    title: "It is not the service logic, it is the data foundation",
    icon: AlertTriangle,
    body:
      "When interval and contract data are available and mapped to sites and accounts, we can compute what a bill should be and automate downstream workflows. Where we fail is identity (meter to account to site mapping outside the UK), reactive regulatory content, market delays (D+15), and fragmented ingestion that sometimes mutates invoices on entry, undermining trust.",
  },
  {
    id: "north-star",
    label: "Our North Star",
    title: "A unified energy data platform inside RA+",
    icon: Compass,
    body:
      "We will build a unified energy data platform inside RA+: an as-received data lake with provenance, a schema registry, an identity registry that resolves global meter, account, and site keys (MPAN first, expanding to EAN, POD, and others), a regulatory content service with proactive completeness management, and APIs that power budgeting, forecasts, sourcing, invoice validation, and risk modules. Clients can securely contribute occupancy and production data, or connect ERP and BMS, to enhance accuracy.",
  },
  {
    id: "way-to-win",
    label: "A Pragmatic Way to Win",
    title: "Do more with less: pseudo-bills first, reconcile later",
    icon: Wrench,
    body:
      "Start with Interval, Contract, and Tariffs to generate pseudo-bills at D+1 (end of month), then reconcile with the retailer's invoice when it arrives. This avoids the D+15 market dependency and eliminates today's brittle tolerance checks. Adding weather (easy) and optional occupancy or production (via portal or API) dramatically reduces false positives. We will also stop mutating invoice data at entry; transformations will only happen downstream, with lineage.",
  },
  {
    id: "economic-impact",
    label: "Economic Impact",
    title: "Material gains within two quarters of MVP",
    icon: TrendingUp,
    body: "Within two quarters of MVP, we expect to:",
    bullets: [
      "Reduce the invoice validation backlog by 50%+ and lower touches per bill by 40%",
      "Cut the budget cycle to under 2 weeks for pilot portfolios, with further reduction to under 1 week as coverage expands",
      "Improve dispute accuracy, enable earlier detection of anomalies, and unlock near real-time actions for Efficiency and Microgrid",
    ],
  },
  {
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
      className={`py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
              Steve's Ready Narrative
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
              Executive Summary
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive view of the transformation opportunity for executive stakeholders.
            </p>
          </div>

          {/* Narrative blocks */}
          <div className="grid md:grid-cols-2 gap-5">
            {narrativeBlocks.map((block) => {
              const Icon = block.icon;
              const isHighlight =
                block.id === "north-star" || block.id === "way-to-win";
              return (
                <Card
                  key={block.id}
                  className={`glass-card transition-all duration-300 hover:-translate-y-1 ${
                    isHighlight
                      ? "border-primary/40 glow-border md:col-span-2"
                      : "border-border/50 hover:border-primary/40"
                  }`}
                >
                  <CardContent className="p-6 sm:p-7">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                          isHighlight
                            ? "bg-primary/15 text-primary"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-primary text-[11px] font-semibold uppercase tracking-wider block mb-1">
                          {block.label}
                        </span>
                        <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 leading-snug">
                          {block.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {block.body}
                        </p>
                        {block.bullets && (
                          <ul className="mt-3 space-y-2">
                            {block.bullets.map((b, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm text-muted-foreground"
                              >
                                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Risks & Mitigations */}
          <div className="mt-10">
            <Card className="glass-card border-border/50">
              <CardContent className="p-6 sm:p-7">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-primary text-[11px] font-semibold uppercase tracking-wider block mb-1">
                      Risks & Mitigations
                    </span>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground leading-snug">
                      What could slow us down, and how we de-risk it
                    </h3>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {risks.map((r) => (
                    <div
                      key={r.risk}
                      className="rounded-xl border border-border/50 bg-muted/20 p-4"
                    >
                      <h4 className="text-sm font-semibold text-foreground mb-1.5 flex items-start gap-2">
                        <ListChecks className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {r.risk}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed pl-6">
                        {r.mitigation}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
