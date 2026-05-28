import Image from "next/image";
import Link from "next/link";

import { navigation } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const socialLinks = [
    { label: "Instagram", href: siteConfig.instagramUrl },
    { label: "Facebook", href: siteConfig.facebookUrl },
    { label: "YouTube", href: siteConfig.youtubeUrl },
  ].filter((item) => item.href);

  return (
    <footer className="border-t border-line bg-white">
      <div className="h-1 w-full bg-linear-to-r from-red via-blue to-green" />
      <div className="section-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="space-y-4">
            <Image
              src="/cofobol-logo.jpeg"
              alt="COFOBOL-TEV-FM"
              width={280}
              height={96}
              className="h-16 w-auto object-contain"
            />
            <p className="max-w-2xl text-sm leading-7 text-muted">
              Plataforma institucional para apresentar a modalidade, apoiar formações,
              divulgar eventos e preparar a próxima etapa de crescimento do COFOBOL.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg border border-line bg-white px-4 py-2 text-sm font-semibold text-blue-deep transition hover:border-red/40 hover:bg-red/5"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="card-shell rounded-[2rem] p-6">
          <p className="font-display text-2xl font-semibold uppercase text-blue-deep">
            Contactos institucionais
          </p>
          <div className="mt-5 space-y-3 text-sm leading-7 text-muted">
            <p>
              <span className="font-semibold text-blue-deep">Telefone:</span>{" "}
              {siteConfig.contactPhone || "Atualizar em .env.local"}
            </p>
            <p>
              <span className="font-semibold text-blue-deep">Email:</span>{" "}
              {siteConfig.contactEmail || "Atualizar em .env.local"}
            </p>
            <p>
              <span className="font-semibold text-blue-deep">Atuação:</span> Angola,
              com foco em escolas, treinadores e comunidades.
            </p>
          </div>

          {socialLinks.length > 0 ? (
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  {item.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
