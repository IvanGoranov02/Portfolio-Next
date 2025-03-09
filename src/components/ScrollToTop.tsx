"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      onClick={scrollToTop}
      className="fixed bottom-4 left-4 md:bottom-8 md:right-8 md:left-auto z-40 p-2 rounded-full bg-white text-gray-950 hover:bg-emerald-300 transition-colors"
      style={{ display: isVisible ? "block" : "none" }}
    >
      <ArrowUpIcon className="size-6 rotate-[-45deg]" />
    </motion.button>
  );
};
