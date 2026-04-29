"use client";

import Image from "next/image";
import { useState } from "react";

import type { GalleryItem } from "@/lib/site-data";

export function GalleryLightbox({ items }: { items: GalleryItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeItem = activeIndex === null ? null : items[activeIndex];

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <button
            key={`${item.title}-${index}`}
            type="button"
            className="card-shell group overflow-hidden rounded-[2rem] text-left"
            onClick={() => setActiveIndex(index)}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={item.imageUrl}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-blue-deep/85 via-transparent to-transparent" />
              <div className="absolute left-4 top-4">
                <span className="pill bg-white/[0.18] text-white">{item.category}</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <p className="font-display text-2xl font-semibold uppercase">
                  {item.title}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                  Clique para ampliar
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {activeItem ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-blue-deep/88 px-4 py-8 backdrop-blur-lg">
          <button
            type="button"
            className="absolute right-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-deep"
            onClick={() => setActiveIndex(null)}
          >
            Fechar
          </button>
          <div className="w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white p-4 shadow-2xl">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem]">
              <Image
                src={activeItem.imageUrl}
                alt={activeItem.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-2 px-2 pb-2 pt-5">
              <span className="pill">{activeItem.category}</span>
              <p className="font-display text-3xl font-semibold uppercase text-blue-deep">
                {activeItem.title}
              </p>
              <p className="text-sm leading-7 text-muted">{activeItem.alt}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
