"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  {
    period: "2024 - PRESENT",
    type: "PERSONAL",
    title: "Personal Projects",
    company: "INDEPENDENT",
    skills: ["Full Stack Development", "Frontend Development", "UI/UX", "Problem Solving"],
    tech: ["React", "JavaScript", "HTML", "CSS", "Figma", "Git / GitHub"],
  },
  {
    period: "2024 - PRESENT",
    type: "FREELANCE",
    title: "Freelance Developer",
    company: "FREELANCE",
    skills: ["Web Development", "Feature Implementation", "Bug Fixing", "UI/UX Improvement"],
    tech: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    period: "2024 - PRESENT",
    type: "INTERNSHIP",
    title: "Web Developer Intern",
    company: "WEB DEVELOPMENT INTERNSHIP",
    skills: ["Web Development", "Frontend Development", "Responsive Interfaces", "Team Collaboration"],
    tech: ["React", "JavaScript", "HTML", "CSS"],
  },
];

export default function Experience() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-4xl leading-tight font-extrabold mb-4">WORK EXPERIENCE</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Pengalaman langsung melalui proyek pribadi, pengembangan freelance, magang, dan latihan kreatif yang berkelanjutan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="stagger-item bg-white rounded-2xl p-8 border border-border hover:shadow-lg transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-mono text-muted tracking-wider">{exp.period}</span>
                <span className="soft-pill px-3 py-1 rounded-full text-[10px] tracking-wider font-semibold">
                  {exp.type}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
              <p className="text-accent text-sm font-semibold tracking-wider mb-6">{exp.company}</p>

              <div className="mb-6">
                <p className="text-[10px] tracking-[2px] text-muted mb-2">SKILLS GAINED:</p>
                <ul className="space-y-1">
                  {exp.skills.map((skill) => (
                    <li key={skill} className="text-sm text-muted flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-[10px] tracking-[2px] text-muted mb-2">TECHNOLOGIES:</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="soft-pill px-3 py-1 rounded-full text-[10px] tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}