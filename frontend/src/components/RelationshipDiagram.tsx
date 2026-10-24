"use client";

import { Users, Building2, AlertTriangle, CheckCircle2, ArrowDown, ArrowRight } from "lucide-react";
import { StatusBadge } from "./ui";

export function RelationshipDiagram({ lang }: { lang: "en" | "id" }) {
  return (
    <div className="rounded-[var(--radius-md)] border border-[var(--line)] bg-[rgb(var(--surface)/0.6)] p-5 sm:p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--separator)] pb-3">
        <div className="flex items-center gap-2">
          <Users size={16} className="text-[var(--teal)]" />
          <span className="font-display text-xs font-bold uppercase tracking-wider text-[var(--text)]">
            {lang === "en" ? "Illustrative Relationship & Authority Model" : "Model Ilustratif Relasi & Wewenang"}
          </span>
        </div>
        <StatusBadge
          label={lang === "en" ? "Investigation Framework" : "Kerangka Investigasi"}
          tone="teal"
          size="sm"
        />
      </div>

      <p className="mt-3 text-xs leading-relaxed text-[var(--muted)]">
        {lang === "en"
          ? "NaraLens Core Principle: A family relationship alone never equals nepotism. Researchers must look for evidence along the Institutional Authority line."
          : "Prinsip Inti NaraLens: Hubungan keluarga saja bukan bukti nepotisme. Peneliti harus mencari bukti di sepanjang garis Kewenangan Prosedural."}
      </p>

      {/* Visual Diagram Tree */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {/* Node 1: Public Official (Family Member A) */}
        <div className="flex flex-col justify-between rounded-2xl border border-[var(--line)] bg-[rgb(var(--surface)/0.8)] p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="rounded-md bg-[var(--navy)] text-white px-2 py-0.5 font-mono text-[10px] font-bold">
              PERSON A
            </span>
            <span className="text-[11px] font-bold text-[var(--muted)]">
              {lang === "en" ? "Incumbent Official" : "Pejabat Menjabat"}
            </span>
          </div>
          <h4 className="font-display mt-3 text-sm font-bold text-[var(--text)]">
            {lang === "en" ? "Senior Office Holder" : "Pemegang Jabatan Publik"}
          </h4>
          <p className="mt-1 text-[11px] text-[var(--muted)]">
            {lang === "en" ? "Holds public appointment or supervisory authority." : "Memiliki wewenang penunjukan atau pengawasan."}
          </p>
        </div>

        {/* Node 2: Candidate/Appointee (Family Member B) */}
        <div className="flex flex-col justify-between rounded-2xl border border-[var(--line)] bg-[rgb(var(--surface)/0.8)] p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="rounded-md bg-[var(--teal)] text-white px-2 py-0.5 font-mono text-[10px] font-bold">
              PERSON B
            </span>
            <span className="text-[11px] font-bold text-[var(--muted)]">
              {lang === "en" ? "Candidate / Appointee" : "Kandidat / Pejabat Baru"}
            </span>
          </div>
          <h4 className="font-display mt-3 text-sm font-bold text-[var(--text)]">
            {lang === "en" ? "Kinship Relative" : "Kerabat Keluarga"}
          </h4>
          <p className="mt-1 text-[11px] text-[var(--muted)]">
            {lang === "en" ? "Appointed to public role or contesting office." : "Diangkat ke jabatan publik atau mencalonkan diri."}
          </p>
        </div>
      </div>

      {/* Two Connecting Pathways: Kinship vs Procedural */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {/* Pathway 1: Family Connection (Documented Fact) */}
        <div className="rounded-2xl border border-dashed border-amber-400/40 bg-[var(--amber-soft)] p-4 text-xs">
          <div className="flex items-center gap-2 text-[var(--amber)]">
            <span className="font-bold uppercase tracking-wider text-[10px]">
              {lang === "en" ? "Pathway 1: Kinship Connection" : "Jalur 1: Hubungan Kekerabatan"}
            </span>
          </div>
          <p className="mt-1.5 font-bold text-[var(--text)]">
            {lang === "en" ? "Documented Family Ties (Public Record)" : "Ikatan Keluarga Terdokumentasi (Catatan Publik)"}
          </p>
          <p className="mt-1 leading-relaxed text-[var(--muted)]">
            {lang === "en"
              ? "Status: Verified Fact when backed by official civil records. Insufficient on its own to prove nepotism."
              : "Status: Fakta Terverifikasi bila didukung dokumen kependudukan resmi. Tidak cukup untuk membuktikan nepotisme."}
          </p>
        </div>

        {/* Pathway 2: Procedural Integrity (Required for Nepotism claim) */}
        <div className="rounded-2xl border border-[var(--teal)]/30 bg-[var(--teal-soft)] p-4 text-xs">
          <div className="flex items-center gap-2 text-[var(--teal-strong)]">
            <span className="font-bold uppercase tracking-wider text-[10px]">
              {lang === "en" ? "Pathway 2: Regulatory & Decision Process" : "Jalur 2: Proses Regulasi & Keputusan"}
            </span>
          </div>
          <p className="mt-1.5 font-bold text-[var(--text)]">
            {lang === "en" ? "Procedural & Independence Check" : "Pemeriksaan Prosedur & Independensi"}
          </p>
          <p className="mt-1 leading-relaxed text-[var(--muted)]">
            {lang === "en"
              ? "Key Test: Did Person A intervene? Were rules altered? Was competitive selection bypassed?"
              : "Uji Kunci: Apakah Pejabat A mengintervensi? Apakah aturan diubah? Apakah seleksi dilewati?"}
          </p>
        </div>
      </div>
    </div>
  );
}
