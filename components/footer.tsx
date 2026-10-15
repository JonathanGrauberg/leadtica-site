import Image from "next/image";
import Link from "next/link";
import { LogoByInicio } from "@/components/brand/LogoByInicio";
import { CONTACT_URL, LINKEDIN_URL } from "@/lib/site";

const col1 = [
  { href: "/", label: "Home" },
  { href: "/acerca-de", label: "Acerca de" },
  { href: "/comolohacemos", label: "Cómo lo hacemos" },
  { href: "/resultados", label: "Resultados" },
];
const col2 = [
  { href: "/insights", label: "Insights" },
  { href: CONTACT_URL, label: "Contacto", external: true },
  { href: "/formaparte", label: "Forma parte" },
];

const linkClass = "text-smoke transition-colors hover:text-mist";

export function Footer() {
  return (
    <footer className="border-t border-smoke bg-black pt-[53px] pb-[33px] font-helvetica text-[14px] leading-[19.6px]">
      <div className="wrap">
        <Link href="/" aria-label="Leadtica, inicio" className="inline-block text-white">
          <LogoByInicio className="h-[41px] w-auto" />
        </Link>

        <div className="mt-[43px] flex flex-wrap items-end justify-between gap-y-10">
          <div className="grid grid-cols-2 gap-x-14 sm:gap-x-[100px]">
            <ul className="space-y-4">
              {col1.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-4">
              {col2.map((l) => (
                <li key={l.href}>
                  {l.external ? (
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      {l.label}
                    </a>
                  ) : (
                    <Link href={l.href} className={linkClass}>
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Image src="/images/icon-linkedin.png" alt="" width={24} height={24} />
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-[11px] text-white">
            <span>by</span>
            <Image src="/images/logo-inicio.png" alt="INICIO" width={54} height={27} />
          </div>
        </div>

        <div className="mt-[42px] flex flex-col gap-3 border-t border-fog pt-[17px] sm:flex-row sm:gap-0">
          <span className="text-dim sm:w-[300px]">Leadtica © Copyright {new Date().getFullYear()}</span>
          <Link href="/politica-de-privacidad" className={`${linkClass} sm:w-[265px]`}>
            Política de Privacidad
          </Link>
          <Link href="/termino-y-condiciones" className={linkClass}>
            Términos y condiciones
          </Link>
        </div>
      </div>
    </footer>
  );
}
