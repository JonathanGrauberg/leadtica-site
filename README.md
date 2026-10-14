# Leadtica — sitio web

Réplica en Next.js del sitio que estaba en Wix (www.leadtica.com).

```bash
npm install
npm run dev
```

## Estructura

- `app/` — una carpeta por página: `comolohacemos`, `resultados`, `acerca-de`, `insights`, `formaparte`.
  - `app/[slug]` — los 4 artículos destacados (`/account-based-marketing`, `/funnel-nfat`, …) y las páginas legales.
  - `app/post/[slug]` — los posts del blog.
- `content/site.json` — texto de artículos, posts y páginas legales (migrado del HTML de Wix).
  Usa un markdown mínimo: `**negrita**`, `_itálica_`, `[link](url)`.
- `components/brand/` — logo e isotipo en SVG (extraídos del sitio original).
- `public/images/` — imágenes **originales** (sin la compresión de Wix). `next/image` las sirve
  optimizadas en WebP/AVIF y al tamaño justo.
- `public/video/hero.mp4` — video del hero de la home.

## Tipografía y colores

- Bodoni Moda (Google Fonts) con eje de tamaño óptico: utilidades `bodoni`, `bodoni-medium`,
  `bodoni-semibold`, `bodoni-bold` y `bodoni-black` en `app/globals.css`.
- Wix Madefor Text para el texto corrido (es la fuente que usa Wix, libre en Google Fonts).
- Colores en `@theme` de `app/globals.css` (`fog`, `mist`, `ash`, `smoke`, …).

## Redirecciones

Las URLs viejas de Wix con tildes (`/post/qué-es-revops`, `/política-de-privacidad`) redirigen
con 308 a las nuevas sin tilde. Están en `next.config.ts`.
