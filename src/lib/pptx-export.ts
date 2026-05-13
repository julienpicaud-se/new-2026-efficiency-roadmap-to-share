import PptxGenJS from "pptxgenjs";
import {
  strategicPillars,
  objectives,
  roadmapBets,
  quarterlyRoadmap,
  capabilityMatrix,
  idmCapabilities,
  intelligenceFlywheel,
  platformShift,
  productScope,
  personas,
  jobsToBeDone,
  vocEvidence,
  seCorporateBlueprint,
  painInventory,
  maturityLadder,
  architectureDecision,
  seraKPIs,
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

const COL_COLORS: Record<string, string> = {
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

  // ===== Slide 1: Title =====
  const slide1 = pptx.addSlide({ masterName: "MASTER_SLIDE" });
  slide1.addText("Efficiency Transformation", {
    x: 0.5, y: 1.8, w: 9, h: 0.8,
    fontSize: 18, color: BRAND_GREEN, align: "center",
  });
  slide1.addText("Efficiency Transformation", {
    x: 0.5, y: 2.5, w: 9, h: 0.8,
    fontSize: 40, bold: true, color: BRAND_GREEN, align: "center",
  });
  slide1.addText("with RA+", {
    x: 0.5, y: 3.2, w: 9, h: 0.8,
    fontSize: 40, bold: true, color: TEXT_WHITE, align: "center",
  });
  slide1.addText("Internal Only and Confidential", {
    x: 0.5, y: 4.5, w: 9, h: 0.5,
    fontSize: 14, color: TEXT_MUTED, align: "center",
  });

  // ===== Slide 2: Executive Summary =====
  const slide2 = pptx.addSlide({ masterName: "MASTER_SLIDE" });
  slide2.addText("Executive Summary", {
    x: 0.5, y: 0.3, w: 9, h: 0.5,
    fontSize: 28, bold: true, color: TEXT_WHITE,
  });
  executiveSummarySlides.forEach((item, index) => {
    const yPos = 1 + index * 1.45;
    slide2.addText(item.title, {
      x: 0.5, y: yPos, w: 9, h: 0.35,
      fontSize: 13, bold: true, color: BRAND_GREEN,
    });
    slide2.addText(item.body, {
      x: 0.5, y: yPos + 0.42, w: 9, h: 0.8,
      fontSize: 9.5, color: index === 1 ? TEXT_WHITE : TEXT_MUTED,
      breakLine: false, fit: "shrink",
    });
  });

  // Helper: title + intro on a slide
  const addTitle = (slide: PptxGenJS.Slide, eyebrow: string, title: string, intro?: string) => {
    slide.addText(eyebrow, { x: 0.5, y: 0.3, w: 9, h: 0.3, fontSize: 11, bold: true, color: BRAND_GREEN });
    slide.addText(title, { x: 0.5, y: 0.6, w: 9, h: 0.5, fontSize: 24, bold: true, color: TEXT_WHITE });
    if (intro) {
      slide.addText(intro, { x: 0.5, y: 1.15, w: 9, h: 0.7, fontSize: 10, color: TEXT_MUTED, fit: "shrink" });
    }
  };

  // ===== Slide: Platform Shift =====
  const slidePS = pptx.addSlide({ masterName: "MASTER_SLIDE" });
  addTitle(slidePS, "PLATFORM SHIFT", "Energy Efficiency in RA+", platformShift.intro);
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

  // ===== Slide: Product Scope =====
  const slidePR = pptx.addSlide({ masterName: "MASTER_SLIDE" });
  addTitle(slidePR, "PRODUCT SCOPE", "Energy Efficiency vs Asset Planning", productScope.intro);
  productScope.products.forEach((p, i) => {
    const xPos = 0.5 + i * 4.6;
    slidePR.addShape("rect" as PptxGenJS.ShapeType, {
      x: xPos, y: 2, w: 4.4, h: 3.4,
      fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
    });
    slidePR.addText(p.name, { x: xPos + 0.2, y: 2.15, w: 4, h: 0.35, fontSize: 13, bold: true, color: BRAND_GREEN });
    slidePR.addText(p.tag, { x: xPos + 0.2, y: 2.5, w: 4, h: 0.25, fontSize: 8, italic: true, color: TEXT_MUTED });
    slidePR.addText(p.summary, { x: xPos + 0.2, y: 2.8, w: 4, h: 0.55, fontSize: 8, color: TEXT_WHITE, fit: "shrink" });
    p.capabilities.slice(0, 6).forEach((c, idx) => {
      slidePR.addText(`• ${c}`, { x: xPos + 0.2, y: 3.45 + idx * 0.32, w: 4, h: 0.3, fontSize: 7, color: TEXT_MUTED, fit: "shrink" });
    });
  });
  slidePR.addText(productScope.boundary, { x: 0.5, y: 5.5, w: 9, h: 0.3, fontSize: 8, italic: true, color: BRAND_GREEN, align: "center", fit: "shrink" });

  // ===== Slide: Personas =====
  const slidePE = pptx.addSlide({ masterName: "MASTER_SLIDE" });
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

  // ===== Slide: Jobs to Be Done =====
  const slideJ = pptx.addSlide({ masterName: "MASTER_SLIDE" });
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

  // ===== Slide: VOC Evidence =====
  const slideV = pptx.addSlide({ masterName: "MASTER_SLIDE" });
  addTitle(slideV, "VOC EVIDENCE", "What Customers Told Us", vocEvidence.intro);
  vocEvidence.customers.forEach((c, i) => {
    const xPos = 0.3 + i * 3.15;
    slideV.addShape("rect" as PptxGenJS.ShapeType, {
      x: xPos, y: 1.95, w: 3, h: 3.6,
      fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
    });
    slideV.addText(c.name, { x: xPos + 0.15, y: 2.05, w: 2.7, h: 0.3, fontSize: 12, bold: true, color: BRAND_GREEN });
    slideV.addText(c.contact, { x: xPos + 0.15, y: 2.35, w: 2.7, h: 0.3, fontSize: 6.5, color: TEXT_MUTED, fit: "shrink" });
    slideV.addText(c.context, { x: xPos + 0.15, y: 2.6, w: 2.7, h: 0.22, fontSize: 6.5, italic: true, color: TEXT_MUTED });
    c.findings.slice(0, 4).forEach((f, idx) => {
      slideV.addText(`• ${f}`, { x: xPos + 0.15, y: 2.85 + idx * 0.42, w: 2.7, h: 0.4, fontSize: 6, color: TEXT_WHITE, fit: "shrink" });
    });
    slideV.addText(`"${c.quote}"`, { x: xPos + 0.15, y: 4.6, w: 2.7, h: 0.85, fontSize: 6.5, italic: true, color: BRAND_GREEN, fit: "shrink" });
  });

  // ===== Slide: SE Corporate Blueprint =====
  const slideSE = pptx.addSlide({ masterName: "MASTER_SLIDE" });
  addTitle(slideSE, "MVP BLUEPRINT", seCorporateBlueprint.title, seCorporateBlueprint.intro);
  seCorporateBlueprint.scale.forEach((s, i) => {
    const xPos = 0.5 + i * 2.25;
    slideSE.addShape("rect" as PptxGenJS.ShapeType, {
      x: xPos, y: 1.95, w: 2.05, h: 1.05,
      fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
    });
    slideSE.addText(s.value, { x: xPos + 0.1, y: 2.05, w: 1.85, h: 0.35, fontSize: 16, bold: true, color: BRAND_GREEN, align: "center" });
    slideSE.addText(s.label, { x: xPos + 0.1, y: 2.42, w: 1.85, h: 0.22, fontSize: 7, bold: true, color: TEXT_WHITE, align: "center" });
    slideSE.addText(s.detail, { x: xPos + 0.1, y: 2.65, w: 1.85, h: 0.32, fontSize: 5.5, color: TEXT_MUTED, align: "center", fit: "shrink" });
  });
  slideSE.addText(seCorporateBlueprint.trainingSignal, { x: 0.5, y: 3.15, w: 9, h: 0.4, fontSize: 8, color: TEXT_WHITE, fit: "shrink" });
  seCorporateBlueprint.phaseMap.forEach((p, i) => {
    const xPos = 0.5 + i * 3.05;
    slideSE.addShape("rect" as PptxGenJS.ShapeType, {
      x: xPos, y: 3.7, w: 2.95, h: 1.5,
      fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
    });
    slideSE.addText(p.phase, { x: xPos + 0.15, y: 3.8, w: 2.65, h: 0.3, fontSize: 10, bold: true, color: BRAND_GREEN });
    slideSE.addText(p.detail, { x: xPos + 0.15, y: 4.1, w: 2.65, h: 1.0, fontSize: 7, color: TEXT_MUTED, fit: "shrink" });
  });
  slideSE.addText(seCorporateBlueprint.conclusion, { x: 0.5, y: 5.35, w: 9, h: 0.3, fontSize: 8, italic: true, color: TEXT_WHITE, fit: "shrink" });

  // ===== Slide: Pain Inventory =====
  const slidePI = pptx.addSlide({ masterName: "MASTER_SLIDE" });
  addTitle(slidePI, "RA CLASSIC PAIN INVENTORY", "What the Efficiency Transformation Eliminates", painInventory.intro);
  painInventory.pains.forEach((p, i) => {
    const xPos = 0.3 + (i % 2) * 4.7;
    const yPos = 1.95 + Math.floor(i / 2) * 1.2;
    slidePI.addShape("rect" as PptxGenJS.ShapeType, {
      x: xPos, y: yPos, w: 4.6, h: 1.1,
      fill: { color: CARD_BG }, line: { color: "EF4444", width: 1 },
    });
    slidePI.addText(p.id, { x: xPos + 0.15, y: yPos + 0.1, w: 0.5, h: 0.25, fontSize: 9, bold: true, color: "EF4444" });
    slidePI.addText(p.severity, { x: xPos + 0.7, y: yPos + 0.1, w: 1.5, h: 0.22, fontSize: 6, bold: true, color: "EF4444" });
    slidePI.addText(p.title, { x: xPos + 0.15, y: yPos + 0.35, w: 4.3, h: 0.28, fontSize: 9, bold: true, color: TEXT_WHITE });
    slidePI.addText(p.detail, { x: xPos + 0.15, y: yPos + 0.62, w: 4.3, h: 0.45, fontSize: 6.5, color: TEXT_MUTED, fit: "shrink" });
  });

  // ===== Slide 3: IDM Data Backbone =====
  const slide3 = pptx.addSlide({ masterName: "MASTER_SLIDE" });
  slide3.addText("IDM Data Backbone", {
    x: 0.5, y: 0.3, w: 9, h: 0.5,
    fontSize: 28, bold: true, color: TEXT_WHITE,
  });
  slide3.addText(idmCapabilities.tagline, {
    x: 0.5, y: 0.95, w: 9, h: 0.5,
    fontSize: 12, color: TEXT_MUTED,
  });
  idmCapabilities.stats.forEach((stat, index) => {
    const xPos = 0.5 + index * 2.35;
    slide3.addShape("rect" as PptxGenJS.ShapeType, {
      x: xPos, y: 1.65, w: 2.1, h: 1.05,
      fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
    });
    slide3.addText(stat.value, {
      x: xPos + 0.15, y: 1.82, w: 1.8, h: 0.3,
      fontSize: 18, bold: true, color: BRAND_GREEN, align: "center",
    });
    slide3.addText(stat.label, {
      x: xPos + 0.15, y: 2.18, w: 1.8, h: 0.22,
      fontSize: 8, bold: true, color: TEXT_WHITE, align: "center",
    });
    slide3.addText(stat.detail, {
      x: xPos + 0.15, y: 2.42, w: 1.8, h: 0.2,
      fontSize: 6.5, color: TEXT_MUTED, align: "center",
    });
  });
  slide3.addText(idmCapabilities.positioning.principle, {
    x: 0.5, y: 3.1, w: 9, h: 0.55,
    fontSize: 10, color: TEXT_WHITE, fit: "shrink",
  });
  idmCapabilities.categories.forEach((category, index) => {
    const xPos = 0.5 + index * 3.05;
    slide3.addText(category.name, {
      x: xPos, y: 4.0, w: 2.8, h: 0.25,
      fontSize: 10, bold: true, color: BRAND_GREEN,
    });
    category.capabilities.slice(0, 3).forEach((capability, capabilityIndex) => {
      slide3.addText(`• ${capability}`, {
        x: xPos, y: 4.35 + capabilityIndex * 0.28, w: 2.75, h: 0.25,
        fontSize: 6.5, color: TEXT_MUTED, fit: "shrink",
      });
    });
  });

  // ===== Slide 4: Strategic Pillars =====
  const slide4 = pptx.addSlide({ masterName: "MASTER_SLIDE" });
  slide4.addText("Strategic Pillars", {
    x: 0.5, y: 0.3, w: 9, h: 0.5,
    fontSize: 28, bold: true, color: TEXT_WHITE,
  });
  
  strategicPillars.forEach((pillar, index) => {
    const xPos = 0.5 + index * 3.2;
    slide4.addShape("rect" as PptxGenJS.ShapeType, {
      x: xPos, y: 1, w: 3, h: 4,
      fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
    });
    slide4.addText(pillar.title, {
      x: xPos + 0.2, y: 1.2, w: 2.6, h: 0.4,
      fontSize: 16, bold: true, color: BRAND_GREEN,
    });
    slide4.addText(pillar.tagline, {
      x: xPos + 0.2, y: 1.7, w: 2.6, h: 0.3,
      fontSize: 10, color: TEXT_MUTED,
    });
    slide4.addText(pillar.promise, {
      x: xPos + 0.2, y: 2.2, w: 2.6, h: 2.5,
      fontSize: 9, color: TEXT_WHITE,
    });
  });

  // ===== Slide 5: Objectives =====
  const slide5 = pptx.addSlide({ masterName: "MASTER_SLIDE" });
  slide5.addText("Strategic Objectives", {
    x: 0.5, y: 0.3, w: 9, h: 0.5,
    fontSize: 28, bold: true, color: TEXT_WHITE,
  });
  
  objectives.forEach((obj, index) => {
    const yPos = 1 + index * 1.4;
    slide5.addText(obj.id, {
      x: 0.5, y: yPos, w: 0.8, h: 0.4,
      fontSize: 14, bold: true, color: BRAND_GREEN,
    });
    slide5.addText(obj.title, {
      x: 1.4, y: yPos, w: 8, h: 0.4,
      fontSize: 14, color: TEXT_WHITE,
    });
    slide5.addText(obj.customerOutcome, {
      x: 1.4, y: yPos + 0.4, w: 8, h: 0.6,
      fontSize: 10, color: TEXT_MUTED,
    });
  });

  // ===== Slide 6: Roadmap Timeline =====
  const slide6 = pptx.addSlide({ masterName: "MASTER_SLIDE" });
  slide6.addText("Roadmap Timeline", {
    x: 0.5, y: 0.3, w: 9, h: 0.5,
    fontSize: 28, bold: true, color: TEXT_WHITE,
  });
  
  const timeframes = ["now", "next", "later"] as const;
  const timeframeLabels = { now: "Now (Q1-Q2 2026)", next: "Next (Q3-Q4 2026)", later: "Later (2027+)" };
  
  timeframes.forEach((tf, colIndex) => {
    const xPos = 0.5 + colIndex * 3.2;
    slide6.addText(timeframeLabels[tf], {
      x: xPos, y: 1, w: 3, h: 0.4,
      fontSize: 14, bold: true, color: BRAND_GREEN,
    });
    const items = roadmapBets[tf] || [];
    items.slice(0, 5).forEach((item: { title: string; outcome: string }, itemIndex: number) => {
      slide6.addText(`• ${item.title}`, {
        x: xPos, y: 1.5 + itemIndex * 0.8, w: 3, h: 0.4,
        fontSize: 10, bold: true, color: TEXT_WHITE,
      });
      slide6.addText(item.outcome, {
        x: xPos + 0.15, y: 1.9 + itemIndex * 0.8, w: 2.85, h: 0.35,
        fontSize: 8, color: TEXT_MUTED,
      });
    });
  });

  // ===== Slide 8: Capability Matrix =====
  const slide8 = pptx.addSlide({ masterName: "MASTER_SLIDE" });
  slide8.addText("Opportunity × Phase Matrix", {
    x: 0.5, y: 0.3, w: 9, h: 0.5,
    fontSize: 24, bold: true, color: TEXT_WHITE,
  });

  // Headers
  slide8.addText("#", { x: 0.3, y: 0.9, w: 0.3, h: 0.35, fontSize: 7, bold: true, color: TEXT_MUTED });
  slide8.addText("Opportunity", { x: 0.6, y: 0.9, w: 1.8, h: 0.35, fontSize: 7, bold: true, color: TEXT_MUTED });
  capabilityMatrix.phases.forEach((phase, i) => {
    slide8.addText(phase, {
      x: 2.5 + i * 1.5, y: 0.9, w: 1.4, h: 0.35,
      fontSize: 6, bold: true, color: BRAND_GREEN,
    });
  });

  capabilityMatrix.capabilities.slice(0, 9).forEach((cap, rowIdx) => {
    const yPos = 1.3 + rowIdx * 0.45;
    slide8.addText(String(cap.id), { x: 0.3, y: yPos, w: 0.3, h: 0.4, fontSize: 7, color: TEXT_MUTED });
    slide8.addText(cap.opportunity, { x: 0.6, y: yPos, w: 1.8, h: 0.4, fontSize: 6, color: TEXT_WHITE, valign: "top" });
    cap.statuses.forEach((s, i) => {
      const icon = s.status === "done" ? "✓" : s.status === "partial" ? "—" : "✗";
      const statusColor = s.status === "done" ? BRAND_GREEN : s.status === "partial" ? TEXT_MUTED : "EF4444";
      slide8.addText(`${icon} ${s.note}`, {
        x: 2.5 + i * 1.5, y: yPos, w: 1.4, h: 0.4,
        fontSize: 5.5, color: statusColor, valign: "top",
      });
    });
  });

  // ===== Slide 9: Capability Matrix (cont.) =====
  if (capabilityMatrix.capabilities.length > 9) {
    const slide9 = pptx.addSlide({ masterName: "MASTER_SLIDE" });
    slide9.addText("Opportunity × Phase Matrix (cont.)", {
      x: 0.5, y: 0.3, w: 9, h: 0.5,
      fontSize: 24, bold: true, color: TEXT_WHITE,
    });

    slide9.addText("#", { x: 0.3, y: 0.9, w: 0.3, h: 0.35, fontSize: 7, bold: true, color: TEXT_MUTED });
    slide9.addText("Opportunity", { x: 0.6, y: 0.9, w: 1.8, h: 0.35, fontSize: 7, bold: true, color: TEXT_MUTED });
    capabilityMatrix.phases.forEach((phase, i) => {
      slide9.addText(phase, {
        x: 2.5 + i * 1.5, y: 0.9, w: 1.4, h: 0.35,
        fontSize: 6, bold: true, color: BRAND_GREEN,
      });
    });

    capabilityMatrix.capabilities.slice(9).forEach((cap, rowIdx) => {
      const yPos = 1.3 + rowIdx * 0.5;
      slide9.addText(String(cap.id), { x: 0.3, y: yPos, w: 0.3, h: 0.45, fontSize: 7, color: TEXT_MUTED });
      slide9.addText(cap.opportunity, { x: 0.6, y: yPos, w: 1.8, h: 0.45, fontSize: 6, color: TEXT_WHITE, valign: "top" });
      cap.statuses.forEach((s, i) => {
        const icon = s.status === "done" ? "✓" : s.status === "partial" ? "—" : "✗";
        const statusColor = s.status === "done" ? BRAND_GREEN : s.status === "partial" ? TEXT_MUTED : "EF4444";
        slide9.addText(`${icon} ${s.note}`, {
          x: 2.5 + i * 1.5, y: yPos, w: 1.4, h: 0.45,
          fontSize: 5.5, color: statusColor, valign: "top",
        });
      });
    });
  }

  // ===== Slide 10-11: Quarterly Roadmap =====
  // Q1 & Q2
  const slideQ12 = pptx.addSlide({ masterName: "MASTER_SLIDE" });
  slideQ12.addText("2026 Delivery Roadmap", {
    x: 0.5, y: 0.3, w: 9, h: 0.5,
    fontSize: 28, bold: true, color: TEXT_WHITE,
  });

  quarterlyRoadmap.slice(0, 2).forEach((q, qIdx) => {
    const xPos = 0.5 + qIdx * 4.8;
    const color = COL_COLORS[q.color] || BRAND_GREEN;

    slideQ12.addText(q.quarter, {
      x: xPos, y: 1, w: 1.2, h: 0.3,
      fontSize: 10, bold: true, color: color,
    });
    slideQ12.addText(q.theme, {
      x: xPos, y: 1.35, w: 4.3, h: 0.35,
      fontSize: 12, bold: true, color: TEXT_WHITE,
    });

    slideQ12.addText("What we deliver:", {
      x: xPos, y: 1.9, w: 4.3, h: 0.3,
      fontSize: 9, bold: true, color: BRAND_GREEN,
    });
    q.deliverables.slice(0, 5).forEach((d, i) => {
      slideQ12.addText(`✓ ${d}`, {
        x: xPos, y: 2.2 + i * 0.3, w: 4.3, h: 0.28,
        fontSize: 7, color: TEXT_WHITE,
      });
    });

    slideQ12.addText("For efficiency teams:", {
      x: xPos, y: 3.9, w: 4.3, h: 0.3,
      fontSize: 9, bold: true, color: BRAND_GREEN,
    });
    q.teamImpact.slice(0, 4).forEach((impact, i) => {
      slideQ12.addText(`→ ${impact}`, {
        x: xPos, y: 4.2 + i * 0.3, w: 4.3, h: 0.28,
        fontSize: 7, color: TEXT_MUTED,
      });
    });
  });

  // Q3 & Q4
  const slideQ34 = pptx.addSlide({ masterName: "MASTER_SLIDE" });
  slideQ34.addText("2026 Delivery Roadmap (cont.)", {
    x: 0.5, y: 0.3, w: 9, h: 0.5,
    fontSize: 28, bold: true, color: TEXT_WHITE,
  });

  quarterlyRoadmap.slice(2, 4).forEach((q, qIdx) => {
    const xPos = 0.5 + qIdx * 4.8;
    const color = COL_COLORS[q.color] || BRAND_GREEN;

    slideQ34.addText(q.quarter, {
      x: xPos, y: 1, w: 1.2, h: 0.3,
      fontSize: 10, bold: true, color: color,
    });
    slideQ34.addText(q.theme, {
      x: xPos, y: 1.35, w: 4.3, h: 0.35,
      fontSize: 12, bold: true, color: TEXT_WHITE,
    });

    slideQ34.addText("What we deliver:", {
      x: xPos, y: 1.9, w: 4.3, h: 0.3,
      fontSize: 9, bold: true, color: BRAND_GREEN,
    });
    q.deliverables.slice(0, 6).forEach((d, i) => {
      slideQ34.addText(`✓ ${d}`, {
        x: xPos, y: 2.18 + i * 0.27, w: 4.3, h: 0.26,
        fontSize: 7, color: TEXT_WHITE,
      });
    });

    slideQ34.addText("For efficiency teams:", {
      x: xPos, y: 3.95, w: 4.3, h: 0.3,
      fontSize: 9, bold: true, color: BRAND_GREEN,
    });
    q.teamImpact.slice(0, 4).forEach((impact, i) => {
      slideQ34.addText(`→ ${impact}`, {
        x: xPos, y: 4.22 + i * 0.27, w: 4.3, h: 0.26,
        fontSize: 7, color: TEXT_MUTED,
      });
    });
  });

  // ===== Slide: Customer Maturity Ladder =====
  const slideML = pptx.addSlide({ masterName: "MASTER_SLIDE" });
  addTitle(slideML, "MATURITY LADDER", "Meet Customers Where They Are", maturityLadder.intro);
  maturityLadder.stages.forEach((s, i) => {
    const xPos = 0.5 + i * 2.35;
    slideML.addShape("rect" as PptxGenJS.ShapeType, {
      x: xPos, y: 2.0, w: 2.15, h: 2.5,
      fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
    });
    slideML.addText(s.num, {
      x: xPos + 0.15, y: 2.1, w: 1.85, h: 0.5,
      fontSize: 24, bold: true, color: BRAND_GREEN,
    });
    slideML.addText(s.label, {
      x: xPos + 0.15, y: 2.7, w: 1.85, h: 0.35,
      fontSize: 12, bold: true, color: TEXT_WHITE,
    });
    slideML.addText(s.description, {
      x: xPos + 0.15, y: 3.1, w: 1.85, h: 1.3,
      fontSize: 8, color: TEXT_MUTED, fit: "shrink",
    });
  });
  slideML.addText(maturityLadder.note, {
    x: 0.5, y: 4.7, w: 9, h: 0.3,
    fontSize: 8, italic: true, color: TEXT_MUTED,
  });

  // ===== Slide: Plan A vs Plan B =====
  const slideAD = pptx.addSlide({ masterName: "MASTER_SLIDE" });
  addTitle(slideAD, "OPEN ARCHITECTURAL DECISION", "Plan A vs Plan B", architectureDecision.intro);
  architectureDecision.options.forEach((opt, i) => {
    const xPos = 0.5 + i * 4.7;
    slideAD.addShape("rect" as PptxGenJS.ShapeType, {
      x: xPos, y: 1.95, w: 4.55, h: 3.2,
      fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
    });
    slideAD.addText(opt.label, {
      x: xPos + 0.15, y: 2.05, w: 4.3, h: 0.25,
      fontSize: 8, bold: true, color: BRAND_GREEN,
    });
    slideAD.addText(opt.title, {
      x: xPos + 0.15, y: 2.3, w: 4.3, h: 0.32,
      fontSize: 12, bold: true, color: TEXT_WHITE,
    });
    slideAD.addText(opt.summary, {
      x: xPos + 0.15, y: 2.65, w: 4.3, h: 0.5,
      fontSize: 7.5, color: TEXT_MUTED, fit: "shrink",
    });
    slideAD.addText("Pros", { x: xPos + 0.15, y: 3.2, w: 4.3, h: 0.22, fontSize: 8, bold: true, color: "10B981" });
    opt.pros.forEach((p, pi) => {
      slideAD.addText(`✓ ${p}`, { x: xPos + 0.15, y: 3.42 + pi * 0.22, w: 4.3, h: 0.2, fontSize: 7, color: TEXT_WHITE });
    });
    const consY = 3.42 + opt.pros.length * 0.22 + 0.1;
    slideAD.addText("Trade-offs", { x: xPos + 0.15, y: consY, w: 4.3, h: 0.22, fontSize: 8, bold: true, color: "EF4444" });
    opt.cons.forEach((c, ci) => {
      slideAD.addText(`✕ ${c}`, { x: xPos + 0.15, y: consY + 0.22 + ci * 0.22, w: 4.3, h: 0.2, fontSize: 7, color: TEXT_MUTED });
    });
  });
  slideAD.addText(`Status: ${architectureDecision.status}`, {
    x: 0.5, y: 5.25, w: 9, h: 0.25, fontSize: 8, italic: true, color: TEXT_MUTED,
  });

  // ===== Slide: Sera KPIs =====
  const slideSK = pptx.addSlide({ masterName: "MASTER_SLIDE" });
  addTitle(slideSK, "SUCCESS SIGNALS", "Sera Interface KPIs", seraKPIs.intro);
  seraKPIs.kpis.forEach((k, i) => {
    const xPos = 0.5 + (i % 3) * 3.05;
    const yPos = 1.95 + Math.floor(i / 3) * 1.5;
    slideSK.addShape("rect" as PptxGenJS.ShapeType, {
      x: xPos, y: yPos, w: 2.85, h: 1.35,
      fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
    });
    slideSK.addText(k.label, {
      x: xPos + 0.15, y: yPos + 0.1, w: 2.55, h: 0.4,
      fontSize: 10, bold: true, color: TEXT_WHITE, fit: "shrink",
    });
    slideSK.addText(k.description, {
      x: xPos + 0.15, y: yPos + 0.55, w: 2.55, h: 0.7,
      fontSize: 8, color: TEXT_MUTED, fit: "shrink",
    });
  });

  // ===== Appendix Slide: Strategy-to-Improvement Flywheel =====
  const slideFlywheel = pptx.addSlide({ masterName: "MASTER_SLIDE" });
  slideFlywheel.addText("Appendix: Strategy-to-Improvement Flywheel", {
    x: 0.5, y: 0.3, w: 9, h: 0.5,
    fontSize: 24, bold: true, color: TEXT_WHITE,
  });
  slideFlywheel.addText(intelligenceFlywheel.subtitle, {
    x: 0.5, y: 0.95, w: 9, h: 0.35,
    fontSize: 11, color: TEXT_MUTED,
  });
  intelligenceFlywheel.stages.forEach((stage, index) => {
    const xPos = 0.5 + (index % 3) * 3.05;
    const yPos = 1.65 + Math.floor(index / 3) * 1.55;
    slideFlywheel.addShape("rect" as PptxGenJS.ShapeType, {
      x: xPos, y: yPos, w: 2.75, h: 1.15,
      fill: { color: CARD_BG }, line: { color: BRAND_GREEN, width: 1 },
    });
    slideFlywheel.addText(stage.name, {
      x: xPos + 0.15, y: yPos + 0.15, w: 2.45, h: 0.25,
      fontSize: 11, bold: true, color: BRAND_GREEN,
    });
    slideFlywheel.addText(stage.description, {
      x: xPos + 0.15, y: yPos + 0.48, w: 2.45, h: 0.55,
      fontSize: 7, color: TEXT_MUTED, fit: "shrink",
    });
  });
  slideFlywheel.addText(intelligenceFlywheel.keyInsight, {
    x: 0.5, y: 5.05, w: 9, h: 0.35,
    fontSize: 8.5, color: TEXT_WHITE, fit: "shrink",
  });

  // ===== Final Slide: Thank You =====
  const slideFinal = pptx.addSlide({ masterName: "MASTER_SLIDE" });
  slideFinal.addText("Thank You", {
    x: 0.5, y: 2, w: 9, h: 1,
    fontSize: 44, bold: true, color: TEXT_WHITE, align: "center",
  });
  slideFinal.addText("Efficiency Transformation with RA+", {
    x: 0.5, y: 3.2, w: 9, h: 0.5,
    fontSize: 18, color: BRAND_GREEN, align: "center",
  });
  slideFinal.addText("Internal Only and Confidential", {
    x: 0.5, y: 4, w: 9, h: 0.5,
    fontSize: 12, color: TEXT_MUTED, align: "center",
  });

  await pptx.writeFile({ fileName: "Efficiency-Transformation-with-RA-Plus.pptx" });
};
