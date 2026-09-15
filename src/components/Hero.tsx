"use client";

import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import { ArrowRight, FileText, Camera, Music, Gamepad2 } from "lucide-react";

export default function Hero() {
  const roles = ["Frontend Developer", "Full Stack Developer", "Backend Developer"];
  const typedText = useTypingAnimation(roles, 100, 50, 2000);

  return (
    <section id="home" className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {}
        <div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Hi, I&apos;m ALIF MAS SASTRO NUGROHO,
            <br />
            <span className="inline-block min-w-[300px]">
              {typedText}
              <span className="typing-cursor"></span>
            </span>
          </h1>

          <p className="text-lg text-muted mb-8 max-w-md">
            I build considered digital experiences with a clean, modern point of view.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <button className="px-8 py-3 bg-primary text-white rounded-full font-semibold flex items-center gap-2 hover:bg-accent transition-colors">
              View My Work <ArrowRight size={16} />
            </button>
            <button className="px-8 py-3 border-2 border-border rounded-full font-semibold hover:border-primary transition-colors">
              Contact Me
            </button>
            <button className="px-8 py-3 border-2 border-border rounded-full font-semibold flex items-center gap-2 hover:border-primary transition-colors">
              <FileText size={16} /> View Resume
            </button>
          </div>

          <div className="flex gap-3">
            {[Camera, Music, Gamepad2].map((Icon, i) => (
              <button
                key={i}
                className="w-10 h-10 rounded-full border-2 border-border flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white transition-all"
              >
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>

        {}
        <div className="relative">
          <div className="bg-primary rounded-3xl p-4 shadow-2xl">
            <div className="bg-white rounded-2xl overflow-hidden relative aspect-[4/3]">
              {}
              <div className="absolute top-3 left-4 right-4 flex justify-between items-center z-10">
                <span className="text-[10px] tracking-[2px] font-mono text-muted">
                  <span className="text-accent">●</span> ALIF MAS SASTRO NUGROHO
                </span>
                <span className="text-[10px] tracking-[2px] font-mono text-muted">
                  <span className="text-yellow-500">●</span> ON
                </span>
              </div>
              {}
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center text-6xl font-bold text-white">
                    A
                  </div>
                  <p className="mt-4 text-sm text-muted font-mono tracking-wider">
                    ● ● ● ● ● ● ● ● ● ● ● ●
                  </p>
                </div>
              </div>
            </div>
            {}
            <div className="flex justify-center gap-16 mt-2">
              <div className="w-16 h-3 bg-primary rounded-full"></div>
              <div className="w-16 h-3 bg-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {}
      <div className="flex justify-center mt-12 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
}