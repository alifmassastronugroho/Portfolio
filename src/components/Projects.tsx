"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    num: "01",
    category: "WEB DEVELOPMENT",
    title: "Kalivergo",
    repoUrl: "https://kalivergo.vercel.app/",
    liveUrl: "https://kalivergo.vercel.app/",
    desc: "Kalivergo adalah platform manajemen kelas kampus yang dikembangkan bersama tim development. Platform ini mengintegrasikan tracking tugas, manajemen keuangan, seminar, dan kegiatan kelas dalam satu tempat yang aman dan transparan.",
    tech: ["NEXT.JS", "REACT", "TYPESCRIPT"],
    color: "from-sky-500 to-blue-700",
    image: "/kalivergo-logo.jpg",
  },
  {
    num: "02",
    category: "PERSONAL PLATFORM",
    title: "Moneralepy",
    repoUrl: "https://moneralepy.vercel.app/",
    liveUrl: "https://moneralepy.vercel.app/",
    desc: "Moneralepy adalah portfolio digital yang dibuat sendiri melalui proses fullstack development. Proyek ini menggabungkan antarmuka modern, backend, REST API, dan deployment untuk menampilkan karya, keahlian, serta pengalaman secara terstruktur.",
    tech: ["REACT", "MERN STACK", "REST API", "DEPLOYMENT"],
    color: "from-gray-600 to-gray-800",
    image: "/moneralepy-logo.png",
  },
];

export default function Projects() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="projects" ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="soft-pill inline-block px-4 py-1.5 rounded-full text-xs tracking-wider mb-4">
            Featured Projects
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-4xl leading-tight font-extrabold mb-4">Karya yang berbicara dengan sendirinya</h2>
          <p className="text-muted max-w-2xl">
            Pilihan karya yang berfokus pada antarmuka yang jelas, interaksi yang penuh pertimbangan, dan pengalaman digital yang praktis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <div
              key={i}
              className="stagger-item bg-bg rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 group"
            >
              {}
              <div className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden`}>
                {project.image && (
                  <Image
                    src={project.image}
                    alt={`${project.title} logo`}
                    width={32}
                    height={32}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                )}
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
                      className="soft-pill px-3 py-1 rounded-full text-[10px] tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 bg-primary text-white rounded-full text-sm font-semibold hover:bg-accent transition-colors text-center"
                  >
                    View Project
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="soft-pill px-4 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2"
                  >
                    Live Demo <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}