export type EvidenceStatus = "verified" | "claim" | "allegation" | "interpretation" | "disputed" | "unknown";

export type EvidenceItem = {
  label: string;
  status: EvidenceStatus;
  description: string;
  sourceUrl?: string;
};

export type CaseStudy = {
  id: string;
  title: string;
  status: "placeholder" | "ready";
  disclaimer: string;
  background: EvidenceItem[];
  timeline: EvidenceItem[];
  process: EvidenceItem[];
  sources: EvidenceItem[];
};

export const placeholderCaseStudy: CaseStudy = {
  id: "case-study-placeholder",
  title: "How should a potential dynasty claim be investigated?",
  status: "placeholder",
  disclaimer: "This is a structured placeholder. It is not a claim about a real politician, family, election, or government decision.",
  background: [
    { label: "Family relationship", status: "unknown", description: "To be filled only when a relationship is documented by a credible public source." },
    { label: "Public positions", status: "unknown", description: "Relevant positions and dates will be recorded after the case is selected." },
  ],
  timeline: [
    { label: "Relevant event", status: "unknown", description: "The election, appointment, or decision timeline has not been selected yet." },
  ],
  process: [
    { label: "Decision process", status: "unknown", description: "The process, applicable rules, and decision-makers require case-specific research." },
    { label: "Preferential treatment", status: "unknown", description: "No conclusion should be drawn without evidence about unequal access, intervention, or abuse of authority." },
  ],
  sources: [
    { label: "Source standard", status: "verified", description: "Final entries should link to official records, primary documents, court records, or credible journalism." },
    { label: "Unresolved questions", status: "unknown", description: "Uncertainty must remain visible rather than being filled with assumptions." },
  ],
};
