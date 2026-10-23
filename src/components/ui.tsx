import type { ReactNode } from "react";

export function GlassCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`glass rounded-[2rem] ${className}`}>{children}</div>;
}

export function StatusBadge({ label, tone = "blue" }: { label: string; tone?: "blue" | "teal" | "amber" | "rose" }) {
  const tones = { blue: "bg-blue-500/10 text-[var(--accent)]", teal: "bg-teal-500/10 text-teal-700 dark:text-teal-300", amber: "bg-amber-500/12 text-amber-700 dark:text-amber-300", rose: "bg-rose-500/10 text-rose-700 dark:text-rose-300" };
  return <span className={`inline-flex rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-[.12em] ${tones[tone]}`}>{label}</span>;
}

export function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return <div className="max-w-2xl"><p className="eyebrow">{eyebrow}</p><h1 className="mt-4 text-4xl font-black tracking-[-.04em] sm:text-6xl">{title}</h1>{body && <p className="mt-5 text-base leading-8 text-[var(--muted)] sm:text-lg">{body}</p>}</div>;
}

export function ProgressBar({ value }: { value: number }) {
  return <div className="h-2 overflow-hidden rounded-full bg-[var(--line)]"><div className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--teal)] transition-all duration-500" style={{ width: `${Math.max(0, Math.min(value, 100))}%` }} /></div>;
}

export function ActionButton({ children, variant = "primary", className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" }) {
  return <button {...props} className={`focus-ring min-h-12 rounded-2xl px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 ${variant === "primary" ? "bg-[var(--accent)] text-white shadow-lg shadow-blue-500/15" : "border border-[var(--line)] bg-[rgb(var(--surface)/.24)] text-[var(--text)]"} ${className}`}>{children}</button>;
}

export function NextStepCard({ title, body, action, href }: { title: string; body: string; action: string; href: string }) {
  return <div className="mt-10 flex flex-col gap-4 rounded-3xl border border-[var(--teal)]/20 bg-[var(--teal)]/8 p-6 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-sm font-bold text-[var(--teal)]">{title}</p><p className="mt-1 max-w-xl text-sm leading-6 text-[var(--muted)]">{body}</p></div><a href={href} className="focus-ring shrink-0 rounded-full bg-[var(--accent)] px-5 py-3 text-center text-sm font-bold text-white">{action} →</a></div>;
}
