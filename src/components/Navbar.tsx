"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "#" },
  { name: "AI Tools", href: "#tools" },
  { name: "Architecture", href: "#architecture" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

interface NavbarProps {
  onOpenWaitlist?: (tier?: string) => void;
}

export default function Navbar({ onOpenWaitlist }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 40) {
      if (!scrolled) setScrolled(true);
    } else {
      if (scrolled) setScrolled(false);
    }
  });

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const springTransition = {
    type: "spring" as const,
    stiffness: 280,
    damping: 26,
    mass: 0.85,
  };

  return (
    <motion.header
      layout
      transition={springTransition}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-300 ${scrolled ? "pt-3 md:pt-4 px-3 md:px-6" : "pt-0 px-0"
        }`}
    >
      <motion.nav
        layout
        transition={springTransition}
        animate={{
          maxWidth: scrolled ? "980px" : "100%",
          height: scrolled ? "58px" : "70px",
          borderRadius: scrolled ? "9999px" : "0px",
          boxShadow: scrolled
            ? "0 16px 40px -10px rgba(0, 0, 0, 0.8), 0 0 25px 2px rgba(59, 130, 246, 0.2), 0 0 1px 1px rgba(255, 255, 255, 0.15)"
            : "none",
          backgroundColor: scrolled ? "rgba(3, 0, 20, 0.9)" : "transparent",
          borderColor: scrolled ? "rgba(59, 130, 246, 0.25)" : "transparent",

        }}
        className={` backdrop-blur-xl pointer-events-auto w-full relative overflow-hidden transition-colors duration-300 flex items-center border ${scrolled ? "backdrop-blur-2xl" : "backdrop-blur-none"
          }`}
      >
        {/* Subtle top glow highlight */}
        {scrolled && (
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-80 pointer-events-none" />
        )}

        {/* Desktop Container */}
        <div
          className={`h-full flex items-center justify-between transition-all duration-300 ${scrolled ? "w-full px-5 md:px-6" : "w-full max-w-7xl mx-auto px-6 md:px-10"
            }`}
        >
          {/* Official Primary Logo */}
          <motion.a
            href="/"
            layout
            transition={springTransition}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <img
              src="https://app.sreeai.qzz.io/Sree-ai-Primary-logo.png"
              alt="Sree AI - All-in-One AI Platform"
              className="h-8 md:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </motion.a>

          {/* Desktop Nav Links */}
          <motion.div
            layout
            transition={springTransition}
            className={`hidden md:flex items-center text-sm font-medium transition-all duration-300 ${scrolled ? "gap-4 lg:gap-6 text-zinc-300" : "gap-7 lg:gap-9 text-zinc-300"
              }`}
          >
            {NAV_ITEMS.map((item, idx) => {
              const isActive = activeSection === item.href;
              const isHovered = hoveredIndex === idx;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative px-3 py-1.5 transition-colors duration-200 hover:text-white"
                >
                  {(isHovered || (hoveredIndex === null && isActive)) && (
                    <motion.div
                      layoutId="navbar-pill-indicator"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className={`absolute inset-0 rounded-full ${isActive && hoveredIndex === null
                        ? "bg-blue-500/15 border border-blue-500/30 shadow-[0_0_12px_rgba(59,130,246,0.25)]"
                        : "bg-white/10 border border-white/15"
                        }`}
                    />
                  )}
                  <span
                    className={`relative z-10 ${isActive ? "text-white font-semibold" : "text-zinc-300"
                      }`}
                  >
                    {item.name}
                  </span>
                </a>
              );
            })}
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            layout
            transition={springTransition}
            className={`hidden md:flex items-center transition-all duration-300 ${scrolled ? "gap-3" : "gap-4"
              }`}
          >
            <a
              href="https://github.com/sree-ai-assistant/sree.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white p-2 rounded-full hover:bg-white/5 transition duration-200"
              aria-label="GitHub Repository"
            >
              <FaGithub className="h-5 w-5" />
            </a>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onOpenWaitlist?.("starter")}
              className={`relative group flex items-center justify-center gap-2 rounded-full font-medium bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_28px_rgba(59,130,246,0.55)] transition-all duration-300 cursor-pointer overflow-hidden ${scrolled ? "px-4 py-1.5 text-xs" : "px-5 py-2 text-sm"
                }`}
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 font-semibold tracking-wide">Launch Console</span>
              <ArrowRight className="relative z-10 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white hover:bg-white/10 rounded-full transition duration-150"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="absolute top-full left-0 right-0 w-full mt-2 bg-[#030014]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col gap-4 overflow-hidden pointer-events-auto md:hidden"
            >
              <div className="flex flex-col gap-2">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 text-zinc-200 hover:text-white hover:bg-white/5 rounded-xl transition duration-150 font-medium text-base flex items-center justify-between"
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="h-4 w-4 text-zinc-500 opacity-60" />
                  </a>
                ))}
              </div>

              <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="https://github.com/sree-ai-assistant/sree.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-2 text-zinc-400 hover:text-white transition duration-150 text-sm"
                >
                  <FaGithub className="h-5 w-5" />
                  <span>GitHub Repository</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenWaitlist?.("starter");
                  }}
                  className="w-full flex items-center justify-center gap-2 rounded-xl py-3 px-5 font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] transition duration-200"
                >
                  <span>Launch Console</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.header>
  );
}

