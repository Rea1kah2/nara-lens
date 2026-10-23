"use client";
import { GlassCard } from "@/components/ui";
import { PageContainer, PageHeader } from "@/components/layout";
import { useApp } from "@/lib/state";
export default function AboutPage() { const { t } = useApp(); return <PageContainer><PageHeader eyebrow="About" title={t.aboutTitle} body={t.aboutBody} /><div className="mt-12 grid max-w-5xl gap-5 md:grid-cols-3">{[["Purpose", "Practise critical questions before accepting or sharing a claim."], ["Boundaries", "A family connection is not proof of nepotism; claims need context and evidence."], ["Evaluation", "Test navigation, comprehension, and pre/post critical-reading performance with student users."]].map(([title, body]) => <GlassCard className="p-7" key={title}><h2 className="text-xl font-bold">{title}</h2><p className="mt-3 leading-7 text-[var(--muted)]">{body}</p></GlassCard>)}</div></PageContainer>; }
