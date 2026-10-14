import Image from "next/image";
import type { Block } from "@/lib/content";
import { RichText } from "@/components/rich-text";

type Styles = Partial<Record<Block["type"] | "list", string>>;

/**
 * Renderiza los bloques de un artículo, post o página legal.
 * Agrupa los ítems de lista consecutivos en un <ul>/<ol>.
 */
export function Blocks({ blocks, styles }: { blocks: Block[]; styles: Styles }) {
  const out: React.ReactNode[] = [];
  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i];
    if (b.type === "li" || b.type === "ol") {
      const items: string[] = [];
      while (i < blocks.length && blocks[i].type === b.type) {
        items.push((blocks[i] as { text: string }).text);
        i++;
      }
      i--;
      const List = b.type === "ol" ? "ol" : "ul";
      out.push(
        <List
          key={i}
          className={`${b.type === "ol" ? "list-decimal" : "list-disc"} ${styles.list ?? ""}`}
        >
          {items.map((t, j) => (
            <li key={j} className={styles.li}>
              <RichText text={t} />
            </li>
          ))}
        </List>,
      );
      continue;
    }
    switch (b.type) {
      case "img":
        out.push(
          <Image
            key={i}
            src={b.src}
            alt=""
            width={1400}
            height={470}
            sizes="(min-width: 1024px) 740px, 100vw"
            className={styles.img}
          />,
        );
        break;
      case "h2":
        out.push(
          <h2 key={i} className={styles.h2}>
            <RichText text={b.text} />
          </h2>,
        );
        break;
      case "h3":
        out.push(
          <h3 key={i} className={styles.h3}>
            <RichText text={b.text} />
          </h3>,
        );
        break;
      case "quote":
        out.push(
          <blockquote key={i} className={styles.quote}>
            <RichText text={b.text} />
          </blockquote>,
        );
        break;
      default:
        out.push(
          <p key={i} className={styles.p}>
            <RichText text={b.text} />
          </p>,
        );
    }
  }
  return <>{out}</>;
}
