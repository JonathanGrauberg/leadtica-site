import type { Metadata } from "next";
import { Bodoni_Moda, Wix_Madefor_Text } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const madefor = Wix_Madefor_Text({
  variable: "--font-madefor",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Leadtica | Estabilidad comercial para empresas B2B",
    template: "%s | Leadtica",
  },
  description:
    "Un flujo constante de nuevas oportunidades comerciales. Construimos y mantenemos el pipeline para que su equipo se concentre en el cierre.",
  openGraph: {
    siteName: "Leadtica",
    locale: "es_AR",
    type: "website",
    images: ["/images/og-leadtica.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${bodoni.variable} ${madefor.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
