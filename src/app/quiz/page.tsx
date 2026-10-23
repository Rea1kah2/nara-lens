"use client";
import { useState } from "react";
import { GlassCard, StatusBadge, ProgressBar, ActionButton, NextStepCard } from "@/components/ui";
import { PageContainer, PageHeader } from "@/components/layout";
import { useApp } from "@/lib/state";
import { quizQuestions } from "@/content/scenarios";
import { getRecommendation } from "@/lib/recommendations";
export default function QuizPage() {
  const { t, lang, markComplete } = useApp();
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState<string | null>(null);
  const question = quizQuestions[index];
  const selected = question.options.find((option) => option.id === answer);
  const recommendation = getRecommendation(question.category);
  const nextQuestion = () => { setAnswer(null); setIndex((current) => (current + 1) % quizQuestions.length); };
  return <PageContainer><PageHeader eyebrow="Check the Evidence" title={t.quizTitle} body="Choose the answer that best reflects careful evaluation, not political loyalty." /><GlassCard className="mt-12 max-w-3xl p-6 sm:p-8"><div className="mb-5 flex items-center justify-between text-xs font-bold text-[var(--muted)]"><span>Question {index + 1} / {quizQuestions.length}</span><StatusBadge label={question.category} /></div><ProgressBar value={(index + 1) / quizQuestions.length * 100} /><h2 className="mt-7 max-w-2xl text-xl font-bold leading-8">{question.question[lang]}</h2><div className="mt-7 grid max-w-2xl gap-3 sm:grid-cols-2">{question.options.map((option) => <button key={option.id} onClick={() => { setAnswer(option.id); if (option.correct) markComplete(); }} className={`focus-ring min-h-14 rounded-2xl border p-4 text-left font-bold ${answer === option.id ? option.correct ? "border-emerald-400 bg-emerald-400/10" : "border-rose-400 bg-rose-400/10" : "border-[var(--line)]"}`}>{option.label[lang]}</button>)}</div>{answer && <div className="max-w-2xl"><p className="mt-6 rounded-2xl bg-emerald-500/10 p-4 leading-7">{question.explanation[lang]}</p><div className="mt-4 rounded-2xl border border-[var(--accent)]/20 p-4"><p className="text-sm font-bold text-[var(--accent)]">{recommendation.title[lang]}</p><p className="mt-1 text-sm leading-6 text-[var(--muted)]">{recommendation.activity[lang]}</p></div><ActionButton onClick={nextQuestion} className="mt-5">{t.nextQuestion} →</ActionButton></div>}</GlassCard></PageContainer>;
}
