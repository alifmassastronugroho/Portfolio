"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Lightbulb, Layout, Code2, Sparkles } from "lucide-react";

const stages = [
  {
    num: "01",
    title: "Understand",
    icon: Lightbulb,
    desc: "I start by understanding the idea, the problem, and what the final experience should achieve. I break the idea into clear goals before writing code.",
    tags: ["IDEA", "GOALS", "REQUIREMENTS"],
  },
  {
    num: "02",
    title: "Design",
    icon: Layout,
    desc: "I shape the experience before building it — thinking about layout, visual hierarchy, interactions, and responsive behavior. I use tools like Figma to explore and refine the interface.",
    tags: ["UI/UX", "FIGMA", "LAYOUT", "INTERACTION"],
  },
  {
    num: "03",
    title: "Build",
    icon: Code2,
    desc: "I turn the design into a real product using modern web technologies. I focus on clean structure, responsive interfaces, reusable components, and solving problems along the way.",
    tags: ["FRONTEND", "BACKEND", "COMPONENTS", "CODE"],
  },
  {
    num: "04",
    title: "Refine",
    icon: Sparkles,
    desc: "After the first version works, I test, improve, polish the details, and make the experience feel smoother. I care about performance, responsiveness, animations, and the small details that make a product feel complete.",
    tags: ["TESTING", "PERFORMANCE", "ANIMATION", "POLISH"],
  },
];

export default function Process() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="inline-block px-4 py-1.5 border border-border rounded-full text-xs tracking-wider text-muted mb-4">
            MY PROCESS
          </span>
          <h2 className="text-5xl font-extrabold mb-4">How I Build</h2>
          <p className="text-muted max-w-2xl">
            From a simple idea to a polished digital experience — I combine development, design, and creative thinking at every stage.
          </p>
        </div>

        {}
        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-accent"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stages.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <div key={i} className="stagger-item relative">
                  {}
                  <div className="hidden lg:flex absolute -top-10 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-bg z-10"></div>

                  <div className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-all">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                        <Icon size={24} className="text-accent" />
                      </div>
                      <span className="text-xs text-muted font-mono">STAGE {stage.num}</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-3">{stage.title}</h3>
                    <p className="text-sm text-muted leading-relaxed mb-4">{stage.desc}</p>

                    <div className="flex flex-wrap gap-2">
                      {stage.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-bg rounded-full text-[10px] tracking-wider text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}