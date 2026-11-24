"use client";

import Image from "next/image";
import Link from "next/link";
import { type MouseEvent, useEffect } from "react";
import { projects } from "./data/projects";
import { toolGroups, toolProducts, toolStats } from "./data/tools";
import Reveal from "./components/Reveal";
import SiteHeader from "./components/SiteHeader";
import { useStoredLanguage, useStoredTheme } from "./lib/preferences";

type ContentItem = {
  nav: {
    home: string;
    about: string;
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
    softwareTitle: string;
  };
  projects: {
    label: string;
    title: string;
    subtitle: string;
    detailButton: string;
    moreTitle: string;
  };
  impact: { value: string; label: string }[];
  toolsSection: {
    label: string;
    title: string;
    subtitle: string;
    groupsTitle: string;
    productsTitle: string;
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
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

const FEATURED_PROJECT_IDS = ["project3", "project4", "project7"];

const content: ContentSchema = {
  ENG: {
    nav: {
      home: "Home",
      about: "About",
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
      body: "Structural engineer with three years of BIM project delivery. I lead a three-person structural Revit team, own the templates, BEP naming rules and revision control, and sign off model and documentation quality before every issue. I coordinate with architecture and MEP in Navisworks and automate routine work with Dynamo and my own Revit API tools.",
      softwareTitle: "Software",
    },
    projects: {
      label: "Projects",
      title: "Selected Project Experience",
      subtitle:
        "Selected projects showing structural BIM leadership, multidisciplinary coordination, and documentation issued directly from the model.",
      detailButton: "View Details",
      moreTitle: "More projects",
    },
    impact: [
      { value: "3", label: "Revit modelers led" },
      { value: "175,000 m²", label: "Largest project delivered" },
      { value: "40+", label: "In-house Revit commands" },
      { value: "7", label: "Projects worked on" },
    ],
    toolsSection: {
      label: "Tools & Automation",
      title: "In-house Revit Tools",
      subtitle:
        "I build my own Revit add-ins (C#, Revit API) to remove repetitive work and enforce BIM standards, connected with Excel and CAD.",
      groupsTitle: "TNH Tool – 40+ commands",
      productsTitle: "Related tools",
    },
    contact: {
      label: "Contact",
      title: "Let's Connect",
      subtitle:
        "Use the links below to discuss professional opportunities or view my profiles and CV.",
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
      body: "Kỹ sư kết cấu với 3 năm kinh nghiệm triển khai dự án BIM. Tôi quản lý team Revit kết cấu 3 người, quyết định template, quy tắc đặt tên theo BEP, kiểm soát revision và chốt chất lượng mô hình, hồ sơ trước mỗi lần phát hành. Tôi phối hợp với Kiến trúc và MEP trên Navisworks, tự động hóa công việc lặp lại bằng Dynamo và các công cụ Revit API tự phát triển.",
      softwareTitle: "Phần mềm",
    },
    projects: {
      label: "Dự án",
      title: "Kinh nghiệm dự án thực tế",
      subtitle:
        "Các dự án tiêu biểu thể hiện năng lực dẫn dắt BIM kết cấu, phối hợp đa bộ môn và phát hành hồ sơ trực tiếp từ mô hình.",
      detailButton: "Xem chi tiết",
      moreTitle: "Các dự án khác",
    },
    impact: [
      { value: "3", label: "Thành viên Revit dẫn dắt" },
      { value: "175.000 m²", label: "Quy mô dự án lớn nhất" },
      { value: "40+", label: "Lệnh Revit tự phát triển" },
      { value: "7", label: "Dự án đã tham gia" },
    ],
    toolsSection: {
      label: "Công cụ & Tự động hóa",
      title: "Công cụ Revit tự phát triển",
      subtitle:
        "Tôi tự lập trình các add-in Revit (C#, Revit API) để loại bỏ công việc lặp lại và đảm bảo tiêu chuẩn BIM, kết nối với Excel và CAD.",
      groupsTitle: "TNH Tool – hơn 40 lệnh",
      productsTitle: "Công cụ liên quan",
    },
    contact: {
      label: "Liên hệ",
      title: "Kết nối với tôi",
      subtitle:
        "Bạn có thể truy cập trực tiếp các kênh liên hệ và hồ sơ của tôi qua nhóm liên kết bên dưới.",
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

export default function Home() {
  const [language, setLanguage] = useStoredLanguage();
  const [theme, setTheme] = useStoredTheme();

  const t = content[language];
  const isDark = theme === "dark";
  const featuredProjects = projects.filter((project) =>
    FEATURED_PROJECT_IDS.includes(project.id)
  );
  const otherProjects = projects.filter(
    (project) => !FEATURED_PROJECT_IDS.includes(project.id)
  );

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

  return (
    <main className={`min-h-screen ${themeClasses.page}`}>
      <SiteHeader
        language={language}
        theme={theme}
        onLanguageChange={setLanguage}
        onThemeChange={setTheme}
      />

      <section id="home" className={`border-b ${themeClasses.border}`}>
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


      <Reveal as="section" id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <p className={`text-sm font-bold uppercase tracking-[0.08em] ${themeClasses.subtleText}`}>
          {t.projects.label}
        </p>
        <h3 className="mt-3 text-3xl font-bold tracking-tight">{t.projects.title}</h3>
        <p className={`mt-4 max-w-5xl leading-8 ${themeClasses.softText}`}>
          {t.projects.subtitle}
        </p>

        <div className="mt-10 space-y-10">
          {featuredProjects.map((project) => (
            <Reveal
              as="article"
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

                <div className="flex flex-col justify-center">
                  <p className={`text-xs font-bold uppercase tracking-[0.08em] ${themeClasses.subtleText}`}>
                    {project.period[language]} · {project.type[language]}
                  </p>

                  <h4 className="mt-3 text-2xl font-bold tracking-tight">
                    {project.title[language]}
                  </h4>

                  <p className={`mt-3 text-sm leading-7 ${themeClasses.bodyText}`}>
                    <span className="font-semibold">{project.role[language]}</span>
                    {project.scale ? ` · ${project.scale[language]}` : ""}
                  </p>

                  <p className={`mt-3 leading-7 ${themeClasses.softText}`}>
                    {project.description[language]}
                  </p>

                  {(project.stage || project.lod) && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stage && (
                        <span className={`rounded-full border px-3 py-1 text-xs font-bold ${themeClasses.skillTag}`}>
                          {project.stage[language]}
                        </span>
                      )}
                      {project.lod && (
                        <span className={`rounded-full border px-3 py-1 text-xs font-bold ${themeClasses.skillTag}`}>
                          {project.lod}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="mt-7">
                    <Link
                      href={`/projects/${project.id}`}
                      className={`inline-flex min-w-[180px] items-center justify-center rounded-xl px-6 py-3 text-sm font-medium transition ${themeClasses.primaryButton}`}
                    >
                      {t.projects.detailButton}
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <h4 className="mt-16 text-sm font-bold uppercase tracking-[0.08em]">
          {t.projects.moreTitle}
        </h4>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {otherProjects.map((project) => (
            <Reveal
              as="article"
              key={project.id}
              className={`group overflow-hidden rounded-4xl transition duration-300 ${themeClasses.card} ${themeClasses.cardHover}`}
            >
              <Link href={`/projects/${project.id}`} className="block">
                <div className={`overflow-hidden ${themeClasses.imageFrame}`}>
                  <Image
                    src={project.images[0]}
                    alt={project.title[language]}
                    width={1200}
                    height={800}
                    className="aspect-[3/2] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <p className={`text-xs font-bold uppercase tracking-[0.08em] ${themeClasses.subtleText}`}>
                    {project.period[language]} · {project.type[language]}
                  </p>
                  <h4 className="mt-3 text-xl font-bold tracking-tight">
                    {project.title[language]}
                  </h4>
                  <p className={`mt-3 text-sm leading-7 ${themeClasses.bodyText}`}>
                    {project.role[language]}
                    {project.scale ? ` · ${project.scale[language]}` : ""}
                  </p>
                  <span className="mt-5 inline-flex text-sm font-semibold underline-offset-4 group-hover:underline">
                    {t.projects.detailButton} →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" id="about" className={themeClasses.altSection}>
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-[180px_1fr] md:gap-12">
          <div>
            <p className={`text-sm font-bold uppercase tracking-[0.08em] ${themeClasses.subtleText}`}>
              {t.about.label}
            </p>
            <h3 className="mt-3 text-3xl font-bold tracking-tight">{t.about.title}</h3>
          </div>

          <div>
            <p className={`max-w-3xl leading-8 ${themeClasses.bodyText}`}>{t.about.body}</p>

            <h4 className="mt-8 text-sm font-bold uppercase tracking-[0.08em]">
              {t.about.softwareTitle}
            </h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {softwareSkills.map((skill) => (
                <span
                  key={skill}
                  className={`rounded-full border px-3 py-1.5 text-sm ${themeClasses.skillTag}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" id="tools">
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
          </div>

          <h4 className="mt-10 text-sm font-bold uppercase tracking-[0.08em]">
            {t.toolsSection.groupsTitle}
          </h4>
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {toolGroups.map((group) => (
              <div
                key={group.title.ENG}
                className={`rounded-3xl border p-5 ${themeClasses.linkCard}`}
              >
                <p className="font-semibold">{group.title[language]}</p>
                <p className={`mt-2 text-sm leading-6 ${themeClasses.bodyText}`}>
                  {group.description[language]}
                </p>
              </div>
            ))}
          </div>

          <h4 className="mt-10 text-sm font-bold uppercase tracking-[0.08em]">
            {t.toolsSection.productsTitle}
          </h4>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {toolProducts.map((product) => (
              <div
                key={product.name}
                className={`rounded-3xl border p-5 ${themeClasses.linkCard}`}
              >
                <p className="font-bold">
                  {product.name}
                  <span className={`ml-2 text-sm font-normal ${themeClasses.subtleText}`}>
                    {product.tagline[language]}
                  </span>
                </p>
                <p className={`mt-2 text-sm leading-6 ${themeClasses.bodyText}`}>
                  {product.description[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" id="contact" className={`border-t ${themeClasses.border}`}>
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
              <h4 className="text-lg font-semibold">
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
      </Reveal>

      <footer className={`border-t ${themeClasses.border}`}>
        <div className={`mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm md:flex-row md:items-center md:justify-between ${themeClasses.footerText}`}>
          <p>© 2026 Tran Ngoc Ha. {t.footer.rights}</p>
          <p>{t.footer.role}</p>
        </div>
      </footer>
    </main>
  );
}
