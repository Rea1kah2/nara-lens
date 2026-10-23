import type { QuizQuestion } from "@/content/types";

export type Recommendation = {
  category: QuizQuestion["category"];
  title: { en: string; id: string };
  activity: { en: string; id: string };
};

export const recommendations: Recommendation[] = [
  { category: "facts-opinions", title: { en: "Separate fact from interpretation", id: "Pisahkan fakta dari interpretasi" }, activity: { en: "Return to Narrative Lab and mark which words add judgement.", id: "Kembali ke Narrative Lab dan tandai kata yang menambahkan penilaian." } },
  { category: "framing", title: { en: "Notice persuasive framing", id: "Kenali framing persuasif" }, activity: { en: "Compare the headline with the context note before deciding what it proves.", id: "Bandingkan judul dengan catatan konteks sebelum memutuskan apa yang dibuktikan." } },
  { category: "missing-context", title: { en: "Look for missing context", id: "Cari konteks yang hilang" }, activity: { en: "Use the Feed and ask what process or rule is not shown.", id: "Gunakan Feed dan tanyakan proses atau aturan apa yang belum ditampilkan." } },
  { category: "sources", title: { en: "Evaluate source quality", id: "Evaluasi kualitas sumber" }, activity: { en: "Open Evidence Explorer and distinguish primary records from repeated claims.", id: "Buka Evidence Explorer dan bedakan catatan primer dari klaim yang diulang." } },
  { category: "nepotism", title: { en: "Separate family ties from evidence", id: "Pisahkan relasi keluarga dari bukti" }, activity: { en: "Review the evidence checklist before deciding whether a claim is supported.", id: "Tinjau checklist evidence sebelum memutuskan apakah klaim didukung." } },
];

export function getRecommendation(category: QuizQuestion["category"]) {
  return recommendations.find((item) => item.category === category) ?? recommendations[0];
}
