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
        eyebrow="Modalidade criada em Angola"
        title="COFOBOL"
        description="Novo Paradigma Desportivo Colectivo. Um site institucional pensado para apresentar a modalidade de forma simples, visual e educativa a quem ainda está a descobri-la."
        actions={
          <>
            <Link href="/sobre" className="btn-accent">
              Conhecer a modalidade
            </Link>
            <Link href="/videos" className="btn-secondary !border-white/30 !bg-white/[0.12] !text-white">
              Ver vídeos
            </Link>
            <Link href="/formacao" className="btn-secondary !border-white/30 !bg-white !text-blue-deep">
              Inscrever-se no curso
            </Link>
          </>
        }
        aside={
          <div className="grid gap-4 sm:grid-cols-2">
            {homeMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[1.75rem] border border-white/[0.12] bg-white/10 p-5 backdrop-blur-sm"
              >
                <p className="font-display text-3xl font-semibold uppercase">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-white/[0.72]">{metric.label}</p>
              </div>
            ))}
          </div>
        }
      />

      <section className="section-shell">
        <div className="grid gap-6 lg:grid-cols-4">
          {quickCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="card-shell panel-border rounded-[2rem] p-6 transition hover:-translate-y-1"
            >
              <p className="font-display text-3xl font-semibold uppercase text-blue-deep">
                {card.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">{card.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <SectionTitle
            eyebrow="Visão institucional"
            title="Uma nova linguagem para o desporto colectivo"
            description="O COFOBOL foi estruturado para ser compreendido por atletas, professores, treinadores e comunidades. A proposta do site é mostrar valor desportivo, educativo e social logo no primeiro contacto."
          />
          <div className="space-y-4">
            {institutionalHighlights.map((item) => (
              <div key={item.title} className="card-shell rounded-[1.75rem] p-5">
                <p className="font-display text-2xl font-semibold uppercase text-blue-deep">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-7 text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <SectionTitle
            eyebrow="Vídeo em destaque"
            title="Apresentação visual da modalidade"
            description="A estrutura está pronta para receber vídeo principal em YouTube ou Vimeo. Enquanto isso, o destaque comunica a proposta institucional e orienta o público para o próximo passo."
          />
          <VideoSpotlight
            title={featuredVideos[0].title}
            description={featuredVideos[0].description}
            thumbnailUrl={featuredVideos[0].thumbnailUrl}
          />
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card-shell rounded-[2.25rem] p-7 sm:p-8">
            <span className="eyebrow">Formação em destaque</span>
            <h2 className="mt-5 font-display text-4xl font-semibold uppercase text-blue-deep sm:text-5xl">
              {courseInfo.title}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <InfoLine label="Local" value={courseInfo.location} />
              <InfoLine label="Data" value={courseInfo.date} />
              <InfoLine label="Horário" value={courseInfo.time} />
              <InfoLine label="Carga horária" value={courseInfo.workload} />
            </div>
            <p className="mt-6 text-sm leading-7 text-muted">
              Público-alvo: {courseInfo.audience}. {courseInfo.vacancies}.
            </p>
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
              description="O site também funciona como centro de divulgação para cursos, campeonatos, demonstrações, novas turmas e atividades comunitárias."
            />
            {newsSeed.slice(0, 3).map((item) => (
              <article key={item.title} className="card-shell rounded-[1.75rem] p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="pill">{item.category}</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    {item.dateLabel}
                  </span>
                </div>
                <p className="mt-4 font-display text-2xl font-semibold uppercase text-blue-deep">
                  {item.title}
                </p>
                <p className="mt-1 text-sm font-semibold text-green-deep">{item.location}</p>
                <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function InfoLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.5rem] border border-line bg-white/75 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
        {label}
      </p>
      <p className="mt-2 text-sm leading-7 text-blue-deep">{value}</p>
    </div>
  );
}
