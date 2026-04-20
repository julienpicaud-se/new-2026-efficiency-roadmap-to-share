// Beyond ECM Library - Energy Efficiency Playbook Data

export const strategicPillars = [
  {
    id: "productivity",
    title: "Productivity Gains",
    tagline: "For the efficiency team",
    promise: "We develop the ECM Library to directly improve auditor effectiveness through faster assessments, consistent calculations, and structured deliverables.",
    description: "Lower cost to serve and higher audit capacity without linear headcount growth. The ECM Library enables faster on-site assessments through standardized ECM logic and defaults, consistent calculations and outputs across audits, and structured visual audit deliverables generated in the platform.",
    whatLivesHere: [
      "Faster on-site assessments through standardized ECM logic and defaults",
      "Consistent calculations, assumptions, and outputs across audits",
      "Structured, visual audit deliverables generated in the platform",
      "Less rework, less manual slide building, higher throughput per auditor",
      "Centralized client context across sites, audits, and recommendations",
    ],
    successMetrics: [
      "Audits completed faster with higher consistency",
      "Reduced time to quote for efficiency engagements",
      "Lower cost to serve per audit",
      "Higher throughput per auditor",
    ],
    icon: "Layers",
    color: "from-primary to-secondary",
  },
  {
    id: "upsell-engine",
    title: "Upsell Engine",
    tagline: "For advanced audit projects",
    promise: "We intentionally expose selected expert content and early advisory to create demand for deeper, paid audit engagements.",
    description: "Higher conversion to advanced audits and better qualified audit pipeline for the efficiency team. By exposing early ECM insights, customers see the value of deeper analysis, creating pull for advanced audit services.",
    whatLivesHere: [
      "Early identification of high-potential ECMs before a full audit",
      "Clear visibility into what deeper analysis would unlock",
      "In-product calls to action to request advanced audits or detailed studies",
      "Pre-filled context and assumptions when an audit is quoted or launched",
      "Seamless path from early insight to expert engagement",
    ],
    successMetrics: [
      "Increased upsell rate from early advisory to advanced audits",
      "Better audit win rates",
      "Shorter sales cycles for audits",
      "Higher qualified pipeline from in-product prompts",
    ],
    icon: "LineChart",
    color: "from-secondary to-primary",
  },
  {
    id: "recurring-revenue",
    title: "Recurring RA+ Revenue",
    tagline: "Through in-product efficiency advice",
    promise: "We productize early-stage efficiency insights as part of the RA+ experience, delivering continuous value beyond one-off audits.",
    description: "Recurring revenue justified by continuous efficiency guidance, not just reporting. A shift from one-off audit value to ongoing advisory value creates stronger platform stickiness and differentiation.",
    whatLivesHere: [
      "Continuous, contextual ECM recommendations inside the platform",
      "Value delivered even without a full on-site audit",
      "A shift from one-off audit value to ongoing advisory value",
      "Stronger platform stickiness and differentiation",
      "Goal-to-ECM recommendations integrated in Strategy module",
    ],
    successMetrics: [
      "Measurable adoption of in-product efficiency recommendations",
      "Tangible contribution to RA+ recurring revenue",
      "Platform stickiness improvement",
      "Customer self-service engagement rates",
    ],
    icon: "Sparkles",
    color: "from-primary via-secondary to-primary",
  },
];

export const objectives = [
  {
    id: "O1",
    title: "Establish ECM Library as the authoritative foundation",
    linkedPillar: "productivity",
    customerOutcome: "A governed, high-quality ECM dataset that improves continuously and serves as backbone for all efficiency features.",
    businessValue: "Single source of truth for ECMs and assumptions across all modules and workflows.",
    keyResults: [
      { id: "KR1", title: "Unified ECM taxonomy finalized and governed", metric: "100%", roiMetric: "Standardization score" },
      { id: "KR2", title: "Provisional ECM Library published", metric: "Seed list + SME review", roiMetric: "Library completeness" },
      { id: "KR3", title: "Clean service boundaries defined", metric: "All modules", roiMetric: "Integration readiness" },
    ],
  },
  {
    id: "O2",
    title: "Deliver customer value through Strategy integration",
    linkedPillar: "recurring-revenue",
    customerOutcome: "Customers can quickly answer 'What should I do?' through Goal → ECM recommendations directly in RA+.",
    businessValue: "First customer-facing milestone that proves value early and creates demand for deeper analysis.",
    keyResults: [
      { id: "KR4", title: "ECM Library → Strategy integration live", metric: "Q1 2026", roiMetric: "Customer adoption" },
      { id: "KR5", title: "Goal-based ECM recommendations working", metric: "Enabled", roiMetric: "Recommendation accuracy" },
      { id: "KR6", title: "Actions and planning workflows connected", metric: "Complete", roiMetric: "Workflow efficiency" },
    ],
  },
  {
    id: "O3",
    title: "Introduce bottom-up Building View for ECM discovery",
    linkedPillar: "upsell-engine",
    customerOutcome: "Customers can drill into specific buildings to see site-level ECM relevance and opportunities.",
    businessValue: "Creates first bottom-up experience and bridges toward full Energy Efficiency product.",
    keyResults: [
      { id: "KR7", title: "Building View MVP launched", metric: "2026", roiMetric: "Site coverage" },
      { id: "KR8", title: "Site-level ECM relevance surfacing", metric: "Enabled", roiMetric: "Discovery rate" },
      { id: "KR9", title: "Pattern logic for opportunity identification", metric: "Operational", roiMetric: "Hit rate" },
    ],
  },
];

export const roadmapBets = {
  now: [
    { title: "Finalize unified ECM taxonomy", pillar: "productivity", outcome: "Standardized systems, subsystems, and measure types", objective: "O1", kr: "KR1" },
    { title: "Publish provisional ECM Library", pillar: "productivity", outcome: "Seed list with SME review complete", objective: "O1", kr: "KR2" },
    { title: "Define clean service boundaries", pillar: "recurring-revenue", outcome: "Clear interfaces for Strategy and future modules", objective: "O1", kr: "KR3" },
    { title: "Connect ECM Library to Strategy", pillar: "recurring-revenue", outcome: "Goal-based ECM recommendations live", objective: "O2", kr: "KR4" },
    { title: "Define guardrails for customer-facing advice", pillar: "upsell-engine", outcome: "Trust and credibility protected", objective: "O2", kr: "KR5" },
    { title: "Establish data quality standards", pillar: "productivity", outcome: "Required fields and DQA processes", objective: "O1", kr: "KR1" },
  ],
  next: [
    { title: "Launch Building View MVP", pillar: "upsell-engine", outcome: "Site-level ECM discovery available", objective: "O3", kr: "KR7" },
    { title: "Implement ECM relevance logic", pillar: "upsell-engine", outcome: "Pattern-based opportunity surfacing", objective: "O3", kr: "KR8" },
    { title: "Enable customer self-service exploration", pillar: "recurring-revenue", outcome: "DIY inputs and scenario comparison", objective: "O3", kr: "KR9" },
    { title: "Build structured audit deliverables", pillar: "productivity", outcome: "Platform-native reports replace slides", objective: "O1", kr: "KR2" },
    { title: "Integrate AkitaBox/SCADA data", pillar: "productivity", outcome: "Enhanced site context", objective: "O3", kr: "KR7" },
    { title: "Deploy rule-based ECM surfacing", pillar: "recurring-revenue", outcome: "Automated recommendations", objective: "O2", kr: "KR5" },
  ],
  later: [
    { title: "Full auditor workflow integration", pillar: "productivity", outcome: "End-to-end digital audit process", objective: "O1", kr: "KR2" },
    { title: "M&V feedback loop implementation", pillar: "productivity", outcome: "Continuous improvement from outcomes", objective: "O1", kr: "KR1" },
    { title: "AI-powered ECM recommendations", pillar: "recurring-revenue", outcome: "Similarity clustering and ML models", objective: "O2", kr: "KR5" },
    { title: "Stand-alone Energy Efficiency product", pillar: "recurring-revenue", outcome: "Full EE capability in RA+", objective: "O3", kr: "KR9" },
    { title: "Analytics integration", pillar: "upsell-engine", outcome: "Advanced insights and reporting", objective: "O3", kr: "KR8" },
    { title: "Weather and external data integration", pillar: "productivity", outcome: "Enhanced prediction accuracy", objective: "O2", kr: "KR6" },
  ],
};

export const domainInitiatives = [
  {
    domain: "Sales Discovery",
    initiatives: [
      "Opportunity spotting from minimal site facts",
      "Data-light ROM ranges with confidence labels",
      "Quick applicability checks by segment and geography",
      "Evidence snippets and case patterns for credibility",
      "Early business case generation",
      "Pipeline qualification acceleration",
    ],
  },
  {
    domain: "Pre-sales Scoping",
    initiatives: [
      "Parameterized ECM templates with defaults",
      "Stacking logic for interactions and saturation",
      "Sensitivity analysis and scenario comparison",
      "Export to CPQ with aligned assumptions",
      "Consistent scoping across sales and delivery",
      "Reduced rework and faster quote cycles",
    ],
  },
  {
    domain: "Proposal Alignment",
    initiatives: [
      "ROM to quote traceability",
      "Confidence bands and risk notes per ECM",
      "Incentive and regulatory linkbacks",
      "Non-binding language blocks",
      "Assumption registry for transparency",
      "Reduced commercial risk and redlines",
    ],
  },
  {
    domain: "Delivery Handoff",
    initiatives: [
      "Handoff package with ECM set and rationales",
      "Commissioning and M&V placeholders",
      "Task list templates and dependencies",
      "Data needs documentation",
      "Smooth transition to field execution",
      "Reduced change order rates",
    ],
  },
  {
    domain: "Customer Experience",
    initiatives: [
      "In-product recommendations with impact labels",
      "Next-best ECM suggestions as data evolves",
      "Scenario comparison and prioritization",
      "Transparent assumptions and DIY inputs",
      "Request help links from any advice card",
      "Self-service insights with upsell paths",
    ],
  },
  {
    domain: "Guardrails & Trust",
    initiatives: [
      "Advice labeled as guidance, not commitment",
      "Savings shown as ranges with confidence levels",
      "Data freshness and gap indicators",
      "Expert escalation paths clearly visible",
      "Audit trails of advice shown",
    ],
  },
];

export const roiLevers = [
  {
    lever: "Team Productivity",
    description: "Faster audits, consistent calculations, and structured deliverables reduce effort per engagement",
    metrics: ["Audit completion time", "Throughput per auditor", "Rework reduction"],
    icon: "TrendingDown",
  },
  {
    lever: "Upsell Conversion",
    description: "Early advisory creates demand for advanced audits and detailed engineering studies",
    metrics: ["Advisory-to-audit conversion", "Pipeline from in-product", "Win rate improvement"],
    icon: "TrendingUp",
  },
  {
    lever: "Platform Revenue",
    description: "Continuous efficiency guidance justifies recurring RA+ subscription value",
    metrics: ["Feature adoption rate", "Recurring revenue contribution", "Customer retention"],
    icon: "DollarSign",
  },
  {
    lever: "Customer Self-Service",
    description: "Customers discover insights on their own, then request deeper audits when ready",
    metrics: ["Self-service actions", "Time to first engagement", "Customer satisfaction"],
    icon: "Users",
  },
];

export const aiScorecard = [
  { metric: "ECM Library Coverage", target: "100%", description: "Core ECMs documented with full metadata" },
  { metric: "Strategy Integration", target: "Live", description: "Goal → ECM recommendations working" },
  { metric: "Building View", target: "2026", description: "Site-level ECM discovery available" },
  { metric: "Audit Consistency", target: ">90%", description: "Standardized calculations across audits" },
];

export const startStopMatrix = {
  audits: {
    theme: "Audit Workflows",
    stop: "Manual workflows and PowerPoint deliverables that don't scale",
    start: "Structured, digital audit workflows with platform-native deliverables",
  },
  context: {
    theme: "Client Context",
    stop: "Fragmented across tools and documents, recreated for each engagement",
    start: "Centralized once and reused across audits, quotes, and follow-ups",
  },
  expertise: {
    theme: "Expert Advisory",
    stop: "Delivered late in the cycle and does not scale beyond individual consultants",
    start: "Exposed early in-product to create pull for advanced audit projects",
  },
  value: {
    theme: "Recurring Value",
    stop: "One-off audit value with no ongoing customer touchpoint",
    start: "Continuous efficiency guidance that supports RA+ recurring revenue",
  },
  discovery: {
    theme: "Opportunity Discovery",
    stop: "Customers wait for full audit to learn what's possible",
    start: "Early, credible efficiency advice visible directly in RA+",
  },
  deliverables: {
    theme: "Audit Deliverables",
    stop: "Slide-driven processes requiring manual assembly",
    start: "Structured, visual, interactive deliverables generated in platform",
  },
  recommendations: {
    theme: "ECM Recommendations",
    stop: "Static documentation that requires expert interpretation",
    start: "Actionable capabilities with transparent assumptions and confidence levels",
  },
  feedback: {
    theme: "Continuous Improvement",
    stop: "Delivered audits are isolated, not feeding back into system",
    start: "Every audit improves future recommendations through M&V feedback",
  },
};

export const northStarMetrics = [
  { metric: "Audit Speed", target: "2x faster", description: "Audits completed with higher consistency" },
  { metric: "Upsell Rate", target: "Increase", description: "From early advisory to advanced audits" },
  { metric: "Platform Adoption", target: "Measurable", description: "In-product efficiency recommendations used" },
];

export const valuePillars = [
  { 
    title: "Productivity", 
    icon: "Zap", 
    description: "Faster assessments, consistent outputs, and structured deliverables for efficiency teams" 
  },
  { 
    title: "Upsell", 
    icon: "TrendingUp", 
    description: "Early advisory creates demand for advanced audits and engineering services" 
  },
  { 
    title: "Revenue", 
    icon: "DollarSign", 
    description: "Continuous efficiency guidance supports recurring RA+ platform value" 
  },
  { 
    title: "Scale", 
    icon: "Rocket", 
    description: "Transform expert knowledge into scalable product capability" 
  },
];

export const efficiencyStrategicContext = {
  summary: "Today, efficiency audits rely heavily on manual workflows and PowerPoint deliverables. Client context is fragmented across tools and documents, expertise is delivered late in the cycle and does not scale, and early advice is not productized to generate recurring value.",
  northStar: "Build a unified, intelligence-driven Energy Efficiency capability that transforms expert knowledge into scalable product value, empowering customers and Schneider teams to identify and act on the right ECMs at the right time.",
};

export const supportingScorecard = [
  { metric: "ECM Taxonomy", definition: "Unified systems, subsystems, and measure types standardized" },
  { metric: "Library Completeness", definition: "% of core ECMs with full metadata and assumptions" },
  { metric: "Service Boundaries", definition: "Clean interfaces defined for Strategy and Building View" },
  { metric: "Strategy Integration", definition: "Goal → ECM recommendations live in platform" },
  { metric: "Building View Coverage", definition: "% of site types with ECM relevance logic" },
  { metric: "Guardrail Compliance", definition: "% of customer-facing advice meeting trust standards" },
];

export const roiScorecard = [
  { metric: "Audit Speed", definition: "Time to complete efficiency assessment", target: "2x faster" },
  { metric: "Upsell Conversion", definition: "Early advisory converting to advanced audits", target: "+30%" },
  { metric: "Quote Time", definition: "Reduction in time to quote for engagements", target: "50% faster" },
  { metric: "Platform Revenue", definition: "Contribution to RA+ recurring revenue", target: "Measurable" },
];

export const executiveTakeaway = {
  summary: "Beyond ECM Library transforms energy efficiency expertise from static documentation into a scalable product capability that improves team productivity, drives upsell for advanced audits, and generates recurring RA+ platform revenue.",
  conclusion: "By connecting top-down emissions strategy to actionable ECMs, bottom-up building insights to site-specific opportunities, and expert workflows to customer-facing experiences, we establish a shared ECM foundation and a clear path toward a full Energy Efficiency product embedded in the RA+ platform.",
};

export const appendixPillars = [
  {
    pillar: "Productivity Gains",
    focus: [
      "Develop ECM Library to directly improve auditor effectiveness",
      "Standardize ECM logic and defaults for faster assessments",
      "Generate structured, visual audit deliverables in platform",
      "Centralize client context across sites and engagements",
    ],
    outcomes: [
      "Lower cost to serve per audit",
      "Higher audit capacity without headcount growth",
      "Reduced rework and manual slide building",
      "Consistent calculations across all audits",
    ],
    themes: [
      "Standardized ECM logic and defaults",
      "Platform-native deliverable generation",
      "Centralized client context management",
      "Audit workflow digitization",
    ],
    valueProof: [
      "Audit completion time reduction",
      "Auditor throughput improvement",
      "Rework rate decrease",
    ],
  },
  {
    pillar: "Upsell Engine",
    focus: [
      "Expose selected expert content and early advisory",
      "Create demand for deeper analysis and studies",
      "Enable seamless path from insight to engagement",
      "Pre-fill context when audits are quoted",
    ],
    outcomes: [
      "Higher conversion to advanced audits",
      "Better qualified audit pipeline",
      "Shorter sales cycles for engagements",
      "Improved win rates on proposals",
    ],
    themes: [
      "Early high-potential ECM identification",
      "In-product calls to action for audits",
      "Pre-filled assumptions for quotes",
      "Visibility into deeper analysis value",
    ],
    valueProof: [
      "Advisory-to-audit conversion rate",
      "Pipeline from in-product prompts",
      "Quote-to-close time reduction",
    ],
  },
  {
    pillar: "Recurring RA+ Revenue",
    focus: [
      "Productize early-stage efficiency insights",
      "Deliver value without full on-site audit",
      "Create ongoing advisory value vs one-off",
      "Strengthen platform differentiation",
    ],
    outcomes: [
      "Recurring revenue from efficiency guidance",
      "Stronger platform stickiness",
      "Customer value between audits",
      "Differentiated RA+ value proposition",
    ],
    themes: [
      "Continuous ECM recommendations",
      "Goal-to-ECM Strategy integration",
      "Building View for discovery",
      "Self-service scenario comparison",
    ],
    valueProof: [
      "Feature adoption rate",
      "Recurring revenue contribution",
      "Customer retention improvement",
    ],
  },
];

export const roadmapSummary = {
  investmentPriorities: [
    {
      number: 1,
      text: "Establish ECM Library as the authoritative foundation with governed taxonomy and clean service boundaries",
    },
    {
      number: 2,
      text: "Deliver customer value through Strategy integration with Goal → ECM recommendations",
    },
    {
      number: 3,
      text: "Introduce Building View for bottom-up ECM discovery at site level",
    },
  ],
  pillars: [
    {
      id: "productivity",
      name: "Pillar 1: Productivity Gains",
      tagline: "For the efficiency team",
      icon: "Layers",
      focus: [
        "Develop ECM Library to improve auditor effectiveness",
        "Standardize calculations and assumptions across audits",
        "Generate structured deliverables in the platform",
      ],
      outcomes: [
        "Lower cost to serve per audit",
        "Higher throughput per auditor",
        "Consistent outputs across all engagements",
      ],
      themes: [
        "Standardized ECM logic",
        "Platform-native deliverables",
        "Centralized client context",
        "Digital audit workflows",
      ],
      valueProof: [
        "Audit completion time reduction",
        "Auditor throughput improvement",
        "Rework rate decrease",
      ],
    },
    {
      id: "upsell-engine",
      name: "Pillar 2: Upsell Engine",
      tagline: "For advanced audit projects",
      icon: "TrendingUp",
      focus: [
        "Expose early ECM insights to create demand",
        "Enable seamless path from insight to engagement",
        "Pre-fill context for faster quote generation",
      ],
      outcomes: [
        "Higher conversion to advanced audits",
        "Better qualified audit pipeline",
        "Shorter sales cycles",
      ],
      themes: [
        "Early ECM identification",
        "In-product calls to action",
        "Pre-filled assumptions",
        "Visibility into deeper value",
      ],
      valueProof: [
        "Advisory-to-audit conversion",
        "Pipeline from in-product prompts",
        "Win rate improvement",
      ],
    },
    {
      id: "recurring-revenue",
      name: "Pillar 3: Recurring Revenue",
      tagline: "Through in-product efficiency advice",
      icon: "Sparkles",
      focus: [
        "Productize early-stage efficiency insights",
        "Deliver value without full on-site audit",
        "Create ongoing advisory value",
      ],
      outcomes: [
        "Recurring revenue from efficiency guidance",
        "Stronger platform stickiness",
        "Differentiated RA+ value proposition",
      ],
      themes: [
        "Continuous recommendations",
        "Strategy integration",
        "Building View discovery",
        "Self-service exploration",
      ],
      valueProof: [
        "Feature adoption rate",
        "Recurring revenue contribution",
        "Customer retention",
      ],
    },
  ],
};

export const keyChallenges = [
  {
    id: "manual-workflows",
    title: "Manual Audit Workflows",
    issues: [
      "Efficiency audits rely heavily on manual workflows and PowerPoint deliverables",
      "Inconsistent calculations and assumptions across different auditors",
      "High time and effort per audit limits scalability",
    ],
  },
  {
    id: "fragmented-context",
    title: "Fragmented Client Context",
    issues: [
      "Client context is fragmented across tools and documents",
      "Context must be recreated for each new engagement",
      "No centralized view across sites, audits, and recommendations",
    ],
  },
  {
    id: "late-expertise",
    title: "Late Expertise Delivery",
    issues: [
      "Expertise is delivered late in the cycle and does not scale",
      "Customers must wait for full audit to understand opportunities",
      "No early credibility-building touchpoints in the sales process",
    ],
  },
  {
    id: "no-recurring-value",
    title: "No Recurring Value",
    issues: [
      "Early advice is not productized and cannot generate recurring value",
      "One-off audit model limits ongoing customer relationship",
      "Platform value tied to episodic engagements, not continuous guidance",
    ],
  },
];

// Why Now - 6-column narrative
export const whyNowColumns = [
  {
    id: "pressure",
    title: "Pressure",
    color: "amber",
    items: [
      "Customers expect earlier and clearer ECM recommendations",
      "Regulatory push (CSRD, mandatory audits)",
      "RA+ needs integrated efficiency intelligence beyond emissions",
      "Competitor movement accelerating digital ECMs",
      "Internal scaling limits (manual audits, fragmented tools)",
    ],
  },
  {
    id: "confusion",
    title: "Confusion",
    color: "orange",
    items: [
      "Customers can't access credible ECMs without a full audit",
      "No central system of record for ECMs",
      "Efficiency workflows are disconnected from the product",
    ],
  },
  {
    id: "structure",
    title: "Structure",
    color: "emerald",
    items: [
      "Provisional ECM set now; enriched via past-audit pipeline",
      "Create the connection from library to Emissions Strategy, Building View, Standalone Efficiency product etc.",
      "Single governed ECM Library (taxonomy, required fields, versions)",
      "Lock shared language & assumptions (inputs, \"From→To\", typical ranges) to remove variance",
    ],
  },
  {
    id: "value",
    title: "Value",
    color: "blue",
    items: [
      "Top-down: Goal→ECM recommendations inside Emissions Strategy (customers get something before a full audit)",
      "Bottom-up: Building-level ECM relevance (site→ECM) so customers explore by place, not just targets",
      "Explainability & guardrails so early advice is credible and upsells to deeper work when needed",
      "Stand-alone Energy Efficiency product with end-to-end workflows for customers and engineers",
    ],
  },
  {
    id: "scale",
    title: "Scale",
    color: "violet",
    items: [
      "Customers receive faster, more consistent guidance through one governed source",
      "The same ECM intelligence can be reused across Strategy, Building View, regions, and sectors",
      "Integration with RA+, IDM, AkitaBox etc.",
      "Internal expertise is leveraged at scale rather than repeated manually",
      "This foundation supports the future stand-alone Energy Efficiency product",
    ],
  },
  {
    id: "impact",
    title: "Impact",
    color: "green",
    items: [
      "Better customer decisions and higher adoption",
      "Customers achieve measurable emissions, energy & cost reductions",
      "Schneider E. gains stronger credibility and trust",
      "Stickier RA+ recurring revenue",
      "Efficiency team gets audit upsell from early insight, saves resources due to digitisation",
    ],
  },
];

// Phased Roadmap (Image 2)
export const phasedRoadmap = [
  {
    phase: "Foundational Work 2025",
    color: "amber",
    items: [
      {
        title: "Internal research and alignment",
        details: [
          "Interviews with efficiency teams across regions",
          "Internal surveys capturing tooling, workflow, and data pain points",
          "Establishing working relationships with engineering, EE teams, Strategy, IDM, and RA+ teams",
        ],
      },
      {
        title: "External and market research",
        details: [
          "Competitor analysis",
          "Understanding market expectations for ECM discoverability and early guidance",
        ],
      },
      {
        title: "Proposed opportunities",
        details: [
          "Identified lack of a central ECM system of record",
          "Defined the bottlenecks across customers, Strategy, and efficiency teams",
          "Mapped internal and external needs into a refined opportunity set",
        ],
      },
    ],
  },
  {
    phase: "2025-26",
    color: "emerald",
    items: [
      {
        title: "Draft ECM database",
        details: [
          "Analysis of available past audits",
          "Research on how to construct a high-quality ECM database (taxonomy, metadata, granularity, assumptions)",
          "Draft ECM database created",
        ],
      },
      {
        title: "Data-mining project launched",
        details: [
          "Identifying required fields and extraction logic",
          "First mapping rules and controlled vocabularies drafted",
        ],
      },
    ],
  },
  {
    phase: "Now 2026",
    color: "primary",
    items: [
      {
        title: "Emissions Strategy First",
        details: [
          "Emissions Strategy team is ready to consume ECMs immediately",
          "It needs minimal UX to unlock immediate value",
          "It is the simplest integration surface",
          "It brings direct customer revenue earliest",
        ],
      },
    ],
  },
  {
    phase: "Next 2026",
    color: "violet",
    items: [
      {
        title: "Building View second",
        details: [
          "It needs the ECM Library + metadata",
          "It needs some site context that is not fully built yet",
          "It is heavier UX",
          "It expands customer value, but is not the fastest win",
        ],
      },
    ],
  },
  {
    phase: "Later 2027",
    color: "muted-foreground",
    items: [
      {
        title: "Stand alone efficiency product",
        details: [
          "Same database access by various parts of RA+",
          "Integration with AKITABOX, CAP etc",
          "Fully supported onboarding",
          "SERA assisted calculations",
          "Built in visualisation for presentation",
        ],
      },
    ],
  },
];

// Capability Matrix (Image 3)
export const capabilityMatrix = {
  phases: [
    "ECM Draft Database",
    "Data-Mining Project",
    "NOW (Strategy Integration)",
    "NEXT (Building View)",
    "LATER (EE Product)",
  ],
  capabilities: [
    {
      id: 1,
      opportunity: "Shared ECM language (taxonomy & governance)",
      statuses: [
        { status: "done", note: "Defined first taxonomy, systems, subsystems, types" },
        { status: "done", note: "Validates & enriches taxonomy with real examples" },
        { status: "done", note: "Needed immediately" },
        { status: "done", note: "Required for Building View" },
        { status: "done", note: "Core always" },
      ],
    },
    {
      id: 2,
      opportunity: "Standardized data model (validation & DQA)",
      statuses: [
        { status: "done", note: "Draft schema and required fields defined" },
        { status: "done", note: "Data-mining exposes inconsistencies to fix" },
        { status: "done", note: "Enforced for Strategy consumption" },
        { status: "done", note: "Required for consistent filtering" },
        { status: "done", note: "Required for all workflows" },
      ],
    },
    {
      id: 3,
      opportunity: "Central ECM Library (Library UI)",
      statuses: [
        { status: "done", note: "Draft ECM set (v0) created" },
        { status: "done", note: "Adds more ECMs for Library population" },
        { status: "done", note: "Library MVP used by Strategy" },
        { status: "done", note: "Library used by Building View" },
        { status: "done", note: "Extended with deeper metadata" },
      ],
    },
    {
      id: 4,
      opportunity: "Machine-readable ECMs (programmatic access)",
      statuses: [
        { status: "done", note: "Metadata definitions created" },
        { status: "done", note: "Extracted metadata increases machine-readability" },
        { status: "done", note: "Needed to expose ECMs to Strategy" },
        { status: "done", note: "Critical for Building View logic" },
        { status: "done", note: "Mandatory for EE workflows & agents" },
      ],
    },
    {
      id: 5,
      opportunity: "Library ↔ Strategy service boundary",
      statuses: [
        { status: "partial", note: "Early thinking only" },
        { status: "partial", note: "Data-mining not directly relevant" },
        { status: "done", note: "Main delivery in NOW" },
        { status: "partial", note: "Reused by Building View" },
        { status: "partial", note: "Reused later" },
      ],
    },
    {
      id: 6,
      opportunity: "Convert goals → actions (Goal→ECM logic)",
      statuses: [
        { status: "partial", note: "Foundation only" },
        { status: "partial", note: "Library enrichment improves relevance" },
        { status: "done", note: "Implemented in Strategy" },
        { status: "partial", note: "Indirectly reused" },
        { status: "not-done", note: "Not used directly" },
      ],
    },
    {
      id: 7,
      opportunity: "Assumption defaults & prefill",
      statuses: [
        { status: "done", note: "Identified needed fields" },
        { status: "done", note: "Mined patterns help create default logic" },
        { status: "partial", note: "Light use possible" },
        { status: "done", note: "Key relevance feature in Building View" },
        { status: "done", note: "Full automation in EE product" },
      ],
    },
    {
      id: 8,
      opportunity: "Analysis scaffolding (per-ECM guidance)",
      statuses: [
        { status: "partial", note: "Only conceptual" },
        { status: "partial", note: "Raw data helps understand common variables" },
        { status: "not-done", note: "" },
        { status: "not-done", note: "" },
        { status: "done", note: "Implemented in EE product" },
      ],
    },
    {
      id: 9,
      opportunity: "Structured site capture (AkitaBox)",
      statuses: [
        { status: "not-done", note: "Not addressed" },
        { status: "not-done", note: "Not addressed" },
        { status: "not-done", note: "" },
        { status: "not-done", note: "" },
        { status: "done", note: "Implemented in EE product" },
      ],
    },
    {
      id: 10,
      opportunity: "Presentation builder",
      statuses: [
        { status: "not-done", note: "" },
        { status: "not-done", note: "" },
        { status: "not-done", note: "" },
        { status: "not-done", note: "" },
        { status: "done", note: "Implemented fully" },
      ],
    },
    {
      id: 11,
      opportunity: "M&V feedback loop",
      statuses: [
        { status: "not-done", note: "" },
        { status: "partial", note: "Partial: historical patterns help with priors" },
        { status: "not-done", note: "" },
        { status: "not-done", note: "" },
        { status: "done", note: "Implemented when real outcomes exist" },
      ],
    },
  ],
};

// Quarterly Roadmap (Image 4)
export const quarterlyRoadmap = [
  {
    quarter: "Q1 2026",
    theme: "Expertise is Becoming Centralized",
    color: "amber",
    deliverables: [
      "Publish provisional ECM Library v0",
      "Initial taxonomy, naming rules, granularity, metadata standards",
      "First SME review loops (your experts become the reviewers)",
      "Data-mining pipeline starts → real audit examples entering structured form",
      "Strategy starts consuming ECMs (Goal→ECM)",
    ],
    teamImpact: [
      "Your knowledge is no longer trapped in PowerPoints and individual templates",
      "You influence and validate the ECM Library from day one",
      "You help define the \"official\" way we describe measures globally",
    ],
  },
  {
    quarter: "Q2 2026",
    theme: "Work Begins to Scale",
    color: "emerald",
    deliverables: [
      "ECM metadata consistency improvements from ongoing SME reviews",
      "Start defining assumption defaults (runtime, savings %, coverage)",
      "Early version of per-ECM analysis prompts",
      "ECM Library v0.2 enriched by mined audit content",
      "UX + logic groundwork for Building View begins",
      "Internal access to draft ECM Library for preparation before audits",
    ],
    teamImpact: [
      "Early ECM assumptions become standardized, not reinvented every time",
      "You now have a reference library for preparing for site visits",
      "You don't need to start from scratch for common ECMs",
      "You can \"teach\" the system by correcting defaults → it improves over time",
      "Strategy customers begin seeing ECM recommendations",
    ],
  },
  {
    quarter: "Q3 2026",
    theme: "Customers Start Seeing Bottom-Up Value (Before Audits)",
    color: "blue",
    deliverables: [
      "Building View MVP → Site→ECM relevance",
      "ECM filtering by system, subsystem, building type",
      "Early ECM signals for customers based on patterns from past audits",
      "Improved metadata quality from Q1-Q2",
      "Shared language now visible across RA+",
    ],
    teamImpact: [
      "Customers arrive at audit discussions better prepared",
      "You get fewer \"basic discovery\" questions (\"What could we do for lighting?\")",
      "Building View becomes a pre-audit alignment tool",
      "Customers understand what an ECM is and how ECMs work → saves your time",
      "You see consistency across markets (less \"we do it differently here\")",
    ],
  },
  {
    quarter: "Q4 2026",
    theme: "Foundations for Your Future Workflow",
    color: "violet",
    deliverables: [
      "Deepening the ECM data model, adding fields efficiency teams need",
      "Draft logic for analysis checklists",
      "Initial support for data grouping (families, packages)",
      "RFI → assumption-default refinement",
      "Logic for linking AkitaBox data to ECM applicability (concept)",
      "Presentation builder logic foundations",
    ],
    teamImpact: [
      "You start to see the first real signs of your future EE workflow",
      "ECMs include more of the detail",
      "Audit workflow is faster and more efficient",
    ],
  },
];

export const dataNeeded = [
  { name: "ECM Taxonomy", description: "Systems, subsystems, and measure types" },
  { name: "Default Assumptions", description: "Standard values for calculations" },
  { name: "Site Descriptors", description: "Building type, geography, segment" },
  { name: "Constraint Inputs", description: "Budget, timeline, risk tolerance" },
  { name: "Goal Mappings", description: "Emissions targets to ECM recommendations" },
  { name: "Pattern Data", description: "Similar site outcomes and evidence" },
  { name: "M&V Outcomes", description: "Measured results from completed projects" },
  { name: "Regulatory Links", description: "Incentives and compliance requirements" },
];

export const optionalClientContext = [
  { name: "Building Data", description: "SCADA, BMS, AkitaBox integrations" },
  { name: "Energy Data", description: "Interval consumption and costs" },
];

export const existingTools = [
  { name: "IDM", description: "Interval Data Module: 4800+ meters, ingestion, baselines, M&V, 24/7 emissions, cost allocation", limitation: "Data flows not yet connected to ECM discovery" },
  { name: "ACT", description: "Action tracking and project management for efficiency measures", limitation: "Disconnected from ECM recommendations" },
  { name: "CBMS", description: "Cloud-based monitoring and control integration", limitation: "Limited to alerting, no efficiency intelligence" },
  { name: "RA Classic", description: "Resource Advisor: portfolio reporting, benchmarking, target setting", limitation: "Reporting-focused, no actionable ECM layer" },
  { name: "IDP / Blair Agent", description: "Intelligent data processing and automated data quality workflows", limitation: "Upstream data gaps limit agent accuracy" },
  { name: "Variance Check Agent", description: "Automated variance detection between metered and billed consumption", limitation: "Reactive analysis, not predictive" },
];

export const idmCapabilities = {
  tagline:
    "IDM is the data spine of the efficiency journey. It is the first step (anomaly-driven entry) or the last step (post-implementation monitoring), never a forced middle.",
  positioning: {
    title: "Step Zero or Step Last",
    subtitle: "IDM is flexible by design. Customers enter or exit at any point.",
    modes: [
      {
        label: "Step Zero",
        role: "Entry via anomaly detection",
        description:
          "Granular interval data surfaces anomalies, benchmarks, and savings gaps. Customers see a problem and pull in the efficiency team to scope an audit.",
        outcome: "Data-led lead generation for the audit business.",
      },
      {
        label: "Step Last",
        role: "Exit via post-implementation monitoring",
        description:
          "After audits and ECM implementation, IDM tracks actual vs. baseline savings, verifies investment, and feeds M&V evidence back to the customer.",
        outcome: "Continuous proof that the efficiency program delivers.",
      },
    ],
    principle:
      "Optional in the middle, essential at the edges. The platform must let customers join or leave the IDM layer without breaking the journey.",
  },
  bmsBypass: {
    title: "BMS Integration: Bypass the Submeter Install",
    subtitle:
      "The biggest IDM adoption blocker is the cost and lead time of installing submeters. Many customers refuse upfront. BMS connectivity removes that barrier.",
    benefits: [
      {
        label: "No hardware install",
        detail: "Pull existing meter data directly from the building management system.",
      },
      {
        label: "Faster time to insight",
        detail: "Days, not months. No procurement cycle, no electrician on site.",
      },
      {
        label: "Wider addressable base",
        detail: "Unlocks customers who have BMS but no Schneider submetering footprint.",
      },
      {
        label: "Cross-business synergy",
        detail: "Direct hook into Schneider Digital Energy BMS estate; reuses existing data flows.",
      },
    ],
    fallback:
      "Where BMS is absent, utility meter feeds (UK half-hourly, EU 5/15-min) still provide a baseline IDM experience. Submeter install becomes an upsell, not a prerequisite.",
  },
  stats: [
    { value: "4,800+", label: "Meters Connected", detail: "Utility, sub-meter, virtual" },
    { value: "1,600+", label: "Active Users", detail: "Site, regional, portfolio levels" },
    { value: "243", label: "Alerts Configured", detail: "Sites and systems monitored" },
    { value: "24/7", label: "Emissions Reporting", detail: "Granular carbon calculations" },
  ],
  categories: [
    {
      name: "Data Ingestion",
      capabilities: [
        "Extensive file formats and schema support",
        "Multiple stream stitching and reprocessing",
        "Cumulative to interval conversion",
        "Data validation routines and bulk editing",
        "Patch-on-the-fly data quality",
        "Connectivity monitoring tools",
      ],
    },
    {
      name: "Analysis & Intelligence",
      capabilities: [
        "Modeling and baseline engine (bulk creation in seconds)",
        "Energy forecasting and scenario models",
        "Comprehensive weather integration",
        "Marginal emissions rates and emissions library",
        "Tag and hierarchy-based aggregation",
        "Alerting, notification, and smart anomaly detection",
      ],
    },
    {
      name: "M&V and Outcomes",
      capabilities: [
        "IPMVP-compliant baseline creation",
        "Actual vs. baseline and cumulative savings tracking",
        "EnPI models for ISO 50001 compliance",
        "Multiple baselines per data stream",
        "Performance deviation detection",
        "Investment protection and verification",
      ],
    },
  ],
};

export const competitiveLandscape = [
  {
    name: "Deepki",
    scope: "EU focused",
    description: "ESG data intelligence, energy monitoring, and advisory for commercial real estate",
    threat: "Segment-focused with AI workflow investments",
  },
  {
    name: "Measurabl",
    scope: "Global",
    description: "ESG software for CRE with asset-level data and fault detection. Acquired Hatch (submetering).",
    threat: "Deepening into action layer via acquisitions",
  },
  {
    name: "METRON",
    scope: "Global",
    description: "SaaS energy intelligence for industrial decarbonization and energy optimization (EVA Factory + EMOS)",
    threat: "Strong industrial AI and optimization capabilities",
  },
  {
    name: "ENTO",
    scope: "EU focused",
    description: "Energy monitoring and automated recommendations with optimization focus",
    threat: "Automated recommendation engine competing with advisory",
  },
  {
    name: "Snowflake / Palantir",
    scope: "Global",
    description: "Data services and analytics platforms with increasing energy partnerships",
    threat: "Commoditizing the data layer underneath energy platforms",
  },
];

export const marketTrends = [
  "AI fueling expectations for intelligent, agentic energy management",
  "Data access and integrity are now vital, not optional",
  "Performance projects shifting away from full M&V (except EaaS/IaaS)",
  "Segment-focused leaders investing in competitor platforms for AI workflows",
  "Increasing desire for interval data for compliance and reporting (accountability)",
  "Lack of cost-competitive metering packages limiting growth in US and AUS",
  "Increasing need for cross-domain expertise: site systems, data analysts, control strategy",
];

export const intelligenceFlywheel = {
  title: "Persistent Intelligence Flywheel",
  subtitle: "From static reporting to efficient action",
  stages: [
    { name: "Telemetry", description: "Integrations and data VEE", icon: "Database" },
    { name: "Context", description: "Knowledge graph, asset summaries, decision tracking", icon: "Brain" },
    { name: "Enrichment", description: "Baselines, benchmarks, simulations, what-if models", icon: "Settings" },
    { name: "Observations", description: "Trends, root cause, prioritization, agentic reasoning", icon: "Eye" },
    { name: "Output", description: "Living reports, dashboards, findings, interrogation", icon: "FileText" },
    { name: "Action", description: "Workflow integration, prioritization, outcome tracking", icon: "Zap" },
  ],
  keyInsight: "As platform intelligence becomes pervasive, the winners will be systems that centralize data, know context, apply domain knowledge at scale, and reliably turn insight into action.",
  differentiators: [
    { label: "Data availability", status: "Baseline" },
    { label: "Agentic intelligence", status: "Expectation" },
    { label: "Expert context", status: "Essential" },
    { label: "Customer outcomes", status: "Differentiator" },
  ],
};

export const marketConstraints = [
  "Trust is essential: advice must be labeled as guidance, not commitment",
  "Savings and costs must show ranges with confidence levels",
  "ECMs requiring licensed engineering need clear expert escalation paths",
  "Audit trails required for all advice shown and inputs used",
  "Safety notices mandatory where physical changes are involved",
];

export const executiveNarrative = {
  whatsHappening: "The ECM Library is the foundation, not the end goal. Beyond ECM Library represents a broader ambition: to transform energy efficiency expertise into a scalable product capability that improves efficiency team productivity, drives upsell opportunities for advanced audits, and generates recurring RA+ platform revenues through early, in-product efficiency advice.",
  trueProblem: "Today, efficiency audits rely heavily on manual workflows and PowerPoint deliverables. Client context is fragmented across tools and documents. Expertise is delivered late in the cycle and does not scale. Early advice is not productized and cannot generate recurring value.",
  northStar: "Go beyond static ECM documentation by turning expert audit knowledge into structured, visual, and actionable capabilities that make the efficiency team more productive and consistent, expose expert advisory inside the platform to create upsell pull for advanced audits, and deliver ongoing customer value that supports recurring RA+ revenues.",
  pragmaticWay: "We will establish the ECM Library as the authoritative foundation, deliver immediate customer value through Strategy integration, and introduce a bottom-up Building View for ECM discovery, all while laying groundwork for a future stand-alone Energy Efficiency product.",
  economicImpact: [
    "Audits completed faster with higher consistency",
    "Increased upsell rate from early advisory to advanced audits",
    "Reduced time to quote for efficiency engagements",
    "Measurable adoption of in-product efficiency recommendations",
    "Tangible contribution to RA+ recurring revenue",
  ],
  strategicUpside: "The vision connects top-down emissions strategy to actionable ECMs, bottom-up building insights to site-specific opportunities, and expert workflows to customer-facing experiences. It establishes a shared ECM foundation and a clear path toward a full Energy Efficiency product embedded in the RA+ platform.",
  risks: [
    { risk: "Trust and credibility", mitigation: "Implement guardrails for customer-facing advice: ranges, confidence levels, expert escalation paths" },
    { risk: "Scope creep", mitigation: "Keep out of scope: contractual guarantees, detailed engineering without validation" },
    { risk: "Adoption barriers", mitigation: "Deliver immediate value through Strategy integration before Building View" },
    { risk: "Data quality", mitigation: "Enforce minimum data checks; display applicability rules and blockers" },
  ],
  needsNow: [
    "Finalize and govern unified ECM taxonomy",
    "Connect ECM Library to Strategy for Goal → ECM recommendations",
    "Define and implement guardrails for customer-facing advice",
    "Plan Building View MVP for bottom-up discovery",
  ],
};

export const timeline = {
  q1: {
    title: "Q1: Foundation & Strategy",
    items: [
      "ECM taxonomy finalized",
      "Clean service boundaries",
      "Strategy integration live",
      "Guardrails defined",
      "Data quality standards",
      "Provisional Library published",
    ],
  },
  q2: {
    title: "Q2: Building View",
    items: [
      "Building View MVP",
      "ECM relevance logic",
      "Self-service exploration",
      "Structured deliverables",
    ],
  },
  h2: {
    title: "H2: Scale & Intelligence",
    items: [
      "Full auditor workflows",
      "M&V feedback loop",
      "AI recommendations",
      "Analytics integration",
      "External data sources",
    ],
  },
};

// Regional Journey Comparison: Europe, US Public, US Private, IDM
export const regionalJourneys = {
  intro:
    "There is no single efficiency journey. Each region and sector enters, delivers, and monetizes differently. The platform must support flexible entry and exit points rather than force one path.",
  stages: [
    "Lead Intake",
    "Data Collection",
    "On-Site Audit",
    "Analysis & ECMs",
    "Recommendations",
    "Implementation",
    "Monitoring",
  ],
  journeys: [
    {
      id: "europe",
      name: "Europe",
      tagline: "Knowledge-led on-site audits",
      revenue: "Strong growth pipeline",
      sellingPoint: "Expertise, know-how, polished deliverables",
      coverage: {
        "Lead Intake": { level: "core", note: "80% are net-new, not in any Schneider system" },
        "Data Collection": { level: "core", note: "Pre-analysis from utility data; submeters rare" },
        "On-Site Audit": { level: "core", note: "Auditor visits, notes, photos, floor plans (Akita Box rolling out)" },
        "Analysis & ECMs": { level: "core", note: "Manual today; ECM Library + ingestion engine in build" },
        "Recommendations": { level: "core", note: "PPT deliverable is THE selling point" },
        "Implementation": { level: "none", note: "Out of scope; customer or 3rd party executes" },
        "Monitoring": { level: "optional", note: "Optional IDM hookup if submeters are installed later" },
      },
    },
    {
      id: "us-public",
      name: "US Public Sector",
      tagline: "Performance contracts, ~$400M revenue",
      revenue: "Largest single stream for SE Sustainability advisory",
      sellingPoint: "End-to-end delivery with guaranteed savings",
      coverage: {
        "Lead Intake": { level: "core", note: "RFPs, long sales cycles, commercial buildings" },
        "Data Collection": { level: "core", note: "Often pulled from BMS or utility records" },
        "On-Site Audit": { level: "core", note: "Fast-track assessments to scope the project" },
        "Analysis & ECMs": { level: "core", note: "Detailed design phase follows the audit" },
        "Recommendations": { level: "light", note: "Internal artifact, not the deliverable" },
        "Implementation": { level: "core", note: "MAIN revenue driver; SE installs the measures" },
        "Monitoring": { level: "core", note: "Contractual M&V; the natural RA+ meeting point" },
      },
    },
    {
      id: "us-private",
      name: "US Private Sector",
      tagline: "Commercial audits + implementation",
      revenue: "Significant, paired with public sector",
      sellingPoint: "Audit + design + build + verify",
      coverage: {
        "Lead Intake": { level: "core", note: "Direct enterprise accounts" },
        "Data Collection": { level: "core", note: "BMS pulls and utility data common" },
        "On-Site Audit": { level: "core", note: "Field audits feed design phase" },
        "Analysis & ECMs": { level: "core", note: "27 TB of historic audit data exists, scattered" },
        "Recommendations": { level: "light", note: "Internal artifact, not the deliverable" },
        "Implementation": { level: "core", note: "Core delivery model" },
        "Monitoring": { level: "core", note: "Post-install tracking; RA+ candidate" },
      },
    },
    {
      id: "idm",
      name: "IDM (Data-Driven)",
      tagline: "Step zero or step last",
      revenue: "Pre-step or post-step to the audit business",
      sellingPoint: "Granular interval data spots anomalies automatically",
      coverage: {
        "Lead Intake": { level: "optional", note: "Existing RA customers with submeters or BMS feeds" },
        "Data Collection": { level: "core", note: "5/15/30-min interval data; 4,800+ meters today" },
        "On-Site Audit": { level: "none", note: "No site visits; pure data analysis" },
        "Analysis & ECMs": { level: "core", note: "Anomaly detection, benchmarks, alerts" },
        "Recommendations": { level: "light", note: "Triggers next-step audit referral" },
        "Implementation": { level: "none", note: "Hand-off to efficiency teams" },
        "Monitoring": { level: "core", note: "Continuous post-implementation verification" },
      },
    },
  ],
  convergence: {
    title: "Where journeys converge",
    point: "Monitoring",
    description:
      "All four journeys can meet on the monitoring layer. RA+ becomes the shared backend for interval data, M&V, and continuous insight, regardless of how the customer first arrived.",
  },
  divergence: [
    {
      title: "Implementation",
      detail: "US Public and US Private own implementation; Europe and IDM stop at recommendations or hand-off.",
    },
    {
      title: "Deliverable",
      detail: "Europe sells the polished PPT recommendation. US sells the installed savings. IDM sells the alert.",
    },
    {
      title: "Entry point",
      detail: "Europe is cold customer-led. US is RFP-led. IDM is data-led from existing accounts.",
    },
    {
      title: "Site visit",
      detail: "Europe and US require boots on the ground. IDM never does.",
    },
  ],
  designPrinciple:
    "Build a flexible journey where customers enter and exit at any step. Shared backend, region-conditional UX. Do not force one umbrella.",
};

// ECM Ingestion Engine: PPT extraction prototype + Monte Carlo recommendations
export const ecmIngestionEngine = {
  intro:
    "27 TB of historic audit data sits in scattered SharePoints, desktops, and PPT decks across Schneider. The ingestion engine turns that latent IP into a structured, queryable ECM library that powers smart recommendations.",
  prototype: {
    title: "PPT Extraction Prototype",
    subtitle: "Built with the Data Science team, in test starting this week.",
    flow: [
      {
        step: "01",
        name: "Drop",
        description: "Auditor drops a past audit PPT (Inditex, Amazon, public-sector deck) into the platform.",
      },
      {
        step: "02",
        name: "Extract",
        description: "The engine reads the deck and auto-extracts ~70 fields per ECM: name, savings, unit of measure, payback, baseline, scope.",
      },
      {
        step: "03",
        name: "Review",
        description: "Original auditor confirms or edits the extracted data. Human-in-the-loop keeps quality high.",
      },
      {
        step: "04",
        name: "Ingest",
        description: "Validated ECMs land in the central library, tagged by client, site type, sector, and geography.",
      },
    ],
    accuracy: "~80% accuracy on first pass during initial testing.",
  },
  volumeRamp: {
    title: "Volume Ramp",
    subtitle: "From a handful of decks to a 30,000+ ECM library.",
    milestones: [
      {
        phase: "Pilot",
        target: "200",
        unit: "ECMs",
        detail: "First wave of European audit decks ingested for QA and tuning.",
      },
      {
        phase: "Inditex Push",
        target: "5,000+",
        unit: "ECMs",
        detail: "Multi-site Inditex audits processed in batch; one client unlocks orders of magnitude.",
      },
      {
        phase: "European Backlog",
        target: "15,000+",
        unit: "ECMs",
        detail: "Full European audit history, including Amazon and other large enterprise accounts.",
      },
      {
        phase: "US + Public Sector",
        target: "30,000+",
        unit: "ECMs",
        detail: "Once US teams release their 27 TB archive, the library scales globally.",
      },
    ],
  },
  monteCarlo: {
    title: "Monte Carlo Top-5 Recommendations",
    subtitle:
      "Volume unlocks intelligence. Once we have tens of thousands of historic ECMs, we run probabilistic simulation to surface the right measures for the right client.",
    inputs: [
      "Client context: site type, sector, geography, climate zone",
      "Historic ECM performance distributions (savings, payback, cost ranges)",
      "Available data quality signals from IDM, BMS, or utility feeds",
      "Constraints: budget, downtime tolerance, regulatory scope",
    ],
    output:
      "A ranked Top-5 ECM shortlist per client, with probability-weighted savings, payback bands, and confidence intervals — not a pixel-perfect single number.",
    why: "An ECM might range from 20% to 140% payback depending on context. Monte Carlo embraces that uncertainty rather than hiding it, giving auditors a defensible starting point in seconds.",
  },
  enablers: [
    "Akita Box API (free, expected in 3-4 months) feeds field notes, photos, and floor plans straight into the ECM library.",
    "ECM library refresh becomes live as more auditors adopt Akita Box on tablets.",
    "Expert-in-the-loop validation step keeps the library clean as it scales.",
  ],
  guardrails: [
    "Never replace the auditor. Recommendations are a starting point, not the deliverable.",
    "Probability bands, not false precision. Show ranges and confidence, not single decimals.",
    "Customer-specific context always wins over portfolio averages.",
  ],
};

// Strategic Context: deadlines, customer archetypes, regulatory tailwinds
export const efficiencyStrategicContext = {
  intro:
    "Three forces shape why this strategy matters now: a hard internal deadline, a widening gap between customer expectations, and a regulatory tailwind that turns granularity into commercial value.",
  raClassicSunset: {
    title: "RA Classic Sunset",
    badge: "Hard Deadline",
    timeframe: "2027 - 2028",
    summary:
      "RA Classic is being phased out. IDM and the broader efficiency capability must lift over to RA+ before existing customers lose their home.",
    implications: [
      {
        label: "IDM lift-over",
        detail: "Josh (PM, ex-Digital Energy) is assessing the IDM transition. Scope ranges from light-touch interval ingestion to full tariff and carbon integration.",
      },
      {
        label: "Phased MVP approach",
        detail: "Start narrow: bring granular data and dashboards across. Layer carbon, tariffs, and analytics in subsequent waves.",
      },
      {
        label: "Customer continuity",
        detail: "Existing IDM accounts must experience a clean migration, not a forced rebuild.",
      },
      {
        label: "Investment freeze on Classic",
        detail: "New development on RA Classic is winding down. Every month without a roadmap costs us optionality.",
      },
    ],
  },
  customerArchetypes: {
    title: "Two Customer Archetypes",
    subtitle:
      "The efficiency team serves two very different buyers. The platform must respect both, not collapse them into one experience.",
    archetypes: [
      {
        name: "Traditional Audit Customer",
        tagline: "Cold case, fast turnaround, PPT deliverable",
        share: "~80% of European volume",
        wants: [
          "Quick on-site audit, no installs",
          "Polished recommendation deck",
          "Expert know-how, not a tool",
          "In and out, no ongoing platform commitment",
        ],
        risk: "If we force them onto a platform, we lose the deal. Self-serve adoption is unrealistic.",
        fit: "Internal productivity tool only. Auditors use the platform; the customer never sees it.",
      },
      {
        name: "Enterprise Strategic Account",
        tagline: "Inditex, Amazon and similar global accounts",
        share: "Highest growth, highest visibility",
        wants: [
          "Integrated, always-on platform across sites",
          "Live dashboards, granular data, audit trail",
          "Self-serve exploration with expert support",
          "A reference story they can cite internally",
        ],
        risk: "A PPT-only deliverable underwhelms them. Without RA+, they will look at Deepki, Measurabl, or build it themselves.",
        fit: "Full RA+ deployment with services wrapped around the platform.",
      },
    ],
    tension:
      "Alex's pushback ('our customers are not on any system') is true for the traditional segment but dangerously wrong for the enterprise segment. The strategy must serve both without forcing convergence.",
  },
  ghgTailwind: {
    title: "GHG Protocol Tailwind",
    badge: "Regulatory Lever",
    summary:
      "The GHG Protocol is tightening data granularity requirements. High-resolution meter data shifts from 'nice to have' to 'commercially required' for serious sustainability reporting.",
    impacts: [
      {
        label: "Interval data becomes table stakes",
        detail: "Annual or monthly utility totals will not satisfy the next wave of disclosure standards.",
      },
      {
        label: "IDM commercial case strengthens",
        detail: "Every sustainability customer becomes a credible IDM upsell, well beyond the efficiency use case.",
      },
      {
        label: "Cross-product upsell path",
        detail: "Sustainability-only RA+ accounts become natural targets for energy and IDM modules.",
      },
      {
        label: "Submeter ROI improves",
        detail: "When granularity is mandated, the cost-benefit math for installing submeters or BMS feeds tilts in our favor.",
      },
    ],
    soWhat:
      "Build IDM and the ECM library so they natively serve carbon accounting, not just energy efficiency. The same data spine powers both.",
  },
};
