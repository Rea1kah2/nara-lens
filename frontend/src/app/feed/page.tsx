"use client";

import { useState } from "react";
import { Check, HelpCircle, Search, Sparkles, ArrowRight, ShieldAlert, FileQuestion, CheckCircle2 } from "lucide-react";
import { useApp } from "@/lib/state";
import { feedScenarios } from "@/content/scenarios";
import {
  GlassCard,
  StatusBadge,
  SocialPostCard,
  StepperControl,
  NextStepCard,
  ActionButton,
} from "@/components/ui";
import { PageContainer, PageHeader } from "@/components/layout";

export default function FeedPage() {
  const { t, lang, markComplete } = useApp();
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [selectedChoices, setSelectedChoices] = useState<Record<number, string | null>>({});

  const scenario = feedScenarios[scenarioIndex];
  const currentChoice = selectedChoices[scenarioIndex] || null;

  const handleSelectChoice = (actionId: string) => {
    setSelectedChoices((prev) => ({ ...prev, [scenarioIndex]: actionId }));
    const answeredCount = Object.keys(selectedChoices).length + (currentChoice ? 0 : 1);
    if (answeredCount === feedScenarios.length) markComplete("feed");
  };

  const handleNext = () => {
    if (scenarioIndex < feedScenarios.length - 1) {
      setScenarioIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (scenarioIndex > 0) {
      setScenarioIndex((prev) => prev - 1);
    }
  };

  const selectedAction = scenario.actions.find((a) => a.id === currentChoice);

  return (
    <PageContainer>
      <PageHeader
        eyebrow={t.feedEyebrow}
        title={t.feedTitle}
        body={t.feedSubtitle}
      />

      <div className="mx-auto max-w-4xl space-y-8">
        {/* Scenario Stepper Bar */}
        <div className="rounded-[var(--radius-lg)] border border-[var(--line)] bg-[rgb(var(--surface)/0.45)] p-4 backdrop-blur-md">
          <StepperControl
            currentIndex={scenarioIndex}
            total={feedScenarios.length}
            onPrevious={handlePrev}
            onNext={handleNext}
            prevLabel={t.prevScenario}
            nextLabel={t.nextScenario}
          />
        </div>

        {/* Main Simulation Glass Card */}
        <GlassCard className="p-6 sm:p-8" variant="thick">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-[var(--separator)] pb-4">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--teal)] text-xs font-bold text-white shadow-sm">
                {scenarioIndex + 1}
              </span>
              <span className="text-xs font-bold text-[var(--muted)]">
                {t.scenarioCounter} {scenarioIndex + 1} {t.of} {feedScenarios.length}
              </span>
            </div>
            <StatusBadge label={scenario.simulationLabel[lang]} tone="amber" size="sm" />
          </div>

          {/* Realistic Simulated Social Post */}
          <SocialPostCard
            authorName={lang === "en" ? "Digital Public Forum" : "Forum Opini Publik"}
            handle="@publicsquare"
            timestamp="2h ago"
            simulationLabel={scenario.simulationLabel[lang]}
            content={scenario.post[lang]}
            categoryBadge={lang === "en" ? "Simulated Claim" : "Klaim Simulasi"}
          />

          {/* Action Decision Choices (Brief Poin 4.B: 3 Actions) */}
          <div className="mt-8">
            <p className="font-display text-sm font-bold text-[var(--text)]">
              {lang === "en"
                ? "How do you evaluate this claim before reacting?"
                : "Bagaimana kamu mengevaluasi klaim ini sebelum bereaksi?"}
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {scenario.actions.map((action) => {
                const isSelected = currentChoice === action.id;
                const icons = {
                  accept: Check,
                  question: HelpCircle,
                  evidence: Search,
                };
                const Icon = icons[action.id as keyof typeof icons] || Search;

                return (
                  <button
                    key={action.id}
                    onClick={() => handleSelectChoice(action.id)}
                    className={`focus-ring group flex flex-col justify-between rounded-[var(--radius-md)] border p-4 text-left transition-all duration-200 active:scale-[0.98] ${
                      isSelected
                        ? "border-[var(--teal)] bg-[var(--teal-soft)] text-[var(--text)] shadow-sm"
                        : "border-[var(--line)] bg-[rgb(var(--surface)/0.6)] text-[var(--muted)] hover:border-[var(--teal)]/40 hover:text-[var(--text)]"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-xl transition-colors ${
                          isSelected
                            ? "bg-[var(--teal)] text-white"
                            : "bg-[rgb(var(--surface)/0.8)] text-[var(--muted)] group-hover:text-[var(--teal)]"
                        }`}
                      >
                        <Icon size={16} />
                      </div>
                      {isSelected && (
                        <span className="h-2 w-2 rounded-full bg-[var(--teal)]" />
                      )}
                    </div>
                    <span className="mt-3 text-sm font-bold text-[var(--text)]">
                      {action.label[lang]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3-Pillar Feedback Screen (Brief Poin 4.B) */}
          {selectedAction && (
            <div className="mt-8 rounded-[var(--radius-lg)] border border-[var(--teal)]/25 bg-[rgb(var(--surface)/0.65)] p-6 shadow-sm">
              <div className="flex items-center gap-2 text-[var(--teal)]">
                <Sparkles size={18} />
                <h3 className="font-display text-base font-bold text-[var(--text)]">
                  {t.feedbackHeading}
                </h3>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-[var(--text)]">
                {selectedAction.feedback[lang]}
              </p>

              {/* 3 Pillars: Available, Uncertain, Necessary */}
              <div className="mt-6 border-t border-[var(--separator)] pt-5">
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                  {lang === "en" ? "Critical Evidence Audit" : "Audit Kritis Bukti"}
                </p>

                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  {scenario.evidence.map((item) => (
                    <div
                      key={item.label.en}
                      className="rounded-[var(--radius-sm)] border border-[var(--line)] bg-[rgb(var(--surface)/0.5)] p-4 text-xs"
                    >
                      <StatusBadge
                        label={item.status}
                        tone={item.status === "verified" ? "teal" : "amber"}
                        size="sm"
                      />
                      <p className="mt-2.5 font-bold text-[var(--text)]">
                        {item.label[lang]}
                      </p>
                      <p className="mt-1 leading-relaxed text-[var(--muted)]">
                        {item.detail[lang]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next step prompt */}
              <div className="mt-6 pt-2">
                {scenarioIndex < feedScenarios.length - 1 ? (
                  <ActionButton
                    onClick={handleNext}
                    className="!py-2 !px-4 text-xs font-bold"
                  >
                    <span>{t.nextScenario}</span>
                    <ArrowRight size={14} />
                  </ActionButton>
                ) : (
                  <NextStepCard
                    title={t.whatNext}
                    body={t.feedbackNote}
                    action={lang === "en" ? "Explore Narrative Lab" : "Buka Narrative Lab"}
                    href="/lab"
                  />
                )}
              </div>
            </div>
          )}
        </GlassCard>
      </div>
    </PageContainer>
  );
}
