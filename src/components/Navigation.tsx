"use client";

import { useEffect, useState, useCallback } from "react";
import { throttle } from "lodash";

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      setIsMobileMenuOpen(false);
    }
  }, []);

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <div className="fixed top-3 w-full z-50 px-4 hidden md:block">
        <nav className="flex items-center gap-1 p-0.5 border-white/15 rounded-full border bg-white/10 backdrop-blur mx-auto max-w-fit">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav-item transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-white text-gray-900"
                  : "hover:text-emerald-300"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-3 right-4 z-50 p-2 rounded-full bg-white/10 backdrop-blur border border-white/15"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          )}
        </svg>
      </button>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-gray-900/95 backdrop-blur transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-2 p-4 mt-16">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-white text-gray-900"
                  : "hover:text-emerald-300"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};
