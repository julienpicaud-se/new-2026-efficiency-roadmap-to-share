import { Card, CardContent } from "@/components/ui/card";
import { 
  Eye, 
  Database, 
  ShieldCheck, 
  Users,
  Info,
  AlertTriangle,
  CheckCircle2
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const guardrailCategories = [
  {
    id: "transparency",
    icon: Eye,
    title: "Transparency & Scope",
    description: "Clear communication of advice limitations and confidence levels",
    guidelines: [
      "Label advice as guidance, not a commercial commitment",
      "Present savings and cost as ranges with confidence levels and show data freshness",
      "Display the key assumptions and any data gaps",
      "Provide clear scope notes on what is included and what is not",
    ],
  },
  {
    id: "data-quality",
    icon: Database,
    title: "Data Quality & Applicability",
    description: "Ensuring recommendations are based on valid, relevant data",
    guidelines: [
      "Enforce minimum data checks before showing estimates",
      "Display applicability rules and any blockers or prerequisites",
      "Highlight sensitivity to key inputs and allow customers to adjust sliders for core assumptions",
      "Use geography, segment, and asset tags to filter recommendation visibility",
    ],
  },
  {
    id: "risk-compliance",
    icon: ShieldCheck,
    title: "Risk & Compliance",
    description: "Protecting against liability while maintaining expert credibility",
    guidelines: [
      "Do not auto-suggest measures that require licensed engineering sign-off without a clear path to engage experts",
      "Maintain audit trails of advice shown and inputs used",
      "Link to relevant standards and incentives while avoiding legal interpretations",
      "Provide safety notices where physical changes are involved",
    ],
  },
  {
    id: "user-experience",
    icon: Users,
    title: "User Experience & Escalation",
    description: "Enabling self-service while providing clear paths to expert help",
    guidelines: [
      "Offer a path to request expert help from any advice card",
      "Provide rationale snippets and evidence, such as similar site outcomes",
      "Allow users to reject or snooze recommendations to improve relevance",
      "Offer a summary of expected impact and required effort before action",
    ],
  },
];

export const GuardrailsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="guardrails"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-muted/30 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Trust Protection
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Guardrails for Customer-Facing Advice
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            These protect trust while still exposing expert content that can drive upsell for advanced audit projects
          </p>
        </div>

        {/* Info Banner */}
        <Card className="mb-8 border-primary/20 bg-primary/5">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Info className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Why Guardrails Matter</h3>
                <p className="text-sm text-muted-foreground">
                  Customer-facing efficiency advice must balance accessibility with credibility. 
                  These guardrails ensure recommendations build trust while creating clear paths 
                  to deeper expert engagements.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Guardrail Categories */}
        <Accordion type="single" collapsible className="space-y-4">
          {guardrailCategories.map((category) => {
            const Icon = category.icon;
            return (
              <AccordionItem
                key={category.id}
                value={category.id}
                className="glass-card border border-border/50 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-foreground">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="mt-4 space-y-3">
                    {category.guidelines.map((guideline, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">{guideline}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>

        {/* Warning Note */}
        <Card className="mt-8 border-orange-500/20 bg-orange-500/5">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Critical Reminder</h3>
                <p className="text-sm text-muted-foreground">
                  Guardrails are not obstacles. They are enablers. By clearly communicating 
                  limitations and providing escalation paths, we build the trust that converts 
                  self-service exploration into paid expert engagements.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
