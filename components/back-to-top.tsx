"use client";

/** La "V" invertida fija abajo a la derecha que en el original vuelve al inicio de la página. */
export function BackToTop() {
  return (
    <button
      type="button"
      aria-label="Volver arriba"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="bodoni-semibold fixed right-7 bottom-4 z-20 rotate-180 text-[26px] leading-[36px] text-smoke transition-colors hover:text-white"
    >
      V
    </button>
  );
}
