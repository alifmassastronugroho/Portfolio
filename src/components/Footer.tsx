"use client";

import { Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 px-6 grid-bg">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex flex-col gap-2 text-[9px] tracking-[2px] text-muted font-mono sm:flex-row sm:items-center sm:justify-between sm:text-xs sm:tracking-[3px]">
          <span className="break-words">ALIF MAS SASTRO NUGROHO / PORTFOLIO</span>
          <span className="break-words">© 2026 ALIF MAS SASTRO NUGROHO</span>
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
              <a
                key={label}
                href="mailto:alifmassastronugroho@gmail.com"
                className="soft-pill px-4 py-2 rounded-full text-xs tracking-wider"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-12 pt-6 border-t border-border">
          <p className="text-xs text-muted tracking-wider">© 2026 ALIF MAS SASTRO NUGROHO. ALL RIGHTS RESERVED.</p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs tracking-wider text-muted transition-colors hover:text-primary"
          >
            <span className="text-sm font-medium sm:text-[0.8125rem]">Back to top</span>
            <ArrowUp
              size={20}
              className="animate-[floatUp_1.2s_ease-in-out_infinite] transition-all duration-300 group-hover:scale-130 group-hover:text-primary"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}