import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Download, ChevronRight, Calendar, Target, Zap, ArrowRight, TrendingUp, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";
import PptxGenJS from "pptxgenjs";

const BRAND_GREEN = "3DCD58";
const DARK_BG = "1A1A1A";
const TEXT_WHITE = "FFFFFF";
const TEXT_MUTED = "A1A1AA";

// Quarterly roadmap data
const quarterlyRoadmap = {
  Q1: {
    title: "Q1 2026",
    initiatives: [
      "Initial emissions measurement",
      "Emissions carbon strategy and scenarios",
      "Supply chain emissions foundation",
      "Platform foundations: shared data model, analytics, campaign management",
    ],
    value: [
      "Faster time to first inventory and trusted starting point",
      "Reduced manual collection and reconciliation effort",
    ],
  },
  Q2: {
    title: "Q2 2026",
    initiatives: [
      "Carbon measurement hardening (quality, coverage, audit readiness)",
      "Carbon strategy and scenarios hardening (analytics-driven approvals, repeatable decision workflows)",
      "Initial reporting and compliance",
      "Initial climate risk",
    ],
    value: [
      "Lower rework and faster decision cycles",
      "Higher confidence for finance and executive review",
    ],
  },
  Q3: {
    title: "Q3 2026",
    initiatives: [
      "Expanded carbon measurement to sustainability performance (broader activity data, reuse across domains)",
      "Expanded carbon strategy and scenarios (stronger what-if comparison, levers, analytics-supported approvals)",
      "Reporting and compliance expansion",
      "Supply chain sustainability beyond emissions",
      "Climate risk integrated with Compliance & Reporting",
    ],
    value: [
      "Faster, more confident decisions tied to operational and financial outcomes",
      "Measurable savings identified and prioritized through energy conservation measures and supplier actions",
      "Lower compliance and assurance risk, through integrated reporting and climate risk grounded in the same governed data and traceability",
    ],
  },
  Q4: {
    title: "Q4 2026",
    initiatives: [
      "Initial emissions measurement",
      "Emissions carbon strategy and scenarios",
      "Expanded carbon measurement to sustainability performance (broader activity data, reuse across domains)",
      "Climate risk integrated with Compliance & Reporting",
    ],
    value: [
      "Measurable and attributable cost savings, linking energy insights to ECM execution, realized savings, and faster budget decisions",
      "Sustained operational efficiency and reduced risk, through automated, traceable energy and sustainability workflows that stand up to finance and audit scrutiny",
      "A scalable, enterprise-ready platform, enabling rapid rollout across sites and expansion into broader sustainability and energy capabilities",
      "Lower compliance and assurance risk, through integrated reporting and climate risk grounded in the same governed data and traceability",
    ],
  },
};

// Semester roadmap data
const semesterRoadmap = {
  H1: {
    title: "H1 2026 – Core Suite",
    initiatives: [
      "Emissions measurement and strategy with scenarios",
      "Supply chain emissions",
      "Initial ESG reporting and climate risk",
      "Single AI-native platform with shared data and governance",
    ],
    outcomes: [
      "Faster time to value",
      "Lower setup and reporting friction",
      "Trusted foundations for audit and executive review",
    ],
  },
  H2: {
    title: "H2 2026 – Extended Suite",
    initiatives: [
      "Expanded ESG reporting and compliance",
      "Supply chain sustainability beyond emissions",
      "Climate risk integrated with Compliance & Reporting",
      "Energy management as an operational lever",
    ],
    outcomes: [
      "Faster, more confident decisions",
      "Measurable savings through energy and supply chain levers",
      "Reduced audit and regulatory risk",
      "Scalable path to full sustainability management",
    ],
  },
};

// Simple quarterly overview (12-Month Roadmap Overview)
const simpleQuarterlyOverview = [
  {
    quarter: "Q1 2026",
    summary:
      "Shared platform foundations with unified data, analytics, and data quality, initial carbon Scope 1–3 measurement and decarbonization strategy, and supply chain Scope 3 readiness.",
  },
  {
    quarter: "Q2 2026",
    summary:
      "Turn sustainability data into decisions through advanced carbon accounting, smart insights, climate risk, and analytics-driven workflows.",
  },
  {
    quarter: "Q3 2026",
    summary:
      "Scale sustainability with efficiency and control through compliance, supplier actions, hybrid data collection, and advanced analytics.",
  },
  {
    quarter: "Q4 2026",
    summary:
      "Deliver energy-driven savings at scale by linking interval insights to ECM execution, realized savings, and faster site and corporate budget decisions.",
  },
];

// 12-month roadmap as value drivers (by quarter)
const valueDriversRoadmap = {
  Q1: {
    title: "Q1 2026",
    theme: "Establish a trusted platform foundation",
    valueDrivers: [
      "Platform foundations with unified data, analytics, and built-in data quality, including data ingestion, transformation, and lineage, enabling multiple products to run on the same experience",
      "Initial smart insights and recommendations to move users from static reporting to AI-enabled decision making",
      "Supply chain foundations to support supplier engagement, education, and scalable Scope 3 readiness",
      "Initial emissions Scope 1, 2, and 3 measurement and decarbonization strategy delivered on a single platform, designed for reuse beyond carbon",
    ],
    whyItMatters: "Creates a trusted baseline quickly and establishes shared platform engines to serve multiple products with a consistent experience.",
  },
  Q2: {
    title: "Q2 2026",
    theme: "Turn sustainability data into decisions",
    valueDrivers: [
      "Platform intelligence expanded with advanced user management and strong data handling and governance, including data gap filling and extrapolation",
      "Advanced smart insights and recommendations enhanced to guide prioritization, next-best actions, and executive decisions",
      "Smart invoice processing to automate high-effort data collection",
      "Advanced carbon measurement and strategy, including robust carbon accounting and decarbonization methods",
      "Broader sustainability performance beyond carbon enabled through extended metrics reuse (waste, water, workforce)",
      "Climate risk introduced with physical risk assessments",
      "ECM library launched to directly connect sustainability data to operational and cost-reduction actions",
    ],
    whyItMatters: "Transforms sustainability from a reporting exercise into a decision engine, accelerating decarbonization and cost savings while reducing operational friction and increasing confidence.",
  },
  Q3: {
    title: "Q3 2026",
    theme: "Scale sustainability with efficiency and control",
    valueDrivers: [
      "Platform governance strengthened with smart validation workflows",
      "Compliance and reporting introduced on the same data and analytics foundation, avoiding parallel systems",
      "Supplier actions scaled across the value chain to deliver decarbonization at scale",
      "Industry data marketplace integrations (e.g., SBTi, CDP, FactSet, EcoVadis) to enrich analysis and benchmarking",
      "Advanced analytics with dynamic entity modeling to support multi-dimensional reporting, with richer visuals and charts",
      "Hybrid data collection at scale across domains (manual input, invoices, surveys, CSV, integrations, and interval data readiness), orchestrated through campaigns",
      "Campaign management as the operating mechanism to assign ownership, manage validation workflows, track progress, and scale execution across regions, business units, and suppliers",
      "Knowledge hub launched to embed guidance, best practices, and AI-assisted explanations directly into workflows, ensuring consistent execution at scale",
    ],
    whyItMatters: "Lowers the cost and risk of scaling sustainability while embedding expertise directly into the platform for consistent, repeatable execution.",
  },
  Q4: {
    title: "Q4 2026",
    theme: "Scale value creation through energy intelligence",
    valueDrivers: [
      "Energy management introduced with interval data management and connection with BMS on the shared platform foundation",
      "Savings attribution and value tracking strengthened to link interval-driven energy insights to ECM execution, realized savings, and budget decisions at site and corporate levels",
      "Automation of recurring energy workflows (ingestion, validation, monitoring, alerts) to reduce ongoing operational effort",
      "Analytics and benchmarking expanded across sustainability and energy domains to support site- and corporate-level decisions and prioritization",
      "Scaled rollout toolkit delivered to accelerate onboarding of new sites and business units with repeatable configuration and minimal rework",
    ],
    whyItMatters: "Proves sustainability as a repeatable value engine by translating energy management into measurable savings, faster budget decisions, and reduced risk, while scaling delivery across the enterprise.",
  },
};

// 12-month roadmap as value drivers (board view)
const boardViewRoadmap = [
  {
    quarter: "Q1 2026",
    theme: "Foundation",
    highlights: [
      "Shared platform foundations with unified data, analytics, data quality, ingestion, and lineage across products",
      "Initial emissions Scope 1–3 measurement and decarbonization strategy",
      "Supplier engagement foundations and initial AI-driven insights",
    ],
    outcome: "Trusted baseline and common platform experience across products",
  },
  {
    quarter: "Q2 2026",
    theme: "Decisions",
    highlights: [
      "Advanced emissions accounting and decarbonization workflows",
      "Smart insights, recommendations, invoice processing, and ECM library",
      "Climate risk and broader sustainability metrics reuse (waste, water, workforce)",
      "Strong data handling with gap filling and extrapolation",
    ],
    outcome: "Sustainability becomes decision-grade, enabling faster decarbonization and savings",
  },
  {
    quarter: "Q3 2026",
    theme: "Scale",
    highlights: [
      "Compliance and reporting on the same data foundation",
      "Supplier actions and efficiency scaled across the value chain",
      "Hybrid data collection and campaign management at enterprise scale",
      "Advanced analytics, benchmarking, and embedded knowledge hub",
    ],
    outcome: "Lower cost and risk to scale sustainability with consistent execution",
  },
  {
    quarter: "Q4 2026",
    theme: "Energy Value",
    highlights: [
      "Energy management with interval data and BMS connectivity",
      "Automated energy workflows and savings attribution to budgets and ECMs",
      "Site- and corporate-level analytics and benchmarking",
      "Scaled rollout toolkit for enterprise deployment",
    ],
    outcome: "Proven, repeatable value delivery through measurable savings and reduced risk",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const DetailedRoadmap = () => {
  const [isExporting, setIsExporting] = useState(false);

  const exportRoadmapToPptx = async () => {
    setIsExporting(true);
    try {
      const pptx = new PptxGenJS();
      pptx.author = "Lovable App";
      pptx.title = "12-Month Detailed Roadmap";
      pptx.subject = "Strategic Roadmap Overview";
      pptx.company = "Lovable App";

      pptx.defineSlideMaster({
        title: "MASTER_SLIDE",
        background: { color: DARK_BG },
      });

      // Define TOC sections for tracking
      const tocSections = [
        { title: "Title", slide: 1 },
        { title: "Table of Contents", slide: 2 },
        { title: "12-Month Overview", slide: 3 },
        { title: "Q1 2026 Details", slide: 4 },
        { title: "Q2 2026 Details", slide: 5 },
        { title: "Q3 2026 Details", slide: 6 },
        { title: "Q4 2026 Details", slide: 7 },
        { title: "Semester Overview", slide: 8 },
        { title: "Board View", slide: 9 },
        { title: "Q1 Value Drivers", slide: 10 },
        { title: "Q2 Value Drivers", slide: 11 },
        { title: "Q3 Value Drivers", slide: 12 },
        { title: "Q4 Value Drivers", slide: 13 },
        { title: "Executive Takeaway", slide: 14 },
      ];

      const totalSlides = tocSections.length;

      // Helper function to add slide number
      const addSlideNumber = (slide: PptxGenJS.Slide, slideNum: number) => {
        slide.addText(`${slideNum} / ${totalSlides}`, {
          x: 9,
          y: 5.2,
          w: 0.8,
          h: 0.3,
          fontSize: 8,
          color: TEXT_MUTED,
          align: "right",
        });
      };

      // Slide 1: Title
      const slide1 = pptx.addSlide({ masterName: "MASTER_SLIDE" });
      slide1.addText("12-Month Detailed Roadmap", {
        x: 0.5,
        y: 2,
        w: 9,
        h: 1,
        fontSize: 44,
        bold: true,
        color: TEXT_WHITE,
        align: "center",
      });
      slide1.addText("2026 Strategic Overview", {
        x: 0.5,
        y: 3,
        w: 9,
        h: 0.8,
        fontSize: 28,
        color: BRAND_GREEN,
        align: "center",
      });
      addSlideNumber(slide1, 1);

      // Slide 2: Table of Contents
      const slideToc = pptx.addSlide({ masterName: "MASTER_SLIDE" });
      slideToc.addText("Table of Contents", {
        x: 0.5,
        y: 0.3,
        w: 9,
        h: 0.6,
        fontSize: 28,
        bold: true,
        color: TEXT_WHITE,
      });

      // Group TOC items into two columns
      const leftColumnItems = tocSections.filter((_, i) => i < 7);
      const rightColumnItems = tocSections.filter((_, i) => i >= 7);

      leftColumnItems.forEach((section, idx) => {
        slideToc.addText(`${section.slide}.  ${section.title}`, {
          x: 0.5,
          y: 1.1 + idx * 0.5,
          w: 4.5,
          h: 0.4,
          fontSize: 12,
          color: idx === 0 ? BRAND_GREEN : TEXT_WHITE,
        });
      });

      rightColumnItems.forEach((section, idx) => {
        slideToc.addText(`${section.slide}.  ${section.title}`, {
          x: 5.2,
          y: 1.1 + idx * 0.5,
          w: 4.5,
          h: 0.4,
          fontSize: 12,
          color: TEXT_WHITE,
        });
      });

      // Add decorative line
      slideToc.addShape("rect" as PptxGenJS.ShapeType, {
        x: 0.5,
        y: 4.8,
        w: 9,
        h: 0.02,
        fill: { color: BRAND_GREEN },
      });
      addSlideNumber(slideToc, 2);

      // Slide 3: Simple Overview
      const slide3 = pptx.addSlide({ masterName: "MASTER_SLIDE" });
      slide3.addText("12-Month Roadmap Overview", {
        x: 0.5,
        y: 0.3,
        w: 9,
        h: 0.5,
        fontSize: 28,
        bold: true,
        color: TEXT_WHITE,
      });

      simpleQuarterlyOverview.forEach((q, index) => {
        const xPos = 0.3 + index * 2.4;
        slide3.addShape("rect" as PptxGenJS.ShapeType, {
          x: xPos,
          y: 1,
          w: 2.3,
          h: 3.8,
          fill: { color: "262626" },
          line: { color: BRAND_GREEN, width: 1 },
        });
        slide3.addText(q.quarter, {
          x: xPos + 0.1,
          y: 1.1,
          w: 2.1,
          h: 0.4,
          fontSize: 14,
          bold: true,
          color: BRAND_GREEN,
        });
        slide3.addText(q.summary, {
          x: xPos + 0.1,
          y: 1.6,
          w: 2.1,
          h: 3,
          fontSize: 9,
          color: TEXT_WHITE,
        });
      });
      addSlideNumber(slide3, 3);

      // Slides 4-7: Quarterly Details
      let slideNum = 4;
      Object.entries(quarterlyRoadmap).forEach(([key, data]) => {
        const slide = pptx.addSlide({ masterName: "MASTER_SLIDE" });
        slide.addText(data.title, {
          x: 0.5,
          y: 0.3,
          w: 9,
          h: 0.5,
          fontSize: 28,
          bold: true,
          color: BRAND_GREEN,
        });

        slide.addText("Key Initiatives", {
          x: 0.5,
          y: 1,
          w: 4.5,
          h: 0.4,
          fontSize: 14,
          bold: true,
          color: TEXT_WHITE,
        });

        data.initiatives.forEach((initiative, idx) => {
          slide.addText(`• ${initiative}`, {
            x: 0.5,
            y: 1.5 + idx * 0.6,
            w: 4.5,
            h: 0.5,
            fontSize: 10,
            color: TEXT_MUTED,
          });
        });

        slide.addText("Value Delivered", {
          x: 5.3,
          y: 1,
          w: 4.5,
          h: 0.4,
          fontSize: 14,
          bold: true,
          color: BRAND_GREEN,
        });

        data.value.forEach((val, idx) => {
          slide.addText(`✓ ${val}`, {
            x: 5.3,
            y: 1.5 + idx * 0.6,
            w: 4.5,
            h: 0.5,
            fontSize: 10,
            color: TEXT_WHITE,
          });
        });
        addSlideNumber(slide, slideNum);
        slideNum++;
      });

      // Slide 8: Semester View
      const slide8 = pptx.addSlide({ masterName: "MASTER_SLIDE" });
      slide8.addText("Semester Overview", {
        x: 0.5,
        y: 0.3,
        w: 9,
        h: 0.5,
        fontSize: 28,
        bold: true,
        color: TEXT_WHITE,
      });

      Object.entries(semesterRoadmap).forEach(([key, data], index) => {
        const xPos = 0.5 + index * 4.8;
        slide8.addShape("rect" as PptxGenJS.ShapeType, {
          x: xPos,
          y: 1,
          w: 4.5,
          h: 4,
          fill: { color: "262626" },
          line: { color: index === 0 ? BRAND_GREEN : "007F41", width: 2 },
        });
        slide8.addText(data.title, {
          x: xPos + 0.2,
          y: 1.1,
          w: 4.1,
          h: 0.5,
          fontSize: 16,
          bold: true,
          color: index === 0 ? BRAND_GREEN : "007F41",
        });

        data.initiatives.forEach((item, idx) => {
          slide8.addText(`• ${item}`, {
            x: xPos + 0.2,
            y: 1.7 + idx * 0.45,
            w: 4.1,
            h: 0.4,
            fontSize: 9,
            color: TEXT_WHITE,
          });
        });

        slide8.addText("Outcomes:", {
          x: xPos + 0.2,
          y: 3.5,
          w: 4.1,
          h: 0.3,
          fontSize: 10,
          bold: true,
          color: TEXT_MUTED,
        });

        data.outcomes.forEach((outcome, idx) => {
          slide8.addText(`✓ ${outcome}`, {
            x: xPos + 0.2,
            y: 3.85 + idx * 0.35,
            w: 4.1,
            h: 0.3,
            fontSize: 8,
            color: index === 0 ? BRAND_GREEN : "007F41",
          });
        });
      });
      addSlideNumber(slide8, 8);

      // Slide 9: Board View
      const slide9 = pptx.addSlide({ masterName: "MASTER_SLIDE" });
      slide9.addText("12-Month Value Drivers – Board View", {
        x: 0.5,
        y: 0.3,
        w: 9,
        h: 0.5,
        fontSize: 24,
        bold: true,
        color: TEXT_WHITE,
      });
      slide9.addText("In 12 months, the platform evolves from a trusted foundation to a repeatable value engine, delivering faster decisions, measurable savings, and enterprise-scale sustainability and energy performance.", {
        x: 0.5,
        y: 0.8,
        w: 9,
        h: 0.5,
        fontSize: 10,
        color: TEXT_MUTED,
      });

      boardViewRoadmap.forEach((q, index) => {
        const xPos = 0.3 + index * 2.4;
        slide9.addShape("rect" as PptxGenJS.ShapeType, {
          x: xPos,
          y: 1.4,
          w: 2.3,
          h: 3.5,
          fill: { color: "262626" },
          line: { color: BRAND_GREEN, width: 1 },
        });
        slide9.addText(q.quarter, {
          x: xPos + 0.1,
          y: 1.5,
          w: 2.1,
          h: 0.25,
          fontSize: 10,
          bold: true,
          color: BRAND_GREEN,
        });
        slide9.addText(q.theme, {
          x: xPos + 0.1,
          y: 1.75,
          w: 2.1,
          h: 0.25,
          fontSize: 9,
          bold: true,
          color: TEXT_WHITE,
        });
        
        // Add highlights
        q.highlights.forEach((highlight, hIdx) => {
          slide9.addText(`• ${highlight}`, {
            x: xPos + 0.1,
            y: 2.1 + hIdx * 0.4,
            w: 2.1,
            h: 0.38,
            fontSize: 7,
            color: TEXT_MUTED,
          });
        });
        
        // Outcome at bottom
        slide9.addText("Outcome:", {
          x: xPos + 0.1,
          y: 4.0,
          w: 2.1,
          h: 0.2,
          fontSize: 7,
          bold: true,
          color: BRAND_GREEN,
        });
        slide9.addText(q.outcome, {
          x: xPos + 0.1,
          y: 4.2,
          w: 2.1,
          h: 0.6,
          fontSize: 7,
          color: TEXT_WHITE,
          italic: true,
        });
      });
      addSlideNumber(slide9, 9);

      // Slides 10-13: Value Drivers (one per quarter)
      slideNum = 10;
      Object.entries(valueDriversRoadmap).forEach(([key, data]) => {
        const slide = pptx.addSlide({ masterName: "MASTER_SLIDE" });
        
        // Header with quarter and theme
        slide.addText(`${data.title} – ${data.theme}`, {
          x: 0.5,
          y: 0.25,
          w: 9,
          h: 0.4,
          fontSize: 20,
          bold: true,
          color: BRAND_GREEN,
        });

        // Value Drivers section
        slide.addText("Value Drivers", {
          x: 0.5,
          y: 0.7,
          w: 9,
          h: 0.3,
          fontSize: 11,
          bold: true,
          color: TEXT_WHITE,
        });

        // Calculate appropriate font size and spacing based on number of drivers
        const driverCount = data.valueDrivers.length;
        const driverFontSize = driverCount > 6 ? 7 : 8;
        const driverLineHeight = driverCount > 6 ? 0.36 : 0.42;

        data.valueDrivers.forEach((driver, idx) => {
          slide.addText(`• ${driver}`, {
            x: 0.5,
            y: 1.0 + idx * driverLineHeight,
            w: 9,
            h: driverLineHeight,
            fontSize: driverFontSize,
            color: TEXT_MUTED,
          });
        });

        // Why It Matters box - fixed position at bottom of slide
        const whyYPos = 4.3;
        slide.addShape("rect" as PptxGenJS.ShapeType, {
          x: 0.5,
          y: whyYPos,
          w: 9,
          h: 0.85,
          fill: { color: "1E3A1E" },
          line: { color: BRAND_GREEN, width: 1 },
        });
        slide.addText("WHY IT MATTERS", {
          x: 0.6,
          y: whyYPos + 0.05,
          w: 8.8,
          h: 0.2,
          fontSize: 8,
          bold: true,
          color: BRAND_GREEN,
        });
        slide.addText(data.whyItMatters, {
          x: 0.6,
          y: whyYPos + 0.28,
          w: 8.8,
          h: 0.52,
          fontSize: 9,
          color: TEXT_WHITE,
        });
        addSlideNumber(slide, slideNum);
        slideNum++;
      });

      // Slide 14: Executive Takeaway
      const slideExec = pptx.addSlide({ masterName: "MASTER_SLIDE" });
      slideExec.addText("Executive Takeaway", {
        x: 0.5,
        y: 1.5,
        w: 9,
        h: 0.6,
        fontSize: 32,
        bold: true,
        color: TEXT_WHITE,
        align: "center",
      });
      slideExec.addText(
        "From carbon core to extended sustainability suite in 12 months, delivering faster decisions, lower cost, and reduced risk on one AI-native platform.",
        {
          x: 0.8,
          y: 2.5,
          w: 8.4,
          h: 1.5,
          fontSize: 18,
          color: BRAND_GREEN,
          align: "center",
          valign: "middle",
        }
      );
      addSlideNumber(slideExec, 14);

      await pptx.writeFile({ fileName: "Detailed-Roadmap-2026.pptx" });
    } catch (error) {
      console.error("Export failed:", error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Playbook
                </Button>
              </Link>
              <div className="h-6 w-px bg-border" />
              <h1 className="text-lg font-semibold text-foreground">Roadmap Overview</h1>
            </div>
            <Button
              onClick={exportRoadmapToPptx}
              disabled={isExporting}
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
            >
              <Download className="w-4 h-4" />
              {isExporting ? "Exporting..." : "Export PPTX"}
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            12-Month <span className="text-primary">Strategic Roadmap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From carbon core to extended sustainability suite: delivering faster decisions, lower
            cost, and reduced risk on one AI-native platform.
          </p>
        </motion.div>

        {/* Tabs for different views */}
        <Tabs defaultValue="simple" className="w-full">
          <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-5 mb-8">
            <TabsTrigger value="simple" className="gap-2">
              <Calendar className="w-4 h-4 hidden sm:block" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="quarterly" className="gap-2">
              <Target className="w-4 h-4 hidden sm:block" />
              Quarterly (1)
            </TabsTrigger>
            <TabsTrigger value="value-drivers" className="gap-2">
              <TrendingUp className="w-4 h-4 hidden sm:block" />
              Quarterly (2)
            </TabsTrigger>
            <TabsTrigger value="semester" className="gap-2">
              <Zap className="w-4 h-4 hidden sm:block" />
              Semester
            </TabsTrigger>
            <TabsTrigger value="board-view" className="gap-2">
              <LayoutGrid className="w-4 h-4 hidden sm:block" />
              Board View
            </TabsTrigger>
          </TabsList>

          {/* Simple Overview */}
          <TabsContent value="simple">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {simpleQuarterlyOverview.map((q, index) => (
                <motion.div key={q.quarter} variants={itemVariants}>
                  <Card className="h-full glass-card hover:glow-border transition-all duration-300 group">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30 group-hover:bg-primary/20 transition-colors">
                          <span className="text-primary font-bold text-sm">Q{index + 1}</span>
                        </div>
                        <CardTitle className="text-lg text-foreground">{q.quarter}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{q.summary}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Timeline connector */}
            <div className="hidden lg:flex items-center justify-center mt-8">
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4].map((q, index) => (
                  <div key={q} className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">Q{q}</span>
                    </div>
                    {index < 3 && (
                      <ArrowRight className="w-8 h-8 text-primary mx-2" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Quarterly Detailed View */}
          <TabsContent value="quarterly">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {Object.entries(quarterlyRoadmap).map(([key, data], index) => (
                <motion.div key={key} variants={itemVariants}>
                  <Card className="glass-card overflow-hidden">
                    <div className="grid md:grid-cols-5 gap-0">
                      {/* Quarter Header */}
                      <div className="md:col-span-1 bg-primary/10 p-6 flex flex-col justify-center border-r border-border/30">
                        <div className="text-center md:text-left">
                          <div className="text-3xl font-bold text-primary mb-1">{key}</div>
                          <div className="text-sm text-muted-foreground">2026</div>
                        </div>
                      </div>

                      {/* Initiatives */}
                      <div className="md:col-span-2 p-6 border-r border-border/30">
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                          Key Initiatives
                        </h4>
                        <ul className="space-y-3">
                          {data.initiatives.map((initiative, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                              <span className="text-foreground">{initiative}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Value Delivered */}
                      <div className="md:col-span-2 p-6 bg-secondary/5">
                        <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                          Value Delivered
                        </h4>
                        <ul className="space-y-3">
                          {data.value.map((val, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-primary text-xs">✓</span>
                              </div>
                              <span className="text-foreground font-medium">{val}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Semester View */}
          <TabsContent value="semester">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 gap-8"
            >
              {Object.entries(semesterRoadmap).map(([key, data], index) => (
                <motion.div key={key} variants={itemVariants}>
                  <Card
                    className={`h-full glass-card overflow-hidden ${
                      index === 0 ? "border-primary/50" : "border-secondary/50"
                    }`}
                  >
                    <CardHeader className={`${index === 0 ? "bg-primary/10" : "bg-secondary/10"}`}>
                      <CardTitle
                        className={`text-2xl ${index === 0 ? "text-primary" : "text-secondary"}`}
                      >
                        {data.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                          Key Deliverables
                        </h4>
                        <ul className="space-y-3">
                          {data.initiatives.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <ChevronRight
                                className={`w-4 h-4 mt-1 flex-shrink-0 ${
                                  index === 0 ? "text-primary" : "text-secondary"
                                }`}
                              />
                              <span className="text-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div
                        className={`p-4 rounded-lg ${
                          index === 0 ? "bg-primary/5 border border-primary/20" : "bg-secondary/5 border border-secondary/20"
                        }`}
                      >
                        <h4
                          className={`text-sm font-semibold uppercase tracking-wider mb-3 ${
                            index === 0 ? "text-primary" : "text-secondary"
                          }`}
                        >
                          Outcomes
                        </h4>
                        <ul className="space-y-2">
                          {data.outcomes.map((outcome, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span
                                className={`${index === 0 ? "text-primary" : "text-secondary"}`}
                              >
                                ✓
                              </span>
                              <span className="text-foreground text-sm">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Executive Takeaway */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <Card className="glass-card glow-border">
                <CardContent className="py-8 text-center">
                  <h3 className="text-xl font-semibold text-muted-foreground mb-4">
                    Executive Takeaway
                  </h3>
                  <p className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed max-w-4xl mx-auto">
                    From carbon core to extended sustainability suite in{" "}
                    <span className="text-primary">12 months</span>, delivering{" "}
                    <span className="text-primary">faster decisions</span>,{" "}
                    <span className="text-primary">lower cost</span>, and{" "}
                    <span className="text-primary">reduced risk</span> on one AI-native platform.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Value Drivers View */}
          <TabsContent value="value-drivers">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  12-Month Roadmap as <span className="text-primary">Value Drivers</span>
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Detailed quarterly breakdown of value drivers and their strategic importance
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {Object.entries(valueDriversRoadmap).map(([key, data], index) => (
                <motion.div key={key} variants={itemVariants}>
                  <Card className="glass-card overflow-hidden">
                    {/* Quarter Header */}
                    <div className="bg-primary/10 p-6 border-b border-border/30">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
                            <span className="text-primary font-bold text-xl">{key}</span>
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-foreground">{data.title}</h4>
                            <p className="text-primary font-medium">{data.theme}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <CardContent className="pt-6">
                      {/* Value Drivers */}
                      <div className="mb-6">
                        <h5 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                          Value Drivers
                        </h5>
                        <ul className="space-y-4">
                          {data.valueDrivers.map((driver, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary/20">
                                <ChevronRight className="w-4 h-4 text-primary" />
                              </div>
                              <span className="text-foreground leading-relaxed">{driver}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Why It Matters */}
                      <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
                        <h5 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4" />
                          Why It Matters
                        </h5>
                        <p className="text-foreground font-medium leading-relaxed">
                          {data.whyItMatters}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Board View */}
          <TabsContent value="board-view">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  12-Month Roadmap – <span className="text-primary">Board View</span>
                </h3>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  In 12 months, the platform evolves from a trusted foundation to a repeatable value engine, 
                  delivering faster decisions, measurable savings, and enterprise-scale sustainability and energy performance.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {boardViewRoadmap.map((q, index) => (
                <motion.div key={q.quarter} variants={itemVariants}>
                  <Card className="h-full glass-card hover:glow-border transition-all duration-300 group flex flex-col">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/30 group-hover:bg-primary/20 transition-colors">
                          <span className="text-primary font-bold text-sm">Q{index + 1}</span>
                        </div>
                        <div>
                          <CardTitle className="text-lg text-foreground">{q.quarter}</CardTitle>
                          <p className="text-primary font-semibold">{q.theme}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <ul className="space-y-3 flex-1">
                        {q.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 pt-4 border-t border-border/30">
                        <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                          <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Outcome</p>
                          <p className="text-foreground text-sm font-medium">{q.outcome}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Timeline connector */}
            <div className="hidden lg:flex items-center justify-center mt-8">
              <div className="flex items-center gap-2">
                {boardViewRoadmap.map((q, index) => (
                  <div key={q.quarter} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-primary-foreground font-bold">Q{index + 1}</span>
                      </div>
                      <span className="text-xs text-muted-foreground mt-1">{q.theme}</span>
                    </div>
                    {index < 3 && (
                      <ArrowRight className="w-8 h-8 text-primary mx-4" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Executive Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <Card className="glass-card glow-border">
                <CardContent className="py-8 text-center">
                  <h3 className="text-xl font-semibold text-muted-foreground mb-4">
                    Board Summary
                  </h3>
                  <p className="text-xl md:text-2xl font-bold text-foreground leading-relaxed max-w-4xl mx-auto">
                    From <span className="text-primary">trusted foundation</span> to{" "}
                    <span className="text-primary">repeatable value engine</span> in 12 months, 
                    enabling faster decisions, measurable savings, and enterprise-scale sustainability performance.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default DetailedRoadmap;
