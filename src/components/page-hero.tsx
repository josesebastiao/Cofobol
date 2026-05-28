import type { ReactNode } from "react";
import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
  aside?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  aside,
}: PageHeroProps) {
  return (
    <section className="section-shell pt-8 sm:pt-10">
      <div className="hero-panel grid gap-8 overflow-hidden px-5 py-7 text-white sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-10">
        <div className="grid-overlay absolute inset-0 opacity-20" />
        <div className="absolute inset-x-0 top-0 h-2 bg-linear-to-r from-red via-blue to-green" />
        <div className="relative space-y-6">
          <span className="eyebrow border-white/15 bg-white/[0.08] text-white">{eyebrow}</span>
          <div className="space-y-4">
            <h1 className="font-display text-5xl font-semibold uppercase leading-none sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="max-w-2xl text-base leading-8 text-white/[0.78] sm:text-lg">
              {description}
            </p>
          </div>
          {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
        </div>

        <div className="relative grid gap-5">
          <div className="border border-white/15 bg-white p-4 shadow-2xl shadow-black/20">
            <Image
              src="/cofobol-logo.jpeg"
              alt="Logo COFOBOL-TEV-FM"
              width={900}
              height={540}
              priority
              className="h-auto w-full object-contain"
            />
          </div>
          {aside ? <div>{aside}</div> : null}
        </div>
      </div>
    </section>
  );
}
