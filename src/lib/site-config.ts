import type { Metadata } from "next";

type MetadataInput = {
  title?: string;
  description: string;
  path?: string;
};

const fallbackSiteUrl = "https://cofobol.vercel.app";

export const siteConfig = {
  name: "COFOBOL",
  tagline: "Novo Paradigma Desportivo Colectivo",
  description:
    "Site institucional para apresentar o COFOBOL, explicar a modalidade, divulgar vídeos, cursos, eventos e facilitar inscrições.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl,
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
  contactPhone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
  facebookUrl: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
  youtubeUrl: process.env.NEXT_PUBLIC_YOUTUBE_URL || "",
  featuredVideoId: process.env.NEXT_PUBLIC_FEATURED_VIDEO_ID || "",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Est%C3%A1dio%20Municipal%20do%20Tafe%2C%20Cabinda&output=embed",
} as const;

export function getWhatsAppUrl(message: string) {
  const phone = siteConfig.whatsappNumber.replace(/\D/g, "");
  if (!phone) {
    return "/contato";
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function buildMetadata({
  title,
  description,
  path = "/",
}: MetadataInput): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} - ${siteConfig.tagline}`;

  const absoluteUrl = new URL(path, siteConfig.siteUrl);

  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: fullTitle,
    description,
    alternates: {
      canonical: absoluteUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: absoluteUrl,
      siteName: siteConfig.name,
      locale: "pt_PT",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export const rootMetadata = buildMetadata({
  description: siteConfig.description,
});

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.siteUrl,
  sport: "COFOBOL",
  areaServed: "Angola",
  sameAs: [
    siteConfig.instagramUrl,
    siteConfig.facebookUrl,
    siteConfig.youtubeUrl,
  ].filter(Boolean),
};
