"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Sliders, X, Sparkles, Languages, Server } from "lucide-react";
import { useApp } from "@/lib/state";
import { checkBackendHealth } from "@/lib/api";

export function FloatingGlassControl() {
  const { theme, toggleTheme, setTheme, lang, setLang, glassIntensity, setGlassIntensity } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [backendOnline, setBackendOnline] = useState<boolean | null>(null);

  useEffect(() => {
    checkBackendHealth().then((res) => {
      setBackendOnline(res.online);
    });
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50 print:hidden flex flex-col items-end gap-2">
      {/* Floating Action Button Bar */}
      <div className="flex items-center gap-1.5 p-1 rounded-full glass shadow-lg backdrop-blur-xl border border-[var(--line)] bg-[rgb(var(--surface)/0.75)]">
        {/* Quick Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-[rgb(var(--surface)/0.9)] text-[var(--text)] transition-all active:scale-90"
          title={theme === "dark" ? (lang === "en" ? "Switch to Light Mode" : "Ganti ke Mode Terang") : (lang === "en" ? "Switch to Dark Mode" : "Ganti ke Mode Gelap")}
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? (
            <Sun size={17} className="text-amber-400 animate-pulse" />
          ) : (
            <Moon size={17} className="text-slate-700" />
          )}
        </button>

        {/* Sliders Button for Settings Panel */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`p-2 rounded-full transition-all active:scale-90 ${
            isOpen ? "bg-[var(--teal)] text-white shadow-sm" : "hover:bg-[rgb(var(--surface)/0.9)] text-[var(--muted)]"
          }`}
          title={lang === "en" ? "Liquid Glass & Platform Preferences" : "Pengaturan Liquid Glass & Preferensi"}
          aria-label="Settings"
        >
          <Sliders size={17} />
        </button>
      </div>

      {/* Floating Preferences Popup */}
      {isOpen && (
        <div
          className="w-80 glass glass-thick p-5 rounded-[24px] shadow-2xl border border-[var(--line)] bg-[rgb(var(--surface)/0.92)] flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[var(--separator)] pb-2.5">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-[var(--teal)]" />
              <span className="font-display text-xs font-bold uppercase tracking-wider text-[var(--text)]">
                {lang === "en" ? "Display & Glass Settings" : "Tampilan & Liquid Glass"}
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-[rgb(var(--surface)/0.8)] text-[var(--muted)] hover:text-[var(--text)] transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--muted)]">
              <Languages size={14} className="text-[var(--teal)]" />
              <span>{lang === "en" ? "Language" : "Bahasa"}</span>
            </div>
            <div className="inline-flex p-1 rounded-full border border-[var(--line)] bg-[rgb(var(--surface-soft)/0.6)]">
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  lang === "en"
                    ? "bg-[var(--teal)] text-white shadow-sm"
                    : "text-[var(--muted)] hover:text-[var(--text)]"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLang("id")}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  lang === "id"
                    ? "bg-[var(--teal)] text-white shadow-sm"
                    : "text-[var(--muted)] hover:text-[var(--text)]"
                }`}
              >
                Indonesia
              </button>
            </div>
          </div>

          {/* Theme Mode Switcher */}
          <div className="flex items-center justify-between border-t border-[var(--separator)] pt-3">
            <span className="text-xs font-semibold text-[var(--muted)]">
              {lang === "en" ? "Theme Mode" : "Mode Tema"}
            </span>
            <div className="inline-flex p-1 rounded-full border border-[var(--line)] bg-[rgb(var(--surface-soft)/0.6)]">
              <button
                onClick={() => theme !== "light" && setTheme("light")}
                className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  theme === "light"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-[var(--muted)] hover:text-[var(--text)]"
                }`}
              >
                <Sun size={13} className="text-amber-500" />
                <span>Light</span>
              </button>
              <button
                onClick={() => theme !== "dark" && setTheme("dark")}
                className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  theme === "dark"
                    ? "bg-slate-800 text-white shadow-sm"
                    : "text-[var(--muted)] hover:text-[var(--text)]"
                }`}
              >
                <Moon size={13} className="text-indigo-400" />
                <span>Dark</span>
              </button>
            </div>
          </div>

          {/* Slider Intensitas Kaca Cair (Liquid Glass) */}
          <div className="flex flex-col gap-1.5 border-t border-[var(--separator)] pt-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[var(--muted)]">
                {lang === "en" ? "Liquid Glass Intensity" : "Intensitas Kaca Cair"}
              </span>
              <span className="font-mono text-xs font-bold text-[var(--teal)]">
                {Math.round(glassIntensity * 100)}%
              </span>
            </div>

            <input
              type="range"
              min="0.0"
              max="1.0"
              step="0.05"
              value={glassIntensity}
              onChange={(e) => setGlassIntensity(parseFloat(e.target.value))}
              className="w-full accent-[var(--teal)] cursor-pointer h-1.5 rounded-lg bg-[rgb(var(--surface-soft)/1)]"
            />

            <div className="flex justify-between text-[10px] text-[var(--muted)] font-medium">
              <span>{lang === "en" ? "Clear (0%)" : "Bening (0%)"}</span>
              <span>{lang === "en" ? "Translucent" : "Transparan"}</span>
              <span>{lang === "en" ? "Frost (100%)" : "Pekat (100%)"}</span>
            </div>
          </div>

          {/* Visual Glass Preview Card */}
          <div className="p-3 rounded-2xl glass flex items-center justify-between text-xs border border-[var(--line)]">
            <span className="font-medium text-[var(--text)] text-[11px]">
              {lang === "en" ? "Live Glass Feel" : "Sensasi Kaca Nyata"}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-[var(--teal-soft)] text-[var(--teal-strong)] font-bold text-[10px] uppercase tracking-wider">
              {glassIntensity > 0.7 ? "High Frost" : glassIntensity < 0.3 ? "Ultra Clear" : "Balanced Glass"}
            </span>
          </div>

          {/* Backend API Status Indicator */}
          <div className="border-t border-[var(--separator)] pt-3 flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-1.5 text-[var(--muted)]">
              <Server size={13} className="text-[var(--teal)]" />
              <span>{lang === "en" ? "Backend API" : "Layanan Backend"}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span
                className={`h-2 w-2 rounded-full ${
                  backendOnline === true
                    ? "bg-emerald-500 animate-pulse"
                    : backendOnline === false
                    ? "bg-slate-400"
                    : "bg-amber-400 animate-ping"
                }`}
              />
              <span className="font-medium text-[var(--text)] text-[10.5px]">
                {backendOnline === true
                  ? (lang === "en" ? "Connected (Port 4000)" : "Terhubung (Port 4000)")
                  : backendOnline === false
                  ? (lang === "en" ? "Local Mode (Curated)" : "Mode Lokal (Terkurasi)")
                  : (lang === "en" ? "Checking..." : "Memeriksa...")}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
