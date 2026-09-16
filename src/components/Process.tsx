"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Lightbulb, Layout, Code2, Sparkles } from "lucide-react";

const stages = [
  {
    num: "01",
    title: "Understand",
    icon: Lightbulb,
    desc: "Saya memulai dengan memahami ide, masalah, dan hasil yang ingin dicapai oleh pengalaman akhir. Saya memecah ide tersebut menjadi tujuan yang jelas sebelum menulis kode.",
    tags: ["IDEA", "GOALS", "REQUIREMENTS"],
  },
  {
    num: "02",
    title: "Design",
    icon: Layout,
    desc: "Saya membentuk pengalaman sebelum membangunnya dengan memikirkan tata letak, hierarki visual, interaksi, dan perilaku responsif. Saya menggunakan alat seperti Figma untuk mengeksplorasi dan menyempurnakan antarmuka.",
    tags: ["UI/UX", "FIGMA", "LAYOUT", "INTERACTION"],
  },
  {
    num: "03",
    title: "Build",
    icon: Code2,
    desc: "Saya mengubah desain menjadi produk nyata menggunakan teknologi web modern. Saya berfokus pada struktur yang rapi, antarmuka responsif, komponen yang dapat digunakan kembali, dan penyelesaian masalah selama prosesnya.",
    tags: ["FRONTEND", "BACKEND", "COMPONENTS", "CODE"],
  },
  {
    num: "04",
    title: "Refine",
    icon: Sparkles,
    desc: "Setelah versi pertama berfungsi, saya menguji, meningkatkan, dan menyempurnakan detail agar pengalaman terasa lebih lancar. Saya memperhatikan performa, responsivitas, animasi, dan detail kecil yang membuat produk terasa lengkap.",
    tags: ["TESTING", "PERFORMANCE", "ANIMATION", "POLISH"],
  },
];

export default function Process() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="soft-pill inline-block px-4 py-1.5 rounded-full text-xs tracking-wider mb-4">
            MY PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-4xl leading-tight font-extrabold mb-4">Bagaimana Saya Membangun Pengalaman Digital</h2>
          <p className="text-muted max-w-2xl">
            Dari ide sederhana hingga pengalaman digital yang matang, saya memadukan pengembangan, desain, dan pemikiran kreatif di setiap tahap.
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

                  <div className={`bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-all ${
                    i === 2 ? "lg:h-[26rem]" : i === 3 ? "lg:h-[28rem]" : ""
                  }`}>
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
                          className="soft-pill px-3 py-1 rounded-full text-[10px] tracking-wider"
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