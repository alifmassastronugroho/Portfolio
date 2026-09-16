"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Code2, Braces, Terminal, Globe, FileCode, Palette,
  Server, Zap, Database, GitBranch, Wrench, Settings,
  Cpu, BookOpen, Layers, Rocket, Film, Image, Camera
} from "lucide-react";

interface Skill {
  name: string;
  category: string;
  icon: React.ElementType;
  progress: number;
}

const skills: Skill[] = [
  { name: "GIT & GITHUB", category: "TOOLS & AUTOMATION", icon: GitBranch, progress: 88 },
  { name: "VS CODE", category: "TOOLS & AUTOMATION", icon: Wrench, progress: 95 },
  { name: "JAVA", category: "PROGRAMMING LANGUAGES", icon: Code2, progress: 85 },
  { name: "C++", category: "PROGRAMMING LANGUAGES", icon: Braces, progress: 75 },
  { name: "VIDEO EDITOR", category: "CREATIVE TOOLS", icon: Film, progress: 88 },
  { name: "FOTOGRAFI", category: "CREATIVE TOOLS", icon: Camera, progress: 82 },
  { name: "PYTHON", category: "PROGRAMMING LANGUAGES", icon: Terminal, progress: 80 },
  { name: "HTML", category: "FULL STACK", icon: FileCode, progress: 95 },
  { name: "CSS", category: "FULL STACK", icon: Palette, progress: 90 },
  { name: "JAVASCRIPT", category: "FULL STACK", icon: Code2, progress: 92 },
  { name: "FASTAPI", category: "BACKEND", icon: Zap, progress: 75 },
  { name: "REST APIS", category: "BACKEND", icon: Globe, progress: 85 },
  { name: "MYSQL", category: "DATABASES", icon: Database, progress: 80 },
  { name: "ALGORITHMS", category: "COMPUTER SCIENCE CONCEPTS", icon: Cpu, progress: 80 },
  { name: "SOFTWARE ENGINEERING", category: "COMPUTER SCIENCE CONCEPTS", icon: BookOpen, progress: 82 },
  { name: "DEPLOYMENT", category: "WORKFLOW", icon: Rocket, progress: 75 },
];

export default function Skills() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="skills" ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="soft-pill inline-block px-4 py-1.5 rounded-full text-xs tracking-wider mb-4">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-4xl leading-tight font-extrabold mb-4">MY SKILLS</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Gambaran menyeluruh tentang bahasa pemrograman, framework, basis data, dan konsep rekayasa yang saya kuasai.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={i}
                className="stagger-item bg-bg rounded-2xl p-6 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 mx-auto shadow-sm">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="font-bold text-sm text-center mb-1">{skill.name}</h3>
                <p className="text-[10px] text-muted text-center tracking-wider mb-3">
                  {skill.category}
                </p>
                <div className="h-1 bg-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent progress-fill"
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}