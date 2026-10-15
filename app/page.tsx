import Image from "next/image";
import Link from "next/link";
import { Isotipo } from "@/components/brand/Isotipo";
import { LogoByInicio } from "@/components/brand/LogoByInicio";
import { FeaturedInsights } from "@/components/featured-insights";
import { PageBanner } from "@/components/page-banner";
import { LINKEDIN_URL } from "@/lib/site";

const pains = [
  "Los clientes llegan principalmente por referidos o contactos.",
  "Hay meses con muchas reuniones y meses vacíos.",
  "El founder o un socio siguen siendo el principal generador de ventas.",
  "Cuando el equipo se enfoca en operaciones, el pipeline se frena.",
  "Es difícil proyectar ingresos o planificar contrataciones.",
];

const nosotros = ["Investigación de empresas", "Contacto inicial", "Seguimiento", "Calificación", "Agenda"];
const suEquipo = ["Reunión", "Propuesta", "Cierre"];

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyUnpredictable />
      <ContinuousChannel />
      <InsightsPreview />
      <HuntingDeals />
      <PageBanner src="/images/banner-home.jpg" className="mt-16 lg:mt-[226px]" />
    </>
  );
}

function Hero() {
  return (
    <section className="relative h-[535px] overflow-hidden lg:h-[757px]">
      <video
        className="absolute inset-0 size-full object-cover"
        src="/video/hero.mp4"
        poster="/images/home-hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #000 0, #000 100px, rgb(0 0 0 / 0.56) 100%)",
        }}
      />
      <div className="fade-to-black absolute inset-x-0 bottom-0 h-[111px]" />

      <div className="relative mx-auto max-w-[calc(1108px+2rem)] px-7 pt-[69px] lg:px-4 lg:pt-[114px]">
        <p className="bodoni text-[14px] leading-[19.6px] tracking-[1.7px] text-fog lg:text-[17px] lg:leading-[23.8px]">
          B2B
        </p>
        <div className="flex max-w-[452px] items-center justify-between border-b border-fog/60 pb-1 lg:pt-[5px]">
          <p className="bodoni-bold text-[10px] leading-[14px] tracking-[1.7px] text-white lg:text-[17px] lg:leading-[23.8px]">
            Outsourced sales discipline
          </p>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Leadtica en LinkedIn"
            className="hidden opacity-80 transition-opacity hover:opacity-100 lg:block"
          >
            <Image src="/images/icon-linkedin.png" alt="" width={24} height={24} />
          </a>
        </div>
        <h1 className="bodoni-bold mt-7 max-w-[780px] text-[20px] leading-[24px] text-fog lg:mt-[25px] lg:text-[60px] lg:leading-[72px]">
          Un flujo constante de oportunidades comerciales para empresas B2B.
        </h1>
        <p className="bodoni mt-3 max-w-[650px] text-[17px] leading-[20.4px] text-fog lg:mt-[25px] lg:text-[32px] lg:leading-[38.4px]">
          Construimos y mantenemos el pipeline para que su equipo se concentre en el cierre.
        </p>
        <LogoByInicio className="mt-4 h-[33px] w-auto text-white lg:mt-[38px] lg:h-[54px]" />
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Leadtica en LinkedIn"
          className="mt-5 inline-block lg:hidden"
        >
          <Image src="/images/icon-linkedin.png" alt="" width={24} height={24} />
        </a>
      </div>
    </section>
  );
}

function WhyUnpredictable() {
  return (
    <section className="wrap relative pt-16 lg:pt-[108px]">
      <Image
        src="/images/punta-flecha.png"
        alt=""
        width={409}
        height={837}
        sizes="162px"
        className="absolute top-[120px] right-0 z-10 w-[77px] rotate-180 lg:top-[70px] lg:left-[calc(1rem+613px)] lg:w-[162px]"
      />
      <h2 className="bodoni-bold relative max-w-[177px] text-[12px] leading-[16.8px] text-mist lg:max-w-[425px] lg:text-[23px] lg:leading-[32.2px]">
        Por qué muchas empresas B2B venden bien...<em>pero de forma impredecible.</em>
      </h2>
      <ul className="relative mt-5 max-w-[704px] border border-fog bg-black py-[20px] pr-24 pl-[13px] text-[11px] leading-[15.4px] text-mist lg:mt-[11px] lg:px-4 lg:text-[15px] lg:leading-[21px]">
        {pains.map((p) => (
          <li key={p} className="mb-[2px] lg:mb-0">
            • {p}
          </li>
        ))}
      </ul>
    </section>
  );
}

function ContinuousChannel() {
  return (
    <section className="relative mt-10 lg:mt-[64px]">
      <div className="absolute inset-0">
        <Image
          src="/images/home-canal.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-left opacity-[0.14]"
        />
        <div className="fade-from-black absolute inset-x-0 top-0 h-[169px]" />
        <div className="fade-to-black absolute inset-x-0 bottom-0 h-[215px]" />
      </div>

      <div className="wrap relative pt-[23px] pb-[134px] lg:pb-[135px]">
        <h2 className="bodoni-bold ml-auto max-w-[197px] text-right text-[14px] leading-[19.6px] text-mist lg:mr-[62px] lg:max-w-[423px] lg:text-[30px] lg:leading-[42px]">
          Un canal comercial continuo, sin ampliar su equipo interno
        </h2>

        <div className="relative mt-6 lg:mt-[11px] lg:max-w-[916px]">
          <div className="border border-fog bg-black px-4 pt-6 pb-[38px] text-right text-[12px] leading-[16.8px] text-mist lg:text-[17px] lg:leading-[23.8px]">
            <p className="font-bold">Leadtica funciona como un departamento comercial externo.</p>
            <p className="mt-[27px]">
              Nos encargamos de abrir y sostener conversaciones con empresas que encajan con su
              cliente ideal, hasta convertirlas en reuniones calificadas para su equipo de ventas.
            </p>
            <p className="mt-[26px]">
              Su equipo se ocupa de cerrar, nosotros nos ocupamos de que siempre haya nuevas
              oportunidades en agenda.
            </p>
          </div>
          <Isotipo className="absolute -bottom-[26px] -left-2 h-[33px] w-auto text-white lg:-left-[20px] lg:h-[53px]" />
        </div>

        {/* En desktop: título | línea vertical | lista, igual que el original */}
        <div className="relative mt-12 flex flex-wrap justify-between gap-y-10 text-[12px] leading-[16.8px] text-mist lg:mt-[47px] lg:block lg:h-[206px] lg:text-[15px] lg:leading-[21px]">
          <span aria-hidden className="absolute top-0 left-[430px] hidden h-[206px] w-px bg-fog lg:block" />
          <span aria-hidden className="absolute top-0 left-[797px] hidden h-[160px] w-px bg-fog lg:block" />
          <div className="lg:contents">
            <p className="bodoni-bold text-[13px] lg:absolute lg:top-[12px] lg:left-[353px] lg:text-[15px]">
              Nosotros
            </p>
            <ul className="mt-[2px] lg:absolute lg:top-[35px] lg:left-[452px] lg:mt-0">
              {nosotros.map((s) => (
                <li key={s}>• {s}</li>
              ))}
            </ul>
          </div>
          <div className="text-right lg:contents lg:text-left">
            <p className="bodoni-bold text-[13px] lg:absolute lg:top-[14px] lg:left-[714px] lg:text-[15px]">
              Su equipo
            </p>
            <ul className="mt-[2px] lg:absolute lg:top-[37px] lg:left-[823px] lg:mt-0">
              {suEquipo.map((s) => (
                <li key={s}>• {s}</li>
              ))}
            </ul>
          </div>
          <Link
            href="/comolohacemos"
            className="bodoni-bold inline-flex h-[47px] w-[198px] items-center justify-center border border-fog bg-black text-[14px] text-fog transition-colors hover:text-white lg:absolute lg:top-[159px] lg:left-[454px]"
          >
            ¿Cómo lo hacemos?
          </Link>
        </div>
      </div>
    </section>
  );
}

function InsightsPreview() {
  return (
    <section className="wrap pt-14 lg:pt-[80px]">
      <div className="flex items-center justify-between">
        <h2 className="bodoni text-[15px] leading-[21px] text-fog lg:text-[26px] lg:leading-[36.4px]">
          Insights
        </h2>
        <Link
          href="/insights"
          className="bodoni-bold flex h-[20px] w-[70px] items-center justify-center border border-fog bg-black text-[10.4px] text-fog transition-colors hover:text-white lg:h-[25px] lg:w-[92px] lg:text-[12px]"
        >
          Ver todos
        </Link>
      </div>
      <div className="mt-4 lg:mt-[33px]">
        <FeaturedInsights />
      </div>
    </section>
  );
}

function HuntingDeals() {
  return (
    <section className="relative mt-24 grid lg:mt-[298px] lg:h-[492px] lg:grid-cols-2">
      <div className="relative h-[267px] lg:h-auto">
        <Image
          src="/images/home-hunting.jpg"
          alt=""
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover opacity-[0.42]"
        />
        <div className="fade-from-black absolute inset-x-0 top-0 h-[90px] lg:h-[181px]" />
        <div className="fade-to-black absolute inset-x-0 bottom-0 h-[90px] lg:h-[181px]" />
        <nav
          aria-label="Secciones"
          className="absolute right-0 bottom-4 flex w-full items-end justify-center gap-3 lg:top-[100px] lg:bottom-auto lg:w-auto lg:flex-col lg:gap-[13px]"
        >
          {[
            { href: "/comolohacemos", label: "¿Cómo lo hacemos?", w: "lg:w-[153px]" },
            { href: "/acerca-de", label: "Acerca de", w: "lg:w-[92px]" },
            { href: "/resultados", label: "Resultados", w: "lg:w-[107px]" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`bodoni-bold flex h-[25px] items-center justify-center border border-fog bg-black px-2 text-[12px] text-fog transition-colors hover:text-white lg:px-0 lg:text-[14px] ${l.w}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex flex-col items-center px-6 pt-8 lg:items-start lg:pt-[29px] lg:pl-[24px]">
        <p className="bodoni-black max-w-[165px] text-center text-[38px] leading-[41.8px] text-ash lg:max-w-[256px] lg:text-left lg:text-[59px] lg:leading-[64.9px]">
          Hunting Business Deals
        </p>
        <LogoByInicio className="mt-1 h-[25px] w-auto text-silver lg:mt-[27px] lg:h-[35px]" />
      </div>
    </section>
  );
}
