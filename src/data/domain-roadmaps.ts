export const getDomainById = (id: string) => {
  return domainRoadmaps.find(domain => domain.id === id);
};

export interface DomainInitiative {
  horizon: "Now" | "Next" | "Later";
  pillars: string[];
  valueDriver: string;
  initiative: string;
  objective: string;
  primaryKR: string;
  proofMetric: string;
  aiLeverage: string;
  customerROI: string;
}

export interface DomainRoadmap {
  id: string;
  domain: string;
  icon: string;
  description: string;
  overview: string;
  initiatives: DomainInitiative[];
}

export const domainRoadmaps: DomainRoadmap[] = [
  {
    id: "sales-discovery",
    domain: "Sales Discovery",
    icon: "Search",
    description: "Faster qualification with early efficiency insights and data-light ranges",
    overview: "Enable account executives and SDRs to spot opportunities from minimal site facts, provide data-light ROM ranges with confidence labels, and build credibility with evidence snippets and case patterns. Primary users: Account executives, SDRs, Solution consultants.",
    initiatives: [
      {
        horizon: "Now",
        pillars: ["Upsell Engine"],
        valueDriver: "Pipeline qualification",
        initiative: "Opportunity spotting from minimal site facts",
        objective: "O2",
        primaryKR: "KR4",
        proofMetric: "Time to first ROM",
        aiLeverage: "Pattern matching for site similarity",
        customerROI: "Faster qualification decisions"
      },
      {
        horizon: "Now",
        pillars: ["Upsell Engine"],
        valueDriver: "Credibility building",
        initiative: "Data-light ROM ranges with confidence labels",
        objective: "O2",
        primaryKR: "KR5",
        proofMetric: "ROM accuracy vs final",
        aiLeverage: "Confidence scoring models",
        customerROI: "Earlier business case"
      },
      {
        horizon: "Now",
        pillars: ["Upsell Engine"],
        valueDriver: "Market relevance",
        initiative: "Quick applicability checks by segment, geography, asset type",
        objective: "O1",
        primaryKR: "KR3",
        proofMetric: "Applicability check speed",
        aiLeverage: "Rule-based filtering",
        customerROI: "Qualified pipeline uplift"
      },
      {
        horizon: "Next",
        pillars: ["Upsell Engine"],
        valueDriver: "Social proof",
        initiative: "Evidence snippets and case patterns for credibility",
        objective: "O2",
        primaryKR: "KR5",
        proofMetric: "Conversion to technical discovery",
        aiLeverage: "Similar case retrieval",
        customerROI: "Better pipeline quality"
      },
      {
        horizon: "Next",
        pillars: ["Upsell Engine"],
        valueDriver: "Early value",
        initiative: "Pre-meeting site-relevant efficiency opportunities",
        objective: "O3",
        primaryKR: "KR7",
        proofMetric: "Meeting preparation time",
        aiLeverage: "Site profile analysis",
        customerROI: "Stronger first impression"
      },
      {
        horizon: "Later",
        pillars: ["Recurring Revenue"],
        valueDriver: "Pipeline automation",
        initiative: "Automated opportunity alerts from platform data",
        objective: "O2",
        primaryKR: "KR6",
        proofMetric: "Proactive lead generation",
        aiLeverage: "Anomaly and opportunity detection",
        customerROI: "Proactive customer engagement"
      }
    ]
  },
  {
    id: "presales-scoping",
    domain: "Pre-sales Scoping",
    icon: "Settings",
    description: "Consistent scoping with parameterized templates and scenario analysis",
    overview: "Support solution architects and sales engineers with parameterized efficiency templates, stacking logic for interactions and saturation effects, sensitivity analysis, and seamless CPQ export. Primary users: Solution architects, Sales engineers.",
    initiatives: [
      {
        horizon: "Now",
        pillars: ["Productivity"],
        valueDriver: "Consistency",
        initiative: "Parameterized efficiency templates with inputs and default assumptions",
        objective: "O1",
        primaryKR: "KR1",
        proofMetric: "Template coverage %",
        aiLeverage: "Default value optimization",
        customerROI: "Reduced scoping time"
      },
      {
        horizon: "Now",
        pillars: ["Productivity"],
        valueDriver: "Accuracy",
        initiative: "Stacking logic for interactions and saturation effects",
        objective: "O1",
        primaryKR: "KR2",
        proofMetric: "Calculation accuracy",
        aiLeverage: "Interaction modeling",
        customerROI: "Realistic savings estimates"
      },
      {
        horizon: "Next",
        pillars: ["Productivity"],
        valueDriver: "Analysis depth",
        initiative: "Sensitivity analysis and scenario comparison",
        objective: "O2",
        primaryKR: "KR5",
        proofMetric: "Scenarios per quote",
        aiLeverage: "Automated sensitivity ranges",
        customerROI: "Better decision support"
      },
      {
        horizon: "Next",
        pillars: ["Productivity"],
        valueDriver: "Workflow integration",
        initiative: "Export to CPQ with aligned assumptions and notes",
        objective: "O1",
        primaryKR: "KR3",
        proofMetric: "CPQ integration adoption",
        aiLeverage: "Data mapping automation",
        customerROI: "Faster quote generation"
      },
      {
        horizon: "Later",
        pillars: ["Productivity"],
        valueDriver: "Cross-team alignment",
        initiative: "Alignment score tracking between sales and delivery",
        objective: "O1",
        primaryKR: "KR2",
        proofMetric: "Sales-delivery alignment %",
        aiLeverage: "Discrepancy detection",
        customerROI: "Smoother handoffs"
      },
      {
        horizon: "Later",
        pillars: ["Productivity"],
        valueDriver: "Cycle optimization",
        initiative: "Rework rate reduction through standardization",
        objective: "O1",
        primaryKR: "KR1",
        proofMetric: "Rework rate %",
        aiLeverage: "Pattern analysis for rework causes",
        customerROI: "Quote cycle time reduction"
      }
    ]
  },
  {
    id: "proposal-alignment",
    domain: "Proposal Alignment",
    icon: "FileCheck",
    description: "Reduced commercial risk with traceability and confidence bands",
    overview: "Enable sales, finance, and legal reviewers to maintain ROM-to-quote traceability, apply confidence bands and risk notes, and leverage incentive/regulatory linkbacks. Primary users: Sales, Finance reviewers, Legal reviewers.",
    initiatives: [
      {
        horizon: "Now",
        pillars: ["Productivity"],
        valueDriver: "Traceability",
        initiative: "ROM to quote traceability with assumption registry",
        objective: "O1",
        primaryKR: "KR2",
        proofMetric: "Assumption documentation %",
        aiLeverage: "Automated assumption extraction",
        customerROI: "Reduced commercial risk"
      },
      {
        horizon: "Now",
        pillars: ["Upsell Engine"],
        valueDriver: "Risk transparency",
        initiative: "Confidence bands and risk notes per recommendation",
        objective: "O2",
        primaryKR: "KR5",
        proofMetric: "Risk documentation coverage",
        aiLeverage: "Confidence scoring",
        customerROI: "Fewer redlines"
      },
      {
        horizon: "Next",
        pillars: ["Recurring Revenue"],
        valueDriver: "Value enhancement",
        initiative: "Incentive and regulatory linkbacks where relevant",
        objective: "O2",
        primaryKR: "KR6",
        proofMetric: "Incentive capture rate",
        aiLeverage: "Regulatory matching",
        customerROI: "Additional value for customers"
      },
      {
        horizon: "Next",
        pillars: ["Productivity"],
        valueDriver: "Compliance",
        initiative: "Non-binding language blocks and scope notes",
        objective: "O1",
        primaryKR: "KR3",
        proofMetric: "Legal review time",
        aiLeverage: "Template standardization",
        customerROI: "Higher win probability"
      },
      {
        horizon: "Later",
        pillars: ["Productivity"],
        valueDriver: "Negotiation efficiency",
        initiative: "Redline reduction through transparency",
        objective: "O1",
        primaryKR: "KR1",
        proofMetric: "Redline count per deal",
        aiLeverage: "Common objection prediction",
        customerROI: "Time to signature reduction"
      },
      {
        horizon: "Later",
        pillars: ["Upsell Engine"],
        valueDriver: "Deal optimization",
        initiative: "Discount pressure analysis",
        objective: "O2",
        primaryKR: "KR5",
        proofMetric: "Discount variance analysis",
        aiLeverage: "Pricing pattern analysis",
        customerROI: "Win rate improvement"
      }
    ]
  },
  {
    id: "delivery-handoff",
    domain: "Delivery Handoff",
    icon: "Package",
    description: "Smooth handoff with complete packages and clear M&V needs",
    overview: "Provide delivery managers and field engineers with complete handoff packages including selected opportunity sets, inputs, rationales, commissioning placeholders, and M&V data needs. Primary users: Delivery managers, Field engineers.",
    initiatives: [
      {
        horizon: "Now",
        pillars: ["Productivity"],
        valueDriver: "Handoff quality",
        initiative: "Handoff package with selected opportunity set, inputs, and rationales",
        objective: "O1",
        primaryKR: "KR2",
        proofMetric: "Handoff completeness score",
        aiLeverage: "Automated package generation",
        customerROI: "Fewer surprises in delivery"
      },
      {
        horizon: "Now",
        pillars: ["Productivity"],
        valueDriver: "M&V readiness",
        initiative: "Commissioning and M&V placeholders and data needs",
        objective: "O1",
        primaryKR: "KR3",
        proofMetric: "M&V data readiness %",
        aiLeverage: "Data requirement detection",
        customerROI: "Faster time to value"
      },
      {
        horizon: "Next",
        pillars: ["Productivity"],
        valueDriver: "Execution planning",
        initiative: "Task list templates and dependencies",
        objective: "O1",
        primaryKR: "KR1",
        proofMetric: "Time to kickoff",
        aiLeverage: "Dependency mapping",
        customerROI: "Smooth project start"
      },
      {
        horizon: "Next",
        pillars: ["Productivity"],
        valueDriver: "Context preservation",
        initiative: "Complete assumption and context documentation",
        objective: "O1",
        primaryKR: "KR2",
        proofMetric: "Context documentation score",
        aiLeverage: "Automated context extraction",
        customerROI: "No lost context"
      },
      {
        horizon: "Later",
        pillars: ["Productivity"],
        valueDriver: "Change management",
        initiative: "Change order rate reduction",
        objective: "O1",
        primaryKR: "KR1",
        proofMetric: "Change order rate %",
        aiLeverage: "Scope gap prediction",
        customerROI: "Budget predictability"
      },
      {
        horizon: "Later",
        pillars: ["Recurring Revenue"],
        valueDriver: "Feedback loop",
        initiative: "Delivery outcomes feeding back to the strategy foundation",
        objective: "O1",
        primaryKR: "KR1",
        proofMetric: "Feedback integration rate",
        aiLeverage: "Outcome pattern learning",
        customerROI: "Continuously improving recommendations"
      }
    ]
  },
  {
    id: "customer-experience",
    domain: "Customer Experience",
    icon: "Users",
    description: "Self-service insights with impact labels and expert escalation paths",
    overview: "Enable facility managers, sustainability leaders, and operators to see in-product recommendations, explore scenarios, and request expert help seamlessly. Primary users: Facility managers, Sustainability leaders, Operators.",
    initiatives: [
      {
        horizon: "Now",
        pillars: ["Recurring Revenue"],
        valueDriver: "In-product value",
        initiative: "In-product recommendations with impact and effort labels",
        objective: "O2",
        primaryKR: "KR4",
        proofMetric: "Feature adoption rate",
        aiLeverage: "Impact scoring",
        customerROI: "Self-service insights"
      },
      {
        horizon: "Now",
        pillars: ["Recurring Revenue"],
        valueDriver: "Continuous value",
        initiative: "Next-best efficiency suggestions as data evolves",
        objective: "O2",
        primaryKR: "KR5",
        proofMetric: "Suggestion relevance score",
        aiLeverage: "Contextual recommendation",
        customerROI: "Always-fresh advice"
      },
      {
        horizon: "Next",
        pillars: ["Recurring Revenue"],
        valueDriver: "Decision support",
        initiative: "Scenario comparison and prioritization frameworks",
        objective: "O3",
        primaryKR: "KR9",
        proofMetric: "Scenarios compared per session",
        aiLeverage: "Trade-off analysis",
        customerROI: "Better investment decisions"
      },
      {
        horizon: "Next",
        pillars: ["Recurring Revenue"],
        valueDriver: "Transparency",
        initiative: "Transparent assumptions, DIY inputs, and request help links",
        objective: "O2",
        primaryKR: "KR5",
        proofMetric: "DIY input completion rate",
        aiLeverage: "Assumption explanation generation",
        customerROI: "Trust through transparency"
      },
      {
        horizon: "Later",
        pillars: ["Upsell Engine"],
        valueDriver: "Upsell path",
        initiative: "Request expert help from any advice card",
        objective: "O2",
        primaryKR: "KR4",
        proofMetric: "Expert request conversion",
        aiLeverage: "Engagement timing optimization",
        customerROI: "Seamless expert access"
      },
      {
        horizon: "Later",
        pillars: ["Recurring Revenue"],
        valueDriver: "Realized value",
        initiative: "Realized savings tracking and reporting",
        objective: "O3",
        primaryKR: "KR9",
        proofMetric: "Reported savings accuracy",
        aiLeverage: "M&V automation",
        customerROI: "Demonstrated ROI"
      }
    ]
  },
  {
    id: "guardrails-trust",
    domain: "Guardrails & Trust",
    icon: "Shield",
    description: "Protecting trust while exposing expert content for upsell",
    overview: "Implement transparency standards, data quality checks, risk compliance, commercial separation, and user experience guardrails to protect trust while enabling customer-facing advisory. Foundation for all customer-facing efficiency guidance.",
    initiatives: [
      {
        horizon: "Now",
        pillars: ["Recurring Revenue", "Upsell Engine"],
        valueDriver: "Trust foundation",
        initiative: "Label advice as guidance, not commercial commitment",
        objective: "O2",
        primaryKR: "KR5",
        proofMetric: "Compliance audit score",
        aiLeverage: "Language validation",
        customerROI: "Clear expectations"
      },
      {
        horizon: "Now",
        pillars: ["Recurring Revenue"],
        valueDriver: "Transparency",
        initiative: "Present savings/cost as ranges with confidence levels",
        objective: "O2",
        primaryKR: "KR5",
        proofMetric: "Range disclosure rate",
        aiLeverage: "Confidence scoring",
        customerROI: "Informed decisions"
      },
      {
        horizon: "Now",
        pillars: ["Recurring Revenue"],
        valueDriver: "Data quality",
        initiative: "Enforce minimum data checks before showing estimates",
        objective: "O1",
        primaryKR: "KR3",
        proofMetric: "Data quality gate pass rate",
        aiLeverage: "Automated data validation",
        customerROI: "Reliable estimates"
      },
      {
        horizon: "Next",
        pillars: ["Upsell Engine"],
        valueDriver: "Expert routing",
        initiative: "Do not auto-suggest complex measures requiring licensed engineering without an expert path",
        objective: "O2",
        primaryKR: "KR4",
        proofMetric: "Expert routing accuracy",
        aiLeverage: "Complexity classification",
        customerROI: "Appropriate expertise access"
      },
      {
        horizon: "Next",
        pillars: ["Productivity"],
        valueDriver: "Auditability",
        initiative: "Maintain audit trails of advice shown and inputs used",
        objective: "O1",
        primaryKR: "KR2",
        proofMetric: "Audit trail completeness",
        aiLeverage: "Automated logging",
        customerROI: "Full transparency"
      },
      {
        horizon: "Later",
        pillars: ["Recurring Revenue"],
        valueDriver: "Commercial integrity",
        initiative: "Keep advisory guidance separate from pricing decisions",
        objective: "O1",
        primaryKR: "KR3",
        proofMetric: "Separation compliance %",
        aiLeverage: "Boundary enforcement",
        customerROI: "Trust preserved"
      },
      {
        horizon: "Later",
        pillars: ["Productivity"],
        valueDriver: "Single source of truth",
        initiative: "Single source of truth for assumptions across advice and quotes",
        objective: "O1",
        primaryKR: "KR1",
        proofMetric: "Assumption consistency score",
        aiLeverage: "Consistency validation",
        customerROI: "No conflicting information"
      }
    ]
  },
  {
    id: "ecm-foundation",
    domain: "Strategy Foundation",
    icon: "Database",
    description: "The governed strategy foundation for opportunity logic, assumptions, and quality standards",
    overview: "Establish the strategy foundation as the single source of truth with unified taxonomy, versioning, governance, required fields, and continuous improvement from provisional guidance to validated outcomes. Foundation for all other capabilities.",
    initiatives: [
      {
        horizon: "Now",
        pillars: ["Productivity"],
        valueDriver: "Standardization",
        initiative: "Finalize and govern unified efficiency taxonomy",
        objective: "O1",
        primaryKR: "KR1",
        proofMetric: "Taxonomy completion %",
        aiLeverage: "Taxonomy validation",
        customerROI: "Consistent language"
      },
      {
        horizon: "Now",
        pillars: ["Productivity"],
        valueDriver: "Foundation",
        initiative: "Publish provisional guidance base with SME review",
        objective: "O1",
        primaryKR: "KR2",
        proofMetric: "Library coverage %",
        aiLeverage: "SME workflow automation",
        customerROI: "Immediate access to guidance"
      },
      {
        horizon: "Now",
        pillars: ["Productivity"],
        valueDriver: "Data quality",
        initiative: "Define required fields and DQA processes",
        objective: "O1",
        primaryKR: "KR1",
        proofMetric: "Data quality score",
        aiLeverage: "Automated DQA checks",
        customerROI: "Reliable guidance data"
      },
      {
        horizon: "Next",
        pillars: ["Productivity"],
        valueDriver: "Evolution",
        initiative: "Replace provisional with mined data as extraction matures",
        objective: "O1",
        primaryKR: "KR2",
        proofMetric: "Mined vs provisional ratio",
        aiLeverage: "Data extraction pipeline",
        customerROI: "Ever-improving accuracy"
      },
      {
        horizon: "Next",
        pillars: ["Productivity"],
        valueDriver: "Governance",
        initiative: "Versioning and change management processes",
        objective: "O1",
        primaryKR: "KR1",
        proofMetric: "Version control compliance",
        aiLeverage: "Change impact analysis",
        customerROI: "Stable, trusted foundation"
      },
      {
        horizon: "Later",
        pillars: ["Recurring Revenue"],
        valueDriver: "Continuous learning",
        initiative: "M&V feedback loop for assumption improvement",
        objective: "O1",
        primaryKR: "KR1",
        proofMetric: "Assumption accuracy trend",
        aiLeverage: "Outcome-based learning",
        customerROI: "Better predictions over time"
      },
      {
        horizon: "Later",
        pillars: ["Productivity"],
        valueDriver: "Validated quality",
        initiative: "Provisional → mined → validated evolution complete",
        objective: "O1",
        primaryKR: "KR2",
        proofMetric: "Validated guidance coverage %",
        aiLeverage: "Validation automation",
        customerROI: "Highest confidence recommendations"
      }
    ]
  },
  {
    id: "strategy-integration",
    domain: "Strategy Integration",
    icon: "Target",
    description: "Top-down goal-based efficiency guidance powering customer strategy",
    overview: "Connect the efficiency strategy foundation to Strategy for goal-based recommendations. Feed guidance directly into Actions and planning workflows. First customer-facing milestone that proves value early.",
    initiatives: [
      {
        horizon: "Now",
        pillars: ["Recurring Revenue"],
        valueDriver: "Customer value",
        initiative: "Connect efficiency guidance to Strategy via clean service boundary",
        objective: "O2",
        primaryKR: "KR4",
        proofMetric: "Integration live date",
        aiLeverage: "Service interface design",
        customerROI: "Goal-based efficiency access"
      },
      {
        horizon: "Now",
        pillars: ["Recurring Revenue"],
        valueDriver: "Actionability",
        initiative: "Return recommendations based on goals, constraints, and site descriptors",
        objective: "O2",
        primaryKR: "KR5",
        proofMetric: "Recommendation relevance score",
        aiLeverage: "Goal-to-action matching",
        customerROI: "What should I do? answered"
      },
      {
        horizon: "Next",
        pillars: ["Recurring Revenue"],
        valueDriver: "Workflow integration",
        initiative: "Feed recommendations directly into Strategy Actions and planning",
        objective: "O2",
        primaryKR: "KR6",
        proofMetric: "Action creation from recommendations",
        aiLeverage: "Workflow automation",
        customerROI: "Seamless planning"
      },
      {
        horizon: "Next",
        pillars: ["Recurring Revenue"],
        valueDriver: "Customer engagement",
        initiative: "Customer-facing efficiency recommendations in Strategy",
        objective: "O3",
        primaryKR: "KR7",
        proofMetric: "Customer engagement rate",
        aiLeverage: "Personalized presentation",
        customerROI: "Clear path from strategy to action"
      },
      {
        horizon: "Later",
        pillars: ["Recurring Revenue"],
        valueDriver: "Intelligence",
        initiative: "AI-powered goal optimization and action prioritization",
        objective: "O2",
        primaryKR: "KR5",
        proofMetric: "Optimization adoption",
        aiLeverage: "Multi-objective optimization",
        customerROI: "Optimal decarbonization path"
      },
      {
        horizon: "Later",
        pillars: ["Recurring Revenue"],
        valueDriver: "Continuous improvement",
        initiative: "Strategy outcome feedback to the strategy foundation",
        objective: "O1",
        primaryKR: "KR1",
        proofMetric: "Feedback loop active",
        aiLeverage: "Outcome-based refinement",
        customerROI: "Ever-improving recommendations"
      }
    ]
  }
];
