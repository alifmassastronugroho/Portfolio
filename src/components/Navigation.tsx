"use client";

import { useEffect, useState } from "react";
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
  const activeSection = useActiveSection(navLinks.map((l) => l.id));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/85 backdrop-blur-md shadow-sm" : "bg-bg/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-3 sm:py-4 flex items-center justify-between gap-4">
        <button
          onClick={() => scrollTo("home")}
          className="text-sm sm:text-base lg:text-xl font-bold tracking-tight whitespace-nowrap"
        >
          ALIF MAS SASTRO NUGROHO<span className="text-accent">.</span>
        </button>

        <div className="hidden md:flex md:absolute md:left-1/2 md:-translate-x-1/2 items-center gap-3 lg:gap-5 xl:gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`nav-link text-sm font-medium transition-colors ${
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
          className="md:hidden p-2 text-primary"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <button
          onClick={() => scrollTo("contact")}
          className="hidden md:block shrink-0 px-3 lg:px-4 py-1.5 border-2 border-primary rounded-full text-xs lg:text-sm font-semibold hover:bg-primary hover:text-white transition-all"
        >
          Contact Me
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden border-t border-border bg-white/95 px-4 py-3 shadow-sm backdrop-blur-md"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`w-full px-3 py-3 text-left text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? "bg-primary text-white"
                    : "text-muted hover:bg-bg hover:text-primary"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}