import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Mr Sam — Cours d'anglais parlé | Académie d'anglais premium",
  description:
    "Apprenez à parler anglais couramment avec Mr Sam. Cours particuliers et en groupe, méthode axée sur la conversation, tous niveaux. Réservez votre place dès aujourd'hui.",
  keywords: [
    "cours anglais",
    "anglais parlé",
    "professeur anglais",
    "Mr Sam",
    "formation anglais",
    "apprendre anglais Madagascar",
  ],
  authors: [{ name: "Mr Sam English Academy" }],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%230B2545'/><text x='50%25' y='62%25' font-size='55' fill='%23C8102E' text-anchor='middle' font-family='Georgia' font-weight='bold'>S</text></svg>",
  },
  openGraph: {
    type: "website",
    title: "Mr Sam — Cours d'anglais parlé",
    description:
      "Parlez anglais avec confiance. Une méthode moderne centrée sur la pratique orale, pour tous les niveaux.",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('mrsam-theme')||'light';document.body.setAttribute('data-theme',t);}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Mr Sam English Academy",
              description:
                "Cours d'anglais parlé pour tous niveaux, en ligne et en présentiel.",
              url: "https://www.mrsam-english.com",
              sameAs: [
                "https://facebook.com/mrsamenglish",
                "https://instagram.com/mrsamenglish",
                "https://youtube.com/@mrsamenglish",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
