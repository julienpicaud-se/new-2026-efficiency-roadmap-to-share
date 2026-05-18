import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Download, Maximize2, ChevronRight, Layers, ChevronDown, FileDown, Map } from "lucide-react";
import { exportToPptx } from "@/lib/pptx-export";
import { domainRoadmaps } from "@/data/domain-roadmaps";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

type NavItem = { id: string; label: string };
type NavGroup = { label: string; items: NavItem[]; defaultOpen?: boolean };

const topLevel: NavItem[] = [
  { id: "executive-summary", label: "Summary" },
];

const groups: NavGroup[] = [
  {
    label: "Strategy",
    items: [
      { id: "platform-shift", label: "Efficiency Transformation" },
    ],
  },
  {
    label: "Audience",
    items: [
      { id: "personas", label: "Personas" },
      { id: "jobs-to-be-done", label: "Jobs to Be Done" },
    ],
  },
  {
    label: "Problem",
    items: [
      { id: "key-challenges-grid", label: "Key Challenges" },
      { id: "key-challenges", label: "Why Now" },
    ],
  },
  {
    label: "Response",
    items: [
      { id: "key-objectives", label: "Key Objectives" },
      { id: "strategic-pillars", label: "Strategic Pillars" },
    ],
  },
  {
    label: "How",
    items: [
      { id: "existing-tools", label: "Technology Landscape" },
      { id: "ecm-ingestion-engine", label: "Knowledge Engine" },
      { id: "ecm-mapping", label: "Capability Mapping" },
      { id: "operating-model", label: "Operating Model" },
      { id: "data-requirements", label: "Data Requirements" },
    ],
  },
  {
    label: "Context",
    items: [
      { id: "regional-journeys", label: "Regional Journeys" },
      { id: "what-if", label: "What If Tomorrow" },
    ],
  },
  {
    label: "Guardrails",
    items: [
      { id: "success-metrics", label: "Success Metrics" },
    ],
  },
  {
    label: "Delivery",
    items: [
      { id: "phasing", label: "Phasing" },
      { id: "start-stop-matrix", label: "Start / Stop Matrix" },
      { id: "idm-vision", label: "IDM 2.0 Vision" },
      { id: "executive-takeaway", label: "Executive Takeaway" },
    ],
  },
  {
    label: "Appendix",
    items: [
      { id: "appendix", label: "Browse full appendix" },
      { id: "appendix:maturity-ladder", label: "Customer Maturity Ladder" },
      { id: "appendix:boundaries", label: "Where We Stop" },
      { id: "appendix:strategic-context", label: "Why Now, Why This Way" },
      { id: "appendix:competitive-landscape", label: "Efficiency Technology Landscape" },
      { id: "appendix:se-corporate-blueprint", label: "RA Classic IDM Client" },
      { id: "appendix:pain-inventory", label: "RA Classic Pain Inventory" },
      { id: "appendix:voc-evidence", label: "VOC Evidence" },
      { id: "appendix:initiatives-by-domain", label: "Initiatives by Domain" },
      { id: "appendix:strategy-flywheel", label: "Strategy-to-Improvement Flywheel" },
      { id: "appendix:capability-matrix", label: "Opportunity × Phase Matrix" },
      { id: "appendix:value-pillar-deep-dive", label: "Value Pillar Deep Dive" },
      { id: "appendix:supporting-scorecard", label: "Supporting Scorecard" },
      { id: "appendix:glossary", label: "Glossary" },
    ],
  },
];

const allItems: NavItem[] = [
  ...topLevel,
  ...groups.flatMap((g) => g.items.filter((i) => !i.id.includes(":"))),
];

interface NavigationProps {
  onPresentationMode?: () => void;
}

export const Navigation = ({ onPresentationMode }: NavigationProps) => {
  const [activeSection, setActiveSection] = useState("executive-summary");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 200;
      for (let i = allItems.length - 1; i >= 0; i--) {
        const element = document.getElementById(allItems[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(allItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // Deep link into the Appendix accordion: "appendix:<section-id>"
    if (id.startsWith("appendix:")) {
      const target = id.split(":")[1];
      const appendix = document.getElementById("appendix");
      if (appendix) {
        const top = appendix.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
      window.dispatchEvent(
        new CustomEvent("open-appendix-section", { detail: target })
      );
      setIsMobileMenuOpen(false);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleExport = async () => {
    setIsExporting(true);
    try {
      await exportToPptx();
    } catch (error) {
      console.error("Export failed:", error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg shadow-background/20"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="text-primary-foreground font-bold text-sm">SE</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-semibold text-foreground text-sm">Efficiency Transformation</div>
            </div>
          </div>

          {/* Desktop Navigation - Pills with grouped dropdowns */}
          <div className="hidden lg:flex items-center gap-2">
            <div className="flex items-center bg-muted/50 rounded-full p-1 border border-border/30">
              <button
                onClick={() => scrollToSection(topLevel[0].id)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeSection === topLevel[0].id
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
                }`}
              >
                {topLevel[0].label}
              </button>

              {groups.map((group) => {
                const isActive = group.items.some((i) => i.id === activeSection);
                return (
                  <DropdownMenu key={group.label}>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                          isActive
                            ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
                        }`}
                      >
                        {group.label}
                        <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="w-56 bg-popover">
                      {group.items.map((item) => (
                        <DropdownMenuItem
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={activeSection === item.id ? "bg-primary/10 text-primary" : ""}
                        >
                          {item.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              })}

            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Fullscreen/Present Button */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex text-muted-foreground hover:text-foreground hover:bg-muted/50"
              onClick={onPresentationMode}
              title="Presentation Mode"
            >
              <Maximize2 className="w-4 h-4" />
            </Button>

            {/* Export Button */}
            <Button
              className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground gap-2 shadow-md shadow-primary/20"
              size="sm"
              onClick={handleExport}
              disabled={isExporting}
            >
              <Download className="w-4 h-4" />
              {isExporting ? "Exporting..." : "Export PPTX"}
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                >
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background/95 backdrop-blur-md">
                <SheetHeader className="text-left pb-6 border-b border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-sm">SE</span>
                    </div>
                    <div>
                      <SheetTitle className="text-foreground text-sm">Efficiency Transformation</SheetTitle>
                    </div>
                  </div>
                </SheetHeader>
                
                <div className="flex flex-col gap-1 py-6">
                  <button
                    onClick={() => scrollToSection(topLevel[0].id)}
                    className={`flex items-center justify-between text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      activeSection === topLevel[0].id
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <span>{topLevel[0].label}</span>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </button>

                  {groups.map((group) => {
                    const isActiveGroup = group.items.some((i) => i.id === activeSection);
                    return (
                      <Collapsible
                        key={group.label}
                        defaultOpen={isActiveGroup}
                        className="mt-2"
                      >
                        <CollapsibleTrigger className="w-full flex items-center justify-between px-4 py-2 text-xs text-muted-foreground uppercase tracking-wider hover:text-foreground group">
                          <span>{group.label}</span>
                          <ChevronDown className="w-4 h-4 opacity-60 transition-transform group-data-[state=open]:rotate-180" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                          {group.items.map((item) => (
                            <button
                              key={item.id}
                              onClick={() => scrollToSection(item.id)}
                              className={`w-full flex items-center justify-between text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                                activeSection === item.id
                                  ? "bg-primary text-primary-foreground"
                                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
                              }`}
                            >
                              <span>{item.label}</span>
                              <ChevronRight className="w-4 h-4 opacity-50" />
                            </button>
                          ))}
                        </CollapsibleContent>
                      </Collapsible>
                    );
                  })}

                  {/* Roadmap hidden for now */}

                  {/* Domain Links in Mobile */}
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <p className="px-4 text-xs text-muted-foreground uppercase tracking-wider mb-2">Views</p>
                    <Link
                      to="/detailed-roadmap"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between text-left px-4 py-3 rounded-lg text-sm font-medium text-primary hover:bg-muted"
                    >
                      <span className="flex items-center gap-2">
                        <Map className="w-4 h-4" />
                        Detailed Roadmap
                      </span>
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </Link>
                    <Link
                      to="/domain-comparison"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between text-left px-4 py-3 rounded-lg text-sm font-medium text-primary hover:bg-muted"
                    >
                      <span className="flex items-center gap-2">
                        <Layers className="w-4 h-4" />
                        Compare All Domains
                      </span>
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </Link>
                    {domainRoadmaps.map((domain) => (
                      <Link
                        key={domain.id}
                        to={`/domain/${domain.id}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-between text-left px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                      >
                        <span>{domain.domain}</span>
                        <ChevronRight className="w-4 h-4 opacity-50" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50 space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onPresentationMode?.();
                    }}
                  >
                    <Maximize2 className="w-4 h-4" />
                    Presentation Mode
                  </Button>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleExport();
                    }}
                    disabled={isExporting}
                  >
                    <Download className="w-4 h-4" />
                    {isExporting ? "Exporting..." : "Export PPTX"}
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2 text-primary border-primary/30 hover:bg-primary/10"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleExport();
                    }}
                    disabled={isExporting}
                  >
                    <FileDown className="w-4 h-4" />
                    {isExporting ? "Exporting..." : "Export All Content"}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
