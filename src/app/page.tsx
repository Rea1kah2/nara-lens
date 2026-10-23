"use client";
import Link from "next/link";
import { ArrowRight, BookOpenCheck, Search, Sparkles } from "lucide-react";
import { useApp } from "@/lib/state";
import { GlassCard, StatusBadge } from "@/components/ui";

export default function HomePage() {
  const { t } = useApp();
  return <main className="soft-grid mx-auto max-w-7xl px-5 py-16 sm:py-24">
    <section className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
      <div><p className="eyebrow">NaraLens · Political literacy</p><h1 className="mt-5 max-w-3xl text-5xl font-black tracking-[-.06em] sm:text-7xl">{t.heroTitle}</h1><p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">{t.heroBody}</p><Link href="/feed" className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 font-bold text-white shadow-lg shadow-blue-500/20">{t.start}<ArrowRight size={18} /></Link></div>
      <GlassCard className="relative overflow-hidden p-5 sm:p-7"><div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-300/25 blur-3xl" /><div className="relative"><div className="mb-5 flex items-center justify-between"><StatusBadge label={t.simulation} tone="amber" /><Sparkles className="text-[var(--teal)]" size={20} /></div><div className="rounded-2xl border border-[var(--line)] bg-[rgb(var(--surface)/.55)] p-5"><p className="text-xs font-bold text-[var(--muted)]">@publicsquare · 2h</p><p className="mt-4 text-xl font-bold">“Political experience runs in the family, so the next generation deserves the role.”</p><div className="mt-5 flex gap-2"><StatusBadge label="Claim" /><StatusBadge label="Context needed" tone="amber" /></div></div></div></GlassCard>
    </section>
    <section className="mt-24 grid gap-5 md:grid-cols-3">{[[BookOpenCheck, "Explore narratives", "Make a choice, then see what the feed leaves uncertain."], [Search, "Examine evidence", "Separate documented facts from allegations and interpretation."], [Sparkles, "Reflect and learn", "Build critical reading skills without being profiled or persuaded."]].map(([Icon, title, body]) => <GlassCard className="p-7" key={title as string}><Icon className="text-[var(--teal)]" /><h2 className="mt-6 text-xl font-bold">{title as string}</h2><p className="mt-2 leading-7 text-[var(--muted)]">{body as string}</p></GlassCard>)}</section>
  </main>;
}
