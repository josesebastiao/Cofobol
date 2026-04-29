import { PageHero } from "@/components/page-hero";
import { SectionTitle } from "@/components/section-title";
import { VideoCard } from "@/components/video-card";
import { VideoSpotlight } from "@/components/video-spotlight";
import { featuredVideos } from "@/lib/site-data";
import { buildMetadata } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Vídeos",
  description:
    "Explore vídeos do COFOBOL por categoria: apresentação da modalidade, como jogar, regras, treinos, competições, entrevistas e cursos.",
  path: "/videos",
});

export default function VideosPage() {
  return (
    <>
      <PageHero
        eyebrow="Biblioteca audiovisual"
        title="Vídeos do COFOBOL"
        description="Página preparada para centralizar apresentações institucionais, conteúdos didáticos, treinos, entrevistas, competições e gravações de cursos."
        aside={
          <div className="card-shell rounded-[2rem] bg-white/10 p-6 text-white">
            <p className="font-display text-4xl font-semibold uppercase">
              Conteúdo por categoria
            </p>
            <p className="mt-4 text-sm leading-7 text-white/80">
              A gestão de vídeos pode ser feita pela área administrativa do site, com
              suporte para YouTube, Vimeo e thumbnails próprias.
            </p>
          </div>
        }
      />

      <section className="section-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionTitle
            eyebrow="Destaque"
            title="Vídeo principal da modalidade"
            description="Ideal para apresentar o COFOBOL em campanhas institucionais, páginas de parceiros e sessões públicas de demonstração."
          />
        </div>
        <VideoSpotlight
          title={featuredVideos[0].title}
          description={featuredVideos[0].description}
          thumbnailUrl={featuredVideos[0].thumbnailUrl}
        />
      </section>

      <section className="section-shell">
        <SectionTitle
          eyebrow="Catálogo"
          title="Grid de vídeos"
          description="Os cartões abaixo já seguem a estrutura pedida: thumbnail, título, descrição curta e ação para assistir."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredVideos.map((video) => (
            <VideoCard key={`${video.category}-${video.title}`} video={video} />
          ))}
        </div>
      </section>
    </>
  );
}
