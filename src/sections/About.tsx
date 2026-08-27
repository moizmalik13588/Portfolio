"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FileText, Mail } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF9F6] dark:bg-[#121212] relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start max-w-4xl mx-auto"
      >
        {/* Left Column: Image Container */}
        <div className="w-full flex flex-col items-start">
          <Image
            src="/moiz-dp.png"
            alt="Muhammad Moiz"
            width={190}
            height={190}
            className="w-[170px] h-[170px] md:w-[190px] md:h-[190px] object-contain mb-6"
            priority
          />
        </div>

        {/* Right Column: Hierarchy */}
        <div className="text-left">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C2410C] mb-2 font-medium inline-block">
            WHO BUILDS THIS
          </span>
          <h2 className="font-serif font-normal text-3xl text-[#1A1A1A] dark:text-[#E4E4E7] tracking-[-0.04em] mb-1">
            Muhammad Moiz
          </h2>
          <p className="text-xs sm:text-sm text-[#71717A] dark:text-[#A1A1AA] mb-4 font-sans">
            Full-Stack Developer & Backend Engineer · Karachi, Pakistan
          </p>

          <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] leading-relaxed mb-6 font-sans">
            Karachi-based Full-Stack Developer & Backend Engineer graduating from SMIU (top ~8% nationwide in HEC NCST). Specialized in scalable backend architectures, high-performance REST APIs, and production AI integrations.
          </p>

          <div className="flex flex-row items-center gap-3 mt-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#E5E2DC] dark:border-[#27272A] bg-white dark:bg-[#18181B] px-5 py-2 text-xs font-medium text-[#1A1A1A] dark:text-[#E4E4E7] hover:bg-[#F5F3EF] dark:hover:bg-zinc-800 shadow-none transition-colors inline-flex items-center gap-2"
            >
              <FileText className="w-3.5 h-3.5 text-[#C2410C]" />
              View Resume
            </a>
            <a
              href="mailto:moizmalik13588@gmail.com"
              className="rounded-full border border-[#E5E2DC] dark:border-[#27272A] bg-white dark:bg-[#18181B] px-5 py-2 text-xs font-medium text-[#1A1A1A] dark:text-[#E4E4E7] hover:bg-[#F5F3EF] dark:hover:bg-zinc-800 shadow-none transition-colors inline-flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5 text-[#C2410C]" />
              Get in Touch
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
