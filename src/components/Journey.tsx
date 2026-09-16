"use client";

import { useJourneyCarousel } from "@/hooks/useJourneyCarousel";
import { Circle, Square, Triangle, Hexagon } from "lucide-react";

const chapters = [
  {
    num: "01",
    category: "EDUCATION",
    title: "Computer Science",
    desc: "I'm studying Computer Science at USTHB, building a strong foundation in programming, problem solving, algorithms, data structures, databases, and software development.",
    tags: ["USTHB"],
    icon: Circle,
    cta: "EXPLORE PROJECTS",
  },
  {
    num: "02",
    category: "BUILDING WORK",
    title: "Personal Projects",
    desc: "I learn by building. My personal projects give me a space to experiment with ideas, improve my development skills, and turn concepts into real digital experiences.",
    tags: ["BUILD", "LEARN", "IMPROVE"],
    icon: Square,
    cta: "EXPLORE PROJECTS",
  },
  {
    num: "03",
    category: "PROFESSIONAL",
    title: "Freelance Developer",
    desc: "Working on real development tasks has helped me improve how I approach problems, implement features, fix issues, and turn requirements into working solutions.",
    tags: ["WEB DEVELOPMENT", "CLIENT WORK", "PROBLEM SOLVING"],
    icon: Triangle,
  },
  {
    num: "04",
    category: "CREATIVE",
    title: "UI/UX & Visual Design",
    desc: "I enjoy exploring UI/UX, visual composition, and interface design. I like turning ideas into clean, intuitive experiences where design and functionality work together.",
    tags: ["Figma", "UI/UX", "Visual Design", "After Effects", "Photoshop", "Motion"],
    icon: Hexagon,
  },
  {
    num: "05",
    category: "MOTION",
    title: "Creative Editing & Motion",
    desc: "I also explore creative editing, motion, transitions, and visual storytelling. It gives me another way to experiment with timing, composition, and interaction.",
    tags: ["After Effects", "Photoshop", "Motion", "Visual Editing"],
    icon: Circle,
  },
  {
    num: "06",
    category: "EXPLORATION",
    title: "3D & Visualization",
    desc: "I explore 3D modeling, rendering, and visualization as another part of my creative side — combining technical thinking with visual experimentation.",
    tags: ["3D Modeling", "Rendering", "Visualization"],
    icon: Square,
  },
  {
    num: "07",
    category: "GROWTH",
    title: "Always Learning",
    desc: "I continuously explore new technologies, development techniques, design ideas, and creative tools. Learning, experimenting, and building are a constant part of my journey.",
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
      <div className="max-w-6xl mx-auto sticky top-[56%] -translate-y-1/2 py-16 sm:py-20 md:py-24">
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-4 py-1.5 border border-border rounded-full text-xs tracking-wider text-muted mb-4">
            MY JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-extrabold mb-4">Beyond Code</h2>
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

                  <h3 className="text-4xl sm:text-5xl md:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight">{chapter.title}</h3>
                  <p className="text-base text-muted leading-relaxed mb-6 sm:mb-8 max-w-xl">{chapter.desc}</p>

                  <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap gap-2">
                      {chapter.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-bg rounded-full text-[10px] tracking-wider text-muted border border-border"
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