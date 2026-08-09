"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Mic,
  ImageIcon,
  Video,
  Wand2,
  Boxes,
  CheckCircle2,
  Zap,
  Globe,
  Shield,
  Layers,
  Sparkles,
  ArrowRight
} from "lucide-react";

const CAPABILITY_CARDS = [
  {
    id: "chat",
    title: "Sree Chat & 75+ LLM Engine",
    category: "Conversational Intelligence",
    icon: MessageSquare,
    badge: "75+ Models Available",
    description:
      "Access Meta Llama 3, Mistral, Claude, and GPT-4o in one unified chat interface with live web search aggregation and full citation index.",
    features: [
      "Bring Your Own Key (BYOK) for 0% markup",
      "Real-time web search with full citations",
      "Multi-session project threads & code execution",
      "Exportable chat logs & vector memory",
    ],
    accentColor: "from-blue-500 to-indigo-600",
    glowColor: "rgba(59, 130, 246, 0.25)",
  },
  {
    id: "voice",
    title: "Sree Voice - Sub-50ms Audio",
    category: "Real-Time Speech Engine",
    icon: Mic,
    badge: "<50ms Ultra-Low Latency",
    description:
      "Fluid, natural human verbal interaction powered by persistent Deno WebSocket streams bypassing REST latency bottlenecks.",
    features: [
      "Bidirectional WebSocket audio streaming",
      "Multi-accent & multi-lingual synthesis",
      "Instant interruption handling",
      "Custom voice cloning & pitch controls",
    ],
    accentColor: "from-purple-500 to-pink-600",
    glowColor: "rgba(168, 85, 247, 0.25)",
  },
  {
    id: "image",
    title: "Sree Image & 2D to 3D Converter",
    category: "Generative Media & Mesh",
    icon: ImageIcon,
    badge: "FLUX.1 + 3D Engine",
    description:
      "State-of-the-art text-to-image studio using FLUX.1 and Stable Diffusion 3, plus instant 2D image-to-3D object mesh generation.",
    features: [
      "FLUX.1 Schnell & Dev speed nodes",
      "2D Image to 3D GLTF/OBJ Mesh converter",
      "Negative prompt fine-tuning & LoRAs",
      "4K Upscaling & in-painting controls",
    ],
    accentColor: "from-cyan-500 to-blue-600",
    glowColor: "rgba(6, 182, 212, 0.25)",
  },
  {
    id: "video",
    title: "Sree Video Studio",
    category: "Cinematic Motion",
    icon: Video,
    badge: "Runway & Luma AI",
    description:
      "Produce cinematic video clips with camera movement controls, keyframe interpolation, and physics-driven motion simulation.",
    features: [
      "Runway Gen-3 Alpha & Luma Dream Machine",
      "Text-to-Video & Image-to-Video generation",
      "Camera motion & panning parameters",
      "1080p high bitrate MP4 exports",
    ],
    accentColor: "from-emerald-500 to-teal-600",
    glowColor: "rgba(16, 185, 129, 0.25)",
  },
  {
    id: "tools",
    title: "AI Humanizer & Enhancer",
    category: "Content Optimization Utilities",
    icon: Wand2,
    badge: "Built-in Utilities",
    description:
      "Bypass mechanical robotic phrasing with the Sree Humanizer, and refine prompt clarity automatically with the Prompt Enhancer tool.",
    features: [
      "AI text Humanizer to remove mechanical syntax",
      "One-click Prompt Enhancer for high detail",
      "Grammar, tone, and readability scoring",
      "Copywriting & code refactoring presets",
    ],
    accentColor: "from-amber-500 to-orange-600",
    glowColor: "rgba(245, 158, 11, 0.25)",
  },
];

export default function CapabilitiesSection() {
  const [selectedId, setSelectedId] = useState<string>("chat");

  const activeCard = CAPABILITY_CARDS.find((c) => c.id === selectedId) || CAPABILITY_CARDS[0];

  return (
    <section id="capabilities" className="py-24 relative overflow-hidden px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            Core Capabilities
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Everything You Need for <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Complete AI Execution
            </span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg">
            From 75+ LLM text models to real-time voice streaming and 2D-to-3D object conversion, Sree AI replaces fragmented subscriptions with a single powerhouse platform.
          </p>
        </div>

        {/* Capabilities Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Selector Navigation (Left 5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {CAPABILITY_CARDS.map((card) => {
              const isSelected = card.id === selectedId;
              const Icon = card.icon;

              return (
                <button
                  key={card.id}
                  onClick={() => setSelectedId(card.id)}
                  className={`w-full text-left p-4 md:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? "bg-white/[0.08] border-blue-500/50 shadow-[0_0_25px_rgba(59,130,246,0.2)] scale-[1.02]"
                      : "bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-tr ${card.accentColor} text-white shadow-lg`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-400 font-medium">{card.category}</div>
                      <div className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                        {card.title}
                      </div>
                    </div>
                  </div>
                  <ArrowRight
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isSelected ? "text-blue-400 translate-x-1" : "text-zinc-600 group-hover:text-zinc-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Detail Display Card (Right 7 Columns) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCard.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="glass-panel rounded-3xl p-6 md:p-8 border border-white/10 relative overflow-hidden"
              >
                {/* Glow Background Accent */}
                <div
                  className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] pointer-events-none -z-10"
                  style={{ background: activeCard.glowColor }}
                />

                <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white text-xs font-semibold">
                    <activeCard.icon className="h-3.5 w-3.5 text-blue-400" />
                    {activeCard.badge}
                  </div>
                  <span className="text-xs text-zinc-400 font-mono">ID: SREE-{activeCard.id.toUpperCase()}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                  {activeCard.title}
                </h3>
                <p className="text-zinc-300 text-base md:text-lg mb-8 leading-relaxed">
                  {activeCard.description}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                    Key Architectural Features
                  </div>
                  {activeCard.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-zinc-200">
                      <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-zinc-400">Included in all Starter & Pro tiers</span>
                  <button
                    onClick={() => window.open('https://app.sreeai.qzz.io', '_blank')}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Try Feature in App <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
