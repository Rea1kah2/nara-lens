"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { copy, type Copy, type Lang } from "./content";

export const activityIds = ["feed", "lab", "evidence", "quiz"] as const;
export type ActivityId = (typeof activityIds)[number];

type State = {
  lang: Lang;
  theme: "light" | "dark";
  glassIntensity: number;
  completedActivities: readonly ActivityId[];
  setLang: (lang: Lang) => void;
  toggleTheme: () => void;
  setTheme: (theme: "light" | "dark") => void;
  setGlassIntensity: (intensity: number) => void;
  markComplete: (activity: ActivityId) => void;
  resetProgress: () => void;
  t: Copy;
};

const Context = createContext<State | null>(null);
const progressStorageKey = "nara_completed_activities";
const glassStorageKey = "nara_glass_intensity";

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [glassIntensity, setGlassIntensityState] = useState<number>(0.52);
  const [completedActivities, setCompletedActivities] = useState<ActivityId[]>([]);
  const [progressLoaded, setProgressLoaded] = useState(false);

  useEffect(() => {
    const storedLang = localStorage.getItem("nara_lang");
    const storedTheme = localStorage.getItem("nara_theme");
    const storedIntensity = localStorage.getItem(glassStorageKey);
    const storedActivities = localStorage.getItem(progressStorageKey);

    if (storedLang === "id" || storedLang === "en") setLang(storedLang);

    const initialTheme: "light" | "dark" =
      storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;

    const parsedIntensity = storedIntensity ? parseFloat(storedIntensity) : 0.52;
    const validIntensity = Number.isFinite(parsedIntensity)
      ? Math.max(0.0, Math.min(1.0, parsedIntensity))
      : 0.52;
    setGlassIntensityState(validIntensity);
    document.documentElement.style.setProperty("--glass-intensity", String(validIntensity));

    if (storedActivities) {
      try {
        const parsed: unknown = JSON.parse(storedActivities);
        if (Array.isArray(parsed)) {
          setCompletedActivities(
            activityIds.filter((activity) => parsed.includes(activity)),
          );
        }
      } catch {
        localStorage.removeItem(progressStorageKey);
      }
    }
    setProgressLoaded(true);
  }, []);

  useEffect(() => {
    if (progressLoaded) {
      localStorage.setItem(progressStorageKey, JSON.stringify(completedActivities));
    }
  }, [completedActivities, progressLoaded]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("nara_theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("nara_lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setGlassIntensity = (value: number) => {
    const clamped = Math.max(0.0, Math.min(1.0, value));
    setGlassIntensityState(clamped);
    document.documentElement.style.setProperty("--glass-intensity", String(clamped));
    try {
      localStorage.setItem(glassStorageKey, String(clamped));
    } catch {}
  };

  const markComplete = (activity: ActivityId) => {
    setCompletedActivities((current) => {
      if (current.includes(activity)) return current;
      return [...current, activity];
    });
  };

  const resetProgress = () => {
    localStorage.removeItem(progressStorageKey);
    localStorage.removeItem("nara_progress");
    setCompletedActivities([]);
  };

  return (
    <Context.Provider
      value={{
        lang,
        theme,
        glassIntensity,
        completedActivities,
        setLang,
        toggleTheme: () => setTheme((current) => (current === "dark" ? "light" : "dark")),
        setTheme,
        setGlassIntensity,
        markComplete,
        resetProgress,
        t: copy[lang],
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useApp() {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
