import { Router } from "express";
import {
  getEvidenceCase,
  getAllCaseStudies,
} from "../controllers/evidenceController.js";

export const evidenceRouter = Router();

evidenceRouter.get("/case-study", getEvidenceCase);
evidenceRouter.get("/cases", getAllCaseStudies);
evidenceRouter.get("/", getEvidenceCase);
