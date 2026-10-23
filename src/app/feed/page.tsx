"use client";
import Link from "next/link";
import { useState } from "react";
import { useApp } from "@/lib/state";
import { feedScenarios } from "@/content/scenarios";
import { GlassCard, StatusBadge, NextStepCard } from "@/components/ui";
import { PageContainer, PageHeader } from "@/components/layout";

export default function FeedPage() {
  const { t, lang, markComplete } = useApp();
  const scenario = feedScenarios[0];
  const [choice, setChoice] = useState<string | null>(null);
  return <PageContainer><PageHeader eyebrow="Explore the Feed" title={t.feedTitle} body={t.heroBody} /><div className="mt-12 max-w-4xl"><GlassCard className="p-6 sm:p-8"><div className="flex flex-wrap items-center justify-between gap-3"><StatusBadge label={scenario.simulationLabel[lang]} tone="amber" /><span className="text-xs font-bold text-[var(--muted)]">Scenario 01 / 03</span></div><p className="mt-8 max-w-3xl text-2xl font-bold leading-9 sm:text-3xl">“{scenario.post[lang]}”</p><p className="mt-4 text-sm text-[var(--muted)]">What do you want to do with this claim?</p><div className="mt-6 grid gap-3 sm:grid-cols-3">{scenario.actions.map((action) => <button key={action.id} onClick={() => { setChoice(action.id); markComplete(); }} className={`focus-ring min-h-14 rounded-2xl border p-4 text-left text-sm font-bold transition hover:-translate-y-0.5 ${choice === action.id ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]" : "border-[var(--line)]"}`}>{action.label[lang]}</button>)}</div>{choice && <div className="mt-8 rounded-3xl border border-[var(--accent)]/25 bg-[var(--accent)]/10 p-5"><h2 className="text-lg font-bold">{t.feedbackTitle}</h2><p className="mt-2 leading-7 text-[var(--muted)]">{scenario.actions.find((action) => action.id === choice)?.feedback[lang]}</p><div className="mt-5 grid gap-3 sm:grid-cols-3">{scenario.evidence.map((item) => <div className="rounded-2xl bg-[rgb(var(--surface)/.42)] p-4 text-sm" key={item.label.en}><StatusBadge label={item.status} tone={item.status === "verified" ? "teal" : "amber"} /><p className="mt-3 font-bold">{item.label[lang]}</p><p className="mt-1 leading-6 text-[var(--muted)]">{item.detail[lang]}</p></div>)}</div><NextStepCard title={t.whatNext} body={t.feedbackBody} action={t.reflect} href="/quiz" /></div>}</GlassCard></div></PageContainer>;
}
