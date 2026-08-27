"use client";

import React from "react";
import { Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF9F6] dark:bg-[#121212] text-[#1A1A1A] dark:text-[#E4E4E7] relative text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(194,65,12,0.04)_0,transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto relative z-10 p-10 sm:p-14 rounded-3xl bg-[#F5F3EF] dark:bg-[#18181B] border border-[#E5E2DC] dark:border-[#27272A] shadow-none"
      >
        <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C2410C] mb-2 font-medium inline-block">
          GET IN TOUCH
        </span>

        <h2 className="font-serif font-normal text-3xl sm:text-4xl text-[#1A1A1A] dark:text-[#E4E4E7] tracking-[-0.04em] leading-[1.05] mb-4">
          Let&apos;s Build Something Together
        </h2>

        <p className="text-base text-[#71717A] dark:text-[#A1A1AA] max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
          Open to Full-Stack & Backend Developer roles — let&apos;s talk about building robust software together.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:moizmalik13588@gmail.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#1A1A1A] dark:bg-white text-white dark:text-[#1A1A1A] text-sm font-sans font-medium transition-all hover:bg-[#C2410C] dark:hover:bg-[#EA580C] group shadow-none"
          >
            <Mail className="w-4 h-4" />
            Email Me
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white dark:bg-[#121212] hover:bg-[#F5F3EF] dark:hover:bg-zinc-800 border border-[#E5E2DC] dark:border-[#27272A] text-[#1A1A1A] dark:text-[#E4E4E7] text-sm font-sans font-medium transition-all shadow-none"
          >
            <svg className="w-4 h-4 fill-current text-[#C2410C]" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            Connect on LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
