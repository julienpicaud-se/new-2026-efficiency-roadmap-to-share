import { Card, CardContent } from "@/components/ui/card";
import { productScope } from "@/data/playbook-data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Boxes, Check } from "lucide-react";

export const ProductScopeSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="product-scope"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 sm:py-24 bg-muted/20 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="mb-10 max-w-3xl">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
            <Boxes className="w-4 h-4" />
            Product Scope
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Energy Efficiency vs Asset Planning
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{productScope.intro}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-8">
          {productScope.products.map((p, idx) => (
            <Card key={p.name} className={idx === 0 ? "border-primary/40 bg-primary/5" : "border-border/50 bg-card"}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-foreground">{p.name}</h3>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border ${idx === 0 ? "bg-primary/15 text-primary border-primary/30" : "bg-muted text-muted-foreground border-border/50"}`}>
                    {p.tag}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.summary}</p>
                <ul className="space-y-1.5">
                  {p.capabilities.map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-border/60 bg-card mb-4">
          <CardContent className="p-5">
            <h4 className="font-semibold text-foreground mb-3">Why Energy Efficiency First</h4>
            <ul className="space-y-2">
              {productScope.whyEEFirst.map((r, i) => (
                <li key={i} className="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/40">{r}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <p className="text-sm text-foreground italic max-w-3xl">{productScope.boundary}</p>
      </div>
    </section>
  );
};
