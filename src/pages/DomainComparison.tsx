import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { domainRoadmaps, DomainInitiative } from "@/data/domain-roadmaps";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { InitiativeDetailModal } from "@/components/playbook/InitiativeDetailModal";
import { 
  ArrowLeft, 
  Server, 
  BarChart2, 
  Target, 
  TrendingUp, 
  FileText, 
  Link2, 
  Bot, 
  Shield,
  Search,
  Filter,
  X,
  Calendar,
  Layers,
  ExternalLink
} from "lucide-react";

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

interface FlatInitiative extends DomainInitiative {
  domainId: string;
  domainName: string;
  domainIcon: string;
}

const DomainComparison = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPillar, setSelectedPillar] = useState<string>("all");
  const [selectedHorizon, setSelectedHorizon] = useState<string>("all");
  const [selectedDomain, setSelectedDomain] = useState<string>("all");
  const [selectedInitiative, setSelectedInitiative] = useState<FlatInitiative | null>(null);

  // Flatten all initiatives with domain info
  const allInitiatives = useMemo<FlatInitiative[]>(() => {
    return domainRoadmaps.flatMap(domain => 
      domain.initiatives.map(initiative => ({
        ...initiative,
        domainId: domain.id,
        domainName: domain.domain,
        domainIcon: domain.icon,
      }))
    );
  }, []);

  // Get unique pillars
  const allPillars = useMemo(() => {
    const pillars = new Set<string>();
    allInitiatives.forEach(i => i.pillars.forEach(p => pillars.add(p)));
    return Array.from(pillars).sort();
  }, [allInitiatives]);

  // Filter initiatives
  const filteredInitiatives = useMemo(() => {
    return allInitiatives.filter(initiative => {
      const matchesSearch = searchQuery === "" || 
        initiative.initiative.toLowerCase().includes(searchQuery.toLowerCase()) ||
        initiative.valueDriver.toLowerCase().includes(searchQuery.toLowerCase()) ||
        initiative.proofMetric.toLowerCase().includes(searchQuery.toLowerCase()) ||
        initiative.domainName.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesPillar = selectedPillar === "all" || 
        initiative.pillars.includes(selectedPillar);
      
      const matchesHorizon = selectedHorizon === "all" || 
        initiative.horizon === selectedHorizon;
      
      const matchesDomain = selectedDomain === "all" || 
        initiative.domainId === selectedDomain;

      return matchesSearch && matchesPillar && matchesHorizon && matchesDomain;
    });
  }, [allInitiatives, searchQuery, selectedPillar, selectedHorizon, selectedDomain]);

  // Group by horizon for timeline view
  const groupedByHorizon = useMemo(() => ({
    Now: filteredInitiatives.filter(i => i.horizon === "Now"),
    Next: filteredInitiatives.filter(i => i.horizon === "Next"),
    Later: filteredInitiatives.filter(i => i.horizon === "Later"),
  }), [filteredInitiatives]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedPillar("all");
    setSelectedHorizon("all");
    setSelectedDomain("all");
  };

  const hasActiveFilters = searchQuery !== "" || selectedPillar !== "all" || selectedHorizon !== "all" || selectedDomain !== "all";

  const handleSelectRelatedInitiative = (initiative: DomainInitiative, domId: string) => {
    const relatedDomain = domainRoadmaps.find(d => d.id === domId);
    const flatInit: FlatInitiative = {
      ...initiative,
      domainId: domId,
      domainName: relatedDomain?.domain || "",
      domainIcon: relatedDomain?.icon || "Server",
    };
    setSelectedInitiative(flatInit);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/#initiatives" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Playbook</span>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">SE</span>
              </div>
              <span className="text-sm font-medium text-foreground hidden sm:block">2026 Playbook</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
        </div>
        
        <div className="container px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-4">
              <Layers className="w-8 h-8 text-primary" />
            </div>
            <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 block">
              Cross-Domain View
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-foreground">
              Domain Comparison Timeline
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              View all {allInitiatives.length} initiatives across {domainRoadmaps.length} domains
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filters - Fixed padding for proper scroll offset */}
      <section className="py-4 bg-muted/30 border-b border-border/50 sticky top-16 z-40">
        <div className="container px-4">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search initiatives, value drivers, metrics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-background border-border/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <div className="flex items-center gap-1 text-xs text-muted-foreground mr-2">
              <Filter className="w-3 h-3" />
              <span>Filter:</span>
            </div>

            {/* Horizon Filter */}
            <div className="flex items-center bg-background rounded-full p-1 border border-border/50">
              {["all", "Now", "Next", "Later"].map((horizon) => (
                <button
                  key={horizon}
                  onClick={() => setSelectedHorizon(horizon)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    selectedHorizon === horizon
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {horizon === "all" ? "All Horizons" : horizon}
                </button>
              ))}
            </div>

            {/* Pillar Filter */}
            <div className="flex items-center bg-background rounded-full p-1 border border-border/50">
              <button
                onClick={() => setSelectedPillar("all")}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  selectedPillar === "all"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                All Pillars
              </button>
              {allPillars.map((pillar) => (
                <button
                  key={pillar}
                  onClick={() => setSelectedPillar(pillar)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    selectedPillar === pillar
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {pillar}
                </button>
              ))}
            </div>

            {/* Domain Filter */}
            <div className="flex items-center bg-background rounded-full p-1 border border-border/50 overflow-x-auto max-w-full">
              <button
                onClick={() => setSelectedDomain("all")}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                  selectedDomain === "all"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                All Domains
              </button>
              {domainRoadmaps.map((domain) => (
                <button
                  key={domain.id}
                  onClick={() => setSelectedDomain(domain.id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                    selectedDomain === domain.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {domain.domain}
                </button>
              ))}
            </div>

            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                <X className="w-3 h-3 mr-1" />
                Clear all
              </Button>
            )}
          </div>

          {/* Results count */}
          <div className="text-center mt-4 text-sm text-muted-foreground">
            Showing {filteredInitiatives.length} of {allInitiatives.length} initiatives
          </div>
        </div>
      </section>

      {/* Timeline Grid */}
      <section className="py-12">
        <div className="container px-4">
          <div className="grid lg:grid-cols-3 gap-6">
            {(["Now", "Next", "Later"] as const).map((horizon) => (
              <div key={horizon} className="space-y-4">
                {/* Horizon Header */}
                <div className="sticky top-36 z-30 bg-background py-3 border-b border-border/50">
                  <div className="flex items-center gap-3">
                    <Badge className={`${horizonColors[horizon]} text-sm px-3 py-1`}>
                      {horizon}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>
                        {horizon === "Now" ? "Q1-Q2 2026" : horizon === "Next" ? "Q3-Q4 2026" : "2027+"}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground ml-auto">
                      {groupedByHorizon[horizon].length} items
                    </span>
                  </div>
                </div>

                {/* Initiative Cards */}
                <div className="space-y-3">
                  {groupedByHorizon[horizon].length === 0 ? (
                    <div className="text-center py-12 text-muted-foreground text-sm">
                      No initiatives match your filters
                    </div>
                  ) : (
                    groupedByHorizon[horizon].map((initiative, index) => {
                      const Icon = domainIcons[initiative.domainIcon] || Server;
                      return (
                        <button
                          key={`${initiative.domainId}-${index}`}
                          onClick={() => setSelectedInitiative(initiative)}
                          className="w-full text-left bg-card rounded-lg border border-border/50 p-4 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
                        >
                          {/* Domain Badge */}
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center">
                                <Icon className="w-3 h-3 text-primary" />
                              </div>
                              <span className="text-xs font-medium text-primary">{initiative.domainName}</span>
                            </div>
                            <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>

                          {/* Title */}
                          <h3 className="text-sm font-medium text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                            {initiative.initiative}
                          </h3>

                          {/* Pillars */}
                          <div className="flex flex-wrap gap-1 mb-2">
                            {initiative.pillars.map((pillar, i) => (
                              <Badge 
                                key={i} 
                                variant="outline" 
                                className={`text-[10px] ${pillarColors[pillar] || ""}`}
                              >
                                {pillar}
                              </Badge>
                            ))}
                          </div>

                          {/* Value Driver */}
                          <p className="text-xs text-muted-foreground line-clamp-1">
                            {initiative.valueDriver}
                          </p>
                        </button>
                      );
                    })
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Product Roadmap Playbook • Internal Only and Confidential
            </p>
            <Link to="/#initiatives">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Playbook
              </Button>
            </Link>
          </div>
        </div>
      </footer>

      {/* Initiative Detail Modal */}
      <InitiativeDetailModal
        initiative={selectedInitiative}
        domainId={selectedInitiative?.domainId}
        domainName={selectedInitiative?.domainName}
        isOpen={!!selectedInitiative}
        onClose={() => setSelectedInitiative(null)}
        onSelectInitiative={handleSelectRelatedInitiative}
      />
    </div>
  );
};

export default DomainComparison;