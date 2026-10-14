import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { PageBanner } from "@/components/page-banner";

export const metadata: Metadata = {
  title: "Acerca de",
  description:
    "Leadtica nace como respuesta comercial a las necesidades de los clientes B2B de INICIO, nuestro estudio con más de 11 años en el sector del marketing, la comunicación, diseño y publicidad.",
};

const differences = [
  "Enfoque consultivo y humano → Creamos estrategias personalizadas que generan conversaciones auténticas.",
  "Metodología basada en datos → Utilizamos el modelo NFAT (Need, Fit, Authority, Time) para garantizar que cada reunión tenga el mayor potencial de conversión.",
  "Experiencia en el sector B2B → Más de 11 años trabajando con empresas business to business de diversos rubros.",
];

export default function AcercaDePage() {
  return (
    <>
      <section className="relative pb-16 lg:h-[920px] lg:pb-0">
        <div className="absolute inset-x-0 top-0 h-[546px]">
          <Image
            src="/images/acerca-de-hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="fade-to-black absolute inset-x-0 bottom-0 h-[286px]" />
        </div>

        <div className="wrap relative pt-[105px]">
          <div className="relative lg:h-[600px]">
            <div className="absolute top-0 left-0 hidden h-[313px] w-[790px] lg:block">
              <Image
                src="/images/acerca-de-piedra.jpg"
                alt=""
                fill
                sizes="790px"
                className="object-cover"
              />
            </div>

            <div className="relative max-w-[330px] pt-[67px] text-[13px] leading-[18.2px] text-mist lg:ml-[32px] lg:text-[12px] lg:leading-[16.8px]">
              <span className="block h-px w-[284px] bg-fog" aria-hidden />
              <p className="mt-5">
                Leadtica nace como respuesta a las necesidades de los clientes B2B de INICIO,
                nuestro estudio con más de 11 años en el sector del marketing, la comunicación,
                diseño y publicidad.
              </p>
              <p className="mt-[19px]">
                Con el crecimiento del ecosistema digital, detectamos un desafío recurrente: muchas
                empresas cuentan con excelentes productos y servicios, pero enfrentan dificultades
                que les impide prever y planear a futuro por falta de estabilidad y estructura
                comercial.
              </p>
              <p className="mt-[19px]">
                Nuestra misión es ayudar a las empresas a generar oportunidades de negocio reales
                mediante la creación de un canal comercial que funcione de manera continua como
                parte de la estructura interna. No sólo identificamos prospectos calificados, sino
                que diseñamos procesos estratégicos que convierten conexiones en relaciones
                comerciales valiosas.
              </p>
              <p className="mt-[18px] text-fog">Lo que nos hace diferentes</p>
              <ul className="mt-[2px] space-y-[2px]">
                {differences.map((d) => (
                  <li key={d}>- {d}</li>
                ))}
              </ul>
            </div>

            <div className="mt-14 flex items-center gap-[27px] lg:absolute lg:top-[129px] lg:left-[609px] lg:mt-0">
              <Logo className="h-[38px] w-auto text-silver" />
              <span className="-mr-4 text-[11px] text-smoke">by</span>
              <Image
                src="/images/logo-inicio-tagline.png"
                alt="INICIO diseño + marketing digital"
                width={78}
                height={50}
              />
            </div>

            <div className="mt-14 flex flex-col items-center lg:absolute lg:top-[457px] lg:left-[557px] lg:mt-0 lg:w-[417px]">
              <p className="bodoni-black text-center text-[35px] leading-[38.5px] text-ash">
                Hunting Business Deals
              </p>
              <Link
                href="/comolohacemos"
                className="bodoni-bold mt-[22px] flex h-[25px] w-[153px] items-center justify-center border border-fog text-[14px] text-fog transition-colors hover:bg-fog hover:text-black"
              >
                ¿Cómo lo hacemos?
              </Link>
            </div>
          </div>
        </div>
      </section>
      <PageBanner src="/images/banner-acerca-de.jpg" />
    </>
  );
}
