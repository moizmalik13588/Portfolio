import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import WhatIBring from "@/sections/WhatIBring";
import About from "@/sections/About";
import TechStack from "@/sections/TechStack";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Education from "@/sections/Education";
import FinalCTA from "@/sections/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0E14] dark:bg-[#0A0E14] light:bg-[#F8FAFC] text-[#F3F4F6] dark:text-[#F3F4F6] light:text-[#111827] font-sans selection:bg-[#0EA5E9] selection:text-white transition-colors duration-300">
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
      </main>
      <Footer />
    </div>
  );
}
