"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Database, Shield, Zap, Lock, Cpu, Globe, CheckCircle2 } from "lucide-react";

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="py-24 relative overflow-hidden px-4 bg-black/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Shield className="h-3.5 w-3.5" />
            Enterprise Infrastructure
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Engineered for <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
              Speed, Security & BYOK Autonomy
            </span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg">
            Sree AI puts data control back in your hands. Bring your own API keys, deploy in your private cloud, or use our global low-latency edge network.
          </p>
        </div>

        {/* Architecture Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Card 1: BYOK Key Security */}
          <motion.div
            whileHover={{ y: -5 }}
            className="glass-panel rounded-3xl p-6 md:p-8 border border-white/10 relative overflow-hidden"
          >
            <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit mb-6">
              <Lock className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">100% BYOK Privacy</h3>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              Plug in your custom Anthropic, OpenAI, or Google Gemini API keys directly into Sree AI. We route calls with 0% token markup and zero prompt logging.
            </p>
            <div className="space-y-2 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Zero model markup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Client-side key encryption</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Edge Routing & Latency */}
          <motion.div
            whileHover={{ y: -5 }}
            className="glass-panel rounded-3xl p-6 md:p-8 border border-white/10 relative overflow-hidden"
          >
            <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 w-fit mb-6">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Sub-50ms Edge Nodes</h3>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              Deploys persistent Deno WebSockets across 35+ global edge locations, streaming real-time audio and text buffers with zero HTTP handshake overhead.
            </p>
            <div className="space-y-2 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-400" />
                <span>Persistent WebSocket connections</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-400" />
                <span>Concurrent speech synthesis</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Supabase Data Policies */}
          <motion.div
            whileHover={{ y: -5 }}
            className="glass-panel rounded-3xl p-6 md:p-8 border border-white/10 relative overflow-hidden"
          >
            <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 w-fit mb-6">
              <Database className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Custom Data Retention</h3>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              Choose your data lifecycle policy: automatic 30-day purge for Free users, 3-month retention for Starter, or permanent ∞ storage for Pro accounts.
            </p>
            <div className="space-y-2 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-purple-400" />
                <span>Automated vector index cleaning</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-purple-400" />
                <span>Self-hosted bare-metal options</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
