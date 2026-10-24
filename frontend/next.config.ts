import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Use parent tracing root locally; let Vercel handle its own isolated container in production
  outputFileTracingRoot: process.env.VERCEL ? undefined : path.join(__dirname, "../"),
};

export default nextConfig;
