"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Phone, Mail, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const ref = useScrollReveal<HTMLElement>();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // TODO: Integrate with email service
    alert("Message sent! (Demo)");
    setForm({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <section id="contact" ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        {}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            <span className="text-xs tracking-[3px] text-accent font-semibold">LET&apos;S CONNECT</span>
          </div>

          <h2 className="text-6xl md:text-7xl font-extrabold leading-tight mb-6">
            Mari membangun sesuatu yang bermakna.
          </h2>
          <div className="w-20 h-1 bg-accent mb-6"></div>

          <p className="text-muted text-lg mb-12">
            Punya ide, proyek, atau sekadar ingin terhubung? Jangan ragu untuk menghubungi saya.
          </p>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-border"></div>
            <span className="text-xs tracking-[3px] text-muted font-mono">
              ALIF MAS SASTRO NUGROHO / AVAILABLE FOR NEW PROJECTS
            </span>
          </div>

          <div className="flex gap-3 mb-4">
            <button className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white transition-all">
              <Phone size={18} />
            </button>
            <button className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white transition-all">
              <Mail size={18} />
            </button>
          </div>

          <p className="text-sm text-muted flex items-center gap-2">
            <Mail size={14} /> aminecodes1@gmail.com
          </p>
        </div>

        {}
        <div className="bg-bg rounded-3xl p-10 border border-border">
          <div className="flex items-center gap-2 mb-4">
            <Mail size={14} className="text-accent" />
            <span className="text-xs tracking-[3px] text-accent font-semibold">START A CONVERSATION</span>
          </div>

          <h3 className="text-3xl font-bold mb-2">Tell me about your idea.</h3>
          <p className="text-sm text-muted mb-8">Isi detail di bawah ini dan saya akan menghubungi Anda kembali.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold mb-2 block">First name</label>
                <input
                  type="text"
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  placeholder="Alif Mas Sastro Nugroho"
                  className="w-full bg-transparent border-b-2 border-border py-2 focus:border-accent outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-semibold mb-2 block">Last name</label>
                <input
                  type="text"
                  value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  placeholder="Your last name"
                  className="w-full bg-transparent border-b-2 border-border py-2 focus:border-accent outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold mb-2 block">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full bg-transparent border-b-2 border-border py-2 focus:border-accent outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="text-xs font-semibold mb-2 block flex justify-between">
                <span>Message</span>
                <span className="text-muted">{form.message.length}</span>
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me what you're thinking..."
                rows={5}
                className="w-full bg-white rounded-xl border border-border p-4 focus:border-accent outline-none transition-colors resize-none"
                required
              ></textarea>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                <span className="text-[10px] tracking-[2px] text-muted font-semibold">
                  USUALLY REPLIES VIA EMAIL
                </span>
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-primary text-white rounded-full font-semibold flex items-center gap-2 hover:bg-accent transition-colors"
              >
                SEND MESSAGE <Send size={14} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}