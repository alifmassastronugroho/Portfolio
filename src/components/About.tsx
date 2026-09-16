"use client";

import Image from "next/image";
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
              <div className="w-64 h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden">
                <Image
                  src="/alif.jpg"
                  alt="Alif Mas Sastro Nugroho"
                  width={720}
                  height={708}
                  sizes="256px"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        {}
        <div className="max-w-xl">
          <h2 className="text-5xl font-extrabold mb-6">Hello!</h2>
          <p className="text-lg mb-5">
            <span className="text-accent font-semibold">
              Hai, saya Alif Mas Sastro Nugroho. Saya peduli pada proses membangun produk digital yang jelas, bermanfaat, dan matang.
            </span>
          </p>
          <p className="text-muted leading-relaxed mb-5">
            Saya tertarik pada desain yang penuh pertimbangan dan rekayasa praktis. Bagi saya, gagasan yang baik perlu diolah menjadi pengalaman yang jelas, tenang, dan terarah.
          </p>
          <p className="text-muted leading-relaxed mb-5">
            Pendekatan saya sederhana: memahami masalah, menyusun struktur, membangun dengan cermat, lalu menyempurnakan detail yang membuat produk lebih mudah digunakan. Saya menghargai pekerjaan yang mudah dipahami dan kolaborasi yang kuat.
          </p>
          <p className="text-muted leading-relaxed">
            Di luar kode, saya menikmati sisi visual dari pekerjaan digital: ritme, komposisi, gerakan, dan interaksi kecil yang memberi karakter pada sebuah proyek.
          </p>
        </div>
      </div>
    </section>
  );
}