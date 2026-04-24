import PptxGenJS from "pptxgenjs";
import { strategicPillars, objectives, roadmapBets, strategicContext, whyNowColumns, phasedRoadmap, quarterlyRoadmap, capabilityMatrix } from "@/data/playbook-data";

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

  // ===== Slide 2: North Star =====
  const slide2 = pptx.addSlide({ masterName: "MASTER_SLIDE" });
  slide2.addText("Strategic Context", {
    x: 0.5, y: 0.3, w: 9, h: 0.5,
    fontSize: 28, bold: true, color: TEXT_WHITE,
  });
  slide2.addText(strategicContext.summary, {
    x: 0.5, y: 1.2, w: 9, h: 1.2,
    fontSize: 12, color: TEXT_MUTED,
  });
  slide2.addText("Our North Star", {
    x: 0.5, y: 2.8, w: 9, h: 0.4,
    fontSize: 16, bold: true, color: BRAND_GREEN,
  });
  slide2.addText(strategicContext.northStar, {
    x: 0.5, y: 3.3, w: 9, h: 1.5,
    fontSize: 14, color: TEXT_WHITE, align: "center", valign: "middle",
  });

  // ===== Slide 3: Why Now =====
  const slide3 = pptx.addSlide({ masterName: "MASTER_SLIDE" });
  slide3.addText("Why Now", {
    x: 0.5, y: 0.3, w: 9, h: 0.5,
    fontSize: 28, bold: true, color: TEXT_WHITE,
  });
  
  whyNowColumns.forEach((col, colIdx) => {
    const xPos = 0.3 + colIdx * 1.6;
    const color = COL_COLORS[col.color] || BRAND_GREEN;
    
    slide3.addText(col.title.toUpperCase(), {
      x: xPos, y: 1, w: 1.5, h: 0.35,
      fontSize: 9, bold: true, color: color,
    });
    
    col.items.forEach((item, i) => {
      slide3.addText(`• ${item}`, {
        x: xPos, y: 1.4 + i * 0.75, w: 1.5, h: 0.7,
        fontSize: 7, color: TEXT_WHITE, valign: "top",
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

  // ===== Slide 7: Phased Roadmap =====
  const slide7 = pptx.addSlide({ masterName: "MASTER_SLIDE" });
  slide7.addText("Phased Roadmap", {
    x: 0.5, y: 0.3, w: 9, h: 0.5,
    fontSize: 28, bold: true, color: TEXT_WHITE,
  });

  phasedRoadmap.forEach((phase, phaseIdx) => {
    const color = COL_COLORS[phase.color] || BRAND_GREEN;
    const xPos = 0.3 + phaseIdx * 1.9;
    
    slide7.addText(phase.phase, {
      x: xPos, y: 1, w: 1.8, h: 0.35,
      fontSize: 8, bold: true, color: color,
    });
    
    phase.items.forEach((item, i) => {
      const yPos = 1.5 + i * 1.3;
      slide7.addText(item.title, {
        x: xPos, y: yPos, w: 1.8, h: 0.3,
        fontSize: 8, bold: true, color: TEXT_WHITE,
      });
      item.details.slice(0, 3).forEach((detail, j) => {
        slide7.addText(`• ${detail}`, {
          x: xPos, y: yPos + 0.3 + j * 0.3, w: 1.8, h: 0.28,
          fontSize: 6, color: TEXT_MUTED, valign: "top",
        });
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
