"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navigation } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/45 bg-white/65 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-linear-to-br from-green to-blue text-sm font-black tracking-[0.24em] text-white shadow-lg shadow-blue/25">
            CF
          </div>
          <div>
            <p className="font-display text-2xl font-semibold uppercase leading-none text-blue-deep">
              COFOBOL
            </p>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              Novo paradigma desportivo colectivo
            </p>
          </div>
        </Link>

        <button
          type="button"
          className="inline-flex rounded-full border border-line bg-white/75 px-4 py-2 text-sm font-semibold text-blue-deep lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-label="Abrir menu"
        >
          Menu
        </button>

        <nav className="hidden items-center gap-2 lg:flex">
          {navigation.map((item) => {
            const active =
              item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-blue-deep text-white"
                    : "text-blue-deep hover:bg-white/80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {isOpen ? (
        <nav className="border-t border-white/45 bg-white/92 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            {navigation.map((item) => {
              const active =
                item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold ${
                    active ? "bg-blue-deep text-white" : "text-blue-deep"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
