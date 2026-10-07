"use client";

import Image from "next/image";
import Link from "next/link";
import {
  type MouseEvent,
  useEffect,
  useState,
  useSyncExternalStore,
} from "react";
import { projects, type Language } from "./data/projects";
import { toolGroups, toolPanels, toolProducts, toolStats } from "./data/tools";

type ThemeMode = "dark" | "light";

type ContentItem = {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    tools: string;
    contact: string;
  };
  hero: {
    label: string;
    name: string;
    title: string;
    tagline: string;
    primaryButton: string;
    secondaryButton: string;
    cvButton: string;
  };
  about: {
    label: string;
    title: string;
    body: string;
  };
  skills: {
    label: string;
    title: string;
    softwareTitle: string;
    professionalTitle: string;
  };
  projects: {
    label: string;
    title: string;
    subtitle: string;
    locationLabel: string;
    roleLabel: string;
    scaleLabel: string;
    periodLabel: string;
    stageLabel: string;
    lodLabel: string;
    typeLabel: string;
    toolsLabel: string;
    detailButton: string;
  };
  impact: { value: string; label: string }[];
  toolsSection: {
    label: string;
    title: string;
    subtitle: string;
    groupsTitle: string;
    productsTitle: string;
    usage: string;
    license: string;
    integrations: string;
    ribbonCaption: string;
    panelsTitle: string;
    accountCaption: string;
    architectureCaption: string;
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    roleTitle: string;
    roleValue: string;
    availabilityTitle: string;
    availabilityValue: string;
    linksTitle: string;
    emailLabel: string;
    youtubeLabel: string;
    linkedinLabel: string;
    cvLabel: string;
  };
  footer: {
    rights: string;
    role: string;
  };
};

type ContentSchema = {
  ENG: ContentItem;
  VIE: ContentItem;
};

const STORAGE_KEYS = {
  language: "tnh_portfolio_language",
  theme: "tnh_portfolio_theme",
} as const;

const INTERNAL_STORAGE_EVENT = "tnh-storage-change";

const CV_FILES = [
  {
    path: "/TRAN%20NGOC%20HA%20-%20BIM%20COORDINATOR%20-%20CV%20-%20EN.pdf",
    name: "TRAN NGOC HA - BIM COORDINATOR - CV - EN.pdf",
  },
  {
    path: "/TRAN%20NGOC%20HA%20-%20BIM%20COORDINATOR%20-%20CV%20-%20VI.pdf",
    name: "TRAN NGOC HA - BIM COORDINATOR - CV - VI.pdf",
  },
] as const;

const downloadBilingualCv = (event: MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();

  CV_FILES.forEach(({ path, name }) => {
    const link = document.createElement("a");
    link.href = path;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    link.remove();
  });
};
const EMAIL_LINK = "mailto:trngocha.ks@gmail.com";
const EMAIL_TEXT = "trngocha.ks@gmail.com";
const YOUTUBE_LINK = "https://www.youtube.com/@ngochatran147";
const YOUTUBE_TEXT = "youtube.com/@ngochatran147";
const LINKEDIN_LINK =
  "https://www.linkedin.com/in/ng%E1%BB%8Dc-h%C3%A0-tr%E1%BA%A7n-76602733a";
const LINKEDIN_TEXT = "linkedin.com/in/ngọc-hà-trần-76602733a";

const softwareSkills = [
  "Revit",
  "Navisworks",
  "AutoCAD",
  "ETABS",
  "SAFE",
  "Dynamo",
  "Autodesk Construction Cloud",
  "IFC",
  "Revit API (C#)",
];
const professionalSkills = [
  "Structural BIM Team Leadership",
  "BIM Coordination",
  "Revit Model Management",
  "BIM Workflow & Standards Development",
  "Model & Documentation QA/QC",
  "Clash Detection & Coordination",
  "BIM Automation & Tool Development",
];

const content: ContentSchema = {
  ENG: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      tools: "Tools",
      contact: "Contact",
    },
    hero: {
      label: "Portfolio",
      name: "Tran Ngoc Ha",
      title: "Structural BIM Lead | BIM Coordinator",
      tagline:
        "I lead structural BIM delivery for large residential projects up to 175,000 m², from LOD 300 models to issued construction documents, supported by in-house Revit automation tools.",
      primaryButton: "View Projects",
      secondaryButton: "Contact",
      cvButton: "Download CV (EN + VI)",
    },
    about: {
      label: "About",
      title: "About Me",
      body: "I am a Structural BIM Lead and BIM Coordinator with a structural engineering background and three years of project delivery experience. I lead a three-person Revit team, set the project templates, naming rules and revision control under the BEP, coordinate with architectural and MEP disciplines in Navisworks, and sign off model and documentation quality before every issue. I have worked on Autodesk Construction Cloud, automated routine work with Dynamo and my own Revit API tools, and exported IFC for submission and cross-discipline coordination.",
    },
    skills: {
      label: "Skills",
      title: "Core Skills",
      softwareTitle: "Software",
      professionalTitle: "Professional Capabilities",
    },
    projects: {
      label: "Projects",
      title: "Selected Project Experience",
      subtitle:
        "Selected projects showing structural BIM leadership, multidisciplinary coordination, and documentation issued directly from the model.",
      periodLabel: "Period",
      locationLabel: "Location",
      roleLabel: "Role",
      scaleLabel: "Scale",
      stageLabel: "Stage",
      lodLabel: "LOD",
      typeLabel: "Type",
      toolsLabel: "Tools",
      detailButton: "View Details",
    },
    impact: [
      { value: "3", label: "Revit modelers led" },
      { value: "175,000 m²", label: "Largest project delivered" },
      { value: "40+", label: "In-house Revit commands" },
      { value: "7", label: "Projects delivered" },
    ],
    toolsSection: {
      label: "Tools & Automation",
      title: "In-house Revit Tools",
      subtitle:
        "I design and build my own Revit add-ins (C#, Revit API) to remove repetitive work and enforce BIM standards. The tools run on Revit 2024 and later, connect with Excel and CAD, and are licensed through a server-side license manager.",
      groupsTitle: "TNH Tool – 40+ commands",
      productsTitle: "Related tools",
      usage:
        "Used on Lot 6.8, Lot 6.7, Lot C2, Lot C3, My Xuan B1 and WELLSPRING H9, and by staff at other companies.",
      license: "Server-side license management",
      integrations: "Excel · CAD",
      ribbonCaption: "TNH_Tool ribbon in Revit",
      panelsTitle: "Command panels",
      accountCaption: "Account window: user sign-in, plan, and server-synced license",
      architectureCaption:
        "TNH MCP architecture: AI host → MCP server → TNH Tool → Revit",
    },
    contact: {
      label: "Contact",
      title: "Let's Connect",
      subtitle:
        "Use the links below to discuss professional opportunities or view my profiles and CV.",
      roleTitle: "Professional Role",
      roleValue: "Structural BIM Lead | BIM Coordinator",
      availabilityTitle: "Open To",
      availabilityValue:
        "Structural BIM Lead and BIM Coordinator roles with a focus on information management, BIM standards, model QA/QC, multidisciplinary coordination, and BIM automation.",
      linksTitle: "Direct Links",
      emailLabel: "Email",
      youtubeLabel: "YouTube",
      linkedinLabel: "LinkedIn",
      cvLabel: "Download CV (EN + VI)",
    },
    footer: {
      rights: "All rights reserved.",
      role: "Structural BIM Lead | BIM Coordinator",
    },
  },
  VIE: {
    nav: {
      home: "Trang chủ",
      about: "Giới thiệu",
      skills: "Kỹ năng",
      projects: "Dự án",
      tools: "Công cụ",
      contact: "Liên hệ",
    },
    hero: {
      label: "Portfolio",
      name: "Trần Ngọc Hà",
      title: "Structural BIM Lead | BIM Coordinator",
      tagline:
        "Dẫn dắt triển khai BIM kết cấu cho các dự án nhà ở quy mô đến 175.000 m², từ mô hình LOD 300 đến hồ sơ thi công phát hành, với bộ công cụ tự động hóa Revit do chính tôi phát triển.",
      primaryButton: "Xem dự án",
      secondaryButton: "Liên hệ",
      cvButton: "Tải CV (EN + VI)",
    },
    about: {
      label: "Giới thiệu",
      title: "Về tôi",
      body: "Tôi là Structural BIM Lead và BIM Coordinator, có nền tảng kỹ thuật kết cấu cùng 3 năm kinh nghiệm triển khai dự án. Tôi quản lý team Revit 3 người, trực tiếp quyết định template, quy tắc đặt tên và kiểm soát revision theo BEP, phối hợp với bộ môn Kiến trúc và MEP trên Navisworks, đồng thời chịu trách nhiệm chốt chất lượng mô hình và hồ sơ trước mỗi lần phát hành. Tôi đã làm việc trên Autodesk Construction Cloud, tự động hóa công việc lặp lại bằng Dynamo cùng các công cụ Revit API do tôi phát triển, và xuất IFC để nộp hồ sơ, phối hợp giữa các bộ môn.",
    },
    skills: {
      label: "Kỹ năng",
      title: "Năng lực cốt lõi",
      softwareTitle: "Phần mềm",
      professionalTitle: "Năng lực chuyên môn",
    },
    projects: {
      label: "Dự án",
      title: "Kinh nghiệm dự án thực tế",
      subtitle:
        "Các dự án tiêu biểu thể hiện năng lực dẫn dắt BIM kết cấu, phối hợp đa bộ môn và phát hành hồ sơ trực tiếp từ mô hình.",
      periodLabel: "Thời gian",
      locationLabel: "Địa điểm",
      roleLabel: "Vai trò",
      scaleLabel: "Quy mô",
      stageLabel: "Giai đoạn",
      lodLabel: "LOD",
      typeLabel: "Loại công việc",
      toolsLabel: "Công cụ",
      detailButton: "Xem chi tiết",
    },
    impact: [
      { value: "3", label: "Thành viên Revit dẫn dắt" },
      { value: "175.000 m²", label: "Quy mô dự án lớn nhất" },
      { value: "40+", label: "Lệnh Revit tự phát triển" },
      { value: "7", label: "Dự án đã triển khai" },
    ],
    toolsSection: {
      label: "Công cụ & Tự động hóa",
      title: "Công cụ Revit tự phát triển",
      subtitle:
        "Tôi tự thiết kế và lập trình các add-in Revit (C#, Revit API) để loại bỏ công việc lặp lại và đảm bảo tiêu chuẩn BIM. Công cụ chạy trên Revit 2024 trở lên, kết nối với Excel và CAD, và quản lý license trên server.",
      groupsTitle: "TNH Tool – hơn 40 lệnh",
      productsTitle: "Công cụ liên quan",
      usage:
        "Đã áp dụng cho Lô 6.8, Lô 6.7, Lô C2, Lô C3, Mỹ Xuân B1, WELLSPRING H9 và được nhân viên các công ty khác sử dụng.",
      license: "Quản lý license trên server",
      integrations: "Excel · CAD",
      ribbonCaption: "Thanh ribbon TNH_Tool trong Revit",
      panelsTitle: "Các nhóm lệnh",
      accountCaption: "Cửa sổ tài khoản: đăng nhập, gói sử dụng và license đồng bộ từ server",
      architectureCaption:
        "Kiến trúc TNH MCP: AI → MCP server → TNH Tool → Revit",
    },
    contact: {
      label: "Liên hệ",
      title: "Kết nối với tôi",
      subtitle:
        "Bạn có thể truy cập trực tiếp các kênh liên hệ và hồ sơ của tôi qua nhóm liên kết bên dưới.",
      roleTitle: "Vai trò chuyên môn",
      roleValue: "Structural BIM Lead | BIM Coordinator",
      availabilityTitle: "Quan tâm",
      availabilityValue:
        "Các vị trí Structural BIM Lead và BIM Coordinator, tập trung vào quản lý thông tin, tiêu chuẩn BIM, QA/QC mô hình, phối hợp đa bộ môn và tự động hóa BIM.",
      linksTitle: "Liên kết trực tiếp",
      emailLabel: "Email",
      youtubeLabel: "YouTube",
      linkedinLabel: "LinkedIn",
      cvLabel: "Tải CV (EN + VI)",
    },
    footer: {
      rights: "Bảo lưu mọi quyền.",
      role: "Structural BIM Lead | BIM Coordinator",
    },
  },
};

function subscribeToStorage(callback: () => void) {
  if (typeof window === "undefined") return () => {};

  const handleChange = () => callback();
  window.addEventListener("storage", handleChange);
  window.addEventListener(INTERNAL_STORAGE_EVENT, handleChange);

  return () => {
    window.removeEventListener("storage", handleChange);
    window.removeEventListener(INTERNAL_STORAGE_EVENT, handleChange);
  };
}

function emitStorageChange() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(INTERNAL_STORAGE_EVENT));
  }
}

function getLanguageSnapshot(): Language {
  if (typeof window === "undefined") return "ENG";
  const savedLanguage = window.localStorage.getItem(STORAGE_KEYS.language);
  return savedLanguage === "VIE" ? "VIE" : "ENG";
}

function getThemeSnapshot(): ThemeMode {
  if (typeof window === "undefined") return "dark";
  const savedTheme = window.localStorage.getItem(STORAGE_KEYS.theme);
  return savedTheme === "light" ? "light" : "dark";
}

function useStoredLanguage(): readonly [Language, (value: Language) => void] {
  const language = useSyncExternalStore(
    subscribeToStorage,
    getLanguageSnapshot,
    () => "ENG" as Language
  );

  const setLanguage = (value: Language) => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEYS.language, value);
    emitStorageChange();
  };

  return [language, setLanguage] as const;
}

function useStoredTheme(): readonly [ThemeMode, (value: ThemeMode) => void] {
  const theme = useSyncExternalStore(
    subscribeToStorage,
    getThemeSnapshot,
    () => "dark" as ThemeMode
  );

  const setTheme = (value: ThemeMode) => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEYS.theme, value);
    emitStorageChange();
  };

  return [theme, setTheme] as const;
}

export default function Home() {
  const [language, setLanguage] = useStoredLanguage();
  const [theme, setTheme] = useStoredTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = content[language];
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.lang = language === "VIE" ? "vi" : "en";
  }, [language]);

  const themeClasses = {
    page: isDark ? "bg-zinc-950 text-white" : "bg-zinc-50 text-zinc-900",
    header: isDark
      ? "border-white/10 bg-zinc-950/80"
      : "border-zinc-200 bg-white/80",
    navText: isDark
      ? "text-zinc-400 hover:text-white"
      : "text-zinc-500 hover:text-zinc-950",
    subtleText: isDark ? "text-zinc-400" : "text-zinc-600",
    bodyText: isDark ? "text-zinc-300" : "text-zinc-700",
    softText: isDark ? "text-zinc-400" : "text-zinc-600",
    card: isDark ? "bg-white/[0.03]" : "bg-white",
    cardHover: isDark ? "hover:bg-white/[0.05]" : "hover:bg-zinc-50",
    skillTag: isDark
      ? "border-white/10 bg-white/5 text-zinc-200"
      : "border-zinc-200 bg-white text-zinc-700",
    primaryButton: isDark
      ? "bg-white !text-black hover:bg-zinc-200"
      : "bg-zinc-900 !text-white hover:bg-zinc-800",
    secondaryButton: isDark
      ? "border-white/15 text-white hover:bg-white/10"
      : "border-zinc-300 text-zinc-900 hover:bg-zinc-100",
    border: isDark ? "border-white/10" : "border-zinc-200",
    altSection: isDark ? "bg-zinc-900/60" : "bg-zinc-100/80",
    footerText: isDark ? "text-zinc-400" : "text-zinc-500",
    heroBox: isDark ? "bg-zinc-900" : "bg-white",
    switchBase: isDark
      ? "border-white/10 bg-white/5 text-zinc-300"
      : "border-zinc-200 bg-white text-zinc-700",
    switchActive: isDark ? "bg-white text-black" : "bg-zinc-900 text-white",
    mobilePanel: isDark ? "bg-zinc-950/95" : "bg-white/95",
    linkCard: isDark
      ? "border-white/10 bg-white/[0.04] hover:bg-white/[0.06]"
      : "border-zinc-200 bg-zinc-50 hover:bg-zinc-100",
    imageFrame: isDark ? "bg-zinc-900/60" : "bg-zinc-50",
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <main className={`min-h-screen ${themeClasses.page}`}>
      <header
        className={`sticky top-0 z-50 border-b backdrop-blur ${themeClasses.header}`}
      >
        <div className="mx-auto flex max-w-7xl items-center px-6 py-4">
          <a
            href="#home"
            onClick={closeMobileMenu}
            className={`text-sm font-bold tracking-[0.14em] ${
              isDark ? "text-zinc-300" : "text-zinc-800"
            }`}
          >
            TNH
          </a>

          <nav className="ml-12 hidden gap-6 md:flex">
            <a href="#home" className={`text-sm transition ${themeClasses.navText}`}>
              {t.nav.home}
            </a>
            <a href="#about" className={`text-sm transition ${themeClasses.navText}`}>
              {t.nav.about}
            </a>
            <a href="#skills" className={`text-sm transition ${themeClasses.navText}`}>
              {t.nav.skills}
            </a>
            <a href="#projects" className={`text-sm transition ${themeClasses.navText}`}>
              {t.nav.projects}
            </a>
            <a href="#tools" className={`text-sm transition ${themeClasses.navText}`}>
              {t.nav.tools}
            </a>
            <a href="#contact" className={`text-sm transition ${themeClasses.navText}`}>
              {t.nav.contact}
            </a>
          </nav>

          <div className="ml-auto hidden items-center gap-3 md:flex">
            <div
              className={`flex items-center rounded-full border p-1 ${themeClasses.switchBase}`}
            >
              <button
                type="button"
                onClick={() => setLanguage("ENG")}
                aria-pressed={language === "ENG"}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                  language === "ENG" ? themeClasses.switchActive : ""
                }`}
              >
                ENG
              </button>
              <button
                type="button"
                onClick={() => setLanguage("VIE")}
                aria-pressed={language === "VIE"}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                  language === "VIE" ? themeClasses.switchActive : ""
                }`}
              >
                VIE
              </button>
            </div>

            <div
              className={`flex items-center rounded-full border p-1 ${themeClasses.switchBase}`}
            >
              <button
                type="button"
                onClick={() => setTheme("light")}
                aria-label="Light mode"
                aria-pressed={theme === "light"}
                title="Light mode"
                className={`rounded-full px-3 py-1 text-sm font-semibold transition ${
                  theme === "light" ? themeClasses.switchActive : ""
                }`}
              >
                ☀
              </button>
              <button
                type="button"
                onClick={() => setTheme("dark")}
                aria-label="Dark mode"
                aria-pressed={theme === "dark"}
                title="Dark mode"
                className={`rounded-full px-3 py-1 text-sm font-semibold transition ${
                  theme === "dark" ? themeClasses.switchActive : ""
                }`}
              >
                ☾
              </button>
            </div>
          </div>

          <button
            type="button"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className={`ml-auto inline-flex items-center justify-center rounded-xl border px-3 py-2 text-sm md:hidden ${themeClasses.switchBase}`}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className={`border-t md:hidden ${themeClasses.mobilePanel} ${themeClasses.border}`}>
            <div className="mx-auto max-w-7xl px-6 py-4">
              <nav className="flex flex-col gap-3">
                <a href="#home" onClick={closeMobileMenu} className={`text-sm transition ${themeClasses.navText}`}>{t.nav.home}</a>
                <a href="#about" onClick={closeMobileMenu} className={`text-sm transition ${themeClasses.navText}`}>{t.nav.about}</a>
                <a href="#skills" onClick={closeMobileMenu} className={`text-sm transition ${themeClasses.navText}`}>{t.nav.skills}</a>
                <a href="#projects" onClick={closeMobileMenu} className={`text-sm transition ${themeClasses.navText}`}>{t.nav.projects}</a>
                <a href="#tools" onClick={closeMobileMenu} className={`text-sm transition ${themeClasses.navText}`}>{t.nav.tools}</a>
                <a href="#contact" onClick={closeMobileMenu} className={`text-sm transition ${themeClasses.navText}`}>{t.nav.contact}</a>
              </nav>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <div className={`flex items-center rounded-full border p-1 ${themeClasses.switchBase}`}>
                  <button
                    type="button"
                    onClick={() => setLanguage("ENG")}
                    aria-pressed={language === "ENG"}
                    className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                      language === "ENG" ? themeClasses.switchActive : ""
                    }`}
                  >
                    ENG
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage("VIE")}
                    aria-pressed={language === "VIE"}
                    className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                      language === "VIE" ? themeClasses.switchActive : ""
                    }`}
                  >
                    VIE
                  </button>
                </div>

                <div className={`flex items-center rounded-full border p-1 ${themeClasses.switchBase}`}>
                  <button
                    type="button"
                    onClick={() => setTheme("light")}
                    aria-label="Light mode"
                    aria-pressed={theme === "light"}
                    title="Light mode"
                    className={`rounded-full px-3 py-1 text-sm font-semibold transition ${
                      theme === "light" ? themeClasses.switchActive : ""
                    }`}
                  >
                    ☀
                  </button>
                  <button
                    type="button"
                    onClick={() => setTheme("dark")}
                    aria-label="Dark mode"
                    aria-pressed={theme === "dark"}
                    title="Dark mode"
                    className={`rounded-full px-3 py-1 text-sm font-semibold transition ${
                      theme === "dark" ? themeClasses.switchActive : ""
                    }`}
                  >
                    ☾
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <section
        id="home"
        className={`animate-fade-up border-b ${themeClasses.border}`}
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:py-32">
          <div>
            <p className={`mb-4 text-sm font-bold uppercase tracking-[0.08em] ${themeClasses.subtleText}`}>
              {t.hero.label}
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              {t.hero.name}
            </h1>
            <h2 className={`mt-4 text-xl font-medium md:text-2xl ${themeClasses.bodyText}`}>
              {t.hero.title}
            </h2>
            <p className={`mt-6 max-w-2xl text-left text-lg leading-8 md:text-justify ${themeClasses.softText}`}>
              {t.hero.tagline}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className={`inline-flex min-w-[160px] items-center justify-center rounded-2xl px-6 py-3 font-medium transition ${themeClasses.primaryButton}`}
              >
                {t.hero.primaryButton}
              </a>
              <a
                href="#contact"
                className={`inline-flex min-w-[160px] items-center justify-center rounded-2xl border px-6 py-3 font-medium transition ${themeClasses.secondaryButton}`}
              >
                {t.hero.secondaryButton}
              </a>
              <a
                href={CV_FILES[0].path}
                onClick={downloadBilingualCv}
                className={`inline-flex min-w-[160px] items-center justify-center rounded-2xl border px-6 py-3 font-medium transition ${themeClasses.secondaryButton}`}
              >
                {t.hero.cvButton}
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className={`overflow-hidden rounded-4xl shadow-2xl ${themeClasses.heroBox}`}>
              <Image
                src="/avatarTNH.jpg"
                alt="Tran Ngoc Ha"
                width={320}
                height={320}
                className="h-80 w-72 object-cover object-top md:h-88 md:w-80"
                sizes="(max-width: 768px) 288px, 320px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`border-b ${themeClasses.border}`}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
          {t.impact.map((item) => (
            <div key={item.label}>
              <p className="text-2xl font-bold tracking-tight md:text-3xl">{item.value}</p>
              <p className={`mt-2 text-sm ${themeClasses.subtleText}`}>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="animate-fade-up mx-auto max-w-6xl px-6 py-20 [animation-delay:120ms]">
        <div className="grid gap-8 md:grid-cols-[180px_1fr] md:gap-12">
          <div>
            <p className={`text-sm font-bold uppercase tracking-[0.08em] ${themeClasses.subtleText}`}>
              {t.about.label}
            </p>
            <h3 className="mt-3 text-3xl font-bold tracking-tight">{t.about.title}</h3>
          </div>

          <div className={themeClasses.bodyText}>
            <p className="max-w-none text-left leading-8 md:text-justify">{t.about.body}</p>
          </div>
        </div>
      </section>

      <section id="skills" className={`animate-fade-up ${themeClasses.altSection} [animation-delay:180ms]`}>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className={`text-sm font-bold uppercase tracking-[0.08em] ${themeClasses.subtleText}`}>
            {t.skills.label}
          </p>
          <h3 className="mt-3 text-3xl font-bold tracking-tight">{t.skills.title}</h3>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.08em]">
                {t.skills.softwareTitle}
              </h4>
              <div className="mt-4 flex flex-wrap gap-3">
                {softwareSkills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-full border px-4 py-2 text-sm transition-transform duration-300 hover:-translate-y-0.5 ${themeClasses.skillTag}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.08em]">
                {t.skills.professionalTitle}
              </h4>
              <div className="mt-4 flex flex-wrap gap-3">
                {professionalSkills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-full border px-4 py-2 text-sm transition-transform duration-300 hover:-translate-y-0.5 ${themeClasses.skillTag}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="animate-fade-up mx-auto max-w-6xl px-6 py-20 [animation-delay:240ms]">
        <p className={`text-sm font-bold uppercase tracking-[0.08em] ${themeClasses.subtleText}`}>
          {t.projects.label}
        </p>
        <h3 className="mt-3 text-3xl font-bold tracking-tight">{t.projects.title}</h3>
        <p className={`mt-4 max-w-5xl leading-8 ${themeClasses.softText}`}>
          {t.projects.subtitle}
        </p>

        <div className="mt-10 space-y-10">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`rounded-4xl p-6 transition duration-300 ${themeClasses.card} ${themeClasses.cardHover}`}
            >
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <div className={`overflow-hidden rounded-3xl ${themeClasses.imageFrame}`}>
                    <Image
                      src={project.images[0]}
                      alt={project.title[language]}
                      width={1200}
                      height={800}
                      className="h-auto w-full object-cover transition duration-500 hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 52vw"
                    />
                  </div>
                </div>

                <div>
                  <p className={`text-xs font-bold uppercase tracking-[0.08em] ${themeClasses.subtleText}`}>
                    {project.type[language]}
                  </p>

                  <h4 className="mt-3 text-2xl font-bold tracking-tight">
                    {project.title[language]}
                  </h4>

                  {(project.stage || project.lod) && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stage && (
                        <span className={`rounded-full border px-3 py-1 text-xs font-bold ${themeClasses.skillTag}`}>
                          {t.projects.stageLabel}: {project.stage[language]}
                        </span>
                      )}
                      {project.lod && (
                        <span className={`rounded-full border px-3 py-1 text-xs font-bold ${themeClasses.skillTag}`}>
                          {t.projects.lodLabel}: {project.lod}
                        </span>
                      )}
                    </div>
                  )}

                  <div className={`mt-5 space-y-3 text-sm ${themeClasses.bodyText}`}>
                    <p>
                      <span className="font-bold">{t.projects.periodLabel}:</span>{" "}
                      {project.period[language]}
                    </p>
                    <p>
                      <span className="font-bold">{t.projects.locationLabel}:</span>{" "}
                      {project.location[language]}
                    </p>
                    <p>
                      <span className="font-bold">{t.projects.roleLabel}:</span>{" "}
                      {project.role[language]}
                    </p>
                    {project.scale && (
                      <p>
                        <span className="font-bold">{t.projects.scaleLabel}:</span>{" "}
                        {project.scale[language]}
                      </p>
                    )}
                  </div>

                  <div className="mt-5">
                    <p className="text-sm font-semibold">{t.projects.toolsLabel}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className={`rounded-full border px-3 py-1 text-xs ${themeClasses.skillTag}`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link
                      href={`/projects/${project.id}`}
                      className={`inline-flex min-w-[180px] items-center justify-center rounded-xl px-6 py-3 text-sm font-medium transition ${themeClasses.primaryButton}`}
                    >
                      {t.projects.detailButton}
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="tools" className={`animate-fade-up ${themeClasses.altSection}`}>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className={`text-sm font-bold uppercase tracking-[0.08em] ${themeClasses.subtleText}`}>
            {t.toolsSection.label}
          </p>
          <h3 className="mt-3 text-3xl font-bold tracking-tight">{t.toolsSection.title}</h3>
          <p className={`mt-4 max-w-4xl leading-8 ${themeClasses.softText}`}>
            {t.toolsSection.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {toolStats.map((stat) => (
              <span
                key={stat.value + stat.label.ENG}
                className={`rounded-full border px-4 py-2 text-sm ${themeClasses.skillTag}`}
              >
                <span className="font-bold">{stat.value}</span> {stat.label[language]}
              </span>
            ))}
            <span className={`rounded-full border px-4 py-2 text-sm ${themeClasses.skillTag}`}>
              {t.toolsSection.license}
            </span>
            <span className={`rounded-full border px-4 py-2 text-sm ${themeClasses.skillTag}`}>
              {t.toolsSection.integrations}
            </span>
          </div>
          <p className={`mt-4 text-sm ${themeClasses.softText}`}>{t.toolsSection.usage}</p>

          <figure className={`mt-10 overflow-hidden rounded-3xl ${themeClasses.imageFrame}`}>
            <Image
              src="/tools/tnh-ribbon-full.png"
              alt={t.toolsSection.ribbonCaption}
              width={1570}
              height={126}
              className="h-auto w-full"
              sizes="(max-width: 1152px) 100vw, 1152px"
            />
            <figcaption className={`px-5 py-3 text-xs ${themeClasses.subtleText}`}>
              {t.toolsSection.ribbonCaption}
            </figcaption>
          </figure>

          <h4 className="mt-12 text-sm font-bold uppercase tracking-[0.08em]">
            {t.toolsSection.panelsTitle}
          </h4>
          <div className="mt-5 flex flex-wrap items-start gap-5">
            {toolPanels.map((panel) => (
              <figure
                key={panel.src}
                className={`max-w-full overflow-hidden rounded-3xl ${themeClasses.imageFrame}`}
              >
                <Image
                  src={panel.src}
                  alt={panel.title[language]}
                  width={panel.width}
                  height={panel.height}
                  className="h-auto max-w-full"
                  style={{ width: panel.width }}
                  sizes={`${panel.width * 2}px`}
                />
                <figcaption className={`px-5 py-3 text-xs ${themeClasses.subtleText}`}>
                  {panel.title[language]}
                </figcaption>
              </figure>
            ))}
          </div>

          <h4 className="mt-12 text-sm font-bold uppercase tracking-[0.08em]">
            {t.toolsSection.groupsTitle}
          </h4>
          <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {toolGroups.map((group) => (
              <div
                key={group.title.ENG}
                className={`rounded-3xl border p-5 ${themeClasses.linkCard}`}
              >
                <p className="font-semibold">{group.title[language]}</p>
                <p className={`mt-3 text-sm leading-7 ${themeClasses.bodyText}`}>
                  {group.description[language]}
                </p>
                <p className={`mt-3 text-xs ${themeClasses.subtleText}`}>
                  {group.examples[language]}
                </p>
              </div>
            ))}
          </div>

          <h4 className="mt-12 text-sm font-bold uppercase tracking-[0.08em]">
            {t.toolsSection.productsTitle}
          </h4>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {toolProducts.map((product) => (
              <div
                key={product.name}
                className={`rounded-3xl border p-6 ${themeClasses.linkCard}`}
              >
                <p className="text-lg font-bold">{product.name}</p>
                <p className={`mt-1 text-sm ${themeClasses.subtleText}`}>
                  {product.tagline[language]}
                </p>
                <p className={`mt-4 text-sm leading-7 ${themeClasses.bodyText}`}>
                  {product.description[language]}
                </p>
                <ul className={`mt-4 space-y-2 text-sm ${themeClasses.bodyText}`}>
                  {product.points[language].map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-70" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <figure className={`mt-8 flex flex-col items-center gap-3 overflow-hidden rounded-3xl p-6 ${themeClasses.imageFrame}`}>
            <Image
              src="/tools/tnh-tool-account.png"
              alt={t.toolsSection.accountCaption}
              width={434}
              height={452}
              className="h-auto w-full max-w-[320px] rounded-2xl"
              sizes="320px"
            />
            <figcaption className={`text-xs ${themeClasses.subtleText}`}>
              {t.toolsSection.accountCaption}
            </figcaption>
          </figure>

          <figure className={`mt-8 overflow-hidden rounded-3xl ${themeClasses.imageFrame}`}>
            <Image
              src="/tools/tnh-mcp-architecture.png"
              alt={t.toolsSection.architectureCaption}
              width={1700}
              height={520}
              className="h-auto w-full bg-white"
              sizes="(max-width: 1152px) 100vw, 1152px"
            />
            <figcaption className={`px-5 py-3 text-xs ${themeClasses.subtleText}`}>
              {t.toolsSection.architectureCaption}
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="contact" className={`animate-fade-up border-t ${themeClasses.border} [animation-delay:300ms]`}>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className={`text-sm font-bold uppercase tracking-[0.08em] ${themeClasses.subtleText}`}>
            {t.contact.label}
          </p>
          <h3 className="mt-3 text-3xl font-bold tracking-tight">{t.contact.title}</h3>
          <p className={`mt-4 max-w-3xl leading-8 ${themeClasses.softText}`}>
            {t.contact.subtitle}
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
            <div className={`rounded-4xl p-6 ${themeClasses.card}`}>
              <h4 className="text-lg font-semibold">{t.contact.roleTitle}</h4>
              <p className={`mt-3 leading-8 ${themeClasses.bodyText}`}>
                {t.contact.roleValue}
              </p>

              <h4 className="mt-6 text-lg font-semibold">
                {t.contact.availabilityTitle}
              </h4>
              <p className={`mt-3 leading-8 ${themeClasses.bodyText}`}>
                {t.contact.availabilityValue}
              </p>
            </div>

            <div className={`rounded-4xl p-6 ${themeClasses.card}`}>
              <h4 className="text-lg font-semibold">{t.contact.linksTitle}</h4>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <a
                  href={EMAIL_LINK}
                  className={`rounded-3xl border p-4 transition duration-300 hover:-translate-y-0.5 ${themeClasses.linkCard}`}
                >
                  <p className="text-sm font-semibold">{t.contact.emailLabel}</p>
                  <p className={`mt-2 break-all text-sm ${themeClasses.softText}`}>
                    {EMAIL_TEXT}
                  </p>
                </a>

                <a
                  href={YOUTUBE_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className={`rounded-3xl border p-4 transition duration-300 hover:-translate-y-0.5 ${themeClasses.linkCard}`}
                >
                  <p className="text-sm font-semibold">{t.contact.youtubeLabel}</p>
                  <p className={`mt-2 break-all text-sm ${themeClasses.softText}`}>
                    {YOUTUBE_TEXT}
                  </p>
                </a>

                <a
                  href={LINKEDIN_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className={`rounded-3xl border p-4 transition duration-300 hover:-translate-y-0.5 ${themeClasses.linkCard}`}
                >
                  <p className="text-sm font-semibold">{t.contact.linkedinLabel}</p>
                  <p className={`mt-2 break-all text-sm ${themeClasses.softText}`}>
                    {LINKEDIN_TEXT}
                  </p>
                </a>

                <a
                  href={CV_FILES[0].path}
                  onClick={downloadBilingualCv}
                  className={`rounded-3xl border p-4 transition duration-300 hover:-translate-y-0.5 ${themeClasses.linkCard}`}
                >
                  <p className="text-sm font-semibold">{t.contact.cvLabel}</p>
                  <p className={`mt-2 text-sm ${themeClasses.softText}`}>
                    EN PDF + VI PDF
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className={`border-t ${themeClasses.border}`}>
        <div className={`mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm md:flex-row md:items-center md:justify-between ${themeClasses.footerText}`}>
          <p>© 2026 Tran Ngoc Ha. {t.footer.rights}</p>
          <p>{t.footer.role}</p>
        </div>
      </footer>
    </main>
  );
}
