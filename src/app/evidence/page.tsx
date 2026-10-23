"use client";

import { AlertCircle, Calendar, FileText, CheckCircle2, HelpCircle } from "lucide-react";
import { useApp } from "@/lib/state";
import { placeholderCaseStudy, type EvidenceItem, type EvidenceStatus } from "@/content/evidence";
import { GlassCard, StatusBadge, NextStepCard } from "@/components/ui";
import { PageContainer, PageHeader } from "@/components/layout";

function getStatusTone(status: EvidenceStatus): "teal" | "amber" | "rose" | "blue" | "neutral" {
  switch (status) {
    case "verified":
      return "teal";
    case "allegation":
      return "rose";
    case "claim":
      return "amber";
    case "disputed":
      return "blue";
    case "unknown":
    default:
      return "neutral";
  }
}

function getStatusLabel(status: EvidenceStatus, lang: "en" | "id"): string {
  const map: Record<EvidenceStatus, { en: string; id: string }> = {
    verified: { en: "Verified Fact", id: "Fakta Terverifikasi" },
    allegation: { en: "Public Allegation", id: "Tuduhan Publik" },
    claim: { en: "Unverified Claim", id: "Klaim Belum Teruji" },
    disputed: { en: "Disputed Record", id: "Catatan Berselisih" },
    unknown: { en: "Unknown / Unverified", id: "Belum Terverifikasi" },
    interpretation: { en: "Interpretation", id: "Interpretasi" },
  };
  return map[status]?.[lang] || status;
}

export default function EvidencePage() {
  const { t, lang } = useApp();
  const caseStudy = placeholderCaseStudy;

  return (
    <PageContainer>
      <PageHeader
        eyebrow={t.evidenceEyebrow}
        title={t.evidenceTitle}
        body={t.evidenceSubtitle}
      />

      <div className="mx-auto max-w-4xl space-y-10">
        {/* Case Study Header Card */}
        <GlassCard className="p-6 sm:p-8" variant="thick">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--separator)] pb-4">
            <div className="flex items-center gap-2">
              <span className="flex h-3 w-3 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                {t.researchNotice}
              </span>
            </div>
            <StatusBadge
              label={lang === "en" ? "Methodology Prototype" : "Prototype Metodologi"}
              tone="amber"
              size="sm"
            />
          </div>

          <h2 className="mt-5 text-2xl font-extrabold text-[var(--text)] sm:text-3xl">
            {caseStudy.title[lang]}
          </h2>

          <div className="mt-4 flex items-start gap-3 rounded-2xl border border-amber-500/20 bg-amber-500/10 p-4 text-xs leading-relaxed text-[var(--text)]">
            <AlertCircle size={18} className="text-amber-500 shrink-0 mt-0.5" />
            <p>{caseStudy.disclaimer[lang]}</p>
          </div>

          {/* Section 1: Background */}
          <div className="mt-8">
            <div className="flex items-center gap-2 text-[var(--accent)]">
              <FileText size={16} />
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                {t.sectionBackground}
              </h3>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {caseStudy.background.map((item) => (
                <div
                  key={item.label.en}
                  className="rounded-2xl border border-[var(--line)] bg-[rgb(var(--surface)/0.4)] p-4 text-xs"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-[var(--text)]">
                      {item.label[lang]}
                    </span>
                    <StatusBadge
                      label={getStatusLabel(item.status, lang)}
                      tone={getStatusTone(item.status)}
                      size="sm"
                    />
                  </div>
                  <p className="mt-2.5 leading-relaxed text-[var(--muted)]">
                    {item.description[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Chronological Timeline */}
          <div className="mt-10 border-t border-[var(--separator)] pt-8">
            <div className="flex items-center gap-2 text-[var(--teal)]">
              <Calendar size={16} />
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--teal)]">
                {t.sectionTimeline}
              </h3>
            </div>

            <div className="relative mt-6 space-y-6 pl-6 before:absolute before:bottom-2 before:left-[9px] before:top-2 before:w-[2px] before:bg-[var(--line)]">
              {caseStudy.timeline.map((event, i) => (
                <div key={i} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute -left-6 top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[var(--bg)] bg-[var(--accent)] text-[10px] font-bold text-white shadow-sm">
                    {i + 1}
                  </div>

                  <div className="rounded-2xl border border-[var(--line)] bg-[rgb(var(--surface)/0.4)] p-4 text-xs">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        {event.date && (
                          <span className="rounded-md bg-[rgb(var(--surface)/0.8)] px-2 py-0.5 font-mono text-[11px] font-bold text-[var(--accent)]">
                            {event.date}
                          </span>
                        )}
                        <span className="font-bold text-[var(--text)]">
                          {event.label[lang]}
                        </span>
                      </div>
                      <StatusBadge
                        label={getStatusLabel(event.status, lang)}
                        tone={getStatusTone(event.status)}
                        size="sm"
                      />
                    </div>
                    <p className="mt-2.5 leading-relaxed text-[var(--muted)]">
                      {event.description[lang]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Decision Process */}
          <div className="mt-10 border-t border-[var(--separator)] pt-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
              {t.sectionProcess}
            </h3>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {caseStudy.process.map((item) => (
                <div
                  key={item.label.en}
                  className="rounded-2xl border border-[var(--line)] bg-[rgb(var(--surface)/0.4)] p-4 text-xs"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-[var(--text)]">
                      {item.label[lang]}
                    </span>
                    <StatusBadge
                      label={getStatusLabel(item.status, lang)}
                      tone={getStatusTone(item.status)}
                      size="sm"
                    />
                  </div>
                  <p className="mt-2.5 leading-relaxed text-[var(--muted)]">
                    {item.description[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Sources & Limits */}
          <div className="mt-10 border-t border-[var(--separator)] pt-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
              {t.sectionSources}
            </h3>

            <div className="mt-4 space-y-2.5">
              {caseStudy.sources.map((item) => (
                <div
                  key={item.label.en}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded-2xl border border-[var(--line)] bg-[rgb(var(--surface)/0.25)] p-3.5 text-xs"
                >
                  <div>
                    <span className="font-bold text-[var(--text)]">
                      {item.label[lang]}
                    </span>
                    <p className="mt-0.5 text-[var(--muted)]">
                      {item.description[lang]}
                    </p>
                  </div>
                  <StatusBadge
                    label={getStatusLabel(item.status, lang)}
                    tone={getStatusTone(item.status)}
                    size="sm"
                  />
                </div>
              ))}
            </div>
          </div>
        </GlassCard>

        {/* Next Step */}
        <NextStepCard
          title={t.whatNext}
          body={lang === "en" ? "Ready to test your critical reading with the Evidence Quiz?" : "Uji kemampuan membedakan bukti dan opini di Kuis Periksa Bukti!"}
          action={t.quizTitle}
          href="/quiz"
        />
      </div>
    </PageContainer>
  );
}
