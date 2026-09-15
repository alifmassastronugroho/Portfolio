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
              Hai, Nama saya ALIF MAS SASTRO NUGROHO. Saya peduli dalam membangun produk digital yang jelas, bermanfaat, dan matang.
            </span>
          </p>
          <p className="text-muted leading-relaxed mb-4">
            Saya tertarik pada titik temu antara desain yang penuh pertimbangan dan rekayasa praktis. Saya senang mengubah gagasan awal menjadi pengalaman yang jelas, bermanfaat, tenang, dan terarah.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            Pendekatan saya bersifat langsung: memahami masalah, menyusun struktur, membangun dengan cermat, dan terus menyempurnakan detail yang membuat produk lebih mudah digunakan. Saya menghargai pekerjaan yang mudah dipahami, kolaborasi yang kuat, serta antarmuka yang berkomunikasi tanpa kerumitan yang tidak perlu.
          </p>
          <p className="text-muted leading-relaxed">
            Di luar kode itu sendiri, saya menikmati sisi visual dari pekerjaan digital: ritme, komposisi, gerakan, dan interaksi kecil yang memberikan karakter pada sebuah proyek.
          </p>
        </div>
      </div>
    </section>
  );
}