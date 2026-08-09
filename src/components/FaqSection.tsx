"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

const FAQ_ITEMS = [
  {
    id: 1,
    question: "Is Sree AI fully open-source and self-hostable?",
    answer:
      "Yes. Sree AI's core codebase is licensed under the Apache 2.0 open-source license. You can deploy our Next.js frontend, Deno Edge gateway, and Supabase vector database containers directly into your private AWS VPC, GCP project, or on-premise hardware.",
  },
  {
    id: 2,
    question: "What AI tools are included in Sree AI?",
    answer:
      "Sree AI unifies Sree Chat (75+ open LLMs), Sree Voice (sub-50ms real-time audio synthesis), Sree Image (FLUX.1 & Stable Diffusion 3), Sree Video (Runway Gen-3 & Luma APIs), 2D to 3D Convertor, and AI Humanizer & Enhancer under one single account.",
  },
  {
    id: 3,
    question: "How does Bring Your Own Keys (BYOK) work?",
    answer: "BYOK allows you to enter your own OpenAI, Anthropic, or Replicate API keys in your settings dashboard. When enabled, your queries route directly through your keys with zero platform markups across Free ($0), Starter ($8), and Pro ($29) plans.",
  },
  {
    id: 4,
    question: "What are the storage auto-delete retention policies?",
    answer:
      "On the Free plan ($0), generated chats, audio streams, images, and videos are automatically purged after 30 days. On Starter ($8/mo), data is retained for 3 months. On Pro ($29/mo), your data has no expiration period.",
  },
  {
    id: 5,
    question: "How does Sree Voice achieve sub-50ms latency?",
    answer:
      "Sree Voice uses persistent bidirectional WebSocket connections directly to distributed Deno Edge nodes. Text-to-Speech (TTS) and Automatic Speech Recognition (ASR) pipelines run concurrently, streaming audio buffers instantly to eliminate robotic pauses.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <HelpCircle className="h-3.5 w-3.5" />
            Frequently Asked Questions
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white"
          >
            Got Questions? We've Got Answers.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base md:text-lg text-zinc-400"
          >
            Everything you need to know about Sree AI tools, pricing, open models, and self-hosting options.
          </motion.p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-[#07051a]/80 backdrop-blur-xl overflow-hidden transition-colors duration-200 hover:border-white/20"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left transition duration-150 cursor-pointer"
                >
                  <span className="text-base md:text-lg font-semibold text-white pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-300 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-blue-500/20 text-blue-400 border-blue-500/30" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-sm md:text-base text-zinc-400 leading-relaxed border-t border-white/5 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
