import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { SectionTitle } from "@/components/section-title";
import { newsSeed } from "@/lib/site-data";
import { buildMetadata } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Notícias e Eventos",
  description:
    "Acompanhe notícias, cursos, campeonatos, demonstrações, novas turmas e eventos escolares ou comunitários do COFOBOL.",
  path: "/noticias",
});

export default function NoticiasPage() {
  return (
    <>
      <PageHero
        eyebrow="Atualizações"
        title="Notícias e eventos"
        description="Centro editorial do site para divulgar cursos, campeonatos, demonstrações, novas turmas e atividades escolares ou comunitárias ligadas ao COFOBOL."
        actions={
          <Link href="/formacao" className="btn-accent">
            Ver formação em destaque
          </Link>
        }
        aside={
          <div className="card-shell rounded-[2rem] bg-white/10 p-6 text-white">
            <p className="font-display text-4xl font-semibold uppercase">
              Agenda viva
            </p>
            <p className="mt-4 text-sm leading-7 text-white/80">
              O site já está preparado para futuras publicações a partir de uma área
              de cadastro conectada ao Firebase.
            </p>
          </div>
        }
      />

      <section className="section-shell">
        <SectionTitle
          eyebrow="Editorial"
          title="Divulgação contínua da modalidade"
          description="Os cartões abaixo representam a estrutura de publicação para informar o público, atrair participantes e fortalecer presença institucional."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {newsSeed.map((item) => (
            <article key={item.title} className="card-shell rounded-[2rem] p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="pill">{item.category}</span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  {item.dateLabel}
                </span>
              </div>
              <p className="mt-5 font-display text-3xl font-semibold uppercase text-blue-deep">
                {item.title}
              </p>
              <p className="mt-2 text-sm font-semibold text-green-deep">{item.location}</p>
              <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
