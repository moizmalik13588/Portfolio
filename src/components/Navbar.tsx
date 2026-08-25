"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, FileText, Mail } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#tech" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F6] dark:bg-[#121212] border-b border-[#E5E2DC] dark:border-[#27272A] shadow-xs py-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-[#1A1A1A] dark:text-[#E4E4E7] flex items-center gap-2.5 group"
        >
          <div className="relative w-9 h-9 rounded-full overflow-hidden shadow-xs border border-[#E5E2DC] dark:border-[#27272A]">
            <Image
              src="/moiz-dp.jpg"
              alt="Muhammad Moiz"
              fill
              className="object-cover"
            />
          </div>
          <span className="font-serif italic font-medium text-base">Muhammad Moiz</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#6B6B6B] dark:text-[#A1A1AA] hover:text-[#C2410C] dark:hover:text-[#EA580C] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2.5 rounded-full bg-white dark:bg-[#18181B] border border-[#E5E2DC] dark:border-[#27272A] text-[#1A1A1A] dark:text-yellow-400 hover:border-[#C2410C] transition-all shadow-xs"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-[#1A1A1A]" />}
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-full bg-[#1A1A1A] dark:bg-white text-white dark:text-[#1A1A1A] hover:bg-[#C2410C] dark:hover:bg-[#EA580C] dark:hover:text-white transition-all shadow-sm"
          >
            <FileText className="w-4 h-4" />
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-full bg-white dark:bg-[#18181B] border border-[#E5E2DC] dark:border-[#27272A] text-[#1A1A1A] dark:text-yellow-400"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-[#1A1A1A]" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="p-2 rounded-full bg-white dark:bg-[#18181B] border border-[#E5E2DC] dark:border-[#27272A] text-[#1A1A1A] dark:text-[#E4E4E7]"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#FAF9F6] dark:bg-[#121212] border-b border-[#E5E2DC] dark:border-[#27272A] px-6 py-6 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-[#1A1A1A] dark:text-[#E4E4E7] hover:text-[#C2410C] py-2 border-b border-[#E5E2DC] dark:border-[#27272A]"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex items-center justify-between">
            <div className="flex items-center gap-4 text-[#6B6B6B] dark:text-[#A1A1AA]">
              <a href="https://github.com/moizmalik13588" target="_blank" rel="noreferrer" className="hover:text-[#1A1A1A]">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#1A1A1A]">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="mailto:moizmalik13588@gmail.com" className="hover:text-[#1A1A1A]">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-[#1A1A1A] dark:bg-white text-white dark:text-[#1A1A1A]"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
