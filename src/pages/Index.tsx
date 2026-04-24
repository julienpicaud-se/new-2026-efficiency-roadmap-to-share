import { useState } from "react";
import { Navigation } from "@/components/playbook/Navigation";
import { HeroSection } from "@/components/playbook/HeroSection";
import { ExecutiveSummary } from "@/components/playbook/ExecutiveSummary";
import { KeyChallengesSection } from "@/components/playbook/KeyChallengesSection";
import { StrategicPillars } from "@/components/playbook/StrategicPillars";
import { ExistingToolsSection } from "@/components/playbook/ExistingToolsSection";
import { RegionalJourneyComparison } from "@/components/playbook/RegionalJourneyComparison";
import { ECMIngestionEngineSection } from "@/components/playbook/ECMIngestionEngineSection";
import { StrategicContextSection } from "@/components/playbook/StrategicContextSection";
import { WhatIfSection } from "@/components/playbook/WhatIfSection";
import { OutOfScopeSection } from "@/components/playbook/OutOfScopeSection";
import { SuccessMetricsSection } from "@/components/playbook/SuccessMetricsSection";
import { GuardrailsSection } from "@/components/playbook/GuardrailsSection";
import { ECMCapabilityMapping } from "@/components/playbook/ECMCapabilityMapping";
import { AppendixSection } from "@/components/playbook/AppendixSection";
import { ExecutiveTakeaway } from "@/components/playbook/ExecutiveTakeaway";
import { ReadingProgressBar } from "@/components/playbook/ReadingProgressBar";
import { PresentationMode } from "@/components/playbook/PresentationMode";
import { useKeyboardNavigation } from "@/hooks/useKeyboardNavigation";

const Index = () => {
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  
  // Enable keyboard navigation
  useKeyboardNavigation();

  return (
    <div className="min-h-screen bg-background">
      <ReadingProgressBar />
      <Navigation onPresentationMode={() => setIsPresentationMode(true)} />
      <PresentationMode 
        isActive={isPresentationMode} 
        onClose={() => setIsPresentationMode(false)} 
      />
      <HeroSection />
      <ExecutiveSummary />
      <KeyChallengesSection />
      <StrategicPillars />
      <ExistingToolsSection />
      <RegionalJourneyComparison />
      <ECMIngestionEngineSection />
      <StrategicContextSection />
      <WhatIfSection />
      <OutOfScopeSection />
      <SuccessMetricsSection />
      <GuardrailsSection />
      <ECMCapabilityMapping />
      <AppendixSection />
      <ExecutiveTakeaway />
    </div>
  );
};

export default Index;
