import { PageHero } from "@/components/page-hero";
import { SectionTitle } from "@/components/section-title";
import { playSections } from "@/lib/site-data";
import { buildMetadata } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Como Jogar",
  description:
    "Entenda o campo, a bola, o equipamento, a forma de jogar, os fundamentos, a pontuação e as capacidades psicomotoras do COFOBOL.",
  path: "/como-jogar",
});

export default function ComoJogarPage() {
  return (
    <>
      <PageHero
        eyebrow="Aprendizagem do jogo"
        title="Como jogar COFOBOL"
        description="Página didática para apresentar os elementos centrais da modalidade a praticantes, professores, treinadores e curiosos que estão a conhecer o jogo pela primeira vez."
        aside={
          <div className="card-shell rounded-[2rem] bg-white/10 p-6 text-white">
            <p className="font-display text-4xl font-semibold uppercase">
              Clareza antes da complexidade
            </p>
            <p className="mt-4 text-sm leading-7 text-white/80">
              O conteúdo foi organizado por temas para facilitar a leitura em
              telemóvel, sala de aula, formação técnica e apresentação pública.
            </p>
          </div>
        }
      />

      <section className="section-shell">
        <SectionTitle
          eyebrow="Estrutura técnica"
          title="Tudo o que o público precisa compreender"
          description="Cada bloco pode ser aprofundado com ilustrações, regulamentos, vídeos e demonstrações oficiais ao longo da evolução do projeto."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {playSections.map((section) => (
            <article key={section.title} className="card-shell rounded-[2rem] p-6 sm:p-7">
              <p className="font-display text-3xl font-semibold uppercase text-blue-deep">
                {section.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">{section.description}</p>
              <ul className="mt-5 space-y-3">
                {section.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="rounded-[1.5rem] border border-line bg-white/70 px-4 py-4 text-sm leading-7 text-muted"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
