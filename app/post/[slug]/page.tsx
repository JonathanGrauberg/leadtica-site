import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Blocks } from "@/components/blocks";
import { ShareButtons } from "@/components/share-buttons";
import { getPost, posts } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/post/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: { absolute: post.title },
    description: post.description,
    openGraph: {
      type: "article",
      publishedTime: post.date,
      images: [post.cover],
    },
  };
}

export default async function PostPage({ params }: PageProps<"/post/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="relative pt-[77px] pb-24 lg:pb-[190px]">
      <Link
        href="/insights"
        className="bodoni-bold absolute top-[75px] left-4 hidden items-center gap-[3px] text-[14px] text-mist transition-colors hover:text-white lg:left-[111px] lg:flex"
      >
        <span className="inline-block rotate-90 text-[14px] leading-none">V</span> Regresar
      </Link>

      <div className="wrap">
        <div className="bg-mist p-0 sm:p-5">
          <article className="border border-mist px-5 py-10 text-[16px] leading-[24px] text-white sm:px-[100px] sm:pt-[62px] sm:pb-[60px]">
            <p className="text-[14px] leading-[21px]">{post.readMinutes} min de lectura</p>
            <h1 className="bodoni-black mt-5 text-[30px] leading-[38px] sm:text-[40px] sm:leading-[50px]">
              {post.title}
            </h1>
            <div className="relative mt-[34px] aspect-[740/248]">
              <Image
                src={post.cover}
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 740px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-[26px]">
              <Blocks
                blocks={post.blocks}
                styles={{
                  p: "whitespace-pre-line",
                  h2: "bodoni-medium mt-6 text-[28px] leading-[39.2px]",
                  h3: "bodoni-medium mt-5 text-[22px] leading-[30px]",
                  list: "pl-8",
                  img: "my-6 h-auto w-full",
                  quote: "my-5 border-l-2 border-white/60 pl-5 italic",
                }}
              />
            </div>
            <div className="mt-[22px] border-y border-white/20 py-[23px]">
              <ShareButtons url={`${SITE_URL}/post/${post.slug}`} title={post.title} />
            </div>
          </article>

          <ul className="mt-5 grid gap-5 sm:mt-[46px] sm:grid-cols-3 sm:gap-[33px]">
            {related.map((p) => (
              <li key={p.slug} className="border border-mist">
                <Link href={`/post/${p.slug}`} className="group block">
                  <div className="relative aspect-[291/162] overflow-hidden">
                    <Image
                      src={p.cover}
                      alt=""
                      fill
                      sizes="(min-width: 640px) 291px, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="bodoni-black px-[25px] pt-6 pb-7 text-[18px] leading-[1.25] text-white">
                    {p.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
