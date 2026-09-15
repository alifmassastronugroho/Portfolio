"use client";

import { useEffect, useState } from "react";
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
  const activeSection = useActiveSection(navLinks.map((l) => l.id));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
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

        <div className="hidden md:flex items-center gap-3 lg:gap-5 xl:gap-8">
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
          onClick={() => scrollTo("contact")}
          className="shrink-0 px-3 sm:px-4 lg:px-6 py-2 border-2 border-primary rounded-full text-sm font-semibold hover:bg-primary hover:text-white transition-all"
        >
          Hire Me
        </button>
      </div>
    </nav>
  );
}