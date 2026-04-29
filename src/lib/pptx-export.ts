import PptxGenJS from "pptxgenjs";
import {
  strategicPillars,
  objectives,
  roadmapBets,
  quarterlyRoadmap,
  capabilityMatrix,
  idmCapabilities,
  intelligenceFlywheel,
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
        x: xPos, y: 2.2 + i * 0.3, w: 4.3, h: 0.28,
        fontSize: 7, color: TEXT_WHITE,
      });
    });

    slideQ34.addText("For efficiency teams:", {
      x: xPos, y: 4.2, w: 4.3, h: 0.3,
      fontSize: 9, bold: true, color: BRAND_GREEN,
    });
    q.teamImpact.slice(0, 4).forEach((impact, i) => {
      slideQ34.addText(`→ ${impact}`, {
        x: xPos, y: 4.5 + i * 0.3, w: 4.3, h: 0.28,
        fontSize: 7, color: TEXT_MUTED,
      });
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
