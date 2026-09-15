"use client";

import { Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 px-6 grid-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8 text-xs tracking-[3px] text-muted font-mono">
          <span>ALIF MAS SASTRO NUGROHO / PORTFOLIO</span>
          <span>© 2026 ALIF MAS SASTRO NUGROHO</span>
        </div>

        <div className="h-px bg-border mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white font-bold">
              A
            </div>
            <div>
              <p className="font-bold">ALIF MAS SASTRO NUGROHO</p>
              <p className="text-xs text-muted tracking-wider">FULL STACK DEVELOPER</p>
            </div>
          </div>

          <div className="flex gap-3">
            {[
              { icon: Mail, label: "EMAIL" },
            ].map(({ icon: Icon, label }) => (
              <button
                key={label}
                className="px-4 py-2 border border-border rounded-full text-xs tracking-wider hover:border-accent hover:text-accent transition-colors"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-12 pt-6 border-t border-border">
          <p className="text-xs text-muted tracking-wider">© 2026 ALIF MAS SASTRO NUGROHO. ALL RIGHTS RESERVED.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs tracking-wider text-muted hover:text-primary transition-colors"
          >
            Back to top <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}