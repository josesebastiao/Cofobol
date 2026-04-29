import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { SectionTitle } from "@/components/section-title";
import { getWhatsAppUrl, siteConfig, buildMetadata } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Contato",
  description:
    "Entre em contato com a equipa do COFOBOL por WhatsApp, email, telefone ou formulário.",
  path: "/contato",
});

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Fale connosco"
        title="Contato institucional"
        description="Página de contacto preparada para apoiar inscrições, parcerias, pedidos de demonstração, informações sobre cursos e comunicação com escolas ou comunidades."
        actions={
          <>
            <a
              href={getWhatsAppUrl("Olá! Gostaria de falar com a equipa do COFOBOL.")}
              className="btn-accent"
            >
              WhatsApp
            </a>
            {siteConfig.contactEmail ? (
              <a href={`mailto:${siteConfig.contactEmail}`} className="btn-secondary !border-white/30 !bg-white/[0.12] !text-white">
                Enviar email
              </a>
            ) : null}
          </>
        }
        aside={
          <div className="card-shell rounded-[2rem] bg-white/10 p-6 text-white">
            <p className="font-display text-4xl font-semibold uppercase">
              Atendimento e parcerias
            </p>
            <p className="mt-4 text-sm leading-7 text-white/80">
              Use o formulário para esclarecer dúvidas, solicitar formações e
              iniciar conversas institucionais.
            </p>
          </div>
        }
      />

      <section className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-5">
          <SectionTitle
            eyebrow="Canais"
            title="Telefone, email, redes e localização"
            description="As informações abaixo podem ser ajustadas rapidamente por ambiente para publicação final."
          />
          <div className="grid gap-4">
            <ContactCard
              label="Telefone e WhatsApp"
              value={siteConfig.contactPhone || "Configurar em .env.local"}
            />
            <ContactCard
              label="Email"
              value={siteConfig.contactEmail || "Configurar em .env.local"}
            />
            <ContactCard
              label="Redes sociais"
              value={
                [siteConfig.instagramUrl, siteConfig.facebookUrl, siteConfig.youtubeUrl]
                  .filter(Boolean)
                  .join(" | ") || "Configurar em .env.local"
              }
            />
          </div>
          <div className="card-shell overflow-hidden rounded-[2rem]">
            <iframe
              title="Localização"
              src={siteConfig.mapEmbedUrl}
              className="h-[320px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="space-y-4">
          <SectionTitle
            eyebrow="Formulário"
            title="Enviar mensagem"
            description="As mensagens são preparadas para gravação no Firebase, permitindo acompanhamento institucional e resposta mais organizada."
          />
          <ContactForm />
        </div>
      </section>
    </>
  );
}

function ContactCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="card-shell rounded-[1.75rem] p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
        {label}
      </p>
      <p className="mt-2 text-sm leading-7 text-blue-deep">{value}</p>
    </div>
  );
}
