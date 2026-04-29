import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { SectionTitle } from "@/components/section-title";
import { rulesSections } from "@/lib/site-data";
import { buildMetadata } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Regras",
  description:
    "Conheça as regras oficiais do COFOBOL, incluindo faltas, pontuação, responsabilidades dos jogadores e papel do árbitro.",
  path: "/regras",
});

export default function RegrasPage() {
  return (
    <>
      <PageHero
        eyebrow="Regulamento"
        title="Regras oficiais do COFOBOL"
        description="Uma visão clara e acessível das normas essenciais da modalidade, preparada para educar público iniciante e apoiar processos formativos."
        actions={
          <>
            <a href="/documents/regulamento-cofobol.pdf" className="btn-accent">
              Baixar regulamento em PDF
            </a>
            <Link href="/contato" className="btn-secondary !border-white/30 !bg-white/[0.12] !text-white">
              Solicitar versão oficial
            </Link>
          </>
        }
        aside={
          <div className="card-shell rounded-[2rem] bg-white/10 p-6 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              Documento de apoio
            </p>
            <p className="mt-3 font-display text-4xl font-semibold uppercase">
              Regras, faltas e arbitragem
            </p>
            <p className="mt-4 text-sm leading-7 text-white/[0.78]">
              O site está pronto para disponibilizar o regulamento em PDF e ampliar
              a explicação com exemplos visuais, clipes de arbitragem e materiais
              pedagógicos.
            </p>
          </div>
        }
      />

      <section className="section-shell">
        <SectionTitle
          eyebrow="Guia prático"
          title="Leitura rápida para atletas e formadores"
          description="As secções abaixo resumem os grandes blocos do regulamento. O objetivo é facilitar a compreensão antes da consulta integral do documento técnico."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {rulesSections.map((section) => (
            <article key={section.title} className="card-shell rounded-[2rem] p-6">
              <p className="font-display text-3xl font-semibold uppercase text-blue-deep">
                {section.title}
              </p>
              <ul className="mt-5 space-y-3">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-[1.5rem] border border-line bg-white/70 px-4 py-4 text-sm leading-7 text-muted"
                  >
                    {item}
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
