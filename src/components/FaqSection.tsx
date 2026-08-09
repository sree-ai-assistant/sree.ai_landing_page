"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, HelpCircle } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "Is Sree AI fully open-source & self-hostable?",
    answer:
      "Yes. Sree AI is licensed under the Apache 2.0 open-source license. The Next.js frontend, Deno Edge Functions gateway, and Supabase database migrations are public and fully self-hostable on your private AWS VPC, GCP, or bare-metal hardware.",
  },
  {
    question: "How does Bring Your Own Key (BYOK) work?",
    answer:
      "With BYOK support, you can enter your personal OpenAI, Anthropic, or Google Gemini API keys into your account settings. Sree AI routes queries directly to provider endpoints without adding token markup fees.",
  },
  {
    question: "How does Sree Voice achieve sub-50ms latency?",
    answer:
      "Sree Voice bypasses traditional HTTP REST polling. It utilizes persistent bidirectional WebSocket streams connected to optimized Deno Edge nodes. Text-to-speech synthesis runs concurrently with audio buffer streaming for zero-latency conversation.",
  },
  {
    question: "What AI models power Sree Image and Sree Video?",
    answer:
      "Sree Image incorporates FLUX.1 (Schnell & Dev) and Stable Diffusion 3, plus an instant 2D to 3D object mesh converter. Sree Video integrates Runway Gen-3 Alpha and Luma Dream Machine APIs for high-bitrate cinematic video clips.",
  },
  {
    question: "What is the difference between Starter ($8) and Pro ($29)?",
    answer:
      "Starter ($8/mo) offers 70+ models, 50 chats/day, 60 voice calls/day, 30 images/day, 10 videos/day, and 3-month DB retention. Pro ($29/mo) unlocks 75+ models, 200 chats/day, 100 voice calls/day, 70 images/day, 30 videos/day, permanent ∞ DB retention, highest priority GPU queues, and 24/7 VIP support.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative overflow-hidden px-4 bg-black/30">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="h-3.5 w-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Everything You Need <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              To Know About Sree AI
            </span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 md:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02]"
                >
                  <span className="text-base md:text-lg font-bold text-white">
                    {item.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-blue-400 bg-blue-500/10 border-blue-500/30" : ""
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
                      <div className="px-5 pb-6 md:px-6 md:pb-6 text-sm md:text-base text-zinc-300 leading-relaxed border-t border-white/5 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
