import { useState } from "react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { ChevronDown, BookOpen } from "lucide-react";

const glossaryTerms = [
  {
    category: "Energy Efficiency domain",
    terms: [
      { abbr: "ECM", full: "Energy Conservation Measure" },
      { abbr: "EE", full: "Energy Efficiency" },
      { abbr: "M&V", full: "Measurement & Verification (IPMVP-aligned savings validation)" },
      { abbr: "IPMVP", full: "International Performance Measurement & Verification Protocol" },
      { abbr: "ROM", full: "Rough Order of Magnitude (early-stage savings/cost estimate)" },
      { abbr: "ROI", full: "Return on Investment" },
      { abbr: "EnPI", full: "Energy Performance Indicator" },
      { abbr: "EUI", full: "Energy Use Intensity (kWh/sqft or kWh/m²)" },
      { abbr: "kWh / MWh / GJ", full: "energy units" },
      { abbr: "HVAC", full: "Heating, Ventilation & Air Conditioning" },
      { abbr: "BAS", full: "Building Automation System" },
    ],
  },
  {
    category: "Service / Commercial models",
    terms: [
      { abbr: "EaaS", full: "Energy as a Service" },
      { abbr: "ESCO", full: "Energy Service Company" },
      { abbr: "EPC", full: "Energy Performance Contract" },
      { abbr: "PPA", full: "Power Purchase Agreement" },
      { abbr: "O&M", full: "Operations & Maintenance" },
    ],
  },
  {
    category: "Product / Delivery",
    terms: [
      { abbr: "VOC", full: "Voice of Customer" },
      { abbr: "JTBD", full: "Jobs To Be Done" },
      { abbr: "OKR", full: "Objectives & Key Results" },
      { abbr: "PoC", full: "Proof of Concept" },
      { abbr: "SLA", full: "Service Level Agreement" },
    ],
  },
];

export const GlossarySection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="glossary" className="py-16 bg-muted/30 border-t border-border/40">
      <div className="container mx-auto px-6 max-w-5xl">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger className="w-full">
            <div className="flex items-center justify-between py-4 group">
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground">Glossary</h2>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </CollapsibleTrigger>

          <CollapsibleContent>
            <div className="pt-6 pb-2 space-y-10">
              {glossaryTerms.map((group) => (
                <div key={group.category}>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                    {group.category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                    {group.terms.map((term) => (
                      <div key={term.abbr} className="flex gap-2 text-sm">
                        <span className="font-semibold text-foreground whitespace-nowrap">
                          {term.abbr}
                        </span>
                        <span className="text-muted-foreground">—</span>
                        <span className="text-muted-foreground">{term.full}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
};
