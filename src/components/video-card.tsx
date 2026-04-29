import Image from "next/image";

import type { VideoItem } from "@/lib/site-data";
import { getWhatsAppUrl } from "@/lib/site-config";

export function VideoCard({ video }: { video: VideoItem }) {
  const href = video.youtubeId
    ? `https://www.youtube.com/watch?v=${video.youtubeId}`
    : video.vimeoId
      ? `https://vimeo.com/${video.vimeoId}`
      : getWhatsAppUrl(`Olá! Gostaria de receber o vídeo "${video.title}" do COFOBOL.`);

  const thumbnail =
    video.youtubeId && !video.thumbnailUrl
      ? `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`
      : video.thumbnailUrl;

  return (
    <article className="card-shell panel-border rounded-[2rem] p-4">
      <div className="relative aspect-video overflow-hidden rounded-[1.5rem]">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={video.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        ) : null}
        <div className="absolute inset-0 bg-linear-to-t from-blue-deep/85 via-blue-deep/20 to-transparent" />
        <div className="absolute left-4 top-4">
          <span className="pill bg-white/[0.18] text-white">{video.category}</span>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        <h3 className="font-display text-2xl font-semibold uppercase text-blue-deep">
          {video.title}
        </h3>
        <p className="text-sm leading-7 text-muted">{video.description}</p>
        <a
          href={href}
          target={video.youtubeId || video.vimeoId ? "_blank" : undefined}
          rel={video.youtubeId || video.vimeoId ? "noreferrer" : undefined}
          className="btn-secondary"
        >
          Assistir
        </a>
      </div>
    </article>
  );
}
