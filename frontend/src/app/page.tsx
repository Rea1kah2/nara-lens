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
import { NaraLogo } from "@/components/Logo";

export default function HomePage() {
  const { t, lang } = useApp();

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">

      {/* ── Hero Section ─────────────────────────────────────────────────── */}
      <section className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">

          {/* Platform category pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--teal)]/30 bg-[var(--teal-soft)] px-3.5 py-1.5 shadow-sm">
            <Sparkles size={13} className="text-[var(--teal)]" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--teal-strong)]">
              {t.platformType}
            </span>
          </div>

          {/* Headline — Sora display font */}
          <h1 className="font-display text-4xl font-extrabold leading-[1.12] tracking-tight text-[var(--text)] sm:text-5xl lg:text-[3.75rem]">
            {t.heroTitle}
          </h1>

          {/* Body copy */}
          <p className="max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            {t.heroBody}
          </p>

          {/* Primary CTA prioritising Explore the Feed */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/feed"
              className="focus-ring inline-flex items-center gap-2.5 rounded-full bg-[var(--teal)] px-7 py-3.5 text-[15px] font-bold text-white shadow-md shadow-[var(--teal)]/25 transition-all hover:bg-[var(--teal-strong)] hover:shadow-lg hover:shadow-[var(--teal)]/30 active:scale-[0.97]"
            >
              <span>{t.start}</span>
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/about"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[rgb(var(--surface)/0.8)] px-6 py-3.5 text-[15px] font-semibold text-[var(--text)] shadow-sm hover:bg-[rgb(var(--surface)/1)] hover:border-[var(--teal)]/40 transition-all"
            >
              <span>{t.learnMore}</span>
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-3 text-xs font-semibold text-[var(--muted)]">
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={15} className="text-[var(--teal)]" />
              <span>{lang === "en" ? "Non-Partisan Literacy" : "Literasi Non-Partisan"}</span>
            </div>
            <span className="text-[var(--line)]" aria-hidden>|</span>
            <div className="flex items-center gap-1.5">
              <BrainCircuit size={15} className="text-[var(--teal)]" />
              <span>{lang === "en" ? "Curated Cases (No AI)" : "Kasus Terkurasi (Tanpa AI)"}</span>
            </div>
            <span className="text-[var(--line)]" aria-hidden>|</span>
            <div className="flex items-center gap-1.5">
              <Eye size={15} className="text-[var(--amber)]" />
              <span>{lang === "en" ? "Examine Nepotism Claims" : "Kaji Klaim Nepotisme"}</span>
            </div>
          </div>
        </div>

        {/* ── Hero Social Media Simulation Card ───────────────────────────── */}
        <div className="relative">
          {/* Subtle Ambient Glow */}
          <div className="absolute -left-10 -top-10 h-72 w-72 rounded-full bg-[var(--teal)]/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-8 -right-8 h-60 w-60 rounded-full bg-[var(--navy)]/10 blur-3xl pointer-events-none" />

          <GlassCard
            className="relative p-6 sm:p-8"
            variant="thick"
            style={{ transform: "rotate(0.5deg)" } as React.CSSProperties}
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-[var(--muted)]">
                  {lang === "en" ? "Simulated Feed Post" : "Simulasi Postingan Linimasa"}
                </span>
              </div>
              <StatusBadge label={lang === "en" ? "Simulation" : "Simulasi"} tone="amber" size="sm" />
            </div>

            <SocialPostCard
              authorName="Civic Discourse Forum"
              handle="@civicfeed"
              timestamp="15m ago"
              simulationLabel={t.simulationBadge}
              content={t.heroCardQuote.replace(/[""“]/g, "")}
              categoryBadge={lang === "en" ? "Political Dynasty Narrative" : "Narasi Dinasti Politik"}
            />

            <div className="mt-5 rounded-[var(--radius-sm)] border border-[var(--teal)]/25 bg-[var(--teal-soft)] p-4 text-xs leading-relaxed text-[var(--text)]">
              <span className="font-bold text-[var(--teal-strong)]">
                {lang === "en" ? "Core Question: " : "Pertanyaan Kunci: "}
              </span>
              {lang === "en"
                ? "Does a family connection alone prove merit or guilt? Learn to separate family ties from evidence of preferential treatment."
                : "Apakah ikatan keluarga semata membuktikan kompetensi atau kesalahan? Pelajari cara memisahkan hubungan darah dari bukti perlakuan istimewa."}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* ── 3 Main Modules ───────────────────────────────────────────────── */}
      <section className="mt-24 sm:mt-32">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="eyebrow justify-center">
            {lang === "en" ? "Core Platform Architecture" : "Arsitektur Utama Platform"}
          </p>
          <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-[var(--text)] sm:text-4xl">
            {lang === "en"
              ? "Three steps to evaluate political narratives"
              : "Tiga langkah mengkaji narasi politik digital"}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            {lang === "en"
              ? "From experiencing real-world feeds to inspecting documented evidence and rhetorical framing."
              : "Mulai dari simulasi linimasa media sosial hingga pemeriksaan bukti dan analisis framing retorika."}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1 — Explore the Feed */}
          <Link href="/feed" className="focus-ring group">
            <GlassCard
              className="flex h-full flex-col p-7 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-[var(--teal)]/40"
              interactive
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--teal-soft)] text-[var(--teal)]">
                  <Compass size={22} />
                </div>
                <span className="font-mono text-xs font-bold text-[var(--line)] transition-colors group-hover:text-[var(--teal)]">01</span>
              </div>
              <h3 className="font-display mt-6 text-lg font-bold text-[var(--text)]">
                {t.feature1Title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                {t.feature1Desc}
              </p>
              <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-[var(--teal)] opacity-0 transition-opacity group-hover:opacity-100">
                <span>{lang === "en" ? "Open module" : "Buka modul"}</span>
                <ArrowRight size={13} />
              </div>
            </GlassCard>
          </Link>

          {/* Card 2 — Narrative Lab */}
          <Link href="/lab" className="focus-ring group">
            <GlassCard
              className="flex h-full flex-col p-7 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-[var(--teal)]/40"
              interactive
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--teal-soft)] text-[var(--teal)]">
                  <Scale size={22} />
                </div>
                <span className="font-mono text-xs font-bold text-[var(--line)] transition-colors group-hover:text-[var(--teal)]">02</span>
              </div>
              <h3 className="font-display mt-6 text-lg font-bold text-[var(--text)]">
                {t.feature2Title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                {t.feature2Desc}
              </p>
              <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-[var(--teal)] opacity-0 transition-opacity group-hover:opacity-100">
                <span>{lang === "en" ? "Open module" : "Buka modul"}</span>
                <ArrowRight size={13} />
              </div>
            </GlassCard>
          </Link>

          {/* Card 3 — Evidence Explorer */}
          <Link href="/evidence" className="focus-ring group">
            <GlassCard
              className="flex h-full flex-col p-7 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-[var(--teal)]/40"
              interactive
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--amber-soft)] text-[var(--amber)]">
                  <FileSearch size={22} />
                </div>
                <span className="font-mono text-xs font-bold text-[var(--line)] transition-colors group-hover:text-[var(--amber)]">03</span>
              </div>
              <h3 className="font-display mt-6 text-lg font-bold text-[var(--text)]">
                {t.feature3Title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                {t.feature3Desc}
              </p>
              <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-[var(--amber)] opacity-0 transition-opacity group-hover:opacity-100">
                <span>{lang === "en" ? "Open module" : "Buka modul"}</span>
                <ArrowRight size={13} />
              </div>
            </GlassCard>
          </Link>
        </div>
      </section>
    </main>
  );
}
