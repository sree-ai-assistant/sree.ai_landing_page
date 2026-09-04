"use client";

import React from "react";
import { FaGithub, FaTwitter, FaDiscord, FaLinkedin } from "react-icons/fa6";
import { ExternalLink, ShieldCheck, Mail, Lightbulb } from "lucide-react";

interface FooterProps {
  onOpenWaitlist?: (toolName?: string) => void;
}

export default function Footer({ onOpenWaitlist }: FooterProps) {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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

  return (
    <footer className="relative border-t border-white/10 bg-[#030014] text-zinc-400 overflow-hidden py-6">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-gradient-to-t from-blue-600/10 via-purple-600/5 to-transparent blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-8 border-b border-white/10">
          {/* Column 1: Brand & Logo (Takes 2 cols on desktop) */}
          <div className="lg:col-span-2 space-y-4 pr-0 lg:pr-6">
            <a href="#" onClick={(e) => handleNavClick(e, "#")} className="inline-block">
              <img
                src="https://app.sreeai.qzz.io/Sree-ai-Primary-logo.png"
                alt="Sree AI Platform Logo"
                className="h-9 w-auto object-contain"
              />
            </a>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              The open multimodal AI platform unifying text intelligence, real-time voice, photorealistic graphics, video, 2D to 3D spatial models, and AI text humanization.
            </p>

            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>All Tool Clusters Operational</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-1">
              {[
                { icon: FaGithub, href: "https://github.com/sree-ai-assistant/sree.ai", label: "GitHub" },
                { icon: FaTwitter, href: "https://x.com", label: "Twitter" },
                { icon: FaDiscord, href: "https://discord.gg", label: "Discord" },
                { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:border-white/25 hover:bg-white/10 transition duration-200"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" onClick={(e) => handleNavClick(e, "#")} className="hover:text-white transition duration-150">
                  Home
                </a>
              </li>
              <li>
                <a href="#tools" onClick={(e) => handleNavClick(e, "#tools")} className="hover:text-white transition duration-150">
                  AI Tools
                </a>
              </li>
              <li>
                <a href="#architecture" onClick={(e) => handleNavClick(e, "#architecture")} className="hover:text-white transition duration-150">
                  Architecture
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={(e) => handleNavClick(e, "#pricing")} className="hover:text-white transition duration-150">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleNavClick(e, "#faq")} className="hover:text-white transition duration-150">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: AI Tools Suite */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white">
              AI Tools Suite
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://app.sreeai.qzz.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition duration-150 flex items-center gap-1.5"
                >
                  <span>Sree Chat (LLMs)</span>
                  <ExternalLink className="h-3 w-3 text-zinc-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://app.sreeai.qzz.io/voice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition duration-150 flex items-center gap-1.5"
                >
                  <span>Sree Voice (Sub-50ms)</span>
                  <ExternalLink className="h-3 w-3 text-zinc-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://app.sreeai.qzz.io/image"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition duration-150 flex items-center gap-1.5"
                >
                  <span>Sree Image (FLUX.1)</span>
                  <ExternalLink className="h-3 w-3 text-zinc-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://app.sreeai.qzz.io/video"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition duration-150 flex items-center gap-1.5"
                >
                  <span>Sree Video (4K Motion)</span>
                  <ExternalLink className="h-3 w-3 text-zinc-500" />
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenWaitlist?.("2D to 3D Convertor")}
                  className="hover:text-purple-300 transition duration-150 flex items-center gap-1 text-left cursor-pointer"
                >
                  <span>2D to 3D Convertor</span>
                  <span className="text-[10px] bg-purple-500/20 text-purple-300 border border-purple-500/30 px-1.5 py-0.5 rounded font-semibold">
                    Soon
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenWaitlist?.("AI Humanizer & Enhancer")}
                  className="hover:text-purple-300 transition duration-150 flex items-center gap-1 text-left cursor-pointer"
                >
                  <span>AI Humanizer & Enhancer</span>
                  <span className="text-[10px] bg-purple-500/20 text-purple-300 border border-purple-500/30 px-1.5 py-0.5 rounded font-semibold">
                    Soon
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white">
              Legal & Compliance
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://app.sreeai.qzz.io/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition duration-150 flex items-center gap-1.5"
                >
                  <span>Terms of Service</span>
                  <ExternalLink className="h-3 w-3 text-zinc-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://app.sreeai.qzz.io/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition duration-150 flex items-center gap-1.5"
                >
                  <span>Privacy Policy</span>
                  <ExternalLink className="h-3 w-3 text-zinc-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://app.sreeai.qzz.io/security"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition duration-150 flex items-center gap-1.5"
                >
                  <span>Security & BYOK</span>
                  <ExternalLink className="h-3 w-3 text-zinc-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://app.sreeai.qzz.io/refund-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition duration-150 flex items-center gap-1.5"
                >
                  <span>Refund & Cancellation</span>
                  <ExternalLink className="h-3 w-3 text-zinc-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://app.sreeai.qzz.io/acceptable-use"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition duration-150 flex items-center gap-1.5"
                >
                  <span>Acceptable Use Policy</span>
                  <ExternalLink className="h-3 w-3 text-zinc-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://app.sreeai.qzz.io/cookies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition duration-150 flex items-center gap-1.5"
                >
                  <span>Cookie Policy</span>
                  <ExternalLink className="h-3 w-3 text-zinc-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact & Support */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white">
              Contact & Support
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:support@sreeai.qzz.io"
                  className="hover:text-white transition duration-150 flex items-center gap-1.5 text-zinc-300"
                >
                  <Mail className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                  <span className="break-all">support@sreeai.qzz.io</span>
                </a>
              </li>
              <li>
                <a
                  href="https://app.sreeai.qzz.io/feature-request"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition duration-150 flex items-center gap-1.5 text-zinc-300"
                >
                  <Lightbulb className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                  <span>Feature Request</span>
                  <ExternalLink className="h-3 w-3 text-zinc-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <img
              src="https://app.sreeai.qzz.io/Sree-Ai-icon-only-Sree-AI-brandmark.png"
              alt="Sree AI Icon"
              className="h-4 w-4 object-contain opacity-70 rounded-full"
            />
            <p>
              © {new Date().getFullYear()} Sree AI Platform Inc. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-zinc-400">
            <a
              href="https://app.sreeai.qzz.io/security"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>BYOK Encrypted</span>
            </a>
            <span>•</span>
            <a
              href="https://app.sreeai.qzz.io/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Terms
            </a>
            <span>•</span>
            <a
              href="https://app.sreeai.qzz.io/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Privacy
            </a>
            <span>•</span>
            <a
              href="mailto:support@sreeai.qzz.io"
              className="hover:text-white transition"
            >
              support@sreeai.qzz.io
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
