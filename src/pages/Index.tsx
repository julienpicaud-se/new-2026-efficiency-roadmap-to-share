import { useState } from "react";
import { Navigation } from "@/components/playbook/Navigation";
import { HeroSection } from "@/components/playbook/HeroSection";
import { ExecutiveSummary } from "@/components/playbook/ExecutiveSummary";
import { PlatformShiftSection } from "@/components/playbook/PlatformShiftSection";
import { ProductScopeSection } from "@/components/playbook/ProductScopeSection";
import { PersonasSection } from "@/components/playbook/PersonasSection";
import { JobsToBeDoneSection } from "@/components/playbook/JobsToBeDoneSection";
import { VOCEvidenceSection } from "@/components/playbook/VOCEvidenceSection";
import { SECorporateBlueprintSection } from "@/components/playbook/SECorporateBlueprintSection";
import { PainInventorySection } from "@/components/playbook/PainInventorySection";
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
import { ArchitectureDecisionSection } from "@/components/playbook/ArchitectureDecisionSection";
import { MaturityLadderSection } from "@/components/playbook/MaturityLadderSection";
// import { DeliveryRoadmapSection } from "@/components/playbook/DeliveryRoadmapSection";
import { AppendixSection } from "@/components/playbook/AppendixSection";
import { ExecutiveTakeaway } from "@/components/playbook/ExecutiveTakeaway";
import { GlossarySection } from "@/components/playbook/GlossarySection";
import { PhasingSection } from "@/components/playbook/PhasingSection";
import { IDMVisionSection } from "@/components/playbook/IDMVisionSection";
import { ReadingProgressBar } from "@/components/playbook/ReadingProgressBar";
import { PresentationMode } from "@/components/playbook/PresentationMode";
import { useKeyboardNavigation } from "@/hooks/useKeyboardNavigation";

const Index = () => {
  const [isPresentationMode, setIsPresentationMode] = useState(false);
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
      <PlatformShiftSection />
      <ProductScopeSection />
      <PersonasSection />
      <JobsToBeDoneSection />
      <VOCEvidenceSection />
      <SECorporateBlueprintSection />
      <PainInventorySection />
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
      <MaturityLadderSection />
      <ArchitectureDecisionSection />
      {/* <DeliveryRoadmapSection /> */}
      <AppendixSection />
      <ExecutiveTakeaway />
      <GlossarySection />
    </div>
  );
};

export default Index;
