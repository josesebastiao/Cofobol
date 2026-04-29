import { ContentManager } from "@/components/content-manager";
import { PageHero } from "@/components/page-hero";
import { SectionTitle } from "@/components/section-title";
import { listManagedContent } from "@/lib/content-store";
import { buildMetadata } from "@/lib/site-config";

export const metadata = {
  ...buildMetadata({
    title: "Gestão de Conteúdo",
    description: "Área simples para cadastrar vídeos, notícias e imagens no Firebase.",
    path: "/gestao",
  }),
  robots: {
    index: false,
    follow: false,
  },
};

type PreviewItem = {
  title?: string;
  category?: string;
  createdAt?: string;
};

export default async function GestaoPage() {
  const [videos, news, gallery] = await Promise.all([
    listManagedContent<PreviewItem>("videos"),
    listManagedContent<PreviewItem>("news"),
    listManagedContent<PreviewItem>("gallery"),
  ]);

  return (
    <>
      <PageHero
        eyebrow="Área interna"
        title="Gestão de conteúdo"
        description="Painel simples para cadastrar vídeos, notícias e fotos no Firebase. Para produção, a recomendação é proteger esta rota com autenticação."
        aside={
          <div className="card-shell rounded-[2rem] bg-white/10 p-6 text-white">
            <p className="font-display text-4xl font-semibold uppercase">
              Próxima etapa
            </p>
            <p className="mt-4 text-sm leading-7 text-white/80">
              Esta base já prepara o terreno para uma área futura de treinadores
              certificados e rotinas editoriais autenticadas.
            </p>
          </div>
        }
      />

      <section className="section-shell">
        <SectionTitle
          eyebrow="Cadastro"
          title="Adicionar vídeos, notícias e fotos"
          description="Os formulários enviam dados para o Firebase. Se as credenciais ainda não estiverem configuradas, o sistema informa o erro com clareza."
        />
        <div className="mt-8">
          <ContentManager />
        </div>
      </section>

      <section className="section-shell">
        <SectionTitle
          eyebrow="Pré-visualização"
          title="Últimos conteúdos guardados"
          description="Quando o Firebase estiver configurado, esta área passa a listar os registos recentes criados pelo painel."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <PreviewCard title="Vídeos" items={videos} />
          <PreviewCard title="Notícias" items={news} />
          <PreviewCard title="Galeria" items={gallery} />
        </div>
      </section>
    </>
  );
}

function PreviewCard({
  title,
  items,
}: {
  title: string;
  items: PreviewItem[];
}) {
  return (
    <div className="card-shell rounded-[2rem] p-6">
      <p className="font-display text-3xl font-semibold uppercase text-blue-deep">
        {title}
      </p>
      <div className="mt-5 space-y-3">
        {items.length > 0 ? (
          items.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="rounded-[1.5rem] border border-line bg-white/70 p-4"
            >
              <p className="text-sm font-semibold text-blue-deep">
                {item.title || "Sem título"}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
                {item.category || "Sem categoria"}
              </p>
              {item.createdAt ? (
                <p className="mt-2 text-xs text-muted">{item.createdAt}</p>
              ) : null}
            </div>
          ))
        ) : (
          <p className="rounded-[1.5rem] border border-dashed border-line bg-white/60 p-4 text-sm leading-7 text-muted">
            Nenhum registo disponível. Configure o Firebase e utilize os formulários
            acima para começar.
          </p>
        )}
      </div>
    </div>
  );
}
