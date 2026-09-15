import Preloader from "@/components/Preloader";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Journey from "@/components/Journey";
import SoftSkills from "@/components/SoftSkills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-bg">
      <Preloader />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Process />
      <Projects />
      <Experience />
      <Journey />
      <SoftSkills />
      <Contact />
      <Footer />
    </main>
  );
}