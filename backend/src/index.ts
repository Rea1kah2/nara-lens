import express from "express";
import cors from "cors";
import { ENV } from "./config/env.js";
import { healthRouter } from "./routes/healthRoutes.js";
import { scenarioRouter } from "./routes/scenarioRoutes.js";
import { evidenceRouter } from "./routes/evidenceRoutes.js";
import { quizRouter } from "./routes/quizRoutes.js";

const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  ENV.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, curl, server-to-server)
      if (!origin) return callback(null, true);

      // Allow configured origins and any Vercel preview/production deployments
      const isAllowed =
        allowedOrigins.includes(origin) ||
        origin.endsWith(".vercel.app") ||
        origin.includes("localhost");

      if (isAllowed) {
        callback(null, true);
      } else {
        // Permissive fallback for educational prototype demo
        callback(null, true);
      }
    },
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use("/api/health", healthRouter);
app.use("/api/scenarios", scenarioRouter);
app.use("/api/evidence", evidenceRouter);
app.use("/api/quiz", quizRouter);

app.get("/", (_req, res) => {
  res.json({
    message: "NaraLens API Service — Look Beyond the Narrative",
    status: "operational",
    endpoints: {
      health: "/api/health",
      feedScenarios: "/api/scenarios/feed",
      narrativeLab: "/api/scenarios/lab",
      caseStudy: "/api/evidence/case-study",
      quiz: "/api/quiz",
    },
  });
});

app.listen(ENV.PORT, () => {
  console.log(`[NaraLens API] Server running on port ${ENV.PORT} (${ENV.NODE_ENV})`);
});
