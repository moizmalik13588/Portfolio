"use client";

import React from "react";
import { ExternalLink, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Clinicore",
      tagline: "Multi-Tenant Clinic Management SaaS (Final Year Project)",
      description:
        "Comprehensive multi-tenant healthcare management SaaS equipped with AI voice receptionist and real-time patient analytics.",
      tech: ["React 19", "Node.js", "Express", "PostgreSQL", "Prisma", "Vapi AI", "Twilio"],
      highlights: [
        "AI voice receptionist (Vapi.ai) verifying availability and booking/cancelling appointments live.",
        "Multi-tenant architecture with RBAC and JWT dual-token authentication.",
        "Real-time mood/sentiment analytics with trend visualization.",
      ],
      liveUrl: "https://frontend-beta-amber-s2mrth6g7n.vercel.app",
      githubUrl: "https://github.com/moizmalik13588/Clinicore",
      badge: "Featured / FYP",
    },
    {
      title: "ShopHub",
      tagline: "Multi-Vendor E-Commerce Platform",
      description:
        "High-performance e-commerce marketplace featuring segregated portals for customers, vendors, and platform administrators.",
      tech: ["Next.js 16", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "NextAuth v5"],
      highlights: [
        "Multi-vendor marketplace with customer, vendor, and admin management portals.",
        "Secure Stripe payment processing with robust webhook event handling.",
        "Google OAuth + JWT + role-based route protection for secure transactions.",
      ],
      liveUrl: "https://shophub-store-pk.vercel.app",
      githubUrl: "https://github.com/moizmalik13588/ShopHub",
      badge: "E-Commerce",
    },
    {
      title: "PenCraft",
      tagline: "Production-Grade Blog Platform",
      description:
        "Robust publishing platform deployed on cloud infrastructure with advanced security features and API documentation.",
      tech: ["Next.js 15", "Node.js", "Express", "PostgreSQL", "AWS EC2", "Nginx"],
      highlights: [
        "Deployed on AWS EC2 with custom domain (pencraft.site) and SSL configuration.",
        "JWT access/refresh token rotation with reuse detection mechanisms.",
        "Email OTP 2FA and comprehensive Swagger API documentation.",
      ],
      liveUrl: "https://pencraft.site",
      githubUrl: "https://github.com/moizmalik13588/Pencraft",
      badge: "Production",
    },
    {
      title: "DevHire",
      tagline: "AI-Powered Job Board Platform",
      description:
        "Intelligent job board featuring AI resume review, real-time messaging, and horizontally scalable backend services.",
      tech: ["Node.js", "Express", "PostgreSQL", "Redis", "BullMQ", "Groq LLM", "Docker"],
      highlights: [
        "AI resume reviewer and JD generator powered by Groq LLM API.",
        "Real-time updates via WebSockets and Redis Pub/Sub architecture.",
        "Dockerized environment with Nginx load balancing and PgBouncer connection pooling.",
      ],
      liveUrl: "https://dev-hire-beta.vercel.app",
      githubUrl: "https://github.com/moizmalik13588/dev-hire",
      badge: "AI & Backend",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF9F6] dark:bg-[#121212] relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C2410C] mb-2 font-medium inline-block">
            PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl text-[#1A1A1A] dark:text-[#E4E4E7] mb-4">
            Featured Projects
          </h2>
          <p className="text-[#71717A] dark:text-[#A1A1AA] text-base font-sans">
            Production-grade applications showcasing full-stack proficiency, robust backend architecture, and AI integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-7 rounded-2xl bg-[#F5F3EF] dark:bg-[#18181B] border border-[#E5E2DC] dark:border-[#27272A] hover:border-[#C2410C]/50 transition-all shadow-none flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-[#C2410C] animate-pulse shrink-0" />
                    <h3 className="!font-sans font-bold text-xl text-[#1A1A1A] dark:text-[#E4E4E7] tracking-tight group-hover:text-[#C2410C] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#C2410C]/10 border border-[#C2410C]/20 text-xs font-mono text-[#C2410C] tracking-wide">
                    {project.badge}
                  </span>
                </div>

                <p className="text-sm font-mono text-[#C2410C] tracking-wide mb-3">{project.tagline}</p>
                <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mb-6 leading-relaxed font-sans">{project.description}</p>

                {/* Key Highlights */}
                <div className="mb-6 space-y-2 bg-white dark:bg-[#121212] p-4 rounded-xl border border-[#E5E2DC] dark:border-[#27272A]">
                  <div className="text-xs font-mono text-[#71717A] dark:text-[#A1A1AA] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#C2410C]" />
                    Key Highlights
                  </div>
                  {project.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="text-xs text-[#1A1A1A] dark:text-[#E4E4E7] flex items-start gap-2 font-sans">
                      <span className="text-[#C2410C] mt-0.5">•</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-white dark:bg-[#121212] border border-[#E5E2DC] dark:border-[#27272A] text-xs font-mono text-[#71717A] dark:text-[#A1A1AA] tracking-wide"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#E5E2DC] dark:border-[#27272A]">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#1A1A1A] dark:bg-white text-white dark:text-[#1A1A1A] text-sm font-sans font-medium transition-colors shadow-none hover:bg-[#C2410C] dark:hover:bg-[#EA580C]"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white dark:bg-[#121212] hover:bg-[#F5F3EF] dark:hover:bg-zinc-800 border border-[#E5E2DC] dark:border-[#27272A] text-[#1A1A1A] dark:text-[#E4E4E7] text-sm font-sans font-medium transition-colors shadow-none"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
