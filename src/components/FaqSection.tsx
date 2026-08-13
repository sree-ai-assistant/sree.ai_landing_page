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
      "On the Free plan ($0), generated chats, audio streams, images, and videos are automatically purged after 30 days. On Starter ($8/mo), data is retained for 3 months. On Pro ($29/mo), your data has no expiration period.",
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

        {/* Question Submission Webhook Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 rounded-3xl border border-white/10 bg-[#08061e]/90 p-8 md:p-10 shadow-[0_0_80px_rgba(59,130,246,0.15)] backdrop-blur-2xl relative overflow-hidden"
        >
          {/* Ambient Glow */}
          <div className="absolute -top-20 -right-20 h-44 w-44 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />

          {!submitted ? (
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-400">
                  <MessageSquarePlus className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    Have a question not answered above?
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-400">
                    Ask us directly and our team will get back to you at your email.
                  </p>
                </div>
              </div>

              {rateError && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{rateError}</span>
                </div>
              )}

              <form onSubmit={handleQuestionSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                      Your Question
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. How do I self-host Sree AI on GCP?"
                      value={userQuestion}
                      onChange={(e) => setUserQuestion(e.target.value)}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-200"
                    />
                  </div>
                </div>

                <div className="flex justify-end mt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full md:w-auto flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm py-3 px-6 shadow-[0_0_20px_rgba(37,99,235,0.4)] transition duration-200 cursor-pointer"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 animate-spin text-white" />
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Submit Question
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="relative z-10 flex flex-col items-center justify-center text-center py-6 gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h4 className="text-xl font-bold text-white">Question Submitted!</h4>
              <p className="text-sm text-zinc-300 max-w-md leading-relaxed">
                Thank you! We've received your question and our team will respond to{" "}
                <span className="text-blue-400 font-semibold">{userEmail}</span> shortly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setUserQuestion("");
                }}
                className="mt-3 rounded-lg bg-white/10 hover:bg-white/15 px-5 py-2 text-xs font-semibold text-white transition duration-150 cursor-pointer"
              >
                Ask Another Question
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
