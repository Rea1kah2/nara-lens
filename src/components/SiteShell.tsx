"use client";

import Link from "next/link";
import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import { useApp } from "@/lib/state";

const links = ["/", "/feed", "/lab", "/evidence", "/quiz", "/journey", "/about"];
export function SiteShell({ children }: { children: React.ReactNode }) {
  const { t, lang, setLang, theme, toggleTheme } = useApp();
  return <div className="min-h-screen mesh">
    <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-[var(--bg)]/70 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-4">
        <Link href="/" className="flex shrink-0 items-center gap-2.5 font-bold tracking-tight"><Image src="/logo.png" alt="" width={36} height={36} className="h-9 w-9 rounded-2xl shadow-sm" /><span className="text-lg">Nara<span className="text-[var(--accent)]">Lens</span></span></Link>
        <div className="hidden min-w-0 flex-1 items-center justify-center gap-4 lg:flex">{t.nav.map((label, i) => <Link key={label} href={links[i]} className="focus-ring whitespace-nowrap text-xs font-semibold text-[var(--muted)] transition hover:text-[var(--text)]">{label}</Link>)}</div>
        <div className="ml-auto flex items-center gap-2">
          <div className="glass flex rounded-full p-1 text-xs font-bold"><button className={`focus-ring rounded-full px-2.5 py-1.5 ${lang === "en" ? "bg-[var(--accent)] text-white" : "text-[var(--muted)]"}`} onClick={() => setLang("en")}>EN</button><button className={`focus-ring rounded-full px-2.5 py-1.5 ${lang === "id" ? "bg-[var(--accent)] text-white" : "text-[var(--muted)]"}`} onClick={() => setLang("id")}>ID</button></div>
          <button className="focus-ring glass rounded-full p-2.5 text-[var(--accent)]" onClick={toggleTheme} aria-label="Toggle dark mode">{theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}</button>
        </div>
      </nav>
      <div className="flex gap-4 overflow-x-auto px-5 pb-3 lg:hidden">{t.nav.map((label, i) => <Link key={label} href={links[i]} className="whitespace-nowrap text-xs font-semibold text-[var(--muted)]">{label}</Link>)}</div>
    </header>
    {children}
    <footer className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-[var(--line)] px-5 py-12 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between"><span className="font-bold text-[var(--text)]">Nara<span className="text-[var(--accent)]">Lens</span></span><span>{t.tagline}</span></footer>
  </div>;
}
