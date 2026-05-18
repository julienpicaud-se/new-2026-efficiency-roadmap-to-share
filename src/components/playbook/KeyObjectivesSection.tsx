import { useState } from "react";
import { Target, ChevronDown, Zap, Compass, BookOpen, Layers, Database, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const keyObjectives = [
  {
    id: "O1",
    tag: "Automation",
    tagIcon: Zap,
    title: "Compress ECM audit cycle time with AI co-pilots",
    description:
      "Shift expert auditors from manual scoping to calibration. Agentic assistants draft ROM estimates, stack measures, and surface assumptions so experts focus on judgment.",
    keyResults: [
      "Cut average ECM scoping time from weeks to days",
      "Automate 90%+ of recurring ECM calculations and templating",
      "Free senior auditors to spend most of their time on client-facing judgment",
    ],
  },
  {
    id: "O2",
    tag: "Discovery",
    tagIcon: Compass,
    title: "Surface efficiency opportunities directly inside RA+",
    description:
      "Make early, credible efficiency advice visible in-product so customers see what is possible without waiting for a full audit cycle.",
    keyResults: [
      "Ship in-product ECM recommendations with transparent assumptions and confidence levels",
      "Create measurable pull from RA+ usage into advanced audit projects",
      "Establish early advisory as a recurring touchpoint, not a one-off engagement",
    ],
  },
  {
    id: "O3",
    tag: "Knowledge",
    tagIcon: BookOpen,
    title: "Turn legacy audit IP into a reusable knowledge engine",
    description:
      "Ingest, structure, and govern decades of audit deliverables so every future recommendation learns from past projects and M&V outcomes.",
    keyResults: [
      "Extract structured ECM evidence from the historical audit library",
      "Stand up a probabilistic estimator that improves with every new audit",
      "Feed M&V results back into the engine to sharpen future recommendations",
    ],
  },
  {
    id: "O4",
    tag: "Platform",
    tagIcon: Layers,
    title: "Anchor efficiency on a unified building data spine",
    description:
      "One resolved view of site, asset, meter, and tariff data shared across discovery, scoping, proposals, and in-product guidance, with no swivel-chair handoffs.",
    keyResults: [
      "Reuse building context across audits, quotes, and follow-ups without re-keying",
      "Eliminate manual reconciliation between RA+, audit tools, and deliverables",
      "Expose APIs that let every service line draw from the same building record",
    ],
  },
  {
    id: "O5",
    tag: "IDM 2.0",
    tagIcon: Database,
    title: "Re-platform IDM as the agent-ready data spine inside RA+",
    description:
      "Move IDM from a standalone module to a native RA+ capability that blends interval telemetry with the field and consultancy work product only Schneider can bring, exposed to Sera and downstream agents.",
    keyResults: [
      "Retire the IDM 1.0 module hop and run interval data natively inside RA+",
      "Expose an enriched, agent-ready context layer (telemetry + asset + ECM + audit IP) to Sera",
      "Cover Give Me, Help Me, and Do It For Me engagement profiles on the same IDM-powered platform",
      "Align IDM 2.0 MVP with SE Corporate as design partner ahead of RA+ go-live",
    ],
  },
  {
    id: "O6",
    tag: "Continuous Discovery",
    tagIcon: Activity,
    title: "Turn interval data into always-on efficiency discovery",
    description:
      "Use the IDM 2.0 spine so RA+ continuously surfaces staging, compressed air, and control ECMs the consultancy team would normally find manually, between formal audit cycles.",
    keyResults: [
      "Stand up always-on ECM detection on top of IDM 2.0 interval data",
      "Lift RA+ stickiness with continuous, in-product efficiency guidance between engagements",
      "Generate qualified pull from RA+ discovery into deeper expert audit work",
    ],
  },
];

export const KeyObjectivesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggle = (id: string) =>
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  return (
    <section
      id="key-objectives"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Goals & Key Results
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Key Objectives
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Customer-outcome focused objectives that frame the Beyond ECM Library transformation
          </p>
        </div>

        <div className="space-y-4 max-w-5xl mx-auto">
          {keyObjectives.map((obj) => {
            const TagIcon = obj.tagIcon;
            const isOpen = openItems.includes(obj.id);
            return (
              <Collapsible key={obj.id} open={isOpen} onOpenChange={() => toggle(obj.id)}>
                <div className="rounded-xl bg-muted/30 border border-border/50 overflow-hidden">
                  <CollapsibleTrigger className="w-full">
                    <div className="flex items-center justify-between p-5 sm:p-6 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-4 text-left">
                        <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center shrink-0">
                          <Target className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-primary font-semibold text-sm">{obj.id}</span>
                            <Badge
                              variant="outline"
                              className="bg-primary/10 text-primary border-primary/30 text-xs"
                            >
                              <TagIcon className="w-3 h-3 mr-1" />
                              {obj.tag}
                            </Badge>
                          </div>
                          <h3 className="text-base sm:text-lg font-semibold text-foreground">
                            {obj.title}
                          </h3>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-muted-foreground transition-transform duration-200 shrink-0 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-5 sm:px-6 pb-6 space-y-4 border-t border-border/30 pt-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {obj.description}
                      </p>
                      <div>
                        <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                          Key Results
                        </h4>
                        <ul className="space-y-2">
                          {obj.keyResults.map((kr, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 bg-muted/40 rounded-lg border border-border/30 p-3"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              <p className="text-sm text-foreground leading-relaxed">{kr}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            );
          })}
        </div>
      </div>
    </section>
  );
};
