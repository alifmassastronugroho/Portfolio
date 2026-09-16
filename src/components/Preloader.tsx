"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isExited, setIsExited] = useState(false);
  const [dots, setDots] = useState("");

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 400);

    const timer = setTimeout(() => {
      setIsLoaded(true);
      setTimeout(() => {
        setIsExited(true);
      }, 700);
    }, 3000);

    return () => {
      clearInterval(dotInterval);
      clearTimeout(timer);
    };
  }, []);

  if (isExited) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-bg grid-bg flex items-center justify-center transition-transform duration-700 ease-in-out ${isLoaded ? "-translate-y-full" : "translate-y-0"}`}>
      {}
      <div className="absolute left-4 top-4 max-w-[42vw] text-[8px] leading-tight tracking-[1px] text-muted font-mono sm:left-8 sm:top-8 sm:text-xs sm:tracking-[3px]">
        PORTFOLIO / 2026
      </div>
      <div className="absolute right-4 top-4 max-w-[48vw] text-right text-[8px] leading-tight tracking-[1px] text-muted font-mono break-words sm:right-8 sm:top-8 sm:max-w-[40vw] sm:text-xs sm:tracking-[3px]">
        ALIF MAS SASTRO NUGROHO_CODES
      </div>
      <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 -rotate-90 text-[8px] leading-tight tracking-[2px] sm:text-xs sm:tracking-[3px] text-muted font-mono origin-left">
        CREATIVE / DISCREETLY / DIGITAL
      </div>
      <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 rotate-90 text-[8px] leading-tight tracking-[2px] sm:text-xs sm:tracking-[3px] text-muted font-mono origin-right">
        CODE / DESIGN / CODE / DESIGN
      </div>

      {}
      <div className="text-center">
        <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8 justify-center">
          <div className="h-px w-8 sm:w-12 bg-accent"></div>
          <span className="text-[10px] sm:text-xs tracking-[2px] sm:tracking-[4px] text-muted font-mono animate-fade-in">
            WELCOME
          </span>
          <div className="h-px w-8 sm:w-12 bg-accent"></div>
        </div>

        <h1 className="max-w-[calc(100vw-2rem)] px-2 text-[clamp(1.75rem,8vw,5.5rem)] leading-[0.95] font-extrabold text-primary tracking-tight break-words animate-blur-in sm:max-w-[90vw]">
          ALIF MAS SASTRO NUGROHO<span className="text-accent">.</span>
        </h1>

        <div className="flex items-center gap-2 justify-center mt-4 px-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
          <span className="text-[10px] sm:text-xs tracking-[2px] sm:tracking-[4px] text-muted font-mono">
            PORTFOLIO
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
        </div>

        <div className="mt-12 sm:mt-16 animate-fade-in" style={{ animationDelay: "1s" }}>
          <div className="h-px w-24 sm:w-32 bg-accent mx-auto mb-4"></div>
          <p className="text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] text-muted font-mono">
            INITIALIZING{dots}
          </p>
        </div>
      </div>
    </div>
  );
}