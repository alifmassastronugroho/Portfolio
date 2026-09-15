"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Sparkles } from "lucide-react";

export default function About() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className="py-24 px-6 relative">
      {}
      <Sparkles className="absolute top-20 right-20 w-8 h-8 text-muted opacity-50" />
      <Sparkles className="absolute bottom-20 left-20 w-8 h-8 text-muted opacity-50" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-1 h-16 bg-primary mx-auto"></div>
            <div className="w-4 h-4 bg-white border-2 border-primary rounded mx-auto -mt-1"></div>
            <div className="hanging-card bg-white rounded-2xl p-4 shadow-xl border border-border mt-2">
              <div className="w-64 h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                <div className="text-8xl font-bold text-gray-700">A</div>
              </div>
            </div>
          </div>
        </div>

        {}
        <div>
          <h2 className="text-5xl font-extrabold mb-6">Hello!</h2>
          <p className="text-lg mb-4">
            <span className="text-accent font-semibold">
              Hi, my name is ALIF MAS SASTRO NUGROHO. I care about building clear, useful, and refined digital products.
            </span>
          </p>
          <p className="text-muted leading-relaxed mb-4">
            I am interested in the space where thoughtful design and practical engineering meet. I like turning an early idea into a clear experience that feels useful, calm, and intentional.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            My approach is hands-on: understand the problem, shape the structure, build carefully, and keep improving the details that make a product easier to use. I value readable work, strong collaboration, and interfaces that communicate without unnecessary noise.
          </p>
          <p className="text-muted leading-relaxed">
            Outside the code itself, I enjoy the visual side of digital work: pacing, composition, motion, and the small interactions that give a project its character.
          </p>
        </div>
      </div>
    </section>
  );
}