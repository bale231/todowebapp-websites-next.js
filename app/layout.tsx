import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ToDoWebApp — Gestisci i tuoi Task",
  description:
    "ToDoWebApp è un'app moderna e collaborativa per la gestione dei task. Organizza il tuo lavoro, collabora con gli amici e rimani produttivo.",
  keywords: ["todo", "gestione task", "produttività", "collaborativo", "web app"],
  openGraph: {
    title: "ToDoWebApp — Gestisci i tuoi Task",
    description:
      "Organizza il tuo lavoro, collabora con gli amici e rimani produttivo con ToDoWebApp.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
