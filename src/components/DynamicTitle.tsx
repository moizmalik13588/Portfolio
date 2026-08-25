"use client";

import { useEffect } from "react";

export default function DynamicTitle() {
  useEffect(() => {
    const baseTitle = "Muhammad Moiz — Full-Stack Developer & Backend Engineer";
    
    const sections = [
      { id: "about", title: "About — Muhammad Moiz" },
      { id: "tech", title: "Tech Stack — Muhammad Moiz" },
      { id: "projects", title: "Projects — Muhammad Moiz" },
      { id: "experience", title: "Experience — Muhammad Moiz" },
      { id: "education", title: "Education — Muhammad Moiz" },
      { id: "contact", title: "Contact — Muhammad Moiz" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const matched = sections.find((s) => s.id === sectionId);
            if (matched) {
              document.title = matched.title;
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      if (window.scrollY < 200) {
        document.title = baseTitle;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
