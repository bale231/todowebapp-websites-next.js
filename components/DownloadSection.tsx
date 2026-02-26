"use client";

import { useState, useEffect } from "react";
import { X, Download, ArrowRight } from "lucide-react";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

const WINDOWS_URL =
  "https://github.com/bale231/todowebapp-frontend-reactts/releases/download/v1.2.0/ToDoApp.Setup.1.2.0.exe";
const APP_URL = "https://todowebapp-frontend-reactts-stml.vercel.app/";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

function WindowsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
    </svg>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function AndroidIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.523 15.341a.999.999 0 1 1-.001-1.997.999.999 0 0 1 .001 1.997m-11.046 0a.999.999 0 1 1-.001-1.997.999.999 0 0 1 .001 1.997m11.405-6.02 1.997-3.459a.416.416 0 0 0-.72-.416l-2.023 3.503A11.107 11.107 0 0 0 12 7.851c-1.853 0-3.59.393-5.137 1.099L4.841 5.447a.416.416 0 0 0-.72.416l1.997 3.459C3.674 10.189 2.163 12.221 2 14.583h20c-.163-2.362-1.674-4.394-4.118-5.262z" />
    </svg>
  );
}

export default function DownloadSection() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showIOSModal, setShowIOSModal] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleAndroidInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setDeferredPrompt(null);
    }
  };

  return (
    <section className="relative px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <AnimateIn animation="scale">
          <div className="glass-strong rounded-3xl p-10 glow-blue relative overflow-hidden">
            {/* Decorative orb */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-600 opacity-10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative text-center">
              <div className="inline-flex w-16 h-16 rounded-2xl bg-blue-500/20 border border-blue-400/30 items-center justify-center mx-auto mb-6">
                <Download className="w-8 h-8 text-blue-400" />
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Scarica l&apos;app{" "}
                <span className="gradient-text">ora!</span>
              </h2>

              <p className="text-slate-400 max-w-lg mx-auto mb-10 text-lg leading-relaxed">
                ToDoWebApp è una Progressive Web App. Nessuno store, nessun download pesante:
                aprila dal browser e aggiungila alla tua schermata home in un tap.
              </p>

              {/* Download buttons — row on desktop, column on mobile */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                {/* Windows */}
                <div className="flex flex-col items-center gap-1.5">
                  <a
                    href={WINDOWS_URL}
                    download="ToDoApp.Setup.1.2.0.exe"
                    className="flex items-center gap-2.5 px-8 py-4 bg-[#0078d4] hover:bg-[#106ebe] text-white font-bold rounded-2xl transition-all duration-200 hover:shadow-xl hover:shadow-[#0078d4]/30 hover:-translate-y-0.5"
                  >
                    <WindowsIcon className="w-5 h-5" />
                    Scarica per Windows
                  </a>
                  <p className="text-slate-500 text-xs">Windows 10/11</p>
                </div>

                {/* Android PWA — solo se beforeinstallprompt è disponibile */}
                {deferredPrompt && (
                  <div className="flex flex-col items-center gap-1.5">
                    <button
                      onClick={handleAndroidInstall}
                      className="flex items-center gap-2.5 px-8 py-4 bg-[#1a9e52] hover:bg-[#168a47] text-white font-bold rounded-2xl transition-all duration-200 hover:shadow-xl hover:shadow-[#1a9e52]/30 hover:-translate-y-0.5"
                    >
                      <AndroidIcon className="w-5 h-5" />
                      Installa su Android
                    </button>
                    <p className="text-slate-500 text-xs">Chrome richiesto</p>
                  </div>
                )}

                {/* iPhone — apre modal con istruzioni Safari */}
                <div className="flex flex-col items-center gap-1.5">
                  <button
                    onClick={() => setShowIOSModal(true)}
                    className="flex items-center gap-2.5 px-8 py-4 bg-zinc-800 hover:bg-zinc-700 border border-white/10 text-white font-bold rounded-2xl transition-all duration-200 hover:shadow-xl hover:shadow-black/40 hover:-translate-y-0.5"
                  >
                    <AppleIcon className="w-5 h-5" />
                    Installa su iPhone
                  </button>
                  <p className="text-slate-500 text-xs">Safari richiesto</p>
                </div>
              </div>

              {/* Hai domande? */}
              <div className="mb-8">
                <Link
                  href="/contacts"
                  className="inline-flex items-center gap-2 px-6 py-2.5 glass hover:bg-white/10 text-slate-400 hover:text-white font-medium rounded-xl transition-all duration-200 text-sm"
                >
                  Hai domande?
                </Link>
              </div>

              {/* Platform badges */}
              <div className="flex items-center justify-center gap-5 text-slate-500 text-sm flex-wrap">
                <div className="flex items-center gap-2 glass rounded-xl px-3 py-2">
                  <AppleIcon className="w-4 h-4 text-slate-400" />
                  <span>iOS</span>
                </div>
                <div className="flex items-center gap-2 glass rounded-xl px-3 py-2">
                  <AndroidIcon className="w-4 h-4 text-slate-400" />
                  <span>Android</span>
                </div>
                <div className="flex items-center gap-2 glass rounded-xl px-3 py-2">
                  <WindowsIcon className="w-4 h-4 text-slate-400" />
                  <span>Windows</span>
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>

      {/* iOS Install Modal */}
      {showIOSModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowIOSModal(false);
          }}
        >
          <div className="glass-strong rounded-3xl p-8 max-w-sm w-full relative">
            {/* Close button */}
            <button
              onClick={() => setShowIOSModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              aria-label="Chiudi"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex w-14 h-14 rounded-2xl bg-zinc-800 border border-white/10 items-center justify-center mb-4">
                <AppleIcon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl">Installa su iPhone</h3>
              <p className="text-slate-400 text-sm mt-1">Segui questi passi in Safari</p>
            </div>

            {/* Steps */}
            <ol className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 text-sm font-bold">
                  1
                </span>
                <div>
                  <p className="text-white font-medium text-sm">Apri in Safari</p>
                  <p className="text-slate-500 text-xs mt-0.5">Assicurati di usare Safari, non Chrome</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 text-sm font-bold">
                  2
                </span>
                <div>
                  <p className="text-white font-medium text-sm">Tocca l&apos;icona Condividi</p>
                  <p className="text-slate-500 text-xs mt-0.5">Il tasto ⬜↑ nella barra in basso</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 text-sm font-bold">
                  3
                </span>
                <div>
                  <p className="text-white font-medium text-sm">Seleziona &apos;Aggiungi a Home&apos;</p>
                  <p className="text-slate-500 text-xs mt-0.5">L&apos;app apparirà sulla schermata home</p>
                </div>
              </li>
            </ol>

            {/* CTA — apre l'app in Safari */}
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-zinc-800 hover:bg-zinc-700 border border-white/10 text-white font-semibold rounded-2xl transition-all duration-200"
            >
              Apri l&apos;app
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
