import { Card, CardContent } from "@/components/ui/card";
import {
  FileCheck,
  Wrench,
  Boxes,
  Eye,
  Database,
  ShieldCheck,
  Users,
  ShieldAlert,
  CheckCircle2,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const outOfScopeItems = [
  {
    icon: FileCheck,
    title: "Contractual Guarantees",
    description: "Performance guarantees and contractual commitments require separate validation",
  },
  {
    icon: Wrench,
    title: "Detailed Engineering",
    description: "Detailed engineering design without expert validation stays outside scope",
  },
  {
    icon: Boxes,
    title: "Asset Planning",
    description: "Baseline modeling, M&V workflows, and capital planning are covered in a separate Asset Planning discovery, not in this playbook",
  },
];

const guardrailCategories = [
  {
    icon: Eye,
    title: "Transparency & Scope",
    points: [
      "Label advice as guidance, not a commercial commitment",
      "Show savings as ranges with confidence levels and data freshness",
      "Display key assumptions and any data gaps",
    ],
  },
  {
    icon: Database,
    title: "Data Quality & Applicability",
    points: [
      "Enforce minimum data checks before showing estimates",
      "Display applicability rules, blockers, and prerequisites",
      "Filter recommendations by geography, segment, and asset tags",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Risk & Compliance",
    points: [
      "No auto-suggest for measures requiring licensed engineering sign-off",
      "Maintain audit trails of advice shown and inputs used",
      "Link to standards and incentives without legal interpretations",
    ],
  },
  {
    icon: Users,
    title: "User Experience & Escalation",
    points: [
      "Offer a path to request expert help from any advice card",
      "Provide rationale snippets and similar-site evidence",
      "Allow users to reject or snooze recommendations",
    ],
  },
];

export const BoundariesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="boundaries"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-muted/30 section-fade ${isVisible ? "visible" : ""}`}
    >
      {/* Legacy anchors so existing nav links keep working */}
      <span id="out-of-scope" className="block -mt-24 pt-24" aria-hidden />
      <span id="guardrails" className="block -mt-24 pt-24" aria-hidden />

      <div className="container px-4">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Boundaries & Operating Rules
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Where We Stop, How We Operate
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            The boundary list keeps scope honest. The operating rules keep customer-facing advice trustworthy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Out of Scope column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                <ShieldAlert className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider block">Boundary List</span>
                <h3 className="text-xl font-bold text-foreground">Out of Scope</h3>
              </div>
            </div>
            <div className="space-y-4">
              {outOfScopeItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Card key={i} className="bg-card border-orange-500/20 hover:border-orange-500/40 transition-colors">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-orange-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Guardrails column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="text-primary text-xs font-semibold uppercase tracking-wider block">Operating Rules</span>
                <h3 className="text-xl font-bold text-foreground">Guardrails</h3>
              </div>
            </div>
            <div className="space-y-4">
              {guardrailCategories.map((cat, i) => {
                const Icon = cat.icon;
                return (
                  <Card key={i} className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-2">{cat.title}</h4>
                          <ul className="space-y-1.5">
                            {cat.points.map((p, j) => (
                              <li key={j} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span className="text-sm text-muted-foreground">{p}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
