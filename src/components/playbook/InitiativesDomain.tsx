import { Link } from "react-router-dom";
import { domainRoadmaps } from "@/data/domain-roadmaps";
import { 
  Search, 
  Settings, 
  FileCheck, 
  Package, 
  Users, 
  Shield,
  Database,
  Target,
  ArrowRight
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";

const domainIcons: Record<string, React.ElementType> = {
  Search: Search,
  Settings: Settings,
  FileCheck: FileCheck,
  Package: Package,
  Users: Users,
  Shield: Shield,
  Database: Database,
  Target: Target,
};

interface InitiativesDomainProps {
  embedded?: boolean;
}

export const InitiativesDomain = ({ embedded = false }: InitiativesDomainProps) => {
  const { ref, isVisible } = useScrollAnimation();

  const content = (
    <>
      {!embedded && (
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 block">
            Domain Focus
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Initiatives by Domain
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Detailed view of key initiatives organized by product domain. Click on any domain to explore the full roadmap.
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {domainRoadmaps.map((domain, index) => {
          const Icon = domainIcons[domain.icon] || Search;
          const nowCount = domain.initiatives.filter(i => i.horizon === "Now").length;
          const nextCount = domain.initiatives.filter(i => i.horizon === "Next").length;
          const laterCount = domain.initiatives.filter(i => i.horizon === "Later").length;
          
          return (
            <Link
              key={domain.id}
              to={`/domain/${domain.id}`}
              onClick={() => window.scrollTo(0, 0)}
              className="group bg-muted/30 rounded-xl border border-border/50 p-6 hover:border-primary/50 hover:bg-muted/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>

              <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {domain.domain}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {domain.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {nowCount > 0 && (
                  <Badge className="bg-primary/20 text-primary border-primary/30 text-xs">
                    {nowCount} Now
                  </Badge>
                )}
                {nextCount > 0 && (
                  <Badge className="bg-secondary/20 text-secondary-foreground border-secondary/30 text-xs">
                    {nextCount} Next
                  </Badge>
                )}
                {laterCount > 0 && (
                  <Badge variant="outline" className="text-xs">
                    {laterCount} Later
                  </Badge>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );

  if (embedded) {
    return content;
  }

  return (
    <section
      id="initiatives"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 section-fade ${isVisible ? "visible" : ""}`}
    >
      <div className="container px-4">
        {content}
      </div>
    </section>
  );
};
