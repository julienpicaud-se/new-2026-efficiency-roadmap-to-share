import { Card, CardContent } from "@/components/ui/card";
import { jobsToBeDone } from "@/data/playbook-data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, Sparkles } from "lucide-react";

export const JobsToBeDoneSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="jobs-to-be-done"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 sm:py-24 bg-muted/20 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="mb-10 max-w-3xl">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
            <Target className="w-4 h-4" />
            Jobs to Be Done
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Users Hire Energy Efficiency to Do
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{jobsToBeDone.intro}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-3 mb-8">
          {jobsToBeDone.jobs.map((j) => (
            <Card key={j.num} className="bg-card border-border/50">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                    {j.num}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground text-sm">{j.title}</h3>
                      <span className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${j.type === "Operational" ? "bg-emerald-500/10 text-emerald-400" : "bg-blue-500/10 text-blue-400"}`}>
                        {j.type}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{j.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-primary/40 bg-primary/5">
          <CardContent className="p-5 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-foreground leading-relaxed">
              <span className="font-semibold text-primary">Where ECMs fit. </span>
              {jobsToBeDone.ecmInsight}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
