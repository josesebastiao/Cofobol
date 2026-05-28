"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navigation } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/92 backdrop-blur-xl">
      <div className="h-1 w-full bg-linear-to-r from-red via-blue to-green" />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src="/cofobol-logo.jpeg"
            alt="COFOBOL-TEV-FM"
            width={250}
            height={86}
            priority
            className="h-14 w-auto object-contain sm:h-16"
          />
          <div className="hidden min-w-0 border-l border-line pl-3 xl:block">
            <p className="font-display text-xl font-semibold uppercase leading-none text-black">
              COFOBOL
            </p>
            <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted">
              Tev-FM
            </p>
          </div>
        </Link>

        <button
          type="button"
          className="inline-flex rounded-lg border border-line bg-white px-4 py-2 text-sm font-semibold text-blue-deep lg:hidden"
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
                className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-blue-deep text-white shadow-sm"
                    : "text-black hover:bg-red/10 hover:text-red-deep"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {isOpen ? (
        <nav className="border-t border-line bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            {navigation.map((item) => {
              const active =
                item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-4 py-3 text-sm font-semibold ${
                    active ? "bg-blue-deep text-white" : "text-black hover:bg-red/10"
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
