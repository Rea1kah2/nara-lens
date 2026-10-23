import type { ReactNode } from "react";

export function PageContainer({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <main className={`mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 ${className}`}>{children}</main>;
}

export function PageHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return <header className="max-w-3xl"><p className="eyebrow">{eyebrow}</p><h1 className="mt-4 text-4xl font-black tracking-[-.05em] sm:text-5xl lg:text-6xl">{title}</h1>{body && <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">{body}</p>}</header>;
}
