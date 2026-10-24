import { feedScenarios, narrativeComparisons, quizQuestions } from "@/content/scenarios";
import { placeholderCaseStudy } from "@/content/evidence";
import type { FeedScenario, NarrativeComparison, QuizQuestion } from "@/content/types";
import type { CaseStudy } from "@/content/evidence";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";

async function fetchWithTimeout(url: string, options: RequestInit = {}, timeoutMs = 2500): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    return res;
  } finally {
    clearTimeout(timeoutId);
  }
}

/**
 * Check if the backend API service is reachable
 */
export async function checkBackendHealth(): Promise<{ online: boolean; message?: string }> {
  try {
    const res = await fetchWithTimeout(`${API_BASE_URL}/health`, { method: "GET" }, 1500);
    if (res.ok) {
      const data = await res.json();
      return { online: true, message: data.message };
    }
  } catch {
    // Graceful offline fallback
  }
  return { online: false };
}

/**
 * Fetch simulated social feed scenarios with offline fallback
 */
export async function getFeedScenarios(): Promise<{ data: FeedScenario[]; source: "api" | "local" }> {
  try {
    const res = await fetchWithTimeout(`${API_BASE_URL}/scenarios/feed`);
    if (res.ok) {
      const json = await res.json();
      if (json.data && Array.isArray(json.data) && json.data.length > 0) {
        return { data: json.data, source: "api" };
      }
    }
  } catch {
    // Fall back to local content
  }
  return { data: feedScenarios, source: "local" };
}

/**
 * Fetch narrative comparison cases with offline fallback
 */
export async function getNarrativeComparisons(): Promise<{ data: NarrativeComparison[]; source: "api" | "local" }> {
  try {
    const res = await fetchWithTimeout(`${API_BASE_URL}/scenarios/lab`);
    if (res.ok) {
      const json = await res.json();
      if (json.data && Array.isArray(json.data) && json.data.length > 0) {
        return { data: json.data, source: "api" };
      }
    }
  } catch {
    // Fall back to local content
  }
  return { data: narrativeComparisons, source: "local" };
}

/**
 * Fetch documented evidence case study with offline fallback
 */
export async function getEvidenceCaseStudy(): Promise<{ data: CaseStudy; source: "api" | "local" }> {
  try {
    const res = await fetchWithTimeout(`${API_BASE_URL}/evidence/case-study`);
    if (res.ok) {
      const json = await res.json();
      if (json.data) {
        return { data: json.data, source: "api" };
      }
    }
  } catch {
    // Fall back to local content
  }
  return { data: placeholderCaseStudy, source: "local" };
}

/**
 * Fetch quiz questions with offline fallback
 */
export async function getQuizQuestions(): Promise<{ data: QuizQuestion[]; source: "api" | "local" }> {
  try {
    const res = await fetchWithTimeout(`${API_BASE_URL}/quiz`);
    if (res.ok) {
      const json = await res.json();
      if (json.data && Array.isArray(json.data) && json.data.length > 0) {
        return { data: json.data, source: "api" };
      }
    }
  } catch {
    // Fall back to local content
  }
  return { data: quizQuestions, source: "local" };
}

/**
 * Evaluate quiz answers via backend or rule-based local calculation
 */
export async function evaluateQuizAnswers(answers: Record<string, string>): Promise<{
  score: { correct: number; total: number; percentage: number };
  recommendation: { activity: string; href: string; reason: { en: string; id: string } };
  source: "api" | "local";
}> {
  try {
    const res = await fetchWithTimeout(`${API_BASE_URL}/quiz/evaluate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers }),
    });
    if (res.ok) {
      const json = await res.json();
      return {
        score: json.score,
        recommendation: json.recommendation,
        source: "api",
      };
    }
  } catch {
    // Local fallback
  }

  // Local rule-based evaluation
  const total = quizQuestions.length;
  let correct = 0;
  quizQuestions.forEach((q) => {
    const chosen = answers[q.id];
    const correctOption = q.options.find((o) => o.correct);
    if (chosen === correctOption?.id) correct++;
  });

  return {
    score: {
      correct,
      total,
      percentage: Math.round((correct / total) * 100),
    },
    recommendation: {
      activity: "Narrative Lab",
      href: "/lab",
      reason: {
        en: "Examine narrative framing and rhetorical devices in opposing political statements.",
        id: "Pelajari framing narasi dan gaya bahasa dalam dua pernyataan politik yang berlawanan.",
      },
    },
    source: "local",
  };
}
