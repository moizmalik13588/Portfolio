"use client";

import React from "react";
import { Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#18181B] relative overflow-hidden text-center border-t border-[#E5E2DC] dark:border-[#27272A]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(194,65,12,0.06)_0,transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto relative z-10 p-10 sm:p-14 rounded-3xl bg-[#FAF9F6] dark:bg-[#121212] border border-[#E5E2DC] dark:border-[#27272A] shadow-2xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#18181B] border border-[#E5E2DC] dark:border-[#27272A] text-xs font-mono text-[#6B6B6B] dark:text-[#A1A1AA] mb-6 shadow-xs">
          Ready to Connect
        </div>

        <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-[#1A1A1A] dark:text-[#E4E4E7] mb-4">
          Let&apos;s Build Something Great
        </h2>

        <p className="text-base sm:text-lg text-[#6B6B6B] dark:text-[#A1A1AA] max-w-2xl mx-auto mb-10 leading-relaxed">
          Open to Full-Stack / Backend Developer roles — let&apos;s talk about how I can contribute to your engineering team with robust code and reliable delivery.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:moizmalik13588@gmail.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#1A1A1A] dark:bg-white text-white dark:text-[#1A1A1A] font-medium transition-all shadow-md hover:bg-[#C2410C] dark:hover:bg-[#EA580C] dark:hover:text-white group"
          >
            <Mail className="w-4 h-4" />
            Email Me
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white dark:bg-[#18181B] hover:bg-gray-50 dark:hover:bg-[#27272A] border border-[#E5E2DC] dark:border-[#27272A] text-[#1A1A1A] dark:text-[#E4E4E7] font-medium transition-all shadow-xs"
          >
            <svg className="w-4 h-4 fill-current text-[#C2410C] dark:text-[#EA580C]" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            Connect on LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
