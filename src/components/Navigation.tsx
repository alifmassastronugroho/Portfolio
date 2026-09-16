"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const previousScrollY = useRef(0);
  const navigationRef = useRef<HTMLElement>(null);
  const activeSection = useActiveSection(navLinks.map((l) => l.id));

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);
      if (isMobileMenuOpen && currentScrollY !== previousScrollY.current) {
        setIsMobileMenuOpen(false);
      }

      previousScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (
        isMobileMenuOpen &&
        navigationRef.current &&
        !navigationRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isMobileMenuOpen]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      ref={navigationRef}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border/50 bg-white/58 shadow-[0_12px_38px_rgba(15,23,42,0.1)] backdrop-blur-2xl"
          : "border-transparent bg-bg/80 backdrop-blur-lg"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-3.5 lg:px-0">
        <button
          onClick={() => scrollTo("home")}
          className="whitespace-nowrap text-sm font-bold tracking-[-0.025em] transition-opacity duration-200 hover:opacity-70 sm:text-base lg:text-xl"
        >
          ALIF MAS SASTRO NUGROHO<span className="text-accent">.</span>
        </button>

        <div className="hidden items-center gap-4 md:absolute md:left-1/2 md:flex md:-translate-x-1/2 lg:gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`nav-link text-sm font-medium tracking-[0.01em] transition-colors duration-200 ${
                activeSection === link.id
                  ? "text-primary active"
                  : "text-muted hover:text-primary"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="rounded-full border border-border/70 p-2 text-primary transition-all duration-200 hover:border-primary/40 hover:bg-primary/5 active:bg-primary/10 md:hidden"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <button
          onClick={() => scrollTo("contact")}
          className="hidden shrink-0 rounded-full border border-primary px-3.5 py-1.5 text-xs font-semibold tracking-[0.01em] transition-all duration-200 hover:bg-primary hover:text-white hover:shadow-[0_6px_16px_rgba(10,10,10,0.15)] md:block lg:px-4 lg:text-sm"
        >
          Contact Me
        </button>
      </div>

      <div
        id="mobile-navigation"
        aria-hidden={!isMobileMenuOpen}
        className={`grid border-t border-border/60 bg-transparent px-4 backdrop-blur-xl transition-[grid-template-rows,opacity,padding] duration-300 ease-out md:hidden ${
          isMobileMenuOpen
            ? "grid-rows-[1fr] py-4 opacity-100 shadow-[0_18px_35px_rgba(15,23,42,0.1)]"
            : "grid-rows-[0fr] py-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                tabIndex={isMobileMenuOpen ? 0 : -1}
                  className={`w-full rounded-xl px-4 py-3.5 text-left text-sm font-medium transition-all duration-200 ${
                  activeSection === link.id
                    ? "bg-accent/10 text-accent shadow-sm"
                    : "text-muted hover:bg-bg hover:pl-5 hover:text-primary"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}