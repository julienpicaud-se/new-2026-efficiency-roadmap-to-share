// Efficiency Transformation - Energy Efficiency Playbook Data

export const strategicPillars = [
  {
    id: "productivity",
    title: "Productivity Gains",
    tagline: "For the efficiency team",
    promise: "We turn efficiency expertise into repeatable operating models, guided workflows, and structured deliverables that improve team effectiveness across the customer journey.",
    description: "Lower cost to serve and higher delivery capacity. The strategy standardizes assessment methods, customer context, calculations, and deliverables so teams can move faster with more consistent outputs.",
    whatLivesHere: [
      "Faster assessments through standardized methods, assumptions, and defaults",
      "Consistent calculations, assumptions, and outputs across engagements",
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
    promise: "We intentionally expose selected expert content (e.g. ECMs) and early advisory to create demand for deeper, paid audit engagements.",
    description: "Higher conversion to advanced efficiency engagements and better qualified pipeline for the efficiency team. By exposing credible early guidance, customers see the value of deeper analysis, creating pull for expert services.",
    whatLivesHere: [
      "Early identification of high-potential efficiency opportunities before a full audit",
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
      "Continuous, contextual efficiency recommendations inside the platform",
      "Value delivered even without a full on-site audit",
      "A shift from one-off audit value to ongoing advisory value",
      "Stronger platform stickiness and differentiation",
      "Goal-to-action recommendations integrated in Strategy module",
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
    title: "Establish the Efficiency Strategy foundation",
    linkedPillar: "productivity",
    customerOutcome: "A governed strategy foundation that improves continuously and supports efficiency guidance across RA+.",
    businessValue: "Single source of truth for opportunity logic, assumptions, guidance, and workflows across modules.",
    keyResults: [
      { id: "KR1", title: "Efficiency taxonomy and governance model finalized", metric: "100%", roiMetric: "Standardization score" },
      { id: "KR2", title: "Provisional opportunity knowledge base published", metric: "Seed list + SME review", roiMetric: "Library completeness" },
      { id: "KR3", title: "Clean service boundaries defined", metric: "All modules", roiMetric: "Integration readiness" },
    ],
  },
  {
    id: "O2",
    title: "Deliver customer value through Strategy integration",
    linkedPillar: "recurring-revenue",
    customerOutcome: "Customers can quickly answer 'What should I do?' through goal-based efficiency guidance directly in RA+.",
    businessValue: "First customer-facing milestone that proves value early and creates demand for deeper analysis.",
    keyResults: [
      { id: "KR4", title: "Efficiency guidance → Strategy integration live", metric: "Q1 2026", roiMetric: "Customer adoption" },
      { id: "KR5", title: "Goal-based efficiency recommendations working", metric: "Enabled", roiMetric: "Recommendation accuracy" },
      { id: "KR6", title: "Actions and planning workflows connected", metric: "Complete", roiMetric: "Workflow efficiency" },
    ],
  },
  {
    id: "O3",
    title: "Introduce bottom-up Building View for opportunity discovery",
    linkedPillar: "upsell-engine",
    customerOutcome: "Customers can drill into specific buildings to see site-level efficiency relevance, constraints, and opportunities.",
    businessValue: "Creates the first bottom-up experience and bridges toward a broader Efficiency product.",
    keyResults: [
      { id: "KR7", title: "Building View MVP launched", metric: "2026", roiMetric: "Site coverage" },
      { id: "KR8", title: "Site-level efficiency relevance surfacing", metric: "Enabled", roiMetric: "Discovery rate" },
      { id: "KR9", title: "Pattern logic for opportunity identification", metric: "Operational", roiMetric: "Hit rate" },
    ],
  },
];

export const roadmapBets = {
  now: [
    { title: "Finalize unified efficiency taxonomy", pillar: "productivity", outcome: "Standardized systems, subsystems, and measure types", objective: "O1", kr: "KR1" },
    { title: "Publish provisional opportunity knowledge base", pillar: "productivity", outcome: "Seed list with SME review complete", objective: "O1", kr: "KR2" },
    { title: "Define clean service boundaries", pillar: "recurring-revenue", outcome: "Clear interfaces for Strategy and future modules", objective: "O1", kr: "KR3" },
    { title: "Connect efficiency guidance to Strategy", pillar: "recurring-revenue", outcome: "Goal-based efficiency guidance live", objective: "O2", kr: "KR4" },
    { title: "Define guardrails for customer-facing advice", pillar: "upsell-engine", outcome: "Trust and credibility protected", objective: "O2", kr: "KR5" },
    { title: "Establish data quality standards", pillar: "productivity", outcome: "Required fields and DQA processes", objective: "O1", kr: "KR1" },
  ],
  next: [
    { title: "Launch Building View MVP", pillar: "upsell-engine", outcome: "Site-level opportunity discovery available", objective: "O3", kr: "KR7" },
    { title: "Implement opportunity relevance logic", pillar: "upsell-engine", outcome: "Pattern-based opportunity surfacing", objective: "O3", kr: "KR8" },
    { title: "Enable customer self-service exploration", pillar: "recurring-revenue", outcome: "DIY inputs and scenario comparison", objective: "O3", kr: "KR9" },
    { title: "Build structured audit deliverables", pillar: "productivity", outcome: "Platform-native reports replace slides", objective: "O1", kr: "KR2" },
    { title: "Integrate AkitaBox and BMS data", pillar: "productivity", outcome: "Enhanced site context", objective: "O3", kr: "KR7" },
    { title: "Deploy rule-based opportunity surfacing", pillar: "recurring-revenue", outcome: "Automated recommendations", objective: "O2", kr: "KR5" },
  ],
  later: [
    { title: "Full auditor workflow integration", pillar: "productivity", outcome: "End-to-end digital audit process", objective: "O1", kr: "KR2" },
    { title: "M&V feedback loop implementation", pillar: "productivity", outcome: "Continuous improvement from outcomes", objective: "O1", kr: "KR1" },
    { title: "AI-powered efficiency recommendations", pillar: "recurring-revenue", outcome: "Similarity clustering and ML models", objective: "O2", kr: "KR5" },
    { title: "Dedicated Energy Efficiency product", pillar: "recurring-revenue", outcome: "Full Efficiency capability in RA+", objective: "O3", kr: "KR9" },
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
      "Parameterized efficiency templates with defaults",
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
      "Confidence bands and risk notes per recommendation",
      "Incentive and regulatory linkbacks",
      "Non-binding language blocks",
      "Assumption registry for transparency",
      "Reduced commercial risk and redlines",
    ],
  },
  {
    domain: "Delivery Handoff",
    initiatives: [
      "Handoff package with opportunity set and rationales",
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
      "Next-best efficiency suggestions as data evolves",
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
  { metric: "Strategy Foundation Coverage", target: "100%", description: "Core opportunity patterns documented with full metadata" },
  { metric: "Strategy Integration", target: "Live", description: "Goal → action recommendations working" },
  { metric: "Building View", target: "2026", description: "Site-level opportunity discovery available" },
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
    theme: "Efficiency Recommendations",
    stop: "Static guidance that requires expert interpretation",
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

export const strategicContext = {
  summary: "Today, efficiency audits rely heavily on manual workflows and PowerPoint deliverables. Client context is fragmented across tools and documents, expertise is delivered late in the cycle and does not scale, and early advice is not productized to generate recurring value.",
  northStarTitle: "A governed Efficiency CoE capability embedded in RA+",
  northStar: "The north star is an authoritative efficiency foundation inside RA+ that connects IDM as the trusted interval-data system of record, expert CoE knowledge, and guided workflows. It should power goal-based Strategy recommendations, site-level Building View discovery, structured deliverables, and a clear path from early insight to expert engagement.",
};

export const supportingScorecard = [
  { metric: "Efficiency Taxonomy", definition: "Unified opportunity types, systems, assumptions, and governance standardized" },
  { metric: "Knowledge Base Completeness", definition: "% of core guidance patterns with metadata and assumptions" },
  { metric: "Service Boundaries", definition: "Clean interfaces defined for Strategy and Building View" },
  { metric: "Strategy Integration", definition: "Goal → action recommendations live in platform" },
  { metric: "Building View Coverage", definition: "% of site types with opportunity relevance logic" },
  { metric: "Guardrail Compliance", definition: "% of customer-facing advice meeting trust standards" },
];

export const roiScorecard = [
  { metric: "Audit Speed", definition: "Time to complete efficiency assessment", target: "2x faster" },
  { metric: "Upsell Conversion", definition: "Early advisory converting to advanced audits", target: "+30%" },
  { metric: "Quote Time", definition: "Reduction in time to quote for engagements", target: "50% faster" },
  { metric: "Platform Revenue", definition: "Contribution to RA+ recurring revenue", target: "Measurable" },
];

export const executiveTakeaway = {
  summary: "Efficiency Transformation turns expert services, customer context, digital workflows, and advisory guidance into a scalable RA+ capability that improves productivity, creates demand for deeper services, and supports recurring platform value.",
  conclusion: "By connecting top-down strategy, bottom-up building insight, expert workflows, and customer-facing guidance, we create a broader Efficiency strategy that helps customers move from ambition to action inside RA+.",
};

export const appendixPillars = [
  {
    pillar: "Productivity Gains",
    focus: [
      "Develop reusable guidance to improve team effectiveness",
      "Standardize opportunity logic and defaults for faster assessments",
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
      "Standardized opportunity logic and defaults",
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
      "Early high-potential opportunity identification",
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
      "Continuous efficiency recommendations",
      "Goal-to-action Strategy integration",
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
      text: "Establish the Efficiency Strategy foundation with governed taxonomy and clean service boundaries",
    },
    {
      number: 2,
      text: "Deliver customer value through Strategy integration with goal-based efficiency guidance",
    },
    {
      number: 3,
      text: "Introduce Building View for bottom-up opportunity discovery at site level",
    },
  ],
  pillars: [
    {
      id: "productivity",
      name: "Pillar 1: Productivity Gains",
      tagline: "For the efficiency team",
      icon: "Layers",
      focus: [
        "Develop reusable guidance to improve team effectiveness",
        "Standardize calculations and assumptions across audits",
        "Generate structured deliverables in the platform",
      ],
      outcomes: [
        "Lower cost to serve per audit",
        "Higher throughput per auditor",
        "Consistent outputs across all engagements",
      ],
      themes: [
        "Standardized opportunity logic",
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
        "Expose early efficiency insights to create demand",
        "Enable seamless path from insight to engagement",
        "Pre-fill context for faster quote generation",
      ],
      outcomes: [
        "Higher conversion to advanced audits",
        "Better qualified audit pipeline",
        "Shorter sales cycles",
      ],
      themes: [
        "Early opportunity identification",
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
      "Customers expect earlier and clearer efficiency guidance",
      "Enterprise AI mandates push customers to adopt AI-driven energy decisions in 2026",
      "ISO 50001 certification cycles are creating concrete buying pressure",
      "AI bypass risk: customers like Tetra Pak are evaluating in-house AI on their own data",
      "Competitor movement accelerating digital efficiency advisory",
      "Internal scaling limits (manual audits, fragmented tools)",
    ],
  },
  {
    id: "confusion",
    title: "Confusion",
    color: "orange",
    items: [
      "Customers cannot access credible guidance without a full audit",
      "No central system of record for efficiency knowledge and assumptions",
      "Efficiency workflows are disconnected from the product",
    ],
  },
  {
    id: "structure",
    title: "Structure",
    color: "emerald",
    items: [
      "Provisional opportunity knowledge base now, enriched via past-audit pipeline",
      "Create the connection from shared guidance to Strategy, Building View, and the Energy Efficiency product",
      "Single governed efficiency knowledge base with taxonomy, required fields, and versions",
      "Lock shared language & assumptions (inputs, \"From→To\", typical ranges) to remove variance",
    ],
  },
  {
    id: "value",
    title: "Value",
    color: "blue",
    items: [
      "Top-down: goal-based efficiency guidance inside Strategy so customers get value before a full audit",
      "Bottom-up: building-level opportunity relevance so customers explore by place, not just targets",
      "Explainability & guardrails so early advice is credible and upsells to deeper expert advisory work when needed",
      "Dedicated Energy Efficiency product with end-to-end workflows for customers and engineers",
    ],
  },
  {
    id: "scale",
    title: "Scale",
    color: "violet",
    items: [
      "Customers receive faster, more consistent guidance through one governed source",
      "The same efficiency intelligence can be reused across Strategy, Building View, regions, and sectors",
      "Integration with RA+, IDM, AkitaBox etc.",
      "Internal expertise is leveraged at scale rather than repeated manually",
      "This foundation supports the future Energy Efficiency product",
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
      "Efficiency team gets audit upsell from early insight, becomes more productive due to digitisation",
    ],
  },
];

// Capability Matrix (Image 3)
export const capabilityMatrix = {
  phases: [
    "Draft Knowledge Base",
    "Data-Mining Project",
    "NOW (Strategy Integration)",
    "NEXT (Building View)",
    "LATER (EE Product)",
  ],
  capabilities: [
    {
      id: 1,
      opportunity: "Shared efficiency language, taxonomy, and governance",
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
      opportunity: "Central Knowledge Base (Library UI)",
      statuses: [
        { status: "done", note: "Draft opportunity set created" },
        { status: "done", note: "Adds more examples for knowledge base population" },
        { status: "done", note: "Knowledge base MVP used by Strategy" },
        { status: "done", note: "Knowledge base used by Building View" },
        { status: "done", note: "Extended with deeper metadata" },
      ],
    },
    {
      id: 4,
      opportunity: "Machine-readable guidance (programmatic access)",
      statuses: [
        { status: "done", note: "Metadata definitions created" },
        { status: "done", note: "Extracted metadata increases machine-readability" },
        { status: "done", note: "Needed to expose guidance to Strategy" },
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
      opportunity: "Convert goals into actions",
      statuses: [
        { status: "partial", note: "Foundation only" },
        { status: "partial", note: "Knowledge base enrichment improves relevance" },
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
      opportunity: "Analysis scaffolding (per-opportunity guidance)",
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
    quarter: "Q2 2026",
    theme: "Assessment and Scope Definition",
    color: "amber",
    deliverables: [
      "Run the first assessment of what IDM should bring into RA+",
      "Confirm the ECM and IDM data model, taxonomy, metadata, and governance needs",
      "Define minimum RA+ service boundaries for ECM guidance and IDM signals",
      "Prioritize the top 200 ECMs for the initial library launch",
      "Start SME review loops across efficiency to refine ECM and IDM priorities",
      "Ship targeted intelligence enhancements in RA Classic in parallel (June 2026) so existing customers feel forward motion",
    ],
    teamImpact: [
      "Teams align on what must be built before RA+ exposes ECM and IDM capability",
      "Experts help define expectations early during workshops",
      "IDM requirements are captured before delivery work hardens around the wrong assumptions",
      "RA Classic users see continued investment while RA+ foundations are built in parallel",
    ],
  },
  {
    quarter: "Q3 2026",
    theme: "Initial ECM Library Launch",
    color: "emerald",
    deliverables: [
      "Launch the initial ECM library late Q3 with the top 200 ECMs",
      "Publish taxonomy, naming rules, granularity, and metadata standards for v1",
      "Connect ECM guidance to the Strategy product as the first RA+ consumption path",
      "Document IDM inputs needed for opportunity relevance and future performance signals",
      "Prepare the MVP scope for Q4, including ECM guidance and IDM signal priorities",
    ],
    teamImpact: [
      "Experts start leveraging standard database connected with IDM and get access to common measure language",
      "The Strategy product starts consuming a governed ECM foundation",
      "The team has a concrete IDM backlog tied to the RA+ MVP instead of a generic migration plan",
    ],
  },
  {
    quarter: "Q4 2026",
    theme: "RA+ MVP Launch",
    color: "blue",
    deliverables: [
      "Launch the initial RA+ MVP for Energy Efficiency",
      "Expose the top 200 ECMs through governed guidance and Strategy workflows",
      "Bring initial IDM signals into RA+ for interval-data context.",
      "Enable early expert audit request paths from guided ECM discovery",
      "Capture feedback from pilot users to refine data fields, assumptions, and workflow handoffs",
    ],
    teamImpact: [
      "Customers and internal teams see the first usable RA+ Energy Efficiency experience",
      "Auditors receive better prepared demand from early guided discovery",
      "IDM starts contributing to action guidance on a central platform",
    ],
  },
  {
    quarter: "Q1 2027",
    theme: "MVP Hardening and Workflow Expansion",
    color: "violet",
    deliverables: [
      "Go live with SE Corporate as the lead reference customer in March 2027",
      "Improve ECM metadata quality and expand beyond the top 200 based on usage and expert review",
      "Deepen IDM integration for data-quality visibility, interval patterns, and performance context",
      "Refine assumption defaults, applicability rules, and expert escalation triggers",
      "Add structured handoff outputs for expert advisory and audit preparation",
      "Prepare the next release path toward Building View and dedicated Energy Efficiency workflows",
    ],
    teamImpact: [
      "SE Corporate provides a living proof point for the RA+ Energy Efficiency experience",
      "The MVP becomes more reliable and useful for real advisory workflows",
      "Efficiency teams become more productive through reusable ECM and IDM context",
      "The roadmap shifts from foundation building to workflow depth and scaled adoption",
    ],
  },
];

export const dataNeeded = [
  { name: "Efficiency Taxonomy", description: "Systems, subsystems, and measure types" },
  { name: "Default Assumptions", description: "Standard values for calculations" },
  { name: "Site Descriptors", description: "Building type, geography, segment" },
  { name: "Constraint Inputs", description: "Budget, timeline, risk tolerance" },
  { name: "Goal Mappings", description: "Emissions targets to efficiency recommendations" },
  { name: "Pattern Data", description: "Similar site outcomes and evidence" },
  { name: "M&V Outcomes", description: "Measurement and verification results that compare actual post-project performance against an agreed baseline" },
  { name: "Regulatory Links", description: "Incentives and compliance requirements" },
];

export const optionalClientContext = [
  { name: "Building Data", description: "BMS and AkitaBox integrations" },
  { name: "Energy Data", description: "Interval consumption and costs" },
];

export const existingTools = [
  { name: "IDM", description: "Interval Data Management: trusted energy data from cloud platforms, BMS, meters, and external sources into a single system of record", limitation: "Core data services are not yet fully native to RA+ opportunity discovery" },
  { name: "ACT", description: "Action tracking and project management for efficiency measures", limitation: "Disconnected from efficiency recommendations" },
  { name: "RA Classic", description: "Resource Advisor: portfolio reporting, benchmarking, target setting", limitation: "Reporting-focused, no actionable efficiency layer" },
  { name: "Variance Check Agent", description: "Automated variance detection between metered and billed consumption", limitation: "Reactive analysis, not predictive" },
];

export const idmCapabilities = {
  tagline:
    "IDM gives RA+ the trusted interval-data system of record to connect cloud, BMS, meter, cost, carbon, and operational signals with expert efficiency knowledge.",
  positioning: {
    title: "Data Backbone",
    subtitle: "Trusted interval data before insight, proof after action.",
    modes: [
      {
        label: "Step Zero",
        role: "Signal where action is needed",
        description:
          "Interval data reveals performance gaps before a full audit is launched.",
        outcome: "A credible trigger for expert review and targeted action.",
      },
      {
        label: "Step Last",
        role: "Prove what changed",
        description:
          "After actions are taken, IDM tracks performance against baselines and keeps customers connected to outcomes.",
        outcome: "Continuous proof and a path into the next improvement cycle.",
      },
    ],
    principle:
      "The RA+ opportunity is not a reporting migration or visual lift-over. It is turning proven Global Energy Bureau and IDM capabilities into shared platform intelligence that guides decisions, prioritization, and continuous improvement.",
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
    { value: "428", label: "Clients", detail: "Global Energy Bureau support base" },
    { value: "38", label: "Experts", detail: "Across 11 country locations" },
    { value: "$75M", label: "Active Guarantees", detail: "Measured through performance services" },
    { value: "24/7", label: "Performance", detail: "Always-on energy and carbon view" },
  ],
  categories: [
    {
      name: "Data Ingestion",
      capabilities: [
        "Utility, cloud platform, BMS, meter, PME, EBO, and external-source intake",
        "Multiple stream stitching, reprocessing, and normalization",
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
        "M&V workflows that measure, verify, and explain whether efficiency actions delivered expected performance outcomes",
        "IPMVP-compliant baseline creation using recognized measurement and verification methods for credible savings claims",
        "Actual vs. baseline and cumulative savings tracking across cost, energy, and emissions outcomes",
        "EnPI models that normalize performance indicators for weather, occupancy, production, or operating conditions to support ISO 50001",
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
  "Performance projects shifting toward right-sized M&V, with full verification reserved for Energy as a Service (EaaS), where savings help fund ongoing service fees, Infrastructure as a Service (IaaS), where efficiency outcomes support financed upgrades, and other higher-risk commitments",
  "Segment-focused leaders investing in competitor platforms for AI workflows",
  "Increasing desire for interval data for compliance and reporting (accountability)",
  "Lack of cost-competitive metering packages limiting growth in US and AUS",
  "Increasing need for cross-domain expertise: site systems, data analysts, control strategy",
];

export const serviceModelComparison = [
  {
    model: "EaaS",
    fullName: "Energy as a Service",
    description: "A service model where the customer pays for delivered energy outcomes rather than managing every upgrade as a standalone capital project.",
    typicalOutcomes: ["Lower energy spend", "Operational performance improvement", "Ongoing optimization service"],
    dataNeeds: ["Utility and interval meter data", "Tariffs and site operating schedules", "Baseline drivers such as weather and occupancy"],
    verificationLevel: "Higher. Savings need to be credible enough to support recurring service fees and performance accountability.",
  },
  {
    model: "IaaS",
    fullName: "Infrastructure as a Service",
    description: "A financed infrastructure model where upgrades are delivered as a managed service and repaid through committed value or operational benefits.",
    typicalOutcomes: ["Funded equipment modernization", "Risk-managed capital avoidance", "Longer-term asset performance"],
    dataNeeds: ["Asset condition and project scope", "Capex and maintenance assumptions", "Post-install performance and uptime data"],
    verificationLevel: "Highest for large commitments. Verification must connect upgrade performance to the financed value case over time.",
  },
];

export const intelligenceFlywheel = {
  title: "Strategy-to-Improvement Flywheel",
  subtitle: "The operating model that connects consulting, implementation, IDM, and continuous performance improvement in RA+",
  veeExplainer: {
    title: "VEE: Validation, Estimation, and Editing",
    description:
      "VEE is the trust layer that prepares meter and telemetry data before it informs analysis, recommendations, or performance claims.",
    usedWhen: [
      "A data feed has gaps, spikes, flatlines, duplicate intervals, or missing values",
      "Estimated values are needed to create a complete operating history",
      "A baseline, savings calculation, or anomaly signal depends on trusted interval data",
    ],
    outcome:
      "The result is a cleaner, auditable data set that the efficiency workflow can trust before moving into benchmarking, opportunity discovery, M&V, or EnPI modeling.",
  },
  stages: [
    { name: "Telemetry", description: "Integrations plus VEE to make interval data reliable before it informs decisions", icon: "Database" },
    { name: "Strategy", description: "Portfolio priorities, KPI workshops, maturity assessment, and site prioritization", icon: "Brain" },
    { name: "Design", description: "Audits, baselines, business case inputs, and solution shaping from trusted context", icon: "Settings" },
    { name: "Execution", description: "Workflow integration, project handoff, implementation support, and outcome tracking", icon: "Eye" },
    { name: "Output", description: "Living reports, guided findings, audit deliverables, and executive narratives", icon: "FileText" },
    { name: "Improve", description: "Continuous optimization, performance services, and next-best recommendations", icon: "Zap" },
  ],
  keyInsight: "The future platform advantage is not another dashboard. It is an intelligence layer that connects trusted signals, expert efficiency knowledge, implementation pathways, and site context so RA+ can move users from strategy to measurable improvement.",
  differentiators: [
    { label: "Data availability", status: "Baseline" },
    { label: "Expert context", status: "Essential" },
    { label: "Implementation path", status: "Advantage" },
    { label: "Continuous outcomes", status: "Differentiator" },
  ],
};

export const marketConstraints = [
  "Trust is essential: advice must be labeled as guidance, not commitment",
  "Savings and costs must show ranges with confidence levels",
  "Measures requiring licensed engineering need clear expert escalation paths",
  "Audit trails required for all advice shown and inputs used",
  "Safety notices mandatory where physical changes are involved",
];

export const executiveNarrative = {
  whatsHappening: "Efficiency Transformation is broader than a content library. It is the operating strategy for bringing IDM data depth, expert knowledge, customer context, and action workflows into a scalable RA+ capability.",
  trueProblem: "Today, interval data, audit expertise, customer context, and action workflows are not yet operating as one system. That limits RA+ from moving beyond reporting into guided performance improvement.",
  northStarTitle: "A governed Efficiency CoE capability embedded in RA+",
  northStar: "The north star is an authoritative efficiency foundation inside RA+ that connects IDM as the trusted interval-data system of record, expert CoE knowledge, and guided workflows. It should power goal-based Strategy recommendations, site-level Building View discovery, structured deliverables, and a clear path from early insight to expert engagement.",
  pragmaticWay: "We will lift the highest-value IDM capabilities into RA+, establish the governed efficiency strategy foundation, deliver immediate value through Strategy integration, and build toward an agentic performance experience over time.",
  economicImpact: [
    "Audits completed faster with higher consistency",
    "Increased upsell rate from early advisory to advanced audits",
    "Reduced time to quote for efficiency engagements",
    "Measurable adoption of in-product efficiency recommendations",
    "Tangible contribution to RA+ recurring revenue",
  ],
  strategicUpside: "The vision connects top-down strategy, bottom-up building insights, IDM services, expert workflows, and customer-facing experiences. It establishes a shared operating foundation and a clear path toward intelligence-driven performance management in RA+.",
  risks: [
    { risk: "Trust and credibility", mitigation: "Implement guardrails for customer-facing advice: ranges, confidence levels, expert escalation paths" },
    { risk: "Scope creep", mitigation: "Keep out of scope: contractual guarantees, detailed engineering without validation" },
    { risk: "Adoption barriers", mitigation: "Deliver immediate value through Strategy integration before Building View" },
    { risk: "Data quality", mitigation: "Enforce minimum data checks; display applicability rules and blockers" },
  ],
  needsNow: [
    "Finalize and govern unified efficiency taxonomy",
    "Connect efficiency guidance to Strategy for goal-based efficiency guidance",
    "Define and implement guardrails for customer-facing advice",
    "Plan Building View MVP for bottom-up discovery",
  ],
};

export const timeline = {
  q1: {
    title: "Q1: Foundation & Strategy",
    items: [
      "Efficiency taxonomy finalized",
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
      "Opportunity relevance logic",
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
    "Analysis & Guidance",
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
        "Analysis & Guidance": { level: "core", note: "Manual today; Knowledge base and ingestion engine in build" },
        "Recommendations": { level: "core", note: "PPT deliverable is THE selling point" },
        "Implementation": { level: "none", note: "Out of scope; customer or 3rd party executes" },
        "Monitoring": { level: "light", note: "Light IDM hookup if submeters are installed later" },
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
        "Analysis & Guidance": { level: "core", note: "Detailed design phase follows the audit" },
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
        "Analysis & Guidance": { level: "core", note: "27 TB of historic audit data exists, scattered" },
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
        "Analysis & Guidance": { level: "core", note: "Anomaly detection, benchmarks, alerts" },
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
      title: "Site visit",
      detail: "Europe and US require boots on the ground. IDM never does.",
    },
  ],
  designPrinciple:
    "Build a flexible journey where customers enter and exit at any step. Shared backend, region-conditional UX. Do not force one umbrella.",
};

// Efficiency Knowledge Engine: PPT extraction prototype and probabilistic recommendations
export const ecmIngestionEngine = {
  intro:
    "27 TB of historic audit data sits in scattered SharePoints, desktops, and PPT decks across Schneider. The knowledge engine turns that latent IP into a structured, queryable strategy foundation that powers smart recommendations.",
  prototype: {
    title: "PPT Extraction Prototype",
    subtitle: "Built with the Data Science team.",
    flow: [
      {
        step: "01",
        name: "Drop",
        description: "Auditor drops a past audit PPT (Inditex, Amazon, public-sector deck) into the platform.",
      },
      {
        step: "02",
        name: "Extract",
        description: "The engine reads the deck and auto-extracts key fields per opportunity: name, savings, unit of measure, payback, baseline, and scope.",
      },
      {
        step: "03",
        name: "Review",
        description: "Original auditor confirms or edits the extracted data. Human-in-the-loop keeps quality high.",
      },
      {
        step: "04",
        name: "Ingest",
        description: "Validated opportunities land in the central knowledge base, tagged by client, site type, sector, and geography.",
      },
    ],
    accuracy: "~80% accuracy on first pass during initial testing.",
  },
  monteCarlo: {
    title: "Monte Carlo Top-5 Recommendations",
    subtitle:
      "Volume unlocks intelligence. Once we have tens of thousands of historic examples, we run probabilistic simulation to surface the right actions for the right client.",
    inputs: [
      "Client context: site type, sector, geography, climate zone",
      "Historic opportunity performance distributions including savings, payback, and cost ranges",
      "Available data quality signals from IDM, BMS, or utility feeds",
      "Constraints: budget, downtime tolerance, regulatory scope",
    ],
    output:
      "A ranked Top-5 opportunity shortlist per client, with probability-weighted savings, payback bands, and confidence intervals, not a pixel-perfect single number.",
    why: "A measure might range from 20% to 140% payback depending on context. Monte Carlo embraces that uncertainty rather than hiding it, giving teams a defensible starting point in seconds.",
  },
  enablers: [
    "Akita Box API feeds field notes, photos, and floor plans straight into the efficiency knowledge base.",
    "The knowledge base refresh becomes live as more auditors adopt Akita Box on tablets.",
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
    "Three forces shape why this strategy matters now: the RA+ platform transition, proven Efficiency CoE delivery strength, and the need to convert trusted interval data into guided action.",
  raClassicSunset: {
    title: "RA+ Platform Transition",
    badge: "Strategic Window",
    timeframe: "2027 - 2028",
    summary:
      "IDM and the broader efficiency capability should evolve into RA+ as shared platform intelligence, not just a migrated interface.",
    implications: [
      {
        label: "CoE capability scale",
        detail: "Turn proven consulting, implementation, IDM, and Global Energy Bureau capabilities into RA+ services where they create platform leverage.",
      },
      {
        label: "Phased evolution",
        detail: "Start with continuity and efficiency guidance, then layer deeper automation and reasoning.",
      },
      {
        label: "Customer continuity",
        detail: "Protect existing customers while RA+ becomes the broader home for performance management and continuous improvement.",
      },
      {
        label: "Clear governance",
        detail: "Align product, data, engineering, and domain experts around the same transition choices.",
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
        share: "Traditional audit demand",
        wants: [
          "Quick on-site audit, no installs",
          "Polished recommendation deck",
          "Expert know-how, not a tool",
          "In and out, no ongoing platform commitment",
        ],
        risk: "If we force them onto a platform, we lose the deal. Self-serve adoption is unrealistic.",
        fit: "Internal productivity tool only (to start). Auditors use the platform; the customer never sees it.",
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
        risk: "A PPT-only deliverable underwhelms them. Without RA+, they will look at competitors, or build it themselves.",
        fit: "Full RA+ deployment with services wrapped around the platform.",
      },
    ],
    tension:
      "The strategy must serve both realities: some customers still need an expert-led audit deliverable, while strategic accounts increasingly expect an always-on performance platform.",
  },
  ghgTailwind: {
    title: "Intelligent Performance Tailwind",
    badge: "Market Pull",
    summary:
      "Customers increasingly expect energy, cost, carbon, and operational performance to be connected in one intelligent experience. High-quality interval data becomes the foundation for that shift.",
    impacts: [
      {
        label: "Interval data becomes table stakes",
        detail: "Annual or monthly utility totals will not satisfy executive expectations for timely performance decisions.",
      },
      {
        label: "IDM role strengthens",
        detail: "IDM becomes the trusted system of record behind reporting, action guidance, and performance services.",
      },
      {
        label: "Consulting-to-action path",
        detail: "Strategy, design, execution, and continuous improvement can operate as one guided RA+ journey.",
      },
      {
        label: "BMS and meter data unlock scale",
        detail: "Existing operational data sources reduce friction and extend the addressable base before new hardware is required.",
      },
    ],
    soWhat:
      "Build IDM and the efficiency knowledge base connection so they natively serve energy, carbon, resilience, and operational performance. The same data spine powers the full improvement cycle.",
  },
};

// Platform Shift: RA Classic (module) vs RA+ (platform)
export const platformShift = {
  intro:
    "RA Classic treats interval data as a separate module. RA+ makes it a native platform capability. This is the opportunity to build a SaaS solution for Efficiency services, not migrate a module.",
  classic: {
    title: "RA Classic: The Module",
    tagline: "Isolated by design",
    points: [
      "Separate hierarchy (PAM vs RA)",
      "Separate filters that do not work together",
      "Separate reports with a 5-step bridge to standard RA",
      "Corrected data does not persist",
      "200+ integration sources, but data stays siloed",
    ],
  },
  raPlus: {
    title: "RA+: The Platform",
    tagline: "Integrated by design",
    points: [
      "One unified data model across all products",
      "Interval data in dashboards, reports, and emissions natively",
      "Sera as the primary interface from day one",
      "Self-serve onboarding, no spreadsheets",
      "ECM digitization via existing sustainability surfaces",
    ],
  },
  thesis:
    "Every pain point from RA Classic stems from the module architecture. RA+ eliminates that architecture entirely.",
  bureauAnchor: {
    title: "What the Bureau Delivers Today",
    subtitle: "38 people, 428 clients, $8 to 10M per year, 195K connected meters",
    lines: [
      {
        layer: "Foundation",
        name: "Resource Advisor IDM",
        detail: "Data ingestion, quality management, dashboards, alerts. 195K connected meters across 200+ integration source types.",
      },
      {
        layer: "Accelerator",
        name: "Energy Performance Services",
        detail: "ECM identification, savings analysis, optimization recommendations. $75M in active energy guarantees ($1B+ total).",
      },
      {
        layer: "Feedback Loop",
        name: "Measurement and Verification",
        detail: "Audit-grade evidence that closes the loop between recommendation and outcome.",
      },
    ],
    soWhat:
      "RA+ digitizes all three. The data platform replaces manual IDM workflows. Sera automates EPS analysis. M&V becomes a platform capability. Reach expands from 428 Bureau-served clients to the broader RA+ installed base.",
  },
};

// Personas (4 ranked roles) and design sequence
export const personas = {
  intro:
    "Four roles interact with Energy Efficiency. We design for all of them, but in a deliberate sequence: the Energy Manager's daily experience drives the primary UX.",
  designPrinciple:
    "Design the Energy Manager's experience first. It is the highest-frequency, highest-emotional-stakes interaction. Both modes (daily monitoring and analytical investigation) are Sera-driven. Data Ops Analyst configuration tools are layered behind through progressive disclosure. Sustainability Lead and Executive consume interval insights through existing RA+ reporting and dashboarding surfaces.",
  roles: [
    {
      name: "Energy / Facility Manager",
      rank: "Primary",
      context: "Daily operator, client-side, 1 to 10 sites",
      summary:
        "The person closest to the buildings. Checks RA+ every morning. Operates in two modes: daily monitoring and analytical investigation. Both modes are Sera-driven.",
      outcomes: [
        "Spot energy waste before it costs money",
        "Prove that efficiency projects deliver savings",
        "Trust that the numbers on screen are accurate",
        "Share a savings report with leadership without help",
        "Understand why something happened, not just that it happened",
        "Find patterns worth acting on across the portfolio",
      ],
    },
    {
      name: "Data Operations Analyst",
      rank: "Secondary",
      context: "SE internal or client power-user, 10 to 100+ sites",
      summary:
        "Onboards new meters, fixes gaps, manages hierarchies. In RA Classic this role absorbs enormous administrative overhead. In RA+ this role should shrink dramatically.",
      outcomes: [
        "Onboard new meters in minutes, not days",
        "Know where data gaps exist and fix them fast",
        "Trust that interval data flows into reports without manual bridges",
        "Manage 100 sites without touching spreadsheets",
      ],
    },
    {
      name: "Sustainability / ESG Lead",
      rank: "Tertiary",
      context: "Client-side, portfolio level, 50 to 500+ sites",
      summary:
        "Cares about interval data only insofar as it feeds compliance reporting, Scope 1/2 targets, and portfolio benchmarks. Needs the numbers right and reports auditable.",
      outcomes: [
        "Interval data feeds ESG reports without manual aggregation",
        "Portfolio benchmarks include interval-granularity sites",
        "Audit trail proves data provenance for compliance",
        "One reporting surface for all data types",
      ],
    },
    {
      name: "Executive / VP of Energy",
      rank: "Inform",
      context: "Client-side, consumes outcomes only",
      summary:
        "Receives dashboards and summary reports. Never interacts with interval data directly but makes investment decisions based on the insights it enables.",
      outcomes: [
        "See verified savings against targets",
        "Confidence that reported numbers are trustworthy",
        "One dashboard covering the full portfolio",
        "Actionable insights, not raw data",
      ],
    },
  ],
};

// Jobs to Be Done (10 jobs, operational vs analytical)
export const jobsToBeDone = {
  intro:
    "The 10 jobs users hire Energy Efficiency to do. Not features, not screens, but outcomes. Operational covers the daily rhythm of detecting, monitoring, tracking, and proving. Analytical covers investigation sessions: root cause, comparison, pattern discovery, insight packaging. In both modes, Sera is the primary interface.",
  ecmInsight:
    "ECM identification is not a separate job. It is what happens when jobs 3, 6, and 8 are done well with good data and good AI. Customers do not ask for ECMs. They ask Sera to find waste, explain anomalies, and show patterns. The output of those conversations is an ECM.",
  jobs: [
    { num: 1, type: "Operational", title: "Detect anomalies", description: "When responsible for energy performance across sites, know immediately if something is consuming abnormally, so problems can be addressed before they become costly." },
    { num: 2, type: "Operational", title: "Monitor performance", description: "When managing daily operations, see real-time consumption against expected baselines, so deviations are caught early." },
    { num: 3, type: "Operational", title: "Identify waste", description: "When reviewing a facility's energy profile, pinpoint where energy is consumed unnecessarily, so savings opportunities can be quantified and prioritized." },
    { num: 4, type: "Operational", title: "Validate data quality", description: "When making decisions based on energy data, confirm readings are complete and accurate, so action is taken with confidence and audit-ready records are maintained." },
    { num: 5, type: "Operational", title: "Track against targets", description: "When managing energy reduction commitments, track performance against targets continuously, so drift is corrected early and compliance can be proven." },
    { num: 6, type: "Analytical", title: "Diagnose root cause", description: "When detecting an anomaly or unexpected consumption pattern, understand the root cause quickly, so the right corrective action is taken." },
    { num: 7, type: "Analytical", title: "Compare performance", description: "When evaluating a site's performance, compare it fairly against similar sites or time periods, so real underperformance is distinguished from expected variation." },
    { num: 8, type: "Analytical", title: "Discover patterns", description: "When managing energy across a portfolio over time, surface slow drifts and seasonal patterns not visible day-to-day, so problems are caught early and structural improvements identified." },
    { num: 9, type: "Analytical", title: "Drive action from insights", description: "When an insight is worth acting on, package it into a clear deliverable for the right audience, so decisions are driven from leadership, finance, or operations." },
    { num: 10, type: "Analytical", title: "Manage action plans and follow-through", description: "When committing to an energy improvement, track action items, site-level progress, and target attainment, so follow-through is ensured and continuous improvement is provable. Validated by SE Corporate. Absent from RA Classic." },
    { num: 11, type: "Analytical", title: "Prioritize across portfolio", description: "When responsible for multiple sites, know which buildings need attention most urgently, so time is spent where it has the greatest impact." },
  ],
};

// VOC Evidence: 3 customer interviews + SE Corporate
export const vocEvidence = {
  intro:
    "Three external customer interviews plus SE Corporate evidence gathered through Bureau leadership. Both sources are treated as real evidence, clearly attributed.",
  signals: [
    { label: "Persona Validation", value: "High", detail: "3 clients across 4 personas" },
    { label: "JTBD Validation", value: "High", detail: "Jobs 1, 3, 4, 5, 7, 8, 9 validated" },
    { label: "AI-First Demand", value: "High", detail: "3/3 customers demand AI" },
    { label: "Alert Fatigue Risk", value: "High", detail: "All 3 flagged unprompted" },
  ],
  customers: [
    {
      name: "Alfa Laval",
      contact: "Magnus Roth, Head of Global Sustainability",
      context: "63 service centers, long-term RA Classic client",
      findings: [
        "Reports go in the drawer. Automated daily and weekly hints are the #1 request.",
        "Sera concept directly validated: pushed insights without requiring expertise.",
        "Hierarchy UX is a blocker. Meter names are numeric codes.",
        "Expansion blocked. 90% of 63 service centers are unconnected.",
      ],
      quote: "It does not have to be a thorough analysis, but more of a hint, because then you get it built into your daily work.",
    },
    {
      name: "Velux",
      contact: "Rasmus Sorensen and Maja Lewinska, Energy Program Lead and Global Sustainability Lead",
      context: "~24 sites, ISO 50001 certified",
      findings: [
        "Daily login confirmed. Rasmus uses RA daily, many times.",
        "Diagnosis AND prognosis. AI must flag risk of missing targets.",
        "ISO 50001 is the strategic driver. Standardized KPIs across all sites.",
      ],
      quote: "I need you to tell me if I am at risk of missing my targets. The diagnosis and the prognosis.",
    },
    {
      name: "Tetra Pak",
      contact: "Ramzi Cherad, Global Energy Program Lead",
      context: "45 factories, 4,000+ meters",
      findings: [
        "AI should find what humans spend months finding. Continuous, automatic detection.",
        "Continuous, not historical. Catch anomalies when they start.",
        "Competitive AI bypass risk. Users will route data through Copilot or Notebook LM if RA does not offer native AI.",
        "Enterprise AI mandate. Tetra Pak requires every platform to incorporate AI.",
      ],
      quote: "It is the continuous finding it when it happens. That is the important bit. Not historic.",
    },
  ],
};

// SE Corporate as the MVP blueprint
export const seCorporateBlueprint = {
  title: "SE Corporate: RA Classic Client",
  intro: "",
  scale: [
    { value: "4,800+", label: "Meters connected", detail: "Electricity, gas, water, HVAC, lighting, IT, distribution, process lines, PV, generators" },
    { value: "1,200", label: "Monthly logins", detail: "62+ individual users with 10+ IDM sessions in the past 12 months" },
    { value: "40+", label: "Unique data systems", detail: "Many sites have 25+ interval streams pushing into monthly KPIs" },
    { value: "243", label: "Alerts and alarms", detail: "Configured across sites and systems, with 100s of dashboards" },
  ],
  trainingSignal:
    "RA IDM scored 4.8 / 5 in the Energy Performance Training program, the highest-rated module (PME scored 3.3). Confirms the product works when users are enabled. The opportunity is making that enablement the default interface, not a paid service.",
  phaseMap: [] as { phase: string; detail: string }[],
  conclusion: "",
};

// RA Classic Pain Inventory
export const painInventory = {
  intro:
    "RA Classic limitations that the platform shift eliminates. Every must-fix item stems from the module architecture: separate hierarchies, disconnected filters, siloed data.",
  pains: [
    { id: "P1", severity: "Must fix", title: "Two competing data models", detail: "Standard RA bottoms out at Account; PAM goes deeper to locations, meters, nodes. Users do not know which world they are in." },
    { id: "P2", severity: "Must fix", title: "Dashboard filters silently fail on PAM widgets", detail: "Division/Group and Data Stream filters do not affect PAM widgets. Users apply filters expecting everything to respond; PAM widgets stay unchanged." },
    { id: "P3", severity: "Must fix", title: "5-step bridge to monthly reporting", detail: "To get a PAM measurement into a standard RA report: create PAM measurement, create RA stream, map via Site Mapping, enable import, wait for daily aggregation. Performed daily across 150+ sites." },
    { id: "P4", severity: "Must fix", title: "Corrected data is not persisted", detail: "PAM corrections are computed on the fly. Only raw metered values are stored. No audit trail. Corrected values do not reach standard RA." },
    { id: "P5", severity: "Must fix", title: "Spreadsheet-driven commissioning", detail: "Hierarchy Setup and Manual Meter Readings require generating an Excel template, editing offline, uploading, validating, applying. Drives Bureau onboarding timelines." },
    { id: "P6", severity: "Must fix", title: "Separate report system", detail: "Interval Data Reports are saved PAM analyses packaged for email. Completely disconnected from standard RA Reporting." },
  ],
};

// Two product scope: Energy Efficiency vs Asset Planning
export const productScope = {
  intro:
    "RA+ organizes interval data capabilities into two separately-sold products within the Efficiency family. This playbook covers Energy Efficiency. Asset Planning is a separate discovery.",
  products: [
    {
      name: "Energy Efficiency",
      tag: "This Discovery",
      summary: "The daily-use product. Monitoring, analysis, alerting, data quality, meter management, and operational optimization.",
      capabilities: [
        "Real-time and near-real-time energy monitoring",
        "Anomaly detection and proactive alerting",
        "Interval data analysis (trend, load profile, heatmap, comparison, Sankey)",
        "Data quality: completeness, gap detection, correction, audit trails",
        "Meter and source onboarding (self-serve)",
        "Unified data model integration with RA+ platform",
        "Schedule management and segmentation",
        "Action tracking and workflow support",
      ],
    },
    {
      name: "Asset Planning",
      tag: "Separate Discovery",
      summary: "The project-oriented product. Baseline modeling, M&V, savings verification, capital investment planning, and project portfolio tracking.",
      capabilities: [
        "Baseline modeling (IPMVP Option C/D)",
        "Measurement and Verification (CUSUM, savings quantification)",
        "Project tagging, tracking, and savings reporting",
        "Capital asset lifecycle planning",
        "Dollar/unit savings analysis",
        "Schneider PASS Analytics",
      ],
    },
  ],
  whyEEFirst: [
    "Foundation: Energy Efficiency creates the data infrastructure that Asset Planning builds on.",
    "Frequency: Energy Efficiency is a daily-use product, and daily-use products drive adoption.",
    "Pain severity: All 6 must-fix items from the RA Classic pain inventory are Energy Efficiency problems.",
    "Dependency: Asset Planning consumes Energy Efficiency's substrate. Reliable interval data, baselines, a unified hierarchy.",
  ],
  boundary:
    "These products are sold separately, but they build on each other. The platform must ensure the boundary between them is a licensing boundary, not a technical one.",
};


export const architectureDecision = {
  intro:
    "Two viable paths to bring Energy Efficiency live in RA+ by Q4 2026. The choice shapes integration cost, time to value, and the long-term shape of the platform.",
  options: [
    {
      id: "plan-a",
      label: "Plan A",
      title: "Build native in RA+",
      summary:
        "Stand up ECM guidance and IDM signals as first-class RA+ services, consumed directly by Strategy and the Energy Efficiency MVP.",
      pros: [
        "Cleanest long-term architecture and shared services across modules",
        "No bridge code to maintain or sunset later",
        "Best foundation for Sera as the unified interface",
      ],
      cons: [
        "Heavier upfront engineering investment",
        "Higher delivery risk for the Q4 2026 milestone",
      ],
    },
    {
      id: "plan-b",
      label: "Plan B",
      title: "Bridge from RA Classic",
      summary:
        "Expose existing RA Classic capabilities through a controlled bridge into RA+ to hit the Q4 2026 milestone, with a planned migration to native services later.",
      pros: [
        "Faster path to a usable RA+ Energy Efficiency MVP",
        "Lower delivery risk for the committed timeline",
        "Keeps RA Classic investment productive during the transition",
      ],
      cons: [
        "Bridge code becomes technical debt that must be retired",
        "Risk of carrying RA Classic data-model issues into RA+",
        "Sera experience may feel less coherent until native services land",
      ],
    },
  ],
  decisionCriteria: [
    "Confidence that native services can be delivered by Q4 2026",
    "Severity of RA Classic pain points that would leak into RA+",
    "SE Corporate readiness to use a Plan B experience in March 2027",
    "Engineering capacity available without slowing parallel RA Classic work",
  ],
  status: "Open decision flagged for the working group, no commitment made.",
};

export const maturityLadder = {
  intro:
    "Customer maturity progresses through four stages. RA+ Energy Efficiency must meet customers where they are and pull them up the ladder over time.",
  stages: [
    {
      num: "01",
      label: "Accountability",
      description:
        "Customers know who owns what, can see consumption by site or business unit, and have a baseline they trust.",
    },
    {
      num: "02",
      label: "Cost Allocation",
      description:
        "Energy and carbon are allocated cleanly to cost centers and tenants, enabling chargeback and clear ownership of spend.",
    },
    {
      num: "03",
      label: "Performance Management",
      description:
        "Targets, baselines, and variances are tracked continuously. Anomalies and drift are surfaced before they become problems.",
    },
    {
      num: "04",
      label: "Optimization",
      description:
        "Customers act on prioritized recommendations, manage action plans, and verify outcomes through M&V loops.",
    },
  ],
  note:
    "This ladder is a customer maturity lens, not a pricing or commercial-tiering model.",
};

export const seraKPIs = {
  intro:
    "Sera-specific signals confirm that the interface is producing real daily value, not just dashboards.",
  kpis: [
    { label: "Morning briefings consumed", description: "Energy Managers open the daily briefing as part of their routine" },
    { label: "Anomaly narration accuracy", description: "Sera explanations of anomalies are confirmed as useful by Data Ops" },
    { label: "Alert top-3 prioritization", description: "Top-3 alerts are acted on, lower-priority noise stays suppressed" },
    { label: "Target risk prognosis use", description: "Sustainability Leads use forward-looking target risk views in reviews" },
    { label: "Action plan attainment", description: "Action plans created in Sera reach committed completion rates" },
  ],
};
