import type { FeedScenario, NarrativeComparison, QuizQuestion } from "@/content/types";

type BilingualText = { en: string; id: string };

function validateBilingualText(value: BilingualText, context: string) {
  const errors: string[] = [];
  if (!value.en.trim() || !value.id.trim()) {
    errors.push(`${context}: English and Indonesian text are both required`);
  }
  return errors;
}

function validateUniqueIds(ids: string[], context: string) {
  return new Set(ids).size === ids.length ? [] : [`${context}: duplicate IDs found`];
}

export function validateContentPack(
  scenarios: FeedScenario[],
  comparisons: NarrativeComparison[],
  questions: QuizQuestion[],
) {
  const errors: string[] = [];

  errors.push(...validateUniqueIds(scenarios.map(({ id }) => id), "Feed scenarios"));
  scenarios.forEach((scenario) => {
    errors.push(...validateBilingualText(scenario.simulationLabel, `${scenario.id}/simulationLabel`));
    errors.push(...validateBilingualText(scenario.post, `${scenario.id}/post`));
    if (scenario.actions.length !== 3) {
      errors.push(`${scenario.id}: expected exactly three actions`);
    }
    errors.push(...validateUniqueIds(scenario.actions.map(({ id }) => id), `${scenario.id}/actions`));
    if (scenario.actions.length === 3 && !["accept", "question", "evidence"].every((id) =>
      scenario.actions.some((action) => action.id === id),
    )) {
      errors.push(`${scenario.id}: expected accept, question, and evidence actions`);
    }
    scenario.actions.forEach((action) => {
      errors.push(...validateBilingualText(action.label, `${scenario.id}/${action.id}/label`));
      errors.push(...validateBilingualText(action.feedback, `${scenario.id}/${action.id}/feedback`));
    });
    if (scenario.evidence.length === 0) errors.push(`${scenario.id}: expected at least one evidence item`);
    scenario.evidence.forEach((item, index) => {
      errors.push(...validateBilingualText(item.label, `${scenario.id}/evidence/${index}/label`));
      errors.push(...validateBilingualText(item.detail, `${scenario.id}/evidence/${index}/detail`));
    });
  });

  errors.push(...validateUniqueIds(comparisons.map(({ id }) => id), "Narrative comparisons"));
  comparisons.forEach((comparison) => {
    errors.push(...validateBilingualText(comparison.title, `${comparison.id}/title`));
    if (comparison.posts.length < 2) errors.push(`${comparison.id}: expected at least two posts`);
    comparison.posts.forEach((post, index) => {
      errors.push(...validateBilingualText(post.label, `${comparison.id}/posts/${index}/label`));
      errors.push(...validateBilingualText(post.text, `${comparison.id}/posts/${index}/text`));
    });
    if (comparison.prompts.length === 0) errors.push(`${comparison.id}: expected at least one prompt`);
    comparison.prompts.forEach((prompt, index) => {
      errors.push(...validateBilingualText(prompt, `${comparison.id}/prompts/${index}`));
    });
  });

  errors.push(...validateUniqueIds(questions.map(({ id }) => id), "Quiz questions"));
  questions.forEach((question) => {
    errors.push(...validateBilingualText(question.question, `${question.id}/question`));
    errors.push(...validateBilingualText(question.explanation, `${question.id}/explanation`));
    if (question.options.length < 2) errors.push(`${question.id}: expected at least two options`);
    errors.push(...validateUniqueIds(question.options.map(({ id }) => id), `${question.id}/options`));
    const correctCount = question.options.filter(({ correct }) => correct).length;
    if (correctCount !== 1) errors.push(`${question.id}: expected exactly one correct option`);
    question.options.forEach((option) => {
      errors.push(...validateBilingualText(option.label, `${question.id}/${option.id}/label`));
    });
  });

  return errors;
}
