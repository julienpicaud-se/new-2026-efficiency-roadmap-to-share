import { ChevronDown, Sparkles, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { strategicContext } from "@/data/playbook-data";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContent = () => {
    const element = document.getElementById("executive-summary");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Parallax calculations
  const glowOffset = scrollY * 0.3;
  const scrollIndicatorOpacity = Math.max(0, 1 - scrollY / 300);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background - dark base */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Subtle green glow on the right with parallax */}
      <div 
        className="absolute inset-0 pointer-events-none transition-transform duration-100 ease-out"
        style={{
          background: 'radial-gradient(ellipse 60% 80% at 85% 50%, hsl(var(--primary) / 0.12) 0%, transparent 60%)',
          transform: `translateY(${glowOffset * 0.5}px)`,
        }}
      />
      
      {/* Secondary subtle glow on the left with parallax */}
      <div 
        className="absolute inset-0 pointer-events-none transition-transform duration-100 ease-out"
        style={{
          background: 'radial-gradient(ellipse 40% 60% at 15% 60%, hsl(var(--primary) / 0.06) 0%, transparent 50%)',
          transform: `translateY(${glowOffset * 0.8}px)`,
        }}
      />

      <div className="container relative z-10 px-4 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Efficiency Transformation</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            <span className="gradient-text">Energy Efficiency</span>
            <br />
            <span className="text-foreground">Vision & Strategy</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            From internal productivity to scalable revenue and in-product efficiency advisory. Transform expert knowledge into scalable product value.
          </p>

          {/* Key pillars preview */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card">
              <Target className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Productivity Gains</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Upsell Engine</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Recurring Revenue</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            onClick={scrollToContent}
            className="bg-primary hover:bg-primary/90 text-primary-foreground animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            Explore the Strategy
          </Button>
        </div>
      </div>

      {/* Scroll to explore indicator - fades out on scroll */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted-foreground cursor-pointer hover:text-foreground transition-all duration-300 z-20"
        style={{ 
          animationDelay: "1s",
          opacity: scrollIndicatorOpacity,
          pointerEvents: scrollIndicatorOpacity < 0.3 ? 'none' : 'auto',
        }}
        onClick={scrollToContent}
      >
        <span className="text-xs sm:text-sm tracking-wide">Scroll to explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};
