import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  PenTool, 
  FileText, 
  Truck, 
  Monitor,
  Users,
  Target,
  TrendingUp,
  Zap
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const journeyStages = [
  {
    id: "sales-discovery",
    stage: "A",
    title: "Sales Discovery & Qualification",
    icon: Search,
    primaryUsers: "Account executives and SDRs with support from solution consultants",
    capabilities: [
      "Opportunity spotting from minimal site facts with data-light ROM ranges and confidence labels",
      "Quick applicability checks based on segment, geography, and asset type",
      "Evidence snippets and case patterns for credibility",
    ],
    value: "Faster qualification, earlier business case, better pipeline quality",
    kpis: ["Qualified pipeline uplift", "Time to first ROM", "Conversion to technical discovery"],
  },
  {
    id: "presales-scoping",
    stage: "B",
    title: "Pre-Sales Scoping & Solution Design",
    icon: PenTool,
    primaryUsers: "Solution architects and sales engineers",
    capabilities: [
      "Parameterized efficiency templates with inputs and default assumptions",
      "Stacking logic for interactions and saturation effects",
      "Sensitivity analysis and scenario comparison",
      "Export to CPQ with aligned assumptions and notes",
    ],
    value: "Consistent scoping, fewer reworks, faster cycle",
    kpis: ["Rework rate", "Quote cycle time", "Alignment score between sales and delivery"],
  },
  {
    id: "proposal-alignment",
    stage: "C",
    title: "Proposal & Commercial Alignment",
    icon: FileText,
    primaryUsers: "Sales, finance reviewers, legal reviewers",
    capabilities: [
      "ROM to quote traceability with an assumption registry",
      "Confidence bands and risk notes per recommendation",
      "Incentive and regulatory linkbacks where relevant",
      "Non-binding language blocks and scope notes",
    ],
    value: "Reduced commercial risk, fewer redlines, higher win probability",
    kpis: ["Redline count", "Discount pressure", "Win rate", "Time to signature"],
  },
  {
    id: "delivery-planning",
    stage: "D",
    title: "Delivery Planning & Execution Handoff",
    icon: Truck,
    primaryUsers: "Delivery managers and field engineers",
    capabilities: [
      "Handoff package with selected opportunity set, inputs, and rationales",
      "Commissioning and M&V placeholders and data needs",
      "Task list templates and dependencies",
    ],
    value: "Smooth handoff, fewer surprises, faster time to value",
    kpis: ["Handoff completeness", "Time to kickoff", "Change order rate"],
  },
  {
    id: "customer-experience",
    stage: "E",
    title: "Customer In-Product Experience",
    icon: Monitor,
    primaryUsers: "Facility managers, sustainability leaders, operators",
    capabilities: [
      "In-product recommendations with impact and effort labels",
      "Next best efficiency suggestions as data evolves",
      "Scenario comparison and prioritization frameworks",
      "Transparent assumptions, DIY inputs, and request help links",
    ],
    value: "Self-service insights that showcase your expertise and create upsell pull for advanced audits",
    kpis: ["Feature adoption", "Actions completed", "Incremental pipeline from in-product prompts", "Realized savings"],
    foundation: "Goal-based guidance in Strategy and a first Building View for bottom-up discovery are the 2026 pillars that enable this experience.",
  },
];

export const ECMCapabilityMapping = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="ecm-mapping"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Capability Framework
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Efficiency Capability Mapping
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Mapping efficiency capabilities to sales, pre-sales, delivery, and customer journeys to improve team productivity, 
            structure deliverables, expose expert advisory for upsell, and centralize client context
          </p>
        </div>

        {/* Journey Stage Timeline */}
        <div className="hidden lg:flex items-center justify-between mb-12 px-8">
          {journeyStages.map((stage, index) => (
            <div key={stage.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {stage.stage}
                </div>
                <span className="text-xs text-muted-foreground mt-2 text-center max-w-[100px]">
                  {stage.title.split(" & ")[0]}
                </span>
              </div>
              {index < journeyStages.length - 1 && (
                <div className="w-16 xl:w-24 h-0.5 bg-gradient-to-r from-primary to-primary/30 mx-2" />
              )}
            </div>
          ))}
        </div>

        {/* Journey Stage Cards */}
        <Accordion type="single" collapsible className="space-y-4">
          {journeyStages.map((stage) => {
            const Icon = stage.icon;
            return (
              <AccordionItem
                key={stage.id}
                value={stage.id}
                className="glass-card border border-border/50 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                      {stage.stage}
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-foreground">{stage.title}</h3>
                      <p className="text-sm text-muted-foreground">{stage.primaryUsers}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid md:grid-cols-2 gap-6 mt-4">
                    {/* Efficiency Capabilities */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-primary" />
                        Efficiency Capabilities
                      </h4>
                      <ul className="space-y-2">
                        {stage.capabilities.map((capability, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Value & KPIs */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Target className="w-4 h-4 text-primary" />
                          Value Delivered
                        </h4>
                        <p className="text-sm text-muted-foreground bg-primary/5 p-3 rounded-lg border border-primary/10">
                          {stage.value}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-primary" />
                          Key Performance Indicators
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {stage.kpis.map((kpi, i) => (
                            <span
                              key={i}
                              className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground border border-border/50"
                            >
                              {kpi}
                            </span>
                          ))}
                        </div>
                      </div>

                      {stage.foundation && (
                        <div className="mt-4 p-3 rounded-lg bg-muted/50 border border-border/50">
                          <p className="text-xs text-muted-foreground italic">
                            <strong className="text-foreground">2026 Foundation:</strong> {stage.foundation}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>

        {/* Summary Card */}
        <Card className="mt-8 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">End-to-End Journey Integration</h3>
                <p className="text-sm text-muted-foreground">
                  This capability mapping ties your ambition to improve auditor productivity, structure deliverables 
                  inside the platform, expose expert advisory for upsell, and centralize client context that 
                  accelerates quotations and assessments across every stage of the customer journey.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
