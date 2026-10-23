"use client";

import { useState } from "react";
import { Check, Columns2, Sparkles } from "lucide-react";
import { useApp } from "@/lib/state";
import { narrativeComparisons } from "@/content/scenarios";
import {
  GlassCard,
  StatusBadge,
  ActionButton,
  NextStepCard,
} from "@/components/ui";
import { PageContainer, PageHeader } from "@/components/layout";

export default function LabPage() {
  const { t, lang, markComplete } = useApp();
  const [activeComparisonIndex, setActiveComparisonIndex] = useState(0);
  const [completed, setCompleted] = useState(false);

  const comparison = narrativeComparisons[activeComparisonIndex];

  const handleComplete = () => {
    setCompleted(true);
    markComplete();
  };

  return (
    <PageContainer>
      <PageHeader
        eyebrow={t.labEyebrow}
        title={t.labTitle}
        body={t.labBody}
      />

      <div className="mx-auto max-w-5xl space-y-8">
        {/* Comparison Case Selector Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-[24px] border border-[var(--line)] bg-[rgb(var(--surface)/0.4)] p-2 backdrop-blur-md">
          <div className="flex items-center gap-2 px-3 py-1 text-xs font-bold text-[var(--muted)]">
            <Columns2 size={16} className="text-[var(--accent)]" />
            <span>{t.comparisonSelector}:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {narrativeComparisons.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveComparisonIndex(idx)}
                className={`focus-ring rounded-2xl px-4 py-2 text-xs font-bold transition-all duration-200 ${
                  activeComparisonIndex === idx
                    ? "bg-[var(--accent)] text-white shadow-sm"
                    : "border border-[var(--line)] bg-[rgb(var(--surface)/0.5)] text-[var(--muted)] hover:text-[var(--text)]"
                }`}
              >
                {item.title[lang]}
              </button>
            ))}
          </div>
        </div>

        {/* Side-by-Side Comparison Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {comparison.posts.map((post, idx) => (
            <GlassCard
              key={post.label.en}
              className="flex flex-col justify-between p-6 sm:p-8"
              variant="thick"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[var(--separator)] pb-4">
                  <StatusBadge
                    label={post.label[lang]}
                    tone={idx === 0 ? "blue" : "amber"}
                  />
                  <span className="text-[11px] font-semibold text-[var(--muted)]">
                    {lang === "en" ? `Framing Variant ${idx + 1}` : `Variasi Framing ${idx + 1}`}
                  </span>
                </div>

                <div className="mt-5 rounded-2xl border border-[var(--line)] bg-[rgb(var(--surface)/0.4)] p-5">
                  <p className="text-xl font-bold leading-relaxed text-[var(--text)]">
                    “{post.text[lang]}”
                  </p>
                </div>
              </div>

              {/* Rhetorical Anatomy */}
              <div className="mt-6 space-y-2.5 border-t border-[var(--separator)] pt-4 text-xs">
                <div className="flex items-start gap-2 text-emerald-600 dark:text-emerald-400">
                  <span className="font-bold">✓ {t.facts}:</span>
                  <span className="text-[var(--muted)]">
                    {lang === "en"
                      ? "A political family relationship exists in public records."
                      : "Hubungan keluarga politisi tercatat dalam dokumen publik."}
                  </span>
                </div>

                <div className="flex items-start gap-2 text-amber-600 dark:text-amber-400">
                  <span className="font-bold">⚠ {t.opinions}:</span>
                  <span className="text-[var(--muted)]">
                    {lang === "en"
                      ? "Assumes merit or automatic guilt without procedural verification."
                      : "Mengasumsikan kelayakan atau rasa bersalah otomatis tanpa bukti prosedur."}
                  </span>
                </div>

                <div className="flex items-start gap-2 text-[var(--accent)]">
                  <span className="font-bold">↗ {t.missing}:</span>
                  <span className="text-[var(--muted)]">
                    {lang === "en"
                      ? "Appointment procedure, qualifying rules, and comparative candidates."
                      : "Prosedur seleksi, aturan syarat kelayakan, dan kandidat pembanding."}
                  </span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Critical Thinking Prompts Card */}
        <GlassCard className="p-6 sm:p-8" variant="default">
          <div className="flex items-center gap-2 text-[var(--teal)]">
            <Sparkles size={18} />
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--teal)]">
              {t.criticalPrompts}
            </h3>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {comparison.prompts.map((prompt, i) => (
              <div
                key={i}
                className="rounded-2xl border border-[var(--line)] bg-[rgb(var(--surface)/0.4)] p-4 text-xs font-semibold leading-relaxed text-[var(--text)]"
              >
                <span className="mb-2 block font-mono text-[var(--accent)]">
                  0{i + 1}.
                </span>
                {prompt[lang]}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--separator)] pt-5">
            <ActionButton
              onClick={handleComplete}
              disabled={completed}
              className="gap-2"
            >
              {completed ? (
                <>
                  <Check size={16} />
                  <span>{t.completedLab}</span>
                </>
              ) : (
                <span>{t.markComplete}</span>
              )}
            </ActionButton>

            <span className="text-xs text-[var(--muted)]">
              {lang === "en"
                ? "Both favourable and unfavourable posts require critical verification."
                : "Baik klaim yang mendukung maupun menentang sama-sama memerlukan uji kritis."}
            </span>
          </div>
        </GlassCard>

        {/* Next Step */}
        <NextStepCard
          title={t.whatNext}
          body={lang === "en" ? "Ready to test your critical reading on concrete scenarios?" : "Siap menguji ketelitian analisismu pada skenario konkret?"}
          action={t.quizTitle}
          href="/quiz"
        />
      </div>
    </PageContainer>
  );
}
