import type { ReactNode } from "react";

export function PageContainer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main
      className={`mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 ${className}`}
    >
      {children}
    </main>
  );
}

export function PageHeader({
  eyebrow,
  title,
  body,
  actions,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  actions?: ReactNode;
}) {
  return (
    <header className="mb-10 max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      {body && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
          {body}
        </p>
      )}
      {actions && <div className="mt-6 flex flex-wrap gap-3">{actions}</div>}
    </header>
  );
}
