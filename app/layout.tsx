import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://todowebapp.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ToDoWebApp — Gestisci i tuoi Task",
    template: "%s | ToDoWebApp",
  },
  description:
    "ToDoWebApp è un'app moderna e collaborativa per la gestione dei task. Organizza il tuo lavoro, collabora con gli amici e rimani produttivo. Open source, gratuita e installabile come PWA.",
  keywords: [
    "todo app",
    "gestione task",
    "produttività",
    "collaborativo",
    "web app",
    "react",
    "django",
    "pwa",
    "open source",
    "task manager",
    "organizzazione",
    "lista attività",
    "lavoro di squadra",
    "app gratis",
  ],
  authors: [{ name: "bale231", url: "https://github.com/bale231" }],
  creator: "bale231",
  publisher: "bale231",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ToDoWebApp — Gestisci i tuoi Task",
    description:
      "Organizza il tuo lavoro, collabora con gli amici e rimani produttivo con ToDoWebApp. Open source, gratuita, installabile come PWA.",
    type: "website",
    url: siteUrl,
    siteName: "ToDoWebApp",
    locale: "it_IT",
    images: [
      {
        url: "/logo-dark.png",
        alt: "ToDoWebApp — Gestisci i tuoi Task",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ToDoWebApp — Gestisci i tuoi Task",
    description:
      "Organizza il tuo lavoro, collabora con gli amici e rimani produttivo con ToDoWebApp.",
    images: ["/logo-dark.png"],
    creator: "@bale231",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "ToDoWebApp",
  url: siteUrl,
  description:
    "App moderna e collaborativa per la gestione dei task. Open source, gratuita, installabile come PWA.",
  applicationCategory: "ProductivityApplication",
  operatingSystem: "Web, iOS, Android",
  inLanguage: "it",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  author: {
    "@type": "Person",
    name: "bale231",
    url: "https://github.com/bale231",
  },
  featureList: [
    "Gestione task con priorità",
    "Collaborazione in tempo reale",
    "Richieste di amicizia",
    "Supporto offline (PWA)",
    "Notifiche push",
    "Autenticazione JWT",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
