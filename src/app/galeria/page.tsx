import { GalleryLightbox } from "@/components/gallery-lightbox";
import { PageHero } from "@/components/page-hero";
import { SectionTitle } from "@/components/section-title";
import { gallerySeed } from "@/lib/site-data";
import { buildMetadata } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Galeria",
  description:
    "Veja fotos de jogos, treinos, formações e eventos do ecossistema COFOBOL, com ampliação ao clicar.",
  path: "/galeria",
});

export default function GaleriaPage() {
  return (
    <>
      <PageHero
        eyebrow="Memória visual"
        title="Galeria de fotos"
        description="Espaço preparado para mostrar jogos, treinos, formações e eventos do COFOBOL com navegação simples e visual forte para desktop e telemóvel."
        aside={
          <div className="card-shell rounded-[2rem] bg-white/10 p-6 text-white">
            <p className="font-display text-4xl font-semibold uppercase">
              Clique para ampliar
            </p>
            <p className="mt-4 text-sm leading-7 text-white/80">
              A galeria foi montada com experiência leve, foco em leitura rápida e
              prioridade para imagens de impacto.
            </p>
          </div>
        }
      />

      <section className="section-shell">
        <SectionTitle
          eyebrow="Fotos"
          title="Jogos, treinos, formações e eventos"
          description="As imagens abaixo representam a estrutura ideal para a galeria institucional e podem ser substituídas ou ampliadas conforme o acervo oficial do COFOBOL."
        />
        <div className="mt-8">
          <GalleryLightbox items={gallerySeed} />
        </div>
      </section>
    </>
  );
}
