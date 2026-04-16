import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Zap, 
  CheckCircle2, 
  DollarSign,
  ArrowRight,
  Link2,
  Server,
  BarChart2,
  TrendingUp,
  FileText,
  Bot,
  Shield,
  ExternalLink
} from "lucide-react";
import { DomainInitiative, domainRoadmaps } from "@/data/domain-roadmaps";
import { Link } from "react-router-dom";

interface InitiativeDetailModalProps {
  initiative: DomainInitiative | null;
  domainId?: string;
  domainName?: string;
  isOpen: boolean;
  onClose: () => void;
  onSelectInitiative?: (initiative: DomainInitiative, domainId: string) => void;
}

const domainIcons: Record<string, React.ElementType> = {
  Server: Server,
  BarChart2: BarChart2,
  Target: Target,
  TrendingUp: TrendingUp,
  FileText: FileText,
  Link2: Link2,
  Bot: Bot,
  Shield: Shield,
};

const horizonColors = {
  Now: "bg-primary text-primary-foreground",
  Next: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  Later: "bg-muted text-muted-foreground border-border",
};

const pillarColors: Record<string, string> = {
  Unified: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Proactive: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  Adaptive: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  Insightful: "bg-orange-500/20 text-orange-400 border-orange-500/30",
};

const horizonDescriptions = {
  Now: "Q1-Q2 2026",
  Next: "Q3-Q4 2026",
  Later: "2027+",
};

// Find related initiatives based on shared pillars, value drivers, or explicit dependencies
const findRelatedInitiatives = (initiative: DomainInitiative, currentDomainId?: string) => {
  const related: { initiative: DomainInitiative; domainId: string; domainName: string; domainIcon: string; relationship: string }[] = [];
  
  domainRoadmaps.forEach(domain => {
    domain.initiatives.forEach(init => {
      if (init.initiative === initiative.initiative && domain.id === currentDomainId) return;
      
      // Check for shared pillars
      const sharedPillars = init.pillars.filter(p => initiative.pillars.includes(p));
      
      // Check for same value driver
      const sameValueDriver = init.valueDriver === initiative.valueDriver;
      
      // Check for dependency keywords
      const dependsOnCurrent = 
        init.initiative.toLowerCase().includes(initiative.valueDriver.toLowerCase()) ||
        (initiative.initiative.toLowerCase().includes("platform") && init.aiLeverage.toLowerCase().includes("ai")) ||
        (initiative.initiative.toLowerCase().includes("sera") && init.aiLeverage.toLowerCase().includes("sera"));
      
      // Check if current depends on this
      const currentDependsOn = 
        initiative.initiative.toLowerCase().includes(init.valueDriver.toLowerCase()) ||
        (init.initiative.toLowerCase().includes("platform") && initiative.aiLeverage.toLowerCase().includes("ai"));
      
      if (sharedPillars.length > 0 || sameValueDriver || dependsOnCurrent || currentDependsOn) {
        let relationship = "";
        if (currentDependsOn && init.horizon === "Now" && initiative.horizon !== "Now") {
          relationship = "Depends on";
        } else if (dependsOnCurrent && initiative.horizon === "Now" && init.horizon !== "Now") {
          relationship = "Enables";
        } else if (sameValueDriver) {
          relationship = "Same value driver";
        } else if (sharedPillars.length > 0) {
          relationship = `Shared: ${sharedPillars.join(", ")}`;
        }
        
        if (relationship && related.length < 5) {
          related.push({
            initiative: init,
            domainId: domain.id,
            domainName: domain.domain,
            domainIcon: domain.icon,
            relationship
          });
        }
      }
    });
  });
  
  return related;
};

export const InitiativeDetailModal = ({ 
  initiative, 
  domainId, 
  domainName,
  isOpen, 
  onClose,
  onSelectInitiative 
}: InitiativeDetailModalProps) => {
  if (!initiative) return null;

  const relatedInitiatives = findRelatedInitiatives(initiative, domainId);
  const dependencies = relatedInitiatives.filter(r => r.relationship === "Depends on");
  const enables = relatedInitiatives.filter(r => r.relationship === "Enables");
  const related = relatedInitiatives.filter(r => r.relationship !== "Depends on" && r.relationship !== "Enables");

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-background border-border">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <Badge className={horizonColors[initiative.horizon]}>
              {initiative.horizon}
            </Badge>
            <span className="text-xs text-muted-foreground">
              {horizonDescriptions[initiative.horizon]}
            </span>
            {domainName && (
              <>
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-xs text-primary font-medium">{domainName}</span>
              </>
            )}
          </div>
          <DialogTitle className="text-xl font-bold text-foreground pr-8">
            {initiative.initiative}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Pillars & Value Driver */}
          <div>
            <div className="flex flex-wrap items-center gap-2">
              {initiative.pillars.map((pillar, i) => (
                <Badge 
                  key={i} 
                  variant="outline" 
                  className={`${pillarColors[pillar] || ""}`}
                >
                  {pillar}
                </Badge>
              ))}
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{initiative.valueDriver}</span>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-muted/30 rounded-lg p-4 border border-border/50">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Objective & KR</span>
              </div>
              <p className="text-foreground font-medium">{initiative.objective} / {initiative.primaryKR}</p>
            </div>

            <div className="bg-muted/30 rounded-lg p-4 border border-border/50">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">AI Leverage</span>
              </div>
              <p className="text-foreground">{initiative.aiLeverage}</p>
            </div>

            <div className="bg-muted/30 rounded-lg p-4 border border-border/50">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Proof Metric</span>
              </div>
              <p className="text-foreground">{initiative.proofMetric}</p>
            </div>

            <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-primary uppercase tracking-wider">Customer ROI</span>
              </div>
              <p className="text-foreground font-medium">{initiative.customerROI}</p>
            </div>
          </div>

          {/* Dependencies */}
          {dependencies.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-amber-400" />
                Dependencies (Requires)
              </h4>
              <div className="space-y-2">
                {dependencies.map((dep, index) => {
                  const Icon = domainIcons[dep.domainIcon] || Server;
                  return (
                    <button
                      key={index}
                      onClick={() => onSelectInitiative?.(dep.initiative, dep.domainId)}
                      className="w-full flex items-center gap-3 p-3 rounded-lg bg-amber-500/5 border border-amber-500/20 hover:border-amber-500/40 transition-colors text-left"
                    >
                      <div className="w-8 h-8 rounded bg-amber-500/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-amber-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{dep.initiative.initiative}</p>
                        <p className="text-xs text-muted-foreground">{dep.domainName} • {dep.initiative.horizon}</p>
                      </div>
                      <Badge className={horizonColors[dep.initiative.horizon]} variant="outline">
                        {dep.initiative.horizon}
                      </Badge>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Enables */}
          {enables.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <Link2 className="w-4 h-4 text-emerald-400" />
                Enables (Unlocks)
              </h4>
              <div className="space-y-2">
                {enables.map((dep, index) => {
                  const Icon = domainIcons[dep.domainIcon] || Server;
                  return (
                    <button
                      key={index}
                      onClick={() => onSelectInitiative?.(dep.initiative, dep.domainId)}
                      className="w-full flex items-center gap-3 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors text-left"
                    >
                      <div className="w-8 h-8 rounded bg-emerald-500/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{dep.initiative.initiative}</p>
                        <p className="text-xs text-muted-foreground">{dep.domainName} • {dep.initiative.horizon}</p>
                      </div>
                      <Badge className={horizonColors[dep.initiative.horizon]} variant="outline">
                        {dep.initiative.horizon}
                      </Badge>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Related Initiatives */}
          {related.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <Link2 className="w-4 h-4 text-muted-foreground" />
                Related Initiatives
              </h4>
              <div className="space-y-2">
                {related.slice(0, 3).map((rel, index) => {
                  const Icon = domainIcons[rel.domainIcon] || Server;
                  return (
                    <button
                      key={index}
                      onClick={() => onSelectInitiative?.(rel.initiative, rel.domainId)}
                      className="w-full flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border/50 hover:border-primary/30 transition-colors text-left"
                    >
                      <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{rel.initiative.initiative}</p>
                        <p className="text-xs text-muted-foreground">{rel.domainName} • {rel.relationship}</p>
                      </div>
                      <Badge className={horizonColors[rel.initiative.horizon]} variant="outline">
                        {rel.initiative.horizon}
                      </Badge>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* View in Domain Link */}
          {domainId && (
            <div className="pt-4 border-t border-border/50">
              <Link to={`/domain/${domainId}`} onClick={onClose}>
                <Button variant="outline" className="w-full gap-2">
                  <ExternalLink className="w-4 h-4" />
                  View in {domainName} Roadmap
                </Button>
              </Link>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};