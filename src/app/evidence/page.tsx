import { GlassCard, StatusBadge } from "@/components/ui";
import { PageContainer, PageHeader } from "@/components/layout";
import { placeholderCaseStudy, type EvidenceItem } from "@/content/evidence";

function EvidenceGroup({ title, items }: { title: string; items: EvidenceItem[] }) {
  return <section className="mt-8">
    <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent)]">{title}</h3>
    <div className="mt-3 space-y-3">
      {items.map((item) => <div className="rounded-2xl border border-[var(--line)] bg-[rgb(var(--surface)/.22)] p-4" key={item.label}>
        <div className="flex flex-wrap items-center gap-2">
          <b>{item.label}</b>
          <StatusBadge label={item.status} tone={item.status === "verified" ? "teal" : item.status === "allegation" ? "rose" : "amber"} />
        </div>
        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.description}</p>
      </div>)}
    </div>
  </section>;
}

export default function EvidencePage() {
  const caseStudy = placeholderCaseStudy;
  return <PageContainer>
    <PageHeader eyebrow="Evidence Explorer" title="One case, carefully examined." body="This prototype reserves one documented case-study slot. The final case must be researched, sourced, and reviewed before publication." />
    <GlassCard className="mx-auto mt-12 max-w-4xl p-6 sm:p-8">
      <div className="flex flex-wrap gap-2 text-xs font-bold"><span className="rounded-full bg-amber-400/15 px-3 py-1 text-amber-700 dark:text-amber-300">CASE STUDY PLACEHOLDER</span><span className="rounded-full bg-[var(--accent)]/10 px-3 py-1 text-[var(--accent)]">Research required</span></div>
      <h2 className="mt-6 text-2xl font-bold">{caseStudy.title}</h2>
      <p className="mt-3 rounded-2xl bg-amber-400/10 p-4 text-sm leading-6 text-[var(--muted)]">{caseStudy.disclaimer}</p>
      <EvidenceGroup title="Background" items={caseStudy.background} />
      <EvidenceGroup title="Timeline" items={caseStudy.timeline} />
      <EvidenceGroup title="Decision process and treatment" items={caseStudy.process} />
      <EvidenceGroup title="Sources and limits" items={caseStudy.sources} />
    </GlassCard>
  </PageContainer>;
}
