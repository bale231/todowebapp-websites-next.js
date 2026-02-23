"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/contacts", label: "Contatti" },
  { href: "/privacy-policy", label: "Privacy" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      {/* Main bar */}
      <div className="max-w-6xl mx-auto bg-slate-900/70 backdrop-blur-xl border border-white/[0.1] shadow-lg rounded-2xl px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-dark.png"
            alt="Tasky"
            className="h-8 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                pathname === link.href
                  ? "bg-blue-500/20 text-blue-300 border border-blue-400/20"
                  : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="https://github.com/bale231/todowebapp-frontend-reactts"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
          >
            GitHub
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-slate-400 hover:text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Apri menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto bg-slate-900/80 backdrop-blur-xl border border-white/[0.1] shadow-xl rounded-2xl px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                pathname === link.href
                  ? "bg-blue-500/20 text-blue-300"
                  : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com/bale231/todowebapp-frontend-reactts"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold text-center transition-all"
          >
            Vedi su GitHub
          </a>
        </div>
      )}
    </nav>
  );
}
