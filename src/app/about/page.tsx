"use client";

import { ShieldCheck, BookOpen, Target, Scale, CheckCircle2 } from "lucide-react";
import { useApp } from "@/lib/state";
import { GlassCard, StatusBadge } from "@/components/ui";
import { PageContainer, PageHeader } from "@/components/layout";

export default function AboutPage() {
  const { t, lang } = useApp();

  const sections = [
    {
      title: t.cardPurposeTitle,
      body: t.cardPurposeBody,
      icon: Target,
      tag: lang === "en" ? "Mission" : "Misi",
      tone: "blue" as const,
    },
    {
      title: t.cardBoundariesTitle,
      body: t.cardBoundariesBody,
      icon: ShieldCheck,
      tag: lang === "en" ? "Neutrality" : "Netralitas",
      tone: "amber" as const,
    },
    {
      title: t.cardEvaluationTitle,
      body: t.cardEvaluationBody,
      icon: Scale,
      tag: lang === "en" ? "Methodology" : "Metodologi",
      tone: "teal" as const,
    },
  ];

  return (
    <PageContainer>
      <PageHeader
        eyebrow={t.aboutEyebrow}
        title={t.aboutTitle}
        body={t.aboutBody}
      />

      <div className="mx-auto max-w-5xl space-y-10">
        {/* Essay Context Card */}
        <GlassCard className="p-6 sm:p-8" variant="thick">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--separator)] pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
              {lang === "en" ? "Academic Essay Context" : "Konteks Esai Akademik"}
            </span>
            <StatusBadge
              label={lang === "en" ? "Research Prototype" : "Prototype Riset"}
              tone="teal"
              size="sm"
            />
          </div>

          <div className="mt-5">
            <h2 className="text-xl font-bold text-[var(--text)] sm:text-2xl">
              {lang === "en"
                ? "Beyond the Feed: Challenging the Normalization of Nepotism Through NaraLens"
                : "Beyond the Feed: Menggugat Normalisasi Nepotisme Melalui NaraLens"}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              {lang === "en"
                ? "Social media algorithms incentivize polarization, simplification, and emotional confirmation bias. NaraLens provides a structured educational sandbox where young citizens can slow down, question claims, and evaluate evidence before sharing or adopting a viewpoint."
                : "Algoritma media sosial cenderung mendorong polarisasi, penyederhanaan isu, dan bias konfirmasi emosional. NaraLens menyediakan ruang latihan edukatif terstruktur di mana generasi muda dapat berhenti sejenak, menguji klaim, dan memeriksa bukti sebelum menyebarkan atau mempercayai sebuah narasi."}
            </p>
          </div>
        </GlassCard>

        {/* 3 Pillars Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <GlassCard
                key={idx}
                className="flex flex-col justify-between p-6 sm:p-7"
                variant="default"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[rgb(var(--surface)/0.8)] border border-[var(--line)] text-[var(--accent)] shadow-sm">
                      <Icon size={20} />
                    </div>
                    <StatusBadge label={section.tag} tone={section.tone} size="sm" />
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-[var(--text)]">
                    {section.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-[var(--muted)]">
                    {section.body}
                  </p>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Ethical Standards Card */}
        <GlassCard className="p-6 sm:p-8" variant="default">
          <div className="flex items-center gap-2 text-[var(--accent)]">
            <BookOpen size={18} />
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--accent)]">
              {lang === "en" ? "Pedagogical Standards & Commitments" : "Standar Pedagogis & Komitmen"}
            </h3>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 text-xs leading-relaxed text-[var(--muted)]">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-[var(--teal)] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[var(--text)]">
                  {lang === "en" ? "No Artificial Intelligence: " : "Bebas dari AI: "}
                </strong>
                {lang === "en"
                  ? "Uses human-curated scenarios, verifiable references, and rule-based feedback to avoid hallucinations or opaque bias."
                  : "Menggunakan skenario kurasi manusia, referensi terverifikasi, dan umpan balik berbasis aturan untuk mencegah halusinasi atau bias algoritma."}
              </span>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-[var(--teal)] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[var(--text)]">
                  {lang === "en" ? "Presumption of Fairness: " : "Asas Keadilan: "}
                </strong>
                {lang === "en"
                  ? "Family relationships alone never constitute proof of nepotism. Procedural integrity and abuse of authority must be examined separately."
                  : "Hubungan keluarga semata tidak pernah menjadi bukti nepotisme. Integritas prosedur dan penyalahgunaan wewenang harus diperiksa secara terpisah."}
              </span>
            </div>
          </div>
        </GlassCard>
      </div>
    </PageContainer>
  );
}
