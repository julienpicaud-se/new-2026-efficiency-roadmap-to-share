import { Card, CardContent } from "@/components/ui/card";
import { appendixPillars, supportingScorecard, capabilityMatrix, intelligenceFlywheel } from "@/data/playbook-data";
import { Layers, TrendingUp, Sparkles, Target, CheckCircle2, Zap, X, Minus, Database, Brain, Settings, Eye, FileText, AlertOctagon, MessageSquare, Building2, BookOpen, Compass, ShieldOff, Lightbulb, BarChart3, ScanText } from "lucide-react";
import { PainInventorySection } from "@/components/playbook/PainInventorySection";
import { VOCEvidenceSection } from "@/components/playbook/VOCEvidenceSection";
import { SECorporateBlueprintSection } from "@/components/playbook/SECorporateBlueprintSection";
import { GlossarySection } from "@/components/playbook/GlossarySection";
import { MaturityLadderSection } from "@/components/playbook/MaturityLadderSection";
import { BoundariesSection } from "@/components/playbook/BoundariesSection";
import { StrategicContextSection } from "@/components/playbook/StrategicContextSection";
import { CompetitiveLandscapeSection } from "@/components/playbook/CompetitiveLandscapeSection";
import { DataRequirementsSection } from "@/components/playbook/DataRequirementsSection";
import { ECMIngestionEngineSection } from "@/components/playbook/ECMIngestionEngineSection";
import { ECMLifecycleTimeline } from "@/components/playbook/ECMLifecycleTimeline";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { InitiativesDomain } from "@/components/playbook/InitiativesDomain";
import { ChevronsDownUp, ChevronsUpDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const pillarIcons: Record<string, React.ElementType> = {
  "Productivity Gains": Layers,
  "Upsell Engine": TrendingUp,
  "Recurring RA+ Revenue": Sparkles,
  Layers: Layers,
  TrendingUp: TrendingUp,
  Sparkles: Sparkles,
};

const flywheelIconMap: Record<string, React.ElementType> = {
  Database,
  Brain,
  Settings,
  Eye,
  FileText,
  Zap,
};

const StatusIcon = ({ status }: { status: string }) => {
  if (status === "done") return <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />;
  if (status === "partial") return <Minus className="w-4 h-4 text-muted-foreground shrink-0" />;
  return <X className="w-4 h-4 text-destructive/60 shrink-0" />;
};

const APPENDIX_SECTIONS = [
  "maturity-ladder",
  "boundaries",
  "strategic-context",
  "competitive-landscape",
  "data-requirements",
  "ecm-ingestion-engine",
  "ecm-lifecycle",
  "se-corporate-blueprint",
  "pain-inventory",
  "voc-evidence",
  "initiatives-by-domain",
  "strategy-flywheel",
  "capability-matrix",
  "value-pillar-deep-dive",
  "supporting-scorecard",
  "glossary",
];

export const AppendixSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [openSections, setOpenSections] = useState<string[]>([]);
  const allOpen = openSections.length === APPENDIX_SECTIONS.length;
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const itemsRef = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport (within trigger zone)
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          const id = visible[0].target.getAttribute("data-section");
          if (id) setActiveSection(id);
        }
      },
      {
        // Trigger band: top 20% to 60% of viewport
        rootMargin: "-20% 0px -40% 0px",
        threshold: 0,
      }
    );

    itemsRef.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Listen for deep-link requests from navigation
  useEffect(() => {
    const handler = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      if (!id || !APPENDIX_SECTIONS.includes(id)) return;
      setOpenSections((prev) => (prev.includes(id) ? prev : [...prev, id]));
      // Wait for accordion to expand, then scroll
      setTimeout(() => {
        const el = itemsRef.current.get(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: "smooth" });
          setActiveSection(id);
        }
      }, 60);
    };
    window.addEventListener("open-appendix-section", handler as EventListener);
    return () =>
      window.removeEventListener("open-appendix-section", handler as EventListener);
  }, []);

  const setItemRef = (id: string) => (el: HTMLDivElement | null) => {
    if (el) itemsRef.current.set(id, el);
    else itemsRef.current.delete(id);
  };

  const itemClass = (id: string) =>
    `bg-card rounded-xl border overflow-hidden transition-all duration-300 ${
      activeSection === id
        ? "border-primary/60 shadow-[0_0_0_1px_hsl(var(--primary)/0.4),0_8px_24px_-12px_hsl(var(--primary)/0.4)] bg-primary/[0.03]"
        : "border-border/50"
    }`;

  return (
    <section
      id="appendix"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-muted/30 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Appendix
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            Efficiency Transformation Details
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mt-4">
            Deep dive into the operating model, capability evolution, quarterly plans, and supporting metrics.
          </p>
        </div>

        {/* Expand / Collapse all controls */}
        <div className="flex justify-center sm:justify-end mb-4 gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setOpenSections(allOpen ? [] : [...APPENDIX_SECTIONS])
            }
            className="gap-2"
          >
            {allOpen ? (
              <>
                <ChevronsDownUp className="w-4 h-4" />
                Collapse all
              </>
            ) : (
              <>
                <ChevronsUpDown className="w-4 h-4" />
                Expand all
              </>
            )}
          </Button>
        </div>

        <Accordion
          type="multiple"
          value={openSections}
          onValueChange={setOpenSections}
          className="space-y-4"
        >

        {/* ============ Maturity Ladder ============ */}
          <AccordionItem
            value="maturity-ladder"
            ref={setItemRef("maturity-ladder")}
            data-section="maturity-ladder"
            className={itemClass("maturity-ladder")}
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/30">
              <div className="text-left">
                <span className="text-primary text-xs font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  Customer Maturity Ladder
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  Meet Customers Where They Are, Pull Them Up
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-2 pb-2">
              <MaturityLadderSection />
            </AccordionContent>
          </AccordionItem>

        {/* ============ Boundaries ============ */}
          <AccordionItem
            value="boundaries"
            ref={setItemRef("boundaries")}
            data-section="boundaries"
            className={itemClass("boundaries")}
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/30">
              <div className="text-left">
                <span className="text-primary text-xs font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <ShieldOff className="w-3.5 h-3.5" />
                  Guardrails
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  Where We Stop, How We Operate
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-2 pb-2">
              <BoundariesSection />
            </AccordionContent>
          </AccordionItem>

        {/* ============ Strategic Context ============ */}
          <AccordionItem
            value="strategic-context"
            ref={setItemRef("strategic-context")}
            data-section="strategic-context"
            className={itemClass("strategic-context")}
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/30">
              <div className="text-left">
                <span className="text-primary text-xs font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5" />
                  Strategic Context
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  Why Now, Why This Way
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-2 pb-2">
              <StrategicContextSection />
            </AccordionContent>
          </AccordionItem>

        {/* ============ Competitive Landscape ============ */}
          <AccordionItem
            value="competitive-landscape"
            ref={setItemRef("competitive-landscape")}
            data-section="competitive-landscape"
            className={itemClass("competitive-landscape")}
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/30">
              <div className="text-left">
                <span className="text-primary text-xs font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5" />
                  Competitive Landscape
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  Efficiency Technology Landscape
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-2 pb-2">
              <CompetitiveLandscapeSection />
            </AccordionContent>
          </AccordionItem>

        {/* ============ Data Requirements ============ */}
          <AccordionItem
            value="data-requirements"
            ref={setItemRef("data-requirements")}
            data-section="data-requirements"
            className={itemClass("data-requirements")}
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/30">
              <div className="text-left">
                <span className="text-primary text-xs font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5" />
                  Data Foundation
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  Data Required for Efficiency Capabilities
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-2 pb-2">
              <DataRequirementsSection />
            </AccordionContent>
          </AccordionItem>

        {/* ============ ECM Ingestion Engine ============ */}
          <AccordionItem
            value="ecm-ingestion-engine"
            ref={setItemRef("ecm-ingestion-engine")}
            data-section="ecm-ingestion-engine"
            className={itemClass("ecm-ingestion-engine")}
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/30">
              <div className="text-left">
                <span className="text-primary text-xs font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <ScanText className="w-3.5 h-3.5" />
                  Knowledge Engine
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  Efficiency Knowledge Engine
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-2 pb-2">
              <ECMIngestionEngineSection />
            </AccordionContent>
          </AccordionItem>





          <AccordionItem
            value="se-corporate-blueprint"
            ref={setItemRef("se-corporate-blueprint")}
            data-section="se-corporate-blueprint"
            className={itemClass("se-corporate-blueprint")}
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/30">
              <div className="text-left">
                <span className="text-primary text-xs font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  RA Classic IDM Client
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  SE Corporate Proof of Concept
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-2 pb-2">
              <SECorporateBlueprintSection />
            </AccordionContent>
          </AccordionItem>

        {/* ============ Pain Inventory ============ */}
          <AccordionItem
            value="pain-inventory"
            ref={setItemRef("pain-inventory")}
            data-section="pain-inventory"
            className={itemClass("pain-inventory")}
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/30">
              <div className="text-left">
                <span className="text-destructive text-xs font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <AlertOctagon className="w-3.5 h-3.5" />
                  RA Classic Pain Inventory
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  What the Efficiency Transformation Eliminates
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-2 pb-2">
              <PainInventorySection />
            </AccordionContent>
          </AccordionItem>

        {/* ============ VOC Evidence ============ */}
          <AccordionItem
            value="voc-evidence"
            ref={setItemRef("voc-evidence")}
            data-section="voc-evidence"
            className={itemClass("voc-evidence")}
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/30">
              <div className="text-left">
                <span className="text-primary text-xs font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5" />
                  VOC Validation
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  Customer Evidence
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-2 pb-2">
              <VOCEvidenceSection />
            </AccordionContent>
          </AccordionItem>

        {/* ============ Initiatives by Domain ============ */}
          <AccordionItem
            value="initiatives-by-domain"
            ref={setItemRef("initiatives-by-domain")}
            data-section="initiatives-by-domain"
            className={itemClass("initiatives-by-domain")}
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/30">
              <div className="text-left">
                <span className="text-primary text-xs font-semibold uppercase tracking-wider block mb-1">
                  Domain Reference
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  Initiatives by Domain
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <p className="text-sm text-muted-foreground max-w-3xl mb-6">
                Detailed view of key initiatives organized by product domain. Click on any domain to explore the full roadmap.
              </p>
              <InitiativesDomain embedded />
            </AccordionContent>
          </AccordionItem>

        {/* ============ Strategy-to-Improvement Flywheel ============ */}
          <AccordionItem
            value="strategy-flywheel"
            ref={setItemRef("strategy-flywheel")}
            data-section="strategy-flywheel"
            className={itemClass("strategy-flywheel")}
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/30">
              <div className="text-left">
                <span className="text-primary text-xs font-semibold uppercase tracking-wider block mb-1">
                  Operating Model
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  {intelligenceFlywheel.title}
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <p className="text-sm text-muted-foreground max-w-3xl mb-6">
                {intelligenceFlywheel.subtitle}
              </p>

              <div className="grid lg:grid-cols-[1fr_1.4fr] gap-6 mb-6">
                <Card className="bg-card border-border/50">
                  <CardContent className="p-5">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Database className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {intelligenceFlywheel.veeExplainer.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {intelligenceFlywheel.veeExplainer.description}
                    </p>
                    <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {intelligenceFlywheel.veeExplainer.outcome}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid sm:grid-cols-2 gap-3">
                  {intelligenceFlywheel.stages.map((stage, i) => {
                    const Icon = flywheelIconMap[stage.icon] || Settings;
                    return (
                      <Card key={stage.name} className="bg-primary/5 border-primary/20">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                              <Icon className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                                Step {String(i + 1).padStart(2, "0")}
                              </div>
                              <h4 className="text-sm font-semibold text-foreground">
                                {stage.name}
                              </h4>
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {stage.description}
                          </p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-5 text-center">
                  <p className="text-sm sm:text-base text-foreground italic">
                    "{intelligenceFlywheel.keyInsight}"
                  </p>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>

        {/* ============ Capability Matrix ============ */}
          <AccordionItem
            value="capability-matrix"
            ref={setItemRef("capability-matrix")}
            data-section="capability-matrix"
            className={itemClass("capability-matrix")}
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/30">
              <div className="text-left">
                <span className="text-primary text-xs font-semibold uppercase tracking-wider block mb-1">
                  Capability Evolution
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  Opportunity × Phase Matrix
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <p className="text-sm text-muted-foreground max-w-3xl mb-6">
                How each capability evolves across delivery phases, from foundational database work to the full EE product.
              </p>

              {/* Desktop table */}
              <div className="hidden lg:block overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left p-3 text-muted-foreground font-semibold w-[60px]">#</th>
                  <th className="text-left p-3 text-muted-foreground font-semibold w-[220px]">Opportunity / Problem</th>
                  {capabilityMatrix.phases.map((phase) => (
                    <th key={phase} className="text-left p-3 text-muted-foreground font-semibold text-xs">{phase}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {capabilityMatrix.capabilities.map((cap) => (
                  <tr key={cap.id} className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                    <td className="p-3 text-muted-foreground text-xs font-mono">{cap.id}</td>
                    <td className="p-3 text-foreground text-xs font-medium">{cap.opportunity}</td>
                    {cap.statuses.map((s, i) => (
                      <td key={i} className="p-3">
                        <div className="flex items-start gap-1.5">
                          <StatusIcon status={s.status} />
                          {s.note && <span className="text-xs text-muted-foreground leading-tight">{s.note}</span>}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
              </div>

              {/* Mobile cards */}
              <div className="lg:hidden space-y-4">
            <Accordion type="single" collapsible className="space-y-3">
              {capabilityMatrix.capabilities.map((cap) => (
                <AccordionItem
                  key={cap.id}
                  value={String(cap.id)}
                  className="bg-muted/20 rounded-lg border border-border/50 overflow-hidden"
                >
                  <AccordionTrigger className="px-4 py-3 hover:no-underline text-left">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-muted-foreground w-6">{cap.id}</span>
                      <span className="text-sm font-medium text-foreground">{cap.opportunity}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <div className="space-y-2 mt-2">
                      {capabilityMatrix.phases.map((phase, i) => (
                        <div key={phase} className="flex items-start gap-2 bg-card rounded-lg p-2.5">
                          <StatusIcon status={cap.statuses[i].status} />
                          <div className="flex-1 min-w-0">
                            <span className="text-xs font-semibold text-muted-foreground block mb-0.5">{phase}</span>
                            {cap.statuses[i].note && (
                              <span className="text-xs text-foreground">{cap.statuses[i].note}</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
              </div>
            </AccordionContent>
          </AccordionItem>

        {/* ============ Value Pillar Deep Dive ============ */}
          <AccordionItem
            value="value-pillar-deep-dive"
            ref={setItemRef("value-pillar-deep-dive")}
            data-section="value-pillar-deep-dive"
            className={itemClass("value-pillar-deep-dive")}
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/30">
              <div className="text-left">
                <span className="text-primary text-xs font-semibold uppercase tracking-wider block mb-1">
                  Value Proof
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  Value Pillar Deep Dive
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <Accordion type="single" collapsible className="space-y-3">
            {appendixPillars.map((pillar) => {
              const Icon = pillarIcons[pillar.pillar] || Layers;
              return (
                <AccordionItem
                  key={pillar.pillar}
                  value={pillar.pillar}
                  className="bg-muted/20 border border-border/50 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-semibold text-lg">{pillar.pillar}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="grid md:grid-cols-2 gap-6 mt-4">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Target className="w-4 h-4 text-primary" />
                          Focus Areas
                        </h4>
                        <ul className="space-y-2">
                          {pillar.focus.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-primary" />
                          Expected Outcomes
                        </h4>
                        <ul className="space-y-2">
                          {pillar.outcomes.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Key Themes</h4>
                        <div className="flex flex-wrap gap-2">
                          {pillar.themes.map((theme, i) => (
                            <span
                              key={i}
                              className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                            >
                              {theme}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Value Proof Metrics</h4>
                        <ul className="space-y-2">
                          {pillar.valueProof.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
              </Accordion>
            </AccordionContent>
          </AccordionItem>

        {/* ============ Supporting Scorecard ============ */}
          <AccordionItem
            value="supporting-scorecard"
            ref={setItemRef("supporting-scorecard")}
            data-section="supporting-scorecard"
            className={itemClass("supporting-scorecard")}
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/30">
              <div className="text-left">
                <span className="text-primary text-xs font-semibold uppercase tracking-wider block mb-1">
                  Tracking Progress
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  Supporting Scorecard
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <p className="text-sm text-muted-foreground max-w-2xl mb-6">
                Key metrics that measure our progress toward the Efficiency Transformation vision.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {supportingScorecard.map((item, index) => (
                  <Card
                    key={item.metric}
                    className="bg-muted/20 border-border/50"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-primary mb-2">{item.metric}</h4>
                      <p className="text-sm text-muted-foreground">{item.definition}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

        {/* ============ Glossary ============ */}
          <AccordionItem
            value="glossary"
            ref={setItemRef("glossary")}
            data-section="glossary"
            className={itemClass("glossary")}
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/30">
              <div className="text-left">
                <span className="text-primary text-xs font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  Reference
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  Glossary
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-2 pb-2">
              <GlossarySection />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};
