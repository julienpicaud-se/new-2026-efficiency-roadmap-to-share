import { Building2, Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const players = [
  {
    name: "ENGIE Impact",
    scope: "GLOBAL",
    note: "Full-service sustainability and efficiency advisory with strong portfolio analytics for enterprise customers.",
  },
  {
    name: "Ameresco",
    scope: "GLOBAL",
    note: "Deep ESCO heritage with performance-contracted ECM delivery across public and commercial portfolios.",
  },
  {
    name: "Johnson Controls (OpenBlue)",
    scope: "GLOBAL",
    note: "OEM-backed building efficiency platform paired with services on installed HVAC and controls base.",
  },
  {
    name: "Siemens (Building X)",
    scope: "GLOBAL",
    note: "Connected building platform with strong analytics, leveraging Siemens controls and OT footprint.",
  },
  {
    name: "Cushman & Wakefield / JLL",
    scope: "GLOBAL",
    note: "FM-led efficiency programs anchored in occupancy, lease, and operations data across managed portfolios.",
  },
  {
    name: "Regional Energy Consultancies",
    scope: "REGIONAL",
    note: "Specialist ECM auditors with deep local code and incentive knowledge, but limited platform leverage.",
  },
];

const whyWeWin = [
  "CoE expertise plus RA+ platform, not a slideware-only consultancy or a data-only tool",
  "IDM as a governed building data spine connecting discovery, scoping, audit, and continuous improvement",
  "Decades of audit IP reactivated as structured, reusable ECM intelligence inside the product",
  "Sera as a unified guided interface across Energy Managers, Data Ops, Sustainability, and Executives",
  "Sequenced for the Energy Manager first, with clear service boundaries between automated and expert work",
  "Continuous efficiency guidance between formal engagements, lifting RA+ stickiness and pull for advanced audits",
];

export const CompetitiveLandscapeSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="competitive-landscape"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 sm:py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 block">
            Competitive Landscape
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Serious Players, Differentiated Position
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Credible competitors exist across advisory, ESCO, and OEM platform plays. Our differentiator is governed CoE expertise paired with RA+ as a living efficiency engine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {players.map((p) => (
            <div
              key={p.name}
              className="rounded-xl border border-border/50 bg-muted/20 p-5"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-muted/60 border border-border/50 flex items-center justify-center shrink-0">
                  <Building2 className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground leading-tight">{p.name}</h3>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                    {p.scope}
                  </span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.note}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Why We Win</h3>
          <p className="italic text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
            Not just a consultancy. Not just a platform. A governed CoE capability inside RA+ that compounds value with every audit, every meter, and every customer.
          </p>
          <div className="grid md:grid-cols-2 gap-x-6 gap-y-3">
            {whyWeWin.map((point) => (
              <div key={point} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-foreground leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
