"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Sparkles, MessageSquare, Users, MessageCircle,
  Lightbulb, RefreshCw, LightbulbIcon, Clock
} from "lucide-react";

const softSkills = [
  {
    title: "LEADERSHIP",
    icon: Sparkles,
    desc: "Guiding teams, managing tasks, and driving project completion with shared vision.",
  },
  {
    title: "PUBLIC SPEAKING",
    icon: MessageSquare,
    desc: "Confident stage presence, anchoring summits, and delivering articulate technical ideas.",
  },
  {
    title: "TEAM COLLABORATION",
    icon: Users,
    desc: "Collaborating across fields, building racing carts, and engineering code in sync.",
  },
  {
    title: "COMMUNICATION",
    icon: MessageCircle,
    desc: "Clear, concise, and structured interactions in both business and technical contexts.",
  },
  {
    title: "PROBLEM SOLVING",
    icon: Lightbulb,
    desc: "Breaking down complex engineering tasks into clean, logical, and modular pieces.",
  },
  {
    title: "ADAPTABILITY",
    icon: RefreshCw,
    desc: "Quick to pick up new frameworks like FastAPI, Spring Boot, or automation tools like n8n.",
  },
  {
    title: "CREATIVITY",
    icon: LightbulbIcon,
    desc: "Blending cinematic aesthetics with software structure to build premium experiences.",
  },
  {
    title: "TIME MANAGEMENT",
    icon: Clock,
    desc: "Balancing B.Tech studies, event hosting, and developing robust software platforms.",
  },
];

export default function SoftSkills() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 border border-border rounded-full text-xs tracking-wider text-muted mb-4">
            Core Competencies
          </span>
          <h2 className="text-5xl font-extrabold mb-4">PROFESSIONAL SOFT SKILLS</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Essential traits that make me an effective engineer, coordinator, and communicator.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={i}
                className="stagger-item bg-white rounded-2xl p-8 border border-border hover:border-accent/30 hover:shadow-[0_0_30px_rgba(196,90,26,0.1)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-bg rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-accent/10 transition-colors">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="font-bold text-center mb-3 tracking-wider">{skill.title}</h3>
                <p className="text-sm text-muted text-center leading-relaxed">{skill.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}