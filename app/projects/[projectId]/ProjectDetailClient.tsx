"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ImageKind, ProjectItem } from "../../data/projects";
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

  const [activeKind, setActiveKind] = useState<ImageKind | "all">("all");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const activeThumbRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    document.documentElement.lang = language === "VIE" ? "vi" : "en";
  }, [language]);

  const kindOf = (index: number): ImageKind =>
    project.imageKinds?.[index] ?? "model";

  const kindCounts = useMemo(() => {
    const counts = new Map<ImageKind, number>();
    project.images.forEach((_, index) => {
      const kind = project.imageKinds?.[index] ?? "model";
      counts.set(kind, (counts.get(kind) ?? 0) + 1);
    });
    return counts;
  }, [project.images, project.imageKinds]);

  // Global indices of the images shown under the current tab.
  const visibleIndices = useMemo(
    () =>
      project.images
        .map((_, index) => index)
        .filter(
          (index) =>
            activeKind === "all" ||
            (project.imageKinds?.[index] ?? "model") === activeKind
        ),
    [project.images, project.imageKinds, activeKind]
  );

  const stepImage = (direction: 1 | -1) => {
    setActiveImageIndex((current) => {
      if (current === null || visibleIndices.length === 0) return current;
      const position = visibleIndices.indexOf(current);
      const nextPosition =
        (position + direction + visibleIndices.length) % visibleIndices.length;
      return visibleIndices[nextPosition];
    });
  };

  useEffect(() => {
    if (activeImageIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImageIndex(null);
      } else if (event.key === "ArrowLeft") {
        stepImage(-1);
      } else if (event.key === "ArrowRight") {
        stepImage(1);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
    // stepImage only depends on visibleIndices.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeImageIndex, visibleIndices]);

  useEffect(() => {
    activeThumbRef.current?.scrollIntoView({
      block: "nearest",
      inline: "center",
      behavior: "smooth",
    });
  }, [activeImageIndex]);

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
      imageCounter: "Image",
      imageCounterSeparator: "of",
      imagesCount: "images",
      gallery: "Project Gallery",
      galleryFilter: "Filter gallery",
      kinds: {
        all: "All",
        model: "3D model",
        coordination: "Coordination",
        documentation: "Documentation",
      },
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
      imageCounter: "Ảnh",
      imageCounterSeparator: "/",
      imagesCount: "ảnh",
      gallery: "Hình ảnh dự án",
      galleryFilter: "Lọc hình ảnh",
      kinds: {
        all: "Tất cả",
        model: "Mô hình 3D",
        coordination: "Phối hợp",
        documentation: "Hồ sơ",
      },
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
    tabActive: isDark
      ? "border-white bg-white text-zinc-950"
      : "border-zinc-900 bg-zinc-900 text-white",
    tabIdle: isDark
      ? "border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10"
      : "border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100",
    tile: isDark
      ? "border-white/10 bg-white/[0.03]"
      : "border-zinc-200 bg-white",
    galleryCounter: isDark ? "text-zinc-400" : "text-zinc-500",
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

  const kindOrder: ImageKind[] = ["model", "coordination", "documentation"];
  const galleryTabs: { key: ImageKind | "all"; count: number }[] =
    kindCounts.size > 1
      ? [
          { key: "all", count: project.images.length },
          ...kindOrder
            .filter((kind) => kindCounts.has(kind))
            .map((kind) => ({ key: kind, count: kindCounts.get(kind) ?? 0 })),
        ]
      : [];

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
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {text.gallery}
            </h2>
            <p className={`text-sm font-medium ${pageClasses.galleryCounter}`}>
              {visibleIndices.length} {text.imagesCount}
            </p>
          </div>

          {galleryTabs.length > 0 && (
            <div
              role="group"
              aria-label={text.galleryFilter}
              className="mb-6 flex flex-wrap gap-2"
            >
              {galleryTabs.map((tab) => {
                const isActive = activeKind === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveKind(tab.key)}
                    className={`inline-flex min-h-10 items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold transition ${
                      isActive ? pageClasses.tabActive : pageClasses.tabIdle
                    }`}
                  >
                    {text.kinds[tab.key]}
                    <span className="text-xs tabular-nums opacity-60">
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          <div
            key={activeKind}
            className="gallery-fade grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {visibleIndices.map((imageIndex, position) => {
              const featured = position === 0 && visibleIndices.length > 2;
              const caption = project.captions?.[imageIndex]?.[language];
              return (
                <button
                  type="button"
                  key={project.images[imageIndex]}
                  onClick={() => setActiveImageIndex(imageIndex)}
                  aria-label={`${text.openImage} ${imageIndex + 1}${
                    caption ? `: ${caption}` : ""
                  }`}
                  className={`group flex w-full cursor-zoom-in flex-col overflow-hidden rounded-3xl border text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl ${
                    pageClasses.tile
                  } ${featured ? "sm:col-span-2 lg:row-span-2" : ""}`}
                >
                  <span
                    className={`relative block w-full overflow-hidden bg-white ${
                      featured
                        ? "aspect-[16/10] lg:aspect-auto lg:min-h-[22rem] lg:flex-1"
                        : "aspect-[16/10]"
                    }`}
                  >
                    <Image
                      src={project.images[imageIndex]}
                      alt={caption ?? `${project.title[language]} ${imageIndex + 1}`}
                      fill
                      className="object-contain transition duration-500 group-hover:scale-[1.03]"
                      sizes={
                        featured
                          ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                          : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      }
                      priority={position === 0}
                    />
                    {galleryTabs.length > 0 && activeKind === "all" && (
                      <span className="absolute left-3 top-3 rounded-full bg-zinc-900/80 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
                        {text.kinds[kindOf(imageIndex)]}
                      </span>
                    )}
                  </span>
                  {caption && (
                    <span
                      className={`block px-5 py-4 text-sm leading-6 ${
                        featured ? "" : "line-clamp-2"
                      } ${pageClasses.softText}`}
                    >
                      {caption}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-7xl px-6 py-12">
        {/* Projects with a challenge/approach/result story already cover their highlights. */}
        {!project.story && (
          <div className={`mb-8 rounded-3xl border p-6 sm:p-8 ${pageClasses.heroPanel}`}>
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
        )}

        <div className="flex flex-wrap items-center gap-2">
          <h2
            className={`mr-2 text-xs font-bold uppercase tracking-[0.08em] ${pageClasses.subtleText}`}
          >
            {text.tools}
          </h2>
          {project.tools.map((tool) => (
            <span
              key={tool}
              className={`rounded-full border px-3 py-1 text-xs font-semibold ${pageClasses.chip}`}
            >
              {tool}
            </span>
          ))}
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
              {text.imageCounter} {visibleIndices.indexOf(activeImageIndex) + 1}{" "}
              {text.imageCounterSeparator} {visibleIndices.length}
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
                stepImage(-1);
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
                stepImage(1);
              }}
              className="absolute right-0 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/70 text-2xl font-bold text-white shadow-xl transition hover:bg-white hover:text-black sm:right-3 sm:h-14 sm:w-14"
              aria-label={text.nextSingleImage}
            >
              →
            </button>
          </div>

          {visibleIndices.length > 1 && (
            <div
              className="mx-auto flex w-full max-w-7xl justify-start gap-2 overflow-x-auto pb-1 sm:justify-center"
              onClick={(event) => event.stopPropagation()}
            >
              {visibleIndices.map((imageIndex) => {
                const isActive = imageIndex === activeImageIndex;
                return (
                  <button
                    key={project.images[imageIndex]}
                    ref={isActive ? activeThumbRef : undefined}
                    type="button"
                    onClick={() => setActiveImageIndex(imageIndex)}
                    aria-label={`${text.openImage} ${imageIndex + 1}`}
                    aria-current={isActive}
                    className={`relative h-14 w-[5.5rem] shrink-0 overflow-hidden rounded-lg bg-white transition sm:h-16 sm:w-24 ${
                      isActive
                        ? "opacity-100 ring-2 ring-white"
                        : "opacity-45 hover:opacity-90"
                    }`}
                  >
                    <Image
                      src={project.images[imageIndex]}
                      alt=""
                      fill
                      className="object-contain"
                      sizes="96px"
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}
    </main>
  );
}
