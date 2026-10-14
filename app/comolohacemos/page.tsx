import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageBanner } from "@/components/page-banner";

export const metadata: Metadata = {
  title: "Cómo lo hacemos",
  description:
    "Proceso continuo de desarrollo comercial: definición del ICP, investigación y selección, conversaciones 1 a 1, seguimiento y maduración, calificación y agenda.",
};

const funnel = [
  { id: "definicion", label: "DEFINICIÓN ------------------------- PERFIL DE CLIENTE IDEAL (ICP)", width: 403 },
  { id: "investigacion", label: "INVESTIGACIÓN -------------------------------- SELECCIÓN", width: 343 },
  { id: "incursion", label: "INCURSIÓN ------------------- CONVERSACIÓN", width: 284 },
  { id: "seguimiento", label: "SEGUIMIENTO --- MADURACIÓN", width: 210 },
  { id: "calificacion", label: "CALIFICACIÓN - AGENDA", width: 164 },
];

const steps = [
  {
    id: "definicion",
    word: "DEFINICIÓN",
    size: 68,
    text: "Definimos con precisión su cliente ideal y segmentos objetivos.",
  },
  {
    id: "investigacion",
    word: "INVESTIGACIÓN",
    size: 52,
    text: "Investigamos y seleccionamos empresas que encajan en el ICP.",
  },
  {
    id: "incursion",
    word: "INCURSIÓN",
    size: 57,
    text: "Iniciamos conversaciones personalizadas con decisores reales.",
  },
  {
    id: "seguimiento",
    word: "SEGUIMIENTO",
    size: 55,
    text: "Realizamos seguimiento y maduración de cada oportunidad.",
  },
  {
    id: "calificacion",
    word: "CALIFICACIÓN",
    size: 53,
    text: "Calificamos interés y coordinamos reuniones comerciales.",
  },
];

const tools = [
  "Prospección directa B2B",
  "Contacto profesional 1 a 1",
  "Seguimiento estructurado",
  "Soporte de campañas digitales cuando aplica",
];

export default function ComoLoHacemosPage() {
  return (
    <>
      {/* Hero con la punta de flecha y el embudo de etapas */}
      <section className="relative overflow-hidden pb-12 lg:h-[702px] lg:pb-0">
        <div className="absolute inset-x-0 top-0 h-[400px] lg:h-[655px]">
          <Image
            src="/images/comolohacemos-hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="fade-to-black absolute inset-x-0 bottom-0 h-[60%]" />
        </div>
        <Image
          src="/images/punta-flecha-2.png"
          alt=""
          width={409}
          height={837}
          priority
          sizes="266px"
          className="absolute top-[78px] left-1/2 w-[160px] -translate-x-1/2 lg:w-[266px]"
        />

        <div className="relative mx-auto flex max-w-[656px] flex-col items-center px-4 pt-[120px] text-center lg:pt-[152px]">
          <h1 className="bodoni text-[34px] leading-[40px] text-fog lg:text-[60px] lg:leading-[72px]">
            Cómo se construye un pipeline constante
          </h1>
          <span className="mt-6 h-px w-[284px] bg-fog lg:mt-[50px]" aria-hidden />
          <p className="bodoni-bold mt-[20px] max-w-[283px] text-[12px] leading-[16.8px] tracking-[6px] text-white">
            PROCESO CONTINUO DE DESARROLLO COMERCIAL
          </p>
          <h2 className="bodoni mt-2 text-[17px] leading-[23.8px] text-fog">¿Cómo lo hacemos?</h2>

          <ol className="mt-[35px] flex w-full flex-col items-center gap-[11px]">
            {funnel.map((f, i) => (
              <li key={f.id} className="relative" style={{ width: `min(${f.width}px, 85vw)` }}>
                <span className="bodoni-bold absolute top-1/2 -left-[23px] -translate-y-1/2 text-[17px] text-fog">
                  .{i + 1}
                </span>
                <a
                  href={`#${f.id}`}
                  className="bodoni block truncate border border-fog px-3 py-[3px] text-[10px] leading-[16.8px] text-fog transition-colors hover:bg-fog hover:text-black sm:text-[12px]"
                >
                  {f.label}
                </a>
              </li>
            ))}
          </ol>
          <p className="bodoni mt-4 max-w-[111px] text-[11px] leading-[15.4px] text-fog">
            = Oportunidad continua
          </p>
        </div>
      </section>

      {/* Etapas en zigzag con la palabra gigante */}
      <section className="wrap mt-16 space-y-16 lg:mt-[80px] lg:space-y-0">
        {steps.map((s, i) => {
          const right = i % 2 === 1;
          return (
            <div
              key={s.id}
              id={s.id}
              className="scroll-mt-24 lg:grid lg:min-h-[195px] lg:grid-cols-2 lg:gap-8"
            >
              <div
                className={`flex flex-col ${
                  right ? "lg:order-2 lg:items-start" : "lg:items-end lg:text-right"
                }`}
              >
                <span className="bodoni-bold text-[20px] leading-[28px] text-fog">.{i + 1}</span>
                <p className="mt-3 max-w-[300px] text-[14px] leading-[19.6px] text-mist">{s.text}</p>
              </div>
              <p
                className={`bodoni-bold mt-2 text-[40px] leading-[1.4] break-words text-coal sm:text-[52px] lg:mt-0 lg:text-[length:var(--s)] ${
                  right ? "lg:order-1 lg:text-right" : ""
                }`}
                style={{ ["--s" as string]: `${s.size}px` }}
                aria-hidden
              >
                {s.word}
              </p>
            </div>
          );
        })}
      </section>

      <div className="mt-16 flex justify-center lg:mt-0">
        <Link
          href="/resultados"
          className="bodoni-bold relative z-10 flex h-[25px] w-[170px] items-center justify-center border border-fog text-[12px] text-fog transition-colors hover:bg-fog hover:text-black"
        >
          Resultados
        </Link>
      </div>

      {/* Herramientas sobre la foto de la red */}
      <section className="relative h-[420px] lg:h-[566px]">
        <Image src="/images/comolohacemos-red.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div className="fade-from-black absolute inset-x-0 top-0 h-[240px]" />
        <div className="fade-to-black absolute inset-x-0 bottom-0 h-[233px]" />
        <div className="wrap relative flex h-full flex-col items-center justify-end pb-16 lg:pb-[192px]">
          <h2 className="bodoni text-[22px] leading-[36.4px] text-smoke lg:text-[26px]">Herramientas</h2>
          <ul className="mt-6 grid w-full grid-cols-2 gap-6 text-center lg:mt-[30px] lg:grid-cols-4 lg:px-[60px]">
            {tools.map((t) => (
              <li
                key={t}
                className="bodoni mx-auto max-w-[180px] text-[15px] leading-[21px] text-fog lg:text-[17px] lg:leading-[23.8px]"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="relative mt-[54px]">
        <PageBanner src="/images/banner-comolohacemos.jpg" className="sm:h-[199px]" />
        <div className="fade-from-black absolute inset-x-0 -top-[25px] h-[120px]" />
      </div>
    </>
  );
}
