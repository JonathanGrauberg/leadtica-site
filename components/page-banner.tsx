import Image from "next/image";

/** Franja fotográfica panorámica que el original pone justo antes del footer en cada página. */
export function PageBanner({ src, className = "" }: { src: string; className?: string }) {
  return (
    <div className={`relative h-[84px] w-full sm:h-[166px] ${className}`}>
      <Image src={src} alt="" fill sizes="100vw" className="object-cover" />
    </div>
  );
}
