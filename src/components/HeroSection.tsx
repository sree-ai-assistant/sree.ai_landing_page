"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Cpu, Globe, Mic, ImageIcon } from "lucide-react";

export default function HeroSection({ onOpenWaitlist }: { onOpenWaitlist?: () => void }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden flex flex-col items-center justify-center text-center px-4">
      {/* Background Aurora Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-pink-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-aurora" />

      {/* Release Announcement Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.15)] mb-6 hover:border-blue-500/40 transition-colors cursor-pointer group"
        onClick={onOpenWaitlist}
      >
        <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
        <span className="text-xs md:text-sm font-medium bg-gradient-to-r from-blue-300 via-indigo-200 to-purple-300 bg-clip-text text-transparent">
          Sree AI Engine 2.0 Live
        </span>
        <span className="text-xs text-zinc-400 group-hover:text-white transition-colors flex items-center gap-1">
          Explore Models <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
        </span>
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.1] mb-6"
      >
        Unleash Next-Gen <br className="hidden sm:inline" />
        <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(59,130,246,0.4)]">
          Multimodal Intelligence
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="text-lg md:text-xl text-zinc-300 max-w-3xl font-normal leading-relaxed mb-10"
      >
        Experience 75+ flagship AI models in one unified platform. Real-time sub-50ms Sree Voice, FLUX.1 image studio, 2D to 3D converter, and self-hosted privacy with full BYOK support.
      </motion.p>

      {/* CTA Buttons */}
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
          className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-base bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_45px_rgba(59,130,246,0.6)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
        >
          <span>Start Free Now</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>

        <a
          href="#pricing"
          className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-base bg-white/5 hover:bg-white/10 text-zinc-200 hover:text-white border border-white/10 hover:border-white/20 backdrop-blur-md transition duration-300 flex items-center justify-center gap-2"
        >
          <span>View Plans & Pricing</span>
        </a>
      </motion.div>

      {/* Key Metric Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-5xl"
      >
        {[
          { icon: Cpu, value: "75+ Models", label: "Open & Proprietary LLMs" },
          { icon: Mic, value: "< 50ms", label: "Real-time Voice Latency" },
          { icon: ImageIcon, value: "FLUX.1 & 3D", label: "High-Fidelity Studio" },
          { icon: ShieldCheck, value: "100% BYOK", label: "Bring Your Own Keys" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="glass-panel rounded-2xl p-4 md:p-5 flex flex-col items-center justify-center border border-white/5 hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 group"
          >
            <item.icon className="h-6 w-6 text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-xl md:text-2xl font-bold text-white tracking-tight">{item.value}</div>
            <div className="text-xs text-zinc-400 mt-1">{item.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
