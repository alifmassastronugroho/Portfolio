"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    num: "01",
    category: "MARKET INTERFACE",
    title: "StockDZ",
    desc: "StockDZ is a modern web platform focused on presenting and exploring stock-related information through a clean and intuitive interface. The project was designed to provide users with a simple and accessible way to explore market data and interact with financial information.",
    tech: ["REACT", "JAVASCRIPT", "CSS3"],
    color: "from-blue-700 to-blue-900",
  },
  {
    num: "02",
    category: "INTERACTIVE GAME",
    title: "Hangman",
    desc: "Hangman is an interactive word-guessing game where players try to discover the hidden word before running out of attempts. The project focuses on simple gameplay, responsive interaction, and a clean user experience.",
    tech: ["JAVASCRIPT", "HTML", "CSS3"],
    color: "from-gray-800 to-gray-900",
  },
  {
    num: "03",
    category: "PERSONAL PLATFORM",
    title: "Portfolio",
    desc: "A modern personal portfolio website designed to showcase projects, technical skills, experience, and professional information through a clean and responsive interface.",
    tech: ["REACT.JS", "VITE", "JAVASCRIPT", "CSS3", "FONT AWESOME / BOXICONS", "SCROLL ANIMATIONS"],
    color: "from-gray-600 to-gray-800",
  },
];

export default function Projects() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="projects" ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="inline-block px-4 py-1.5 border border-border rounded-full text-xs tracking-wider text-muted mb-4">
            Featured Projects
          </span>
          <h2 className="text-5xl font-extrabold mb-4">Work that speaks for itself</h2>
          <p className="text-muted max-w-2xl">
            A focused selection of work built around clear interfaces, thoughtful interaction, and practical digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="stagger-item bg-bg rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 group"
            >
              {}
              <div className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden`}>
                <span className="absolute top-4 right-4 text-5xl font-extrabold text-white/60">
                  {project.num}
                </span>
                <span className="absolute top-4 left-4 text-[10px] tracking-[2px] text-white font-mono bg-black/30 px-2 py-1 rounded">
                  {project.category}
                </span>
              </div>

              {}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-6">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-white rounded-full text-[10px] tracking-wider text-muted border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 py-2.5 bg-primary text-white rounded-full text-sm font-semibold hover:bg-accent transition-colors">
                    View Project
                  </button>
                  <button className="px-4 py-2.5 border-2 border-border rounded-full text-sm font-semibold flex items-center gap-2 hover:border-primary transition-colors">
                    Live Demo <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}