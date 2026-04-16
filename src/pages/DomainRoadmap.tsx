import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { getDomainById, domainRoadmaps, DomainInitiative } from "@/data/domain-roadmaps";
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
  Calendar,
  Zap,
  CheckCircle2,
  Search,
  Filter,
  X,
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

const horizonDescriptions = {
  Now: "Q1-Q2 2026",
  Next: "Q3-Q4 2026",
  Later: "2027+",
};

const pillarColors: Record<string, string> = {
  Unified: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Proactive: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  Adaptive: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  Insightful: "bg-orange-500/20 text-orange-400 border-orange-500/30",
};

const DomainRoadmap = () => {
  const { domainId } = useParams<{ domainId: string }>();
  const domain = getDomainById(domainId || "");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPillar, setSelectedPillar] = useState<string>("all");
  const [selectedInitiative, setSelectedInitiative] = useState<DomainInitiative | null>(null);
  const [modalDomainId, setModalDomainId] = useState<string | undefined>(undefined);
  const [modalDomainName, setModalDomainName] = useState<string | undefined>(undefined);

  // Get unique pillars from this domain
  const allPillars = useMemo(() => {
    if (!domain) return [];
    const pillars = new Set<string>();
    domain.initiatives.forEach(i => i.pillars.forEach(p => pillars.add(p)));
    return Array.from(pillars).sort();
  }, [domain]);

  // Filter initiatives
  const filteredInitiatives = useMemo(() => {
    if (!domain) return { now: [], next: [], later: [] };
    
    const filtered = domain.initiatives.filter(initiative => {
      const matchesSearch = searchQuery === "" || 
        initiative.initiative.toLowerCase().includes(searchQuery.toLowerCase()) ||
        initiative.valueDriver.toLowerCase().includes(searchQuery.toLowerCase()) ||
        initiative.proofMetric.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesPillar = selectedPillar === "all" || 
        initiative.pillars.includes(selectedPillar);

      return matchesSearch && matchesPillar;
    });

    return {
      now: filtered.filter(i => i.horizon === "Now"),
      next: filtered.filter(i => i.horizon === "Next"),
      later: filtered.filter(i => i.horizon === "Later"),
    };
  }, [domain, searchQuery, selectedPillar]);

  const hasActiveFilters = searchQuery !== "" || selectedPillar !== "all";
  
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedPillar("all");
  };

  const openInitiativeModal = (initiative: DomainInitiative, domId?: string, domName?: string) => {
    setSelectedInitiative(initiative);
    setModalDomainId(domId || domainId);
    setModalDomainName(domName || domain?.domain);
  };

  const handleSelectRelatedInitiative = (initiative: DomainInitiative, domId: string) => {
    const relatedDomain = domainRoadmaps.find(d => d.id === domId);
    openInitiativeModal(initiative, domId, relatedDomain?.domain);
  };

  if (!domain) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Domain not found</h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Playbook
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = domainIcons[domain.icon] || Server;

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header Only */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
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
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
        </div>
        
        <div className="container px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
              <Icon className="w-10 h-10 text-primary" />
            </div>
            <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 block">
              Domain Roadmap
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              {domain.domain}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6">
              {domain.description}
            </p>
            <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
              {domain.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Navigation */}
      <section className="py-4 border-b border-border/50">
        <div className="container px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {[
              { horizon: "Now", count: filteredInitiatives.now.length },
              { horizon: "Next", count: filteredInitiatives.next.length },
              { horizon: "Later", count: filteredInitiatives.later.length },
            ].map(({ horizon, count }) => (
              <a
                key={horizon}
                href={`#${horizon.toLowerCase()}`}
                className="flex items-center gap-3 px-4 py-2 rounded-full bg-card border border-border/50 hover:border-primary/50 transition-colors"
              >
                <Badge className={horizonColors[horizon as keyof typeof horizonColors]}>
                  {horizon}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  {count} initiative{count !== 1 ? "s" : ""}
                </span>
                <span className="text-xs text-muted-foreground">
                  ({horizonDescriptions[horizon as keyof typeof horizonDescriptions]})
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Filters - Below Hero */}
      <section className="py-4 bg-muted/20 border-b border-border/50">
        <div className="container px-4 space-y-2">
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search initiatives, value drivers, metrics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-muted/30 border-border/50 h-9"
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

          {/* Filters Row */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto">
            <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
              <Filter className="w-3 h-3" />
              <span>Pillar:</span>
            </div>

            <div className="flex items-center bg-muted/30 rounded-full p-1 border border-border/50 shrink-0">
              <button
                onClick={() => setSelectedPillar("all")}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                  selectedPillar === "all"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                All
              </button>
              {allPillars.map((pillar) => (
                <button
                  key={pillar}
                  onClick={() => setSelectedPillar(pillar)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                    selectedPillar === pillar
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {pillar}
                </button>
              ))}
            </div>

            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-xs text-muted-foreground hover:text-foreground shrink-0 h-7"
              >
                <X className="w-3 h-3 mr-1" />
                Clear
              </Button>
            )}
          </div>
        </div>
      </section>

      {[
        { horizon: "Now", initiatives: filteredInitiatives.now, description: "Ingest and transform core data to build a trusted baseline fast, with audit-ready traceability and less manual work." },
        { horizon: "Next", initiatives: filteredInitiatives.next, description: "Turn governed data into decisions: hotspots, targets, scenarios and dashboards that optimize cost and carbon." },
        { horizon: "Later", initiatives: filteredInitiatives.later, description: "Scale to enterprise change: configuration packs, agents and risk workflows that keep pace with frameworks and business change." },
      ].map(({ horizon, initiatives, description }) => (
        initiatives.length > 0 && (
          <section key={horizon} id={horizon.toLowerCase()} className="py-16 sm:py-20 scroll-mt-16">
            <div className="container px-4">
              {/* Horizon Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
                <Badge className={`${horizonColors[horizon as keyof typeof horizonColors]} text-base px-4 py-1.5`}>
                  {horizon}
                </Badge>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{horizonDescriptions[horizon as keyof typeof horizonDescriptions]}</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-8 max-w-3xl">
                {description}
              </p>

              <div className="space-y-4">
                {initiatives.map((initiative, index) => (
                  <button
                    key={index}
                    onClick={() => openInitiativeModal(initiative)}
                    className="w-full text-left bg-card rounded-xl border border-border/50 p-6 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Main Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {initiative.initiative}
                          </h3>
                          <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
                        </div>
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          {initiative.pillars.map((pillar, i) => (
                            <Badge 
                              key={i} 
                              variant="outline" 
                              className={`text-xs ${pillarColors[pillar] || ""}`}
                            >
                              {pillar}
                            </Badge>
                          ))}
                          <span className="text-xs text-muted-foreground">•</span>
                          <span className="text-xs text-muted-foreground">{initiative.valueDriver}</span>
                        </div>
                        
                        {/* Metrics Grid */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                          <div className="flex items-start gap-2">
                            <Target className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <div>
                              <span className="text-xs text-muted-foreground block">Objective</span>
                              <span className="text-sm font-medium text-foreground">{initiative.objective} / {initiative.primaryKR}</span>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <div>
                              <span className="text-xs text-muted-foreground block">Proof Metric</span>
                              <span className="text-sm text-foreground">{initiative.proofMetric}</span>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Zap className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <div>
                              <span className="text-xs text-muted-foreground block">AI Leverage</span>
                              <span className="text-sm text-foreground">{initiative.aiLeverage}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* ROI Badge */}
                      <div className="lg:w-48 shrink-0">
                        <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                          <span className="text-xs text-primary font-medium block mb-1">Customer ROI</span>
                          <span className="text-sm text-foreground">{initiative.customerROI}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>
        )
      ))}

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
                Back to All Domains
              </Button>
            </Link>
          </div>
        </div>
      </footer>

      {/* Initiative Detail Modal */}
      <InitiativeDetailModal
        initiative={selectedInitiative}
        domainId={modalDomainId}
        domainName={modalDomainName}
        isOpen={!!selectedInitiative}
        onClose={() => setSelectedInitiative(null)}
        onSelectInitiative={handleSelectRelatedInitiative}
      />
    </div>
  );
};

export default DomainRoadmap;
