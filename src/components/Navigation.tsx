"use client";

import { useEffect, useState } from "react";

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const offset = element.offsetTop - 100;

          if (
            scrollPosition >= offset &&
            scrollPosition < offset + element.offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount to set initial active section
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
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
          onClick={() => scrollToSection("projects")}
          className={`nav-item ${
            activeSection === "projects" ? "bg-white text-gray-900" : ""
          }`}
        >
          Projects
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
