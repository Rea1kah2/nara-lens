import type { EvidenceStatus } from "./evidence";

export type BilingualText = { en: string; id: string };
export type ReviewStatus = "draft" | "reviewed" | "approved";

export type FeedScenario = {
  id: string;
  reviewStatus: ReviewStatus;
  simulationLabel: BilingualText;
  post: BilingualText;
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
};

export type NarrativeComparison = {
  id: string;
  reviewStatus: ReviewStatus;
  title: BilingualText;
  posts: { label: BilingualText; text: BilingualText }[];
  prompts: BilingualText[];
};

export type QuizQuestion = {
  id: string;
  reviewStatus: ReviewStatus;
  category: "facts-opinions" | "framing" | "missing-context" | "sources" | "nepotism";
  question: BilingualText;
  options: { id: string; label: BilingualText; correct: boolean }[];
  explanation: BilingualText;
};
