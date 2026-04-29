import Link from "next/link";

import { GalleryLightbox } from "@/components/gallery-lightbox";
import { PageHero } from "@/components/page-hero";
import { SectionTitle } from "@/components/section-title";
import { gallerySeed, historyTimeline } from "@/lib/site-data";
import { buildMetadata } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "História",
  description:
    "Acompanhe a origem do COFOBOL, os primeiros eventos, o processo de capacitação e a expansão da modalidade em Angola.",
  path: "/historia",
});

export default function HistoriaPage() {
  return (
    <>
      <PageHero
        eyebrow="Linha do tempo"
        title="História do COFOBOL"
        description="Uma leitura institucional da evolução da modalidade, desde o seu surgimento em Angola até às primeiras ações de difusão e capacitação."
        actions={
          <Link href="/galeria" className="btn-accent">
            Ver galeria completa
          </Link>
        }
        aside={
          <div className="grid gap-4">
            {historyTimeline.map((item) => (
              <div
                key={item.stage}
                className="rounded-[1.75rem] border border-white/[0.12] bg-white/10 p-5 text-white"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  {item.stage}
                </p>
                <p className="mt-2 font-display text-2xl font-semibold uppercase">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        }
      />

      <section className="section-shell">
        <SectionTitle
          eyebrow="Marcos principais"
          title="Da origem à expansão"
          description="Como modalidade emergente, o COFOBOL precisa comunicar bem os seus marcos. Esta página foi pensada para acolher datas, fotos, vídeos e acontecimentos oficiais à medida que o projeto evolui."
        />
        <div className="mt-8 grid gap-6">
          {historyTimeline.map((item, index) => (
            <article
              key={item.title}
              className="card-shell grid gap-5 rounded-[2rem] p-6 lg:grid-cols-[120px_1fr]"
            >
              <div className="rounded-[1.5rem] bg-linear-to-br from-green/[0.12] to-blue/[0.12] p-4 text-center">
                <p className="font-display text-4xl font-semibold uppercase text-blue-deep">
                  0{index + 1}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  {item.stage}
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold uppercase text-blue-deep">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-8 text-muted">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionTitle
          eyebrow="Memória visual"
          title="Fotos e vídeos históricos"
          description="A galeria abaixo serve como espaço institucional para organizar momentos de jogos, treinos, formações e eventos ligados à construção do COFOBOL."
        />
        <div className="mt-8">
          <GalleryLightbox items={gallerySeed.slice(0, 3)} />
        </div>
      </section>
    </>
  );
}
