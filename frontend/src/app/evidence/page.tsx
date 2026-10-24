"use client";

import { useState } from "react";
import { AlertCircle, Calendar, FileText, CheckCircle2, Filter, Layers } from "lucide-react";
import { useApp } from "@/lib/state";
import { allCaseStudies, type EvidenceStatus } from "@/content/evidence";
import { ActionButton, GlassCard, StatusBadge, NextStepCard } from "@/components/ui";
import { PageContainer, PageHeader } from "@/components/layout";
import { RelationshipDiagram } from "@/components/RelationshipDiagram";

function getStatusTone(status: EvidenceStatus): "teal" | "amber" | "rose" | "blue" | "neutral" {
  switch (status) {
    case "verified":
      return "teal";
    case "allegation":
      return "rose";
    case "claim":
      return "amber";
    case "disputed":
    case "interpretation":
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
  const { t, lang, completedActivities, markComplete } = useApp();
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const caseStudy = allCaseStudies[activeCaseIndex] || allCaseStudies[0];
  const completed = completedActivities.includes("evidence");

  // Filter items by status if active
  const filterList = (items: typeof caseStudy.background) => {
    if (filterStatus === "all") return items;
    return items.filter((item) => item.status === filterStatus);
  };

  return (
    <PageContainer>
      <PageHeader
        eyebrow={t.evidenceEyebrow}
        title={t.evidenceTitle}
        body={t.evidenceSubtitle}
      />

      <div className="mx-auto max-w-4xl space-y-8">
        {/* Case Study Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-[var(--radius-lg)] border border-[var(--line)] bg-[rgb(var(--surface)/0.45)] p-2.5 backdrop-blur-md">
          <div className="flex items-center gap-2 px-3 py-1 text-xs font-bold text-[var(--muted)]">
            <Layers size={16} className="text-[var(--teal)]" />
            <span>{lang === "en" ? "Select Case Study:" : "Pilih Studi Kasus:"}</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {allCaseStudies.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveCaseIndex(idx);
                  setFilterStatus("all");
                }}
                className={`focus-ring rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-200 ${
                  activeCaseIndex === idx
                    ? "bg-[var(--teal)] text-white shadow-sm"
                    : "border border-[var(--line)] bg-[rgb(var(--surface)/0.5)] text-[var(--muted)] hover:text-[var(--text)] hover:bg-[rgb(var(--surface)/0.8)]"
                }`}
              >
                {item.title[lang]}
              </button>
            ))}
          </div>
        </div>

        {/* Evidence Status Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-[var(--line)] bg-[rgb(var(--surface)/0.3)] p-3 text-xs">
          <div className="flex items-center gap-1.5 text-[var(--muted)] pr-2 font-medium">
            <Filter size={14} />
            <span>{lang === "en" ? "Filter by Evidence Category:" : "Filter Kategori Bukti:"}</span>
          </div>
          {[
            { id: "all", label: lang === "en" ? "All Records" : "Semua Catatan" },
            { id: "verified", label: lang === "en" ? "Verified Facts" : "Fakta Terverifikasi" },
            { id: "allegation", label: lang === "en" ? "Public Allegations" : "Tuduhan Publik" },
            { id: "disputed", label: lang === "en" ? "Disputed" : "Berselisih" },
            { id: "claim", label: lang === "en" ? "Unverified Claims" : "Klaim Belum Teruji" },
          ].map((pill) => (
            <button
              key={pill.id}
              onClick={() => setFilterStatus(pill.id)}
              className={`rounded-full px-3 py-1 font-semibold transition-all ${
                filterStatus === pill.id
                  ? "bg-[var(--navy)] text-white dark:bg-white dark:text-[var(--navy)]"
                  : "border border-[var(--line)] bg-[rgb(var(--surface)/0.6)] text-[var(--muted)] hover:text-[var(--text)]"
              }`}
            >
              {pill.label}
            </button>
          ))}
        </div>

        {/* Case Study Header Card */}
        <GlassCard className="p-6 sm:p-8" variant="thick">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--separator)] pb-4">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[var(--teal)] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--teal)]">
                {caseStudy.caseType ? caseStudy.caseType[lang] : t.researchNotice}
              </span>
            </div>
            <StatusBadge
              label={caseStudy.status === "ready" ? (lang === "en" ? "Curated Case Study" : "Studi Kasus Terkurasi") : (lang === "en" ? "Methodology Prototype" : "Prototype Metodologi")}
              tone={caseStudy.status === "ready" ? "teal" : "amber"}
              size="sm"
            />
          </div>

          <h2 className="font-display mt-5 text-2xl font-extrabold text-[var(--text)] sm:text-3xl">
            {caseStudy.title[lang]}
          </h2>

          <div className="mt-4 flex items-start gap-3 rounded-[var(--radius-sm)] border border-[var(--teal)]/25 bg-[var(--teal-soft)] p-4 text-xs leading-relaxed text-[var(--text)]">
            <AlertCircle size={18} className="text-[var(--teal)] shrink-0 mt-0.5" />
            <p>{caseStudy.disclaimer[lang]}</p>
          </div>

          {/* Relationship Diagram Feature (Brief Poin 7) */}
          <div className="mt-8">
            <RelationshipDiagram lang={lang} />
          </div>

          {/* Section 1: Background & Documented Family Ties */}
          <div className="mt-10 border-t border-[var(--separator)] pt-8">
            <div className="flex items-center gap-2 text-[var(--teal)]">
              <FileText size={16} />
              <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[var(--teal-strong)]">
                {t.sectionBackground}
              </h3>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {filterList(caseStudy.background).map((item) => (
                <div
                  key={item.label.en}
                  className="rounded-[var(--radius-sm)] border border-[var(--line)] bg-[rgb(var(--surface)/0.5)] p-4 text-xs"
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
                  <p className="mt-2 leading-relaxed text-[var(--muted)]">
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
              <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[var(--teal-strong)]">
                {t.sectionTimeline}
              </h3>
            </div>

            <div className="relative mt-6 space-y-6 pl-6 before:absolute before:bottom-2 before:left-[9px] before:top-2 before:w-[2px] before:bg-[var(--line)]">
              {filterList(caseStudy.timeline).map((event, i) => (
                <div key={i} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute -left-6 top-1 flex h-5 w-5 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--teal)] text-[10px] font-bold text-white shadow-sm">
                    {i + 1}
                  </div>

                  <div className="rounded-[var(--radius-sm)] border border-[var(--line)] bg-[rgb(var(--surface)/0.5)] p-4 text-xs">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        {event.date && (
                          <span className="rounded-md bg-[rgb(var(--surface)/0.8)] px-2 py-0.5 font-mono text-[11px] font-bold text-[var(--teal-strong)]">
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
                    <p className="mt-2 leading-relaxed text-[var(--muted)]">
                      {event.description[lang]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Decision Process & Conflict of Interest */}
          <div className="mt-10 border-t border-[var(--separator)] pt-8">
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[var(--teal-strong)]">
              {t.sectionProcess}
            </h3>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {filterList(caseStudy.process).map((item) => (
                <div
                  key={item.label.en}
                  className="rounded-[var(--radius-sm)] border border-[var(--line)] bg-[rgb(var(--surface)/0.5)] p-4 text-xs"
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
                  <p className="mt-2 leading-relaxed text-[var(--muted)]">
                    {item.description[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Sources & Limits */}
          <div className="mt-10 border-t border-[var(--separator)] pt-8">
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
              {t.sectionSources}
            </h3>

            <div className="mt-4 space-y-2.5">
              {filterList(caseStudy.sources).map((item) => (
                <div
                  key={item.label.en}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded-[var(--radius-sm)] border border-[var(--line)] bg-[rgb(var(--surface)/0.35)] p-3.5 text-xs"
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

          <div className="mt-8 border-t border-[var(--separator)] pt-6">
            <ActionButton onClick={() => markComplete("evidence")} disabled={completed}>
              <CheckCircle2 size={16} />
              {completed ? t.completedEvidence : t.markEvidenceComplete}
            </ActionButton>
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
