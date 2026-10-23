"use client";

import Link from "next/link";
import {
  CheckCircle2,
  Circle,
  Sparkles,
  RotateCcw,
  Compass,
  Scale,
  FileSearch,
  BookOpenCheck,
} from "lucide-react";
import { useApp } from "@/lib/state";
import {
  GlassCard,
  ProgressBar,
  ActionButton,
  StatusBadge,
} from "@/components/ui";
import { PageContainer, PageHeader } from "@/components/layout";

export default function JourneyPage() {
  const { t, lang, completed, resetProgress } = useApp();

  const totalMilestones = 5;
  const percentage = Math.min(100, Math.round((completed / totalMilestones) * 100));

  const milestones = [
    {
      title: lang === "en" ? "Question a Social Feed Claim" : "Pertanyakan Klaim di Linimasa",
      href: "/feed",
      icon: Compass,
      done: completed >= 1,
    },
    {
      title: lang === "en" ? "Analyze Narrative Framing in Lab" : "Analisis Framing di Narrative Lab",
      href: "/lab",
      icon: Scale,
      done: completed >= 2,
    },
    {
      title: lang === "en" ? "Investigate Documented Case Evidence" : "Telusuri Bukti Kasus Terdokumentasi",
      href: "/evidence",
      icon: FileSearch,
      done: completed >= 3,
    },
    {
      title: lang === "en" ? "Complete Check the Evidence Quiz" : "Selesaikan Kuis Periksa Bukti",
      href: "/quiz",
      icon: BookOpenCheck,
      done: completed >= 4,
    },
    {
      title: lang === "en" ? "Mastered Core Competencies" : "Kuasai Kompetensi Kritis Inti",
      href: "/journey",
      icon: Sparkles,
      done: completed >= 5,
    },
  ];

  const competencies = [
    {
      name: t.skill1,
      level: completed >= 2 ? (lang === "en" ? "Proficient" : "Mahir") : (lang === "en" ? "In Progress" : "Berjalan"),
      tone: (completed >= 2 ? "teal" : "blue") as "teal" | "blue",
    },
    {
      name: t.skill2,
      level: completed >= 3 ? (lang === "en" ? "Proficient" : "Mahir") : (lang === "en" ? "In Progress" : "Berjalan"),
      tone: (completed >= 3 ? "teal" : "blue") as "teal" | "blue",
    },
    {
      name: t.skill3,
      level: completed >= 4 ? (lang === "en" ? "Proficient" : "Mahir") : (lang === "en" ? "In Progress" : "Berjalan"),
      tone: (completed >= 4 ? "teal" : "blue") as "teal" | "blue",
    },
    {
      name: t.skill4,
      level: completed >= 5 ? (lang === "en" ? "Proficient" : "Mahir") : (lang === "en" ? "In Progress" : "Berjalan"),
      tone: (completed >= 5 ? "teal" : "amber") as "teal" | "amber",
    },
  ];

  return (
    <PageContainer>
      <PageHeader
        eyebrow={t.journeyEyebrow}
        title={t.journey}
        body={t.progress}
      />

      <div className="mx-auto max-w-4xl space-y-8">
        {/* Progress Overview Card */}
        <GlassCard className="p-6 sm:p-8" variant="thick">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                {lang === "en" ? "Session Learning Pathway" : "Alur Belajar Sesi Ini"}
              </span>
              <h2 className="mt-1 text-2xl font-extrabold text-[var(--text)]">
                {t.activities}
              </h2>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-[var(--accent)]">
                {percentage}%
              </span>
              <span className="text-xs text-[var(--muted)]">
                ({completed}/{totalMilestones})
              </span>
            </div>
          </div>

          <div className="mt-5">
            <ProgressBar value={percentage} />
          </div>

          {/* Interactive Milestone Checklist */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              return (
                <Link
                  key={i}
                  href={m.href}
                  className={`focus-ring flex items-center justify-between rounded-2xl border p-4 transition-all duration-200 ${
                    m.done
                      ? "border-emerald-500/30 bg-emerald-500/10 text-[var(--text)]"
                      : "border-[var(--line)] bg-[rgb(var(--surface)/0.35)] text-[var(--muted)] hover:border-[var(--accent)]/40 hover:text-[var(--text)]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-xl ${
                        m.done
                          ? "bg-emerald-500 text-white"
                          : "bg-[rgb(var(--surface)/0.8)] text-[var(--muted)]"
                      }`}
                    >
                      <Icon size={16} />
                    </div>
                    <span className="text-xs font-bold">{m.title}</span>
                  </div>

                  {m.done ? (
                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                  ) : (
                    <Circle size={18} className="text-[var(--line)] shrink-0" />
                  )}
                </Link>
              );
            })}
          </div>
        </GlassCard>

        {/* Competencies Breakdown Card */}
        <GlassCard className="p-6 sm:p-8" variant="default">
          <div className="flex items-center gap-2 text-[var(--teal)]">
            <Sparkles size={18} />
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--teal)]">
              {t.skillsTitle}
            </h3>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {competencies.map((comp, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-2xl border border-[var(--line)] bg-[rgb(var(--surface)/0.4)] p-4 text-xs"
              >
                <span className="font-semibold text-[var(--text)] pr-2">
                  {comp.name}
                </span>
                <StatusBadge label={comp.level} tone={comp.tone} size="sm" />
              </div>
            ))}
          </div>

          {/* Dynamic Rule-based Recommendation */}
          <div className="mt-8 rounded-2xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
              {t.recommendedTitle}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text)]">
              {completed < 2
                ? (lang === "en"
                    ? "Start by testing your reactions to viral framing in Narrative Lab."
                    : "Mulailah dengan menguji reaksimu terhadap framing viral di Narrative Lab.")
                : completed < 4
                ? (lang === "en"
                    ? "Deepen your understanding by reviewing factual standards in Evidence Explorer."
                    : "Perdalam pemahamanmu dengan meninjau standar fakta di Evidence Explorer.")
                : (lang === "en"
                    ? "Excellent progress! Test yourself again or explore further cases to reinforce your critical reading habits."
                    : "Kemajuan luar biasa! Uji dirimu kembali atau telusuri kasus lain untuk memperkuat kebiasaan berpikir kritis.")}
            </p>
            <div className="mt-4">
              <Link
                href={completed < 2 ? "/lab" : completed < 4 ? "/evidence" : "/feed"}
                className="focus-ring inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[var(--accent-strong)] transition-all"
              >
                <span>{lang === "en" ? "Continue Learning" : "Lanjutkan Belajar"}</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Reset Progress Section */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-[var(--separator)] pt-6">
            <div>
              <p className="text-xs font-bold text-[var(--text)]">{t.reset}</p>
              <p className="text-[11px] text-[var(--muted)]">{t.resetHint}</p>
            </div>
            <ActionButton
              variant="secondary"
              onClick={resetProgress}
              className="gap-2 !py-2 !px-4 text-xs"
            >
              <RotateCcw size={14} />
              <span>{t.reset}</span>
            </ActionButton>
          </div>
        </GlassCard>
      </div>
    </PageContainer>
  );
}
