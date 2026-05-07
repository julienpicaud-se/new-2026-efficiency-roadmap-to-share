import { Card, CardContent } from "@/components/ui/card";
import {
  FileCheck,
  Wrench,
  ShieldAlert,
  Boxes,
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

export const OutOfScopeSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="out-of-scope"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-orange-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
              Boundaries
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
              What Stays Out of Scope
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
              To protect credibility and enable scale, these areas remain outside the Efficiency Transformation scope
            </p>
          </div>

          {/* Out of Scope Grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {outOfScopeItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="bg-card border-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Why This Matters */}
          <Card className="border-border/50 bg-muted/30">
            <CardContent className="p-6 text-center">
              <ShieldAlert className="w-8 h-8 text-orange-400 mx-auto mb-3" />
              <p className="text-foreground">
                These boundaries ensure that efficiency advisory builds trust, not risk. 
                Expert escalation paths connect customers to deeper engagements when needed.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
