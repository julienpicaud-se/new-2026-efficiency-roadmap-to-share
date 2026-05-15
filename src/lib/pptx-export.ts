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
    title: "Efficiency CoE expertise is proven, but not yet scaled through RA+",
    body: "The Efficiency CoE already delivers trusted advisory, implementation, IDM, and Global Energy Bureau capabilities across public and private sectors. The RA+ opportunity is to convert that operating strength into a repeatable platform capability that reaches customers earlier, guides action faster, and supports continuous improvement.",
  },
  {
    title: "A governed Efficiency CoE capability embedded in RA+",
    body: "The north star is an authoritative efficiency foundation inside RA+ that connects IDM as the trusted interval-data system of record, expert CoE knowledge, and guided workflows. It should power goal-based Strategy recommendations, site-level Building View discovery, structured deliverables, and a clear path from early insight to expert engagement.",
  },
  {
    title: "Efficiency becomes a continuous RA+ operating model",
    body: "The end state is a credible, governed efficiency layer in RA+ that links strategy, design, execution, and continuous improvement. Customers receive contextual recommendations, teams reuse a consistent knowledge base, and expert services are pulled in at the right moments for deeper analysis without turning early guidance into a contractual commitment.",
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

  // ===== 1. Title =====
  const slide1 = newSlide();
  slide1.addText("Efficiency Transformation", { x: 0.5, y: 1.8, w: 9, h: 0.8, fontSize: 18, color: BRAND_GREEN, align: "center" });
  slide1.addText("Efficiency Transformation", { x: 0.5, y: 2.5, w: 9, h: 0.8, fontSize: 40, bold: true, color: BRAND_GREEN, align: "center" });
  slide1.addText("with RA+", { x: 0.5, y: 3.2, w: 9, h: 0.8, fontSize: 40, bold: true, color: TEXT_WHITE, align: "center" });
  slide1.addText("Internal Only and Confidential", { x: 0.5, y: 4.5, w: 9, h: 0.5, fontSize: 14, color: TEXT_MUTED, align: "center" });

  // ===== 2. Executive Summary =====
  const slide2 = newSlide();
  slide2.addText("Executive Summary", { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 28, bold: true, color: TEXT_WHITE });
  executiveSummarySlides.forEach((item, i) => {
    const yPos = 1 + i * 1.45;
    slide2.addText(item.title, { x: 0.5, y: yPos, w: 9, h: 0.35, fontSize: 13, bold: true, color: BRAND_GREEN });
    slide2.addText(item.body, { x: 0.5, y: yPos + 0.42, w: 9, h: 0.95, fontSize: 9.5, color: i === 1 ? TEXT_WHITE : TEXT_MUTED, fit: "shrink" });
  });

  // ===== 3. Platform Shift =====
  const slidePS = newSlide();
  addTitle(slidePS, "PLATFORM SHIFT", "Efficiency Transformation with RA+", platformShift.intro);
  [platformShift.classic, platformShift.raPlus].forEach((col, i) => {
    const xPos = 0.5 + i * 4.6;
    slidePS.addShape("rect" as PptxGenJS.ShapeType, {
      x: xPos, y: 2, w: 4.4, h: 3.2,
      fill: { color: CARD_BG }, line: { color: i === 0 ? "EF4444" : BRAND_GREEN, width: 1 },
    });
    slidePS.addText(col.title, { x: xPos + 0.2, y: 2.15, w: 4, h: 0.35, fontSize: 13, bold: true, color: i === 0 ? "EF4444" : BRAND_GREEN });
    slidePS.addText(col.tagline, { x: xPos + 0.2, y: 2.5, w: 4, h: 0.25, fontSize: 9, italic: true, color: TEXT_MUTED });
    col.points.forEach((p, idx) => {
      slidePS.addText(`• ${p}`, { x: xPos + 0.2, y: 2.85 + idx * 0.4, w: 4, h: 0.38, fontSize: 8, color: TEXT_WHITE, fit: "shrink" });
    });
  });
  slidePS.addText(platformShift.thesis, { x: 0.5, y: 5.35, w: 9, h: 0.3, fontSize: 9, italic: true, color: BRAND_GREEN, align: "center", fit: "shrink" });

  // ===== 4. Personas =====
  const slidePE = newSlide();
  addTitle(slidePE, "PERSONAS", "Four Roles, One Design Sequence", personas.intro);
  personas.roles.forEach((r, i) => {
    const xPos = 0.5 + (i % 2) * 4.6;
    const yPos = 1.95 + Math.floor(i / 2) * 1.75;
    slidePE.addShape("rect" as PptxGenJS.ShapeType, {
      x: xPos, y: yPos, w: 4.4, h: 1.6,
      fill: { color: CARD_BG }, line: { color: i === 0 ? BRAND_GREEN : "555555", width: 1 },
    });
    slidePE.addText(r.name, { x: xPos + 0.15, y: yPos + 0.1, w: 3.2, h: 0.3, fontSize: 11, bold: true, color: TEXT_WHITE });
    slidePE.addText(r.rank, { x: xPos + 3.3, y: yPos + 0.1, w: 1, h: 0.25, fontSize: 7, bold: true, color: BRAND_GREEN, align: "right" });
    slidePE.addText(r.context, { x: xPos + 0.15, y: yPos + 0.4, w: 4.1, h: 0.22, fontSize: 7, italic: true, color: TEXT_MUTED });
    slidePE.addText(r.summary, { x: xPos + 0.15, y: yPos + 0.65, w: 4.1, h: 0.9, fontSize: 7, color: TEXT_MUTED, fit: "shrink" });
  });
  slidePE.addText(personas.designPrinciple, { x: 0.5, y: 5.5, w: 9, h: 0.3, fontSize: 7.5, italic: true, color: BRAND_GREEN, fit: "shrink" });

  // ===== 5. Jobs to Be Done =====
  const slideJ = newSlide();
  addTitle(slideJ, "JOBS TO BE DONE", "What Users Hire Energy Efficiency to Do", jobsToBeDone.intro);
  jobsToBeDone.jobs.slice(0, 11).forEach((j, i) => {
    const xPos = 0.3 + (i % 2) * 4.7;
    const yPos = 1.95 + Math.floor(i / 2) * 0.55;
    const typeColor = j.type === "Operational" ? "10B981" : "3B82F6";
    slideJ.addText(`${j.num}`, { x: xPos, y: yPos, w: 0.35, h: 0.45, fontSize: 11, bold: true, color: BRAND_GREEN });
    slideJ.addText(j.title, { x: xPos + 0.4, y: yPos, w: 3.2, h: 0.25, fontSize: 9, bold: true, color: TEXT_WHITE });
    slideJ.addText(j.type, { x: xPos + 3.6, y: yPos, w: 1, h: 0.22, fontSize: 6, bold: true, color: typeColor, align: "right" });
    slideJ.addText(j.description, { x: xPos + 0.4, y: yPos + 0.25, w: 4.1, h: 0.28, fontSize: 6, color: TEXT_MUTED, fit: "shrink" });
  });
  slideJ.addText(`Where ECMs fit. ${jobsToBeDone.ecmInsight}`, { x: 0.5, y: 5.4, w: 9, h: 0.4, fontSize: 7.5, italic: true, color: BRAND_GREEN, fit: "shrink" });

  // ===== 6. Why Now =====
  const slideWN = newSlide();
  addTitle(slideWN, "WHY NOW", "Pressure, Confusion, Structure, Value, Scale, Impact");
  whyNowColumns.forEach((col, i) => {
    const xPos = 0.3 + (i % 3) * 3.2;
    const yPos = 1.85 + Math.floor(i / 3) * 1.95;
    const accent = COL_HEX[col.color] || BRAND_GREEN;
    slideWN.addShape("rect" as PptxGenJS.ShapeType, {
      x: xPos, y: yPos, w: 3.1, h: 1.85,
      fill: { color: CARD_BG }, line: { color: accent, width: 1 },
    });
    slideWN.addText(col.title, { x: xPos + 0.15, y: yPos + 0.1, w: 2.85, h: 0.3, fontSize: 11, bold: true, color: accent });
    col.items.slice(0, 4).forEach((it, idx) => {
      slideWN.addText(`• ${it}`, { x: xPos + 0.15, y: yPos + 0.42 + idx * 0.34, w: 2.85, h: 0.32, fontSize: 6.5, color: TEXT_MUTED, fit: "shrink" });
    });
  });

  // ===== 7. Strategic Pillars =====
  const slide4 = newSlide();
  slide4.addText("Strategic Pillars", { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 28, bold: true, color: TEXT_WHITE });
  strategicPillars.forEach((pillar, i) => {
    const xPos = 0.5 + i * 3.2;
    slide4.addShape("rect" as PptxGenJS.ShapeType, {
      x: xPos, y: 1, w: 3, h: 4,
      fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
    });
    slide4.addText(pillar.title, { x: xPos + 0.2, y: 1.2, w: 2.6, h: 0.4, fontSize: 16, bold: true, color: BRAND_GREEN });
    slide4.addText(pillar.tagline, { x: xPos + 0.2, y: 1.7, w: 2.6, h: 0.3, fontSize: 10, color: TEXT_MUTED });
    slide4.addText(pillar.promise, { x: xPos + 0.2, y: 2.2, w: 2.6, h: 2.5, fontSize: 9, color: TEXT_WHITE, fit: "shrink" });
  });

  // ===== 8. Technology Landscape =====
  const slideTL = newSlide();
  addTitle(slideTL, "TECHNOLOGY LANDSCAPE", "Where We Are Today, Where IDM Goes Next", "Existing tools that anchor today's efficiency work, with IDM evolving into the RA+ data backbone.");
  existingTools.forEach((t, i) => {
    const xPos = 0.3 + (i % 2) * 4.7;
    const yPos = 1.95 + Math.floor(i / 2) * 1.55;
    slideTL.addShape("rect" as PptxGenJS.ShapeType, {
      x: xPos, y: yPos, w: 4.6, h: 1.45,
      fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
    });
    slideTL.addText(t.name, { x: xPos + 0.15, y: yPos + 0.1, w: 4.3, h: 0.3, fontSize: 12, bold: true, color: BRAND_GREEN });
    slideTL.addText(t.description, { x: xPos + 0.15, y: yPos + 0.4, w: 4.3, h: 0.55, fontSize: 8, color: TEXT_WHITE, fit: "shrink" });
    slideTL.addText(`Limitation: ${t.limitation}`, { x: xPos + 0.15, y: yPos + 1.0, w: 4.3, h: 0.4, fontSize: 7, italic: true, color: TEXT_MUTED, fit: "shrink" });
  });
  slideTL.addText(idmCapabilities.tagline, { x: 0.5, y: 5.3, w: 9, h: 0.4, fontSize: 8, italic: true, color: BRAND_GREEN, align: "center", fit: "shrink" });

  // ===== 9. Knowledge Engine =====
  const slideKE = newSlide();
  addTitle(slideKE, "KNOWLEDGE ENGINE", ecmIngestionEngine.prototype.title, ecmIngestionEngine.intro);
  ecmIngestionEngine.prototype.flow.forEach((s, i) => {
    const xPos = 0.5 + i * 2.25;
    slideKE.addShape("rect" as PptxGenJS.ShapeType, {
      x: xPos, y: 1.95, w: 2.05, h: 1.7,
      fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
    });
    slideKE.addText(s.step, { x: xPos + 0.15, y: 2.05, w: 1.8, h: 0.3, fontSize: 10, bold: true, color: BRAND_GREEN });
    slideKE.addText(s.name, { x: xPos + 0.15, y: 2.35, w: 1.8, h: 0.3, fontSize: 12, bold: true, color: TEXT_WHITE });
    slideKE.addText(s.description, { x: xPos + 0.15, y: 2.7, w: 1.8, h: 0.9, fontSize: 7, color: TEXT_MUTED, fit: "shrink" });
  });
  slideKE.addText(ecmIngestionEngine.prototype.accuracy, { x: 0.5, y: 3.85, w: 9, h: 0.3, fontSize: 9, italic: true, color: BRAND_GREEN, align: "center" });
  slideKE.addText(ecmIngestionEngine.monteCarlo.title, { x: 0.5, y: 4.3, w: 9, h: 0.3, fontSize: 11, bold: true, color: TEXT_WHITE });
  slideKE.addText(ecmIngestionEngine.monteCarlo.output, { x: 0.5, y: 4.6, w: 9, h: 0.5, fontSize: 8, color: TEXT_MUTED, fit: "shrink" });
  slideKE.addText(ecmIngestionEngine.monteCarlo.why, { x: 0.5, y: 5.15, w: 9, h: 0.5, fontSize: 8, italic: true, color: TEXT_WHITE, fit: "shrink" });

  // ===== 10. Capability Mapping (journey x ECM Library) =====
  const slideCM = newSlide();
  addTitle(slideCM, "CAPABILITY MAPPING", "ECM Library across the Efficiency Journey", "How the ECM knowledge base plugs into each stage of the customer journey.");
  const journeyStages = [
    { name: "Lead Intake", note: "Surface relevant opportunities by sector and geography" },
    { name: "Data Collection", note: "Match required inputs to available IDM, BMS, and utility feeds" },
    { name: "On-Site Audit", note: "Suggest measures to verify; capture findings into the library" },
    { name: "Analysis & Guidance", note: "Pre-compute savings ranges from historic distributions" },
    { name: "Recommendations", note: "Generate structured, defensible deliverables" },
    { name: "Implementation", note: "Hand off scope to delivery teams or partners" },
    { name: "Monitoring", note: "Close the loop with M&V to feed library updates" },
  ];
  journeyStages.forEach((s, i) => {
    const yPos = 1.85 + i * 0.5;
    slideCM.addShape("rect" as PptxGenJS.ShapeType, {
      x: 0.5, y: yPos, w: 9, h: 0.45,
      fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
    });
    slideCM.addText(`${i + 1}. ${s.name}`, { x: 0.7, y: yPos + 0.08, w: 2.5, h: 0.3, fontSize: 10, bold: true, color: BRAND_GREEN });
    slideCM.addText(s.note, { x: 3.3, y: yPos + 0.08, w: 6.0, h: 0.3, fontSize: 8, color: TEXT_WHITE, fit: "shrink" });
  });

  // ===== 11. Regional Journeys =====
  const slideRJ = newSlide();
  addTitle(slideRJ, "REGIONAL JOURNEYS", "No Single Path. Shared Backend.", regionalJourneys.intro);
  regionalJourneys.journeys.forEach((j, i) => {
    const xPos = 0.3 + (i % 2) * 4.7;
    const yPos = 1.95 + Math.floor(i / 2) * 1.7;
    slideRJ.addShape("rect" as PptxGenJS.ShapeType, {
      x: xPos, y: yPos, w: 4.6, h: 1.55,
      fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
    });
    slideRJ.addText(j.name, { x: xPos + 0.15, y: yPos + 0.1, w: 3.2, h: 0.3, fontSize: 12, bold: true, color: BRAND_GREEN });
    slideRJ.addText(j.revenue, { x: xPos + 3.35, y: yPos + 0.1, w: 1.2, h: 0.25, fontSize: 6.5, bold: true, color: TEXT_WHITE, align: "right" });
    slideRJ.addText(j.tagline, { x: xPos + 0.15, y: yPos + 0.4, w: 4.3, h: 0.25, fontSize: 8, italic: true, color: TEXT_MUTED });
    slideRJ.addText(`Selling point: ${j.sellingPoint}`, { x: xPos + 0.15, y: yPos + 0.65, w: 4.3, h: 0.4, fontSize: 7.5, color: TEXT_WHITE, fit: "shrink" });
    slideRJ.addText(`Convergence: ${regionalJourneys.convergence.point}`, { x: xPos + 0.15, y: yPos + 1.1, w: 4.3, h: 0.35, fontSize: 7, italic: true, color: BRAND_GREEN, fit: "shrink" });
  });
  slideRJ.addText(regionalJourneys.designPrinciple, { x: 0.5, y: 5.4, w: 9, h: 0.35, fontSize: 8, italic: true, color: BRAND_GREEN, align: "center", fit: "shrink" });

  // ===== 12. Strategic Context =====
  const slideSC = newSlide();
  addTitle(slideSC, "STRATEGIC CONTEXT", "Forces That Make Now the Window", efficiencyStrategicContext.intro);
  const sunset = efficiencyStrategicContext.raClassicSunset;
  slideSC.addShape("rect" as PptxGenJS.ShapeType, {
    x: 0.5, y: 2.0, w: 9, h: 1.4,
    fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
  });
  slideSC.addText(sunset.badge, { x: 0.7, y: 2.1, w: 2.5, h: 0.25, fontSize: 8, bold: true, color: BRAND_GREEN });
  slideSC.addText(sunset.title, { x: 0.7, y: 2.35, w: 6, h: 0.35, fontSize: 14, bold: true, color: TEXT_WHITE });
  slideSC.addText(sunset.timeframe, { x: 7, y: 2.35, w: 2.3, h: 0.3, fontSize: 10, bold: true, color: BRAND_GREEN, align: "right" });
  slideSC.addText(sunset.summary, { x: 0.7, y: 2.75, w: 8.6, h: 0.6, fontSize: 8, color: TEXT_MUTED, fit: "shrink" });
  // Reuse idm tagline
  slideSC.addText(idmCapabilities.positioning.principle, { x: 0.5, y: 3.7, w: 9, h: 1.2, fontSize: 10, color: TEXT_WHITE, fit: "shrink" });

  // ===== 13. What If Tomorrow =====
  const whatIfScenarios = [
    { title: "Show opportunities in minutes", description: "Walk into a first meeting and show site-relevant efficiency opportunities in RA+ within minutes." },
    { title: "Replace PowerPoint with platform", description: "Replace audit PowerPoint decks with structured, visual, interactive deliverables in the platform." },
    { title: "Centralize context once", description: "Centralize all client context once and reuse it across audits, quotes, and follow-ups." },
    { title: "One-click audit requests", description: "Let customers discover early efficiency insights, then request deeper expert audits with one click." },
    { title: "Continuous improvement", description: "Turn every delivered audit into data that improves future recommendations." },
  ];
  const slideWI = newSlide();
  addTitle(slideWI, "WHAT IF TOMORROW", "Aspirations the Platform Unlocks");
  whatIfScenarios.forEach((sc, i) => {
    const xPos = 0.3 + (i % 3) * 3.2;
    const yPos = 1.95 + Math.floor(i / 3) * 1.55;
    slideWI.addShape("rect" as PptxGenJS.ShapeType, {
      x: xPos, y: yPos, w: 3.1, h: 1.4,
      fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
    });
    slideWI.addText(sc.title, { x: xPos + 0.15, y: yPos + 0.1, w: 2.85, h: 0.5, fontSize: 10, bold: true, color: BRAND_GREEN, fit: "shrink" });
    slideWI.addText(sc.description, { x: xPos + 0.15, y: yPos + 0.6, w: 2.85, h: 0.75, fontSize: 8, color: TEXT_MUTED, fit: "shrink" });
  });

  // ===== 14. Boundaries & Operating Rules =====
  const slideB = newSlide();
  addTitle(slideB, "BOUNDARIES & OPERATING RULES", "Where We Stop, How We Operate", "The boundary list keeps scope honest. The operating rules keep customer-facing advice trustworthy.");
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
  slideB.addText("Out of Scope", { x: 0.5, y: 1.95, w: 4.4, h: 0.3, fontSize: 11, bold: true, color: ORANGE });
  outOfScope.forEach((item, i) => {
    const yPos = 2.3 + i * 1.05;
    slideB.addShape("rect" as PptxGenJS.ShapeType, { x: 0.5, y: yPos, w: 4.4, h: 0.95, fill: { color: CARD_BG }, line: { color: ORANGE, width: 1 } });
    slideB.addText(item.title, { x: 0.65, y: yPos + 0.1, w: 4.1, h: 0.3, fontSize: 10, bold: true, color: TEXT_WHITE });
    slideB.addText(item.detail, { x: 0.65, y: yPos + 0.4, w: 4.1, h: 0.5, fontSize: 7.5, color: TEXT_MUTED, fit: "shrink" });
  });
  slideB.addText("Guardrails", { x: 5.1, y: 1.95, w: 4.4, h: 0.3, fontSize: 11, bold: true, color: BRAND_GREEN });
  guardrails.forEach((item, i) => {
    const yPos = 2.3 + i * 0.78;
    slideB.addShape("rect" as PptxGenJS.ShapeType, { x: 5.1, y: yPos, w: 4.4, h: 0.7, fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 } });
    slideB.addText(item.title, { x: 5.25, y: yPos + 0.05, w: 4.1, h: 0.25, fontSize: 9, bold: true, color: BRAND_GREEN });
    slideB.addText(item.detail, { x: 5.25, y: yPos + 0.3, w: 4.1, h: 0.38, fontSize: 7, color: TEXT_MUTED, fit: "shrink" });
  });

  // ===== 15. Success Metrics (Sera KPIs) =====
  const slideSK = newSlide();
  addTitle(slideSK, "SUCCESS METRICS", "Sera Interface KPIs", seraKPIs.intro);
  seraKPIs.kpis.forEach((k, i) => {
    const xPos = 0.5 + (i % 3) * 3.05;
    const yPos = 1.95 + Math.floor(i / 3) * 1.5;
    slideSK.addShape("rect" as PptxGenJS.ShapeType, {
      x: xPos, y: yPos, w: 2.85, h: 1.35,
      fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
    });
    slideSK.addText(k.label, { x: xPos + 0.15, y: yPos + 0.1, w: 2.55, h: 0.4, fontSize: 10, bold: true, color: TEXT_WHITE, fit: "shrink" });
    slideSK.addText(k.description, { x: xPos + 0.15, y: yPos + 0.55, w: 2.55, h: 0.7, fontSize: 8, color: TEXT_MUTED, fit: "shrink" });
  });

  // ===== 16. Maturity Ladder =====
  const slideML = newSlide();
  addTitle(slideML, "MATURITY LADDER", "Meet Customers Where They Are", maturityLadder.intro);
  maturityLadder.stages.forEach((s, i) => {
    const xPos = 0.5 + i * 2.35;
    slideML.addShape("rect" as PptxGenJS.ShapeType, {
      x: xPos, y: 2.0, w: 2.15, h: 2.5,
      fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
    });
    slideML.addText(s.num, { x: xPos + 0.15, y: 2.1, w: 1.85, h: 0.5, fontSize: 24, bold: true, color: BRAND_GREEN });
    slideML.addText(s.label, { x: xPos + 0.15, y: 2.7, w: 1.85, h: 0.35, fontSize: 12, bold: true, color: TEXT_WHITE });
    slideML.addText(s.description, { x: xPos + 0.15, y: 3.1, w: 1.85, h: 1.3, fontSize: 8, color: TEXT_MUTED, fit: "shrink" });
  });
  slideML.addText(maturityLadder.note, { x: 0.5, y: 4.7, w: 9, h: 0.3, fontSize: 8, italic: true, color: TEXT_MUTED });

  // ===== 17. Phasing =====
  const phases = [
    { phase: "Phase 1", title: "IDM Evolution", tagline: "Urgent, no-regret", timing: "MVP Q4 2025 / Q1 2026", summary: "Re-platform IDM into RA+ to drive market differentiation through agentic capabilities, richer context, and SaaS-ready delivery." },
    { phase: "Phase 2", title: "ECM Library", tagline: "Cross-COE feeder", timing: "Sequenced with Pricing & Savings Accelerator", summary: "Connects efficiency, consultancy, and construction services into one knowledge backbone that powers Sera reasoning." },
    { phase: "Phase 3", title: "AkitaBox", tagline: "Build vs. integrate decision", timing: "Sequencing TBD", summary: "Confirmed no-regret strategic move. Open question on build inside RA+ vs. standalone module and differentiation vs. BDP / Foresight." },
  ];
  const slidePH = newSlide();
  addTitle(slidePH, "PHASING", "What Ships, in What Order, Why", "Capability depth grows along the axis: Phase 1 is in flight, Phase 2 is sequenced, Phase 3 is an open question.");
  phases.forEach((p, i) => {
    const xPos = 0.5 + i * 3.05;
    slidePH.addShape("rect" as PptxGenJS.ShapeType, {
      x: xPos, y: 1.95, w: 2.95, h: 3.4,
      fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
    });
    slidePH.addText(p.phase, { x: xPos + 0.15, y: 2.05, w: 2.65, h: 0.3, fontSize: 9, bold: true, color: BRAND_GREEN });
    slidePH.addText(p.title, { x: xPos + 0.15, y: 2.35, w: 2.65, h: 0.4, fontSize: 14, bold: true, color: TEXT_WHITE });
    slidePH.addText(p.tagline, { x: xPos + 0.15, y: 2.75, w: 2.65, h: 0.25, fontSize: 8, italic: true, color: TEXT_MUTED });
    slidePH.addText(p.timing, { x: xPos + 0.15, y: 3.0, w: 2.65, h: 0.25, fontSize: 7.5, color: BRAND_GREEN });
    slidePH.addText(p.summary, { x: xPos + 0.15, y: 3.3, w: 2.65, h: 1.95, fontSize: 8, color: TEXT_WHITE, fit: "shrink" });
  });

  // ===== 18. IDM 2.0 Vision =====
  const idmUseCases = [
    { title: "Program Management & M&V", body: "Follow up on actions, track KPIs, run causal analysis across factories, sites, and buildings. IPMVP-aligned savings validation built in." },
    { title: "Optimization Discovery", body: "Use interval data to surface staging opportunities, compressed air inefficiencies, and control re-architecture that consultants find manually today." },
    { title: "Cross-Functional Data Reuse", body: "Make interval data natively available for sourcing, budgeting, forecasting, and risk management. One source of truth, many use cases." },
  ];
  const idmProfiles = [
    { title: "Give Me", subtitle: "Full self-serve", body: "Internal expertise; runs analyses, configures KPIs, manages programs in RA+." },
    { title: "Help Me", subtitle: "Hybrid", body: "Platform autonomy plus targeted Schneider expertise for complex moments." },
    { title: "Do It For Me", subtitle: "Full service", body: "Schneider continues to handle data, KPIs, analysis, and program management." },
  ];
  const slideIV = newSlide();
  addTitle(slideIV, "IDM 2.0 VISION", "Embedded, Differentiated, Agentic", "Client-autonomy axis: from full self-serve to fully delivered. RA+ supports all three without forcing one path.");
  idmUseCases.forEach((u, i) => {
    const xPos = 0.5 + i * 3.05;
    slideIV.addShape("rect" as PptxGenJS.ShapeType, { x: xPos, y: 1.95, w: 2.95, h: 1.5, fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 } });
    slideIV.addText(u.title, { x: xPos + 0.15, y: 2.05, w: 2.65, h: 0.3, fontSize: 10, bold: true, color: BRAND_GREEN });
    slideIV.addText(u.body, { x: xPos + 0.15, y: 2.4, w: 2.65, h: 1.0, fontSize: 7.5, color: TEXT_MUTED, fit: "shrink" });
  });
  idmProfiles.forEach((p, i) => {
    const xPos = 0.5 + i * 3.05;
    slideIV.addShape("rect" as PptxGenJS.ShapeType, { x: xPos, y: 3.6, w: 2.95, h: 1.7, fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 } });
    slideIV.addText(p.title, { x: xPos + 0.15, y: 3.7, w: 2.65, h: 0.3, fontSize: 11, bold: true, color: TEXT_WHITE });
    slideIV.addText(p.subtitle, { x: xPos + 0.15, y: 4.0, w: 2.65, h: 0.25, fontSize: 8, italic: true, color: BRAND_GREEN });
    slideIV.addText(p.body, { x: xPos + 0.15, y: 4.25, w: 2.65, h: 1.0, fontSize: 7.5, color: TEXT_MUTED, fit: "shrink" });
  });

  // ===== 19. Appendix Divider =====
  addSectionDivider("APPENDIX", "Reference Materials");

  // ===== Appendix: VOC Evidence =====
  const slideV = newSlide();
  addTitle(slideV, "APPENDIX · VOC EVIDENCE", "What Customers Told Us", vocEvidence.intro);
  vocEvidence.customers.forEach((c, i) => {
    const xPos = 0.3 + i * 3.15;
    slideV.addShape("rect" as PptxGenJS.ShapeType, { x: xPos, y: 1.95, w: 3, h: 3.6, fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 } });
    slideV.addText(c.name, { x: xPos + 0.15, y: 2.05, w: 2.7, h: 0.3, fontSize: 12, bold: true, color: BRAND_GREEN });
    slideV.addText(c.contact, { x: xPos + 0.15, y: 2.35, w: 2.7, h: 0.3, fontSize: 6.5, color: TEXT_MUTED, fit: "shrink" });
    slideV.addText(c.context, { x: xPos + 0.15, y: 2.6, w: 2.7, h: 0.22, fontSize: 6.5, italic: true, color: TEXT_MUTED });
    c.findings.slice(0, 4).forEach((f, idx) => {
      slideV.addText(`• ${f}`, { x: xPos + 0.15, y: 2.85 + idx * 0.42, w: 2.7, h: 0.4, fontSize: 6, color: TEXT_WHITE, fit: "shrink" });
    });
    slideV.addText(`"${c.quote}"`, { x: xPos + 0.15, y: 4.6, w: 2.7, h: 0.85, fontSize: 6.5, italic: true, color: BRAND_GREEN, fit: "shrink" });
  });

  // ===== Appendix: SE Corporate Blueprint =====
  const slideSE = newSlide();
  addTitle(slideSE, "APPENDIX · RA CLASSIC IDM CLIENT", seCorporateBlueprint.title, seCorporateBlueprint.intro);
  seCorporateBlueprint.scale.forEach((s, i) => {
    const xPos = 0.5 + i * 2.25;
    slideSE.addShape("rect" as PptxGenJS.ShapeType, { x: xPos, y: 1.95, w: 2.05, h: 1.05, fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 } });
    slideSE.addText(s.value, { x: xPos + 0.1, y: 2.05, w: 1.85, h: 0.35, fontSize: 16, bold: true, color: BRAND_GREEN, align: "center" });
    slideSE.addText(s.label, { x: xPos + 0.1, y: 2.42, w: 1.85, h: 0.22, fontSize: 7, bold: true, color: TEXT_WHITE, align: "center" });
    slideSE.addText(s.detail, { x: xPos + 0.1, y: 2.65, w: 1.85, h: 0.32, fontSize: 5.5, color: TEXT_MUTED, align: "center", fit: "shrink" });
  });
  slideSE.addText(seCorporateBlueprint.trainingSignal, { x: 0.5, y: 3.15, w: 9, h: 0.4, fontSize: 8, color: TEXT_WHITE, fit: "shrink" });
  seCorporateBlueprint.phaseMap.forEach((p, i) => {
    const xPos = 0.5 + i * 3.05;
    slideSE.addShape("rect" as PptxGenJS.ShapeType, { x: xPos, y: 3.7, w: 2.95, h: 1.5, fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 } });
    slideSE.addText(p.phase, { x: xPos + 0.15, y: 3.8, w: 2.65, h: 0.3, fontSize: 10, bold: true, color: BRAND_GREEN });
    slideSE.addText(p.detail, { x: xPos + 0.15, y: 4.1, w: 2.65, h: 1.0, fontSize: 7, color: TEXT_MUTED, fit: "shrink" });
  });
  slideSE.addText(seCorporateBlueprint.conclusion, { x: 0.5, y: 5.35, w: 9, h: 0.3, fontSize: 8, italic: true, color: TEXT_WHITE, fit: "shrink" });

  // ===== Appendix: Pain Inventory =====
  const slidePI = newSlide();
  addTitle(slidePI, "APPENDIX · PAIN INVENTORY", "What the Efficiency Transformation Eliminates", painInventory.intro);
  painInventory.pains.forEach((p, i) => {
    const xPos = 0.3 + (i % 2) * 4.7;
    const yPos = 1.95 + Math.floor(i / 2) * 1.2;
    slidePI.addShape("rect" as PptxGenJS.ShapeType, { x: xPos, y: yPos, w: 4.6, h: 1.1, fill: { color: CARD_BG }, line: { color: "EF4444", width: 1 } });
    slidePI.addText(p.id, { x: xPos + 0.15, y: yPos + 0.1, w: 0.5, h: 0.25, fontSize: 9, bold: true, color: "EF4444" });
    slidePI.addText(p.severity, { x: xPos + 0.7, y: yPos + 0.1, w: 1.5, h: 0.22, fontSize: 6, bold: true, color: "EF4444" });
    slidePI.addText(p.title, { x: xPos + 0.15, y: yPos + 0.35, w: 4.3, h: 0.28, fontSize: 9, bold: true, color: TEXT_WHITE });
    slidePI.addText(p.detail, { x: xPos + 0.15, y: yPos + 0.62, w: 4.3, h: 0.45, fontSize: 6.5, color: TEXT_MUTED, fit: "shrink" });
  });

  // ===== Appendix: Strategy-to-Improvement Flywheel =====
  const slideFlywheel = newSlide();
  slideFlywheel.addText("Appendix · Strategy-to-Improvement Flywheel", { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 22, bold: true, color: TEXT_WHITE });
  slideFlywheel.addText(intelligenceFlywheel.subtitle, { x: 0.5, y: 0.95, w: 9, h: 0.35, fontSize: 11, color: TEXT_MUTED });
  intelligenceFlywheel.stages.forEach((stage, i) => {
    const xPos = 0.5 + (i % 3) * 3.05;
    const yPos = 1.65 + Math.floor(i / 3) * 1.55;
    slideFlywheel.addShape("rect" as PptxGenJS.ShapeType, { x: xPos, y: yPos, w: 2.75, h: 1.15, fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 } });
    slideFlywheel.addText(stage.name, { x: xPos + 0.15, y: yPos + 0.15, w: 2.45, h: 0.25, fontSize: 11, bold: true, color: BRAND_GREEN });
    slideFlywheel.addText(stage.description, { x: xPos + 0.15, y: yPos + 0.48, w: 2.45, h: 0.55, fontSize: 7, color: TEXT_MUTED, fit: "shrink" });
  });
  slideFlywheel.addText(intelligenceFlywheel.keyInsight, { x: 0.5, y: 5.05, w: 9, h: 0.35, fontSize: 8.5, color: TEXT_WHITE, fit: "shrink" });

  // ===== Final: Thank You =====
  const slideFinal = newSlide();
  slideFinal.addText("Thank You", { x: 0.5, y: 2, w: 9, h: 1, fontSize: 44, bold: true, color: TEXT_WHITE, align: "center" });
  slideFinal.addText("Efficiency Transformation with RA+", { x: 0.5, y: 3.2, w: 9, h: 0.5, fontSize: 18, color: BRAND_GREEN, align: "center" });
  slideFinal.addText("Internal Only and Confidential", { x: 0.5, y: 4, w: 9, h: 0.5, fontSize: 12, color: TEXT_MUTED, align: "center" });

  await pptx.writeFile({ fileName: "Efficiency-Transformation-with-RA-Plus.pptx" });
};
