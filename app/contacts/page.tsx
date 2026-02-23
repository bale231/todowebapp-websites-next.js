"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Send, Github, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactsPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-gradient-animated min-h-screen relative">
      {/* Background orbs */}
      <div className="orb w-80 h-80 bg-blue-600 top-32 -left-24" />
      <div className="orb w-64 h-64 bg-purple-600 bottom-40 right-0" />

      <div className="relative max-w-5xl mx-auto px-6 pt-36 pb-24">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 text-sm text-slate-300">
            <MessageSquare className="w-4 h-4 text-blue-400" />
            Contattaci
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Par<span className="gradient-text">liamo</span>
          </h1>
          <p className="text-slate-400 max-w-lg mx-auto text-lg">
            Hai una domanda, un&apos;idea di collaborazione o vuoi semplicemente salutare?
            Mandami un messaggio e ti rispondo il prima possibile.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left — contact info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Email card */}
            <div className="glass rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-white font-semibold mb-1">Email</h3>
              <p className="text-slate-400 text-sm">
                Compila il modulo e il tuo messaggio arriverà direttamente nella mia inbox.
              </p>
            </div>

            {/* GitHub card */}
            <div className="glass rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
                <Github className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-white font-semibold mb-1">GitHub</h3>
              <p className="text-slate-400 text-sm mb-3">
                Trovato un bug o vuoi contribuire? Apri un issue o una PR su GitHub.
              </p>
              <a
                href="https://github.com/bale231"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-purple-400 hover:text-purple-300 font-medium transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                @bale231
              </a>
            </div>

            {/* Repo links */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-3">Repository</h3>
              <div className="flex flex-col gap-2">
                <a
                  href="https://github.com/bale231/todowebapp-frontend-reactts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-300 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  Frontend (React + TS)
                </a>
                <a
                  href="https://github.com/bale231/todowebappbackend-django"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-300 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  Backend (Django REST)
                </a>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <div className="glass-strong rounded-3xl p-8 glow-blue">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Messaggio inviato!</h3>
                  <p className="text-slate-400 max-w-xs">
                    Grazie per avermi contattato. Ti rispondo il prima possibile.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 px-6 py-3 glass hover:bg-white/10 text-slate-300 hover:text-white font-medium rounded-xl transition-all"
                  >
                    Invia un altro messaggio
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm text-slate-400 font-medium">Nome</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Il tuo nome"
                        className="glass rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:ring-2 focus:ring-blue-500/50 transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm text-slate-400 font-medium">Email</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="tua@email.com"
                        className="glass rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:ring-2 focus:ring-blue-500/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-slate-400 font-medium">Oggetto</label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="Di cosa si tratta?"
                      className="glass rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:ring-2 focus:ring-blue-500/50 transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-slate-400 font-medium">Messaggio</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Scrivi qui il tuo messaggio..."
                      className="glass rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm resize-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      Si è verificato un errore. Riprova o contattami tramite GitHub.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-2xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
                  >
                    {status === "sending" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Invio in corso...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Invia Messaggio
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
