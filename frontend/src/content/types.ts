import type { EvidenceStatus } from "./evidence";

export type BilingualText = { en: string; id: string };
export type ReviewStatus = "draft" | "reviewed" | "approved";

export type RhetoricalElement = {
  id: "facts" | "opinions" | "emotion" | "missing" | "claims";
  label: BilingualText;
  description: BilingualText;
  highlights?: BilingualText[];
};

export type FeedScenario = {
  id: string;
  reviewStatus?: ReviewStatus;
  simulationLabel: BilingualText;
  post: BilingualText;
  authorName?: BilingualText;
  handle?: string;
  timestamp?: string;
  category?: BilingualText | string;
  metrics?: {
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
};

export type NarrativeComparison = {
  id: string;
  reviewStatus?: ReviewStatus;
  title: BilingualText;
  posts: {
    label: BilingualText;
    text: BilingualText;
    framingVariant?: BilingualText;
  }[];
  rhetoricalAnatomy?: RhetoricalElement[];
  prompts: BilingualText[];
};

export type QuizQuestion = {
  id: string;
  reviewStatus?: ReviewStatus;
  category: "facts-opinions" | "framing" | "missing-context" | "sources" | "nepotism";
  question: BilingualText;
  options: { id: string; label: BilingualText; correct: boolean }[];
  explanation: BilingualText;
};
