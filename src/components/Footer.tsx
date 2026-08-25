import React from "react";
import { Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#tech" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#FAF9F6] dark:bg-[#121212] border-t border-[#E5E2DC] dark:border-[#27272A] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between">
        {/* Left: Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <a href="#" className="text-lg font-bold text-[#1A1A1A] dark:text-[#E4E4E7] flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-[#1A1A1A] dark:bg-white text-white dark:text-[#1A1A1A] flex items-center justify-center font-mono text-xs">
              MM
            </span>
            <span className="font-serif italic font-medium">Muhammad Moiz</span>
          </a>
          <p className="text-sm text-[#6B6B6B] dark:text-[#A1A1AA] text-center md:text-left max-w-sm">
            Full-Stack Developer & Backend Engineer building production-grade web apps and scalable systems.
          </p>
          <a
            href="mailto:moizmalik13588@gmail.com"
            className="text-xs font-mono text-[#C2410C] dark:text-[#EA580C] hover:underline flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            moizmalik13588@gmail.com
          </a>
        </div>

        {/* Right: Quick Links & Socials */}
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-8">
          <div className="flex flex-col items-center sm:items-start space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#6B6B6B] dark:text-[#A1A1AA]">
              Quick Links
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center sm:justify-start">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-[#1A1A1A] dark:text-[#E4E4E7] hover:text-[#C2410C] dark:hover:text-[#EA580C] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#E5E2DC] dark:border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B6B6B] dark:text-[#A1A1AA]">
        <p>© {currentYear} Muhammad Moiz. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <span>Karachi, Pakistan</span>
          <a
            href="#"
            className="hover:text-[#C2410C] dark:hover:text-[#EA580C] flex items-center gap-1 transition-colors"
          >
            Back to top <ArrowUp className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
