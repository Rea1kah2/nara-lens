export type Lang = "en" | "id";

export type NavItem = {
  readonly label: string;
  readonly href: string;
};

const rawCopy = {

  en: {
    // Navigation
    nav: [
      { label: "Home", href: "/" },
      { label: "Explore the Feed", href: "/feed" },
      { label: "Narrative Lab", href: "/lab" },
      { label: "Evidence Explorer", href: "/evidence" },
      { label: "Check the Evidence", href: "/quiz" },
      { label: "My Journey", href: "/journey" },
      { label: "About", href: "/about" },
    ],
    tagline: "Look Beyond the Narrative.",
    platformType: "Interactive Digital Political Literacy",

    // Home
    heroTitle: "Not everything you see tells the whole story.",
    heroBody: "Explore political narratives, examine the evidence, and discover what lies beyond the feed. NaraLens helps you critically examine digital narratives surrounding political dynasties and the normalization of nepotism.",
    start: "Explore the Feed",
    learnMore: "How it works",
    simulationBadge: "Educational Simulation · Fictional Content",
    heroCardQuote: "“Political experience runs in the family, so the next generation deserves the role.”",
    feature1Title: "Explore the Feed",
    feature1Desc: "Encounter simulated posts, make immediate choices, and reveal what digital feeds often conceal.",
    feature2Title: "Narrative Lab",
    feature2Desc: "Compare contrasting framings of identical political situations to dissect rhetoric and bias.",
    feature3Title: "Evidence Explorer",
    feature3Desc: "Use an investigation template to separate sourced facts from allegations, interpretations, and unknowns.",

    // Feed
    feedEyebrow: "Simulated Social Feed",
    feedTitle: "A claim is only the beginning.",
    feedSubtitle: "Read this simulated post carefully. What is your immediate critical reaction?",
    scenarioCounter: "Scenario",
    of: "of",
    acceptClaim: "Accept Claim",
    questionClaim: "Question Claim",
    checkEvidence: "Check Evidence",
    feedbackHeading: "Critical Breakdown",
    feedbackNote: "A family connection is not standalone proof of nepotism. Look for procedural rules, decision-maker independence, and documented preferential treatment.",
    whatNext: "Recommended Next Step",
    nextScenario: "Next Scenario",
    prevScenario: "Previous Scenario",
    allScenariosExplored: "You've explored all simulated scenarios in this session!",

    // Lab
    labEyebrow: "Narrative Analysis",
    labTitle: "Narrative Lab",
    labBody: "Compare two framings of a similar political issue. See how identical facts produce conflicting public reactions through selective language and omission.",
    comparisonSelector: "Select Comparison Case",
    facts: "Documented Facts",
    opinions: "Opinions & Assumptions",
    missing: "Missing Context",
    criticalPrompts: "Critical Thinking Questions",
    markComplete: "Mark Narrative Lab Completed",
    completedLab: "Completed Lab Exercise",

    // Evidence Explorer
    evidenceEyebrow: "Illustrative Investigation Template",
    evidenceTitle: "Evidence Explorer",
    evidenceSubtitle: "Use an illustrative investigation template to see what sources are needed before classifying a claim as fact, allegation, or unknown.",
    caseDisclaimer: "Educational Prototype Case Study: Designed to demonstrate how evidence should be structured and verified before conclusions are reached.",
    sectionBackground: "Background & Relationships to Verify",
    sectionTimeline: "Timeline Questions",
    sectionProcess: "Appointment Process & Decision Questions",
    sectionSources: "Sources to Collect & Limitations",
    statusVerified: "Verified Fact",
    statusClaim: "Unverified Claim",
    statusAllegation: "Public Allegation",
    statusDisputed: "Disputed Record",
    statusUnknown: "Unknown / Needs Research",
    researchNotice: "Research in Progress",
    markEvidenceComplete: "Mark Evidence Explorer Completed",
    completedEvidence: "Completed Evidence Explorer",

    // Quiz
    quizEyebrow: "Critical Assessment",
    quizTitle: "Check the Evidence",
    quizSubtitle: "Evaluate these scenarios to test your ability to separate assumptions from evidence.",
    questionCounter: "Question",
    selectOption: "Select the most accurate response:",
    correctFeedback: "Well analyzed! You recognized the distinction between family ties and evidence of nepotism.",
    incorrectFeedback: "Keep in mind: A family relationship alone is insufficient to establish nepotism without procedural evidence.",
    nextQuestion: "Next Question",
    quizFinishedTitle: "Quiz Completed!",
    quizFinishedBody: "You have reviewed all 5 critical literacy scenarios. Your results help personalize your recommended pathway.",
    viewJourney: "View My Learning Journey",
    retakeQuiz: "Retake Quiz",

    // Journey
    journeyEyebrow: "Personal Pathway",
    journey: "My Learning Journey",
    progress: "Your progress and activity records are saved privately on this device.",
    activities: "Completed Activities",
    skillsTitle: "Core Competencies",
    skill1: "Distinguishing Facts from Opinions",
    skill2: "Evaluating Source Credibility",
    skill3: "Identifying Framing & Missing Context",
    skill4: "Separating Kinship from Nepotism Evidence",
    recommendedTitle: "Recommended Activity for You",
    reset: "Reset Progress",
    resetHint: "Clears your local session data on this browser.",
    resetDone: "Progress has been reset.",

    // About
    aboutEyebrow: "Methodology & Purpose",
    aboutTitle: "About NaraLens",
    aboutBody: "NaraLens is an interactive educational prototype designed to empower young citizens to navigate political narratives with discernment, healthy skepticism, and evidence-first thinking.",
    cardPurposeTitle: "Our Purpose",
    cardPurposeBody: "We do not tell users what political beliefs to hold. We provide tools to recognize when rhetoric replaces evidence and when family ties are conflated with misconduct.",
    cardBoundariesTitle: "Platform Boundaries",
    cardBoundariesBody: "NaraLens is not a partisan campaign, not a commercial fact-checker, and not a substitute for legal judgment or court verdicts.",
    cardEvaluationTitle: "Evaluation & Research",
    cardEvaluationBody: "We measure effectiveness through pre- and post-test digital literacy evaluations among student cohorts in Indonesian universities.",
  },
  id: {
    // Navigation
    nav: [
      { label: "Beranda", href: "/" },
      { label: "Jelajahi Feed", href: "/feed" },
      { label: "Narrative Lab", href: "/lab" },
      { label: "Evidence Explorer", href: "/evidence" },
      { label: "Periksa Bukti", href: "/quiz" },
      { label: "Perjalanan Belajar", href: "/journey" },
      { label: "Tentang", href: "/about" },
    ],
    tagline: "Look Beyond the Narrative.",
    platformType: "Literasi Politik Digital Interaktif",

    // Home
    heroTitle: "Tidak semua yang kamu lihat menceritakan keseluruhan cerita.",
    heroBody: "Telusuri narasi politik, periksa bukti, dan temukan apa yang ada di balik linimasa. NaraLens membantumu mengkaji secara kritis narasi digital seputar dinasti politik dan normalisasi nepotisme.",
    start: "Jelajahi Feed",
    learnMore: "Cara Kerja",
    simulationBadge: "Simulasi Edukasional · Konten Fiktif",
    heroCardQuote: "“Pengalaman politik mengalir dalam keluarga, jadi generasi penerus layak mendapatkan posisi itu.”",
    feature1Title: "Jelajahi Feed",
    feature1Desc: "Hadapi simulasi postingan media sosial, tentukan respon kritismu, dan temukan apa yang sering disembunyikan linimasa.",
    feature2Title: "Narrative Lab",
    feature2Desc: "Bandingkan dua sudut pandang berbeda atas isu politik yang sama untuk membedah retorika dan bias bahasa.",
    feature3Title: "Evidence Explorer",
    feature3Desc: "Gunakan templat investigasi untuk memisahkan fakta bersumber dari tuduhan, interpretasi, dan hal yang belum diketahui.",

    // Feed
    feedEyebrow: "Simulasi Linimasa Medsos",
    feedTitle: "Sebuah klaim hanyalah titik awal.",
    feedSubtitle: "Baca postingan simulasi berikut secara cermat. Apa tindakan kritis pertamamu?",
    scenarioCounter: "Skenario",
    of: "dari",
    acceptClaim: "Terima Klaim",
    questionClaim: "Pertanyakan Klaim",
    checkEvidence: "Periksa Bukti",
    feedbackHeading: "Ulasan Kritis",
    feedbackNote: "Hubungan keluarga semata bukan bukti nepotisme. Periksa aturan prosedur, independensi pembuat keputusan, dan bukti perlakuan khusus yang terdokumentasi.",
    whatNext: "Langkah Berikut yang Disarankan",
    nextScenario: "Skenario Berikutnya",
    prevScenario: "Skenario Sebelumnya",
    allScenariosExplored: "Kamu telah menelusuri seluruh skenario simulasi pada sesi ini!",

    // Lab
    labEyebrow: "Analisis Narasi",
    labTitle: "Narrative Lab",
    labBody: "Bandingkan dua cara penyajian situasi serupa. Amati bagaimana fakta yang sama dapat memicu respon publik yang bertolak belakang melalui pemilihan kata dan penghilangan konteks.",
    comparisonSelector: "Pilih Kasus Komparasi",
    facts: "Fakta Terdokumentasi",
    opinions: "Opini & Asumsi",
    missing: "Konteks yang Hilang",
    criticalPrompts: "Pertanyaan Refleksi Kritis",
    markComplete: "Tandai Lab Selesai",
    completedLab: "Latihan Lab Diselesaikan",

    // Evidence Explorer
    evidenceEyebrow: "Templat Investigasi Ilustratif",
    evidenceTitle: "Evidence Explorer",
    evidenceSubtitle: "Gunakan templat investigasi ilustratif untuk melihat sumber yang diperlukan sebelum menggolongkan klaim sebagai fakta, tuduhan, atau hal yang belum diketahui.",
    caseDisclaimer: "Studi Kasus Prototype Edukasional: Dirancang untuk menunjukkan bagaimana bukti harus disusun dan diverifikasi sebelum kesimpulan diambil.",
    sectionBackground: "Latar Belakang & Hubungan yang Perlu Diverifikasi",
    sectionTimeline: "Pertanyaan Linimasa",
    sectionProcess: "Proses Pengangkatan & Pertanyaan Keputusan",
    sectionSources: "Sumber yang Perlu Dikumpulkan & Batasan",
    statusVerified: "Fakta Terverifikasi",
    statusClaim: "Klaim Belum Teruji",
    statusAllegation: "Tuduhan Publik",
    statusDisputed: "Catatan Berselisih",
    statusUnknown: "Belum Diketahui / Butuh Riset",
    researchNotice: "Riset Sedang Berjalan",
    markEvidenceComplete: "Tandai Evidence Explorer Selesai",
    completedEvidence: "Evidence Explorer Diselesaikan",

    // Quiz
    quizEyebrow: "Uji Kritis",
    quizTitle: "Periksa Bukti",
    quizSubtitle: "Evaluasi skenario berikut untuk menguji kemampuanmu membedakan asumsi dengan bukti faktual.",
    questionCounter: "Pertanyaan",
    selectOption: "Pilih jawaban yang paling tepat:",
    correctFeedback: "Analisis tepat! Kamu mampu membedakan antara ikatan keluarga semata dengan bukti nepotisme nyata.",
    incorrectFeedback: "Ingat prinsip ini: Hubungan keluarga saja belum cukup membuktikan nepotisme tanpa adanya bukti pelanggaran prosedur.",
    nextQuestion: "Pertanyaan Berikutnya",
    quizFinishedTitle: "Kuis Selesai!",
    quizFinishedBody: "Kamu telah menyelesaikan seluruh 5 skenario literasi kritis. Hasil ini digunakan untuk mempersonalisasi rekomendasi belajarmu.",
    viewJourney: "Lihat Perjalanan Belajar Saya",
    retakeQuiz: "Ulangi Kuis",

    // Journey
    journeyEyebrow: "Jalur Personalisasi",
    journey: "Perjalanan Belajar Saya",
    progress: "Kemajuan dan riwayat aktivitas belajarmu tersimpan secara privat di perangkat ini.",
    activities: "Aktivitas yang Diselesaikan",
    skillsTitle: "Kompetensi Literasi Inti",
    skill1: "Membedakan Fakta dari Opini",
    skill2: "Mengevaluasi Kredibilitas Sumber",
    skill3: "Mengenali Pembingkaian & Konteks Hilang",
    skill4: "Memisahkan Kekerabatan dari Bukti Nepotisme",
    recommendedTitle: "Aktivitas Belajar yang Direkomendasikan",
    reset: "Reset Kemajuan",
    resetHint: "Menghapus data sesi lokal di peramban ini.",
    resetDone: "Kemajuan telah direset.",

    // About
    aboutEyebrow: "Metodologi & Tujuan",
    aboutTitle: "Tentang NaraLens",
    aboutBody: "NaraLens adalah prototype edukasional interaktif yang dirancang untuk membekali generasi muda agar mampu menyikapi narasi politik dengan bijak, skeptisisme sehat, dan berpijak pada bukti.",
    cardPurposeTitle: "Tujuan Kami",
    cardPurposeBody: "Kami tidak mendikte pilihan politik pengguna. Kami menyediakan sarana untuk menyadari ketika retorika menggantikan bukti dan ketika ikatan keluarga disamakan dengan pelanggaran.",
    cardBoundariesTitle: "Batasan Platform",
    cardBoundariesBody: "NaraLens bukan instrumen kampanye partisan, bukan pemeriksa fakta komersial, dan bukan pengganti putusan peradilan resmi.",
    cardEvaluationTitle: "Evaluasi & Riset",
    cardEvaluationBody: "Efektivitas platform ini diukur melalui evaluasi pre-test dan post-test literasi politik pada kelompok mahasiswa di universitas Indonesia.",
  },
} as const;

export type Copy = {
  readonly [K in keyof typeof rawCopy.en]: K extends "nav"
    ? readonly NavItem[]
    : string;
};

export const copy: Record<Lang, Copy> = rawCopy;

