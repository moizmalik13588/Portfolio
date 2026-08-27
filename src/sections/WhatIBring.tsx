"use client";

import React from "react";
import { Layers, ShieldCheck, Cpu, FileCode, Zap, Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatIBring() {
  const cards = [
    {
      icon: <Layers className="w-5 h-5 text-[#C2410C]" />,
      title: "Full Ownership, End to End",
      description:
        "Designs, builds, and deploys — frontend, backend, database, and infrastructure — without handing off components to someone else.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#C2410C]" />,
      title: "Production-Grade, Not Tutorial-Grade",
      description:
        "Every project ships with real authentication, real payment/notification integrations, and live cloud deployment — never just a localhost demo.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#C2410C]" />,
      title: "Practical AI Integration",
      description:
        "Voice agents, LLM-powered features, and sentiment analytics engineered to solve actual workflow friction, not bolted on as hollow buzzwords.",
    },
    {
      icon: <FileCode className="w-5 h-5 text-[#C2410C]" />,
      title: "Clean & Documented Code",
      description:
        "Comprehensive Swagger API docs, clean architectural patterns, and structured commit histories that any teammate can pick up immediately.",
    },
    {
      icon: <Zap className="w-5 h-5 text-[#C2410C]" />,
      title: "Fast Learner, Faster Shipper",
      description:
        "Rapidly transitions from unfamiliar stacks to deployed features — evidenced by the diverse array of technologies mastered across these projects.",
    },
    {
      icon: <Lock className="w-5 h-5 text-[#C2410C]" />,
      title: "Security-Conscious by Default",
      description:
        "JWT token rotation with reuse detection, email OTP 2FA, role-based access control, and strict multi-tenant isolation built in from day one.",
    },
  ];

  return (
    <section id="what-i-bring" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#18181B] relative border-y border-[#E5E2DC] dark:border-[#27272A]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C2410C] mb-2 font-medium inline-block">
            WHY WORK WITH ME
          </span>
          <h2 className="text-3xl sm:text-4xl text-[#1A1A1A] dark:text-[#E4E4E7] mb-4">
            What I Bring to a Team
          </h2>
          <p className="text-[#71717A] dark:text-[#A1A1AA] text-base font-sans">
            Core engineering principles and professional qualities I deliver to every project and engineering team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-7 rounded-2xl bg-[#F5F3EF] dark:bg-[#121212] border border-[#E5E2DC] dark:border-[#27272A] hover:border-[#C2410C]/40 transition-all shadow-none flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-[#C2410C]/10 border border-[#C2410C]/20 group-hover:bg-[#C2410C]/20 transition-colors shrink-0">
                    {card.icon}
                  </div>
                  <h3 className="!font-sans font-bold text-base md:text-lg text-[#1A1A1A] dark:text-[#E4E4E7] tracking-tight leading-snug">
                    {card.title}
                  </h3>
                </div>
                <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] leading-relaxed font-sans mt-3">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
