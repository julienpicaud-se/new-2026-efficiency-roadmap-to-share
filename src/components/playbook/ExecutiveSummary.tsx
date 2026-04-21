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
} from "lucide-react";

type Block = {
  id: string;
  label: string;
  title: string;
  icon: React.ElementType;
  body: string;
};

const narrativeBlocks: Block[] = [
  {
    id: "whats-happening",
    label: "What's Happening",
    title: "ECM expertise is locked inside a small, regional team",
    icon: Activity,
    body:
      "Our Energy & Carbon Management offering depends on a handful of senior experts who manually build baselines, run quarterly reviews, and assemble plans across spreadsheets and disconnected tools. Coverage is uneven across regions, turnaround is slow, and the value of the work rarely surfaces inside RA+ where customers already engage with us every day.",
  },
  {
    id: "true-problem",
    label: "The True Problem",
    title: "It is not the methodology, it is the lack of a productized library",
    icon: AlertTriangle,
    body:
      "ECM logic, opportunity catalogs, and review cadences exist, but they live in expert heads and bespoke decks. Without a shared library inside RA+, every engagement starts from zero, regional playbooks diverge, and we cannot scale beyond the senior bench. The blocker is productization and a single source of truth, not capability.",
  },
  {
    id: "north-star",
    label: "Our North Star",
    title: "Beyond the ECM Library, ECM as a native RA+ capability",
    icon: Compass,
    body:
      "We will turn ECM into a productized layer of RA+: a curated opportunity library, baseline and savings logic exposed as services, governance views, and consultant-facing workflows that converge regional journeys onto one platform. Customers see continuous insight; experts spend their time on judgment, not assembly.",
  },
  {
    id: "way-to-win",
    label: "A Pragmatic Way to Win",
    title: "Productize what already works, then expand",
    icon: Wrench,
    body:
      "Start with the existing ECM opportunity library and codify it inside RA+, wire it to current ingestion and reporting, and pilot with regions where journeys are closest to convergence. Avoid greenfield rebuilds, reuse existing tools where they already win, and add capability in phases rather than a single big-bang release.",
  },
  {
    id: "economic-impact",
    label: "Economic Impact",
    title: "Free up senior capacity and unlock recurring upside",
    icon: TrendingUp,
    body:
      "Within the first phases of MVP, we expect material productivity gains for the expert bench, faster baseline and plan turnaround for customers, and a credible upsell motion that turns ECM from a service line into a recurring RA+ capability. The financial case is built on capacity unlock and broader RA+ adoption, not new pricing.",
  },
  {
    id: "strategic-upside",
    label: "Strategic Upside",
    title: "ECM becomes a differentiator for the entire RA+ platform",
    icon: Rocket,
    body:
      "Once ECM is native to RA+, the same library powers consultant workflows, customer-facing dashboards, and future modules such as Carbon Performance and ingestion-driven advisory. It moves Schneider from a project-based ECM provider to a platform that compounds value with every new customer and dataset.",
  },
  {
    id: "risks",
    label: "Risks & Mitigations",
    title: "Manage scope, regional divergence, and adoption",
    icon: ShieldAlert,
    body:
      "Key risks: scope creep into adjacent commercial topics, regional teams retaining bespoke flows, and slow consultant adoption. Mitigations: hard guardrails on what is in and out of scope, a convergence plan per region with clear sunset of legacy tooling, and embedded enablement for consultants from day one.",
  },
  {
    id: "what-we-need",
    label: "What We Need Now",
    title: "Decisions to unblock the next phase",
    icon: ListChecks,
    body:
      "Endorse the Beyond ECM Library scope and guardrails, confirm the regions for the first convergence wave, and align on the phased roadmap and success metrics in the appendix. With those decisions, we can move from playbook to delivery without rework.",
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
              A comprehensive view of the Beyond ECM Library opportunity for executive stakeholders.
            </p>
          </div>

          {/* Narrative blocks */}
          <div className="grid md:grid-cols-2 gap-5">
            {narrativeBlocks.map((block) => {
              const Icon = block.icon;
              const isHighlight =
                block.id === "north-star" || block.id === "what-we-need";
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
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
