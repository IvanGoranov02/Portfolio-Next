"use client";

import { useEffect, useState } from "react";

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
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
    };

    const scrollListener = () => {
      requestAnimationFrame(handleScroll);
    };

    handleScroll();
    window.addEventListener("scroll", scrollListener, { passive: true });
    return () => window.removeEventListener("scroll", scrollListener);
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      console.log("Scrolling to section:", sectionId, {
        offsetTop: element.offsetTop,
        position: elementPosition,
      });
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-50">
      <nav className="flex items-center gap-1 p-0.5 border-white/15 rounded-full border bg-white/10 backdrop-blur">
        <button
          onClick={() => scrollToSection("home")}
          className={`nav-item ${
            activeSection === "home" ? "bg-white text-gray-900" : ""
          }`}
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("experience")}
          className={`nav-item ${
            activeSection === "experience" ? "bg-white text-gray-900" : ""
          }`}
        >
          Experience
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className={`nav-item ${
            activeSection === "projects" ? "bg-white text-gray-900" : ""
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection("achievements")}
          className={`nav-item ${
            activeSection === "achievements" ? "bg-white text-gray-900" : ""
          }`}
        >
          Achievements
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className={`nav-item ${
            activeSection === "about" ? "bg-white text-gray-900" : ""
          }`}
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className={`nav-item ${
            activeSection === "contact" ? "bg-white text-gray-900" : ""
          }`}
        >
          Contact
        </button>
      </nav>
    </div>
  );
};
