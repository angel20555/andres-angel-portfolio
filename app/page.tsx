import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import Education from "@/components/sections/Education";


export default function Home() {
  return (
    <main className="bg-zinc-950 text-white min-h-screen selection:bg-zinc-800">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Experience/>
      <Contact />
      <Footer />
    </main>
  );
}