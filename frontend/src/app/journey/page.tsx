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
  const { t, lang, completedActivities, resetProgress } = useApp();

  const totalMilestones = 5;
  const completedSet = new Set(completedActivities);
  const mastered = completedActivities.length === 4;

  const milestones = [
    {
      title: lang === "en" ? "Question a Social Feed Claim" : "Pertanyakan Klaim di Linimasa",
      href: "/feed",
      icon: Compass,
      done: completedSet.has("feed"),
    },
    {
      title: lang === "en" ? "Analyze Narrative Framing in Lab" : "Analisis Framing di Narrative Lab",
      href: "/lab",
      icon: Scale,
      done: completedSet.has("lab"),
    },
    {
      title: lang === "en" ? "Inspect an Evidence Investigation Template" : "Pelajari Templat Investigasi Bukti",
      href: "/evidence",
      icon: FileSearch,
      done: completedSet.has("evidence"),
    },
    {
      title: lang === "en" ? "Complete Check the Evidence Quiz" : "Selesaikan Kuis Periksa Bukti",
      href: "/quiz",
      icon: BookOpenCheck,
      done: completedSet.has("quiz"),
    },
    {
      title: lang === "en" ? "Mastered Core Competencies" : "Kuasai Kompetensi Kritis Inti",
      href: "/journey",
      icon: Sparkles,
      done: mastered,
    },
  ];

  const completedMilestones = milestones.filter((milestone) => milestone.done).length;
  const percentage = Math.round((completedMilestones / totalMilestones) * 100);

  const competencies = [
    {
      name: t.skill1,
      level: completedSet.has("lab") ? (lang === "en" ? "Proficient" : "Mahir") : (lang === "en" ? "In Progress" : "Berjalan"),
      tone: (completedSet.has("lab") ? "teal" : "blue") as "teal" | "blue",
    },
    {
      name: t.skill2,
      level: completedSet.has("evidence") ? (lang === "en" ? "Proficient" : "Mahir") : (lang === "en" ? "In Progress" : "Berjalan"),
      tone: (completedSet.has("evidence") ? "teal" : "blue") as "teal" | "blue",
    },
    {
      name: t.skill3,
      level: completedSet.has("feed") && completedSet.has("lab") ? (lang === "en" ? "Proficient" : "Mahir") : (lang === "en" ? "In Progress" : "Berjalan"),
      tone: (completedSet.has("feed") && completedSet.has("lab") ? "teal" : "blue") as "teal" | "blue",
    },
    {
      name: t.skill4,
      level: completedSet.has("quiz") ? (lang === "en" ? "Proficient" : "Mahir") : (lang === "en" ? "In Progress" : "Berjalan"),
      tone: (completedSet.has("quiz") ? "teal" : "amber") as "teal" | "amber",
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
              <h2 className="font-display mt-1 text-2xl font-extrabold text-[var(--text)]">
                {t.activities}
              </h2>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-4xl font-black text-[var(--accent)]">
                {percentage}%
              </span>
              <span className="text-xs font-semibold text-[var(--muted)]">
                ({completedMilestones}/{totalMilestones})
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
                  className={`focus-ring flex items-center justify-between rounded-[var(--radius-md)] border p-4 transition-all duration-200 ${
                    m.done
                      ? "border-[var(--teal)]/30 bg-[var(--teal-soft)] text-[var(--text)]"
                      : "border-[var(--line)] bg-[rgb(var(--surface)/0.35)] text-[var(--muted)] hover:border-[var(--accent)]/40 hover:text-[var(--text)]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-xl transition-colors ${
                        m.done
                          ? "bg-[var(--teal)] text-white shadow-sm"
                          : "bg-[rgb(var(--surface)/0.8)] text-[var(--muted)]"
                      }`}
                    >
                      <Icon size={16} />
                    </div>
                    <span className="text-xs font-bold">{m.title}</span>
                  </div>

                  {m.done ? (
                    <CheckCircle2 size={18} className="text-[var(--teal)] shrink-0" />
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
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[var(--teal)]">
              {t.skillsTitle}
            </h3>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {competencies.map((comp, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-[var(--radius-sm)] border border-[var(--line)] bg-[rgb(var(--surface)/0.45)] p-4 text-xs"
              >
                <span className="font-semibold text-[var(--text)] pr-2">
                  {comp.name}
                </span>
                <StatusBadge label={comp.level} tone={comp.tone} size="sm" />
              </div>
            ))}
          </div>

          {/* Dynamic Rule-based Recommendation */}
          <div className="mt-8 rounded-[var(--radius-md)] border border-[var(--accent)]/25 bg-[var(--accent-soft)] p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
              {t.recommendedTitle}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text)]">
              {!completedSet.has("feed")
                ? (lang === "en"
                    ? "Start by examining simulated posts in Explore the Feed."
                    : "Mulailah dengan memeriksa postingan simulasi di Jelajahi Feed.")
                : !completedSet.has("lab")
                ? (lang === "en"
                    ? "Compare two framings in Narrative Lab and identify what each one assumes."
                    : "Bandingkan dua framing di Narrative Lab dan kenali asumsi di masing-masing narasi.")
                : !completedSet.has("evidence")
                ? (lang === "en"
                    ? "Deepen your understanding by reviewing factual standards in Evidence Explorer."
                    : "Perdalam pemahamanmu dengan meninjau standar fakta di Evidence Explorer.")
                : !completedSet.has("quiz")
                ? (lang === "en"
                    ? "Check what you have learned by completing the evidence quiz."
                    : "Periksa pemahamanmu dengan menyelesaikan kuis bukti.")
                : (lang === "en"
                    ? "Excellent progress! Test yourself again or explore further cases to reinforce your critical reading habits."
                    : "Kemajuan luar biasa! Uji dirimu kembali atau telusuri kasus lain untuk memperkuat kebiasaan berpikir kritis.")}
            </p>
            <div className="mt-4">
              <Link
                href={!completedSet.has("feed") ? "/feed" : !completedSet.has("lab") ? "/lab" : !completedSet.has("evidence") ? "/evidence" : !completedSet.has("quiz") ? "/quiz" : "/feed"}
                className="focus-ring inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-[var(--accent)] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[var(--accent-strong)] transition-all"
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
