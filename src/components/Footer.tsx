"use client";

import React from "react";
import { Sparkles, ArrowRight, ShieldCheck, Heart } from "lucide-react";
import { FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";

export default function Footer({ onOpenWaitlist }: { onOpenWaitlist?: () => void }) {
  return (
    <footer className="relative border-t border-white/10 bg-[#030014] text-zinc-400 text-sm overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-t from-blue-600/10 via-purple-600/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-16">
          {/* Brand Info (2 columns) */}
          <div className="md:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <img
                src="https://app.sreeai.qzz.io/Sree-ai-Primary-logo.png"
                alt="Sree AI"
                className="h-8 w-auto object-contain"
              />
            </a>
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
              The next-generation open-weights multimodal AI engine. Bringing sub-50ms voice streaming, FLUX.1 generation, 2D to 3D mesh conversion, and BYOK privacy into one unified platform.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Global Systems Operational</span>
            </div>
          </div>

          {/* Column 1: Platform */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide">Platform</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#capabilities" className="hover:text-white transition">Sree Chat (75+ Models)</a></li>
              <li><a href="#capabilities" className="hover:text-white transition">Sree Voice (Sub-50ms)</a></li>
              <li><a href="#capabilities" className="hover:text-white transition">Sree Image Studio</a></li>
              <li><a href="#capabilities" className="hover:text-white transition">2D to 3D Mesh Converter</a></li>
              <li><a href="#capabilities" className="hover:text-white transition">Humanizer & Enhancer</a></li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide">Resources</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="https://app.sreeai.qzz.io/pricing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Pricing & Plans</a></li>
              <li><a href="#architecture" className="hover:text-white transition">BYOK Privacy Model</a></li>
              <li><a href="#architecture" className="hover:text-white transition">Self-Hosting Guide</a></li>
              <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
              <li><a href="https://github.com/sree-ai-assistant/sree.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub Repository</a></li>
            </ul>
          </div>

          {/* Column 3: Legal & Launch */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide">Legal & Launch</h4>
            <ul className="space-y-2.5 text-xs mb-6">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">Security Compliance</a></li>
            </ul>

            <button
              onClick={() => window.open("https://app.sreeai.qzz.io", "_blank")}
              className="w-full py-2.5 px-4 rounded-xl font-bold text-xs bg-white/10 hover:bg-white/20 text-white border border-white/15 transition duration-200"
            >
              Open Console App
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-1 text-zinc-500">
            <span>© {new Date().getFullYear()} Sree AI Inc. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-zinc-400">
            <a
              href="https://github.com/sree-ai-assistant/sree.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="GitHub"
            >
              <FaGithub className="h-4 w-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="Twitter"
            >
              <FaTwitter className="h-4 w-4" />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="Discord"
            >
              <FaDiscord className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
