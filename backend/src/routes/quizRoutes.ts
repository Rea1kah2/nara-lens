import { Router } from "express";
import { getQuizQuestions, evaluateQuiz } from "../controllers/quizController.js";

export const quizRouter = Router();

quizRouter.get("/", getQuizQuestions);
quizRouter.post("/evaluate", evaluateQuiz);
