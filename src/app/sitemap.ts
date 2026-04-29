import type { MetadataRoute } from "next";

import { navigation } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = navigation.map((item) => ({
    url: new URL(item.href, siteConfig.siteUrl).toString(),
    lastModified: new Date(),
  }));

  return routes;
}
