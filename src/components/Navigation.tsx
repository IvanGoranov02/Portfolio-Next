"use client";

import { useEffect, useState, useCallback } from "react";
import { throttle } from "lodash";

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = useCallback(
    throttle(() => {
      const sections = [
        "home",
        "experience",
        "projects",
        "achievements",
        "about",
        "contact",
      ];

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const threshold = windowHeight * 0.3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= threshold && rect.bottom >= threshold) {
            if (activeSection !== section) {
              setActiveSection(section);
            }
            break;
          }
        }
      }
    }, 100),
    [activeSection]
  );

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div className="fixed top-3 w-full z-50 px-4">
      <nav className="flex items-center gap-1 p-0.5 border-white/15 rounded-full border bg-white/10 backdrop-blur mx-auto max-w-fit">
        <button
          onClick={() => scrollToSection("home")}
          className={`nav-item transition-all duration-300 ${
            activeSection === "home"
              ? "bg-white text-gray-900"
              : "hover:text-emerald-300"
          }`}
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("experience")}
          className={`nav-item transition-all duration-300 ${
            activeSection === "experience"
              ? "bg-white text-gray-900"
              : "hover:text-emerald-300"
          }`}
        >
          Experience
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className={`nav-item transition-all duration-300 ${
            activeSection === "projects"
              ? "bg-white text-gray-900"
              : "hover:text-emerald-300"
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection("achievements")}
          className={`nav-item transition-all duration-300 ${
            activeSection === "achievements"
              ? "bg-white text-gray-900"
              : "hover:text-emerald-300"
          }`}
        >
          Achievements
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className={`nav-item transition-all duration-300 ${
            activeSection === "about"
              ? "bg-white text-gray-900"
              : "hover:text-emerald-300"
          }`}
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className={`nav-item transition-all duration-300 ${
            activeSection === "contact"
              ? "bg-white text-gray-900"
              : "hover:text-emerald-300"
          }`}
        >
          Contact
        </button>
      </nav>
    </div>
  );
};
