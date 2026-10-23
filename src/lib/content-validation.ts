import type { FeedScenario, NarrativeComparison, QuizQuestion } from "@/content/types";

export function validateContentPack(
  scenarios: FeedScenario[],
  comparisons: NarrativeComparison[],
  questions: QuizQuestion[],
) {
  const errors: string[] = [];
  scenarios.forEach((scenario) => {
    if (scenario.reviewStatus !== "draft") errors.push(`${scenario.id}: new content must start as draft`);
    if (!scenario.simulationLabel.en || !scenario.simulationLabel.id) errors.push(`${scenario.id}: missing simulation label`);
    if (scenario.actions.length !== 3) errors.push(`${scenario.id}: expected three actions`);
    scenario.actions.forEach((action) => {
      if (!action.label.en || !action.label.id || !action.feedback.en || !action.feedback.id) errors.push(`${scenario.id}/${action.id}: incomplete translation pair`);
    });
  });
  comparisons.forEach((comparison) => {
    if (comparison.reviewStatus !== "draft") errors.push(`${comparison.id}: new content must start as draft`);
    if (comparison.posts.length < 2) errors.push(`${comparison.id}: expected at least two posts`);
  });
  questions.forEach((question) => {
    if (question.reviewStatus !== "draft") errors.push(`${question.id}: new content must start as draft`);
    if (!question.options.some((option) => option.correct)) errors.push(`${question.id}: missing correct option`);
  });
  return errors;
}
