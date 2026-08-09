"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Mic,
  ImageIcon,
  Video,
  Box,
  Wand2,
  Sparkles,
  ArrowRight,
  Zap,
  ShieldCheck,
} from "lucide-react";

interface ToolsGridProps {
  onOpenWaitlist?: (tier?: string) => void;
}

const TOOLS = [
  {
    id: "chat",
    title: "Sree Chat",
    category: "LLM & Contextual Intelligence",
    description:
      "Access 75+ flagship open-weight LLMs including Llama 3, Mistral, and DeepSeek. Features live web search indexing and citation precision.",
    icon: MessageSquare,
    badge: "75+ Models",
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    glow: "shadow-[0_0_30px_rgba(59,130,246,0.3)]",
    metrics: "Streaming: ~150 tokens/sec",
  },
  {
    id: "voice",
    title: "Sree Voice",
    category: "Real-Time Audio Synthesis",
    description:
      "Sub-50ms latency voice dialogue. Direct WebSocket streaming connects text-to-speech & speech recognition for natural, human-like voice conversations.",
    icon: Mic,
    badge: "Sub-50ms Latency",
    gradient: "from-purple-600 via-pink-600 to-rose-600",
    glow: "shadow-[0_0_30px_rgba(168,85,247,0.3)]",
    metrics: "Voice Latency: 42ms",
  },
  {
    id: "image",
    title: "Sree Image",
    category: "FLUX.1 & Diffusion Engine",
    description:
      "Photorealistic text-to-image synthesis using FLUX.1 (Schnell & Dev) and Stable Diffusion 3. Supports custom LoRAs and rapid speed nodes.",
    icon: ImageIcon,
    badge: "FLUX.1 Schnell",
    gradient: "from-emerald-500 via-teal-600 to-cyan-600",
    glow: "shadow-[0_0_30px_rgba(16,185,129,0.3)]",
    metrics: "Render Speed: 3.2s",
  },
  {
    id: "video",
    title: "Sree Video",
    category: "Cinematic Video Studio",
    description:
      "Transform prompts or static images into fluid, cinematic high-framerate videos with integrated Luma Dream Machine & Runway Gen-3 APIs.",
    icon: Video,
    badge: "4K Motion",
    gradient: "from-amber-500 via-orange-600 to-red-600",
    glow: "shadow-[0_0_30px_rgba(245,158,11,0.3)]",
    metrics: "Camera Controls: Included",
  },
  {
    id: "3d",
    title: "2D to 3D Convertor",
    category: "Spatial Geometry & Assets",
    description:
      "Automatically reconstruct 2D images and textures into textured 3D OBJ/GLTF spatial meshes for gaming, AR/VR, and e-commerce.",
    icon: Box,
    badge: "GLTF / OBJ Mesh",
    gradient: "from-cyan-500 via-blue-600 to-indigo-600",
    glow: "shadow-[0_0_30px_rgba(6,182,212,0.3)]",
    metrics: "Mesh Speed: <15s",
  },
  {
    id: "humanizer",
    title: "AI Humanizer & Enhancer",
    category: "Tone & Style Polishing",
    description:
      "Refine synthetic text into natural human prose while removing robotic AI patterns, improving readability, and polishing grammar automatically.",
    icon: Wand2,
    badge: "Bypass Patterns",
    gradient: "from-violet-600 via-purple-600 to-indigo-600",
    glow: "shadow-[0_0_30px_rgba(139,92,246,0.3)]",
    metrics: "Human Score: 99.2%",
  },
];

export default function ToolsGrid({ onOpenWaitlist }: ToolsGridProps) {
  return (
    <section id="tools" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Complete AI Tool Suite
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white"
          >
            One Platform. Every AI Tool You Need.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base md:text-lg text-zinc-400 leading-relaxed"
          >
            Stop juggling multiple subscriptions. Sree AI unifies text intelligence, real-time voice, photorealistic graphics, video generation, 3D assets, and text polishing in a single open platform.
          </motion.p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TOOLS.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl border border-white/10 bg-[#07051a]/80 backdrop-blur-xl p-7 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:bg-[#0c0926]"
              >
                {/* Glow on hover */}
                <div
                  className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${tool.glow}`}
                />

                <div>
                  {/* Top bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr ${tool.gradient} p-[1px] shadow-lg`}
                    >
                      <div className="flex h-full w-full items-center justify-center rounded-[15px] bg-zinc-950/90 backdrop-blur-md">
                        <Icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>

                    <span className="text-xs font-semibold tracking-wide text-zinc-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                      {tool.badge}
                    </span>
                  </div>

                  {/* Category & Title */}
                  <span className="text-xs uppercase tracking-wider font-semibold text-blue-400">
                    {tool.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1 group-hover:text-blue-300 transition duration-200">
                    {tool.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                    {tool.description}
                  </p>
                </div>

                {/* Footer bar with metric & CTA button */}
                <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <Zap className="h-3.5 w-3.5 text-amber-400" />
                    <span>{tool.metrics}</span>
                  </div>

                  <button
                    onClick={() => onOpenWaitlist?.("starter")}
                    className="flex items-center gap-1.5 text-xs font-semibold text-white hover:text-blue-400 transition duration-150 group/btn"
                  >
                    <span>Try Tool</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform duration-150" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-950/40 via-indigo-950/40 to-purple-950/40 p-6 md:p-8 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 border border-blue-500/30 text-blue-400">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">
                Bring Your Own Keys (BYOK) Guarantee
              </h4>
              <p className="text-sm text-zinc-400 mt-1">
                Prefer using your own OpenAI, Anthropic, or Replicate API keys? All Sree AI tools support zero-markup BYOK on all plans ($0 Free, Starter, and Pro).
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenWaitlist?.("starter")}
            className="shrink-0 px-6 py-3 rounded-xl bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-200 transition duration-150 shadow-lg cursor-pointer"
          >
            Start Using Tools Free
          </button>
        </motion.div>
      </div>
    </section>
  );
}
