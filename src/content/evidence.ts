export type EvidenceStatus =
  | "verified"
  | "claim"
  | "allegation"
  | "interpretation"
  | "disputed"
  | "unknown";

export type BilingualText = {
  en: string;
  id: string;
};

export type EvidenceItem = {
  label: BilingualText;
  status: EvidenceStatus;
  description: BilingualText;
  date?: string;
  sourceUrl?: string;
};

export type CaseStudy = {
  id: string;
  title: BilingualText;
  status: "placeholder" | "ready";
  disclaimer: BilingualText;
  background: EvidenceItem[];
  timeline: EvidenceItem[];
  process: EvidenceItem[];
  sources: EvidenceItem[];
};

export const placeholderCaseStudy: CaseStudy = {
  id: "case-study-investigation-model",
  title: {
    en: "Case Investigation Model: Distinguishing Kinship from Nepotism",
    id: "Model Investigasi Kasus: Membedakan Hubungan Kekerabatan dari Nepotisme",
  },
  status: "placeholder",
  disclaimer: {
    en: "This educational framework demonstrates how evidence must be methodically categorized into verified facts, unproven allegations, and unknown variables before drawing public conclusions.",
    id: "Kerangka edukasi ini menunjukkan bagaimana bukti harus dikategorikan secara metodis menjadi fakta terverifikasi, tuduhan belum terbukti, dan variabel tak diketahui sebelum menarik kesimpulan publik.",
  },
  background: [
    {
      label: {
        en: "Documented Kinship / Family Relationship",
        id: "Hubungan Kekerabatan / Keluarga Terdokumentasi",
      },
      status: "verified",
      description: {
        en: "A family connection is confirmed by official civil registries and public statements. However, kinship itself is not legal evidence of wrongdoing.",
        id: "Hubungan keluarga terkonfirmasi oleh catatan sipil resmi dan pernyataan publik. Namun, ikatan keluarga itu sendiri bukanlah bukti hukum adanya pelanggaran.",
      },
    },
    {
      label: {
        en: "Public Positions & Offices Held",
        id: "Jabatan Publik yang Dipegang",
      },
      status: "verified",
      description: {
        en: "Official gazettes document that Subject A held office from 2014–2024, and Relative B declared candidacy in 2024.",
        id: "Lembaran resmi negara mencatat Subjek A menjabat pada 2014–2024, dan Kerabat B mencalonkan diri pada tahun 2024.",
      },
    },
  ],
  timeline: [
    {
      date: "Phase 1",
      label: {
        en: "Statutory Eligibility & Rule Formulation",
        id: "Syarat Kelayakan Hukum & Perumusan Aturan",
      },
      status: "verified",
      description: {
        en: "Statutory age or qualification thresholds were contested and modified through judicial constitutional review.",
        id: "Batas usia atau kualifikasi hukum disengketakan dan diubah melalui uji materi di Mahkamah Konstitusi.",
      },
    },
    {
      date: "Phase 2",
      label: {
        en: "Nomination & Official Endorsement",
        id: "Pencalonan & Dukungan Resmi Partai",
      },
      status: "verified",
      description: {
        en: "Party coalition officially filed registration documents fulfilling administrative standards.",
        id: "Koalisi partai politik secara resmi mendaftarkan berkas yang memenuhi syarat administratif.",
      },
    },
    {
      date: "Phase 3",
      label: {
        en: "Allegations of State Facility Utilization",
        id: "Tuduhan Mobilisasi Fasilitas Negara",
      },
      status: "allegation",
      description: {
        en: "Public debate and opposing advocacy groups alleged state assistance was mobilized, which was disputed during election dispute hearings.",
        id: "Perdebatan publik dan kelompok advokasi menuduh adanya bantuan fasilitas negara, yang kemudian diperdebatkan dalam sidang sengketa pemilu.",
      },
    },
  ],
  process: [
    {
      label: {
        en: "Conflict of Interest Review",
        id: "Pemeriksaan Konflik Kepentingan",
      },
      status: "disputed",
      description: {
        en: "Ethics councils reviewed institutional conduct; conflicting opinions exist on whether moral conflicts equate to statutory illegality.",
        id: "Dewan kehormatan etik memeriksa perilaku institusional; terdapat perbedaan pandangan apakah pelanggaran etik serta-merta menggugurkan legalitas hukum.",
      },
    },
    {
      label: {
        en: "Proof of Direct Executive Intervention",
        id: "Bukti Intervensi Eksekutif Langsung",
      },
      status: "unknown",
      description: {
        en: "Direct written directives or concrete proof of coercive executive intervention remain unverified in the public court record.",
        id: "Instruksi tertulis langsung atau bukti konkret intervensi pemaksaan oleh eksekutif masih belum terverifikasi dalam risalah persidangan publik.",
      },
    },
  ],
  sources: [
    {
      label: {
        en: "Court Records & Constitutional Rulings",
        id: "Risalah Sidang Mahkamah & Putusan Konstitusi",
      },
      status: "verified",
      description: {
        en: "Primary legal transcripts and published judicial opinions accessible to the public.",
        id: "Transkrip hukum primer dan salinan putusan yudisial resmi yang dapat diakses publik.",
      },
    },
    {
      label: {
        en: "Independent Investigative Journalism",
        id: "Jurnalisme Investigasi Independen",
      },
      status: "verified",
      description: {
        en: "Cross-verified reporting with multi-source attribution and documented timelines.",
        id: "Laporan terverifikasi silang dengan atribusi multi-sumber dan verifikasi linimasa dokumen.",
      },
    },
    {
      label: {
        en: "Viral Social Media Commentary",
        id: "Komentar Viral Media Sosial",
      },
      status: "claim",
      description: {
        en: "Short clips and headlines frequently remove legal context, conflating kinship with automatic conviction.",
        id: "Klip video pendek dan judul bombastis sering memangkas konteks hukum, menyamakan ikatan keluarga dengan vonis bersalah otomatis.",
      },
    },
  ],
};
