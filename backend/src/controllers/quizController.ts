import type { Request, Response } from "express";
import { quizQuestions } from "../data/scenariosData.js";

export const getQuizQuestions = (_req: Request, res: Response) => {
  res.json({
    status: "success",
    count: quizQuestions.length,
    message: "NaraLens critical literacy assessment questions retrieved",
    data: quizQuestions,
  });
};

export const evaluateQuiz = (req: Request, res: Response) => {
  const { answers } = req.body as { answers?: Record<string, string> };

  if (!answers || typeof answers !== "object") {
    return res.status(400).json({
      status: "error",
      message: "Payload must contain an 'answers' object mapping questionId to optionId",
    });
  }

  let correctCount = 0;
  const categoryMistakes: Record<string, number> = {};

  const evaluated = quizQuestions.map((q) => {
    const selectedOptionId = answers[q.id];
    const correctOption = q.options.find((o) => o.correct);
    const isCorrect = selectedOptionId === correctOption?.id;

    if (isCorrect) {
      correctCount += 1;
    } else {
      categoryMistakes[q.category] = (categoryMistakes[q.category] || 0) + 1;
    }

    return {
      questionId: q.id,
      category: q.category,
      selectedOptionId,
      correctOptionId: correctOption?.id,
      isCorrect,
      explanation: q.explanation,
    };
  });

  // Rule-based recommendation engine (Brief Poin 4.F — strictly rule-based, no AI)
  let recommendedActivity = {
    activity: "Narrative Lab",
    href: "/lab",
    reason: {
      en: "Strengthen your ability to distinguish objective facts from persuasive framing and loaded rhetoric.",
      id: "Perkuat kemampuanmu dalam membedakan fakta obyektif dari framing persuasif dan retorika berlebihan.",
    },
  };

  const highestMistakeCategory = Object.entries(categoryMistakes).sort(
    (a, b) => b[1] - a[1]
  )[0]?.[0];

  if (highestMistakeCategory === "sources") {
    recommendedActivity = {
      activity: "Evidence Explorer",
      href: "/evidence",
      reason: {
        en: "Inspect primary documentary sources and independent audit protocols to test claims.",
        id: "Pelajari dokumen sumber primer dan audit independen untuk menguji keabsahan klaim.",
      },
    };
  } else if (highestMistakeCategory === "nepotism") {
    recommendedActivity = {
      activity: "Explore the Feed",
      href: "/feed",
      reason: {
        en: "Practice identifying the difference between verified kinship and documented evidence of nepotism.",
        id: "Latih kembali kemampuan membedakan kekerabatan keluarga dengan bukti nyata nepotisme di linimasa.",
      },
    };
  }

  res.json({
    status: "success",
    score: {
      correct: correctCount,
      total: quizQuestions.length,
      percentage: Math.round((correctCount / quizQuestions.length) * 100),
    },
    recommendation: recommendedActivity,
    evaluations: evaluated,
  });
};
