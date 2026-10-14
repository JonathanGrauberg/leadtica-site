import { Fragment, type ReactNode } from "react";
import Link from "next/link";

/**
 * Renderiza el markdown mínimo del contenido migrado:
 * **negrita**, _itálica_, [texto](url) y saltos de línea.
 */
export function RichText({ text }: { text: string }) {
  return <>{parse(text)}</>;
}

const TOKEN = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|(?<![\w/])_[^_\n]+_(?!\w)|\n)/g;

function parse(text: string): ReactNode[] {
  return text.split(TOKEN).map((part, i) => {
    if (!part) return null;
    if (part === "\n") return <br key={i} />;
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{parse(part.slice(2, -2))}</strong>;
    }
    if (part.startsWith("_") && part.endsWith("_") && part.length > 2) {
      return <em key={i}>{parse(part.slice(1, -1))}</em>;
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      const children = parse(label);
      if (href.startsWith("/")) {
        return (
          <Link key={i} href={href} className="underline underline-offset-2">
            {children}
          </Link>
        );
      }
      return (
        <a
          key={i}
          href={href}
          className="underline underline-offset-2"
          {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}
