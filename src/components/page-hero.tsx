import type { ReactNode } from "react";

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
    <section className="section-shell pt-10 sm:pt-14">
      <div className="hero-panel grid gap-8 overflow-hidden rounded-[2.5rem] px-6 py-8 text-white sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-10">
        <div className="grid-overlay absolute inset-0 opacity-30" />
        <div className="relative space-y-6">
          <span className="eyebrow bg-white/[0.12] text-white">{eyebrow}</span>
          <div className="space-y-4">
            <h1 className="font-display text-5xl font-semibold uppercase leading-none sm:text-6xl">
              {title}
            </h1>
            <p className="max-w-2xl text-base leading-8 text-white/[0.78] sm:text-lg">
              {description}
            </p>
          </div>
          {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
        </div>

        <div className="relative">{aside}</div>
      </div>
    </section>
  );
}
