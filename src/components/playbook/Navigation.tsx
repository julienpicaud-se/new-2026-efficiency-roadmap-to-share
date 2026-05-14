import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Maximize2, ChevronRight, Layers, ChevronDown, FileDown, Map, BookOpen } from "lucide-react";
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

type NavItem = { id: string; label: string };
type NavGroup = { label: string; items: NavItem[] };

const topLevel: NavItem[] = [
  { id: "executive-summary", label: "Summary" },
  // { id: "delivery-roadmap", label: "Roadmap" },
  { id: "appendix", label: "Appendix" },
  { id: "glossary", label: "Glossary" },
];

const groups: NavGroup[] = [
  {
    label: "Strategy",
    items: [
      { id: "platform-shift", label: "Efficiency Transformation" },
      { id: "product-scope", label: "Product Scope" },
      { id: "key-challenges", label: "Why Now" },
      { id: "strategic-pillars", label: "Strategic Pillars" },
      { id: "existing-tools", label: "Strategy Landscape" },
      { id: "strategic-context", label: "Strategic Context" },
    ],
  },
  {
    label: "Audience",
    items: [
      { id: "personas", label: "Personas" },
      { id: "jobs-to-be-done", label: "Jobs to Be Done" },
      { id: "voc-evidence", label: "VOC Evidence" },
      { id: "se-corporate-blueprint", label: "SE Corporate Proof of Concept" },
    ],
  },
  {
    label: "Execution",
    items: [
      { id: "pain-inventory", label: "Pain Inventory" },
      { id: "regional-journeys", label: "Regional Journeys" },
      { id: "ecm-ingestion-engine", label: "Knowledge Engine" },
      { id: "what-if", label: "What If Tomorrow" },
      { id: "out-of-scope", label: "Out of Scope" },
      { id: "success-metrics", label: "Success Metrics" },
      { id: "guardrails", label: "Guardrails" },
      { id: "ecm-mapping", label: "Capability Mapping" },
      { id: "maturity-ladder", label: "Maturity Ladder" },
      { id: "architecture-decision", label: "Plan A vs Plan B" },
    ],
  },
];

const allItems: NavItem[] = [
  topLevel[0],
  ...groups.flatMap((g) => g.items),
  ...topLevel.slice(1),
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

              {topLevel.slice(1).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
                  }`}
                >
                  {item.label}
                </button>
              ))}
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
                  {(() => {
                    const appendix = allItems.find((i) => i.id === "appendix");
                    if (!appendix) return null;
                    return (
                      <button
                        key={appendix.id}
                        onClick={() => scrollToSection(appendix.id)}
                        className={`flex items-center justify-between text-left px-4 py-3 rounded-lg text-sm font-medium transition-all mb-2 border ${
                          activeSection === appendix.id
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-muted/30 text-foreground border-border/50 hover:bg-muted"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <Layers className="w-4 h-4" />
                          {appendix.label}
                        </span>
                        <ChevronRight className="w-4 h-4 opacity-50" />
                      </button>
                    );
                  })()}

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

                  {groups.map((group) => (
                    <div key={group.label} className="mt-3">
                      <p className="px-4 text-xs text-muted-foreground uppercase tracking-wider mb-1">{group.label}</p>
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
                    </div>
                  ))}

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
