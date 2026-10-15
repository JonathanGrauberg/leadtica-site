import Image from "next/image";
import Link from "next/link";
import { featured } from "@/lib/content";

/** Las cuatro tarjetas verticales de artículos destacados (home e Insights). */
export function FeaturedInsights({ variant = "home" }: { variant?: "home" | "insights" }) {
  return (
    <ul className="grid grid-cols-2 gap-x-[9px] gap-y-8 lg:grid-cols-4 lg:gap-x-[27px]">
      {featured.map((f) => (
        <li key={f.href} className="group">
          <Link href={f.href} className="block">
            <div className="relative aspect-[225/299] overflow-hidden bg-mist">
              <Image
                src={f.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 225px, 50vw"
                className="object-cover"
              />
              {/* Degradé del hover de la galería de Wix */}
              <div
                aria-hidden
                className="absolute inset-0 bg-linear-to-b from-[rgb(199_199_199/0.01)] to-black/75 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </div>
            <p className="bodoni-medium mt-[11px] min-h-[41px] text-[11px] leading-[13px] whitespace-pre-line text-mist sm:text-[15px] sm:leading-[18px]">
              {variant === "insights" && f.insightsTitle ? f.insightsTitle : f.title}
            </p>
          </Link>
          <div className="mt-4 flex items-center justify-between">
            <span className="block h-px w-[80px] bg-fog" aria-hidden />
            <Link
              href={f.href}
              aria-label={`Leer: ${f.title.replace("\n", " ")}`}
              className="text-[27px] leading-none text-smoke transition-colors hover:text-white"
            >
              +
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
