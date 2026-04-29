import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { SectionTitle } from "@/components/section-title";
import { aboutBenefits, audiences } from "@/lib/site-data";
import { buildMetadata } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Sobre o COFOBOL",
  description:
    "Descubra o que é o COFOBOL, como nasceu em Angola e quais benefícios oferece para atletas, escolas, comunidades e treinadores.",
  path: "/sobre",
});

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre a modalidade"
        title="COFOBOL explicado de forma simples"
        description="Esta página apresenta a essência do COFOBOL para quem ainda não conhece a modalidade: origem angolana, proposta educativa, impacto coletivo e potencial de crescimento."
        actions={
          <>
            <Link href="/como-jogar" className="btn-accent">
              Ver como se joga
            </Link>
            <Link href="/historia" className="btn-secondary !border-white/30 !bg-white/[0.12] !text-white">
              Conhecer a história
            </Link>
          </>
        }
        aside={
          <div className="card-shell rounded-[2rem] bg-white/10 p-6 text-white backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
              Essência do COFOBOL
            </p>
            <p className="mt-4 font-display text-4xl font-semibold uppercase">
              Desporto, educação e comunidade
            </p>
            <p className="mt-4 text-sm leading-7 text-white/[0.78]">
              O COFOBOL foi pensado para unir aprendizagem técnica, participação
              coletiva e impacto social, com linguagem acessível para novos públicos.
            </p>
          </div>
        }
      />

      <section className="section-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <SectionTitle
            eyebrow="O que é"
            title="Uma modalidade colectiva criada em Angola"
            description="O COFOBOL nasce com identidade própria, organização didática e vocação para ser praticado em ambientes escolares, comunitários e desportivos."
          />
          <div className="card-shell rounded-[2rem] p-6 sm:p-8">
            <p className="text-base leading-8 text-muted">
              Mais do que um jogo, o COFOBOL apresenta-se como uma proposta de
              desenvolvimento motor, social e pedagógico. A modalidade favorece
              leitura táctica, espírito coletivo, disciplina e inclusão, permitindo
              que pessoas de diferentes perfis conheçam, pratiquem e ensinem o jogo.
            </p>
            <div className="soft-divider my-6" />
            <p className="font-display text-3xl font-semibold uppercase text-blue-deep">
              Espaço para destacar o criador da modalidade
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              A estrutura do site já está preparada para receber uma biografia mais
              completa, visão institucional, percurso e contribuições do criador do
              COFOBOL para o desenvolvimento desportivo em Angola.
            </p>
          </div>
        </div>

        <div className="card-shell rounded-[2rem] p-6 sm:p-8">
          <p className="font-display text-3xl font-semibold uppercase text-blue-deep">
            Quem pode beneficiar
          </p>
          <div className="mt-5 space-y-3">
            {audiences.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-line bg-white/70 px-4 py-4 text-sm leading-7 text-muted"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <SectionTitle
          eyebrow="Benefícios"
          title="Valor para atletas, escolas e treinadores"
          description="O COFOBOL combina prática desportiva, formação humana e oportunidades de expansão institucional."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {aboutBenefits.map((item) => (
            <article key={item.title} className="card-shell rounded-[2rem] p-6">
              <p className="font-display text-3xl font-semibold uppercase text-blue-deep">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
