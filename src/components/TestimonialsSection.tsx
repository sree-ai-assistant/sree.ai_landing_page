"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, Sparkles } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "Sree AI's real-time voice latency is mind-blowing. Our users hold natural verbal conversations with less than 50ms latency, completely removing awkward pauses.",
    name: "Dr. Elena Rostova",
    role: "Director of Conversational AI",
    company: "NeuralFlow Systems",
    metrics: "Voice Latency: 42ms",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  },
  {
    quote: "Integrating Sree Image and 2D to 3D converter into our studio workflow cut asset creation from days to under 10 minutes. The FLUX.1 speed nodes are incredibly stable.",
    name: "Aiko Tanaka",
    role: "Lead Creative Technologist",
    company: "Dimension Studios",
    metrics: "Generation Speed: 3.2s",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
  },
  {
    quote: "The ability to bring our own API keys (BYOK) and self-host the entire Sree AI infrastructure with Deno and Supabase gave us total security compliance in under an hour.",
    name: "Marcus Vance",
    role: "VP of Engineering & Security",
    company: "Cognitive Security Corp",
    metrics: "Cluster Setup: <1hr",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
  {
    quote: "Web search tool integration inside Sree Chat is outstanding. It automatically aggregates search indexes and outputs fully cited markdown summaries with 99.4% precision.",
    name: "Sarah Jenkins",
    role: "Lead Knowledge Graph Engineer",
    company: "Contextual AI",
    metrics: "Citation Precision: 99.4%",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            Loved by Developers & Creators
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Trusted by Teams Building <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              The Future of AI
            </span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg">
            See how forward-thinking engineering and design teams leverage Sree AI to scale their multimodal workflows.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="glass-panel rounded-3xl p-6 md:p-8 border border-white/10 flex flex-col justify-between relative"
            >
              <Quote className="h-8 w-8 text-blue-500/20 absolute top-6 right-6" />

              <div>
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-zinc-200 text-base md:text-lg mb-6 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-11 w-11 rounded-full object-cover border border-white/20"
                  />
                  <div>
                    <div className="text-sm font-bold text-white">{t.name}</div>
                    <div className="text-xs text-zinc-400">
                      {t.role} · <span className="text-zinc-300 font-medium">{t.company}</span>
                    </div>
                  </div>
                </div>

                <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-mono font-semibold">
                  {t.metrics}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
