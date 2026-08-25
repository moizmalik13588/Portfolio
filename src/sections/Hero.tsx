"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, FileText } from "lucide-react";
import { motion } from "framer-motion";

const words = [
  "Building Scalable Systems",
  "Developing High-Performance APIs",
  "Crafting Full-Stack Applications",
  "Engineering Data Pipelines",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  const typingSpeed = 90;
  const deletingSpeed = 45;
  const pauseTime = 2200;

  useEffect(() => {
    const currentWord = words[index];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, subIndex + 1));
        setSubIndex((prev) => prev + 1);
        if (subIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setText(currentWord.substring(0, subIndex - 1));
        setSubIndex((prev) => prev - 1);
        if (subIndex - 1 === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#FAF9F6] dark:bg-[#121212]">
      {/* Subtle editorial background texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e2dc30_1px,transparent_1px),linear-gradient(to_bottom,#e5e2dc30_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#27272a30_1px,transparent_1px),linear-gradient(to_bottom,#27272a30_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C2410C]/5 dark:bg-[#EA580C]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-[#18181B] border border-[#E5E2DC] dark:border-[#27272A] text-xs font-mono text-[#6B6B6B] dark:text-[#A1A1AA] mb-8 shadow-xs"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for Full-Stack & Backend Opportunities</span>
        </motion.div>

        {/* Editorial Serif Headline with Typewriter */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#1A1A1A] dark:text-[#E4E4E7] mb-6 leading-[1.2] min-h-[3.2em] sm:min-h-[2.4em] flex flex-col items-center justify-center"
        >
          <span className="mb-2">Full-Stack Excellence:</span>
          <span>
            <span className="italic text-[#C2410C] dark:text-[#EA580C]">{text}</span>
            <span className="animate-pulse ml-0.5 text-[#C2410C] dark:text-[#EA580C] font-mono font-normal">|</span>
          </span>
        </motion.h1>

        {/* Subtext Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-[#6B6B6B] dark:text-[#A1A1AA] mb-10 max-w-3xl mx-auto leading-relaxed font-sans"
        >
          I engineer production-grade full-stack web applications, robust backend architectures, and practical AI integrations. No toy tutorials or clunky prototypes — just fast, secure, and fully documented software deployed in the real world.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#1A1A1A] dark:bg-white text-white dark:text-[#1A1A1A] font-medium transition-all shadow-md hover:bg-[#C2410C] dark:hover:bg-[#EA580C] dark:hover:text-white group"
          >
            View My Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white dark:bg-[#18181B] hover:bg-gray-50 dark:hover:bg-[#27272A] border border-[#E5E2DC] dark:border-[#27272A] text-[#1A1A1A] dark:text-[#E4E4E7] font-medium transition-all shadow-xs"
          >
            <FileText className="w-4 h-4 text-[#C2410C] dark:text-[#EA580C]" />
            Download Resume
          </a>
        </motion.div>

        {/* Horizontal Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto p-6 rounded-2xl bg-white dark:bg-[#18181B] border border-[#E5E2DC] dark:border-[#27272A] shadow-xl"
        >
          <div className="text-center md:border-r border-[#E5E2DC] dark:border-[#27272A] last:border-none pb-4 md:pb-0">
            <div className="text-3xl font-serif font-bold text-[#C2410C] dark:text-[#EA580C]">4+</div>
            <div className="text-xs font-mono text-[#6B6B6B] dark:text-[#A1A1AA] mt-1">Production Projects Shipped</div>
          </div>
          <div className="text-center md:border-r border-[#E5E2DC] dark:border-[#27272A] last:border-none pb-4 md:pb-0">
            <div className="text-3xl font-serif font-bold text-[#1A1A1A] dark:text-[#E4E4E7]">92.2%</div>
            <div className="text-xs font-mono text-[#6B6B6B] dark:text-[#A1A1AA] mt-1">HEC NCST Percentile (Top ~8%)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-serif font-bold text-[#C2410C] dark:text-[#EA580C]">6mo</div>
            <div className="text-xs font-mono text-[#6B6B6B] dark:text-[#A1A1AA] mt-1">Backend Engineering Internship</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
