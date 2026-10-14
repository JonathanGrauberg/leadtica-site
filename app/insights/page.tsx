import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FeaturedInsights } from "@/components/featured-insights";
import { PageBanner } from "@/components/page-banner";
import { posts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "En Leadtica salimos a buscar oportunidades, y ahora también compartimos lo que aprendemos en el camino.",
  openGraph: { images: ["/images/og-insights.png"] },
};

export default function InsightsPage() {
  return (
    <>
      <section className="relative">
        <div className="absolute inset-x-0 top-0 h-[361px]">
          <Image
            src="/images/home-canal.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="fade-to-black absolute inset-x-0 bottom-0 h-[160px]" />
        </div>
        <div className="wrap relative pt-[172px]">
          <h1 className="bodoni text-[26px] leading-[36.4px] text-fog">Destacados</h1>
          <div className="mt-5">
            <FeaturedInsights variant="insights" />
          </div>
        </div>
      </section>

      <section className="wrap mt-[77px] pb-24 lg:pb-[160px]">
        <h2 className="bodoni text-[26px] leading-[36.4px] text-fog">All</h2>
        <ul className="mt-[29px] space-y-5">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/post/${p.slug}`}
                className="group grid gap-5 md:grid-cols-[470px_1fr] md:gap-[30px]"
              >
                <div className="relative aspect-[470/353] overflow-hidden">
                  <Image
                    src={p.cover}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 470px, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="max-w-[430px] md:pt-[34px]">
                  <p className="text-[12px] text-white">{p.readMinutes} min de lectura</p>
                  <h3 className="bodoni-medium mt-[22px] text-[24px] leading-tight text-mist transition-colors group-hover:text-white md:text-[28px]">
                    {p.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-[16px] leading-[24px] text-white">
                    {p.description}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <PageBanner src="/images/banner-insights.jpg" />
    </>
  );
}
