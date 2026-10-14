import type { NextConfig } from "next";
import site from "./content/site.json";

const ascii = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "");

// Las URLs de Wix tenían tildes (p. ej. /post/qué-es-revops). Las nuevas son ASCII,
// así que redirigimos las viejas para no perder links ni posicionamiento.
const legacyRedirects = [
  ...site.posts.map((p) => p.slug),
  "automatización-vs-estrategia-humana",
  "política-de-privacidad",
]
  .filter((slug) => ascii(slug) !== slug)
  .map((slug) => {
    const isPost = site.posts.some((p) => p.slug === slug);
    const prefix = isPost ? "/post/" : "/";
    return {
      source: prefix + encodeURIComponent(slug).replace(/%2F/g, "/"),
      destination: prefix + ascii(slug),
      permanent: true,
    };
  });

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
  },
  async redirects() {
    return [
      { source: "/leadtica", destination: "/", permanent: true },
      { source: "/blog", destination: "/insights", permanent: true },
      ...legacyRedirects,
    ];
  },
};

export default nextConfig;
