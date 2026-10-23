"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { copy, type Copy, type Lang } from "./content";

type State = { lang: Lang; theme: "light" | "dark"; completed: number; setLang: (lang: Lang) => void; toggleTheme: () => void; markComplete: () => void; resetProgress: () => void; t: Copy };
const Context = createContext<State | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [completed, setCompleted] = useState(0);
  useEffect(() => {
    const storedLang = localStorage.getItem("nara_lang");
    const storedTheme = localStorage.getItem("nara_theme") as "light" | "dark" | null;
    const storedProgress = Number(localStorage.getItem("nara_progress") || 0);
    if (storedLang === "id" || storedLang === "en") setLang(storedLang);
    setTheme(storedTheme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
    if (Number.isFinite(storedProgress)) setCompleted(storedProgress);
  }, []);
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem("nara_theme", theme); }, [theme]);
  useEffect(() => { localStorage.setItem("nara_lang", lang); document.documentElement.lang = lang; }, [lang]);
  const markComplete = () => setCompleted((current) => { const next = Math.min(current + 1, 6); localStorage.setItem("nara_progress", String(next)); return next; });
  const resetProgress = () => { localStorage.removeItem("nara_progress"); setCompleted(0); };
  return <Context.Provider value={{ lang, theme, completed, setLang, toggleTheme: () => setTheme((v) => v === "dark" ? "light" : "dark"), markComplete, resetProgress, t: copy[lang] }}>{children}</Context.Provider>;
}
export function useApp() { const value = useContext(Context); if (!value) throw new Error("useApp must be used inside AppProvider"); return value; }
