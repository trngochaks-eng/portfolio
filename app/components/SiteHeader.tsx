"use client";

import Link from "next/link";
import type { Language } from "../data/projects";
import type { ThemeMode } from "../lib/preferences";

type Props = {
  language: Language;
  theme: ThemeMode;
  onLanguageChange: (value: Language) => void;
  onThemeChange: (value: ThemeMode) => void;
};

const NAV = [
  { id: "home", ENG: "Home", VIE: "Trang chủ" },
  { id: "about", ENG: "About", VIE: "Giới thiệu" },
  { id: "skills", ENG: "Skills", VIE: "Kỹ năng" },
  { id: "projects", ENG: "Projects", VIE: "Dự án" },
  { id: "tools", ENG: "Tools", VIE: "Công cụ" },
  { id: "contact", ENG: "Contact", VIE: "Liên hệ" },
] as const;

export default function SiteHeader({
  language,
  theme,
  onLanguageChange,
  onThemeChange,
}: Props) {
  const isDark = theme === "dark";

  const classes = {
    header: isDark
      ? "border-white/10 bg-zinc-950/80"
      : "border-zinc-200 bg-white/80",
    navText: isDark
      ? "text-zinc-400 hover:text-white"
      : "text-zinc-500 hover:text-zinc-950",
    switchBase: isDark
      ? "border-white/10 bg-white/5 text-zinc-300"
      : "border-zinc-200 bg-white text-zinc-700",
    switchActive: isDark ? "bg-white text-black" : "bg-zinc-900 text-white",
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur ${classes.header}`}
    >
      <div className="mx-auto flex max-w-7xl items-center px-6 py-4">
        <Link
          href="/#home"
          className={`text-sm font-bold tracking-[0.14em] ${
            isDark ? "text-zinc-300" : "text-zinc-800"
          }`}
        >
          TNH
        </Link>

        <nav className="ml-12 hidden gap-6 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.id}
              href={`/#${item.id}`}
              className={`text-sm transition ${classes.navText}`}
            >
              {item[language]}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <div
            className={`flex items-center rounded-full border p-1 ${classes.switchBase}`}
          >
            {(["ENG", "VIE"] as const).map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => onLanguageChange(value)}
                aria-pressed={language === value}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                  language === value ? classes.switchActive : ""
                }`}
              >
                {value}
              </button>
            ))}
          </div>

          <div
            className={`flex items-center rounded-full border p-1 ${classes.switchBase}`}
          >
            <button
              type="button"
              onClick={() => onThemeChange("light")}
              aria-label="Light mode"
              aria-pressed={theme === "light"}
              title="Light mode"
              className={`rounded-full px-3 py-1 text-sm font-semibold transition ${
                theme === "light" ? classes.switchActive : ""
              }`}
            >
              ☀
            </button>
            <button
              type="button"
              onClick={() => onThemeChange("dark")}
              aria-label="Dark mode"
              aria-pressed={theme === "dark"}
              title="Dark mode"
              className={`rounded-full px-3 py-1 text-sm font-semibold transition ${
                theme === "dark" ? classes.switchActive : ""
              }`}
            >
              ☾
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
