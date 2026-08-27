"use client";

import React from "react";
import { Code2, Server, Database, Cloud, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function TechStack() {
  const categories = [
    {
      name: "Frontend",
      icon: <Code2 className="w-5 h-5 text-[#C2410C]" />,
      skills: ["React 19", "Next.js 15/16", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "Redux Toolkit"],
    },
    {
      name: "Backend",
      icon: <Server className="w-5 h-5 text-[#C2410C]" />,
      skills: ["Node.js", "Express.js", "RESTful APIs", "WebSockets", "JWT & OAuth", "BullMQ"],
    },
    {
      name: "Databases & ORM",
      icon: <Database className="w-5 h-5 text-[#C2410C]" />,
      skills: ["PostgreSQL", "Prisma ORM", "Redis", "PgBouncer", "MongoDB", "SQL Optimization"],
    },
    {
      name: "DevOps & Cloud",
      icon: <Cloud className="w-5 h-5 text-[#C2410C]" />,
      skills: ["Docker", "AWS EC2", "Nginx", "Vercel", "Linux", "Git & GitHub CI/CD"],
    },
    {
      name: "AI & APIs",
      icon: <Cpu className="w-5 h-5 text-[#C2410C]" />,
      skills: ["Groq LLM API", "Vapi.ai Voice Agents", "Stripe Webhooks", "Twilio API", "Swagger / OpenAPI"],
    },
  ];

  return (
    <section id="tech" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF9F6] dark:bg-[#121212] relative border-y border-[#E5E2DC] dark:border-[#27272A]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C2410C] mb-2 font-medium inline-block">
            EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl text-[#1A1A1A] dark:text-[#E4E4E7] mb-4">
            Technical Stack & Tools
          </h2>
          <p className="text-[#71717A] dark:text-[#A1A1AA] text-base font-sans">
            Technologies and frameworks I use to engineer robust, high-performance web applications and backend systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[#F5F3EF] dark:bg-[#18181B] border border-[#E5E2DC] dark:border-[#27272A] hover:border-[#C2410C]/40 transition-all shadow-none flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-[#C2410C]/10 border border-[#C2410C]/20 shrink-0">
                    {cat.icon}
                  </div>
                  <h3 className="!font-sans font-bold text-base md:text-lg text-[#1A1A1A] dark:text-[#E4E4E7] tracking-tight leading-snug">
                    {cat.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-white dark:bg-[#121212] border border-[#E5E2DC] dark:border-[#27272A] text-xs font-mono text-[#71717A] dark:text-[#A1A1AA] tracking-wide hover:text-[#1A1A1A] dark:hover:text-white hover:border-[#C2410C]/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
