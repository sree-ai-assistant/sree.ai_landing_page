"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaDiscord, FaLinkedin } from "react-icons/fa6";
import { Sparkles, ArrowRight, ShieldCheck, Check, ExternalLink, Globe } from "lucide-react";

interface FooterProps {
  onOpenWaitlist?: (toolName?: string) => void;
}

export default function Footer({ onOpenWaitlist }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
    }, 2500);
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#030014] text-zinc-400 overflow-hidden pt-16 pb-12">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-gradient-to-t from-blue-600/10 via-purple-600/5 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Top Newsletter & Update Banner */}
        <div className="rounded-3xl border border-white/15 bg-gradient-to-r from-blue-950/40 via-indigo-950/40 to-purple-950/40 p-8 md:p-10 backdrop-blur-2xl mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              Stay Ahead in AI
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Get the latest model releases & benchmarks
            </h3>
            <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
              Subscribe to Sree AI release notes. Receive updates on new open-weight LLM integrations, voice latency optimizations, and upcoming tools.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 min-w-[320px] sm:min-w-[420px]">
            {subscribed ? (
              <div className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-semibold">
                <Check className="h-4 w-4" />
                Subscribed to Sree AI updates!
              </div>
            ) : (
              <>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-200"
                />
                <button
                  type="submit"
                  className="shrink-0 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition duration-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </>
            )}
          </form>
        </div>

        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Column 1: Brand Info (Takes 2 cols on desktop) */}
          <div className="lg:col-span-2 space-y-4 pr-0 lg:pr-8">
            <a href="#" className="inline-block">
              <img
                src="https://app.sreeai.qzz.io/Sree-ai-Primary-logo.png"
                alt="Sree AI Platform Logo"
                className="h-9 w-auto object-contain"
              />
            </a>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-md">
              The open multimodal AI ecosystem unifying ultra-fast open-weight LLMs, sub-50ms real-time voice dialogue, FLUX.1 graphics, 4K motion video, 2D to 3D spatial models, and text humanization in one platform.
            </p>

            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>All Inference Clusters Operational</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
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

          {/* Column 2: AI Tools Suite */}
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
                  href="https://app.sreeai.qzz.io"
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
                  href="https://app.sreeai.qzz.io"
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
                  href="https://app.sreeai.qzz.io"
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

          {/* Column 3: Platform & Tech */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white">
              Platform & Tech
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#architecture" className="hover:text-white transition duration-150">
                  Open Infrastructure
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition duration-150">
                  BYOK Zero-Markup
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/sree-ai-assistant/sree.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition duration-150 flex items-center gap-1.5"
                >
                  <span>Apache 2.0 Source</span>
                  <ExternalLink className="h-3 w-3 text-zinc-500" />
                </a>
              </li>
              <li>
                <a href="#tools" className="hover:text-white transition duration-150">
                  Model Zoo (75+ Models)
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition duration-150">
                  Cluster SLAs & Limits
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Pricing & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white">
              Plans & Info
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#pricing" className="hover:text-white transition duration-150">
                  Free Tier ($0)
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition duration-150">
                  Starter Plan ($8/mo)
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition duration-150">
                  Pro Plan ($29/mo)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition duration-150">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition duration-150">
                  Privacy Policy & BYOK
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <img
              src="https://app.sreeai.qzz.io/Sree-Ai-icon-only-Sree-AI-brandmark.png"
              alt="Sree AI Icon"
              className="h-4 w-4 object-contain opacity-70"
            />
            <p>
              © {new Date().getFullYear()} Sree AI Platform Inc. Released under Apache 2.0 Open Source License.
            </p>
          </div>

          <div className="flex items-center gap-4 text-zinc-400">
            <span className="flex items-center gap-1.5">
              <Globe className="h-3.5 w-3.5 text-blue-400" />
              <span>Global Edge Nodes</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>BYOK Encrypted</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
