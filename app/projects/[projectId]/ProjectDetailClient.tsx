"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { ProjectItem } from "../../data/projects";
import Reveal from "../../components/Reveal";
import SiteHeader from "../../components/SiteHeader";
import { useStoredLanguage, useStoredTheme } from "../../lib/preferences";

type ProjectLink = {
  id: string;
  title: { ENG: string; VIE: string };
};

type Props = {
  project: ProjectItem;
  prev: ProjectLink | null;
  next: ProjectLink | null;
};

export default function ProjectDetailClient({ project, prev, next }: Props) {
  const [language, setLanguage] = useStoredLanguage();
  const [theme, setTheme] = useStoredTheme();
  const isDark = theme === "dark";

  const [startIndex, setStartIndex] = useState(0);
  const [galleryDirection, setGalleryDirection] = useState<
    "next" | "prev" | null
  >(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  useEffect(() => {
    document.documentElement.lang = language === "VIE" ? "vi" : "en";
  }, [language]);

  const visibleImages = useMemo(() => {
    return project.images.slice(startIndex, startIndex + 2);
  }, [project.images, startIndex]);

  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex + 2 < project.images.length;

  useEffect(() => {
    if (activeImageIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImageIndex(null);
      } else if (event.key === "ArrowLeft") {
        setActiveImageIndex((current) =>
          current === null
            ? null
            : (current - 1 + project.images.length) % project.images.length
        );
      } else if (event.key === "ArrowRight") {
        setActiveImageIndex((current) =>
          current === null ? null : (current + 1) % project.images.length
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImageIndex, project.images.length]);

  const text = {
    ENG: {
      back: "Back to Projects",
      challenge: "Challenge",
      approach: "Approach",
      result: "Result",
      prevProject: "Previous project",
      nextProject: "Next project",
      ctaTitle: "Interested in working together?",
      ctaBody: "Let us talk about structural BIM delivery, coordination, and standards for your next project.",
      ctaButton: "Contact me",
      detail: "Project Detail",
      location: "Location",
      role: "Role",
      type: "Type",
      period: "Period",
      scale: "Project Scale",
      stage: "Design Stage",
      lod: "Level of Development",
      highlights: "Project Highlights",
      tools: "Tools",
      prevImage: "Previous image",
      nextImage: "Next image",
      imageCounter: "Images",
      imageCounterSeparator: "of",
      gallery: "Project Gallery",
      openImage: "Open image",
      closeViewer: "Close image viewer",
      previousSingleImage: "Previous image",
      nextSingleImage: "Next image",
    },
    VIE: {
      back: "Quay lại danh sách dự án",
      challenge: "Thách thức",
      approach: "Cách làm",
      result: "Kết quả",
      prevProject: "Dự án trước",
      nextProject: "Dự án tiếp theo",
      ctaTitle: "Bạn muốn hợp tác?",
      ctaBody: "Hãy trao đổi về triển khai BIM kết cấu, phối hợp và tiêu chuẩn cho dự án tiếp theo của bạn.",
      ctaButton: "Liên hệ với tôi",
      detail: "Chi tiết dự án",
      location: "Địa điểm",
      role: "Vai trò",
      type: "Loại công việc",
      period: "Thời gian",
      scale: "Quy mô dự án",
      stage: "Giai đoạn hiện tại",
      lod: "Mức độ phát triển",
      highlights: "Điểm chính",
      tools: "Công cụ",
      prevImage: "Ảnh trước",
      nextImage: "Ảnh tiếp",
      imageCounter: "Ảnh",
      imageCounterSeparator: "/",
      gallery: "Hình ảnh dự án",
      openImage: "Mở ảnh",
      closeViewer: "Đóng trình xem ảnh",
      previousSingleImage: "Ảnh trước",
      nextSingleImage: "Ảnh tiếp",
    },
  }[language];

  const pageClasses = {
    page: isDark ? "bg-zinc-950 text-white" : "bg-zinc-50 text-zinc-900",
    softText: isDark ? "text-zinc-400" : "text-zinc-600",
    bodyText: isDark ? "text-zinc-300" : "text-zinc-700",
    subtleText: isDark ? "text-zinc-400" : "text-zinc-600",
    surface: isDark ? "bg-white/[0.03]" : "bg-white",
    heroPanel: isDark
      ? "border-white/10 bg-gradient-to-br from-white/[0.055] to-transparent"
      : "border-zinc-200 bg-gradient-to-br from-white to-zinc-100/70",
    metaCard: isDark
      ? "border-white/10 bg-black/20"
      : "border-zinc-200 bg-white/80",
    eyebrow: isDark
      ? "border-white/10 bg-white/5 text-zinc-300"
      : "border-zinc-200 bg-white text-zinc-600",
    chip: isDark
      ? "border-white/10 bg-white/5 text-zinc-200"
      : "border-zinc-200 bg-zinc-100 text-zinc-700",
    backButton: isDark
      ? "bg-white/5 text-zinc-200 hover:bg-white/10"
      : "bg-zinc-100 text-zinc-800 hover:bg-zinc-200",
    galleryButton: isDark
      ? "border-white/15 bg-white text-zinc-950 hover:bg-zinc-200 disabled:border-white/10 disabled:bg-white/5 disabled:text-zinc-600"
      : "border-zinc-900 bg-zinc-900 text-white hover:bg-zinc-700 disabled:border-zinc-200 disabled:bg-zinc-100 disabled:text-zinc-400",
    galleryCounter: isDark
      ? "border-white/10 bg-white/5 text-zinc-300"
      : "border-zinc-200 bg-white text-zinc-600",
  };

  const projectFacts = [
    { label: text.role, value: project.role[language], featured: true },
    { label: text.period, value: project.period[language] },
    { label: text.location, value: project.location[language] },
    ...(project.scale
      ? [{ label: text.scale, value: project.scale[language] }]
      : []),
    ...(project.stage
      ? [{ label: text.stage, value: project.stage[language] }]
      : []),
    ...(project.lod ? [{ label: text.lod, value: project.lod }] : []),
    { label: text.type, value: project.type[language] },
  ];

  const goPrev = () => {
    if (!canGoPrev) return;
    setGalleryDirection("prev");
    setStartIndex((prev) => Math.max(prev - 2, 0));
  };

  const goNext = () => {
    if (!canGoNext) return;
    setGalleryDirection("next");
    setStartIndex((prev) =>
      Math.min(prev + 2, Math.max(project.images.length - 2, 0))
    );
  };

  const storyCards = project.story
    ? [
        { key: "challenge", title: text.challenge, items: [project.story.challenge[language]] },
        { key: "approach", title: text.approach, items: project.story.approach[language] },
        { key: "result", title: text.result, items: project.story.result[language] },
      ]
    : [];

  const activeCaption =
    activeImageIndex === null
      ? undefined
      : project.captions?.[activeImageIndex]?.[language];

  return (
    <main className={`min-h-screen ${pageClasses.page}`}>
      <SiteHeader
        language={language}
        theme={theme}
        onLanguageChange={setLanguage}
        onThemeChange={setTheme}
      />

      <section className="mx-auto max-w-7xl px-6 pb-10 pt-8 sm:pt-10">
        <Link
          href="/#projects"
          className={`inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition ${pageClasses.backButton}`}
        >
          ← {text.back}
        </Link>

        <div className={`mt-8 rounded-[2rem] border p-6 sm:p-8 lg:p-10 ${pageClasses.heroPanel}`}>
          <p
            className={`inline-flex rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] ${pageClasses.eyebrow}`}
          >
            {text.detail}
          </p>

          <h1 className="mt-6 max-w-5xl text-4xl font-black leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            {project.title[language]}
          </h1>

          <p
            className={`mt-6 max-w-5xl text-base font-normal leading-8 sm:text-lg sm:leading-9 ${pageClasses.softText}`}
          >
            {project.description[language]}
          </p>

          <dl className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projectFacts.map((fact) => (
              <div
                key={fact.label}
                className={`rounded-2xl border p-5 ${pageClasses.metaCard}`}
              >
                <dt
                  className={`text-xs font-bold uppercase tracking-[0.08em] ${pageClasses.subtleText}`}
                >
                  {fact.label}
                </dt>
                <dd
                  className={`mt-3 text-base leading-7 ${
                    fact.featured ? "font-extrabold" : "font-semibold"
                  } ${pageClasses.bodyText}`}
                >
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {storyCards.length > 0 && (
        <Reveal as="section" className="mx-auto max-w-7xl px-6 py-6">
          <div className="grid gap-5 lg:grid-cols-3">
            {storyCards.map((card, index) => (
              <div
                key={card.key}
                className={`rounded-3xl border p-6 sm:p-8 ${pageClasses.heroPanel}`}
              >
                <p className={`text-xs font-bold uppercase tracking-[0.08em] ${pageClasses.subtleText}`}>
                  0{index + 1}
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight">{card.title}</h2>
                {card.items.length === 1 ? (
                  <p className={`mt-5 leading-8 ${pageClasses.bodyText}`}>{card.items[0]}</p>
                ) : (
                  <ul className={`mt-5 space-y-3 ${pageClasses.bodyText}`}>
                    {card.items.map((item) => (
                      <li key={item} className="flex gap-3 leading-7">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      )}

      <Reveal as="section" className="mx-auto max-w-7xl px-6 py-6">
        <div>
          <div className="mb-6 flex flex-col gap-2">
            <p className={`text-xs font-bold uppercase tracking-[0.08em] ${pageClasses.subtleText}`}>
              {text.gallery}
            </p>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {project.title[language]}
            </h2>
          </div>

          <div className="mb-5 grid grid-cols-2 items-center gap-3 sm:grid-cols-[1fr_auto_1fr]">
            <button
              type="button"
              onClick={goPrev}
              disabled={!canGoPrev}
              aria-label={text.prevImage}
              className={`col-start-1 row-start-2 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold shadow-lg transition disabled:cursor-not-allowed disabled:shadow-none sm:row-start-1 sm:w-auto sm:min-w-[130px] ${pageClasses.galleryButton}`}
            >
              <span aria-hidden="true">←</span>
              <span>{text.prevImage}</span>
            </button>

            <p
              className={`col-span-2 row-start-1 rounded-full border px-4 py-2 text-center text-sm font-medium sm:col-span-1 sm:col-start-2 ${pageClasses.galleryCounter}`}
              aria-live="polite"
            >
              {text.imageCounter} {startIndex + 1}–
              {Math.min(startIndex + 2, project.images.length)}{" "}
              {text.imageCounterSeparator} {project.images.length}
            </p>

            <button
              type="button"
              onClick={goNext}
              disabled={!canGoNext}
              aria-label={text.nextImage}
              className={`col-start-2 row-start-2 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold shadow-lg transition disabled:cursor-not-allowed disabled:shadow-none sm:col-start-3 sm:row-start-1 sm:w-auto sm:min-w-[130px] sm:justify-self-end ${pageClasses.galleryButton}`}
            >
              <span>{text.nextImage}</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>

          <div
            key={startIndex}
            className={`grid gap-6 md:grid-cols-2 ${
              galleryDirection === "next"
                ? "gallery-transition-next"
                : galleryDirection === "prev"
                  ? "gallery-transition-prev"
                  : ""
            }`}
          >
            {visibleImages.map((image, index) => (
              <button
                type="button"
                key={image}
                onClick={() => setActiveImageIndex(startIndex + index)}
                aria-label={`${text.openImage} ${startIndex + index + 1}`}
                className={`group block w-full cursor-zoom-in overflow-hidden rounded-3xl text-left shadow-xl transition hover:-translate-y-1 hover:shadow-2xl ${pageClasses.surface}`}
              >
                <Image
                  src={image}
                  alt={`${project.title[language]} ${startIndex + index + 1}`}
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {project.captions?.[startIndex + index] && (
                  <span
                    className={`block px-5 py-4 text-sm leading-6 ${pageClasses.softText}`}
                  >
                    {project.captions[startIndex + index][language]}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className={`rounded-3xl border p-6 sm:p-8 ${pageClasses.heroPanel}`}>
            <h2 className="text-2xl font-bold tracking-tight">{text.highlights}</h2>

            <ul className={`mt-6 space-y-4 ${pageClasses.bodyText}`}>
              {project.highlights[language].map((item) => (
                <li key={item} className="flex gap-3 leading-7">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-current opacity-70" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`rounded-3xl border p-6 sm:p-8 ${pageClasses.heroPanel}`}>
            <h2 className="text-2xl font-bold tracking-tight">{text.tools}</h2>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className={`rounded-full border px-4 py-2 text-sm font-bold ${pageClasses.chip}`}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-4 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/projects/${prev.id}`}
              className={`group rounded-3xl border p-6 transition hover:-translate-y-0.5 ${pageClasses.heroPanel}`}
            >
              <p className={`text-xs font-bold uppercase tracking-[0.08em] ${pageClasses.subtleText}`}>
                ← {text.prevProject}
              </p>
              <p className="mt-3 text-lg font-bold leading-snug">{prev.title[language]}</p>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/projects/${next.id}`}
              className={`group rounded-3xl border p-6 text-left transition hover:-translate-y-0.5 sm:text-right ${pageClasses.heroPanel}`}
            >
              <p className={`text-xs font-bold uppercase tracking-[0.08em] ${pageClasses.subtleText}`}>
                {text.nextProject} →
              </p>
              <p className="mt-3 text-lg font-bold leading-snug">{next.title[language]}</p>
            </Link>
          ) : (
            <div />
          )}
        </div>

        <div className={`mt-6 flex flex-col gap-5 rounded-3xl border p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8 ${pageClasses.heroPanel}`}>
          <div>
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">{text.ctaTitle}</h2>
            <p className={`mt-2 max-w-2xl leading-7 ${pageClasses.softText}`}>{text.ctaBody}</p>
          </div>
          <Link
            href="/#contact"
            className={`inline-flex min-h-11 shrink-0 items-center justify-center rounded-xl px-6 py-3 text-sm font-medium transition ${
              isDark ? "bg-white !text-black hover:bg-zinc-200" : "bg-zinc-900 !text-white hover:bg-zinc-800"
            }`}
          >
            {text.ctaButton}
          </Link>
        </div>
      </Reveal>

      {activeImageIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title[language]} — ${text.imageCounter} ${activeImageIndex + 1}`}
          className="fixed inset-0 z-[100] flex flex-col bg-black/95 p-4 backdrop-blur-md sm:p-6"
          onClick={() => setActiveImageIndex(null)}
        >
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 text-white">
            <p className="text-sm font-semibold">
              {text.imageCounter} {activeImageIndex + 1}{" "}
              {text.imageCounterSeparator} {project.images.length}
              {activeCaption && (
                <span className="ml-3 font-normal text-white/70">
                  — {activeCaption}
                </span>
              )}
            </p>
            <button
              type="button"
              onClick={() => setActiveImageIndex(null)}
              autoFocus
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/20"
              aria-label={text.closeViewer}
            >
              <span>{text.closeViewer}</span>
              <span aria-hidden="true">✕</span>
            </button>
          </div>

          <div className="relative mx-auto flex min-h-0 w-full max-w-7xl flex-1 items-center justify-center py-4">
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setActiveImageIndex(
                  (activeImageIndex - 1 + project.images.length) %
                    project.images.length
                );
              }}
              className="absolute left-0 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/70 text-2xl font-bold text-white shadow-xl transition hover:bg-white hover:text-black sm:left-3 sm:h-14 sm:w-14"
              aria-label={text.previousSingleImage}
            >
              ←
            </button>

            <Image
              src={project.images[activeImageIndex]}
              alt={`${project.title[language]} ${activeImageIndex + 1}`}
              width={1800}
              height={1200}
              className="max-h-[78vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
              sizes="100vw"
              priority
              onClick={(event) => event.stopPropagation()}
            />

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setActiveImageIndex(
                  (activeImageIndex + 1) % project.images.length
                );
              }}
              className="absolute right-0 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/70 text-2xl font-bold text-white shadow-xl transition hover:bg-white hover:text-black sm:right-3 sm:h-14 sm:w-14"
              aria-label={text.nextSingleImage}
            >
              →
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
