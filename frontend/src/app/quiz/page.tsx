"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, X, Award, RotateCcw, ArrowRight, Sparkles } from "lucide-react";
import { useApp } from "@/lib/state";
import { quizQuestions } from "@/content/scenarios";
import { getRecommendation } from "@/lib/recommendations";
import {
  GlassCard,
  StatusBadge,
  ProgressBar,
  ActionButton,
} from "@/components/ui";
import { PageContainer, PageHeader } from "@/components/layout";

export default function QuizPage() {
  const { t, lang, markComplete } = useApp();
  const [index, setIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [isFinished, setIsFinished] = useState(false);

  const total = quizQuestions.length;
  const question = quizQuestions[index];
  const currentAnswer = selectedAnswers[index] || null;
  const selectedOption = question?.options.find((o) => o.id === currentAnswer);

  const handleSelect = (optionId: string) => {
    if (currentAnswer) return; // Prevent changing after answer is confirmed

    setSelectedAnswers((prev) => ({ ...prev, [index]: optionId }));
  };

  const handleNext = () => {
    if (index < total - 1) {
      setIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
      markComplete("quiz");
    }
  };

  const handleRetake = () => {
    setIndex(0);
    setSelectedAnswers({});
    setIsFinished(false);
  };

  // Calculate score
  const correctCount = Object.entries(selectedAnswers).filter(([idx, ans]) => {
    const q = quizQuestions[Number(idx)];
    return q?.options.find((o) => o.id === ans)?.correct;
  }).length;

  const recommendation = getRecommendation(question?.category || "nepotism");

  return (
    <PageContainer>
      <PageHeader
        eyebrow={t.quizEyebrow}
        title={t.quizTitle}
        body={t.quizSubtitle}
      />

      <div className="mx-auto max-w-3xl">
        {!isFinished ? (
          <GlassCard className="p-6 sm:p-8" variant="thick">
            {/* Header info & progress */}
            <div className="flex items-center justify-between border-b border-[var(--separator)] pb-4">
              <span className="text-xs font-bold text-[var(--muted)]">
                {t.questionCounter} {index + 1} {t.of} {total}
              </span>
              <StatusBadge label={question.category} tone="blue" size="sm" />
            </div>

            <div className="mt-4">
              <ProgressBar value={((index + (currentAnswer ? 1 : 0)) / total) * 100} />
            </div>

            {/* Question Text */}
            <h2 className="font-display mt-7 text-xl font-bold leading-relaxed text-[var(--text)] sm:text-2xl">
              {question.question[lang]}
            </h2>

            <p className="mt-2 text-xs font-medium text-[var(--muted)]">
              {t.selectOption}
            </p>

            {/* Answer Options */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {question.options.map((option) => {
                const isSelected = currentAnswer === option.id;
                let optionStyle = "border-[var(--line)] bg-[rgb(var(--surface)/0.5)] text-[var(--text)] hover:border-[var(--accent)]/40";

                if (currentAnswer) {
                  if (option.correct) {
                    optionStyle = "border-[var(--teal)] bg-[var(--teal-soft)] text-[var(--teal)] font-bold";
                  } else if (isSelected && !option.correct) {
                    optionStyle = "border-[var(--rose)] bg-[var(--rose-soft)] text-[var(--rose)] font-bold";
                  } else {
                    optionStyle = "border-[var(--line)] opacity-40";
                  }
                }

                return (
                  <button
                    key={option.id}
                    disabled={!!currentAnswer}
                    onClick={() => handleSelect(option.id)}
                    className={`focus-ring flex items-center justify-between rounded-[var(--radius-md)] border p-4 text-left text-sm font-semibold transition-all duration-200 active:scale-[0.98] ${optionStyle}`}
                  >
                    <span>{option.label[lang]}</span>
                    {currentAnswer && option.correct && (
                      <Check size={18} className="text-[var(--teal)] shrink-0" />
                    )}
                    {currentAnswer && isSelected && !option.correct && (
                      <X size={18} className="text-[var(--rose)] shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation & Feedback Card */}
            {currentAnswer && (
              <div className="mt-8 space-y-4 rounded-[var(--radius-md)] border border-[var(--separator)] bg-[rgb(var(--surface)/0.5)] p-5">
                <div className="flex items-start gap-3">
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-white ${
                      selectedOption?.correct ? "bg-[var(--teal)]" : "bg-[var(--amber)]"
                    }`}
                  >
                    {selectedOption?.correct ? <Check size={16} /> : <Sparkles size={16} />}
                  </div>
                  <div>
                    <p className="font-display text-xs font-bold uppercase tracking-wider text-[var(--text)]">
                      {selectedOption?.correct ? t.correctFeedback : t.incorrectFeedback}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--muted)]">
                      {question.explanation[lang]}
                    </p>
                  </div>
                </div>

                {/* Rule-based Recommendation Snippet */}
                <div className="rounded-[var(--radius-sm)] border border-[var(--accent)]/20 bg-[var(--accent-soft)] p-3 text-xs">
                  <span className="font-bold text-[var(--accent)]">
                    {recommendation.title[lang]}:
                  </span>{" "}
                  <span className="text-[var(--muted)]">
                    {recommendation.activity[lang]}
                  </span>
                </div>

                <div className="pt-2 text-right">
                  <ActionButton onClick={handleNext} className="gap-2 !py-2 !px-4 text-xs font-bold">
                    <span>{index < total - 1 ? t.nextQuestion : t.quizFinishedTitle}</span>
                    <ArrowRight size={14} />
                  </ActionButton>
                </div>
              </div>
            )}
          </GlassCard>
        ) : (
          /* Finished Screen */
          <GlassCard className="p-8 text-center sm:p-12" variant="thick">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)] shadow-sm">
              <Award size={32} />
            </div>

            <h2 className="font-display mt-6 text-3xl font-extrabold text-[var(--text)]">
              {t.quizFinishedTitle}
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[var(--muted)]">
              {t.quizFinishedBody}
            </p>

            {/* Score Pill */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[var(--line)] bg-[rgb(var(--surface)/0.7)] px-6 py-3 shadow-sm">
              <span className="text-xs font-bold text-[var(--muted)]">
                {lang === "en" ? "Assessment Score:" : "Skor Evaluasi:"}
              </span>
              <span className="font-display text-2xl font-black text-[var(--accent)]">
                {correctCount} / {total}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/journey"
                className="focus-ring inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-[var(--accent)] px-6 py-3 text-sm font-bold text-white shadow-md shadow-[var(--accent)]/20 hover:bg-[var(--accent-strong)] transition-all"
              >
                <span>{t.viewJourney}</span>
                <ArrowRight size={16} />
              </Link>

              <ActionButton
                variant="secondary"
                onClick={handleRetake}
                className="gap-2"
              >
                <RotateCcw size={16} />
                <span>{t.retakeQuiz}</span>
              </ActionButton>
            </div>
          </GlassCard>
        )}
      </div>
    </PageContainer>
  );
}
