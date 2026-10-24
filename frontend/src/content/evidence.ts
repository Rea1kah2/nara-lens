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
  status?: "placeholder" | "ready";
  caseType?: BilingualText;
  disclaimer: BilingualText;
  background: EvidenceItem[];
  timeline: EvidenceItem[];
  process: EvidenceItem[];
  sources: EvidenceItem[];
  relationshipNodes?: {
    id: string;
    name: string;
    role: BilingualText;
    type: "official" | "candidate" | "institution";
  }[];
};

export const documentedCaseStudy01: CaseStudy = {
  id: "case-01-district-enterprise",
  title: {
    en: "Case Study 01: Municipal Enterprise Directorship & Kinship",
    id: "Studi Kasus 01: Direksi BUMD Daerah & Kekerabatan Keluarga",
  },
  status: "ready",
  caseType: {
    en: "Documented Case Investigation · Public Entity",
    id: "Investigasi Kasus Terdokumentasi · Entitas Publik",
  },
  disclaimer: {
    en: "This curated educational case study demonstrates how researchers distinguish verified family relationships from evidence of preferential treatment. Kinship alone does not constitute nepotism; researchers examine appointment procedures, oversight autonomy, and documented conflicts of interest.",
    id: "Studi kasus edukatif terkurasi ini menunjukkan bagaimana peneliti membedakan hubungan kekeluargaan terverifikasi dari bukti perlakuan istimewa. Ikatan keluarga saja bukan nepotisme; peneliti memeriksa prosedur pengangkatan, independensi pengawasan, dan catatan benturan kepentingan.",
  },
  relationshipNodes: [
    {
      id: "official-1",
      name: "Regent / District Head (Official A)",
      role: {
        en: "Executive Authority & General Shareholder Representative",
        id: "Kepala Daerah & Kuasa Pemegang Modal BUMD",
      },
      type: "official",
    },
    {
      id: "candidate-1",
      name: "Enterprise Director (Person B)",
      role: {
        en: "Appointed Managing Director (Kinship: Sibling of Official A)",
        id: "Direktur Operasional Terpilih (Kekerabatan: Saudara Kandung Pejabat A)",
      },
      type: "candidate",
    },
    {
      id: "board-1",
      name: "Independent Selection Committee (Pansel)",
      role: {
        en: "Assessment Body appointed by District Regulation",
        id: "Panitia Seleksi Independen bentukan Perda",
      },
      type: "institution",
    },
  ],
  background: [
    {
      label: {
        en: "Documented Family Ties (Civil Registry)",
        id: "Hubungan Keluarga Terdokumentasi (Catatan Sipil)",
      },
      status: "verified",
      description: {
        en: "Civil registry confirms Person B is the younger sibling of District Head Official A. Both parties acknowledge this kinship openly.",
        id: "Catatan sipil memverifikasi Person B adalah adik kandung Kepala Daerah Pejabat A. Kedua pihak mengakui hubungan kekerabatan ini secara terbuka.",
      },
    },
    {
      label: {
        en: "Professional Experience and Credentials",
        id: "Pengalaman Kerja & Portofolio Profesional",
      },
      status: "verified",
      description: {
        en: "Person B holds 12 years of documented management tenure in regional logistics companies prior to the vacancy announcement.",
        id: "Person B memiliki rekam jejak manajerial selama 12 tahun di perusahaan logistik regional sebelum pengumuman lowongan.",
      },
    },
    {
      label: {
        en: "Allegation of Inherent Disqualification",
        id: "Tuduhan Ketidaklayakan Bawaan",
      },
      status: "allegation",
      description: {
        en: "Civic watchdog claims that any close relative of an incumbent executive should be automatically barred from municipal enterprise roles.",
        id: "LSM lokal menuduh bahwa setiap kerabat dekat kepala daerah seharusnya dilarang mutlak menduduki jabatan BUMD.",
      },
    },
    {
      label: {
        en: "Statutory Eligibility Boundary",
        id: "Batasan Kelayakan Peraturan Perundang-undangan",
      },
      status: "verified",
      description: {
        en: "Applicable Government Regulation (PP No. 54/2017) prohibits kinship ties with incumbent Supervisory Board members, but does not explicitly bar siblings from open selection if recusal occurs.",
        id: "PP No. 54/2017 melarang hubungan kekerabatan dengan anggota Dewan Pengawas BUMD yang menjabat, namun tidak secara eksplisit melarang saudara kandung mengikuti seleksi terbuka asalkan ada deklarasi benturan kepentingan.",
      },
    },
  ],
  timeline: [
    {
      date: "Month 1 (Day 05)",
      label: {
        en: "Public Vacancy Notice Gazetted",
        id: "Pengumuman Lowongan Terbuka Dipublikasikan",
      },
      status: "verified",
      description: {
        en: "Selection committee gazetted qualification thresholds: minimum 5 years managerial tenure and relevant postgraduate degree.",
        id: "Pansel mengumumkan syarat kualifikasi: pengalaman manajerial minimal 5 tahun dan pendidikan pascasarjana relevan.",
      },
    },
    {
      date: "Month 2 (Day 12)",
      label: {
        en: "Recusal & Conflict Declaration Record",
        id: "Deklarasi Benturan Kepentingan & Pengunduran Diri Pejabat",
      },
      status: "disputed",
      description: {
        en: "The regional administration claims Official A signed a written recusal delegation to the Regional Secretary. Watchdogs dispute the timeliness of the filing.",
        id: "Pemda mengklaim Pejabat A telah menandatangani surat pelimpahan kewenangan kepada Sekda. LSM mempersoalkan tanggal pencatatan surat tersebut.",
      },
    },
    {
      date: "Month 3 (Day 20)",
      label: {
        en: "Fit & Proper Test Results Published",
        id: "Publikasi Hasil Uji Kelayakan dan Kepatutan (UKK)",
      },
      status: "verified",
      description: {
        en: "The independent university assessment center ranked Person B second among four shortlisted finalists based on psychometric and business plan scores.",
        id: "Lembaga asesmen universitas independen menempatkan Person B di peringkat kedua dari empat finalis berdasarkan uji psikometri dan rencana bisnis.",
      },
    },
    {
      date: "Month 4 (Day 02)",
      label: {
        en: "Final Appointment Decree Issued",
        id: "Penerbitan Surat Keputusan Pengangkatan Final",
      },
      status: "verified",
      description: {
        en: "District Head Official A signed the final appointment decree selecting Person B over the first-ranked finalist.",
        id: "Kepala Daerah Pejabat A menandatangani SK pengangkatan final yang memilih Person B melangkahi peringkat pertama asesmen.",
      },
    },
    {
      date: "Month 5 (Day 15)",
      label: {
        en: "Ombudsman Maladministration Inquest",
        id: "Pemeriksaan Maladministrasi oleh Ombudsman",
      },
      status: "claim",
      description: {
        en: "Ombudsman opened an inquiry to determine whether the deviation from the numerical test rankings constituted preferential nepotism or executive prerogative.",
        id: "Ombudsman membuka pemeriksaan untuk menguji apakah penyimpangan dari pemeringkatan ujian merupakan bentuk perlakuan istimewa nepotistik atau diskresi sah.",
      },
    },
  ],
  process: [
    {
      label: {
        en: "Authority & Decision Process",
        id: "Kewenangan & Proses Pengambilan Keputusan",
      },
      status: "verified",
      description: {
        en: "The District Head retains ultimate statutory appointment discretion under local bylaws, but is required to provide written reasoning when not selecting the top-ranked candidate.",
        id: "Kepala Daerah memiliki diskresi penetapan akhir menurut Perda, namun diwajibkan menyertakan pertimbangan tertulis bila tidak memilih peringkat pertama.",
      },
    },
    {
      label: {
        en: "Evidence of Direct Intervention",
        id: "Bukti Intervensi Langsung",
      },
      status: "unknown",
      description: {
        en: "No internal communication, pressure records, or scoring alterations by Official A have been verified by subpoena or audit.",
        id: "Belum ada rekaman komunikasi internal, tekanan, atau manipulasi penilaian oleh Pejabat A yang terverifikasi melalui audit resmi.",
      },
    },
    {
      label: {
        en: "Conflict of Interest Review Protocol",
        id: "Protokol Penanganan Benturan Kepentingan",
      },
      status: "disputed",
      description: {
        en: "Auditors noted the absence of an independent ethics panel review prior to final signing, leaving the appearance of conflict unaddressed.",
        id: "Auditor mencatat ketiadaan penelaahan majelis etik independen sebelum penandatanganan SK, sehingga persepsi benturan kepentingan tidak termitigasi.",
      },
    },
    {
      label: {
        en: "Public Justification Disclosure",
        id: "Keterbukaan Alasan Pertimbangan Publik",
      },
      status: "allegation",
      description: {
        en: "Watchdogs allege the appointment was kept confidential until official swearing-in, violating public disclosure standards.",
        id: "Koalisi masyarakat sipil menuding penetapan dirahasiakan hingga pelantikan, melanggar standar keterbukaan informasi publik.",
      },
    },
  ],
  sources: [
    {
      label: {
        en: "State Gazette & Government Regulation No. 54 of 2017",
        id: "Lembaran Negara & PP No. 54 Tahun 2017 tentang BUMD",
      },
      status: "verified",
      description: {
        en: "Primary statutory source governing selection standards, integrity declarations, and conflict of interest rules for municipal enterprises.",
        id: "Sumber peraturan primer yang mengatur standar seleksi, deklarasi integritas, dan aturan benturan kepentingan BUMD.",
      },
    },
    {
      label: {
        en: "Independent Academic Assessment Center Report",
        id: "Laporan Resmi Pusat Asesmen Akademik Independen",
      },
      status: "verified",
      description: {
        en: "Certified score sheets detailing psychometrics, strategy defense, and candidate rankings.",
        id: "Transkrip nilai bersertifikat yang memuat skor psikometri, pemaparan strategi, dan peringkat kandidat.",
      },
    },
    {
      label: {
        en: "Ombudsman Examination Summary (Preliminary)",
        id: "Ringkasan Laporan Pemeriksaan Awal Ombudsman",
      },
      status: "claim",
      description: {
        en: "Preliminary findings noting procedural irregularities regarding candidate ranking discretion.",
        id: "Temuan awal yang mencatat adanya ketidaksesuaian prosedur administratif dalam penggunaan diskresi pemeringkatan.",
      },
    },
    {
      label: {
        en: "Social Media Campaign Allegations",
        id: "Tuduhan & Utas Kampanye Media Sosial",
      },
      status: "unknown",
      description: {
        en: "Viral threads alleging secret kickbacks and pre-arranged selection. Treated as unverified claims requiring concrete corroboration.",
        id: "Utas viral yang menuduh adanya aliran dana rahasia dan seleksi rekayasa. Diperlakukan sebagai klaim yang belum terbukti.",
      },
    },
  ],
};

export const placeholderCaseStudy: CaseStudy = {
  id: "case-study-investigation-model",
  title: {
    en: "Illustrative Investigation Template: Kinship and Public Appointments",
    id: "Templat Investigasi Ilustratif: Kekerabatan dan Pengangkatan Publik",
  },
  status: "placeholder",
  caseType: {
    en: "Methodology Framework Checklist",
    id: "Kerangka Checklist Metodologi",
  },
  disclaimer: {
    en: "This is a fictional teaching template, not an account of a real person or event. It contains no case-specific sources or verified facts; each item shows what a researcher would need to check.",
    id: "Ini adalah templat pembelajaran fiktif, bukan laporan tentang orang atau peristiwa nyata. Tidak ada sumber khusus kasus atau fakta terverifikasi di sini; setiap bagian menunjukkan hal yang perlu diperiksa peneliti.",
  },
  background: [
    {
      label: {
        en: "Family relationship to verify",
        id: "Hubungan keluarga yang perlu diverifikasi",
      },
      status: "unknown",
      description: {
        en: "No people or records are supplied in this template. A real investigation would need reliable records for the relationship; kinship alone does not establish wrongdoing.",
        id: "Templat ini tidak menyertakan orang atau dokumen tertentu. Investigasi nyata memerlukan catatan tepercaya untuk membuktikan hubungan keluarga; kekerabatan saja tidak membuktikan pelanggaran.",
      },
    },
    {
      label: {
        en: "Positions and dates to verify",
        id: "Jabatan dan tanggal yang perlu diverifikasi",
      },
      status: "unknown",
      description: {
        en: "No office holder, candidate, or date is identified. Check official records before describing a role or timeline.",
        id: "Tidak ada pejabat, kandidat, atau tanggal tertentu yang disebutkan. Periksa catatan resmi sebelum menjelaskan jabatan atau linimasa.",
      },
    },
  ],
  timeline: [
    {
      date: "Check 1",
      label: {
        en: "Applicable eligibility rules",
        id: "Aturan kelayakan yang berlaku",
      },
      status: "unknown",
      description: {
        en: "Find the rule in force on the relevant date and cite its official text. This template makes no claim that a rule changed or was challenged.",
        id: "Temukan aturan yang berlaku pada tanggal terkait dan cantumkan teks resminya. Templat ini tidak menyatakan bahwa suatu aturan berubah atau digugat.",
      },
    },
    {
      date: "Check 2",
      label: {
        en: "Nomination and appointment records",
        id: "Catatan pencalonan dan pengangkatan",
      },
      status: "unknown",
      description: {
        en: "Identify the decision, the responsible institution, and the primary record that documents the process.",
        id: "Identifikasi keputusan, lembaga yang bertanggung jawab, dan dokumen primer yang mencatat prosesnya.",
      },
    },
    {
      date: "Check 3",
      label: {
        en: "Allegations and responses",
        id: "Tuduhan dan tanggapan",
      },
      status: "unknown",
      description: {
        en: "No allegation about a real person or event is included. For a real case, attribute each allegation to its source and include relevant responses or findings.",
        id: "Tidak ada tuduhan tentang orang atau peristiwa nyata di sini. Untuk kasus nyata, cantumkan sumber setiap tuduhan serta tanggapan atau temuan yang relevan.",
      },
    },
  ],
  process: [
    {
      label: {
        en: "Conflict of interest assessment",
        id: "Penilaian konflik kepentingan",
      },
      status: "unknown",
      description: {
        en: "Check whether an authorized body reviewed a disclosed conflict and cite the decision. No review or conclusion is asserted here.",
        id: "Periksa apakah lembaga berwenang menilai konflik yang diungkapkan dan cantumkan keputusannya. Templat ini tidak menyatakan adanya pemeriksaan atau kesimpulan.",
      },
    },
    {
      label: {
        en: "Evidence of intervention or preferential treatment",
        id: "Bukti intervensi atau perlakuan istimewa",
      },
      status: "unknown",
      description: {
        en: "No case record is provided. Look for attributable documents, decision records, and corroboration before drawing a conclusion.",
        id: "Tidak ada dokumen kasus yang disertakan. Cari dokumen dengan atribusi jelas, catatan keputusan, dan konfirmasi silang sebelum menyimpulkan.",
      },
    },
  ],
  sources: [
    {
      label: {
        en: "Official rules and court records",
        id: "Aturan resmi dan catatan pengadilan",
      },
      status: "unknown",
      description: {
        en: "No documents or links are attached. Add the specific record and publication date before treating a legal statement as verified.",
        id: "Tidak ada dokumen atau tautan yang disertakan. Tambahkan dokumen tertentu dan tanggal publikasi sebelum menyebut pernyataan hukum sebagai terverifikasi.",
      },
    },
    {
      label: {
        en: "Independent reporting",
        id: "Peliputan independen",
      },
      status: "unknown",
      description: {
        en: "No article is attached. When using reporting, cite the article and distinguish its documented findings from its analysis.",
        id: "Tidak ada artikel yang disertakan. Saat menggunakan laporan, cantumkan artikelnya dan bedakan temuan terdokumentasi dari analisisnya.",
      },
    },
    {
      label: {
        en: "Social media posts and commentary",
        id: "Post dan komentar media sosial",
      },
      status: "unknown",
      description: {
        en: "No post is reproduced here. Treat social posts as claims to investigate, not as proof of the underlying event.",
        id: "Tidak ada post yang ditampilkan di sini. Perlakukan post media sosial sebagai klaim yang perlu diperiksa, bukan bukti atas peristiwa yang dibicarakan.",
      },
    },
  ],
};

export const allCaseStudies: CaseStudy[] = [
  documentedCaseStudy01,
  placeholderCaseStudy,
];
