import type { Metadata } from "next";
import Image from "next/image";
import { PageBanner } from "@/components/page-banner";
import { EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Forma parte",
  description:
    "En Leadtica estamos en constante crecimiento y buscamos agentes comprometidos y apasionados por conectar oportunidades de negocio.",
};

const offer = [
  "Comisiones sin techo y crecimiento profesional.",
  "Herramientas y recursos para maximizar tu rendimiento.",
  "Oportunidades de expansión dentro de un equipo en constante evolución.",
  "Flexibilidad para trabajar desde cualquier lugar y adaptarte a tu propio ritmo.",
];

const seek = [
  "Personas con habilidades de comunicación y negociación.",
  "Experiencia o interés en ventas y conexiones B2B.",
  "Actitud positiva, responsabilidad y ganas de aprender.",
  "Compromiso con los objetivos y enfoque en resultados.",
];

export default function FormaPartePage() {
  return (
    <>
      <section className="relative pb-20 lg:h-[983px] lg:pb-0">
        <div className="absolute inset-x-0 top-0 h-full lg:h-[781px]">
          <Image
            src="/images/formaparte-hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50 lg:opacity-100"
          />
          <div className="fade-to-black absolute inset-x-0 bottom-0 h-[200px]" />
        </div>

        <div className="wrap relative grid gap-10 pt-[123px] text-[15px] leading-[21px] text-mist lg:grid-cols-[518px_1fr] lg:gap-0">
          <div className="order-2 lg:order-1">
            <div className="flex min-h-[219px] flex-col justify-center gap-[21px] bg-black/30 lg:mt-[7px] px-8 lg:ml-[4px] lg:w-[439px] lg:px-16">
              <p>
                Envíanos tu CV a{" "}
                <a href={`mailto:${EMAIL}`} className="font-bold hover:underline">
                  {EMAIL}
                </a>{" "}
                con asunto <strong>Quiero ser parte</strong>.
              </p>
              <p>Estaremos en contacto contigo lo antes posible.</p>
            </div>
          </div>

          <div className="order-1 max-w-[462px] lg:order-2">
            <h1 className="bodoni max-w-[385px] text-[32px] leading-[40px] text-fog lg:text-[38px] lg:leading-[45.6px]">
              ¿Eres la pieza que nos hace falta?
            </h1>
            <p className="mt-[36px]">
              En Leadtica estamos en constante crecimiento y buscamos agentes comprometidos y
              apasionados por conectar oportunidades de negocio. Si eres proactivo, tienes
              habilidades para la prospección y quieres ser parte de una empresa dinámica con un
              enfoque innovador, ¡te invitamos a unirte a nosotros!
            </p>
            <p className="mt-[22px] font-bold">¿Qué ofrecemos?</p>
            <ul className="list-disc pb-[21px] pl-[27px]">
              {offer.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
            <p className="font-bold">¿Qué buscamos?</p>
            <ul className="list-disc pl-[27px]">
              {seek.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p className="mt-[21px]">
              Si estás listo para ser parte de un equipo de alto rendimiento y ayudar a empresas a
              conectar nuevas oportunidades de negocio, <strong>¡te estamos buscando!</strong>
            </p>
          </div>
        </div>
      </section>
      <PageBanner src="/images/banner-formaparte.jpg" />
    </>
  );
}
