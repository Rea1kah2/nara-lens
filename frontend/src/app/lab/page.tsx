"use client";

import { useState } from "react";
import { Check, Columns2, Sparkles, Eye, ShieldAlert, AlertTriangle, HelpCircle, FileCheck2 } from "lucide-react";
import { useApp } from "@/lib/state";
import { narrativeComparisons } from "@/content/scenarios";
import {
  GlassCard,
  StatusBadge,
  ActionButton,
  NextStepCard,
} from "@/components/ui";
import { PageContainer, PageHeader } from "@/components/layout";

type LensId = "all" | "facts" | "opinions" | "emotion" | "missing" | "claims";

export default function LabPage() {
  const { t, lang, completedActivities, markComplete } = useApp();
  const [activeComparisonIndex, setActiveComparisonIndex] = useState(0);
  const [activeLens, setActiveLens] = useState<LensId>("all");
  const completed = completedActivities.includes("lab");

  const comparison = narrativeComparisons[activeComparisonIndex];

  const handleComplete = () => {
    markComplete("lab");
  };

  const lenses = [
    {
      id: "all" as const,
      label: lang === "en" ? "Overview (All)" : "Ikhtisar (Semua)",
      icon: Eye,
      tone: "neutral" as const,
    },
    {
      id: "facts" as const,
      label: lang === "en" ? "1. Facts Presented" : "1. Fakta yang Dipaparkan",
      icon: FileCheck2,
      tone: "teal" as const,
    },
    {
      id: "opinions" as const,
      label: lang === "en" ? "2. Opinions & Assumptions" : "2. Opini & Asumsi",
      icon: AlertTriangle,
      tone: "amber" as const,
    },
    {
      id: "emotion" as const,
      label: lang === "en" ? "3. Persuasive Language" : "3. Bahasa Persuasif",
      icon: Sparkles,
      tone: "rose" as const,
    },
    {
      id: "missing" as const,
      label: lang === "en" ? "4. Missing Context" : "4. Konteks yang Hilang",
      icon: HelpCircle,
      tone: "blue" as const,
    },
    {
      id: "claims" as const,
      label: lang === "en" ? "5. Claims Requiring Evidence" : "5. Klaim Butuh Bukti",
      icon: ShieldAlert,
      tone: "purple" as const,
    },
  ];

  return (
    <PageContainer>
      <PageHeader
        eyebrow={t.labEyebrow}
        title={t.labTitle}
        body={t.labBody}
      />

      <div className="mx-auto max-w-5xl space-y-8">
        {/* Comparison Case Selector Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-[var(--radius-lg)] border border-[var(--line)] bg-[rgb(var(--surface)/0.45)] p-2 backdrop-blur-md">
          <div className="flex items-center gap-2 px-3 py-1 text-xs font-bold text-[var(--muted)]">
            <Columns2 size={16} className="text-[var(--teal)]" />
            <span>{t.comparisonSelector}:</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {narrativeComparisons.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveComparisonIndex(idx)}
                className={`focus-ring rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-200 ${
                  activeComparisonIndex === idx
                    ? "bg-[var(--teal)] text-white shadow-sm"
                    : "border border-[var(--line)] bg-[rgb(var(--surface)/0.5)] text-[var(--muted)] hover:text-[var(--text)] hover:bg-[rgb(var(--surface)/0.8)]"
                }`}
              >
                {item.title[lang]}
              </button>
            ))}
          </div>
        </div>

        {/* 5-Dimensional Narrative Deconstruction Lens (Brief Poin 4.C) */}
        <div className="rounded-[var(--radius-md)] border border-[var(--line)] bg-[rgb(var(--surface)/0.5)] p-4 shadow-sm backdrop-blur-md">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--separator)] pb-3">
            <div className="flex items-center gap-2">
              <Eye size={16} className="text-[var(--teal)]" />
              <span className="font-display text-xs font-bold uppercase tracking-wider text-[var(--text)]">
                {lang === "en" ? "Interactive Narrative Deconstruction Lenses" : "Lensa Dekonstruksi Narasi Interaktif"}
              </span>
            </div>
            <span className="text-[11px] font-medium text-[var(--muted)]">
              {lang === "en" ? "Select a lens to isolate rhetorical devices" : "Pilih lensa untuk mengisolasi elemen retorika"}
            </span>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {lenses.map((lens) => {
              const Icon = lens.icon;
              const isActive = activeLens === lens.id;
              return (
                <button
                  key={lens.id}
                  onClick={() => setActiveLens(lens.id)}
                  className={`focus-ring flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? "bg-[var(--navy)] text-white shadow-sm dark:bg-white dark:text-[var(--navy)]"
                      : "border border-[var(--line)] bg-[rgb(var(--surface)/0.7)] text-[var(--muted)] hover:text-[var(--text)]"
                  }`}
                >
                  <Icon size={13} />
                  <span>{lens.label}</span>
                </button>
              );
            })}
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
                    tone={idx === 0 ? "teal" : "amber"}
                  />
                  <span className="text-[11px] font-semibold text-[var(--muted)]">
                    {lang === "en" ? `Framing Variant ${idx + 1}` : `Variasi Framing ${idx + 1}`}
                  </span>
                </div>

                <div className="mt-5 rounded-[var(--radius-sm)] border border-[var(--line)] bg-[rgb(var(--surface)/0.5)] p-5">
                  <p className="font-display text-lg font-bold leading-relaxed text-[var(--text)] sm:text-xl">
                    &ldquo;{post.text[lang]}&rdquo;
                  </p>
                </div>
              </div>

              {/* Rhetorical Anatomy (Filters dynamically based on activeLens) */}
              <div className="mt-6 space-y-3 border-t border-[var(--separator)] pt-4 text-xs">
                {(activeLens === "all" || activeLens === "facts") && (
                  <div className="rounded-xl border border-[var(--teal)]/20 bg-[var(--teal-soft)] p-3">
                    <div className="flex items-center gap-1.5 font-bold text-[var(--teal-strong)]">
                      <FileCheck2 size={14} />
                      <span>{t.facts}:</span>
                    </div>
                    <p className="mt-1 leading-relaxed text-[var(--text)]">
                      {idx === 0
                        ? (lang === "en" ? "Documented kinship tie between leader and candidate exists in public records." : "Hubungan keluarga antara pemimpin dan kandidat tercatat secara sah di dokumen publik.")
                        : (lang === "en" ? "Candidates from political backgrounds participate in electoral contests." : "Kandidat dengan latar keluarga politisi berpartisipasi dalam kontestasi pemilu.")}
                    </p>
                  </div>
                )}

                {(activeLens === "all" || activeLens === "opinions") && (
                  <div className="rounded-xl border border-[var(--amber)]/20 bg-[var(--amber-soft)] p-3">
                    <div className="flex items-center gap-1.5 font-bold text-[var(--amber)]">
                      <AlertTriangle size={14} />
                      <span>{t.opinions}:</span>
                    </div>
                    <p className="mt-1 leading-relaxed text-[var(--text)]">
                      {idx === 0
                        ? (lang === "en" ? "Assumes competence and merit are automatically inherited through family lineage." : "Mengasumsikan kompetensi dan kelayakan otomatis diwariskan melalui garis keluarga.")
                        : (lang === "en" ? "Universal condemnation: equates kinship directly with criminal nepotism without evidence." : "Vonnis universal: menyamakan ikatan keluarga langsung dengan kejahatan nepotisme tanpa bukti.")}
                    </p>
                  </div>
                )}

                {(activeLens === "all" || activeLens === "emotion") && (
                  <div className="rounded-xl border border-rose-500/20 bg-rose-50 dark:bg-rose-950/30 p-3">
                    <div className="flex items-center gap-1.5 font-bold text-rose-600 dark:text-rose-400">
                      <Sparkles size={14} />
                      <span>{lang === "en" ? "Persuasive Framing Language:" : "Bahasa Framing Persuasif:"}</span>
                    </div>
                    <p className="mt-1 leading-relaxed text-[var(--text)]">
                      {idx === 0
                        ? (lang === "en" ? "Phrases like 'runs in the family' and 'deserves' create intuitive justification without data." : "Frasa 'mengalir dalam keluarga' dan 'layak' menciptakan pembenaran intuitif tanpa data.")
                        : (lang === "en" ? "Words like 'every candidate' and 'guilty' trigger blanket moral outrage without procedural checking." : "Kata 'setiap kandidat' dan 'pasti bersalah' memicu kemarahan moral mutlak tanpa pemeriksaan prosedur.")}
                    </p>
                  </div>
                )}

                {(activeLens === "all" || activeLens === "missing") && (
                  <div className="rounded-xl border border-sky-500/20 bg-sky-50 dark:bg-sky-950/30 p-3">
                    <div className="flex items-center gap-1.5 font-bold text-sky-600 dark:text-sky-400">
                      <HelpCircle size={14} />
                      <span>{t.missing}:</span>
                    </div>
                    <p className="mt-1 leading-relaxed text-[var(--text)]">
                      {lang === "en"
                        ? "Eligibility rules, independent assessment scores, conflict of interest recusals, and alternative candidate profiles."
                        : "Aturan syarat kelayakan, nilai asesmen independen, deklarasi benturan kepentingan, dan profil kandidat alternatif."}
                    </p>
                  </div>
                )}

                {(activeLens === "all" || activeLens === "claims") && (
                  <div className="rounded-xl border border-purple-500/20 bg-purple-50 dark:bg-purple-950/30 p-3">
                    <div className="flex items-center gap-1.5 font-bold text-purple-600 dark:text-purple-400">
                      <ShieldAlert size={14} />
                      <span>{lang === "en" ? "Claims Requiring Concrete Evidence:" : "Klaim Butuh Bukti Konkret:"}</span>
                    </div>
                    <p className="mt-1 leading-relaxed text-[var(--text)]">
                      {idx === 0
                        ? (lang === "en" ? "Verifiable records of open examination results and objective qualifying benchmarks." : "Catatan verifikasi nilai ujian terbuka dan tolok ukur kelayakan objektif.")
                        : (lang === "en" ? "Attributable proof of executive interference, bypassed regulations, or unlawful state facilitation." : "Bukti keterlibatan eksekutif, regulasi yang dilanggar, atau fasilitas negara yang disalahgunakan.")}
                    </p>
                  </div>
                )}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Critical Thinking Prompts Card */}
        <GlassCard className="p-6 sm:p-8" variant="default">
          <div className="flex items-center gap-2 text-[var(--teal)]">
            <Sparkles size={18} />
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[var(--teal-strong)]">
              {t.criticalPrompts}
            </h3>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {comparison.prompts.map((prompt, i) => (
              <div
                key={i}
                className="rounded-[var(--radius-sm)] border border-[var(--line)] bg-[rgb(var(--surface)/0.45)] p-4 text-xs font-medium leading-relaxed text-[var(--text)]"
              >
                <span className="mb-2 block font-mono text-xs font-bold text-[var(--teal)]">
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
