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
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: ListTodo,
    color: "blue",
    title: "Smart Task Management",
    description:
      "Create, organize, and prioritize your tasks with an intuitive drag-and-drop interface. Color-coded lists keep everything crystal clear.",
  },
  {
    icon: Users,
    color: "purple",
    title: "Social & Collaborative",
    description:
      "Add friends, share lists, and collaborate in real time. Send and receive friend requests to build your productivity circle.",
  },
  {
    icon: Bell,
    color: "yellow",
    title: "Smart Notifications",
    description:
      "Never miss a deadline. Get real-time notifications for friend requests, task updates, and important reminders.",
  },
  {
    icon: Smartphone,
    color: "green",
    title: "Works Offline (PWA)",
    description:
      "Install Tasky on any device and keep working even without internet. Your data syncs automatically when you're back online.",
  },
  {
    icon: Shield,
    color: "red",
    title: "Secure & Private",
    description:
      "JWT-based authentication, email verification, and secure password reset. Your data belongs to you.",
  },
  {
    icon: Zap,
    color: "orange",
    title: "Blazing Fast",
    description:
      "Built with React 19, Vite, and a Django REST backend. Optimized for speed with local-first storage via IndexedDB.",
  },
];

const steps = [
  {
    icon: UserCheck,
    step: "01",
    title: "Create your account",
    description: "Sign up in seconds. Verify your email and you're ready to go.",
  },
  {
    icon: ListTodo,
    step: "02",
    title: "Build your lists",
    description: "Create todo lists, add tasks, set priorities, and organize by color.",
  },
  {
    icon: Users,
    step: "03",
    title: "Invite friends",
    description: "Find users, send friend requests, and collaborate on shared tasks.",
  },
  {
    icon: RefreshCw,
    step: "04",
    title: "Stay in sync",
    description: "Everything updates in real time across all your devices.",
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
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 text-sm text-slate-300">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Open Source · Free to use
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white">
            Organize your life
            <br />
            <span className="gradient-text">smarter, together.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Tasky is a modern task management app with real-time collaboration, friend
            requests, offline support, and a clean glassmorphism UI — built with React +
            Django.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/bale231/todowebapp-frontend-reactts"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-2xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 text-sm md:text-base"
            >
              <Github className="w-5 h-5" />
              Get the Source Code
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contacts"
              className="flex items-center gap-2 px-8 py-4 glass hover:bg-white/10 text-slate-300 hover:text-white font-semibold rounded-2xl transition-all duration-200 text-sm md:text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Hero glass card preview */}
        <div className="max-w-3xl mx-auto mt-20">
          <div className="glass-strong rounded-3xl p-6 glow-blue">
            {/* Fake window chrome */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <div className="w-3 h-3 rounded-full bg-green-400/70" />
              <span className="ml-4 text-xs text-slate-500 font-mono">tasky — dashboard</span>
            </div>
            {/* Fake UI */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: "Work", color: "blue", tasks: ["Design new UI", "Review PR #42", "Deploy v2.1"] },
                { label: "Personal", color: "purple", tasks: ["Buy groceries", "Call dentist", "Read chapter 5"] },
                { label: "Learning", color: "green", tasks: ["Next.js 15 docs", "DSA practice", "TypeScript tips"] },
              ].map((list) => (
                <div key={list.label} className="glass rounded-2xl p-4">
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold mb-3 border ${colorMap[list.color]}`}>
                    <CheckSquare className="w-3 h-3" />
                    {list.label}
                  </div>
                  <div className="space-y-2">
                    {list.tasks.map((task, i) => (
                      <div key={task} className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center ${i === 0 ? `${colorMap[list.color]}` : "border-white/10"}`}>
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
          <div className="text-center mb-16">
            <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">
              Features
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Everything you need
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Tasky packs everything a productive person needs into a clean, fast, and
              beautiful interface.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="glass rounded-2xl p-6 hover:bg-white/[0.07] transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 ${colorMap[feature.color]}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="relative px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-3">
              How it works
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Up and running in minutes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.step}>
                  <div className="glass rounded-2xl p-6 h-full">
                    <div className="text-5xl font-black text-white/5 mb-2 select-none">
                      {step.step}
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── TECH STACK ─── */}
      <section className="relative px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="glass-strong rounded-3xl p-10 text-center glow-purple">
            <p className="text-slate-400 text-sm uppercase tracking-widest mb-3">
              Tech Stack
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-8">
              Modern tools, solid foundation
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "React 19",
                "TypeScript",
                "Tailwind CSS",
                "Django REST",
                "Python",
                "Firebase",
                "IndexedDB (Dexie)",
                "Vite",
                "GSAP",
                "PWA",
                "JWT Auth",
                "DnD Kit",
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
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="relative px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to get{" "}
            <span className="gradient-text">organized?</span>
          </h2>
          <p className="text-slate-400 mb-10 text-lg">
            Fork the repo, spin it up locally, or reach out if you want to collaborate.
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
        </div>
      </section>
    </div>
  );
}
