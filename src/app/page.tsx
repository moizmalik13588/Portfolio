import Navbar from "@/components/Navbar";
import DynamicTitle from "@/components/DynamicTitle";
import Hero from "@/sections/Hero";
import WhatIBring from "@/sections/WhatIBring";
import About from "@/sections/About";
import TechStack from "@/sections/TechStack";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Education from "@/sections/Education";
import FinalCTA from "@/sections/FinalCTA";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] dark:bg-[#121212] text-[#1A1A1A] dark:text-[#E4E4E7] font-sans selection:bg-[#C2410C] selection:text-white transition-colors duration-300">
      <DynamicTitle />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <WhatIBring />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Education />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
