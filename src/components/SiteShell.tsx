"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Moon, Sun, Compass } from "lucide-react";
import { useApp } from "@/lib/state";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const { t, lang, setLang, theme, toggleTheme } = useApp();
  const pathname = usePathname();

  return (
    <div className="min-h-screen mesh flex flex-col justify-between selection:bg-[var(--accent)] selection:text-white">
      {/* iOS Floating Island Header */}
      <header className="sticky top-0 z-30 w-full border-b border-[var(--line)] bg-[var(--bg)]/75 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-3.5">
          {/* Brand Logo & Title */}
          <Link
            href="/"
            className="focus-ring group flex shrink-0 items-center gap-3 rounded-2xl"
          >
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-sm p-1">
              <Image
                src="/logo.png"
                alt="NaraLens Logo"
                width={36}
                height={36}
                className="h-full w-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-extrabold tracking-tight text-[var(--text)] sm:text-lg">
                Nara<span className="text-[var(--accent)]">Lens</span>
              </span>
              <span className="hidden text-[10px] font-semibold text-[var(--muted)] tracking-wider sm:inline-block">
                POLITICAL LITERACY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-1 rounded-full border border-[var(--line)] bg-[rgb(var(--surface)/0.5)] p-1.5 shadow-sm lg:flex">
            {t.nav.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`focus-ring relative rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? "bg-[var(--accent)] text-white shadow-sm shadow-blue-500/20"
                      : "text-[var(--muted)] hover:text-[var(--text)] hover:bg-[rgb(var(--surface)/0.6)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Controls: Language Segmented & Dark Mode Toggle */}
          <div className="flex items-center gap-2">
            {/* iOS Segmented Control for Language */}
            <div className="flex items-center rounded-full border border-[var(--line)] bg-[rgb(var(--surface)/0.6)] p-1 shadow-sm">
              <button
                type="button"
                className={`focus-ring rounded-full px-2.5 py-1 text-xs font-extrabold transition-all duration-200 ${
                  lang === "en"
                    ? "bg-[var(--accent)] text-white shadow-sm"
                    : "text-[var(--muted)] hover:text-[var(--text)]"
                }`}
                onClick={() => setLang("en")}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                className={`focus-ring rounded-full px-2.5 py-1 text-xs font-extrabold transition-all duration-200 ${
                  lang === "id"
                    ? "bg-[var(--accent)] text-white shadow-sm"
                    : "text-[var(--muted)] hover:text-[var(--text)]"
                }`}
                onClick={() => setLang("id")}
                aria-label="Switch to Bahasa Indonesia"
              >
                ID
              </button>
            </div>

            {/* Dark Mode Switcher */}
            <button
              type="button"
              className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] bg-[rgb(var(--surface)/0.6)] text-[var(--text)] shadow-sm transition-all hover:bg-[rgb(var(--surface)/0.9)] active:scale-95"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {theme === "dark" ? (
                <Sun size={16} className="text-amber-400" />
              ) : (
                <Moon size={16} className="text-slate-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Horizontal Navigation Strip */}
        <div className="flex gap-2 overflow-x-auto px-4 pb-3 pt-1 lg:hidden no-scrollbar">
          {t.nav.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring shrink-0 rounded-full px-3.5 py-1 text-xs font-bold transition-all ${
                  isActive
                    ? "bg-[var(--accent)] text-white shadow-sm"
                    : "border border-[var(--line)] bg-[rgb(var(--surface)/0.5)] text-[var(--muted)] hover:text-[var(--text)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </header>

      {/* Main Page Area */}
      <div className="flex-1">{children}</div>

      {/* iOS Frosted Footer */}
      <footer className="mt-20 border-t border-[var(--line)] bg-[rgb(var(--surface)/0.4)] backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-base font-extrabold text-[var(--text)]">
                Nara<span className="text-[var(--accent)]">Lens</span>
              </span>
              <span className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-bold text-[var(--accent)]">
                Prototype v0.2
              </span>
            </div>
            <p className="text-xs text-[var(--muted)]">{t.tagline}</p>
          </div>

          <div className="flex flex-wrap gap-4 text-xs font-medium text-[var(--muted)]">
            <Link href="/about" className="hover:text-[var(--text)] transition">
              {lang === "en" ? "Methodology & Purpose" : "Metodologi & Tujuan"}
            </Link>
            <span>·</span>
            <Link href="/journey" className="hover:text-[var(--text)] transition">
              {lang === "en" ? "Learning Journey" : "Perjalanan Belajar"}
            </Link>
            <span>·</span>
            <span className="text-[var(--muted)]">
              {lang === "en" ? "No AI · Evidence-Based" : "Tanpa AI · Berbasis Bukti"}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
