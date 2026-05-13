import { Card, CardContent } from "@/components/ui/card";
import { painInventory } from "@/data/playbook-data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AlertOctagon } from "lucide-react";

export const PainInventorySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="pain-inventory"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 sm:py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="mb-10 max-w-3xl">
          <span className="text-destructive text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
            <AlertOctagon className="w-4 h-4" />
            RA Classic Pain Inventory
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What the Efficiency Transformation Eliminates
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{painInventory.intro}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {painInventory.pains.map((p) => (
            <Card key={p.id} className="bg-card border-destructive/20">
              <CardContent className="p-5">
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-xs font-mono font-bold text-destructive bg-destructive/10 border border-destructive/30 px-2 py-0.5 rounded">{p.id}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-destructive/80">{p.severity}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-1.5">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
