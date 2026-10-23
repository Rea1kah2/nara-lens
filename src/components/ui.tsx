"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle, Repeat2, Heart, Share2, Sparkles, CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";

export function GlassCard({
  children,
  className = "",
  variant = "default",
  interactive = false,
}: {
  children: ReactNode;
  className?: string;
  variant?: "default" | "thick" | "thin";
  interactive?: boolean;
}) {
  const variantClass =
    variant === "thick" ? "glass-thick" : variant === "thin" ? "glass-thin" : "";
  const interactiveClass = interactive ? "glass-interactive cursor-pointer" : "";

  return (
    <div
      className={`glass rounded-[28px] ${variantClass} ${interactiveClass} ${className}`}
    >
      {children}
    </div>
  );
}

export function StatusBadge({
  label,
  tone = "blue",
  size = "md",
}: {
  label: string;
  tone?: "blue" | "teal" | "amber" | "rose" | "neutral";
  size?: "sm" | "md";
}) {
  const tones = {
    blue: "bg-blue-500/15 text-[var(--accent)] border-blue-500/25",
    teal: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/25",
    amber: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/25",
    rose: "bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/25",
    neutral: "bg-slate-500/15 text-[var(--muted)] border-slate-500/25",
  };

  const sizeClass =
    size === "sm" ? "px-2.5 py-0.5 text-[10px]" : "px-3 py-1 text-[11px]";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-bold uppercase tracking-[0.1em] ${tones[tone]} ${sizeClass}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {label}
    </span>
  );
}

export function ActionButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "subtle";
}) {
  const base =
    "focus-ring inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50";

  const variants = {
    primary:
      "bg-[var(--accent)] text-white shadow-lg shadow-blue-500/25 hover:bg-[var(--accent-strong)]",
    secondary:
      "border border-[var(--line)] bg-[rgb(var(--surface)/0.5)] text-[var(--text)] hover:bg-[rgb(var(--surface)/0.8)] hover:border-[var(--accent)]/40",
    subtle:
      "bg-transparent text-[var(--muted)] hover:text-[var(--text)] hover:bg-[rgb(var(--surface)/0.4)]",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function SocialPostCard({
  authorName = "Public Discourse Forum",
  handle = "@publicsquare",
  timestamp = "2h ago",
  simulationLabel,
  content,
  categoryBadge = "Political Commentary",
}: {
  authorName?: string;
  handle?: string;
  timestamp?: string;
  simulationLabel: string;
  content: string;
  categoryBadge?: string;
}) {
  return (
    <div className="rounded-[24px] border border-[var(--line)] bg-[rgb(var(--surface)/0.55)] p-5 sm:p-6 shadow-sm">
      {/* Simulation Disclaimer Bar */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-[var(--separator)] pb-3">
        <StatusBadge label={simulationLabel} tone="amber" size="sm" />
        <span className="text-[11px] font-medium text-[var(--muted)] tracking-wide">
          {categoryBadge}
        </span>
      </div>

      {/* Author info */}
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-[var(--accent)] to-[var(--teal)] font-bold text-white shadow-sm">
          PD
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="truncate text-sm font-bold text-[var(--text)]">
              {authorName}
            </span>
            <CheckCircle2 size={14} className="text-[var(--accent)] shrink-0" />
          </div>
          <span className="text-xs text-[var(--muted)]">
            {handle} · {timestamp}
          </span>
        </div>
      </div>

      {/* Post Text */}
      <div className="mt-4">
        <p className="text-lg font-semibold leading-relaxed text-[var(--text)] sm:text-xl">
          “{content}”
        </p>
      </div>

      {/* Mock Social Interactions */}
      <div className="mt-6 flex items-center justify-between border-t border-[var(--separator)] pt-3 text-xs text-[var(--muted)]">
        <button
          type="button"
          tabIndex={-1}
          className="flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors"
        >
          <MessageCircle size={15} />
          <span>248</span>
        </button>
        <button
          type="button"
          tabIndex={-1}
          className="flex items-center gap-1.5 hover:text-[var(--teal)] transition-colors"
        >
          <Repeat2 size={15} />
          <span>1.2K</span>
        </button>
        <button
          type="button"
          tabIndex={-1}
          className="flex items-center gap-1.5 hover:text-rose-500 transition-colors"
        >
          <Heart size={15} />
          <span>4.5K</span>
        </button>
        <button
          type="button"
          tabIndex={-1}
          className="flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors"
        >
          <Share2 size={15} />
        </button>
      </div>
    </div>
  );
}

export function ProgressBar({ value }: { value: number }) {
  const clamped = Math.max(0, Math.min(value, 100));
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-[rgb(var(--surface-soft)/0.9)] border border-[var(--line)]">
      <div
        className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--teal)] transition-all duration-500 ease-out"
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}

export function StepperControl({
  currentIndex,
  total,
  onPrevious,
  onNext,
  prevLabel = "Previous",
  nextLabel = "Next",
}: {
  currentIndex: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
  prevLabel?: string;
  nextLabel?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <ActionButton
        variant="secondary"
        onClick={onPrevious}
        disabled={currentIndex === 0}
        className="!py-2 !px-4 text-xs"
      >
        <ChevronLeft size={16} />
        {prevLabel}
      </ActionButton>

      {/* Dots Indicator */}
      <div className="flex items-center gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentIndex
                ? "w-6 bg-[var(--accent)] shadow-sm"
                : "w-2 bg-[var(--line)]"
            }`}
          />
        ))}
      </div>

      <ActionButton
        variant="secondary"
        onClick={onNext}
        disabled={currentIndex === total - 1}
        className="!py-2 !px-4 text-xs"
      >
        {nextLabel}
        <ChevronRight size={16} />
      </ActionButton>
    </div>
  );
}

export function NextStepCard({
  title,
  body,
  action,
  href,
}: {
  title: string;
  body: string;
  action: string;
  href: string;
}) {
  return (
    <div className="mt-8 flex flex-col gap-4 rounded-[24px] border border-[var(--teal)]/30 bg-[var(--teal-soft)] p-6 sm:flex-row sm:items-center sm:justify-between shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[var(--teal)] text-white shadow-sm">
          <Sparkles size={18} />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--teal)]">
            {title}
          </p>
          <p className="mt-1 max-w-xl text-sm leading-relaxed text-[var(--text)]">
            {body}
          </p>
        </div>
      </div>
      <Link
        href={href}
        className="focus-ring shrink-0 inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--accent)] px-5 py-3 text-sm font-bold text-white shadow-md shadow-blue-500/20 hover:bg-[var(--accent-strong)] transition-all"
      >
        <span>{action}</span>
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
