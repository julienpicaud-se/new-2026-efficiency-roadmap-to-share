import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

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
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return glossaryTerms;
    return glossaryTerms
      .map((group) => ({
        ...group,
        terms: group.terms.filter(
          (t) =>
            t.abbr.toLowerCase().includes(q) ||
            t.full.toLowerCase().includes(q)
        ),
      }))
      .filter((group) => group.terms.length > 0);
  }, [query]);

  const totalMatches = filtered.reduce((sum, g) => sum + g.terms.length, 0);

  return (
    <section id="glossary" className="px-4 sm:px-6 py-6">
      <div className="relative mb-6 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search terms (e.g. ECM, IPMVP, EaaS)..."
          className="pl-9"
          aria-label="Search glossary"
        />
      </div>

      {totalMatches === 0 ? (
        <p className="text-sm text-muted-foreground italic">
          No terms match "{query}".
        </p>
      ) : (
        <div className="space-y-8">
          {filtered.map((group) => (
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
                    <span className="text-muted-foreground">·</span>
                    <span className="text-muted-foreground">{term.full}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
