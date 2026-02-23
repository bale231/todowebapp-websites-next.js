import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tasky — Smart Todo & Task Manager",
  description:
    "Tasky is a modern, collaborative todo and task management web app. Organize your work, collaborate with friends, and stay productive.",
  keywords: ["todo", "task manager", "productivity", "collaborative", "web app"],
  openGraph: {
    title: "Tasky — Smart Todo & Task Manager",
    description:
      "Organize your work, collaborate with friends, and stay productive with Tasky.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
