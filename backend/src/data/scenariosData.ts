export interface BilingualText {
  en: string;
  id: string;
}

export type EvidenceStatus =
  | "verified"
  | "claim"
  | "allegation"
  | "interpretation"
  | "disputed"
  | "unknown";

export interface FeedScenario {
  id: string;
  simulationLabel: BilingualText;
  post: BilingualText;
  authorName: BilingualText;
  handle: string;
  timestamp: string;
  category: BilingualText;
  metrics: {
    likes: number;
    reposts: number;
    replies: number;
  };
  actions: {
    id: "accept" | "question" | "evidence";
    label: BilingualText;
    feedback: BilingualText;
  }[];
  evidence: {
    label: BilingualText;
    status: EvidenceStatus;
    detail: BilingualText;
  }[];
}

export interface RhetoricalElement {
  id: "facts" | "opinions" | "emotion" | "missing" | "claims";
  label: BilingualText;
  description: BilingualText;
  highlights: BilingualText[];
}

export interface NarrativeComparison {
  id: string;
  title: BilingualText;
  posts: {
    label: BilingualText;
    text: BilingualText;
    framingVariant: BilingualText;
  }[];
  rhetoricalAnatomy: RhetoricalElement[];
  prompts: BilingualText[];
}

export interface QuizQuestion {
  id: string;
  category: "facts-opinions" | "framing" | "missing-context" | "sources" | "nepotism";
  question: BilingualText;
  options: {
    id: string;
    label: BilingualText;
    correct: boolean;
  }[];
  explanation: BilingualText;
}

export const feedScenarios: FeedScenario[] = [
  {
    id: "family-experience",
    simulationLabel: {
      en: "Educational simulation · Fictional content",
      id: "Simulasi edukasional · Konten fiktif",
    },
    authorName: {
      en: "Public Square Observer",
      id: "Pengamat Opini Publik",
    },
    handle: "@public_observer",
    timestamp: "2h ago",
    category: {
      en: "Political Dynasty & Merit Claim",
      id: "Klaim Dinasti Politik & Kemampuan",
    },
    metrics: {
      likes: 1420,
      reposts: 382,
      replies: 124,
    },
    post: {
      en: "Political experience runs in the family, so the leader's child deserves the position.",
      id: "Pengalaman politik mengalir dalam keluarga, jadi anak pemimpin tersebut layak mendapatkan posisi itu.",
    },
    actions: [
      {
        id: "accept",
        label: { en: "Accept the Claim", id: "Terima Klaim" },
        feedback: {
          en: "The wording treats family background as proof of merit. Ask what qualifications and process are documented.",
          id: "Kalimat ini memperlakukan latar keluarga sebagai bukti kemampuan. Tanyakan kualifikasi dan proses apa yang terdokumentasi.",
        },
      },
      {
        id: "question",
        label: { en: "Question the Claim", id: "Pertanyakan Klaim" },
        feedback: {
          en: "Good first step. Separate the documented relationship from the assumption that the person deserves the position.",
          id: "Langkah awal yang baik. Pisahkan hubungan keluarga yang terdokumentasi dari asumsi bahwa orang tersebut layak.",
        },
      },
      {
        id: "evidence",
        label: { en: "Check the Evidence", id: "Periksa Bukti" },
        feedback: {
          en: "Look for the selection process, applicable rules, relevant decisions, and evidence of preferential treatment.",
          id: "Cari proses seleksi, aturan yang berlaku, keputusan terkait, dan bukti perlakuan istimewa.",
        },
      },
    ],
    evidence: [
      {
        label: { en: "Family relationship", id: "Hubungan keluarga" },
        status: "verified",
        detail: {
          en: "A relationship may be documented in public civil records, but kinship alone is not a conclusion of competence or corruption.",
          id: "Hubungan dapat terdokumentasi dalam catatan sipil, tetapi ikatan kekeluargaan saja bukan bukti kompetensi atau pelanggaran.",
        },
      },
      {
        label: { en: "Merit or selection process", id: "Kualifikasi atau proses seleksi" },
        status: "unknown",
        detail: {
          en: "The post provides zero verifiable data regarding open examinations, scoring, or candidate rankings.",
          id: "Postingan tidak memuat data yang dapat diverifikasi mengenai ujian terbuka, penilaian, atau peringkat kandidat.",
        },
      },
      {
        label: { en: "Preferential treatment", id: "Perlakuan istimewa" },
        status: "unknown",
        detail: {
          en: "No evidence of rule manipulation, bypassed criteria, or undue influence is shown in this fictional post.",
          id: "Tidak ada bukti manipulasi aturan, pemotongan syarat, atau pengaruh tak wajar yang ditampilkan dalam postingan fiktif ini.",
        },
      },
    ],
  },
  {
    id: "automatic-guilt",
    simulationLabel: {
      en: "Educational simulation · Fictional content",
      id: "Simulasi edukasional · Konten fiktif",
    },
    authorName: {
      en: "Citizen Voice Network",
      id: "Jaringan Suara Warga",
    },
    handle: "@citizen_voice",
    timestamp: "4h ago",
    category: {
      en: "Universal Assumption Claim",
      id: "Klaim Asumsi Universal",
    },
    metrics: {
      likes: 2890,
      reposts: 740,
      replies: 312,
    },
    post: {
      en: "Every candidate from a political family is guilty of nepotism.",
      id: "Setiap kandidat dari keluarga politik pasti bersalah melakukan nepotisme.",
    },
    actions: [
      {
        id: "accept",
        label: { en: "Accept the Claim", id: "Terima Klaim" },
        feedback: {
          en: "The claim makes a universal conclusion without examining individual evidence or process.",
          id: "Klaim ini membuat kesimpulan universal tanpa memeriksa bukti dan proses tiap kasus.",
        },
      },
      {
        id: "question",
        label: { en: "Question the Claim", id: "Pertanyakan Klaim" },
        feedback: {
          en: "Ask whether the claim has defined nepotism and whether it provides evidence beyond family connection.",
          id: "Tanyakan apakah klaim ini mendefinisikan nepotisme dan memberikan bukti selain hubungan keluarga.",
        },
      },
      {
        id: "evidence",
        label: { en: "Check the Evidence", id: "Periksa Bukti" },
        feedback: {
          en: "Evaluate cases individually. Look for rules, decisions, intervention, and unequal access.",
          id: "Evaluasi setiap kasus secara terpisah. Cari aturan, keputusan, intervensi, dan akses yang tidak setara.",
        },
      },
    ],
    evidence: [
      {
        label: { en: "Universal generalization", id: "Generalisasi universal" },
        status: "claim",
        detail: {
          en: "The post applies one blanket label to all individuals regardless of procedural fairness.",
          id: "Post menyematkan satu label mutlak kepada semua orang tanpa memandang kepatuhan prosedur.",
        },
      },
      {
        label: { en: "Individual evidence", id: "Bukti individual" },
        status: "unknown",
        detail: {
          en: "No specific appointment, jurisdiction, or investigative audit is cited.",
          id: "Tidak ada pengangkatan spesifik, yurisdiksi, atau audit investigatif yang dirujuk.",
        },
      },
    ],
  },
  {
    id: "missing-process",
    simulationLabel: {
      en: "Educational simulation · Fictional content",
      id: "Simulasi edukasional · Konten fiktif",
    },
    authorName: {
      en: "Regional Bulletin",
      id: "Buletin Daerah",
    },
    handle: "@regional_bulletin",
    timestamp: "6h ago",
    category: {
      en: "Procedural Verification Claim",
      id: "Klaim Verifikasi Prosedural",
    },
    metrics: {
      likes: 830,
      reposts: 195,
      replies: 58,
    },
    post: {
      en: "The appointment looks fair because the announcement says it followed the rules.",
      id: "Pengangkatan ini terlihat adil karena pengumumannya menyatakan bahwa prosesnya mengikuti aturan.",
    },
    actions: [
      {
        id: "accept",
        label: { en: "Accept the Claim", id: "Terima Klaim" },
        feedback: {
          en: "An announcement is a starting point, not independent proof that every step was fair.",
          id: "Pengumuman adalah titik awal, bukan bukti independen bahwa setiap langkah sudah adil.",
        },
      },
      {
        id: "question",
        label: { en: "Question the Claim", id: "Pertanyakan Klaim" },
        feedback: {
          en: "Ask which rule applied, who made the decision, and whether the process was open to comparable candidates.",
          id: "Tanyakan aturan yang berlaku, siapa pengambil keputusan, dan apakah proses terbuka bagi kandidat sebanding.",
        },
      },
      {
        id: "evidence",
        label: { en: "Check the Evidence", id: "Periksa Bukti" },
        feedback: {
          en: "Look for the official procedure, eligibility criteria, decision record, and any documented intervention.",
          id: "Cari prosedur resmi, kriteria kelayakan, catatan keputusan, dan intervensi yang terdokumentasi.",
        },
      },
    ],
    evidence: [
      {
        label: { en: "Official announcement", id: "Pengumuman resmi" },
        status: "verified",
        detail: {
          en: "The existence of an announcement is verified, but official statements require independent verification.",
          id: "Adanya pengumuman terverifikasi, tetapi pernyataan resmi tetap memerlukan pemeriksaan independen.",
        },
      },
      {
        label: { en: "Complete procedure record", id: "Catatan prosedur lengkap" },
        status: "unknown",
        detail: {
          en: "Scoring matrices, conflict-of-interest declarations, and meeting minutes are not made public.",
          id: "Matriks penilaian, deklarasi benturan kepentingan, dan notulen rapat belum dipublikasikan.",
        },
      },
    ],
  },
];

export const narrativeComparisons: NarrativeComparison[] = [
  {
    id: "same-situation-opposite-framing",
    title: {
      en: "Same situation, opposite framing",
      id: "Situasi sama, framing berlawanan",
    },
    posts: [
      {
        label: { en: "Post A (Favourable)", id: "Post A (Mendukung)" },
        framingVariant: { en: "Inherited Merit Framing", id: "Framing Kompetensi Turunan" },
        text: {
          en: "A leader's child deserves the position because political experience runs in the family.",
          id: "Anak seorang pemimpin layak mendapatkan posisi karena pengalaman politik mengalir dalam keluarga.",
        },
      },
      {
        label: { en: "Post B (Unfavourable)", id: "Post B (Menentang)" },
        framingVariant: { en: "Categorical Guilt Framing", id: "Framing Rasa Bersalah Mutlak" },
        text: {
          en: "Every candidate from a political family is guilty of nepotism.",
          id: "Setiap kandidat dari keluarga politik pasti bersalah melakukan nepotisme.",
        },
      },
    ],
    rhetoricalAnatomy: [
      {
        id: "facts",
        label: { en: "Facts Presented", id: "Fakta yang Dipaparkan" },
        description: {
          en: "A publicly documented kinship tie between the public official and candidate exists.",
          id: "Hubungan kekeluargaan yang terdokumentasi secara publik antara pejabat dan kandidat benar ada.",
        },
        highlights: [
          { en: "leader's child", id: "anak seorang pemimpin" },
          { en: "political family", id: "keluarga politik" },
        ],
      },
      {
        id: "opinions",
        label: { en: "Opinions & Assumptions", id: "Opini & Asumsi" },
        description: {
          en: "Both posts make normative leaps from kinship directly to competence or guilt.",
          id: "Kedua postingan melompat langsung dari ikatan keluarga ke kesimpulan kelayakan atau kesalahan.",
        },
        highlights: [
          { en: "deserves the position", id: "layak mendapatkan posisi" },
          { en: "guilty of nepotism", id: "pasti bersalah melakukan nepotisme" },
        ],
      },
      {
        id: "emotion",
        label: { en: "Emotionally Persuasive Language", id: "Bahasa Persuasif Emosional" },
        description: {
          en: "Loaded vocabulary designed to trigger admiration or moral outrage without evidentiary basis.",
          id: "Kosakata bermuatan emosi yang dirancang memicu kekaguman atau kemarahan tanpa bukti.",
        },
        highlights: [
          { en: "runs in the family", id: "mengalir dalam keluarga" },
          { en: "every candidate", id: "setiap kandidat" },
        ],
      },
      {
        id: "missing",
        label: { en: "Missing Context", id: "Konteks yang Hilang" },
        description: {
          en: "Statutory qualifications, open contest rules, independent selection boards, and score records.",
          id: "Kualifikasi undang-undang, aturan kompetisi terbuka, dewan seleksi independen, dan rekam nilai.",
        },
        highlights: [
          { en: "Official appointment criteria omitted", id: "Kriteria pengangkatan resmi tidak dicantumkan" },
        ],
      },
      {
        id: "claims",
        label: { en: "Claims Requiring Evidence", id: "Klaim Butuh Pembuktian" },
        description: {
          en: "Proof of direct intervention, conflict-of-interest recusal, or preferential treatment.",
          id: "Bukti intervensi langsung, pengunduran diri dari benturan kepentingan, atau perlakuan khusus.",
        },
        highlights: [
          { en: "Allegation of nepotistic bypass", id: "Dugaan jalan pintas nepotistik" },
        ],
      },
    ],
    prompts: [
      {
        en: "Which words express an opinion or assumption rather than a verifiable fact?",
        id: "Kata mana yang menyatakan opini atau asumsi daripada fakta terverifikasi?",
      },
      {
        en: "What institutional context or procedural documentation is omitted from both posts?",
        id: "Konteks kelembagaan atau dokumentasi prosedural apa yang dihilangkan dari kedua post?",
      },
      {
        en: "What specific evidence would distinguish legal dynastic candidacy from corrupt nepotism?",
        id: "Bukti spesifik apa yang membedakan pencalonan dinasti yang sah dengan nepotisme korup?",
      },
    ],
  },
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q-nepotism-definition",
    category: "nepotism",
    question: {
      en: "A public official's relative wins an election. Does this fact alone automatically prove nepotism?",
      id: "Kerabat seorang pejabat publik memenangkan pemilu. Apakah fakta ini saja secara otomatis membuktikan nepotisme?",
    },
    options: [
      {
        id: "a",
        label: {
          en: "Yes, family connections in government are always nepotism.",
          id: "Ya, hubungan keluarga di pemerintahan selalu merupakan nepotisme.",
        },
        correct: false,
      },
      {
        id: "b",
        label: {
          en: "No. A family relationship alone is insufficient to establish nepotism. Evidence of preferential treatment, abused authority, or bypassed rules is required.",
          id: "Tidak. Hubungan keluarga saja belum cukup membuktikan nepotisme. Dibutuhkan bukti adanya perlakuan istimewa, penyalahgunaan wewenang, atau pelanggaran aturan.",
        },
        correct: true,
      },
      {
        id: "c",
        label: {
          en: "Yes, provided the opponent alleges conflict of interest.",
          id: "Ya, asalkan lawan politik menuduh adanya konflik kepentingan.",
        },
        correct: false,
      },
      {
        id: "d",
        label: {
          en: "No, because politicians' families are legally entitled to special mentorship.",
          id: "Tidak, karena keluarga politisi berhak secara hukum mendapat pembinaan khusus.",
        },
        correct: false,
      },
    ],
    explanation: {
      en: "Nepotism requires an abuse of power, preferential treatment, or a conflict of interest that provides unfair advantage. A family relationship is a verified background fact, but establishing nepotism requires examining the rules, the appointment/election process, and whether state resources or authority were unlawfully utilized.",
      id: "Nepotisme mensyaratkan adanya penyalahgunaan wewenang, perlakuan istimewa, atau konflik kepentingan yang memberikan keuntungan tidak adil. Hubungan keluarga adalah fakta latar belakang, tetapi membuktikan nepotisme menuntut pemeriksaan aturan, proses pemilihan/pengangkatan, dan ada tidaknya fasilitas negara yang disalahgunakan.",
    },
  },
  {
    id: "q-facts-opinions",
    category: "facts-opinions",
    question: {
      en: "Which of the following statements represents a verifiable fact rather than an assumption?",
      id: "Manakah dari pernyataan berikut yang merupakan fakta terverifikasi, bukan sebuah asumsi?",
    },
    options: [
      {
        id: "a",
        label: {
          en: "Candidate X has greater integrity because leadership runs in their bloodline.",
          id: "Kandidat X memiliki integritas lebih tinggi karena kepemimpinan mengalir dalam darahnya.",
        },
        correct: false,
      },
      {
        id: "b",
        label: {
          en: "Candidate X is the daughter of Mayor Y, as registered in civil registration records.",
          id: "Kandidat X adalah putri dari Walikota Y, sebagaimana terdaftar dalam catatan kependudukan resmi.",
        },
        correct: true,
      },
      {
        id: "c",
        label: {
          en: "Everyone in the district knows Candidate X received unfair assistance.",
          id: "Semua orang di daerah tahu bahwa Kandidat X menerima bantuan yang tidak adil.",
        },
        correct: false,
      },
      {
        id: "d",
        label: {
          en: "Candidate X cannot possibly make independent executive decisions.",
          id: "Kandidat X tidak mungkin bisa mengambil keputusan eksekutif yang independen.",
        },
        correct: false,
      },
    ],
    explanation: {
      en: "Official civil records confirm parentage as an objective, verifiable fact. Attributing natural integrity, assumed guilt, or collective knowledge ('everyone knows') are opinions, claims, or unproven assumptions.",
      id: "Catatan sipil resmi mengonfirmasi garis keturunan sebagai fakta obyektif yang dapat diverifikasi. Mengaitkan integritas alami, praduga bersalah, atau klaim kolektif ('semua orang tahu') adalah opini atau asumsi yang belum terbukti.",
    },
  },
  {
    id: "q-sources",
    category: "sources",
    question: {
      en: "When evaluating allegations that an appointment bypassed competitive exams, which source provides the most direct evidence?",
      id: "Saat mengevaluasi tuduhan bahwa suatu pengangkatan melewati ujian kompetitif, sumber mana yang memberikan bukti paling kuat?",
    },
    options: [
      {
        id: "a",
        label: {
          en: "A viral social media clip claiming the test was staged.",
          id: "Klip media sosial viral yang mengklaim bahwa tes tersebut hanya formalitas.",
        },
        correct: false,
      },
      {
        id: "b",
        label: {
          en: "Official recruitment guidelines, gazetted score registries, and the audit report of the Civil Service Commission.",
          id: "Petunjuk teknis rekrutmen resmi, daftar nilai yang diumumkan, dan laporan audit Komisi Aparatur Sipil Negara.",
        },
        correct: true,
      },
      {
        id: "c",
        label: {
          en: "An anonymous opinion editorial in a local gossip forum.",
          id: "Tajuk opini anonim di forum obrolan lokal.",
        },
        correct: false,
      },
      {
        id: "d",
        label: {
          en: "A campaign speech by a rival candidate asserting corruption.",
          id: "Pidato kampanye dari kandidat saingan yang menegaskan adanya korupsi.",
        },
        correct: false,
      },
    ],
    explanation: {
      en: "Primary institutional records, gazetted examination results, and independent audit reports provide verifiable documentary evidence. Social media commentary, anonymous posts, and political speeches represent claims or allegations that require corroboration.",
      id: "Dokumen kelembagaan primer, lembaran hasil tes resmi, dan laporan audit independen menyediakan bukti dokumenter yang dapat diuji. Komentar media sosial, pos anonim, dan pidato lawan politik merupakan klaim atau tuduhan yang membutuhkan konfirmasi silang.",
    },
  },
];
