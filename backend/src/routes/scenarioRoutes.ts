import { Router } from "express";
import {
  getFeedScenarios,
  getFeedScenarioById,
  getNarrativeLab,
} from "../controllers/scenarioController.js";

export const scenarioRouter = Router();

scenarioRouter.get("/feed", getFeedScenarios);
scenarioRouter.get("/feed/:id", getFeedScenarioById);
scenarioRouter.get("/lab", getNarrativeLab);
// default / routes to feed
scenarioRouter.get("/", getFeedScenarios);
