import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Search,
  ClipboardCheck,
  PencilRuler,
  HardHat,
  Activity,
  ShieldCheck,
  Shield,
  ArrowRight,
  Sparkles,
  Database,
  Users,
} from "lucide-react";

type Status = "live" | "in-build" | "planned";

const stageStatusStyles: Record<Status, string> = {
  live: "bg-primary/15 text-primary border-primary/30",
  "in-build": "bg-amber-500/15 text-amber-400 border-amber-500/30",
  planned: "bg-muted text-muted-foreground border-border",
};

const stageStatusLabel: Record<Status, string> = {
  live: "Live",
  "in-build": "In build",
  planned: "Planned",
};

type Stage = {
  id: string;
  name: string;
  icon: React.ElementType;
  status: Status;
  oneLiner: string;
  platformRole: string;
  humanRole: string;
  idmInputs: string[];
  outputs: string[];
  guardrails: string[];
};

const stages: Stage[] = [
  {
    id: "detect",
    name: "Detect",
    icon: Search,
    status: "in-build",
    oneLiner: "Surface ECM candidates from IDM data and asset context.",
    platformRole:
      "RA+ scans WAGES data, asset registers, and operating context to surface candidate measures and rank them by signal strength.",
    humanRole:
      "Bureau and Consulting review candidates, discard noise, and add site-specific context the data cannot see.",
    idmInputs: ["WAGES meters", "Asset register", "Operating schedule", "Climate / occupancy"],
    outputs: ["Ranked candidate list", "Explainability trail", "Priority hotspots"],
    guardrails: [
      "Candidates are hypotheses, not commitments",
      "Engineering judgment required before progressing",
    ],
  },
  {
    id: "feasibility",
    name: "Feasibility",
    icon: ClipboardCheck,
    status: "in-build",
    oneLiner: "Engineering review of applicability, constraints, and value.",
    platformRole:
      "Structured templates pull asset, tariff, and baseline data into a consistent feasibility view with probabilistic ranges.",
    humanRole:
      "Engineers assess technical fit, constructability flags, and stakeholder constraints; decide go / no-go.",
    idmInputs: ["Baselines", "Tariff structure", "Equipment specs", "Historical M&V"],
    outputs: ["Feasibility note", "Confidence range", "Risk register"],
    guardrails: [
      "Ranges, not single-point ROIs",
      "No commercial commitment at this stage",
    ],
  },
  {
    id: "design",
    name: "Design",
    icon: PencilRuler,
    status: "planned",
    oneLiner: "Detailed design with site-specific validation.",
    platformRole:
      "Carries assumptions, baselines, and feasibility decisions into the design workspace; tracks changes and rationale.",
    humanRole:
      "Design engineers and consultants own the technical solution and sign off site-specific validation.",
    idmInputs: ["Site survey data", "Updated baselines", "Constraints from feasibility"],
    outputs: ["Design package", "Validated assumptions", "Implementation scope"],
    guardrails: [
      "Platform supports, never replaces, design authority",
      "Site validation required for every assumption",
    ],
  },
  {
    id: "constructability",
    name: "Constructability",
    icon: HardHat,
    status: "planned",
    oneLiner: "Implementation planning with field input.",
    platformRole:
      "Captures sequencing, dependencies, and field notes against the asset model so nothing is re-keyed.",
    humanRole:
      "Project teams and field engineers validate buildability, safety, and downtime windows.",
    idmInputs: ["Asset model", "Site access constraints", "Outage windows"],
    outputs: ["Build plan", "Risk-adjusted schedule", "Field-validated scope"],
    guardrails: [
      "Field expertise leads; platform records and shares",
      "Change control documented in one place",
    ],
  },
  {
    id: "implementation",
    name: "Implementation",
    icon: Activity,
    status: "planned",
    oneLiner: "Execute, instrument, and track against the same data.",
    platformRole:
      "Tracks task status, captures as-built changes, and instruments the measure against IDM telemetry.",
    humanRole:
      "Delivery teams execute; Bureau watches data and flags drift early.",
    idmInputs: ["Live telemetry", "Work orders", "As-built changes"],
    outputs: ["Implementation log", "As-built baseline", "Live performance feed"],
    guardrails: [
      "Single source of truth for what was actually built",
      "No silent scope drift",
    ],
  },
  {
    id: "verification",
    name: "Verification",
    icon: ShieldCheck,
    status: "in-build",
    oneLiner: "Closed-loop validation using the same data that detected it.",
    platformRole:
      "Compares post-implementation performance to baseline using the same IDM data and explainable KPIs.",
    humanRole:
      "Bureau and Consulting interpret results, translate risk, and feed lessons back into the Detect stage.",
    idmInputs: ["Post-install telemetry", "Baseline", "Weather / occupancy normalization"],
    outputs: ["M&V report", "Validated savings", "Lessons fed back to Detect"],
    guardrails: [
      "Same data in, same data out · no parallel spreadsheets",
      "Engineering sign-off on every verified claim",
    ],
  },
];

const globalGuardrails = [
  "ECMs are a lifecycle, not a static output",
  "Engineering judgment and site validation required at every stage",
  "Platform structures and carries the lifecycle · it never replaces audits or shortcuts proposals",
  "Same IDM data flows end-to-end · detection, design, and verification stay reconciled",
];

export const ECMLifecycleTimeline = () => {
  const [activeId, setActiveId] = useState<string>(stages[0].id);
  const active = stages.find((s) => s.id === activeId) ?? stages[0];
  const ActiveIcon = active.icon;

  return (
    <div className="px-4 sm:px-6 py-4 space-y-6">
      {/* Intro */}
      <div className="max-w-3xl">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-primary" />
          <h4 className="text-sm font-semibold text-foreground">
            ECMs as a Lifecycle, not a Static Output
          </h4>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          The platform structures and carries every ECM from detection through verification on the same RA+ spine. Click any stage to see what RA+ does, what experts do, and what flows in and out.
        </p>
      </div>

      {/* Timeline rail */}
      <div className="relative">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-border/60 hidden md:block" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 relative">
          {stages.map((s, i) => {
            const Icon = s.icon;
            const isActive = s.id === activeId;
            return (
              <button
                key={s.id}
                onClick={() => setActiveId(s.id)}
                className={`group relative flex flex-col items-center gap-2 p-3 rounded-lg border transition-all ${
                  isActive
                    ? "bg-primary/10 border-primary/40 shadow-[0_0_0_1px_hsl(var(--primary)/0.4)]"
                    : "bg-card border-border/50 hover:border-primary/30 hover:bg-muted/40"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground group-hover:text-primary"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-semibold text-foreground text-center leading-tight">
                  {s.name}
                </div>
                <span
                  className={`text-[9px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded-full border ${stageStatusStyles[s.status]}`}
                >
                  {stageStatusLabel[s.status]}
                </span>
                <span className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-background border border-border text-[10px] font-mono text-muted-foreground flex items-center justify-center">
                  {i + 1}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active stage detail */}
      <Card className="bg-card border-primary/20">
        <CardContent className="p-5 space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <ActiveIcon className="w-5 h-5 text-primary" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h5 className="text-base font-semibold text-foreground">
                  {active.name}
                </h5>
                <span
                  className={`text-[10px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded-full border ${stageStatusStyles[active.status]}`}
                >
                  {stageStatusLabel[active.status]}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                {active.oneLiner}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-muted/40 rounded-lg p-3 border-l-2 border-primary">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <div className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                  RA+ does
                </div>
              </div>
              <p className="text-xs text-foreground leading-relaxed">
                {active.platformRole}
              </p>
            </div>
            <div className="bg-muted/40 rounded-lg p-3 border-l-2 border-amber-500/60">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Users className="w-3.5 h-3.5 text-amber-400" />
                <div className="text-[11px] font-semibold uppercase tracking-wider text-amber-400">
                  Experts do
                </div>
              </div>
              <p className="text-xs text-foreground leading-relaxed">
                {active.humanRole}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-card border border-border/60 rounded-lg p-3">
              <div className="flex items-center gap-1.5 mb-2">
                <Database className="w-3.5 h-3.5 text-primary" />
                <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  IDM inputs
                </div>
              </div>
              <ul className="space-y-1">
                {active.idmInputs.map((x) => (
                  <li key={x} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                    <ArrowRight className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-border/60 rounded-lg p-3">
              <div className="flex items-center gap-1.5 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Outputs
                </div>
              </div>
              <ul className="space-y-1">
                {active.outputs.map((x) => (
                  <li key={x} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                    <ArrowRight className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-orange-500/5 border border-orange-500/20 rounded-lg p-3">
            <div className="flex items-center gap-1.5 mb-2">
              <Shield className="w-3.5 h-3.5 text-orange-400" />
              <div className="text-[11px] font-semibold uppercase tracking-wider text-orange-400">
                Stage guardrails
              </div>
            </div>
            <ul className="space-y-1">
              {active.guardrails.map((g) => (
                <li key={g} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                  <ArrowRight className="w-3 h-3 text-orange-400 shrink-0 mt-0.5" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Global guardrails */}
      <Card className="bg-orange-500/5 border-orange-500/20">
        <CardContent className="p-4">
          <div className="flex items-center gap-1.5 mb-2">
            <Shield className="w-4 h-4 text-orange-400" />
            <h5 className="text-sm font-semibold text-foreground">
              Lifecycle guardrails
            </h5>
          </div>
          <ul className="grid sm:grid-cols-2 gap-2">
            {globalGuardrails.map((g) => (
              <li key={g} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                <ArrowRight className="w-3 h-3 text-orange-400 shrink-0 mt-0.5" />
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};
