import Image from "next/image";

import { getWhatsAppUrl, siteConfig } from "@/lib/site-config";

type VideoSpotlightProps = {
  title: string;
  description: string;
  youtubeId?: string;
  vimeoId?: string;
  thumbnailUrl?: string;
};

export function VideoSpotlight({
  title,
  description,
  youtubeId,
  vimeoId,
  thumbnailUrl,
}: VideoSpotlightProps) {
  const embedUrl = youtubeId
    ? `https://www.youtube.com/embed/${youtubeId}`
    : vimeoId
      ? `https://player.vimeo.com/video/${vimeoId}`
      : siteConfig.featuredVideoId
        ? `https://www.youtube.com/embed/${siteConfig.featuredVideoId}`
        : null;

  if (embedUrl) {
    return (
      <div className="card-shell overflow-hidden rounded-[2rem]">
        <div className="aspect-video">
          <iframe
            className="h-full w-full"
            src={embedUrl}
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    );
  }

  return (
    <div className="card-shell overflow-hidden rounded-[2rem]">
      <div className="relative aspect-video">
        {thumbnailUrl ? (
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        ) : null}
        <div className="absolute inset-0 bg-linear-to-br from-blue-deep/90 via-blue/75 to-green/70" />
        <div className="absolute inset-0 flex flex-col justify-end gap-4 p-6 text-white">
          <span className="pill bg-white/[0.18] text-white">Vídeo em atualização</span>
          <div>
            <p className="font-display text-3xl font-semibold uppercase">{title}</p>
            <p className="mt-2 max-w-xl text-sm leading-7 text-white/[0.78]">
              {description}
            </p>
          </div>
          <a
            href={getWhatsAppUrl(
              "Olá! Gostaria de receber o vídeo oficial de apresentação do COFOBOL."
            )}
            className="btn-accent w-fit"
          >
            Solicitar vídeo oficial
          </a>
        </div>
      </div>
    </div>
  );
}
