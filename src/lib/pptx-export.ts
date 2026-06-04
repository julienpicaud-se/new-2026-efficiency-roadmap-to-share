import PptxGenJS from "pptxgenjs";
import {
  strategicPillars,
  intelligenceFlywheel,
  platformShift,
  personas,
  jobsToBeDone,
  vocEvidence,
  seCorporateBlueprint,
  painInventory,
  maturityLadder,
  seraKPIs,
  whyNowColumns,
  existingTools,
  idmCapabilities,
  ecmIngestionEngine,
  regionalJourneys,
  efficiencyStrategicContext,
} from "@/data/playbook-data";

const executiveSummarySlides = [
  {
    title: "Proven CoE and Bureau capacity, ready to become a digital overlay",
    body: "Consulting, the Efficiency CoE, and the Global Energy Bureau already deliver trusted audits, IDM, implementation, and ongoing monitoring. The opportunity is to turn that human capacity into a digital overlay on RA+, so the same expertise enriches IDM, informs Sera, and reaches more customers without scaling the team linearly.",
  },
  {
    title: "The issue is connection, not demand",
    body: "Data, context, and execution do not flow through one system. IDM holds WAGES. Consulting and Bureau hold engineering context, audit findings, and lifecycle knowledge. Customer workflows live in slides and trackers. The result: weak prioritization, opaque KPIs, and no closed-loop validation.",
  },
  {
    title: "A connected intelligence system on the RA+ spine",
    body: "IDM becomes the trusted foundation, enriched continuously by Consulting and Bureau work product. Sera turns that combined data and context into prioritization, explainable insights, structured execution, and closed-loop validation, with engineering judgment in the loop on complex calls.",
  },
];

const BRAND_GREEN = "3DCD58";
const DARK_BG = "1A1A1A";
const CARD_BG = "262626";
const TEXT_WHITE = "FFFFFF";
const TEXT_MUTED = "A1A1AA";
const ORANGE = "F97316";

const COL_HEX: Record<string, string> = {
  amber: "F59E0B",
  orange: "F97316",
  emerald: "10B981",
  blue: "3B82F6",
  violet: "8B5CF6",
  green: "22C55E",
};

export const exportToPptx = async () => {
  const pptx = new PptxGenJS();

  pptx.author = "Schneider Electric";
  pptx.title = "Efficiency Transformation with RA+";
  pptx.subject = "Efficiency Transformation with RA+";
  pptx.company = "Schneider Electric";

  pptx.defineSlideMaster({
    title: "MASTER_SLIDE",
    background: { color: DARK_BG },
  });

  const newSlide = () => pptx.addSlide({ masterName: "MASTER_SLIDE" });

  const addTitle = (
    slide: PptxGenJS.Slide,
    eyebrow: string,
    title: string,
    intro?: string,
  ) => {
    slide.addText(eyebrow, { x: 0.5, y: 0.3, w: 9, h: 0.3, fontSize: 11, bold: true, color: BRAND_GREEN });
    slide.addText(title, { x: 0.5, y: 0.6, w: 9, h: 0.5, fontSize: 24, bold: true, color: TEXT_WHITE });
    if (intro) {
      slide.addText(intro, { x: 0.5, y: 1.15, w: 9, h: 0.7, fontSize: 10, color: TEXT_MUTED, fit: "shrink" });
    }
  };

  const addSectionDivider = (eyebrow: string, title: string) => {
    const s = newSlide();
    s.addText(eyebrow, { x: 0.5, y: 2.6, w: 9, h: 0.4, fontSize: 14, bold: true, color: BRAND_GREEN, align: "center" });
    s.addText(title, { x: 0.5, y: 3.0, w: 9, h: 0.8, fontSize: 36, bold: true, color: TEXT_WHITE, align: "center" });
  };

  // ===== Slide builders =====

  const buildTitle = () => {
    const s = newSlide();
    s.addText("Efficiency Transformation", { x: 0.5, y: 1.8, w: 9, h: 0.8, fontSize: 18, color: BRAND_GREEN, align: "center" });
    s.addText("Efficiency Transformation", { x: 0.5, y: 2.5, w: 9, h: 0.8, fontSize: 40, bold: true, color: BRAND_GREEN, align: "center" });
    s.addText("with RA+", { x: 0.5, y: 3.2, w: 9, h: 0.8, fontSize: 40, bold: true, color: TEXT_WHITE, align: "center" });
    s.addText("Internal Only and Confidential", { x: 0.5, y: 4.5, w: 9, h: 0.5, fontSize: 14, color: TEXT_MUTED, align: "center" });
  };

  const buildExecutiveSummary = () => {
    const s = newSlide();
    s.addText("Executive Summary", { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 28, bold: true, color: TEXT_WHITE });
    executiveSummarySlides.forEach((item, i) => {
      const yPos = 1 + i * 1.45;
      s.addText(item.title, { x: 0.5, y: yPos, w: 9, h: 0.35, fontSize: 13, bold: true, color: BRAND_GREEN });
      s.addText(item.body, { x: 0.5, y: yPos + 0.42, w: 9, h: 0.95, fontSize: 9.5, color: i === 1 ? TEXT_WHITE : TEXT_MUTED, fit: "shrink" });
    });
  };

  const buildStrategicContext = () => {
    const s = newSlide();
    addTitle(s, "STRATEGIC CONTEXT", "Forces That Make Now the Window", efficiencyStrategicContext.intro);
    const sunset = efficiencyStrategicContext.raClassicSunset;
    s.addShape("rect" as PptxGenJS.ShapeType, {
      x: 0.5, y: 2.0, w: 9, h: 1.4,
      fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
    });
    s.addText(sunset.badge, { x: 0.7, y: 2.1, w: 2.5, h: 0.25, fontSize: 8, bold: true, color: BRAND_GREEN });
    s.addText(sunset.title, { x: 0.7, y: 2.35, w: 6, h: 0.35, fontSize: 14, bold: true, color: TEXT_WHITE });
    s.addText(sunset.timeframe, { x: 7, y: 2.35, w: 2.3, h: 0.3, fontSize: 10, bold: true, color: BRAND_GREEN, align: "right" });
    s.addText(sunset.summary, { x: 0.7, y: 2.75, w: 8.6, h: 0.6, fontSize: 8, color: TEXT_MUTED, fit: "shrink" });
    s.addText(idmCapabilities.positioning.principle, { x: 0.5, y: 3.7, w: 9, h: 1.2, fontSize: 10, color: TEXT_WHITE, fit: "shrink" });
  };

  const buildKeyChallenges = () => {
    const s = newSlide();
    addTitle(s, "KEY CHALLENGES", "Pressure, Confusion, Structure, Value, Scale, Impact");
    whyNowColumns.forEach((col, i) => {
      const xPos = 0.3 + (i % 3) * 3.2;
      const yPos = 1.85 + Math.floor(i / 3) * 1.95;
      const accent = COL_HEX[col.color] || BRAND_GREEN;
      s.addShape("rect" as PptxGenJS.ShapeType, {
        x: xPos, y: yPos, w: 3.1, h: 1.85,
        fill: { color: CARD_BG }, line: { color: accent, width: 1 },
      });
      s.addText(col.title, { x: xPos + 0.15, y: yPos + 0.1, w: 2.85, h: 0.3, fontSize: 11, bold: true, color: accent });
      col.items.slice(0, 4).forEach((it, idx) => {
        s.addText(`• ${it}`, { x: xPos + 0.15, y: yPos + 0.42 + idx * 0.34, w: 2.85, h: 0.32, fontSize: 6.5, color: TEXT_MUTED, fit: "shrink" });
      });
    });
  };

  const buildWhatIf = () => {
    const whatIfScenarios = [
      { title: "Prioritize across the portfolio", description: "Show where to act first across sites, systems, and portfolios using IDM data plus Consulting and Bureau context." },
      { title: "Explain every KPI in context", description: "Move from static decks to explainable readouts where each KPI links back to data, assumptions, and engineering context." },
      { title: "One connected spine for data and context", description: "Capture WAGES, audit findings, and Bureau insights once on the RA+ spine and reuse them across recommendations and verification." },
      { title: "Answer recurring questions in-platform", description: "Resolve the recurring questions efficiency teams answer today inside Sera, with experts pulled in when judgment is required." },
      { title: "Carry ECMs through the full lifecycle", description: "Structure ECMs as a lifecycle: detect, feasibility, design, constructability, implementation, verification, all on the same data." },
    ];
    const s = newSlide();
    addTitle(s, "WHAT IF TOMORROW", "Aspirations the Platform Unlocks");
    whatIfScenarios.forEach((sc, i) => {
      const xPos = 0.3 + (i % 3) * 3.2;
      const yPos = 1.95 + Math.floor(i / 3) * 1.55;
      s.addShape("rect" as PptxGenJS.ShapeType, {
        x: xPos, y: yPos, w: 3.1, h: 1.4,
        fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
      });
      s.addText(sc.title, { x: xPos + 0.15, y: yPos + 0.1, w: 2.85, h: 0.5, fontSize: 10, bold: true, color: BRAND_GREEN, fit: "shrink" });
      s.addText(sc.description, { x: xPos + 0.15, y: yPos + 0.6, w: 2.85, h: 0.75, fontSize: 8, color: TEXT_MUTED, fit: "shrink" });
    });
  };

  const buildPlatformShift = () => {
    const s = newSlide();
    addTitle(s, "PLATFORM SHIFT", "Efficiency Transformation with RA+", platformShift.intro);
    [platformShift.classic, platformShift.raPlus].forEach((col, i) => {
      const xPos = 0.5 + i * 4.6;
      s.addShape("rect" as PptxGenJS.ShapeType, {
        x: xPos, y: 2, w: 4.4, h: 3.2,
        fill: { color: CARD_BG }, line: { color: i === 0 ? "EF4444" : BRAND_GREEN, width: 1 },
      });
      s.addText(col.title, { x: xPos + 0.2, y: 2.15, w: 4, h: 0.35, fontSize: 13, bold: true, color: i === 0 ? "EF4444" : BRAND_GREEN });
      s.addText(col.tagline, { x: xPos + 0.2, y: 2.5, w: 4, h: 0.25, fontSize: 9, italic: true, color: TEXT_MUTED });
      col.points.forEach((p, idx) => {
        s.addText(`• ${p}`, { x: xPos + 0.2, y: 2.85 + idx * 0.4, w: 4, h: 0.38, fontSize: 8, color: TEXT_WHITE, fit: "shrink" });
      });
    });
    s.addText(platformShift.thesis, { x: 0.5, y: 5.35, w: 9, h: 0.3, fontSize: 9, italic: true, color: BRAND_GREEN, align: "center", fit: "shrink" });
  };

  const buildPersonas = () => {
    const s = newSlide();
    addTitle(s, "PERSONAS", "Four Roles, One Design Sequence", personas.intro);
    personas.roles.forEach((r, i) => {
      const xPos = 0.5 + (i % 2) * 4.6;
      const yPos = 1.95 + Math.floor(i / 2) * 1.75;
      s.addShape("rect" as PptxGenJS.ShapeType, {
        x: xPos, y: yPos, w: 4.4, h: 1.6,
        fill: { color: CARD_BG }, line: { color: i === 0 ? BRAND_GREEN : "555555", width: 1 },
      });
      s.addText(r.name, { x: xPos + 0.15, y: yPos + 0.1, w: 3.2, h: 0.3, fontSize: 11, bold: true, color: TEXT_WHITE });
      s.addText(r.rank, { x: xPos + 3.3, y: yPos + 0.1, w: 1, h: 0.25, fontSize: 7, bold: true, color: BRAND_GREEN, align: "right" });
      s.addText(r.context, { x: xPos + 0.15, y: yPos + 0.4, w: 4.1, h: 0.22, fontSize: 7, italic: true, color: TEXT_MUTED });
      s.addText(r.summary, { x: xPos + 0.15, y: yPos + 0.65, w: 4.1, h: 0.9, fontSize: 7, color: TEXT_MUTED, fit: "shrink" });
    });
    s.addText(personas.designPrinciple, { x: 0.5, y: 5.5, w: 9, h: 0.3, fontSize: 7.5, italic: true, color: BRAND_GREEN, fit: "shrink" });
  };

  const buildJTBD = () => {
    const s = newSlide();
    addTitle(s, "JOBS TO BE DONE", "What Users Hire Energy Efficiency to Do", jobsToBeDone.intro);
    jobsToBeDone.jobs.slice(0, 11).forEach((j, i) => {
      const xPos = 0.3 + (i % 2) * 4.7;
      const yPos = 1.95 + Math.floor(i / 2) * 0.55;
      const typeColor = j.type === "Operational" ? "10B981" : "3B82F6";
      s.addText(`${j.num}`, { x: xPos, y: yPos, w: 0.35, h: 0.45, fontSize: 11, bold: true, color: BRAND_GREEN });
      s.addText(j.title, { x: xPos + 0.4, y: yPos, w: 3.2, h: 0.25, fontSize: 9, bold: true, color: TEXT_WHITE });
      s.addText(j.type, { x: xPos + 3.6, y: yPos, w: 1, h: 0.22, fontSize: 6, bold: true, color: typeColor, align: "right" });
      s.addText(j.description, { x: xPos + 0.4, y: yPos + 0.25, w: 4.1, h: 0.28, fontSize: 6, color: TEXT_MUTED, fit: "shrink" });
    });
    s.addText(`Where ECMs fit. ${jobsToBeDone.ecmInsight}`, { x: 0.5, y: 5.4, w: 9, h: 0.4, fontSize: 7.5, italic: true, color: BRAND_GREEN, fit: "shrink" });
  };

  const buildStrategicPillars = () => {
    const s = newSlide();
    s.addText("QUALITATIVE OUTCOMES", { x: 0.5, y: 0.3, w: 9, h: 0.3, fontSize: 11, bold: true, color: BRAND_GREEN });
    s.addText("Strategic Pillars", { x: 0.5, y: 0.6, w: 9, h: 0.5, fontSize: 24, bold: true, color: TEXT_WHITE });
    strategicPillars.forEach((pillar, i) => {
      const xPos = 0.5 + i * 3.2;
      s.addShape("rect" as PptxGenJS.ShapeType, {
        x: xPos, y: 1, w: 3, h: 4,
        fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
      });
      s.addText(pillar.title, { x: xPos + 0.2, y: 1.2, w: 2.6, h: 0.4, fontSize: 16, bold: true, color: BRAND_GREEN });
      s.addText(pillar.tagline, { x: xPos + 0.2, y: 1.7, w: 2.6, h: 0.3, fontSize: 10, color: TEXT_MUTED });
      s.addText(pillar.promise, { x: xPos + 0.2, y: 2.2, w: 2.6, h: 2.5, fontSize: 9, color: TEXT_WHITE, fit: "shrink" });
    });
  };

  const buildTechnologyLandscape = () => {
    const s = newSlide();
    addTitle(s, "TECHNOLOGY LANDSCAPE", "Where We Are Today, Where IDM Goes Next", "Existing tools that anchor today's efficiency work, with IDM evolving into the RA+ data backbone.");
    existingTools.forEach((t, i) => {
      const xPos = 0.3 + (i % 2) * 4.7;
      const yPos = 1.95 + Math.floor(i / 2) * 1.55;
      s.addShape("rect" as PptxGenJS.ShapeType, {
        x: xPos, y: yPos, w: 4.6, h: 1.45,
        fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
      });
      s.addText(t.name, { x: xPos + 0.15, y: yPos + 0.1, w: 4.3, h: 0.3, fontSize: 12, bold: true, color: BRAND_GREEN });
      s.addText(t.description, { x: xPos + 0.15, y: yPos + 0.4, w: 4.3, h: 0.55, fontSize: 8, color: TEXT_WHITE, fit: "shrink" });
      s.addText(`Limitation: ${t.limitation}`, { x: xPos + 0.15, y: yPos + 1.0, w: 4.3, h: 0.4, fontSize: 7, italic: true, color: TEXT_MUTED, fit: "shrink" });
    });
    s.addText(idmCapabilities.tagline, { x: 0.5, y: 5.3, w: 9, h: 0.4, fontSize: 8, italic: true, color: BRAND_GREEN, align: "center", fit: "shrink" });
  };

  const buildCapabilityMapping = () => {
    const s = newSlide();
    addTitle(s, "CAPABILITY MAPPING", "ECM Library across the Efficiency Journey", "How the ECM knowledge base plugs into each stage of the customer journey.");
    const journeyStages = [
      { name: "Lead Intake", note: "Surface relevant opportunities by sector and geography" },
      { name: "Data Collection", note: "Match required inputs to available IDM, BMS, and utility feeds" },
      { name: "On-Site Audit", note: "Suggest measures to verify; capture findings into the library" },
      { name: "Analysis & Guidance", note: "Pre-compute savings ranges from historic distributions" },
      { name: "Recommendations", note: "Generate structured, defensible deliverables" },
      { name: "Implementation", note: "Hand off scope to delivery teams or partners" },
      { name: "Monitoring", note: "Close the loop with M&V to feed library updates" },
    ];
    journeyStages.forEach((stage, i) => {
      const yPos = 1.85 + i * 0.5;
      s.addShape("rect" as PptxGenJS.ShapeType, {
        x: 0.5, y: yPos, w: 9, h: 0.45,
        fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
      });
      s.addText(`${i + 1}. ${stage.name}`, { x: 0.7, y: yPos + 0.08, w: 2.5, h: 0.3, fontSize: 10, bold: true, color: BRAND_GREEN });
      s.addText(stage.note, { x: 3.3, y: yPos + 0.08, w: 6.0, h: 0.3, fontSize: 8, color: TEXT_WHITE, fit: "shrink" });
    });
  };

  const buildRegionalJourneys = () => {
    const s = newSlide();
    addTitle(s, "REGIONAL JOURNEYS", "No Single Path. Shared Backend.", regionalJourneys.intro);
    regionalJourneys.journeys.forEach((j, i) => {
      const xPos = 0.3 + (i % 2) * 4.7;
      const yPos = 1.95 + Math.floor(i / 2) * 1.7;
      s.addShape("rect" as PptxGenJS.ShapeType, {
        x: xPos, y: yPos, w: 4.6, h: 1.55,
        fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
      });
      s.addText(j.name, { x: xPos + 0.15, y: yPos + 0.1, w: 3.2, h: 0.3, fontSize: 12, bold: true, color: BRAND_GREEN });
      s.addText(j.revenue, { x: xPos + 3.35, y: yPos + 0.1, w: 1.2, h: 0.25, fontSize: 6.5, bold: true, color: TEXT_WHITE, align: "right" });
      s.addText(j.tagline, { x: xPos + 0.15, y: yPos + 0.4, w: 4.3, h: 0.25, fontSize: 8, italic: true, color: TEXT_MUTED });
      s.addText(`Selling point: ${j.sellingPoint}`, { x: xPos + 0.15, y: yPos + 0.65, w: 4.3, h: 0.4, fontSize: 7.5, color: TEXT_WHITE, fit: "shrink" });
      s.addText(`Convergence: ${regionalJourneys.convergence.point}`, { x: xPos + 0.15, y: yPos + 1.1, w: 4.3, h: 0.35, fontSize: 7, italic: true, color: BRAND_GREEN, fit: "shrink" });
    });
    s.addText(regionalJourneys.designPrinciple, { x: 0.5, y: 5.4, w: 9, h: 0.35, fontSize: 8, italic: true, color: BRAND_GREEN, align: "center", fit: "shrink" });
  };

  const buildExpertServices = () => {
    // Slide 1: Two client archetypes
    const s1 = newSlide();
    addTitle(
      s1,
      "EXPERTS IN THE SYSTEM",
      "Consulting & Bureau on the RA+ Spine",
      "Consulting and the Global Energy Bureau are part of the system, not a layer on top. Same connected spine, two ways to consume it.",
    );
    const archetypes = [
      {
        title: "Self-Serve Operator",
        tagline: "FULL AUTONOMY, AI-DRIVEN",
        body: "Wants the keys. Runs IDM 2.0 analytics, explores ECM candidates, and acts on Sera recommendations directly. Consulting and Bureau available a-la-carte for validation or complex calls.",
      },
      {
        title: "Guided Decision Client",
        tagline: "EXPERTS IN THE SYSTEM",
        body: "Wants Consulting and Bureau embedded in the workflow. Platform drives day-to-day; experts validate, enrich IDM context, frame risk, and own change management across the ECM lifecycle.",
      },
    ];
    archetypes.forEach((a, i) => {
      const xPos = 0.5 + i * 4.6;
      s1.addShape("rect" as PptxGenJS.ShapeType, {
        x: xPos, y: 1.95, w: 4.45, h: 3.4,
        fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
      });
      s1.addText(a.title, { x: xPos + 0.2, y: 2.05, w: 4.05, h: 0.4, fontSize: 16, bold: true, color: TEXT_WHITE });
      s1.addText(a.tagline, { x: xPos + 0.2, y: 2.5, w: 4.05, h: 0.3, fontSize: 9, bold: true, color: BRAND_GREEN });
      s1.addText(a.body, { x: xPos + 0.2, y: 2.85, w: 4.05, h: 2.4, fontSize: 10, color: TEXT_WHITE, fit: "shrink" });
    });

    // Slide 2: How experts show up + engagement tiers
    const s2 = newSlide();
    addTitle(
      s2,
      "HOW EXPERTS SHOW UP",
      "Consulting & Bureau Across the Lifecycle",
      "Experts bring data integration, validation, interpretation, and change management into the system, across three engagement tiers on one connected spine.",
    );
    const pillars = [
      { t: "Data integration & auditing", d: "Bring audit findings, engineering assumptions, and field measurements into IDM as first-class data." },
      { t: "Validation", d: "Pressure-test baselines, ECM candidates, and Sera outputs. Site validation always required for design and capital." },
      { t: "Interpretation & risk", d: "Frame portfolio narrative, downside, tenant impact, compliance, and execution risk for decision-makers." },
      { t: "Change & program oversight", d: "Bureau and Consulting carry change management, monitoring, and program oversight with closed-loop validation." },
    ];
    pillars.forEach((p, i) => {
      const xPos = 0.5 + i * 2.3;
      s2.addShape("rect" as PptxGenJS.ShapeType, {
        x: xPos, y: 1.95, w: 2.2, h: 1.6,
        fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
      });
      s2.addText(p.t, { x: xPos + 0.12, y: 2.02, w: 2.0, h: 0.3, fontSize: 10, bold: true, color: BRAND_GREEN, fit: "shrink" });
      s2.addText(p.d, { x: xPos + 0.12, y: 2.4, w: 2.0, h: 1.1, fontSize: 7.5, color: TEXT_WHITE, fit: "shrink" });
    });

    const tiers = [
      ["Self-Serve", "Self-Serve Operator", "On demand", "Experts a-la-carte for validation", "Full RA+ + IDM 2.0 + Sera autonomy"],
      ["Assisted", "Mixed maturity", "Async + recurring", "Experts validate & enrich IDM context", "Shared RA+ workspace, ECM lifecycle tracked"],
      ["Embedded", "Guided Decision Client", "Embedded", "Consulting + Bureau embedded across lifecycle", "Co-piloted RA+ spine, continuous Bureau monitoring"],
    ];
    const tableY = 3.75;
    const headers = ["Tier", "Best for", "Cadence", "Human role", "Platform / IDM 2.0"];
    const colWidths = [1.1, 1.7, 1.3, 2.3, 2.8];
    let xCursor = 0.5;
    headers.forEach((h, i) => {
      s2.addText(h, { x: xCursor, y: tableY, w: colWidths[i], h: 0.3, fontSize: 9, bold: true, color: BRAND_GREEN });
      xCursor += colWidths[i];
    });
    tiers.forEach((row, ri) => {
      xCursor = 0.5;
      row.forEach((cell, ci) => {
        s2.addText(cell, {
          x: xCursor, y: tableY + 0.35 + ri * 0.42, w: colWidths[ci], h: 0.4,
          fontSize: 8, color: ci === 0 ? TEXT_WHITE : TEXT_MUTED, bold: ci === 0, fit: "shrink",
        });
        xCursor += colWidths[ci];
      });
    });
    s2.addText("One connected spine. Clients move between tiers without losing context. Engineering judgment and site validation remain required for ECM design and capital decisions.", {
      x: 0.5, y: 5.4, w: 9, h: 0.3, fontSize: 8, italic: true, color: BRAND_GREEN, align: "center", fit: "shrink",
    });
  };

  const buildPhasing = () => {
    const phases = [
      { phase: "Phase 1", title: "IDM Evolution", tagline: "Urgent, no-regret", timing: "MVP Q4 2025 / Q1 2026", summary: "Re-platform IDM into RA+ to drive market differentiation through agentic capabilities, richer context, and SaaS-ready delivery." },
      { phase: "Phase 2", title: "ECM Library", tagline: "Cross-COE feeder", timing: "Sequenced with Pricing & Savings Accelerator", summary: "Connects efficiency, consultancy, and construction services into one knowledge backbone that powers Sera reasoning." },
      { phase: "Phase 3", title: "AkitaBox", tagline: "Build vs. integrate decision", timing: "Sequencing TBD", summary: "Confirmed no-regret strategic move. Open question on build inside RA+ vs. standalone module and differentiation vs. BDP / Foresight." },
    ];
    const s = newSlide();
    addTitle(s, "PHASING", "What Ships, in What Order, Why", "Capability depth grows along the axis: Phase 1 is in flight, Phase 2 is sequenced, Phase 3 is an open question.");
    phases.forEach((p, i) => {
      const xPos = 0.5 + i * 3.05;
      s.addShape("rect" as PptxGenJS.ShapeType, {
        x: xPos, y: 1.95, w: 2.95, h: 3.4,
        fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
      });
      s.addText(p.phase, { x: xPos + 0.15, y: 2.05, w: 2.65, h: 0.3, fontSize: 9, bold: true, color: BRAND_GREEN });
      s.addText(p.title, { x: xPos + 0.15, y: 2.35, w: 2.65, h: 0.4, fontSize: 14, bold: true, color: TEXT_WHITE });
      s.addText(p.tagline, { x: xPos + 0.15, y: 2.75, w: 2.65, h: 0.25, fontSize: 8, italic: true, color: TEXT_MUTED });
      s.addText(p.timing, { x: xPos + 0.15, y: 3.0, w: 2.65, h: 0.25, fontSize: 7.5, color: BRAND_GREEN });
      s.addText(p.summary, { x: xPos + 0.15, y: 3.3, w: 2.65, h: 1.95, fontSize: 8, color: TEXT_WHITE, fit: "shrink" });
    });
  };

  const buildIdmVision = () => {
    const idmUseCases = [
      { title: "Prioritization across the portfolio", body: "Surface where to act first across sites, systems, and portfolios on the same connected spine." },
      { title: "Automated insights & KPI explainability", body: "Each KPI links back to the data, assumptions, and engineering context that produced it." },
      { title: "ECM detection (judgment required)", body: "Detect candidates from interval data. Engineering judgment and site validation remain required for design and capital." },
      { title: "Recurring-question workflows", body: "Codify the recurring questions efficiency teams answer into structured loops inside Sera and IDM." },
      { title: "Context enrichment from Consulting & Bureau", body: "Audit findings, Bureau monitoring, and validation outcomes captured as first-class data inside IDM." },
      { title: "Closed-loop validation", body: "Verify outcomes using the same data that surfaced the opportunity. IPMVP-aligned, Bureau in the loop where monitoring applies." },
    ];
    const idmProfiles = [
      { title: "Give Me", subtitle: "Full self-serve", body: "Internal expertise; runs analyses, configures KPIs, uses same data and explainability as experts." },
      { title: "Help Me", subtitle: "Hybrid", body: "Platform autonomy plus Consulting or Bureau for audits, ECM design, validation, change management." },
      { title: "Do It For Me", subtitle: "Full service", body: "Schneider handles data integration, audit, ECM lifecycle, and program oversight on the same spine." },
    ];
    const s = newSlide();
    addTitle(s, "IDM 2.0 VISION", "Connected, Explainable, Enriched", "IDM 2.0 is the trusted foundation. Consulting and Bureau enrich it. Sera makes it explainable.");
    idmUseCases.forEach((u, i) => {
      const xPos = 0.5 + (i % 3) * 3.05;
      const yPos = 1.95 + Math.floor(i / 3) * 1.05;
      s.addShape("rect" as PptxGenJS.ShapeType, { x: xPos, y: yPos, w: 2.95, h: 0.95, fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 } });
      s.addText(u.title, { x: xPos + 0.15, y: yPos + 0.05, w: 2.65, h: 0.28, fontSize: 9, bold: true, color: BRAND_GREEN, fit: "shrink" });
      s.addText(u.body, { x: xPos + 0.15, y: yPos + 0.33, w: 2.65, h: 0.6, fontSize: 7, color: TEXT_MUTED, fit: "shrink" });
    });
    idmProfiles.forEach((p, i) => {
      const xPos = 0.5 + i * 3.05;
      s.addShape("rect" as PptxGenJS.ShapeType, { x: xPos, y: 4.15, w: 2.95, h: 1.4, fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 } });
      s.addText(p.title, { x: xPos + 0.15, y: 4.22, w: 2.65, h: 0.3, fontSize: 11, bold: true, color: TEXT_WHITE });
      s.addText(p.subtitle, { x: xPos + 0.15, y: 4.52, w: 2.65, h: 0.25, fontSize: 8, italic: true, color: BRAND_GREEN });
      s.addText(p.body, { x: xPos + 0.15, y: 4.77, w: 2.65, h: 0.75, fontSize: 7.5, color: TEXT_MUTED, fit: "shrink" });
    });
  };

  const buildSuccessMetrics = () => {
    const s = newSlide();
    addTitle(s, "QUANTITATIVE KPIS", "Success Looks Like", "Measurable signals that translate the Strategic Pillars into trackable indicators. Each KPI defines what we measure, not a committed target.");
    const quantKPIs = [
      { label: "Audit Cycle Time", signal: "Days per audit (trend)" },
      { label: "Advisory-to-Audit Conversion", signal: "% prompts → audits" },
      { label: "Time to Quote", signal: "Hours to quote (median)" },
      { label: "Recommendation Adoption", signal: "% recs actioned (90d)" },
      { label: "RA+ Revenue Contribution", signal: "% of RA+ ARR" },
    ];
    quantKPIs.forEach((k, i) => {
      const xPos = 0.5 + i * 1.85;
      s.addShape("rect" as PptxGenJS.ShapeType, {
        x: xPos, y: 1.95, w: 1.75, h: 1.0,
        fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
      });
      s.addText(k.label, { x: xPos + 0.1, y: 2.0, w: 1.55, h: 0.45, fontSize: 9, bold: true, color: TEXT_WHITE, fit: "shrink" });
      s.addText(k.signal, { x: xPos + 0.1, y: 2.45, w: 1.55, h: 0.45, fontSize: 7.5, color: BRAND_GREEN, fit: "shrink" });
    });
    s.addText("Sera Interface Signals", { x: 0.5, y: 3.15, w: 9, h: 0.3, fontSize: 11, bold: true, color: BRAND_GREEN });
    s.addText(seraKPIs.intro, { x: 0.5, y: 3.45, w: 9, h: 0.35, fontSize: 8, italic: true, color: TEXT_MUTED, fit: "shrink" });
    seraKPIs.kpis.forEach((k, i) => {
      const xPos = 0.5 + (i % 3) * 3.05;
      const yPos = 3.85 + Math.floor(i / 3) * 0.85;
      s.addShape("rect" as PptxGenJS.ShapeType, {
        x: xPos, y: yPos, w: 2.85, h: 0.75,
        fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
      });
      s.addText(k.label, { x: xPos + 0.1, y: yPos + 0.05, w: 2.65, h: 0.25, fontSize: 8, bold: true, color: TEXT_WHITE, fit: "shrink" });
      s.addText(k.description, { x: xPos + 0.1, y: yPos + 0.3, w: 2.65, h: 0.42, fontSize: 6.5, color: TEXT_MUTED, fit: "shrink" });
    });
  };

  const buildStartStop = () => {
    const s = newSlide();
    addTitle(s, "START / STOP", "Where We Stop, How We Operate", "The boundary list keeps scope honest. The operating rules keep customer-facing advice trustworthy.");
    const outOfScope = [
      { title: "Contractual Guarantees", detail: "Performance guarantees and contractual commitments require separate validation." },
      { title: "Detailed Engineering", detail: "Detailed engineering design without expert validation stays outside scope." },
      { title: "Asset Planning", detail: "Baseline modeling, M&V, and capital planning live in a separate Asset Planning discovery." },
    ];
    const guardrails = [
      { title: "Transparency & Scope", detail: "Label advice as guidance, show ranges with confidence levels, surface assumptions and gaps." },
      { title: "Data Quality & Applicability", detail: "Enforce data checks, show applicability rules, filter by geography, segment, and asset tags." },
      { title: "Risk & Compliance", detail: "No auto-suggest where licensed sign-off is required. Maintain audit trails. Link to standards." },
      { title: "User Experience & Escalation", detail: "Expert escalation from any advice card. Rationale snippets and similar-site evidence." },
    ];
    s.addText("Stop", { x: 0.5, y: 1.95, w: 4.4, h: 0.3, fontSize: 11, bold: true, color: ORANGE });
    outOfScope.forEach((item, i) => {
      const yPos = 2.3 + i * 1.05;
      s.addShape("rect" as PptxGenJS.ShapeType, { x: 0.5, y: yPos, w: 4.4, h: 0.95, fill: { color: CARD_BG }, line: { color: ORANGE, width: 1 } });
      s.addText(item.title, { x: 0.65, y: yPos + 0.1, w: 4.1, h: 0.3, fontSize: 10, bold: true, color: TEXT_WHITE });
      s.addText(item.detail, { x: 0.65, y: yPos + 0.4, w: 4.1, h: 0.5, fontSize: 7.5, color: TEXT_MUTED, fit: "shrink" });
    });
    s.addText("Start", { x: 5.1, y: 1.95, w: 4.4, h: 0.3, fontSize: 11, bold: true, color: BRAND_GREEN });
    guardrails.forEach((item, i) => {
      const yPos = 2.3 + i * 0.78;
      s.addShape("rect" as PptxGenJS.ShapeType, { x: 5.1, y: yPos, w: 4.4, h: 0.7, fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 } });
      s.addText(item.title, { x: 5.25, y: yPos + 0.05, w: 4.1, h: 0.25, fontSize: 9, bold: true, color: BRAND_GREEN });
      s.addText(item.detail, { x: 5.25, y: yPos + 0.3, w: 4.1, h: 0.38, fontSize: 7, color: TEXT_MUTED, fit: "shrink" });
    });
  };

  const buildExecutiveTakeaway = () => {
    const s = newSlide();
    addTitle(s, "EXECUTIVE TAKEAWAY", "Why This, Why Now");
    s.addText(
      "Connect data, context, and execution on one spine. IDM as the trusted foundation, Consulting and Bureau as the digital overlay enriching it, Sera as the explainable interface that closes the loop from prioritization to validation.",
      { x: 0.5, y: 2.0, w: 9, h: 2.5, fontSize: 16, color: TEXT_WHITE, align: "center", fit: "shrink" },
    );
  };

  // ===== Appendix builders =====

  const buildKnowledgeEngine = () => {
    const s = newSlide();
    addTitle(s, "APPENDIX · KNOWLEDGE ENGINE", ecmIngestionEngine.prototype.title, ecmIngestionEngine.intro);
    ecmIngestionEngine.prototype.flow.forEach((step, i) => {
      const xPos = 0.5 + i * 2.25;
      s.addShape("rect" as PptxGenJS.ShapeType, {
        x: xPos, y: 1.95, w: 2.05, h: 1.7,
        fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
      });
      s.addText(step.step, { x: xPos + 0.15, y: 2.05, w: 1.8, h: 0.3, fontSize: 10, bold: true, color: BRAND_GREEN });
      s.addText(step.name, { x: xPos + 0.15, y: 2.35, w: 1.8, h: 0.3, fontSize: 12, bold: true, color: TEXT_WHITE });
      s.addText(step.description, { x: xPos + 0.15, y: 2.7, w: 1.8, h: 0.9, fontSize: 7, color: TEXT_MUTED, fit: "shrink" });
    });
    s.addText(ecmIngestionEngine.prototype.accuracy, { x: 0.5, y: 3.85, w: 9, h: 0.3, fontSize: 9, italic: true, color: BRAND_GREEN, align: "center" });
    s.addText(ecmIngestionEngine.monteCarlo.title, { x: 0.5, y: 4.3, w: 9, h: 0.3, fontSize: 11, bold: true, color: TEXT_WHITE });
    s.addText(ecmIngestionEngine.monteCarlo.output, { x: 0.5, y: 4.6, w: 9, h: 0.5, fontSize: 8, color: TEXT_MUTED, fit: "shrink" });
    s.addText(ecmIngestionEngine.monteCarlo.why, { x: 0.5, y: 5.15, w: 9, h: 0.5, fontSize: 8, italic: true, color: TEXT_WHITE, fit: "shrink" });
  };

  const buildMaturityLadder = () => {
    const s = newSlide();
    addTitle(s, "APPENDIX · MATURITY LADDER", "Meet Customers Where They Are", maturityLadder.intro);
    maturityLadder.stages.forEach((stage, i) => {
      const xPos = 0.5 + i * 2.35;
      s.addShape("rect" as PptxGenJS.ShapeType, {
        x: xPos, y: 2.0, w: 2.15, h: 2.5,
        fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
      });
      s.addText(stage.num, { x: xPos + 0.15, y: 2.1, w: 1.85, h: 0.5, fontSize: 24, bold: true, color: BRAND_GREEN });
      s.addText(stage.label, { x: xPos + 0.15, y: 2.7, w: 1.85, h: 0.35, fontSize: 12, bold: true, color: TEXT_WHITE });
      s.addText(stage.description, { x: xPos + 0.15, y: 3.1, w: 1.85, h: 1.3, fontSize: 8, color: TEXT_MUTED, fit: "shrink" });
    });
    s.addText(maturityLadder.note, { x: 0.5, y: 4.7, w: 9, h: 0.3, fontSize: 8, italic: true, color: TEXT_MUTED });
  };

  const buildVocEvidence = () => {
    const s = newSlide();
    addTitle(s, "APPENDIX · VOC EVIDENCE", "What Customers Told Us", vocEvidence.intro);
    vocEvidence.customers.forEach((c, i) => {
      const xPos = 0.3 + i * 3.15;
      s.addShape("rect" as PptxGenJS.ShapeType, { x: xPos, y: 1.95, w: 3, h: 3.6, fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 } });
      s.addText(c.name, { x: xPos + 0.15, y: 2.05, w: 2.7, h: 0.3, fontSize: 12, bold: true, color: BRAND_GREEN });
      s.addText(c.contact, { x: xPos + 0.15, y: 2.35, w: 2.7, h: 0.3, fontSize: 6.5, color: TEXT_MUTED, fit: "shrink" });
      s.addText(c.context, { x: xPos + 0.15, y: 2.6, w: 2.7, h: 0.22, fontSize: 6.5, italic: true, color: TEXT_MUTED });
      c.findings.slice(0, 4).forEach((f, idx) => {
        s.addText(`• ${f}`, { x: xPos + 0.15, y: 2.85 + idx * 0.42, w: 2.7, h: 0.4, fontSize: 6, color: TEXT_WHITE, fit: "shrink" });
      });
      s.addText(`"${c.quote}"`, { x: xPos + 0.15, y: 4.6, w: 2.7, h: 0.85, fontSize: 6.5, italic: true, color: BRAND_GREEN, fit: "shrink" });
    });
  };

  const buildSECorporateBlueprint = () => {
    const s = newSlide();
    addTitle(s, "APPENDIX · RA CLASSIC IDM CLIENT", seCorporateBlueprint.title, seCorporateBlueprint.intro);
    seCorporateBlueprint.scale.forEach((sc, i) => {
      const xPos = 0.5 + i * 2.25;
      s.addShape("rect" as PptxGenJS.ShapeType, { x: xPos, y: 1.95, w: 2.05, h: 1.05, fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 } });
      s.addText(sc.value, { x: xPos + 0.1, y: 2.05, w: 1.85, h: 0.35, fontSize: 16, bold: true, color: BRAND_GREEN, align: "center" });
      s.addText(sc.label, { x: xPos + 0.1, y: 2.42, w: 1.85, h: 0.22, fontSize: 7, bold: true, color: TEXT_WHITE, align: "center" });
      s.addText(sc.detail, { x: xPos + 0.1, y: 2.65, w: 1.85, h: 0.32, fontSize: 5.5, color: TEXT_MUTED, align: "center", fit: "shrink" });
    });
    s.addText(seCorporateBlueprint.trainingSignal, { x: 0.5, y: 3.15, w: 9, h: 0.4, fontSize: 8, color: TEXT_WHITE, fit: "shrink" });
    seCorporateBlueprint.phaseMap.forEach((p, i) => {
      const xPos = 0.5 + i * 3.05;
      s.addShape("rect" as PptxGenJS.ShapeType, { x: xPos, y: 3.7, w: 2.95, h: 1.5, fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 } });
      s.addText(p.phase, { x: xPos + 0.15, y: 3.8, w: 2.65, h: 0.3, fontSize: 10, bold: true, color: BRAND_GREEN });
      s.addText(p.detail, { x: xPos + 0.15, y: 4.1, w: 2.65, h: 1.0, fontSize: 7, color: TEXT_MUTED, fit: "shrink" });
    });
    s.addText(seCorporateBlueprint.conclusion, { x: 0.5, y: 5.35, w: 9, h: 0.3, fontSize: 8, italic: true, color: TEXT_WHITE, fit: "shrink" });
  };

  const buildPainInventory = () => {
    const s = newSlide();
    addTitle(s, "APPENDIX · PAIN INVENTORY", "What the Efficiency Transformation Eliminates", painInventory.intro);
    painInventory.pains.forEach((p, i) => {
      const xPos = 0.3 + (i % 2) * 4.7;
      const yPos = 1.95 + Math.floor(i / 2) * 1.2;
      s.addShape("rect" as PptxGenJS.ShapeType, { x: xPos, y: yPos, w: 4.6, h: 1.1, fill: { color: CARD_BG }, line: { color: "EF4444", width: 1 } });
      s.addText(p.id, { x: xPos + 0.15, y: yPos + 0.1, w: 0.5, h: 0.25, fontSize: 9, bold: true, color: "EF4444" });
      s.addText(p.severity, { x: xPos + 0.7, y: yPos + 0.1, w: 1.5, h: 0.22, fontSize: 6, bold: true, color: "EF4444" });
      s.addText(p.title, { x: xPos + 0.15, y: yPos + 0.35, w: 4.3, h: 0.28, fontSize: 9, bold: true, color: TEXT_WHITE });
      s.addText(p.detail, { x: xPos + 0.15, y: yPos + 0.62, w: 4.3, h: 0.45, fontSize: 6.5, color: TEXT_MUTED, fit: "shrink" });
    });
  };

  const buildFlywheel = () => {
    const s = newSlide();
    s.addText("Appendix · Strategy-to-Improvement Flywheel", { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 22, bold: true, color: TEXT_WHITE });
    s.addText(intelligenceFlywheel.subtitle, { x: 0.5, y: 0.95, w: 9, h: 0.35, fontSize: 11, color: TEXT_MUTED });
    intelligenceFlywheel.stages.forEach((stage, i) => {
      const xPos = 0.5 + (i % 3) * 3.05;
      const yPos = 1.65 + Math.floor(i / 3) * 1.55;
      s.addShape("rect" as PptxGenJS.ShapeType, { x: xPos, y: yPos, w: 2.75, h: 1.15, fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 } });
      s.addText(stage.name, { x: xPos + 0.15, y: yPos + 0.15, w: 2.45, h: 0.25, fontSize: 11, bold: true, color: BRAND_GREEN });
      s.addText(stage.description, { x: xPos + 0.15, y: yPos + 0.48, w: 2.45, h: 0.55, fontSize: 7, color: TEXT_MUTED, fit: "shrink" });
    });
    s.addText(intelligenceFlywheel.keyInsight, { x: 0.5, y: 5.05, w: 9, h: 0.35, fontSize: 8.5, color: TEXT_WHITE, fit: "shrink" });
  };

  const buildEcmLifecycle = () => {
    const lifecycleStages = [
      { name: "Detect", status: "In build", oneLiner: "Surface ECM candidates from IDM data and asset context.", ra: "Scans WAGES, asset registers, operating context to rank candidates by signal strength.", ex: "Bureau and Consulting review candidates, discard noise, add site context." },
      { name: "Feasibility", status: "In build", oneLiner: "Engineering review of applicability, constraints, and value.", ra: "Pulls asset, tariff, baseline data into a structured feasibility view with ranges.", ex: "Engineers assess technical fit, constructability, stakeholder constraints; go / no-go." },
      { name: "Design", status: "Planned", oneLiner: "Detailed design with site-specific validation.", ra: "Carries assumptions, baselines, and feasibility decisions; tracks changes and rationale.", ex: "Design engineers and consultants own the technical solution and site validation." },
      { name: "Constructability", status: "Planned", oneLiner: "Implementation planning with field input.", ra: "Captures sequencing, dependencies, and field notes against the asset model.", ex: "Project teams and field engineers validate buildability, safety, downtime." },
      { name: "Implementation", status: "Planned", oneLiner: "Execute, instrument, and track against the same data.", ra: "Tracks task status, captures as-built changes, instruments against IDM telemetry.", ex: "Delivery teams execute; Bureau watches data and flags drift early." },
      { name: "Verification", status: "In build", oneLiner: "Closed-loop validation using the same data that detected it.", ra: "Compares post-implementation performance to baseline using IDM data and KPIs.", ex: "Bureau and Consulting interpret results, translate risk, feed lessons back." },
    ];
    const s = newSlide();
    addTitle(s, "APPENDIX · ECM LIFECYCLE", "ECMs as a Lifecycle, not a Static Output", "The platform structures and carries every ECM from detection through verification on the same RA+ spine.");
    lifecycleStages.forEach((stage, i) => {
      const xPos = 0.3 + (i % 3) * 3.2;
      const yPos = 1.95 + Math.floor(i / 3) * 1.75;
      s.addShape("rect" as PptxGenJS.ShapeType, {
        x: xPos, y: yPos, w: 3.1, h: 1.65,
        fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
      });
      s.addText(`${i + 1}. ${stage.name}`, { x: xPos + 0.15, y: yPos + 0.08, w: 2.2, h: 0.28, fontSize: 11, bold: true, color: BRAND_GREEN });
      s.addText(stage.status, { x: xPos + 2.3, y: yPos + 0.1, w: 0.7, h: 0.22, fontSize: 6.5, bold: true, color: ORANGE, align: "right" });
      s.addText(stage.oneLiner, { x: xPos + 0.15, y: yPos + 0.4, w: 2.85, h: 0.4, fontSize: 7, italic: true, color: TEXT_WHITE, fit: "shrink" });
      s.addText(`RA+ does: ${stage.ra}`, { x: xPos + 0.15, y: yPos + 0.82, w: 2.85, h: 0.38, fontSize: 6.2, color: BRAND_GREEN, fit: "shrink" });
      s.addText(`Experts do: ${stage.ex}`, { x: xPos + 0.15, y: yPos + 1.22, w: 2.85, h: 0.38, fontSize: 6.2, color: TEXT_MUTED, fit: "shrink" });
    });
    s.addText("Lifecycle guardrails: engineering judgment and site validation required at every stage. Platform carries the lifecycle; it never replaces audits or shortcuts proposals. Same IDM data flows end-to-end.", {
      x: 0.5, y: 5.5, w: 9, h: 0.3, fontSize: 8, italic: true, color: ORANGE, align: "center", fit: "shrink",
    });
  };

  const buildThankYou = () => {
    const s = newSlide();
    s.addText("Thank You", { x: 0.5, y: 2, w: 9, h: 1, fontSize: 44, bold: true, color: TEXT_WHITE, align: "center" });
    s.addText("Efficiency Transformation with RA+", { x: 0.5, y: 3.2, w: 9, h: 0.5, fontSize: 18, color: BRAND_GREEN, align: "center" });
    s.addText("Internal Only and Confidential", { x: 0.5, y: 4, w: 9, h: 0.5, fontSize: 12, color: TEXT_MUTED, align: "center" });
  };

  // ===== Render in new flow order (mirrors Index.tsx + Navigation) =====

  buildTitle();
  buildExecutiveSummary();

  // Problem
  buildStrategicContext();
  buildKeyChallenges();

  // Vision
  buildWhatIf();
  buildPlatformShift();

  // Audience
  buildPersonas();
  buildJTBD();

  // Response
  buildStrategicPillars();

  // How
  buildTechnologyLandscape();
  buildCapabilityMapping();
  buildRegionalJourneys();
  buildExpertServices();

  // Delivery
  buildPhasing();
  buildIdmVision();
  buildSuccessMetrics();
  buildStartStop();
  buildExecutiveTakeaway();

  // Appendix
  addSectionDivider("APPENDIX", "Reference Materials");
  buildKnowledgeEngine();
  buildMaturityLadder();
  buildVocEvidence();
  buildSECorporateBlueprint();
  buildPainInventory();
  buildFlywheel();

  buildThankYou();

  await pptx.writeFile({ fileName: "Efficiency-Transformation-with-RA-Plus.pptx" });
};
