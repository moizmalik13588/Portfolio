"use client";

import React, { useState } from "react";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const mailtoUrl = `mailto:moizmalik13588@gmail.com?subject=Contact from ${encodeURIComponent(
        formState.name
      )} (${encodeURIComponent(formState.email)})&body=${encodeURIComponent(formState.message)}`;
      window.location.href = mailtoUrl;
    }, 800);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF9F6] dark:bg-[#121212] text-[#1A1A1A] dark:text-[#E4E4E7] relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#18181B] border border-[#E5E2DC] dark:border-[#27272A] text-xs font-mono text-[#C2410C] dark:text-[#EA580C] mb-4 shadow-xs">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-[#1A1A1A] dark:text-[#E4E4E7] mb-4">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-[#6B6B6B] dark:text-[#A1A1AA] text-base font-sans">
            Have a project in mind, a backend role, or want to discuss AI integration? Drop a message below or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-2 p-8 rounded-2xl bg-white dark:bg-[#18181B] border border-[#E5E2DC] dark:border-[#27272A] shadow-xl space-y-6"
          >
            <div>
              <h3 className="text-xl font-serif font-bold text-[#1A1A1A] dark:text-[#E4E4E7] mb-2">Contact Information</h3>
              <p className="text-sm text-[#6B6B6B] dark:text-[#A1A1AA] leading-relaxed">
                Feel free to reach out via email or connect on professional networks. I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:moizmalik13588@gmail.com"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#FAF9F6] dark:bg-[#121212] border border-[#E5E2DC] dark:border-[#27272A] hover:border-[#C2410C]/50 dark:hover:border-[#EA580C]/50 transition-colors group"
              >
                <div className="p-2.5 rounded-lg bg-[#C2410C]/10 dark:bg-[#EA580C]/10 text-[#C2410C] dark:text-[#EA580C] group-hover:bg-[#C2410C]/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#6B6B6B] dark:text-[#A1A1AA] font-mono">Email Me</div>
                  <div className="text-sm font-medium text-[#1A1A1A] dark:text-[#E4E4E7] group-hover:text-[#C2410C] dark:group-hover:text-[#EA580C]">
                    moizmalik13588@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/moizmalik13588"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#FAF9F6] dark:bg-[#121212] border border-[#E5E2DC] dark:border-[#27272A] hover:border-[#C2410C]/50 dark:hover:border-[#EA580C]/50 transition-colors group"
              >
                <div className="p-2.5 rounded-lg bg-[#C2410C]/10 dark:bg-[#EA580C]/10 text-[#C2410C] dark:text-[#EA580C] group-hover:bg-[#C2410C]/20 flex items-center justify-center">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-[#6B6B6B] dark:text-[#A1A1AA] font-mono">GitHub Profile</div>
                  <div className="text-sm font-medium text-[#1A1A1A] dark:text-[#E4E4E7] group-hover:text-[#C2410C] dark:group-hover:text-[#EA580C]">
                    github.com/moizmalik13588
                  </div>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#FAF9F6] dark:bg-[#121212] border border-[#E5E2DC] dark:border-[#27272A] hover:border-[#C2410C]/50 dark:hover:border-[#EA580C]/50 transition-colors group"
              >
                <div className="p-2.5 rounded-lg bg-[#C2410C]/10 dark:bg-[#EA580C]/10 text-[#C2410C] dark:text-[#EA580C] group-hover:bg-[#C2410C]/20 flex items-center justify-center">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-[#6B6B6B] dark:text-[#A1A1AA] font-mono">LinkedIn</div>
                  <div className="text-sm font-medium text-[#1A1A1A] dark:text-[#E4E4E7] group-hover:text-[#C2410C] dark:group-hover:text-[#EA580C]">
                    Connect on LinkedIn
                  </div>
                </div>
              </a>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF9F6] dark:bg-[#121212] border border-[#E5E2DC] dark:border-[#27272A] text-xs font-mono text-[#6B6B6B] dark:text-[#A1A1AA]">
              📍 Based in Karachi, Pakistan • Available for Remote & On-Site Roles
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-3 p-8 rounded-2xl bg-white dark:bg-[#18181B] border border-[#E5E2DC] dark:border-[#27272A] shadow-xl"
          >
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#C2410C]/10 dark:bg-[#EA580C]/10 border border-[#C2410C]/30 dark:border-[#EA580C]/30 text-[#C2410C] dark:text-[#EA580C] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#1A1A1A] dark:text-[#E4E4E7]">Message Prepared!</h3>
                <p className="text-[#6B6B6B] dark:text-[#A1A1AA] text-sm max-w-sm mx-auto">
                  Your email client has been opened with your message. You can also reach me directly at{" "}
                  <span className="text-[#C2410C] dark:text-[#EA580C] font-mono">moizmalik13588@gmail.com</span>.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-[#FAF9F6] dark:bg-[#121212] border border-[#E5E2DC] dark:border-[#27272A] text-[#1A1A1A] dark:text-[#E4E4E7] text-sm font-medium hover:border-[#C2410C] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#1A1A1A] dark:text-[#E4E4E7] mb-2">Send a Message</h3>
                  <p className="text-sm text-[#6B6B6B] dark:text-[#A1A1AA] mb-6">
                    Fill out the form below and it will instantly compose an email to my inbox.
                  </p>
                </div>

                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-[#6B6B6B] dark:text-[#A1A1AA] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] dark:bg-[#121212] border border-[#E5E2DC] dark:border-[#27272A] text-[#1A1A1A] dark:text-[#E4E4E7] placeholder-gray-400 dark:placeholder-zinc-500 text-sm focus:outline-none focus:border-[#C2410C] dark:focus:border-[#EA580C] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-[#6B6B6B] dark:text-[#A1A1AA] mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] dark:bg-[#121212] border border-[#E5E2DC] dark:border-[#27272A] text-[#1A1A1A] dark:text-[#E4E4E7] placeholder-gray-400 dark:placeholder-zinc-500 text-sm focus:outline-none focus:border-[#C2410C] dark:focus:border-[#EA580C] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-[#6B6B6B] dark:text-[#A1A1AA] mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Hi Moiz, I'd like to discuss a backend engineering role..."
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] dark:bg-[#121212] border border-[#E5E2DC] dark:border-[#27272A] text-[#1A1A1A] dark:text-[#E4E4E7] placeholder-gray-400 dark:placeholder-zinc-500 text-sm focus:outline-none focus:border-[#C2410C] dark:focus:border-[#EA580C] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#1A1A1A] dark:bg-white text-white dark:text-[#1A1A1A] font-medium transition-all shadow-md hover:bg-[#C2410C] dark:hover:bg-[#EA580C] dark:hover:text-white disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Preparing Email...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message via Email
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
