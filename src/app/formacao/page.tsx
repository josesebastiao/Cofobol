import { EnrollmentForm } from "@/components/enrollment-form";
import { PageHero } from "@/components/page-hero";
import { SectionTitle } from "@/components/section-title";
import { courseInfo } from "@/lib/site-data";
import { buildMetadata } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Formação de Treinadores",
  description:
    "Inscreva-se no curso Formação para Treinadores Desportivos de COFOBOL - Nível I e solicite mais informações.",
  path: "/formacao",
});

export default function FormacaoPage() {
  return (
    <>
      <PageHero
        eyebrow="Cursos e certificação"
        title="Formação de treinadores"
        description="Esta página foi desenhada para converter interesse em inscrição, explicar a proposta do curso e oferecer acesso rápido por WhatsApp e formulário."
        actions={
          <>
            <a href={courseInfo.whatsappUrl} className="btn-accent">
              Inscrever-se pelo WhatsApp
            </a>
            <a href={courseInfo.informationUrl} className="btn-secondary !border-white/30 !bg-white/[0.12] !text-white">
              Solicitar informações
            </a>
          </>
        }
        aside={
          <div className="card-shell rounded-[2rem] bg-white/10 p-6 text-white">
            <p className="font-display text-4xl font-semibold uppercase">
              Nível I
            </p>
            <p className="mt-4 text-sm leading-7 text-white/80">
              Curso estruturado para formar multiplicadores do COFOBOL em escolas,
              comunidades, clubes e projetos de base.
            </p>
          </div>
        }
      />

      <section className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <SectionTitle
            eyebrow="Conteúdo inicial"
            title={courseInfo.title}
            description="Uma formação desenhada para ampliar a base técnica da modalidade e preparar treinadores para atuação segura, pedagógica e certificada."
          />
          <div className="card-shell rounded-[2rem] p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <Info label="Local" value={courseInfo.location} />
              <Info label="Data" value={courseInfo.date} />
              <Info label="Horário" value={courseInfo.time} />
              <Info label="Carga horária" value={courseInfo.workload} />
              <Info label="Público-alvo" value={courseInfo.audience} />
              <Info label="Vagas" value={courseInfo.vacancies} />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <SectionTitle
            eyebrow="Inscrição"
            title="Registar interesse no Firebase"
            description="O formulário abaixo foi preparado para guardar inscrições na base de dados, facilitando acompanhamento e organização das turmas."
          />
          <EnrollmentForm />
        </div>
      </section>
    </>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.5rem] border border-line bg-white/[0.72] p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
        {label}
      </p>
      <p className="mt-2 text-sm leading-7 text-blue-deep">{value}</p>
    </div>
  );
}
