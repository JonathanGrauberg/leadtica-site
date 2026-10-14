"use client";

import { useState } from "react";

const iconClass = "size-[19px] fill-current";

/** Compartir en Facebook, X y LinkedIn, más copiar link (como el blog de Wix). */
export function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);

  const links = [
    {
      label: "Compartir en Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
      icon: (
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden>
          <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21h2.9Z" />
        </svg>
      ),
    },
    {
      label: "Compartir en X",
      href: `https://x.com/intent/post?url=${u}&text=${t}`,
      icon: (
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden>
          <path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.2-8.3L1.8 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z" />
        </svg>
      ),
    },
    {
      label: "Compartir en LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
      icon: (
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden>
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.8v1.6h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V21h-4v-4.9c0-1.17-.02-2.68-1.63-2.68-1.64 0-1.89 1.28-1.89 2.6V21h-4V9.75Z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex items-center gap-[30px]">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={l.label}
          className="text-white transition-opacity hover:opacity-70"
        >
          {l.icon}
        </a>
      ))}
      <button
        type="button"
        aria-label="Copiar link"
        onClick={async () => {
          await navigator.clipboard.writeText(url);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }}
        className="flex items-center gap-2 text-white transition-opacity hover:opacity-70"
      >
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden>
          <path d="M10.6 13.4a1 1 0 0 1 0-1.4l3.5-3.5a1 1 0 1 1 1.4 1.4L12 13.4a1 1 0 0 1-1.4 0Zm-2.1 6.4a4.5 4.5 0 0 1-3.2-7.7l2.1-2.1a1 1 0 1 1 1.4 1.4l-2.1 2.1a2.5 2.5 0 1 0 3.5 3.5l2.1-2.1a1 1 0 1 1 1.4 1.4l-2.1 2.1a4.5 4.5 0 0 1-3.1 1.4Zm8.1-5.2a1 1 0 0 1-.7-1.7l2.1-2.1a2.5 2.5 0 1 0-3.5-3.5l-2.1 2.1a1 1 0 1 1-1.4-1.4l2.1-2.1a4.5 4.5 0 1 1 6.4 6.4l-2.1 2.1a1 1 0 0 1-.8.2Z" />
        </svg>
        {copied && <span className="text-[13px]">Link copiado</span>}
      </button>
    </div>
  );
}
