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
  const [activeSection, setActiveSection] = useState("#");
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
      if (window.scrollY < 300) {
        setActiveSection("#");
        return;
      }

      const sections = NAV_ITEMS.filter((item) => item.href !== "#").map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      let matched = false;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(`#${sections[i]}`);
          matched = true;
          break;
        }
      }

      if (!matched) {
        setActiveSection("#");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === "#" || href === "/") {
      if (typeof window !== "undefined" && (window as any).lenis) {
        (window as any).lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        if (typeof window !== "undefined" && (window as any).lenis) {
          (window as any).lenis.scrollTo(targetElement, { offset: -70, duration: 1.2 });
        } else {
          const headerOffset = 70;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    }
  };

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
      className={`fixed top-0 left-0 right-0 z-50 flex flex-col items-center pointer-events-none transition-all duration-300 ${
        scrolled ? "pt-3 md:pt-4 px-3 md:px-6" : "pt-0 px-0"
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
        className={`backdrop-blur-xl pointer-events-auto w-full relative overflow-hidden transition-colors duration-300 flex items-center border ${
          scrolled ? "backdrop-blur-2xl" : "backdrop-blur-none"
        }`}
      >
        {/* Subtle top glow highlight */}
        {scrolled && (
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-80 pointer-events-none" />
        )}

        {/* Navbar Container */}
        <div
          className={`h-full flex items-center justify-between transition-all duration-300 ${
            scrolled ? "w-full px-3.5 sm:px-5 md:px-6" : "w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10"
          }`}
        >
          {/* Official Primary Logo */}
          <motion.a
            href="#"
            onClick={(e) => handleNavClick(e, "#")}
            layout
            transition={springTransition}
            className="flex items-center gap-2 group cursor-pointer shrink-0"
          >
            <img
              src="https://app.sreeai.qzz.io/Sree-ai-Primary-logo.png"
              alt="Sree AI - All-in-One AI Platform"
              className="h-7 sm:h-8 md:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </motion.a>

          {/* Desktop Nav Links: Visible at >= 500px */}
          <motion.div
            layout
            transition={springTransition}
            className={`hidden min-[500px]:flex items-center text-xs md:text-sm font-medium transition-all duration-300 ${
              scrolled
                ? "gap-1 sm:gap-2.5 min-[700px]:gap-4 lg:gap-6 text-zinc-300"
                : "gap-1.5 sm:gap-3 min-[700px]:gap-6 lg:gap-9 text-zinc-300"
            }`}
          >
            {NAV_ITEMS.map((item, idx) => {
              const isActive = activeSection === item.href;
              const isHovered = hoveredIndex === idx;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative px-1.5 sm:px-2 md:px-3 py-1.5 transition-colors duration-200 hover:text-white shrink-0"
                >
                  {(isHovered || (hoveredIndex === null && isActive)) && (
                    <motion.div
                      layoutId="navbar-pill-indicator"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className={`absolute inset-0 rounded-full ${
                        isActive && hoveredIndex === null
                          ? "bg-blue-500/15 border border-blue-500/30 shadow-[0_0_12px_rgba(59,130,246,0.25)]"
                          : "bg-white/10 border border-white/15"
                      }`}
                    />
                  )}
                  <span
                    className={`relative z-10 ${isActive ? "text-white font-semibold" : "text-zinc-300"}`}
                  >
                    {item.name}
                  </span>
                </a>
              );
            })}
          </motion.div>

          {/* Action CTAs: Visible at >= 500px */}
          <motion.div
            layout
            transition={springTransition}
            className={`hidden min-[500px]:flex items-center transition-all duration-300 ${
              scrolled ? "gap-2 md:gap-3" : "gap-2 md:gap-4"
            }`}
          >
            {/* GitHub Icon: Hidden below 550px, Visible at >= 550px */}
            <a
              href="https://github.com/sree-ai-assistant/sree.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-[550px]:flex text-zinc-400 hover:text-white p-1.5 md:p-2 rounded-full hover:bg-white/5 transition duration-200"
              aria-label="GitHub Repository"
            >
              <FaGithub className="h-4 sm:h-5 w-4 sm:w-5" />
            </a>

            {/* Launch Console Button: Icon-only (->) when < 820px, full text at >= 820px */}
            <a
              href="https://app.sreeai.qzz.io"
              target="_blank"
              rel="noopener noreferrer"
              className={`relative group flex items-center justify-center gap-1.5 md:gap-2 rounded-full font-medium bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_28px_rgba(59,130,246,0.55)] transition-all duration-300 cursor-pointer overflow-hidden ${
                scrolled
                  ? "p-2 min-[820px]:px-4 min-[820px]:py-1.5 text-xs"
                  : "p-2.5 min-[820px]:px-5 min-[820px]:py-2 text-xs md:text-sm"
              }`}
              title="Launch Console"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 font-semibold tracking-wide hidden min-[820px]:inline">
                Launch Console
              </span>
              <ArrowRight className="relative z-10 h-4 w-4 min-[820px]:h-3.5 min-[820px]:w-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
            </a>
          </motion.div>

          {/* Mobile Menu Toggle Button: Visible ONLY below 500px */}
          <div className="flex min-[500px]:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2 text-zinc-300 hover:text-white hover:bg-white/10 rounded-full transition duration-150 cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Dropdown: Placed outside motion.nav, visible ONLY below 500px */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-auto w-[calc(100%-1.5rem)] max-w-md mt-2 bg-[#07051a]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(59,130,246,0.25)] flex flex-col gap-4 overflow-hidden min-[500px]:hidden z-50"
          >
            <div className="flex flex-col gap-1.5">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-3 text-zinc-200 hover:text-white hover:bg-white/10 rounded-xl transition duration-150 font-medium text-base flex items-center justify-between"
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
                className="flex items-center gap-2.5 px-4 py-2.5 text-zinc-400 hover:text-white transition duration-150 text-sm font-medium"
              >
                <FaGithub className="h-5 w-5" />
                <span>GitHub Repository</span>
              </a>

              <a
                href="https://app.sreeai.qzz.io"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 rounded-xl py-3 px-5 font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] transition duration-200"
              >
                <span>Launch Console</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
