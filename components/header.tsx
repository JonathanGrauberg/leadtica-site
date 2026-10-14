import Link from "next/link";
import { LogoByInicio } from "@/components/brand/LogoByInicio";
import { NavLinks, MobileMenu } from "@/components/nav";

/**
 * Barra gris superior (logo + "Forma parte") y, debajo, la barra de menú
 * translúcida que en el original se apoya sobre la foto de cada página.
 */
export function Header() {
  return (
    <header className="relative z-30">
      <div className="flex h-[54px] items-center justify-between bg-topbar px-5 lg:px-[63px]">
        <Link href="/" aria-label="Leadtica, inicio" className="text-white">
          <LogoByInicio className="h-[25px] w-auto" />
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href="/formaparte"
            className="bodoni-black px-4 py-3 text-[10px] text-smoke transition-colors hover:text-white lg:px-[31px]"
          >
            Forma parte
          </Link>
          <MobileMenu />
        </div>
      </div>
      <nav
        aria-label="Principal"
        className="absolute inset-x-0 top-full hidden h-[77px] items-center justify-end bg-navbar pr-[43px] lg:flex"
      >
        <NavLinks />
      </nav>
    </header>
  );
}
