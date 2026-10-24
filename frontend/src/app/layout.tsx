import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/lib/state";
import { SiteShell } from "@/components/SiteShell";
import { feedScenarios, narrativeComparisons, quizQuestions } from "@/content/scenarios";
import { validateContentPack } from "@/lib/content-validation";

const sora = Sora({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const contentErrors = validateContentPack(feedScenarios, narrativeComparisons, quizQuestions);
if (contentErrors.length > 0) {
  throw new Error(`Invalid NaraLens content pack: ${contentErrors.join("; ")}`);
}

export const metadata: Metadata = {
  title: "NaraLens · Look Beyond the Narrative",
  description:
    "Interactive digital political literacy platform designed to help young people critically examine digital narratives surrounding political dynasties and the normalization of nepotism.",
  keywords: [
    "political literacy",
    "nepotism",
    "political dynasty",
    "evidence-based",
    "critical thinking",
    "digital narrative",
    "NaraLens",
  ],
  authors: [{ name: "NaraLens Initiative" }],
  openGraph: {
    title: "NaraLens · Look Beyond the Narrative",
    description:
      "Not everything you see tells the whole story. Explore simulated political feeds, examine documented evidence, and challenge the normalization of nepotism.",
    url: "https://nara-lens.vercel.app",
    siteName: "NaraLens",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NaraLens · Look Beyond the Narrative",
    description:
      "Challenging the Normalization of Nepotism Through Interactive Political Literacy.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sora.variable} ${inter.variable}`}>
        <AppProvider>
          <SiteShell>{children}</SiteShell>
        </AppProvider>
      </body>
    </html>
  );
}
