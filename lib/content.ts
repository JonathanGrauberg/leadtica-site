import site from "@/content/site.json";

/**
 * Contenido migrado desde Wix (artículos, posts del blog y páginas legales).
 * Se generó a partir del HTML publicado; el texto usa un markdown mínimo:
 * **negrita**, _itálica_, [link](url) y saltos de línea.
 */
export type Block =
  | { type: "h2" | "h3" | "p" | "li" | "ol" | "quote"; text: string }
  | { type: "img"; src: string };

export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  blocks: Block[];
};

export type Post = {
  slug: string;
  title: string;
  description: string;
  cover: string;
  date: string;
  readMinutes: number;
  blocks: Block[];
};

const ascii = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "");

const toArticle = ([slug, a]: [string, Omit<Article, "slug" | "blocks"> & { blocks: unknown }]) =>
  ({ ...a, slug, blocks: a.blocks as Block[] }) as Article;

export const articles: Article[] = Object.entries(site.articles).map(toArticle);
export const legalPages: Article[] = Object.entries(site.legal).map(toArticle);

const plain = (s: string) =>
  s
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*|(?<![\w/])_|_(?!\w)/g, "")
    .replace(/\s+/g, " ")
    .trim();

/** Primeros párrafos del cuerpo, como hace el listado de blog de Wix. */
const excerpt = (blocks: Block[]) =>
  blocks
    .filter((b): b is Extract<Block, { text: string }> => b.type === "p")
    .map((b) => plain(b.text))
    .join(" ")
    .slice(0, 300);

export const posts: Post[] = site.posts.map((p) => {
  const blocks = p.blocks as Block[];
  return {
    ...p,
    slug: ascii(p.slug),
    description: p.description || excerpt(blocks),
    blocks,
  };
});

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

/** Los cuatro artículos destacados de la home y de Insights, en el orden del original. */
export const featured = [
  {
    href: "/account-based-marketing",
    image: "/images/insight-abm.jpg",
    title: "ABM como estrategia de conexión B2B.",
    insightsTitle: "Account based marketing,\nla mejor estrategia para B2B.",
  },
  {
    href: "/funnel-nfat",
    image: "/images/insight-nfat.jpg",
    title: "Cómo usar el funnel NFAT\npara cerrar más ventas.",
  },
  {
    href: "/automatizacion-vs-estrategia-humana",
    image: "/images/insight-automatizacion.jpg",
    title: "Automatización vs.\nEstrategia Humana.",
  },
  {
    href: "/conexiones-en-linkedin",
    image: "/images/insight-linkedin.jpg",
    title: "De contacto a cliente,\nconexiones en LinkedIn.",
  },
];

/** Imagen de cada artículo: portada, foto de fondo del hero y franja inferior. */
export const articleImages: Record<string, { cover: string; banner: string }> = {
  "account-based-marketing": { cover: "/images/insight-abm.jpg", banner: "/images/banner-abm.jpg" },
  "funnel-nfat": { cover: "/images/insight-nfat.jpg", banner: "/images/banner-nfat.jpg" },
  "automatizacion-vs-estrategia-humana": {
    cover: "/images/insight-automatizacion.jpg",
    banner: "/images/banner-automatizacion.jpg",
  },
  "conexiones-en-linkedin": {
    cover: "/images/insight-linkedin.jpg",
    banner: "/images/banner-linkedin.jpg",
  },
};

export const legalImages: Record<string, string> = {
  "termino-y-condiciones": "/images/terminos-hero.jpg",
  "politica-de-privacidad": "/images/privacidad-hero.jpg",
};
