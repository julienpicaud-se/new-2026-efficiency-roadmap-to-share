import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Maximize2, ChevronRight, Layers, ChevronDown, FileDown, Map } from "lucide-react";
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

const navItems = [
  { id: "executive-summary", label: "Summary", shortLabel: "Summary" },
  { id: "key-challenges", label: "Why Now", shortLabel: "Why Now" },
  { id: "strategic-pillars", label: "Strategic Pillars", shortLabel: "Pillars" },
  { id: "initiatives", label: "Journey Domains", shortLabel: "Domains" },
  { id: "existing-tools", label: "Strategy Landscape", shortLabel: "Landscape" },
  { id: "regional-journeys", label: "Regional Journeys", shortLabel: "Regions" },
  { id: "ecm-ingestion-engine", label: "ECM Ingestion", shortLabel: "Ingestion" },
  { id: "strategic-context", label: "Strategic Context", shortLabel: "Context" },
  { id: "what-if", label: "What If Tomorrow", shortLabel: "Vision" },
  { id: "out-of-scope", label: "Out of Scope", shortLabel: "Scope" },
  { id: "success-metrics", label: "Success Metrics", shortLabel: "Success" },
  { id: "guardrails", label: "Guardrails", shortLabel: "Guardrails" },
  { id: "ecm-mapping", label: "ECM Mapping", shortLabel: "ECM" },
  { id: "appendix", label: "Appendix", shortLabel: "Appendix" },
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

      // Find current section
      const scrollPosition = window.scrollY + 200;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const element = document.getElementById(navItems[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
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
              <span className="text-primary-foreground font-bold text-sm">EE</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-semibold text-foreground text-sm">Beyond ECM Library</div>
              <div className="text-xs text-muted-foreground">Vision & Strategy 2026</div>
            </div>
          </div>

          {/* Desktop Navigation - Pills */}
          <div className="hidden lg:flex items-center gap-2">
            <div className="flex items-center bg-muted/50 rounded-full p-1 border border-border/30">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
                  }`}
                >
                  {item.shortLabel}
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
                      <span className="text-primary-foreground font-bold text-sm">EE</span>
                    </div>
                    <div>
                      <SheetTitle className="text-foreground text-sm">Beyond ECM Library</SheetTitle>
                      <p className="text-xs text-muted-foreground">Vision & Strategy 2026</p>
                    </div>
                  </div>
                </SheetHeader>
                
                <div className="flex flex-col gap-1 py-6">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center justify-between text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        activeSection === item.id
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </button>
                  ))}

                  
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
