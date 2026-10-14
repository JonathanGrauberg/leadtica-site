import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap flex min-h-[60vh] flex-col items-start justify-center pt-[77px]">
      <p className="bodoni-black text-[59px] leading-none text-ash">404</p>
      <h1 className="bodoni mt-4 text-[27px] text-fog">Esta página no existe.</h1>
      <Link
        href="/"
        className="bodoni-bold mt-8 flex h-[25px] w-[153px] items-center justify-center border border-fog text-[14px] text-fog transition-colors hover:bg-fog hover:text-black"
      >
        Volver al inicio
      </Link>
    </section>
  );
}
