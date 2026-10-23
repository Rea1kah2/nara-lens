"use client";

import Link from "next/link";
import {
  ArrowRight,
  Compass,
  FileSearch,
  Scale,
  Sparkles,
  ShieldCheck,
  BrainCircuit,
  Eye,
} from "lucide-react";
import { useApp } from "@/lib/state";
import { GlassCard, StatusBadge, SocialPostCard } from "@/components/ui";

export default function HomePage() {
  const { t, lang } = useApp();

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      {/* Hero Section */}
      <section className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[rgb(var(--surface)/0.5)] px-3.5 py-1.5 shadow-sm">
            <Sparkles size={14} className="text-[var(--accent)]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
              {t.platformType}
            </span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-[-0.04em] text-[var(--text)] sm:text-6xl sm:leading-[1.1] lg:text-7xl">
            {t.heroTitle}
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-[var(--muted)]">
            {t.heroBody}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/feed"
              className="focus-ring inline-flex items-center gap-2.5 rounded-full bg-[var(--accent)] px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-[var(--accent-strong)] hover:shadow-blue-500/35 active:scale-95"
            >
              <span>{t.start}</span>
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/about"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[rgb(var(--surface)/0.6)] px-6 py-3.5 text-base font-semibold text-[var(--text)] shadow-sm hover:bg-[rgb(var(--surface)/0.9)] transition-all"
            >
              <span>{t.learnMore}</span>
            </Link>
          </div>

          {/* Trust Principles Pills */}
          <div className="flex flex-wrap items-center gap-4 pt-4 text-xs font-semibold text-[var(--muted)]">
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-[var(--teal)]" />
              <span>{lang === "en" ? "Non-partisan Literacy" : "Literasi Non-partisan"}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <BrainCircuit size={16} className="text-[var(--accent)]" />
              <span>{lang === "en" ? "Curated Scenarios (No AI)" : "Skenario Terkurasi (Tanpa AI)"}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Eye size={16} className="text-amber-500" />
              <span>{lang === "en" ? "Look Beyond the Feed" : "Kritisi Linimasa"}</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive Social Media Card Preview */}
        <div className="relative">
          {/* Subtle Ambient Glow Blobs */}
          <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

          <GlassCard className="relative p-6 sm:p-8" variant="thick">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                  {lang === "en" ? "Live Feed Simulation" : "Simulasi Linimasa Nyata"}
                </span>
              </div>
              <StatusBadge label={lang === "en" ? "Preview" : "Pratinjau"} tone="blue" size="sm" />
            </div>

            <SocialPostCard
              authorName="Civic Discourse Hub"
              handle="@civicfeed"
              timestamp="12m ago"
              simulationLabel={t.simulationBadge}
              content={t.heroCardQuote.replace(/[“”]/g, "")}
              categoryBadge={lang === "en" ? "Political Dynasty Claim" : "Klaim Dinasti Politik"}
            />

            <div className="mt-6 rounded-2xl border border-[var(--accent)]/20 bg-[rgb(var(--surface)/0.4)] p-4 text-xs leading-relaxed text-[var(--muted)]">
              <span className="font-bold text-[var(--accent)]">
                {lang === "en" ? "NaraLens Approach: " : "Pendekatan NaraLens: "}
              </span>
              {lang === "en"
                ? "Does this statement prove merit, or does it invite an unexamined assumption? Practice questioning in Explore the Feed."
                : "Apakah kalimat ini membuktikan kompetensi, atau sekadar mengajak asumsi tanpa bukti? Latih pemikiranmu di Jelajahi Feed."}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* 3 Core Interactive Features */}
      <section className="mt-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow justify-center">{lang === "en" ? "Core Platform Modules" : "Modul Utama Platform"}</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[var(--text)] sm:text-4xl">
            {lang === "en" ? "Three steps to evaluate political narratives" : "Tiga langkah mengkaji narasi politik digital"}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <Link href="/feed" className="focus-ring group">
            <GlassCard
              className="flex h-full flex-col p-7 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[var(--accent)]/40"
              interactive
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-[var(--accent)] shadow-sm">
                <Compass size={24} />
              </div>
              <h3 className="mt-6 text-xl font-bold text-[var(--text)] flex items-center justify-between">
                <span>{t.feature1Title}</span>
                <ArrowRight size={18} className="opacity-0 transition-opacity group-hover:opacity-100 text-[var(--accent)]" />
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {t.feature1Desc}
              </p>
            </GlassCard>
          </Link>

          {/* Card 2 */}
          <Link href="/lab" className="focus-ring group">
            <GlassCard
              className="flex h-full flex-col p-7 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[var(--teal)]/40"
              interactive
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-[var(--teal)] shadow-sm">
                <Scale size={24} />
              </div>
              <h3 className="mt-6 text-xl font-bold text-[var(--text)] flex items-center justify-between">
                <span>{t.feature2Title}</span>
                <ArrowRight size={18} className="opacity-0 transition-opacity group-hover:opacity-100 text-[var(--teal)]" />
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {t.feature2Desc}
              </p>
            </GlassCard>
          </Link>

          {/* Card 3 */}
          <Link href="/evidence" className="focus-ring group">
            <GlassCard
              className="flex h-full flex-col p-7 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[var(--accent)]/40"
              interactive
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-500 shadow-sm">
                <FileSearch size={24} />
              </div>
              <h3 className="mt-6 text-xl font-bold text-[var(--text)] flex items-center justify-between">
                <span>{t.feature3Title}</span>
                <ArrowRight size={18} className="opacity-0 transition-opacity group-hover:opacity-100 text-amber-500" />
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {t.feature3Desc}
              </p>
            </GlassCard>
          </Link>
        </div>
      </section>
    </main>
  );
}
