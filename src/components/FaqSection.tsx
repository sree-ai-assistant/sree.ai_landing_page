"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Send, CheckCircle2, AlertCircle, MessageSquarePlus, Sparkles } from "lucide-react";

const FAQ_ITEMS = [
  {
    id: 1,
    question: "Is Sree AI self-hostable?",
    answer:
      "Yes. Sree AI is designed to be fully self-hostable. You can deploy our application frontend, API gateway, and database containers directly into your private cloud (AWS VPC, GCP project) or on-premise hardware infrastructure.",
  },
  {
    id: 2,
    question: "What AI tools and models are included in Sree AI?",
    answer:
      "Sree AI unifies Sree Chat (75+ open LLMs), Sree Voice (sub-50ms real-time audio synthesis), Sree Image (FLUX.1 & Nano Banana), Sree Video (Google Veo 3.1 & Google Omni Flash), 2D to 3D Convertor, and AI Humanizer & Enhancer under one unified account.",
  },
  {
    id: 3,
    question: "How does Bring Your Own Keys (BYOK) work?",
    answer:
      "BYOK allows you to connect your own API keys from inference providers like NVIDIA, Google, Groq, and Deepgram (with Anthropic & OpenAI support coming soon). When enabled, your requests route directly through your keys with zero platform markups across all plans.",
  },
  {
    id: 4,
    question: "What are the storage retention policies?",
    answer:
      "On the Free plan ($0 / ₹0), generated chats, audio streams, images, and videos are automatically purged after 30 days. On Starter ($8/mo or ₹399/mo), data is retained for 3 months. On Pro ($29/mo or ₹899/mo), your data has no expiration period.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  // Question Submission Form State
  const [userEmail, setUserEmail] = useState("");
  const [userQuestion, setUserQuestion] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [rateError, setRateError] = useState<string | null>(null);

  const handleQuestionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userEmail || !userQuestion) return;
    setSubmitting(true);
    setRateError(null);

    try {
      const response = await fetch("/api/faq-question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
          question: userQuestion,
          source: "Sree AI Landing Page FAQ",
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.status === 429) {
        const data = await response.json();
        setRateError(
          data.error || "Too many question submissions from your IP. Please wait a few minutes."
        );
        return;
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting FAQ question:", err);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="faq" className="relative py-24 md:py-18 overflow-hidden">
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
            Everything you need to know about Sree AI tools, pricing, models, and self-hosting options.
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
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-300 transition-transform duration-300 ${isOpen ? "rotate-180 bg-blue-500/20 text-blue-400 border-blue-500/30" : ""
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

        {/* Compact Horizontal FAQ Question Submission Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 rounded-2xl border border-white/10 bg-[#07051a]/90 p-4 md:p-5 shadow-[0_0_50px_rgba(59,130,246,0.12)] backdrop-blur-xl relative overflow-hidden"
        >
          {!submitted ? (
            <div className="relative z-10 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <MessageSquarePlus className="h-4 w-4 text-blue-400 shrink-0" />
                <h3 className="text-xs md:text-sm font-semibold text-white">
                  Have a question not answered above? Ask us directly:
                </h3>
              </div>

              {rateError && (
                <div className="flex items-center gap-2 p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                  <span>{rateError}</span>
                </div>
              )}

              <form onSubmit={handleQuestionSubmit} className="flex flex-col sm:flex-row items-center gap-2.5">
                <input
                  type="email"
                  required
                  suppressHydrationWarning
                  placeholder="Your email address"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="w-full sm:w-1/3 rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-200"
                />

                <input
                  type="text"
                  required
                  suppressHydrationWarning
                  placeholder="Type your question..."
                  value={userQuestion}
                  onChange={(e) => setUserQuestion(e.target.value)}
                  className="w-full sm:flex-1 rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-200"
                />

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto shrink-0 flex items-center justify-center gap-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs py-2.5 px-5 shadow-[0_0_15px_rgba(37,99,235,0.35)] transition duration-200 cursor-pointer"
                >
                  {submitting ? (
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5 animate-spin text-white" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5">
                      <Send className="h-3.5 w-3.5" />
                      Submit Question
                    </span>
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div className="relative z-10 flex items-center justify-between gap-3 py-1">
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Question submitted! We'll reply to <strong className="text-white">{userEmail}</strong>.</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setUserQuestion("");
                }}
                className="text-xs text-zinc-400 hover:text-white underline cursor-pointer"
              >
                Ask another
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
