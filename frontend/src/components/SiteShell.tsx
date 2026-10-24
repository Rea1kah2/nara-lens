"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Compass,
  Scale,
  FileSearch,
  BookOpenCheck,
  Footprints,
  Info,
  PanelLeftClose,
  PanelLeftOpen,
  Menu,
  X,
  Sparkles,
} from "lucide-react";
import { useApp } from "@/lib/state";
import { NaraLogo } from "@/components/Logo";
import { FloatingGlassControl } from "@/components/FloatingGlassControl";

const navIcons: Record<string, React.FC<{ size: number; strokeWidth?: number; className?: string }>> = {
  "/": Home,
  "/feed": Compass,
  "/lab": Scale,
  "/evidence": FileSearch,
  "/quiz": BookOpenCheck,
  "/journey": Footprints,
  "/about": Info,
};

export function SiteShell({ children }: { children: React.ReactNode }) {
  const { t, lang } = useApp();
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen mesh flex flex-col md:flex-row selection:bg-[var(--teal)] selection:text-white relative">
      {/* Floating Preferences & Liquid Glass Control (Pojok Kanan Atas) */}
      <FloatingGlassControl />

      {/* ── Mobile Top Header Bar (< 768px) ─────────────────────────────── */}
      <div className="md:hidden sticky top-0 z-30 w-full border-b border-[var(--line)] bg-[var(--bg)]/85 backdrop-blur-xl px-4 py-2.5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <NaraLogo size={32} priority />
          <span className="font-display text-base font-extrabold tracking-tight text-[var(--text)]">
            Nara<span className="text-[var(--teal)]">Lens</span>
          </span>
        </Link>

        {/* Tombol Hamburger Buka Drawer Sidebar Mobile */}
        <button
          onClick={() => setMobileDrawerOpen(true)}
          className="p-2 mr-14 rounded-full border border-[var(--line)] bg-[rgb(var(--surface)/0.8)] text-[var(--text)] shadow-sm active:scale-95 transition-all"
          aria-label="Open Navigation Menu"
        >
          <Menu size={18} />
        </button>
      </div>

      {/* ── Mobile Off-Canvas Drawer (< 768px) ───────────────────────────── */}
      {mobileDrawerOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          {/* Backdrop Blur */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileDrawerOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative w-72 max-w-[80vw] h-full glass glass-thick bg-[rgb(var(--surface)/0.95)] border-r border-[var(--line)] p-5 flex flex-col justify-between shadow-2xl z-10 animate-in slide-in-from-left duration-250">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[var(--separator)]">
                <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileDrawerOpen(false)}>
                  <NaraLogo size={32} />
                  <div className="flex flex-col">
                    <span className="font-display text-base font-extrabold tracking-tight text-[var(--text)]">
                      Nara<span className="text-[var(--teal)]">Lens</span>
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--muted)]">
                      {t.tagline}
                    </span>
                  </div>
                </Link>
                <button
                  onClick={() => setMobileDrawerOpen(false)}
                  className="p-1.5 rounded-full hover:bg-[rgb(var(--surface-soft)/1)] text-[var(--muted)] transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="mt-5 flex flex-col gap-1.5">
                {t.nav.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
                  const Icon = navIcons[item.href] || Compass;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileDrawerOpen(false)}
                      className={`flex items-center gap-3 px-3.5 py-2.5 rounded-[var(--radius-sm)] text-sm font-semibold transition-all ${
                        isActive
                          ? "bg-[var(--teal-soft)] text-[var(--teal-strong)] font-bold shadow-sm"
                          : "text-[var(--text)] hover:bg-[rgb(var(--surface-soft)/0.8)]"
                      }`}
                    >
                      <Icon size={18} strokeWidth={isActive ? 2.5 : 1.75} className="shrink-0" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Footer */}
            <div className="pt-4 border-t border-[var(--separator)] text-xs text-[var(--muted)]">
              <p className="font-bold text-[var(--text)]">NaraLens Prototype</p>
              <p className="text-[11px] mt-0.5">Non-partisan Political Literacy</p>
            </div>
          </div>
        </div>
      )}

      {/* ── Desktop Collapsible Floating Glass Sidebar (≥ 768px) ────────── */}
      <aside
        className={`hidden md:flex flex-col h-[calc(100vh-32px)] sticky top-4 glass glass-thick ml-4 my-4 p-3 z-40 transition-all duration-300 ease-in-out shrink-0 rounded-[28px] border border-[var(--line)] ${
          isCollapsed ? "w-[88px]" : "w-[280px]"
        }`}
      >
        {/* Sidebar Header: Branding & Hamburger/Collapse Toggle */}
        <div
          className={`p-2 mb-3 flex items-center ${
            isCollapsed ? "justify-center flex-col gap-2" : "justify-between"
          }`}
        >
          {/* Logo & Brand Name */}
          <Link
            href="/"
            className={`group flex items-center gap-3 rounded-2xl transition-all ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <NaraLogo size={36} priority />
            {!isCollapsed && (
              <div className="flex flex-col transition-all duration-300">
                <span className="font-display text-base font-extrabold tracking-tight text-[var(--text)] whitespace-nowrap">
                  Nara<span className="text-[var(--teal)]">Lens</span>
                </span>
                <span className="text-[8.5px] font-bold uppercase tracking-[0.14em] text-[var(--muted)] whitespace-nowrap">
                  {t.tagline}
                </span>
              </div>
            )}
          </Link>

          {/* Tombol Hamburger Buka/Tutup Sidebar Desktop */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-full hover:bg-[rgb(var(--surface-soft)/0.9)] text-[var(--muted)] hover:text-[var(--text)] transition-colors shrink-0"
            title={isCollapsed ? (lang === "en" ? "Expand Sidebar" : "Perlebar Sidebar") : (lang === "en" ? "Collapse Sidebar" : "Ciutkan Sidebar")}
            aria-label={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {isCollapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
          </button>
        </div>

        {/* Sidebar Navigation Items */}
        <nav className="flex-1 flex flex-col gap-1 overflow-x-hidden overflow-y-auto no-scrollbar pt-1">
          {t.nav.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            const Icon = navIcons[item.href] || Compass;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center min-h-[44px] px-3 rounded-[var(--radius-sm)] transition-all ${
                  isCollapsed ? "justify-center mx-auto w-11" : "gap-3"
                } ${
                  isActive
                    ? "bg-[var(--teal-soft)] text-[var(--teal-strong)] font-bold shadow-sm"
                    : "text-[var(--text)] hover:bg-[rgb(var(--surface)/0.75)] hover:text-[var(--teal)]"
                }`}
                title={isCollapsed ? item.label : undefined}
              >
                <Icon
                  size={20}
                  strokeWidth={isActive ? 2.5 : 1.75}
                  className={`shrink-0 ${isActive ? "text-[var(--teal)]" : "text-[var(--muted)]"}`}
                />

                <span
                  className={`text-[13.5px] font-semibold whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out ${
                    isCollapsed ? "w-0 opacity-0" : "w-full opacity-100"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Bottom Footer Info */}
        <div className="mt-auto pt-3 border-t border-[var(--separator)] overflow-hidden">
          {!isCollapsed ? (
            <div className="px-2 py-1">
              <div className="flex items-center gap-1.5 text-[var(--teal)]">
                <Sparkles size={13} />
                <span className="text-[10px] font-bold uppercase tracking-wider">
                  {lang === "en" ? "Evidence-First" : "Berbasis Bukti"}
                </span>
              </div>
              <p className="text-[10.5px] text-[var(--muted)] mt-0.5 leading-snug">
                {lang === "en" ? "Educational Prototype · No AI" : "Prototipe Edukatif · Bebas AI"}
              </p>
            </div>
          ) : (
            <div className="flex justify-center py-1">
              <span className="h-2 w-2 rounded-full bg-[var(--teal)]" title="Prototype Active" />
            </div>
          )}
        </div>
      </aside>

      {/* ── Main Content Area ────────────────────────────────────────────── */}
      <main className="flex-1 min-w-0 p-4 md:p-6 md:pl-2 transition-all duration-300 pb-24 md:pb-6">
        {children}
      </main>

      {/* ── Mobile Sticky Bottom Navigation Bar (< 768px) ───────────────── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-2 pb-[max(8px,env(safe-area-inset-bottom))]">
        <div className="absolute inset-0 -top-4 bg-gradient-to-t from-[var(--bg)] to-transparent pointer-events-none -z-10" />
        <nav
          className="glass flex items-center justify-around p-1 mx-auto max-w-md shadow-lg rounded-full border border-[var(--line)] bg-[rgb(var(--surface)/0.92)]"
          aria-label="Mobile Navigation"
        >
          {t.nav.slice(0, 5).map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            const Icon = navIcons[item.href] || Compass;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex-1 flex flex-col items-center justify-center min-h-[46px] gap-0.5 relative text-center"
              >
                {isActive && (
                  <span className="absolute inset-1 bg-[var(--teal-soft)] rounded-full -z-10" />
                )}
                <Icon
                  size={19}
                  strokeWidth={isActive ? 2.5 : 1.75}
                  className={isActive ? "text-[var(--teal)]" : "text-[var(--muted)]"}
                />
                <span
                  className={`text-[9px] truncate max-w-[58px] ${
                    isActive ? "text-[var(--teal-strong)] font-bold" : "text-[var(--muted)] font-medium"
                  }`}
                >
                  {item.label.split(" ")[0]}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
