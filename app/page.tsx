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
} from "lucide-react";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

// ─────────────────────────────────────────────────────────────
// TODO: Inserisci l'URL della tua webapp deployata su Vercel
// ─────────────────────────────────────────────────────────────
const APP_URL = "https://todowebapp-frontend-reactts-stml.vercel.app/";

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

          <div className="anim-fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-2xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 text-sm md:text-base"
            >
              <Download className="w-5 h-5" />
              Scarica l&apos;app
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/bale231/todowebapp-frontend-reactts"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 glass hover:bg-white/10 text-slate-300 hover:text-white font-semibold rounded-2xl transition-all duration-200 text-sm md:text-base"
            >
              <Github className="w-5 h-5" />
              Codice Sorgente
            </a>
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
      <section className="relative px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <AnimateIn animation="scale">
            <div className="glass-strong rounded-3xl p-10 glow-blue relative overflow-hidden">
              {/* Decorative orb inside */}
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

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                  <a
                    href={APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all duration-200 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-0.5 text-lg"
                  >
                    <Download className="w-6 h-6" />
                    Apri e Installa
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <Link
                    href="/contacts"
                    className="flex items-center gap-2 px-8 py-4 glass hover:bg-white/10 text-slate-300 hover:text-white font-semibold rounded-2xl transition-all duration-200"
                  >
                    Hai domande?
                  </Link>
                </div>

                {/* Platform badges */}
                <div className="flex items-center justify-center gap-5 text-slate-500 text-sm flex-wrap">
                  <div className="flex items-center gap-2 glass rounded-xl px-3 py-2">
                    <Smartphone className="w-4 h-4 text-slate-400" />
                    <span>iOS</span>
                  </div>
                  <div className="flex items-center gap-2 glass rounded-xl px-3 py-2">
                    <Smartphone className="w-4 h-4 text-slate-400" />
                    <span>Android</span>
                  </div>
                  <div className="flex items-center gap-2 glass rounded-xl px-3 py-2">
                    <Monitor className="w-4 h-4 text-slate-400" />
                    <span>Desktop</span>
                  </div>
                </div>
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
