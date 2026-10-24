import type { Request, Response } from "express";
import { feedScenarios, narrativeComparisons } from "../data/scenariosData.js";

export const getFeedScenarios = (_req: Request, res: Response) => {
  res.json({
    status: "success",
    count: feedScenarios.length,
    message: "NaraLens curated educational feed scenarios retrieved",
    data: feedScenarios,
  });
};

export const getFeedScenarioById = (req: Request, res: Response) => {
  const { id } = req.params;
  const scenario = feedScenarios.find((s) => s.id === id);

  if (!scenario) {
    return res.status(404).json({
      status: "error",
      message: `Scenario with id '${id}' not found`,
    });
  }

  res.json({
    status: "success",
    data: scenario,
  });
};

export const getNarrativeLab = (_req: Request, res: Response) => {
  res.json({
    status: "success",
    count: narrativeComparisons.length,
    message: "NaraLens narrative framing comparison exercises retrieved",
    data: narrativeComparisons,
  });
};
