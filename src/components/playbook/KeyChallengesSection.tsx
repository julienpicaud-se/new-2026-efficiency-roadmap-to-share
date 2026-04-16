import { whyNowColumns } from "@/data/playbook-data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const colorStyles: Record<string, { border: string; bg: string; headerBg: string; text: string }> = {
  amber: {
    border: "border-amber-500/30",
    bg: "bg-amber-500/5",
    headerBg: "bg-amber-500/20",
    text: "text-amber-400",
  },
  orange: {
    border: "border-orange-500/30",
    bg: "bg-orange-500/5",
    headerBg: "bg-orange-500/20",
    text: "text-orange-400",
  },
  emerald: {
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/5",
    headerBg: "bg-emerald-500/20",
    text: "text-emerald-400",
  },
  blue: {
    border: "border-blue-500/30",
    bg: "bg-blue-500/5",
    headerBg: "bg-blue-500/20",
    text: "text-blue-400",
  },
  violet: {
    border: "border-violet-500/30",
    bg: "bg-violet-500/5",
    headerBg: "bg-violet-500/20",
    text: "text-violet-400",
  },
  green: {
    border: "border-green-500/30",
    bg: "bg-green-500/5",
    headerBg: "bg-green-500/20",
    text: "text-green-400",
  },
};

export const KeyChallengesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="key-challenges"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Strategic Context
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Why Now
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            From external pressure and internal confusion to structured value, scale, and measurable impact
          </p>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="lg:hidden overflow-x-auto -mx-4 px-4 pb-4 scrollbar-hide">
          <div className="flex gap-4 min-w-max">
            {whyNowColumns.map((column) => {
              const style = colorStyles[column.color] || colorStyles.amber;
              return (
                <div
                  key={column.id}
                  className={`w-[260px] flex-shrink-0 rounded-xl border ${style.border} ${style.bg} overflow-hidden`}
                >
                  <div className={`px-4 py-2.5 ${style.headerBg} flex items-center justify-between`}>
                    <span className={`font-bold text-sm uppercase tracking-wide ${style.text}`}>
                      {column.title}
                    </span>
                    <span className={`text-xs font-semibold ${style.text}`}>
                      {column.items.length}
                    </span>
                  </div>
                  <div className="p-3 space-y-2.5">
                    {column.items.map((item, i) => (
                      <div
                        key={i}
                        className="bg-card/80 rounded-lg border border-border/30 p-3"
                      >
                        <p className="text-xs text-foreground leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden lg:grid lg:grid-cols-6 gap-4">
          {whyNowColumns.map((column) => {
            const style = colorStyles[column.color] || colorStyles.amber;
            return (
              <div
                key={column.id}
                className={`rounded-xl border ${style.border} ${style.bg} overflow-hidden`}
              >
                <div className={`px-4 py-2.5 ${style.headerBg} flex items-center justify-between`}>
                  <span className={`font-bold text-sm uppercase tracking-wide ${style.text}`}>
                    {column.title}
                  </span>
                  <span className={`text-xs font-semibold ${style.text}`}>
                    {column.items.length}
                  </span>
                </div>
                <div className="p-3 space-y-2.5">
                  {column.items.map((item, i) => (
                    <div
                      key={i}
                      className="bg-card/80 rounded-lg border border-border/30 p-3 hover:border-border/60 transition-colors"
                    >
                      <p className="text-xs text-foreground leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
