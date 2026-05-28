import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { SectionTitle } from "@/components/section-title";
import { VideoSpotlight } from "@/components/video-spotlight";
import {
  courseInfo,
  featuredVideos,
  homeMetrics,
  institutionalHighlights,
  newsSeed,
  quickCards,
} from "@/lib/site-data";
import { buildMetadata } from "@/lib/site-config";

export const metadata = buildMetadata({
  description:
    "Conheça o COFOBOL, descubra como a modalidade funciona, veja vídeos, formações e oportunidades de inscrição.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="COFOBOL-TEV-FM"
        title="COFOBOL"
        description="Novo Paradigma Desportivo Colectivo. Uma identidade mais direta, com a força do vermelho, azul, verde, preto e branco da marca em todas as áreas do site."
        actions={
          <>
            <Link href="/sobre" className="btn-accent">
              Conhecer a modalidade
            </Link>
            <Link href="/videos" className="btn-secondary !border-white/30 !bg-white/[0.12] !text-white">
              Ver vídeos
            </Link>
            <Link href="/formacao" className="btn-secondary !border-white/30 !bg-white !text-black">
              Inscrever-se no curso
            </Link>
          </>
        }
        aside={
          <div className="grid gap-3 sm:grid-cols-2">
            {homeMetrics.map((metric) => (
              <div
                key={metric.label}
                className="border border-white/[0.14] bg-white/[0.08] p-4 backdrop-blur-sm"
              >
                <p className="font-display text-2xl font-semibold uppercase">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-white/[0.72]">{metric.label}</p>
              </div>
            ))}
          </div>
        }
      />

      <section className="section-shell py-10">
        <div className="grid gap-4 lg:grid-cols-4">
          {quickCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="card-shell panel-border group p-6 transition hover:-translate-y-1"
            >
              <div className="mb-5 h-2 w-20 bg-linear-to-r from-red via-blue to-green transition group-hover:w-28" />
              <p className="font-display text-3xl font-semibold uppercase text-black">
                {card.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">{card.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-black text-white">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <SectionTitle
              eyebrow="Visão institucional"
              title="Uma nova linguagem para o desporto colectivo"
              description="O COFOBOL foi estruturado para ser compreendido por atletas, professores, treinadores e comunidades. A proposta do site agora comunica essa energia com mais contraste e presença."
            />
            <div className="grid gap-3">
              {institutionalHighlights.map((item, index) => (
                <div key={item.title} className="border border-white/15 bg-white/[0.06] p-5">
                  <div className="flex items-start gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center bg-white text-sm font-black text-black">
                      0{index + 1}
                    </span>
                    <div>
                      <p className="font-display text-2xl font-semibold uppercase text-white">
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-white/70">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <SectionTitle
              eyebrow="Vídeo em destaque"
              title="Apresentação visual da modalidade"
              description="A estrutura está pronta para receber vídeo principal em YouTube ou Vimeo. Enquanto isso, o destaque orienta o público para o contacto oficial."
            />
            <VideoSpotlight
              title={featuredVideos[0].title}
              description={featuredVideos[0].description}
              thumbnailUrl={featuredVideos[0].thumbnailUrl}
            />
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="card-shell p-7 sm:p-8">
            <span className="eyebrow">Formação em destaque</span>
            <h2 className="mt-5 font-display text-4xl font-semibold uppercase text-black sm:text-5xl">
              {courseInfo.title}
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-muted">
              Público-alvo: {courseInfo.audience}. {courseInfo.vacancies}.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <InfoLine label="Local" value={courseInfo.location} />
              <InfoLine label="Data" value={courseInfo.date} />
              <InfoLine label="Horário" value={courseInfo.time} />
              <InfoLine label="Carga horária" value={courseInfo.workload} />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={courseInfo.whatsappUrl} className="btn-primary">
                Inscrever-se pelo WhatsApp
              </a>
              <Link href="/formacao" className="btn-secondary">
                Ver detalhes do curso
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <SectionTitle
              eyebrow="Agenda e notícias"
              title="Atualizações do ecossistema COFOBOL"
              description="Cursos, campeonatos, demonstrações, novas turmas e atividades comunitárias com leitura rápida."
            />
            {newsSeed.slice(0, 3).map((item) => (
              <article key={item.title} className="card-shell p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="pill">{item.category}</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    {item.dateLabel}
                  </span>
                </div>
                <p className="mt-4 font-display text-2xl font-semibold uppercase text-black">
                  {item.title}
                </p>
                <p className="mt-1 text-sm font-semibold text-green-deep">{item.location}</p>
                <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="grid gap-5 bg-white p-5 shadow-sm lg:grid-cols-3">
          <div className="border-l-8 border-red p-5">
            <p className="font-display text-3xl font-semibold uppercase text-black">Vermelho</p>
            <p className="mt-2 text-sm leading-7 text-muted">Energia competitiva e chamada para ação.</p>
          </div>
          <div className="border-l-8 border-blue p-5">
            <p className="font-display text-3xl font-semibold uppercase text-black">Azul</p>
            <p className="mt-2 text-sm leading-7 text-muted">Organização, confiança e presença institucional.</p>
          </div>
          <div className="border-l-8 border-green p-5">
            <p className="font-display text-3xl font-semibold uppercase text-black">Verde</p>
            <p className="mt-2 text-sm leading-7 text-muted">Crescimento da modalidade em escolas e comunidades.</p>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-line bg-white/75 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
        {label}
      </p>
      <p className="mt-2 text-sm leading-7 text-blue-deep">{value}</p>
    </div>
  );
}
