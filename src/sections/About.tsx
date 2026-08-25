"use client";

import React from "react";
import { Mail, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF9F6] dark:bg-[#121212] relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#18181B] border border-[#E5E2DC] dark:border-[#27272A] text-xs font-mono text-[#6B6B6B] dark:text-[#A1A1AA] mb-4 shadow-xs">
            Who&apos;s building this
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-[#1A1A1A] dark:text-[#E4E4E7] mb-2">
            Muhammad Moiz
          </h2>
          <p className="text-sm font-mono text-[#C2410C] dark:text-[#EA580C]">
            Full-Stack Developer & Backend Engineer · Karachi, Pakistan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Avatar / Profile Card Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-4 p-8 rounded-2xl bg-white dark:bg-[#18181B] border border-[#E5E2DC] dark:border-[#27272A] shadow-xl text-center flex flex-col items-center"
          >
            <div className="relative w-36 h-36 aspect-square rounded-2xl overflow-hidden mb-6 shadow-md border-2 border-[#C2410C]/30 bg-gray-100 dark:bg-zinc-800">
              <Image
                src="/moiz-dp.jpg"
                alt="Muhammad Moiz"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#1A1A1A] dark:text-[#E4E4E7] mb-1">Muhammad Moiz</h3>
            <p className="text-xs font-mono text-[#6B6B6B] dark:text-[#A1A1AA] mb-6">
              BS Computer Science (SMIU, 2026)
            </p>

            <div className="w-full flex items-center justify-center gap-3 pt-6 border-t border-[#E5E2DC] dark:border-[#27272A]">
              <a
                href="https://github.com/moizmalik13588"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#FAF9F6] dark:bg-[#121212] border border-[#E5E2DC] dark:border-[#27272A] text-[#1A1A1A] dark:text-[#E4E4E7] hover:text-[#C2410C] transition-colors flex items-center justify-center"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#FAF9F6] dark:bg-[#121212] border border-[#E5E2DC] dark:border-[#27272A] text-[#1A1A1A] dark:text-[#E4E4E7] hover:text-[#C2410C] transition-colors flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="mailto:moizmalik13588@gmail.com"
                className="p-2.5 rounded-full bg-[#FAF9F6] dark:bg-[#121212] border border-[#E5E2DC] dark:border-[#27272A] text-[#1A1A1A] dark:text-[#E4E4E7] hover:text-[#C2410C] transition-colors flex items-center justify-center"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Bio Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-8 p-8 rounded-2xl bg-white dark:bg-[#18181B] border border-[#E5E2DC] dark:border-[#27272A] shadow-xl space-y-4 text-[#6B6B6B] dark:text-[#A1A1AA] text-base leading-relaxed"
          >
            <p>
              I am a Karachi-based Full-Stack Developer and Backend Engineer graduating with a BS in Computer Science from Sindh Madressatul Islam University (SMIU) in June 2026. My academic journey is backed by scoring in the 92.2 percentile in the HEC National Computing Skills Test (NCST), placing in the top ~8% nationwide.
            </p>
            <p>
              During my 6-month software development internship at SALUQ Enterprises, I gained hands-on experience in backend engineering fundamentals, TypeScript architecture patterns, API design, and early exposure to LLM-based systems and AI agent workflows.
            </p>
            <p>
              I specialize in designing scalable backend architectures, crafting secure REST APIs, and building production-grade web applications equipped with real-world authentication, payment gateways, and AI integrations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#E5E2DC] dark:border-[#27272A] text-[#1A1A1A] dark:text-[#E4E4E7]">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#C2410C] dark:text-[#EA580C]" />
                <span>Scalable Backend Systems</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#C2410C] dark:text-[#EA580C]" />
                <span>AI & LLM Workflows</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#C2410C] dark:text-[#EA580C]" />
                <span>PostgreSQL, Redis & Prisma</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#C2410C] dark:text-[#EA580C]" />
                <span>Docker & Cloud Deployment</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
