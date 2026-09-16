"use client";

import { useJourneyCarousel } from "@/hooks/useJourneyCarousel";
import { Circle, Square, Triangle, Hexagon } from "lucide-react";

const chapters = [
  {
    num: "01",
    category: "EDUCATION",
    title: "Computer Science",
    desc: "Saya sedang mempelajari Ilmu Komputer di USTHB dan membangun dasar yang kuat dalam pemrograman, pemecahan masalah, algoritma, struktur data, basis data, serta pengembangan perangkat lunak.",
    tags: ["USTHB"],
    icon: Circle,
    cta: "EXPLORE PROJECTS",
  },
  {
    num: "02",
    category: "BUILDING WORK",
    title: "Personal Projects",
    desc: "Saya belajar dengan membangun sesuatu. Proyek pribadi memberi saya ruang untuk bereksperimen dengan berbagai ide, meningkatkan kemampuan pengembangan, dan mengubah konsep menjadi pengalaman digital nyata.",
    tags: ["BUILD", "LEARN", "IMPROVE"],
    icon: Square,
    cta: "EXPLORE PROJECTS",
  },
  {
    num: "03",
    category: "PROFESSIONAL",
    title: "Freelance Developer",
    desc: "Mengerjakan tugas pengembangan nyata membantu saya meningkatkan cara menghadapi masalah, menerapkan fitur, memperbaiki kendala, dan mengubah kebutuhan menjadi solusi yang berfungsi.",
    tags: ["WEB DEVELOPMENT", "CLIENT WORK", "PROBLEM SOLVING"],
    icon: Triangle,
  },
  {
    num: "04",
    category: "CREATIVE",
    title: "UI/UX & Visual Design",
    desc: "Saya senang mengeksplorasi UI/UX, komposisi visual, dan desain antarmuka. Saya suka mengubah ide menjadi pengalaman yang bersih dan intuitif, dengan desain serta fungsi yang saling mendukung.",
    tags: ["Figma", "UI/UX", "Visual Design", "After Effects", "Photoshop", "Motion"],
    icon: Hexagon,
  },
  {
    num: "05",
    category: "MOTION",
    title: "Creative Editing & Motion",
    desc: "Saya juga mengeksplorasi penyuntingan kreatif, motion, transisi, dan penceritaan visual. Hal ini memberi saya cara lain untuk bereksperimen dengan waktu, komposisi, dan interaksi.",
    tags: ["After Effects", "Photoshop", "Motion", "Visual Editing"],
    icon: Circle,
  },
  {
    num: "06",
    category: "EXPLORATION",
    title: "3D & Visualization",
    desc: "Saya mengeksplorasi pemodelan 3D, rendering, dan visualisasi sebagai bagian lain dari sisi kreatif saya dengan memadukan pemikiran teknis dan eksperimen visual.",
    tags: ["3D Modeling", "Rendering", "Visualization"],
    icon: Square,
  },
  {
    num: "07",
    category: "GROWTH",
    title: "Always Learning",
    desc: "Saya terus mengeksplorasi teknologi baru, teknik pengembangan, ide desain, dan alat kreatif. Belajar, bereksperimen, dan membangun sesuatu merupakan bagian yang selalu ada dalam perjalanan saya.",
    tags: ["LEARN", "EXPERIMENT", "BUILD"],
    icon: Triangle,
  },
];

export default function Journey() {
  const { activeIndex, sectionRef } = useJourneyCarousel(chapters.length);

  return (
    <section
      ref={sectionRef}
      className="px-4 sm:px-6 bg-white min-h-[350vh] sm:min-h-[450vh] md:min-h-[500vh]"
    >
      <div className="max-w-6xl mx-auto sticky top-[-4rem] py-16 sm:py-20 md:top-[-5rem] md:py-8">
        <div className="text-center mb-10 sm:mb-16 md:mb-8">
          <span className="soft-pill inline-block px-4 py-1.5 rounded-full text-xs tracking-wider mb-4">
            MY JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-4xl leading-tight font-extrabold mb-4">Beyond Code</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Sekilas tentang hal-hal yang saya bangun, eksplorasi, dan terus pelajari di luar kode itu sendiri.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_auto] gap-5 sm:gap-8 items-start">
          {}
          <div className="relative h-[460px] sm:h-[540px] md:h-[500px]">
            {chapters.map((chapter, i) => {
              const Icon = chapter.icon;
              const offset = i - activeIndex;
              const isActive = i === activeIndex;

              return (
                <div
                  key={i}
                  className="absolute inset-0 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-border shadow-lg transition-all duration-500"
                  style={{
                    transform: `translateY(${offset * 20}px) scale(${1 - Math.abs(offset) * 0.03})`,
                    zIndex: chapters.length - Math.abs(offset),
                    opacity: isActive ? 1 : 0.5,
                  }}
                >
                  <div className="flex justify-between items-start mb-5 sm:mb-8">
                    <div>
                      <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary/25">
                        {chapter.num} <span className="text-xl sm:text-2xl">/ 07</span>
                      </p>
                      <p className="text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] text-muted mt-2">CHAPTER {chapter.num}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] text-accent font-semibold">{chapter.category}</p>
                    </div>
                  </div>

                  <h3 className="text-4xl sm:text-5xl md:text-4xl font-extrabold mb-4 sm:mb-6 leading-tight">{chapter.title}</h3>
                  <p className="text-base text-muted leading-relaxed mb-6 sm:mb-8 max-w-xl">{chapter.desc}</p>

                  <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap gap-2">
                      {chapter.tags.map((tag) => (
                        <span
                          key={tag}
                          className="soft-pill px-3 py-1 rounded-full text-[10px] tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {chapter.cta && (
                      <button className="text-xs tracking-[2px] font-semibold text-primary hover:text-accent transition-colors">
                        {chapter.cta} →
                      </button>
                    )}
                  </div>

                  {}
                  <div className="absolute top-6 right-6 sm:top-10 sm:right-10 opacity-10">
                    <Icon size={64} strokeWidth={1} className="sm:hidden" />
                    <Icon size={80} strokeWidth={1} className="hidden sm:block" />
                  </div>
                </div>
              );
            })}
          </div>

          {}
          <div className="sticky top-32 pt-4 md:pt-0 text-center md:text-right">
            <p className="text-3xl font-extrabold">
              {String(activeIndex + 1).padStart(2, "0")}{" "}
              <span className="text-muted">/ 07</span>
            </p>
            <p className="text-xs tracking-[3px] text-muted mt-2">JOURNEY</p>
          </div>
        </div>
      </div>
    </section>
  );
}