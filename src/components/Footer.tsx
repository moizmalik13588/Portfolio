"use client";

import React, { useState } from "react";
import { Mail, ArrowUp, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [imageError, setImageError] = useState(false);

  const pagesLinks = [
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#tech" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
  ];

  const resourceLinks = [
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "/resume.pdf", external: true },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/moizmalik13588",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://youtube.com",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#FAF9F6] dark:bg-[#121212] border-t border-[#E5E2DC] dark:border-[#27272A] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 justify-between">
        {/* Left: Brand, Tagline & Socials */}
        <div className="md:col-span-6 flex flex-col items-start space-y-4">
          <a href="#" className="text-lg font-bold text-[#1A1A1A] dark:text-[#E4E4E7] flex items-center gap-2.5">
            <div className="relative w-10 h-10">
              {!imageError ? (
                <Image
                  src="/moiz-dp.png"
                  alt="Muhammad Moiz"
                  fill
                  className="w-10 h-10 object-contain"
                  onError={() => setImageError(true)}
                />
              ) : (
                <span>MM</span>
              )}
            </div>
            <span className="font-bold text-base tracking-tight text-[#1A1A1A] dark:text-[#E4E4E7]">Muhammad Moiz</span>
          </a>
          <p className="text-sm text-[#6B6B6B] dark:text-[#A1A1AA] max-w-sm leading-relaxed">
            Full-Stack Developer & Backend Engineer building production-grade web apps and scalable systems.
          </p>
          <a
            href="mailto:moizmalik13588@gmail.com"
            className="text-xs font-mono text-[#C2410C] dark:text-[#EA580C] hover:underline flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            moizmalik13588@gmail.com
          </a>

          {/* Social Icons with circular buttons */}
          <div className="flex items-center gap-3 pt-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-9 h-9 rounded-full bg-white dark:bg-[#18181B] border border-[#E5E2DC] dark:border-[#27272A] text-[#1A1A1A] dark:text-[#E4E4E7] hover:border-[#C2410C] dark:hover:border-[#EA580C] hover:text-[#C2410C] dark:hover:text-[#EA580C] transition-all flex items-center justify-center shadow-xs"
              >
                {social.svg}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Vertical Columns for Quick Links */}
        <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-2 gap-8 justify-end">
          {/* PAGES Column */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-zinc-400">
              Pages
            </h4>
            <ul className="space-y-2.5">
              {pagesLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-[#1A1A1A] dark:text-[#E4E4E7] hover:text-[#C2410C] dark:hover:text-[#EA580C] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES Column */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-zinc-400">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-[#1A1A1A] dark:text-[#E4E4E7] hover:text-[#C2410C] dark:hover:text-[#EA580C] transition-colors flex items-center gap-1"
                  >
                    {link.name}
                    {link.external && <ExternalLink className="w-3 h-3 text-gray-400" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#E5E2DC] dark:border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B6B6B] dark:text-[#A1A1AA]">
        <p>© {currentYear} Muhammad Moiz. All rights reserved.</p>
        <a
          href="#"
          className="hover:text-[#C2410C] dark:hover:text-[#EA580C] flex items-center gap-1.5 transition-colors font-medium"
        >
          Back to top <ArrowUp className="w-3.5 h-3.5" />
        </a>
      </div>
    </footer>
  );
}
