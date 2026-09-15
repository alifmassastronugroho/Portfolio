"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [dots, setDots] = useState("");

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 400);

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000);

    return () => {
      clearInterval(dotInterval);
      clearTimeout(timer);
    };
  }, []);

  if (isLoaded) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-bg grid-bg flex items-center justify-center">
      {}
      <div className="absolute top-8 left-8 text-xs tracking-[3px] text-muted font-mono">
        PORTFOLIO / 2026
      </div>
      <div className="absolute top-8 right-8 text-xs tracking-[3px] text-muted font-mono">
        ALIF MAS SASTRO NUGROHO_CODES
      </div>
      <div className="absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 text-xs tracking-[3px] text-muted font-mono origin-left">
        CREATIVE / DISCREETLY / DIGITAL
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 rotate-90 text-xs tracking-[3px] text-muted font-mono origin-right">
        CODE / DESIGN / CODE / DESIGN
      </div>

      {}
      <div className="text-center">
        <div className="flex items-center gap-4 mb-8 justify-center">
          <div className="h-px w-12 bg-accent"></div>
          <span className="text-xs tracking-[4px] text-muted font-mono animate-fade-in">
            WELCOME
          </span>
          <div className="h-px w-12 bg-accent"></div>
        </div>

        <h1 className="text-[120px] font-extrabold text-primary tracking-tight animate-blur-in">
          ALIF MAS SASTRO NUGROHO<span className="text-accent">.</span>
        </h1>

        <div className="flex items-center gap-2 justify-center mt-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
          <span className="text-xs tracking-[4px] text-muted font-mono">
            FULL STACK DEVELOPER
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
        </div>

        <div className="mt-16 animate-fade-in" style={{ animationDelay: "1s" }}>
          <div className="h-px w-32 bg-accent mx-auto mb-4"></div>
          <p className="text-xs tracking-[3px] text-muted font-mono">
            INITIALIZING{dots}
          </p>
        </div>
      </div>
    </div>
  );
}