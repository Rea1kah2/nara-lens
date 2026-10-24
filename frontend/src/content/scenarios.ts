import type { FeedScenario, NarrativeComparison, QuizQuestion } from "./types";

export const feedScenarios: FeedScenario[] = [
  {
    id: "family-experience",
    reviewStatus: "draft",
    simulationLabel: { en: "Educational simulation · Fictional content", id: "Simulasi edukasional · Konten fiktif" },
    post: {
      en: "Political experience runs in the family, so the leader's child deserves the position.",
      id: "Pengalaman politik mengalir dalam keluarga, jadi anak pemimpin tersebut layak mendapatkan posisi itu.",
    },
    actions: [
      { id: "accept", label: { en: "Accept the Claim", id: "Terima Klaim" }, feedback: { en: "The wording treats family background as proof of merit. Ask what qualifications and process are documented.", id: "Kalimat ini memperlakukan latar keluarga sebagai bukti kemampuan. Tanyakan kualifikasi dan proses apa yang terdokumentasi." } },
      { id: "question", label: { en: "Question the Claim", id: "Pertanyakan Klaim" }, feedback: { en: "Good first step. Separate the documented relationship from the assumption that the person deserves the position.", id: "Langkah awal yang baik. Pisahkan hubungan keluarga yang terdokumentasi dari asumsi bahwa orang tersebut layak." } },
      { id: "evidence", label: { en: "Check the Evidence", id: "Periksa Bukti" }, feedback: { en: "Look for the selection process, applicable rules, relevant decisions, and evidence of preferential treatment.", id: "Cari proses seleksi, aturan yang berlaku, keputusan terkait, dan bukti perlakuan istimewa." } },
    ],
    evidence: [
      { label: { en: "Family relationship", id: "Hubungan keluarga" }, status: "verified", detail: { en: "A relationship may be documented, but it is not a conclusion.", id: "Hubungan dapat terdokumentasi, tetapi bukan sebuah kesimpulan." } },
      { label: { en: "Merit or process", id: "Kualifikasi atau proses" }, status: "unknown", detail: { en: "The post does not provide enough information.", id: "Post tidak memberikan informasi yang cukup." } },
      { label: { en: "Preferential treatment", id: "Perlakuan istimewa" }, status: "unknown", detail: { en: "No evidence is shown in the fictional post.", id: "Tidak ada bukti yang ditampilkan dalam post fiktif ini." } },
    ],
  },
  {
    id: "automatic-guilt",
    reviewStatus: "draft",
    simulationLabel: { en: "Educational simulation · Fictional content", id: "Simulasi edukasional · Konten fiktif" },
    post: {
      en: "Every candidate from a political family is guilty of nepotism.",
      id: "Setiap kandidat dari keluarga politik pasti bersalah melakukan nepotisme.",
    },
    actions: [
      { id: "accept", label: { en: "Accept the Claim", id: "Terima Klaim" }, feedback: { en: "The claim makes a universal conclusion without examining individual evidence or process.", id: "Klaim ini membuat kesimpulan universal tanpa memeriksa bukti dan proses tiap kasus." } },
      { id: "question", label: { en: "Question the Claim", id: "Pertanyakan Klaim" }, feedback: { en: "Ask whether the claim has defined nepotism and whether it provides evidence beyond family connection.", id: "Tanyakan apakah klaim ini mendefinisikan nepotisme dan memberikan bukti selain hubungan keluarga." } },
      { id: "evidence", label: { en: "Check the Evidence", id: "Periksa Bukti" }, feedback: { en: "Evaluate cases individually. Look for rules, decisions, intervention, and unequal access.", id: "Evaluasi setiap kasus secara terpisah. Cari aturan, keputusan, intervensi, dan akses yang tidak setara." } },
    ],
    evidence: [
      { label: { en: "Universal claim", id: "Klaim universal" }, status: "claim", detail: { en: "The post applies one conclusion to every candidate.", id: "Post menerapkan satu kesimpulan kepada semua kandidat." } },
      { label: { en: "Individual evidence", id: "Bukti individual" }, status: "unknown", detail: { en: "No specific case or source is provided.", id: "Tidak ada kasus atau sumber spesifik yang diberikan." } },
    ],
  },
  {
    id: "missing-process",
    reviewStatus: "draft",
    simulationLabel: { en: "Educational simulation · Fictional content", id: "Simulasi edukasional · Konten fiktif" },
    post: {
      en: "The appointment looks fair because the announcement says it followed the rules.",
      id: "Pengangkatan ini terlihat adil karena pengumumannya menyatakan bahwa prosesnya mengikuti aturan.",
    },
    actions: [
      { id: "accept", label: { en: "Accept the Claim", id: "Terima Klaim" }, feedback: { en: "An announcement is a starting point, not independent proof that every step was fair.", id: "Pengumuman adalah titik awal, bukan bukti independen bahwa setiap langkah sudah adil." } },
      { id: "question", label: { en: "Question the Claim", id: "Pertanyakan Klaim" }, feedback: { en: "Ask which rule applied, who made the decision, and whether the process was open to comparable candidates.", id: "Tanyakan aturan yang berlaku, siapa pengambil keputusan, dan apakah proses terbuka bagi kandidat sebanding." } },
      { id: "evidence", label: { en: "Check the Evidence", id: "Periksa Bukti" }, feedback: { en: "Look for the official procedure, eligibility criteria, decision record, and any documented intervention.", id: "Cari prosedur resmi, kriteria kelayakan, catatan keputusan, dan intervensi yang terdokumentasi." } },
    ],
    evidence: [
      { label: { en: "Official announcement", id: "Pengumuman resmi" }, status: "verified", detail: { en: "The post says an announcement exists, but its contents are not shown.", id: "Post menyebut ada pengumuman, tetapi isinya tidak ditampilkan." } },
      { label: { en: "Complete procedure", id: "Prosedur lengkap" }, status: "unknown", detail: { en: "The steps and decision record are missing.", id: "Tahapan dan catatan keputusan belum tersedia." } },
      { label: { en: "Conflict or intervention", id: "Konflik atau intervensi" }, status: "unknown", detail: { en: "No conclusion can be made without case-specific evidence.", id: "Tidak dapat disimpulkan tanpa bukti spesifik kasus." } },
    ],
  },
];

export const narrativeComparisons: NarrativeComparison[] = [
  {
    id: "same-situation-opposite-framing",
    reviewStatus: "draft",
    title: { en: "Same situation, opposite framing", id: "Situasi sama, framing berlawanan" },
    posts: [
      { label: { en: "Post A", id: "Post A" }, text: { en: "A leader's child deserves the position because political experience runs in the family.", id: "Anak seorang pemimpin layak mendapatkan posisi karena pengalaman politik mengalir dalam keluarga." } },
      { label: { en: "Post B", id: "Post B" }, text: { en: "Every candidate from a political family is guilty of nepotism.", id: "Setiap kandidat dari keluarga politik pasti bersalah melakukan nepotisme." } },
    ],
    prompts: [
      { en: "Which words express an opinion or assumption?", id: "Kata mana yang menyatakan opini atau asumsi?" },
      { en: "What context or evidence is missing from both posts?", id: "Konteks atau bukti apa yang hilang dari kedua post?" },
      { en: "Which claims require checking before reaching a conclusion?", id: "Klaim mana yang perlu diperiksa sebelum menyimpulkan?" },
    ],
  },
  {
    id: "headline-and-context",
    reviewStatus: "draft",
    title: { en: "Headline versus context", id: "Judul dibandingkan konteks" },
    posts: [
      { label: { en: "Headline", id: "Judul" }, text: { en: "Family ties put another insider in power.", id: "Hubungan keluarga kembali menempatkan orang dalam kekuasaan." } },
      { label: { en: "Context note", id: "Catatan konteks" }, text: { en: "The candidate's family connection is documented; the selection process and any preferential treatment require separate verification.", id: "Hubungan keluarga kandidat terdokumentasi; proses seleksi dan kemungkinan perlakuan istimewa perlu diverifikasi secara terpisah." } },
    ],
    prompts: [
      { en: "What does the headline imply without proving?", id: "Apa yang disiratkan judul tanpa dibuktikan?" },
      { en: "Which details would make the account more complete?", id: "Detail apa yang membuat informasi lebih lengkap?" },
      { en: "What should remain labelled as unknown?", id: "Apa yang harus tetap diberi label tidak diketahui?" },
    ],
  },
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: "family-connection",
    reviewStatus: "draft",
    category: "nepotism",
    question: { en: "A public official's relative wins an election. Does this automatically prove nepotism?", id: "Kerabat pejabat publik memenangkan pemilu. Apakah ini otomatis membuktikan nepotisme?" },
    options: [
      { id: "yes", label: { en: "Yes", id: "Ya" }, correct: false },
      { id: "no", label: { en: "No", id: "Tidak" }, correct: true },
    ],
    explanation: { en: "A family relationship alone is insufficient. Further information about the process, relevant decisions, possible preferential treatment, and applicable rules is needed.", id: "Hubungan keluarga saja tidak cukup. Diperlukan informasi tentang proses, keputusan terkait, kemungkinan perlakuan istimewa, dan aturan yang berlaku." },
  },
  {
    id: "emotional-wording",
    reviewStatus: "draft",
    category: "framing",
    question: { en: "Which phrase most clearly signals persuasive framing rather than a verified fact?", id: "Frasa mana yang paling jelas menunjukkan framing persuasif, bukan fakta terverifikasi?" },
    options: [
      { id: "a", label: { en: "The election was held on Tuesday.", id: "Pemilu dilaksanakan pada hari Selasa." }, correct: false },
      { id: "b", label: { en: "The candidate obviously deserves the seat.", id: "Kandidat itu jelas layak mendapatkan kursi tersebut." }, correct: true },
    ],
    explanation: { en: "Words such as 'obviously' and 'deserves' express evaluation and should be examined rather than treated as facts.", id: "Kata seperti 'jelas' dan 'layak' menyatakan penilaian dan perlu diperiksa, bukan langsung dianggap fakta." },
  },
  {
    id: "missing-context",
    reviewStatus: "draft",
    category: "missing-context",
    question: { en: "A post names a family relationship but gives no information about the selection process. What is missing?", id: "Sebuah post menyebut hubungan keluarga tetapi tidak memberi informasi tentang proses seleksi. Apa yang hilang?" },
    options: [
      { id: "context", label: { en: "Process and decision context", id: "Konteks proses dan keputusan" }, correct: true },
      { id: "certainty", label: { en: "A reason to assume the conclusion", id: "Alasan untuk menganggap kesimpulannya benar" }, correct: false },
    ],
    explanation: { en: "The process, rules, decision-makers, and comparable candidates may be needed to evaluate the claim.", id: "Proses, aturan, pengambil keputusan, dan kandidat pembanding mungkin diperlukan untuk menilai klaim." },
  },
  {
    id: "source-quality",
    reviewStatus: "draft",
    category: "sources",
    question: { en: "Which source is most useful for checking when an official appointment occurred?", id: "Sumber mana yang paling berguna untuk memeriksa kapan pengangkatan resmi terjadi?" },
    options: [
      { id: "official", label: { en: "An official appointment record", id: "Catatan pengangkatan resmi" }, correct: true },
      { id: "comment", label: { en: "An anonymous comment repeating the claim", id: "Komentar anonim yang mengulang klaim" }, correct: false },
    ],
    explanation: { en: "A relevant primary record is generally stronger for checking the date and formal process than an unattributed comment.", id: "Catatan primer yang relevan umumnya lebih kuat untuk memeriksa tanggal dan proses formal daripada komentar tanpa atribusi." },
  },
  {
    id: "fact-opinion",
    reviewStatus: "draft",
    category: "facts-opinions",
    question: { en: "Which statement is an interpretation rather than a directly documented fact?", id: "Pernyataan mana yang merupakan interpretasi, bukan fakta yang terdokumentasi langsung?" },
    options: [
      { id: "record", label: { en: "The appointment was announced on 4 June.", id: "Pengangkatan diumumkan pada 4 Juni." }, correct: false },
      { id: "interpretation", label: { en: "The appointment proves the system is unfair.", id: "Pengangkatan itu membuktikan sistemnya tidak adil." }, correct: true },
    ],
    explanation: { en: "The second statement makes a broader interpretation that requires additional evidence and reasoning.", id: "Pernyataan kedua membuat interpretasi yang lebih luas dan memerlukan bukti serta alasan tambahan." },
  },
];
