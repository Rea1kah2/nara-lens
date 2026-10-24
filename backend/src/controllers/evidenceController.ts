import type { Request, Response } from "express";
import { documentedCaseStudies } from "../data/evidenceData.js";

export const getEvidenceCase = (req: Request, res: Response) => {
  const caseId = req.query.id as string | undefined;

  if (caseId) {
    const specificCase = documentedCaseStudies.find((c) => c.id === caseId);
    if (!specificCase) {
      return res.status(404).json({
        status: "error",
        message: `Case study with id '${caseId}' not found`,
      });
    }
    return res.json({
      status: "success",
      data: specificCase,
    });
  }

  // Return primary case study as default
  res.json({
    status: "success",
    message: "NaraLens curated investigation case study retrieved",
    totalCases: documentedCaseStudies.length,
    data: documentedCaseStudies[0],
    allCases: documentedCaseStudies.map((c) => ({
      id: c.id,
      title: c.title,
      caseType: c.caseType,
    })),
  });
};

export const getAllCaseStudies = (_req: Request, res: Response) => {
  res.json({
    status: "success",
    count: documentedCaseStudies.length,
    data: documentedCaseStudies,
  });
};
