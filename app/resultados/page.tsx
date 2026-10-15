import type { Metadata } from "next";
import Image from "next/image";
import { LogoByInicio } from "@/components/brand/LogoByInicio";
import { PageBanner } from "@/components/page-banner";

export const metadata: Metadata = {
  title: "Resultados",
  description:
    "El desarrollo comercial B2B no es inmediato. Como cualquier canal de ventas, necesita un período inicial para activarse y volverse previsible.",
};

const timeline = [
  { when: "Semanas 1-2", what: "Definición de segmentos, setup y preparación del proceso." },
  { when: "Semanas 3-8", what: "Inicio de conversaciones y primeras respuestas." },
  { when: "Semanas 9-13", what: "Primeras reuniones calificadas." },
  { when: "A partir del mes 4", what: "Flujo sostenido de oportunidades comerciales." },
];

const hiring = [
  "Sueldo fijo mensual",
  "Tiempo de onboarding",
  "Gestión y supervisión diaria",
  "Curva de aprendizaje",
  "Riesgo de rotación",
  "Resultados inciertos durante meses",
];

const leadtica = [
  "Canal activo desde el inicio",
  "Sin contratación ni cargas laborales",
  "Proceso probado y especializado",
  "Sin management interno adicional",
  "Conversaciones comerciales en curso de forma continua",
];

export default function ResultadosPage() {
  return (
    <>
    <section className="relative lg:h-[888px]">
      <div className="absolute inset-0">
        <Image
          src="/images/resultados-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.19]"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[146px]"
          style={{ background: "linear-gradient(0deg, #000 0%, rgb(36 35 35 / 0) 100%)" }}
        />
      </div>

      <div className="wrap relative grid gap-14 pt-[115px] pb-20 text-[15px] leading-[21px] text-mist lg:grid-cols-[600px_1fr] lg:gap-0 lg:pb-0">
        <div className="max-w-[380px]">
          <h1 className="bodoni max-w-[297px] text-[27px] leading-[32.4px] text-fog">
            Qué esperar durante los primeros meses
          </h1>
          <span className="mt-[26px] block h-px w-[284px] bg-fog" aria-hidden />
          <p className="mt-[30px]">
            El desarrollo comercial B2B no es inmediato.
            <br />
            Como cualquier canal de ventas, necesita un período inicial para activarse y volverse
            previsible.
          </p>
          <dl className="mt-[23px] space-y-[21px]">
            {timeline.map((t) => (
              <div key={t.when}>
                <dt className="font-bold">{t.when}</dt>
                <dd className="max-w-[344px]">{t.what}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-[21px]" aria-hidden>
            -----------------------------------
          </p>
          <p className="mt-[21px]">
            <strong>Nuestro objetivo no es generar una venta puntual,</strong> sino construir un
            canal comercial que funcione de forma continua dentro de su empresa.
          </p>
        </div>

        <div className="lg:pt-[5px]">
          <p className="font-bold">Contratar internamente:</p>
          <ul>
            {hiring.map((h) => (
              <li key={h}>- {h}</li>
            ))}
          </ul>
          <p className="mt-[21px] text-[21px] leading-[29.4px] font-bold">VS.</p>
          <LogoByInicio className="mt-[21px] h-[48px] w-auto text-white" />
          <span className="mt-[25px] block h-px w-[284px] bg-fog" aria-hidden />
          <ul className="mt-5 max-w-[337px] font-bold">
            {leadtica.map((l) => (
              <li key={l}>• {l}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    <PageBanner src="/images/banner-resultados.jpg" />
    </>
  );
}
