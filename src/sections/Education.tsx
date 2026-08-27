"use client";

import React from "react";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF9F6] dark:bg-[#121212] relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C2410C] mb-2 font-medium inline-block">
            ACADEMIC BACKGROUND
          </span>
          <h2 className="text-3xl sm:text-4xl text-[#1A1A1A] dark:text-[#E4E4E7] mb-4">
            Education & Certifications
          </h2>
          <p className="text-[#71717A] dark:text-[#A1A1AA] text-base font-sans">
            Formal computer science education and national academic achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Degree */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-7 rounded-2xl bg-[#F5F3EF] dark:bg-[#18181B] border border-[#E5E2DC] dark:border-[#27272A] shadow-none flex flex-col justify-between hover:border-[#C2410C]/40 transition-all"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-[#C2410C]/10 border border-[#C2410C]/30 text-[#C2410C] shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="!font-sans font-bold text-base md:text-lg text-[#1A1A1A] dark:text-[#E4E4E7] tracking-tight">
                    BS Computer Science
                  </h3>
                  <p className="text-xs font-mono text-[#C2410C] tracking-wide">Sindh Madressatul Islam University (SMIU)</p>
                </div>
              </div>

              <div className="space-y-2 text-sm text-[#71717A] dark:text-[#A1A1AA] mb-6 font-sans">
                <div className="flex items-center justify-between text-xs font-mono text-[#1A1A1A] dark:text-[#E4E4E7] tracking-wide bg-white dark:bg-[#121212] p-3 rounded-lg border border-[#E5E2DC] dark:border-[#27272A]">
                  <span>CGPA: 3.3 / 4.0</span>
                  <span>Graduation: June 2026</span>
                </div>
                <p className="text-sm pt-2 leading-relaxed text-[#52525B] dark:text-[#A1A1AA]">
                  Rigorous curriculum covering data structures, algorithms, database systems, software engineering, and modern web architectures.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#71717A] dark:text-[#A1A1AA] tracking-wide pt-4 border-t border-[#E5E2DC] dark:border-[#27272A]">
              <MapPin className="w-3.5 h-3.5 text-[#C2410C]" />
              Karachi, Pakistan
            </div>
          </motion.div>

          {/* HEC NCST */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-7 rounded-2xl bg-[#F5F3EF] dark:bg-[#18181B] border border-[#E5E2DC] dark:border-[#27272A] shadow-none flex flex-col justify-between hover:border-[#C2410C]/40 transition-all"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-[#C2410C]/10 border border-[#C2410C]/30 text-[#C2410C] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="!font-sans font-bold text-base md:text-lg text-[#1A1A1A] dark:text-[#E4E4E7] tracking-tight">
                    HEC National Computing Skills Test
                  </h3>
                  <p className="text-xs font-mono text-[#C2410C] tracking-wide">Higher Education Commission Pakistan</p>
                </div>
              </div>

              <div className="space-y-2 text-sm text-[#71717A] dark:text-[#A1A1AA] mb-6 font-sans">
                <div className="flex items-center justify-between text-xs font-mono text-[#C2410C] tracking-wide bg-white dark:bg-[#121212] p-3 rounded-lg border border-[#E5E2DC] dark:border-[#27272A]">
                  <span>Percentile: 92.2</span>
                  <span>Top ~8% Nationally</span>
                </div>
                <p className="text-sm pt-2 leading-relaxed text-[#52525B] dark:text-[#A1A1AA]">
                  Demonstrated exceptional aptitude and technical competence across core computing disciplines in the rigorous national examination.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#71717A] dark:text-[#A1A1AA] tracking-wide pt-4 border-t border-[#E5E2DC] dark:border-[#27272A]">
              <Calendar className="w-3.5 h-3.5 text-[#C2410C]" />
              Nationwide Assessment
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
