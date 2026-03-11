import {
  CheckSquare,
  Users,
  Smartphone,
  Zap,
  Shield,
  Bell,
  ArrowRight,
  Github,
  ListTodo,
  UserCheck,
  RefreshCw,
  Download,
  Monitor,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import DownloadSection from "@/components/DownloadSection";

// ─────────────────────────────────────────────────────────────
// TODO: Inserisci l'URL della tua webapp deployata su Vercel
// ─────────────────────────────────────────────────────────────
const APP_URL = "https://todowebapp-frontend-reactts-stml.vercel.app/";
const GUIDE_URL = "/GUIDA_UTENTE_TODOAPP.pdf";
const WINDOWS_URL =
  "https://github.com/bale231/todowebapp-frontend-reactts/releases/download/v1.2.1/ToDoApp-Setup.exe";

function WindowsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
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

const features = [
  {
    icon: ListTodo,
    color: "blue",
    title: "Gestione Intelligente dei Task",
    description:
      "Crea, organizza e dai priorità ai tuoi task con un'interfaccia drag-and-drop intuitiva. Le liste con codice colore mantengono tutto chiaro.",
  },
  {
    icon: Users,
    color: "purple",
    title: "Social e Collaborativo",
    description:
      "Aggiungi amici, condividi liste e collabora in tempo reale. Invia e ricevi richieste di amicizia per costruire il tuo circolo di produttività.",
  },
  {
    icon: Bell,
    color: "yellow",
    title: "Notifiche Intelligenti",
    description:
      "Non perdere mai una scadenza. Ricevi notifiche in tempo reale per richieste di amicizia, aggiornamenti dei task e promemoria importanti.",
  },
  {
    icon: Smartphone,
    color: "green",
    title: "Funziona Offline (PWA)",
    description:
      "Installa ToDoWebApp su qualsiasi dispositivo e continua a lavorare anche senza internet. I dati si sincronizzano automaticamente quando torni online.",
  },
  {
    icon: Shield,
    color: "red",
    title: "Sicuro e Privato",
    description:
      "Autenticazione JWT, verifica email e reset password sicuro. I tuoi dati appartengono a te.",
  },
  {
    icon: Zap,
    color: "orange",
    title: "Velocissimo",
    description:
      "Costruito con React 19, Vite e un backend Django REST. Ottimizzato per la velocità con storage locale tramite IndexedDB.",
  },
];

const steps = [
  {
    icon: UserCheck,
    step: "01",
    title: "Crea il tuo account",
    description: "Registrati in pochi secondi. Verifica la tua email e sei pronto a partire.",
  },
  {
    icon: ListTodo,
    step: "02",
    title: "Costruisci le tue liste",
    description: "Crea liste di todo, aggiungi task, imposta priorità e organizza per colore.",
  },
  {
    icon: Users,
    step: "03",
    title: "Invita amici",
    description: "Trova utenti, invia richieste di amicizia e collabora su task condivisi.",
  },
  {
    icon: RefreshCw,
    step: "04",
    title: "Rimani sincronizzato",
    description: "Tutto si aggiorna in tempo reale su tutti i tuoi dispositivi.",
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-500/10 border-blue-500/20 text-blue-400",
  purple: "bg-purple-500/10 border-purple-500/20 text-purple-400",
  yellow: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
  green: "bg-green-500/10 border-green-500/20 text-green-400",
  red: "bg-red-500/10 border-red-500/20 text-red-400",
  orange: "bg-orange-500/10 border-orange-500/20 text-orange-400",
};

// Screenshot names — replace src with real paths when ready
// e.g. <img src="/screenshots/screen-1.png" alt="..." className="w-full h-full object-cover object-top" />
const screenshots = [
  { label: "Home & Liste", src: "/screenshots/screen-1.png" },
  { label: "Dettaglio Task", src: "/screenshots/screen-2.png" },
  { label: "Profilo & Amici", src: "/screenshots/screen-3.png" },
];

export default function HomePage() {
  return (
    <div className="bg-gradient-animated min-h-screen relative">
      {/* Background orbs */}
      <div className="orb w-96 h-96 bg-blue-600 top-20 -left-32" />
      <div className="orb w-80 h-80 bg-purple-600 top-40 right-0" />
      <div className="orb w-64 h-64 bg-blue-500 top-[60%] left-1/2 -translate-x-1/2" />

      {/* ─── HERO ─── */}
      <section className="relative pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="anim-fade-in inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 text-sm text-slate-300">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Open Source · Gratuito
          </div>

          <h1 className="anim-fade-in-up delay-100 text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white">
            Organizza la tua vita
            <br />
            <span className="gradient-text">più smart, insieme.</span>
          </h1>

          <p className="anim-fade-in-up delay-200 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            ToDoWebApp è un&apos;app moderna di gestione task con collaborazione in tempo reale,
            richieste di amicizia, supporto offline e un&apos;interfaccia glassmorphism
            — costruita con React + Django.
          </p>

          <div className="anim-fade-in-up delay-300 flex flex-col items-center gap-4">
            {/* Riga 1: iOS + Android */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-8 py-4 bg-zinc-800 hover:bg-zinc-700 border border-white/10 text-white font-semibold rounded-2xl transition-all duration-200 hover:shadow-xl hover:shadow-black/40 hover:-translate-y-0.5 text-sm md:text-base"
              >
                <AppleIcon className="w-5 h-5" />
                Per iOS
              </a>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-8 py-4 bg-[#1a9e52] hover:bg-[#168a47] text-white font-semibold rounded-2xl transition-all duration-200 hover:shadow-xl hover:shadow-[#1a9e52]/30 hover:-translate-y-0.5 text-sm md:text-base"
              >
                <AndroidIcon className="w-5 h-5" />
                Per Android
              </a>
            </div>

            {/* Riga 2: Windows + Codice Sorgente */}
            <div className="flex flex-col items-center gap-1.5">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={WINDOWS_URL}
                  download="ToDoApp.Setup.1.2.0.exe"
                  className="flex items-center gap-2.5 px-7 py-3 bg-[#0078d4] hover:bg-[#106ebe] text-white font-semibold rounded-2xl transition-all duration-200 hover:shadow-xl hover:shadow-[#0078d4]/30 hover:-translate-y-0.5 text-sm"
                >
                  <WindowsIcon className="w-4 h-4" />
                  Scarica per Windows
                </a>
                <a
                  href="https://github.com/bale231/todowebapp-frontend-reactts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-7 py-3 glass hover:bg-white/10 text-slate-300 hover:text-white font-semibold rounded-2xl transition-all duration-200 text-sm"
                >
                  <Github className="w-4 h-4" />
                  Codice Sorgente
                </a>
              </div>
              <p className="text-slate-500 text-xs">Windows 10/11 · 70 MB</p>
            </div>
          </div>
        </div>

        {/* Hero glass card preview */}
        <div className="anim-scale-in delay-500 max-w-3xl mx-auto mt-20">
          <div className="glass-strong rounded-3xl p-6 glow-blue">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <div className="w-3 h-3 rounded-full bg-green-400/70" />
              <span className="ml-4 text-xs text-slate-500 font-mono">todowebapp — dashboard</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: "Lavoro", color: "blue", tasks: ["Nuovo design UI", "Revisiona PR #42", "Deploy v2.1"] },
                { label: "Personale", color: "purple", tasks: ["Fare la spesa", "Dal dentista", "Leggi capitolo 5"] },
                { label: "Apprendimento", color: "green", tasks: ["Docs Next.js 15", "Allenamento DSA", "TypeScript tips"] },
              ].map((list) => (
                <div key={list.label} className="glass rounded-2xl p-4">
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold mb-3 border ${colorMap[list.color]}`}>
                    <CheckSquare className="w-3 h-3" />
                    {list.label}
                  </div>
                  <div className="space-y-2">
                    {list.tasks.map((task, i) => (
                      <div key={task} className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center ${i === 0 ? colorMap[list.color] : "border-white/10"}`}>
                          {i === 0 && <CheckSquare className="w-2.5 h-2.5" />}
                        </div>
                        <span className={`text-xs ${i === 0 ? "line-through text-slate-500" : "text-slate-300"}`}>
                          {task}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="relative px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <AnimateIn className="text-center mb-16" animation="fade">
            <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">
              Funzionalità
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Tutto quello che ti serve
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              ToDoWebApp mette tutto ciò di cui una persona produttiva ha bisogno in
              un&apos;interfaccia pulita, veloce e bella.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <AnimateIn key={feature.title} delay={i * 80} animation="up">
                  <div className="glass rounded-2xl p-6 hover:bg-white/[0.07] transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 ${colorMap[feature.color]}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SCREENSHOTS ─── */}
      <section className="relative px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <AnimateIn className="text-center mb-16" animation="fade">
            <p className="text-green-400 font-semibold text-sm uppercase tracking-widest mb-3">
              Anteprima
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Vedi ToDoWebApp in azione
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Un&apos;interfaccia pulita e moderna, ottimizzata per ogni dispositivo.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            {screenshots.map((screen, i) => (
              <AnimateIn key={screen.label} delay={i * 120} animation="up">
                {/* Phone frame */}
                <div className={`mx-auto transition-transform duration-300 hover:-translate-y-2 ${i === 1 ? "md:-translate-y-6" : ""}`}
                  style={{ maxWidth: 220 }}>
                  <div className="bg-slate-800 rounded-[2.5rem] p-[5px] border border-white/10 shadow-2xl shadow-black/60">
                    {/* Side buttons */}
                    <div className="relative">
                      <div className="absolute top-14 -right-[4px] w-[4px] h-10 bg-slate-700 rounded-r-sm" />
                      <div className="absolute top-10 -left-[4px] w-[4px] h-6 bg-slate-700 rounded-l-sm" />
                      <div className="absolute top-20 -left-[4px] w-[4px] h-10 bg-slate-700 rounded-l-sm" />
                      {/* Screen */}
                      <div className="bg-slate-950 rounded-[2.2rem] overflow-hidden aspect-[9/19]">
                        {/* Notch */}
                        <div className="flex justify-center pt-2.5">
                          <div className="w-20 h-[10px] bg-black rounded-full" />
                        </div>
                        {/*
                         * ─── INSERISCI LO SCREENSHOT QUI ───────────────────────────
                         * Sostituisci il div placeholder con un tag <img>:
                         *   <img
                         *     src={screen.src}
                         *     alt={screen.label}
                         *     className="w-full h-full object-cover object-top"
                         *   />
                         * ────────────────────────────────────────────────────────────
                         */}
                        <div className="w-full h-[calc(100%-22px)] flex flex-col items-center justify-center gap-3 border-2 border-dashed border-white/5 mx-1 rounded-b-[2rem]">
                          <Smartphone className="w-8 h-8 text-slate-700" />
                          <p className="text-slate-600 text-[11px] font-mono text-center px-3 leading-snug">
                            {screen.label}
                          </p>
                          <p className="text-slate-700 text-[10px] font-mono text-center px-3">
                            {screen.src}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Label below phone */}
                  <p className="text-center text-slate-500 text-xs mt-4 font-medium">{screen.label}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="relative px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <AnimateIn className="text-center mb-16" animation="fade">
            <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-3">
              Come funziona
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Operativo in pochi minuti
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimateIn key={step.step} delay={i * 100} animation="up">
                  <div className="glass rounded-2xl p-6 h-full">
                    <div className="text-5xl font-black text-white/5 mb-2 select-none">
                      {step.step}
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SCARICA L'APP ─── */}
      <DownloadSection />

      {/* ─── GUIDA UTENTE ─── */}
      <section className="relative px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <AnimateIn animation="up">
            <div className="glass rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
              {/* Icon */}
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center">
                <BookOpen className="w-10 h-10 text-purple-400" />
              </div>

              {/* Text */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-2">
                  Documentazione
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Guida Utente
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Scarica la guida completa in PDF per imparare a usare ToDoWebApp al meglio:
                  dalla registrazione alla gestione avanzata dei task, passando per le funzioni social.
                </p>
              </div>

              {/* Button */}
              <div className="flex-shrink-0">
                <a
                  href={GUIDE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="GUIDA_UTENTE_TODOAPP.pdf"
                  className="flex items-center gap-3 px-7 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-2xl transition-all duration-200 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5 whitespace-nowrap"
                >
                  <Download className="w-5 h-5" />
                  Scarica PDF
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ─── TECH STACK ─── */}
      <section className="relative px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <AnimateIn animation="scale">
            <div className="glass-strong rounded-3xl p-10 text-center glow-purple">
              <p className="text-slate-400 text-sm uppercase tracking-widest mb-3">
                Stack Tecnologico
              </p>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-8">
                Strumenti moderni, basi solide
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "React 19", "TypeScript", "Tailwind CSS", "Django REST",
                  "Python", "Firebase", "IndexedDB (Dexie)", "Vite",
                  "GSAP", "PWA", "JWT Auth", "DnD Kit",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 glass rounded-xl text-sm text-slate-300 font-medium border border-white/5 hover:border-blue-400/30 hover:text-blue-300 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ─── CTA FINALE ─── */}
      <section className="relative px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn animation="up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Pronto a{" "}
              <span className="gradient-text">organizzarti?</span>
            </h2>
            <p className="text-slate-400 mb-10 text-lg">
              Fai un fork del repo, avvialo in locale, o contattami se vuoi collaborare.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://github.com/bale231/todowebapp-frontend-reactts"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-2xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
              >
                <Github className="w-5 h-5" />
                Frontend Repo
              </a>
              <a
                href="https://github.com/bale231/todowebappbackend-django"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 glass hover:bg-white/10 text-slate-300 hover:text-white font-semibold rounded-2xl transition-all duration-200"
              >
                <Github className="w-5 h-5" />
                Backend Repo
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
