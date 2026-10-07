"use client";

import { useSyncExternalStore } from "react";
import type { Language } from "../data/projects";

export type ThemeMode = "dark" | "light";

const STORAGE_KEYS = {
  language: "tnh_portfolio_language",
  theme: "tnh_portfolio_theme",
} as const;

const INTERNAL_STORAGE_EVENT = "tnh-storage-change";

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

export function useStoredLanguage(): readonly [Language, (value: Language) => void] {
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

export function useStoredTheme(): readonly [ThemeMode, (value: ThemeMode) => void] {
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
