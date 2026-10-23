import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/lib/state";
import { SiteShell } from "@/components/SiteShell";
import { feedScenarios, narrativeComparisons, quizQuestions } from "@/content/scenarios";
import { validateContentPack } from "@/lib/content-validation";

const contentErrors = validateContentPack(feedScenarios, narrativeComparisons, quizQuestions);
if (contentErrors.length > 0) {
  throw new Error(`Invalid NaraLens content pack: ${contentErrors.join("; ")}`);
}

export const metadata: Metadata = { title: "NaraLens · Look Beyond the Narrative", description: "Interactive political literacy prototype." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body><AppProvider><SiteShell>{children}</SiteShell></AppProvider></body></html>;
}
