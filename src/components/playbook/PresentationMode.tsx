import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Minimize2, ChevronLeft, ChevronRight, Grid3X3, X } from "lucide-react";

const sections = [
  { id: "hero", title: "Overview" },
  { id: "executive-summary", title: "Executive Summary" },
  { id: "scope-expansion", title: "Scope Expansion" },
  { id: "strategic-pillars", title: "Strategic Pillars" },
  { id: "objectives", title: "Objectives" },
  { id: "roadmap", title: "Roadmap" },
  { id: "initiatives", title: "Initiatives" },
  { id: "value-proof", title: "Value Proof" },
  { id: "start-stop", title: "Start/Stop Matrix" },
  { id: "appendix", title: "Appendix" },
  { id: "takeaway", title: "Takeaway" },
];

interface PresentationModeProps {
  isActive: boolean;
  onClose: () => void;
}

export const PresentationMode = ({ isActive, onClose }: PresentationModeProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showOverview, setShowOverview] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const scrollToSlide = useCallback((index: number, smooth: boolean = true) => {
    const element = document.getElementById(sections[index].id);
    if (element) {
      const elementRect = element.getBoundingClientRect();
      const absoluteTop = window.scrollY + elementRect.top;
      
      window.scrollTo({
        top: Math.max(0, absoluteTop - 20),
        behavior: smooth ? "smooth" : "instant"
      });
    }
  }, []);

  const goToSlide = useCallback((index: number) => {
    const clampedIndex = Math.max(0, Math.min(index, sections.length - 1));
    if (clampedIndex === currentSlide && !showOverview) return;
    
    setIsTransitioning(true);
    setShowOverview(false);
    
    // Short delay for transition effect
    setTimeout(() => {
      setCurrentSlide(clampedIndex);
      scrollToSlide(clampedIndex);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 400);
    }, 150);
  }, [currentSlide, showOverview, scrollToSlide]);

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  const handleClose = useCallback(() => {
    document.exitFullscreen?.().catch(() => {});
    onClose();
  }, [onClose]);

  // Initialize presentation mode - scroll to first slide
  useEffect(() => {
    if (isActive) {
      document.body.classList.add("presentation-mode");
      setCurrentSlide(0);
      // Enter fullscreen and scroll to top
      document.documentElement.requestFullscreen?.().catch(() => {});
      
      // Scroll to first slide immediately
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
      }, 100);
    } else {
      document.body.classList.remove("presentation-mode");
    }
    
    return () => {
      document.body.classList.remove("presentation-mode");
    };
  }, [isActive]);

  // Keyboard navigation
  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning) return;
      
      if (e.key === "ArrowRight" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        if (showOverview) {
          setShowOverview(false);
        } else {
          nextSlide();
        }
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "Escape") {
        e.preventDefault();
        if (showOverview) {
          setShowOverview(false);
        } else {
          handleClose();
        }
      } else if (e.key === "g" || e.key === "G") {
        e.preventDefault();
        setShowOverview(!showOverview);
      } else if (e.key === "Home") {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goToSlide(sections.length - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isActive, nextSlide, prevSlide, handleClose, showOverview, isTransitioning, goToSlide]);

  // Update current slide based on scroll position
  useEffect(() => {
    if (!isActive || isTransitioning) return;

    const handleScroll = () => {
      const viewportCenter = window.scrollY + window.innerHeight / 2;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = window.scrollY + rect.top;
          const elementCenter = elementTop + rect.height / 2;
          
          if (viewportCenter >= elementTop && viewportCenter < elementTop + rect.height) {
            setCurrentSlide(i);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isActive, isTransitioning]);

  if (!isActive) return null;

  return (
    <>
      {/* Presentation mode styles */}
      <style>{`
        .presentation-mode {
          overflow-x: hidden;
        }
        .presentation-mode nav,
        .presentation-mode .reading-progress-bar {
          display: none !important;
        }
        .presentation-mode section {
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 3rem 1rem 5rem;
          box-sizing: border-box;
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .presentation-mode section > .container {
          width: 100%;
          max-width: 1400px;
        }
        .presentation-mode #hero {
          padding-top: 2rem;
        }
        .presentation-mode.transitioning section {
          opacity: 0.3;
          transform: translateY(10px);
        }
        
        /* Scale content to fit viewport */
        @media (max-height: 800px) {
          .presentation-mode section {
            transform: scale(0.9);
            transform-origin: center center;
          }
        }
        @media (max-height: 600px) {
          .presentation-mode section {
            transform: scale(0.8);
            transform-origin: center center;
          }
        }
      `}</style>

      {/* Transition overlay */}
      <div 
        className={`fixed inset-0 z-[140] bg-background pointer-events-none transition-opacity duration-300 ${
          isTransitioning ? "opacity-50" : "opacity-0"
        }`}
      />

      {/* Slide content transition wrapper */}
      {isTransitioning && (
        <div className="fixed inset-0 z-[139] pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-80" />
        </div>
      )}

      {/* Overlay for overview mode */}
      {showOverview && (
        <div className="fixed inset-0 z-[200] bg-background/98 backdrop-blur-md flex flex-col animate-fade-in">
          <div className="flex items-center justify-between p-6 border-b border-border/50">
            <h2 className="text-xl font-semibold text-foreground">Slide Overview</h2>
            <Button variant="ghost" size="icon" onClick={() => setShowOverview(false)}>
              <X className="w-5 h-5" />
            </Button>
          </div>
          <div className="flex-1 overflow-auto p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => goToSlide(index)}
                  className={`aspect-video rounded-xl border-2 transition-all duration-200 p-4 flex flex-col items-center justify-center gap-2 hover:scale-105 hover:shadow-lg ${
                    index === currentSlide
                      ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
                      : "border-border/50 bg-card hover:border-primary/50"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-3xl font-bold text-primary">{index + 1}</span>
                  <span className="text-xs text-muted-foreground text-center leading-tight">{section.title}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="p-4 border-t border-border/50 text-center text-sm text-muted-foreground">
            Press <kbd className="px-2 py-1 rounded bg-muted text-foreground font-mono text-xs">G</kbd> to toggle overview •
            Press <kbd className="px-2 py-1 rounded bg-muted text-foreground font-mono text-xs">ESC</kbd> to exit presentation
          </div>
        </div>
      )}

      {/* Top Controls */}
      <div className="fixed top-6 right-6 z-[150] flex items-center gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setShowOverview(true)}
          className="bg-background/80 backdrop-blur-md border-border/50 shadow-lg hover:bg-background/90"
        >
          <Grid3X3 className="w-4 h-4 mr-2" />
          Overview
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleClose}
          className="bg-background/80 backdrop-blur-md border-border/50 shadow-lg hover:bg-background/90"
        >
          <Minimize2 className="w-4 h-4 mr-2" />
          Exit
        </Button>
      </div>

      {/* Slide indicator - left side */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-[150] flex flex-col gap-2">
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            title={section.title}
            className={`w-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary h-8 shadow-lg shadow-primary/30"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50 h-2"
            }`}
          />
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[150]">
        <div className="flex items-center gap-4 bg-background/90 backdrop-blur-md rounded-full px-6 py-3 border border-border/50 shadow-xl">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            disabled={currentSlide === 0 || isTransitioning}
            className="h-10 w-10 rounded-full disabled:opacity-30"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <div className="flex items-center gap-3 min-w-[200px] justify-center">
            <div className="flex items-center gap-1">
              <span className="text-lg font-bold text-primary">
                {currentSlide + 1}
              </span>
              <span className="text-muted-foreground">/</span>
              <span className="text-muted-foreground">
                {sections.length}
              </span>
            </div>
            <div className="h-4 w-px bg-border/50" />
            <span className="text-sm text-muted-foreground truncate max-w-[120px]">
              {sections[currentSlide].title}
            </span>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            disabled={currentSlide === sections.length - 1 || isTransitioning}
            className="h-10 w-10 rounded-full disabled:opacity-30"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Keyboard hints */}
      <div className="fixed bottom-6 left-6 z-[150] hidden lg:flex items-center gap-4 text-xs text-muted-foreground/60">
        <span className="flex items-center gap-1">
          <kbd className="px-1.5 py-0.5 rounded bg-muted/50 font-mono">←</kbd>
          <kbd className="px-1.5 py-0.5 rounded bg-muted/50 font-mono">→</kbd>
          Navigate
        </span>
        <span className="flex items-center gap-1">
          <kbd className="px-1.5 py-0.5 rounded bg-muted/50 font-mono">G</kbd>
          Overview
        </span>
        <span className="flex items-center gap-1">
          <kbd className="px-1.5 py-0.5 rounded bg-muted/50 font-mono">ESC</kbd>
          Exit
        </span>
      </div>
    </>
  );
};
