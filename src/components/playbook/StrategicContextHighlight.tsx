import { Compass, Clock, BookOpen, Layers, Sparkles, Database, Activity } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const kpis = [
  {
    icon: Clock,
    value: "Weeks to Days",
    label: "ECM Scoping Cycle",
    detail: "Compress manual ECM scoping from weeks of expert time to days of guided drafting",
  },
  {
    icon: BookOpen,
    value: "90%+",
    label: "Audit IP Reused",
    detail: "Legacy ECM deliverables reactivated as structured, searchable evidence",
  },
  {
    icon: Database,
    value: "IDM 2.0",
    label: "Interval Data Spine",
    detail: "Re-platformed inside RA+ as the agent-ready context layer that blends telemetry with field and consultancy work product",
  },
  {
    icon: Activity,
    value: "Always-On",
    label: "IDM-Driven Discovery",
    detail: "Interval data continuously surfaces staging, compressed air, and control ECMs without waiting for a full audit",
  },
  {
    icon: Layers,
    value: "1 Spine",
    label: "Unified Building Data",
    detail: "Shared across discovery, scoping, proposals, and in-product guidance",
  },
];


export const StrategicContextHighlight = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="strategic-context-highlight"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 sm:py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 max-w-3xl mx-auto">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 flex items-center justify-center gap-2">
            <Compass className="w-4 h-4" />
            Strategic Context
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Efficiency value is bottlenecked by knowledge and data, not opportunity
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Decades of ECM audit IP sit locked inside slide decks, and interval data sits
            stranded in IDM 1.0 disconnected from the rest of the workflow. RA+ users wait
            for full audit cycles to see what efficiency moves are possible. The leverage
            is in turning that knowledge into a living, in-product engine and re-platforming
            IDM into RA+ as its agent-ready data spine.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {kpis.map((k) => {
            const Icon = k.icon;
            return (
              <div
                key={k.label}
                className="rounded-xl bg-muted/30 border border-border/50 p-6 text-center"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                  {k.value}
                </div>
                <div className="text-sm font-semibold text-foreground mb-2">
                  {k.label}
                </div>
                <p className="text-xs text-muted-foreground leading-snug">
                  {k.detail}
                </p>
              </div>
            );
          })}
        </div>

        <div className="rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 p-6 sm:p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider">
              Our North Star
            </span>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
            Turn decades of ECM audit IP and interval data into a living, in-product
            efficiency engine inside RA+, with IDM 2.0 as the agent-ready spine, so every
            customer sees credible, calibrated efficiency opportunities without waiting for
            a full audit cycle.
          </p>
        </div>
      </div>
    </section>
  );
};
