"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Repeat2,
  Heart,
  Share2,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

/* ─── GlassCard ─────────────────────────────────────────────────────────── */

export function GlassCard({
  children,
  className = "",
  variant = "default",
  interactive = false,
  style,
}: {
  children: ReactNode;
  className?: string;
  variant?: "default" | "thick" | "thin";
  interactive?: boolean;
  style?: React.CSSProperties;
}) {
  const variantClass =
    variant === "thick" ? "glass-thick" : variant === "thin" ? "glass-thin" : "";
  const interactiveClass = interactive ? "glass-interactive cursor-pointer" : "";

  return (
    <div
      style={style}
      className={`glass rounded-[var(--radius-lg)] ${variantClass} ${interactiveClass} ${className}`}
    >
      {children}
    </div>
  );
}

/* ─── StatusBadge ──────────────────────────────────────────────────────── */

export function StatusBadge({
  label,
  tone = "teal",
  size = "md",
}: {
  label: string;
  tone?: "blue" | "teal" | "amber" | "rose" | "neutral";
  size?: "sm" | "md";
}) {
  const tones = {
    blue: "bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/20",
    teal: "bg-[var(--teal-soft)] text-[var(--teal-strong)] dark:text-teal-300 border-[var(--teal)]/25",
    amber: "bg-[var(--amber-soft)] text-[var(--amber)] border-[var(--amber)]/25",
    rose: "bg-[var(--rose-soft)] text-[var(--rose)] border-[var(--rose)]/25",
    neutral: "bg-[rgb(var(--surface-soft)/0.8)] text-[var(--muted)] border-[var(--line)]",
  };

  const sizeClass =
    size === "sm"
      ? "px-2 py-0.5 text-[10px] tracking-[0.06em]"
      : "px-2.5 py-1 text-[11px] tracking-[0.06em]";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-bold uppercase ${tones[tone]} ${sizeClass}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-75" />
      {label}
    </span>
  );
}

/* ─── ActionButton ─────────────────────────────────────────────────────── */

export function ActionButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "subtle";
}) {
  const base =
    "focus-ring inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] px-5 py-2.5 text-sm font-semibold transition-all duration-200 active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-50";

  const variants = {
    primary:
      "bg-[var(--teal)] text-white shadow-sm hover:bg-[var(--teal-strong)] hover:shadow-md",
    secondary:
      "border border-[var(--line)] bg-[rgb(var(--surface)/0.7)] text-[var(--text)] hover:bg-[rgb(var(--surface)/0.95)] hover:border-[var(--teal)]/40",
    subtle:
      "bg-transparent text-[var(--muted)] hover:text-[var(--text)] hover:bg-[rgb(var(--surface)/0.5)]",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

/* ─── SocialPostCard ───────────────────────────────────────────────────── */

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
    <div className="rounded-[var(--radius-md)] border border-[var(--line)] bg-[rgb(var(--surface)/0.65)] p-5 sm:p-6 shadow-sm">
      {/* Simulation Disclaimer Bar */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-[var(--separator)] pb-3">
        <StatusBadge label={simulationLabel} tone="amber" size="sm" />
        <span className="text-[10.5px] font-bold uppercase tracking-wider text-[var(--muted)]">
          {categoryBadge}
        </span>
      </div>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--navy)] text-white font-bold text-xs shadow-sm">
          PD
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="truncate text-sm font-bold text-[var(--text)]">
              {authorName}
            </span>
            <CheckCircle2 size={13} className="text-[var(--teal)] shrink-0" />
          </div>
          <span className="text-[11px] text-[var(--muted)]">
            {handle} · {timestamp}
          </span>
        </div>
      </div>

      {/* Post content */}
      <div className="mt-4">
        <p className="text-[17px] font-semibold leading-relaxed text-[var(--text)] sm:text-lg">
          &ldquo;{content}&rdquo;
        </p>
      </div>

      {/* Mock interactions */}
      <div className="mt-5 flex items-center justify-between border-t border-[var(--separator)] pt-3 text-xs text-[var(--muted)]">
        <button type="button" tabIndex={-1} className="flex items-center gap-1.5 hover:text-[var(--teal)] transition-colors">
          <MessageCircle size={14} />
          <span>248</span>
        </button>
        <button type="button" tabIndex={-1} className="flex items-center gap-1.5 hover:text-[var(--teal)] transition-colors">
          <Repeat2 size={14} />
          <span>1.2K</span>
        </button>
        <button type="button" tabIndex={-1} className="flex items-center gap-1.5 hover:text-[var(--rose)] transition-colors">
          <Heart size={14} />
          <span>4.5K</span>
        </button>
        <button type="button" tabIndex={-1} className="flex items-center gap-1.5 hover:text-[var(--teal)] transition-colors">
          <Share2 size={14} />
        </button>
      </div>
    </div>
  );
}

/* ─── ProgressBar ──────────────────────────────────────────────────────── */

export function ProgressBar({ value }: { value: number }) {
  const clamped = Math.max(0, Math.min(value, 100));
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-[rgb(var(--surface-soft)/0.8)] border border-[var(--line)]">
      <div
        className="h-full rounded-full bg-gradient-to-r from-[var(--teal)] to-emerald-400 transition-all duration-500 ease-out"
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}

/* ─── StepperControl ───────────────────────────────────────────────────── */

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
        className="!py-1.5 !px-3.5 !text-xs font-semibold"
      >
        <ChevronLeft size={14} />
        {prevLabel}
      </ActionButton>

      {/* Pill dots indicator */}
      <div className="flex items-center gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === currentIndex
                ? "w-6 bg-[var(--teal)]"
                : "w-1.5 bg-[var(--line)]"
            }`}
          />
        ))}
      </div>

      <ActionButton
        variant="secondary"
        onClick={onNext}
        disabled={currentIndex === total - 1}
        className="!py-1.5 !px-3.5 !text-xs font-semibold"
      >
        {nextLabel}
        <ChevronRight size={14} />
      </ActionButton>
    </div>
  );
}

/* ─── NextStepCard ─────────────────────────────────────────────────────── */

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
    <div className="mt-8 flex flex-col gap-4 rounded-[var(--radius-md)] border border-[var(--teal)]/25 bg-[var(--teal-soft)] p-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--teal)] text-white shadow-sm">
          <Sparkles size={17} />
        </div>
        <div>
          <p className="text-[10.5px] font-bold uppercase tracking-widest text-[var(--teal-strong)]">
            {title}
          </p>
          <p className="mt-1 max-w-xl text-sm leading-relaxed text-[var(--text)]">
            {body}
          </p>
        </div>
      </div>
      <Link
        href={href}
        className="focus-ring shrink-0 inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--teal)] px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[var(--teal-strong)] transition-all"
      >
        <span>{action}</span>
        <ArrowRight size={15} />
      </Link>
    </div>
  );
}
