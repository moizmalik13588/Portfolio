"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#18181B] relative border-y border-[#E5E2DC] dark:border-[#27272A]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF9F6] dark:bg-[#121212] border border-[#E5E2DC] dark:border-[#27272A] text-xs font-mono text-[#6B6B6B] dark:text-[#A1A1AA] mb-4 shadow-xs">
            Career
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-[#1A1A1A] dark:text-[#E4E4E7] mb-4">
            Work Experience
          </h2>
          <p className="text-[#6B6B6B] dark:text-[#A1A1AA] text-base">
            Professional background and hands-on industry experience in software development.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="p-8 rounded-2xl bg-[#FAF9F6] dark:bg-[#121212] border border-[#E5E2DC] dark:border-[#27272A] shadow-xl relative overflow-hidden group hover:border-[#C2410C]/40 transition-all"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C2410C]/5 rounded-bl-full pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-[#C2410C]/10 dark:bg-[#EA580C]/10 border border-[#C2410C]/30 text-[#C2410C] dark:text-[#EA580C]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#1A1A1A] dark:text-[#E4E4E7]">Software Development Intern</h3>
                  <p className="text-[#C2410C] dark:text-[#EA580C] font-medium text-sm">SALUQ Enterprises</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start md:items-end gap-2 text-xs font-mono text-[#6B6B6B] dark:text-[#A1A1AA]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-[#18181B] border border-[#E5E2DC] dark:border-[#27272A]">
                <Calendar className="w-3.5 h-3.5 text-[#C2410C] dark:text-[#EA580C]" />
                2024 (6 Months)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-[#18181B] border border-[#E5E2DC] dark:border-[#27272A]">
                <MapPin className="w-3.5 h-3.5 text-[#C2410C] dark:text-[#EA580C]" />
                Karachi, Pakistan
              </span>
            </div>
          </div>

          <div className="space-y-3 text-[#6B6B6B] dark:text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
            <p>
              Trained extensively in backend engineering fundamentals, software design patterns, and enterprise-grade software development lifecycle.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 text-[#1A1A1A] dark:text-[#E4E4E7]">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C2410C] dark:text-[#EA580C] mt-1 shrink-0" />
                <span className="text-sm">Mastered TypeScript & robust backend architecture patterns.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C2410C] dark:text-[#EA580C] mt-1 shrink-0" />
                <span className="text-sm">Designed and implemented clean RESTful API structures.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C2410C] dark:text-[#EA580C] mt-1 shrink-0" />
                <span className="text-sm">Gained early exposure to LLM-based systems and AI agent workflows.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C2410C] dark:text-[#EA580C] mt-1 shrink-0" />
                <span className="text-sm">Collaborated in team code reviews and agile sprint planning.</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
