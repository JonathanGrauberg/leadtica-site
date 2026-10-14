"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/site";

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

export function NavLinks() {
  const pathname = usePathname();
  return (
    <ul className="flex">
      {NAV.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            aria-current={isActive(pathname, item.href) ? "page" : undefined}
            className="bodoni-medium block px-[25px] py-[10px] text-[12px] tracking-[0.6px] text-ash transition-colors hover:text-white aria-[current=page]:text-white"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="relative z-50 flex size-10 flex-col items-center justify-center gap-[5px]"
      >
        <span
          className={`h-px w-5 bg-mist transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
        />
        <span
          className={`h-px w-5 bg-mist transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
        />
      </button>
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-black/95 px-10 transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="space-y-6">
          {[...NAV, { href: "/formaparte", label: "Forma parte" }].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
                className="bodoni-medium text-2xl text-ash aria-[current=page]:text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
