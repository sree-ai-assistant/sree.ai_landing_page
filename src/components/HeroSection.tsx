"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Mic, ImageIcon, ShieldCheck, Sparkles, Layers, Terminal, Database, Zap, Globe, Code } from "lucide-react";
import CircuitBoardSvg from "@/components/CircuitBoardSvg";
import { SiVercel, SiNextdotjs, SiTailwindcss, SiSupabase, SiDeno } from "react-icons/si";

// Minimalist Monochrome Tech Brands for Marquee matching remak.vercel.app
const BRAND_LOGOS = [
  { name: "Mistral AI", icon: Cpu },
  { name: "Vercel", icon: SiVercel },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Meta Llama 3", icon: Terminal },
  { name: "OpenAI GPT-4o", icon: Sparkles },
  { name: "Anthropic Claude", icon: Code },
  { name: "FLUX.1 Studio", icon: ImageIcon },
  { name: "Runway Gen-3", icon: Layers },
  { name: "Supabase Vector", icon: SiSupabase },
  { name: "Deno Edge", icon: SiDeno },
  { name: "Trustpilot", icon: ShieldCheck },
  { name: "Webflow", icon: Globe },
];

export default function HeroSection({ onOpenWaitlist }: { onOpenWaitlist?: () => void }) {
  // Duplicate array 4x for seamless continuous 100% infinite marquee loop
  const marqueeItems = [...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden flex flex-col items-center justify-center text-center px-4">
      {/* 1. TOP REMAK-STYLE PURPLE PORTAL RING LIGHT EFFECT */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] portal-ring-glow pointer-events-none -z-10" />
      
      {/* Curved Glowing Portal Ring Arc at top navbar border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[140px] rounded-b-[100%] bg-gradient-to-b from-purple-500/30 via-indigo-600/15 to-transparent border-b-2 border-purple-400/60 shadow-[0_20px_80px_rgba(168,85,247,0.5)] pointer-events-none -z-10" />

      {/* Circuit Board SVG Background Layer */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none opacity-30 mix-blend-screen -z-20">
        <CircuitBoardSvg className="w-full max-w-7xl h-auto object-cover" />
      </div>

      {/* 2. MAIN HERO CONTENT */}
      {/* Release Announcement Pill */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md shadow-[0_0_25px_rgba(168,85,247,0.25)] mb-6 hover:border-purple-500/40 transition-colors cursor-pointer group"
        onClick={onOpenWaitlist}
      >
        <span className="flex h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
        <span className="text-xs md:text-sm font-medium bg-gradient-to-r from-purple-300 via-indigo-200 to-blue-300 bg-clip-text text-transparent">
          Sree AI Engine 2.0 Released
        </span>
        <span className="text-xs text-zinc-400 group-hover:text-white transition-colors flex items-center gap-1">
          Explore Models <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.08] mb-6"
      >
        Scaling your business to <br className="hidden sm:inline" />
        <span className="bg-gradient-to-r from-purple-300 via-indigo-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(168,85,247,0.5)]">
          millions in seconds.
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="text-base md:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed mb-10"
      >
        Experience 75+ flagship AI models in one unified platform. Real-time sub-50ms Sree Voice, FLUX.1 image studio, and self-hosted privacy with full BYOK support.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open('https://app.sreeai.qzz.io', '_blank')}
          className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-base bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white shadow-[0_0_35px_rgba(168,85,247,0.45)] hover:shadow-[0_0_50px_rgba(168,85,247,0.7)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
        >
          <span>Get Started Now</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>

        <a
          href="#pricing"
          className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-base bg-white/5 hover:bg-white/10 text-zinc-200 hover:text-white border border-white/10 hover:border-white/20 backdrop-blur-md transition duration-300 flex items-center justify-center gap-2"
        >
          <span>View Pricing</span>
        </a>
      </motion.div>

      {/* Key Metric Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-5xl mb-20"
      >
        {[
          { icon: Cpu, value: "75+ Models", label: "Open & Proprietary LLMs" },
          { icon: Mic, value: "< 50ms", label: "Real-time Voice Latency" },
          { icon: ImageIcon, value: "FLUX.1 & 3D", label: "High-Fidelity Studio" },
          { icon: ShieldCheck, value: "100% BYOK", label: "Bring Your Own Keys" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="glass-panel rounded-2xl p-4 md:p-5 flex flex-col items-center justify-center border border-white/5 hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] transition-all duration-300 group"
          >
            <item.icon className="h-5 w-5 text-purple-400 mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-xl md:text-2xl font-bold text-white tracking-tight">{item.value}</div>
            <div className="text-xs text-zinc-400 mt-1">{item.label}</div>
          </div>
        ))}
      </motion.div>

      {/* 3. MONOCHROME MINIMALIST AUTO-SCROLL LOGO TICKER (REMAK STYLE) */}
      <div className="w-full relative overflow-hidden pt-6 pb-6 border-t border-white/10 bg-black/40 backdrop-blur-md">
        {/* Left & Right Smooth Edge Blur Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030014] via-[#030014]/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030014] via-[#030014]/90 to-transparent z-20 pointer-events-none" />

        {/* Continuous Auto-Scroll Track */}
        <div className="flex items-center gap-12 sm:gap-16 w-max animate-logo-cloud pointer-events-auto">
          {marqueeItems.map((brand, index) => {
            const Icon = brand.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors duration-300 opacity-60 hover:opacity-100 cursor-pointer shrink-0 group"
              >
                <Icon className="h-6 w-6 text-zinc-300 group-hover:text-purple-400 transition-colors" />
                <span className="text-lg md:text-xl font-extrabold tracking-tight font-sans text-zinc-200 group-hover:text-white transition-colors">
                  {brand.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
