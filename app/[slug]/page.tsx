import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Blocks } from "@/components/blocks";
import { LogoByInicio } from "@/components/brand/LogoByInicio";
import { PageBanner } from "@/components/page-banner";
import { articleImages, articles, legalImages, legalPages } from "@/lib/content";

// Artículos destacados (/account-based-marketing, /funnel-nfat, ...) y páginas legales,
// que en Wix vivían en la raíz del sitio.
export const dynamicParams = false;

export function generateStaticParams() {
  return [...articles, ...legalPages].map((a) => ({ slug: a.slug }));
}

const find = (slug: string) => {
  const article = articles.find((a) => a.slug === slug);
  if (article) return { kind: "article" as const, page: article };
  const legal = legalPages.find((a) => a.slug === slug);
  if (legal) return { kind: "legal" as const, page: legal };
  return null;
};

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const found = find(slug);
  if (!found) return {};
  const { page, kind } = found;
  return {
    title: page.metaTitle.replace(/ \| Leadtica$/, ""),
    description: page.description,
    openGraph: kind === "article" ? { images: [articleImages[slug].cover] } : undefined,
  };
}

export default async function SlugPage({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const found = find(slug);
  if (!found) notFound();
  return found.kind === "article" ? (
    <ArticlePage slug={slug} page={found.page} />
  ) : (
    <LegalPage slug={slug} page={found.page} />
  );
}

type PageData = (typeof articles)[number];

function ArticlePage({ slug, page }: { slug: string; page: PageData }) {
  const img = articleImages[slug];
  return (
    <>
      <article className="relative pb-24 lg:pb-[160px]">
        <div className="absolute inset-x-0 top-0 h-[504px] overflow-hidden">
          <Image
            src={img.cover}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-[0.16]"
          />
          <div className="fade-to-black absolute inset-x-0 bottom-0 h-[232px]" />
        </div>

        <div className="wrap relative grid gap-8 pt-[98px] lg:grid-cols-[316px_1fr] lg:gap-[41px]">
          <div className="relative mx-auto aspect-[316/406] w-full max-w-[316px] lg:mx-0">
            <Image src={img.cover} alt="" fill priority sizes="316px" className="object-cover" />
          </div>
          <div className="lg:pt-[158px]">
            <h1 className="bodoni text-[36px] leading-[43px] text-fog lg:text-[60px] lg:leading-[72px]">
              {page.title}
            </h1>
            <span className="mt-[11px] block h-px w-[284px] bg-fog" aria-hidden />
            <div className="mt-[35px] max-w-[620px] text-[15px] leading-[21px] text-mist">
              <Blocks
                blocks={page.blocks}
                styles={{
                  p: "mb-[21px] whitespace-pre-line",
                  h2: "bodoni-medium mt-[21px] mb-0 text-[22px] leading-[30.8px] text-smoke",
                  h3: "bodoni-medium mt-[21px] text-[18px] leading-[26px] text-smoke",
                  list: "mb-[21px] pl-6",
                  img: "my-8 h-auto w-full",
                }}
              />
            </div>
            <Link href="/" aria-label="Leadtica, inicio" className="mt-4 inline-block text-white">
              <LogoByInicio className="h-[33px] w-auto" />
            </Link>
          </div>
        </div>
      </article>
      <PageBanner src={img.banner} />
    </>
  );
}

function LegalPage({ slug, page }: { slug: string; page: PageData }) {
  return (
    <article className="relative pb-24">
      <div className="absolute inset-x-0 top-0 h-[500px] overflow-hidden">
        <Image
          src={legalImages[slug]}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.35]"
        />
        <div className="fade-to-black absolute inset-x-0 bottom-0 h-[382px]" />
      </div>
      <div className="wrap relative pt-[158px]">
        <h1 className="bodoni-bold text-[22px] leading-[30.8px] text-fog">{page.title}</h1>
        <div className="mt-[64px] max-w-[780px] text-[15px] leading-[21px] text-fog">
          <Blocks
            blocks={page.blocks}
            styles={{
              p: "mb-[21px] whitespace-pre-line",
              h2: "bodoni-medium mt-[21px] text-[22px] leading-[30.8px]",
              h3: "bodoni-medium mt-[21px] text-[18px] leading-[26px]",
              list: "mb-[21px] pl-[27px]",
            }}
          />
        </div>
      </div>
    </article>
  );
}
