import Link from "next/link";
import { Github, CheckSquare } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
              <CheckSquare className="w-3.5 h-3.5 text-blue-400" />
            </div>
            <span className="font-bold gradient-text">Tasky</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-300 transition-colors">
              Home
            </Link>
            <Link href="/contacts" className="hover:text-slate-300 transition-colors">
              Contacts
            </Link>
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
          </div>

          {/* GitHub credit */}
          <a
            href="https://github.com/bale231"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-200 transition-colors group"
          >
            <Github className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
            <span>
              Created by{" "}
              <span className="text-blue-400 font-medium">Bale231</span>
              {" "}· {year}
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
