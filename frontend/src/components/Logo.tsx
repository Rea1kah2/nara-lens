"use client";

import Image from "next/image";

/**
 * NaraLogo — Logo Resmi NaraLens dari Klien.
 *
 * Menggunakan aset resmi asli yang telah diolah menjadi RGBA transparan murni,
 * bebas dari latar belakang kotak putih, menyatu dengan background tema terang
 * maupun gelap.
 */
export function NaraLogo({
  size = 40,
  className = "",
  priority = false,
}: {
  size?: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative flex shrink-0 items-center justify-center overflow-visible ${className}`}
    >
      <Image
        src="/logo.png"
        alt="NaraLens Logo"
        width={size}
        height={size}
        className="h-full w-full object-contain filter drop-shadow-sm transition-transform duration-200 group-hover:scale-105"
        priority={priority}
      />
    </div>
  );
}

/**
 * Badge wrapper dengan aksen halus untuk footer atau hero spotlight.
 */
export function NaraLogoBadge({ size = 44 }: { size?: number }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="flex items-center justify-center rounded-2xl bg-[rgb(var(--surface)/0.8)] border border-[var(--line)] shadow-sm p-1"
    >
      <NaraLogo size={Math.round(size * 0.85)} />
    </div>
  );
}
