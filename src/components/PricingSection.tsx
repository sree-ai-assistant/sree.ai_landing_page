"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Zap, Sparkles, Shield, ChevronDown, ChevronUp, Star, HelpCircle } from "lucide-react";

interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  usdMonthly: number;
  usdAnnual: number;
  inrMonthly: number;
  inrAnnual: number;
  description: string;
  ctaText: string;
  modelAccess: string;
  chatDaily: string;
  voiceDaily: string;
  imageDaily: string;
  videoDaily: string;
  byok: boolean;
  features: string[];
}

const PLANS: PricingPlan[] = [
  {
    id: "free",
    name: "FREE",
    usdMonthly: 0,
    usdAnnual: 0,
    inrMonthly: 0,
    inrAnnual: 0,
    description: "Perfect for exploring Sree AI with no initial commitment.",
    ctaText: "Sign Up Free",
    modelAccess: "18+ Models",
    chatDaily: "10/day",
    voiceDaily: "20/day",
    imageDaily: "5/day",
    videoDaily: "—",
    byok: true,
    features: [
      "Chat, image & video storage (30 days auto-delete)",
      "Limited chat history search",
      "Access to limited tools (Humanizer, Enhancer)",
      "Standard processing queues",
      "BYOK (Bring Your Own Key) Support",
    ],
  },
  {
    id: "starter",
    name: "STARTER",
    badge: "BEST VALUE",
    popular: true,
    usdMonthly: 8,
    usdAnnual: 6.40, // 20% off
    inrMonthly: 399,
    inrAnnual: 319,
    description: "Ideal for creators and professionals needing reliable daily limits.",
    ctaText: "Upgrade to Starter",
    modelAccess: "70+ Models",
    chatDaily: "50/day",
    voiceDaily: "60/day",
    imageDaily: "30/day",
    videoDaily: "10/day",
    byok: true,
    features: [
      "Chat, image & video storage (3 months auto-delete)",
      "Unlimited chat history search",
      "Standard processing queues",
      "Access to all tools (incl. 2D to 3D Converter)",
      "Access to Flagship Models",
      "BYOK (Bring Your Own Key) Support",
    ],
  },
  {
    id: "pro",
    name: "PRO",
    badge: "UNLEASHED",
    usdMonthly: 29,
    usdAnnual: 23.20, // 20% off
    inrMonthly: 899,
    inrAnnual: 719,
    description: "Designed for power users demanding highest limits & priority GPU speeds.",
    ctaText: "Upgrade to Pro",
    modelAccess: "75+ Models",
    chatDaily: "200/day",
    voiceDaily: "100/day",
    imageDaily: "70/day",
    videoDaily: "30/day",
    byok: true,
    features: [
      "Chat, image & video storage (No expiration ∞)",
      "Unlimited chat history search",
      "Highest priority GPU queues",
      "Dedicated VIP developer support (24/7)",
      "Access to all tools (incl. 2D to 3D Converter)",
      "Access to Flagship Models & BYOK Support",
    ],
  },
];

const COMPARISON_ROWS = [
  { feature: "Monthly Pricing (USD / INR)", free: "$0 / ₹0", starter: "$8 / ₹399", pro: "$29 / ₹899" },
  { feature: "Annual Discount Price", free: "—", starter: "$6.40/mo (Save 20%)", pro: "$23.20/mo (Save 20%)" },
  { feature: "Model Access", free: "18+ models", starter: "70+ models", pro: "75+ models" },
  { feature: "Daily Chat Requests", free: "10 / day", starter: "50 / day", pro: "200 / day" },
  { feature: "Monthly Chat Requests", free: "50 / month", starter: "600 / month", pro: "3,000 / month" },
  { feature: "Chat Limit per Minute", free: "5 / min", starter: "10 / min", pro: "20 / min" },
  { feature: "Daily Voice Synthesis", free: "20 / day", starter: "60 / day", pro: "100 / day" },
  { feature: "Monthly Voice Synthesis", free: "50 / month", starter: "500 / month", pro: "1,000 / month" },
  { feature: "Daily Image Generations", free: "5 / day", starter: "30 / day", pro: "70 / day" },
  { feature: "Monthly Image Generations", free: "30 / month", starter: "70 / month", pro: "1,000 / month" },
  { feature: "Daily Video Generations", free: "—", starter: "10 / day", pro: "30 / day" },
  { feature: "Monthly Video Generations", free: "—", starter: "50 / month", pro: "200 / month" },
  { feature: "Database Auto-Delete Period", free: "30 days", starter: "3 months", pro: "∞ No expiration" },
  { feature: "Tools Access", free: "Limited (Humanizer, Enhancer)", starter: "All Tools (incl. 2D to 3D)", pro: "All Tools (incl. 2D to 3D)" },
  { feature: "Access to Flagship Models", free: "—", starter: "✓ Included", pro: "✓ Included" },
  { feature: "Priority GPU Queues", free: "Standard", starter: "Standard", pro: "Highest Priority" },
  { feature: "Bring Your Own Keys (BYOK)", free: "✓ Supported", starter: "✓ Supported", pro: "✓ Supported" },
  { feature: "Support Priority", free: "Standard", starter: "Standard", pro: "24/7 VIP Priority" },
];

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState<boolean>(false);
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");
  const [showTable, setShowTable] = useState<boolean>(false);

  return (
    <section id="pricing" className="py-24 relative overflow-hidden px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            Simple, Transparent Pricing
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Choose the Perfect Tier for <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Your AI Operations
            </span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg">
            Unlock intelligent AI chats, high-fidelity voice, and professional graphics generation with no hidden fees.
          </p>

          {/* Toggle Controls: Billing Cycle & Currency */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {/* Billing Toggle (Monthly / Annual) */}
            <div className="bg-white/[0.04] p-1.5 rounded-full border border-white/10 flex items-center gap-1 backdrop-blur-md">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  !isAnnual
                    ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                  isAnnual
                    ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <span>Annually</span>
                <span className="bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">
                  Save 20%
                </span>
              </button>
            </div>

            {/* Currency Switcher */}
            <div className="bg-white/[0.04] p-1 rounded-full border border-white/10 flex items-center gap-1 backdrop-blur-md">
              <button
                onClick={() => setCurrency("USD")}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  currency === "USD"
                    ? "bg-white/15 text-white border border-white/20"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                $ USD
              </button>
              <button
                onClick={() => setCurrency("INR")}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  currency === "INR"
                    ? "bg-white/15 text-white border border-white/20"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                ₹ INR
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          {PLANS.map((plan) => {
            const displayPrice =
              currency === "USD"
                ? isAnnual
                  ? plan.usdAnnual
                  : plan.usdMonthly
                : isAnnual
                ? plan.inrAnnual
                : plan.inrMonthly;

            const currencySymbol = currency === "USD" ? "$" : "₹";

            return (
              <motion.div
                key={plan.id}
                layout
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`relative rounded-3xl p-6 md:p-8 flex flex-col justify-between border transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-b from-blue-950/40 via-[#030014]/90 to-purple-950/40 border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.25)]"
                    : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                {/* Popular Badge Header */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white tracking-wide">{plan.name}</h3>
                  </div>

                  {/* Animated Price Counter */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={`${plan.id}-${displayPrice}-${currency}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            {currencySymbol}
                            {displayPrice}
                          </motion.span>
                        </AnimatePresence>
                      </span>
                      {plan.usdMonthly > 0 && (
                        <span className="text-zinc-400 text-sm font-medium">/mo</span>
                      )}
                    </div>
                    {isAnnual && plan.usdMonthly > 0 && (
                      <div className="text-xs text-purple-300 mt-1 font-medium">
                        Billed annually (Save 20%)
                      </div>
                    )}
                  </div>

                  <p className="text-zinc-400 text-sm mb-6 leading-relaxed min-h-[40px]">
                    {plan.description}
                  </p>

                  {/* Quick Spec Metrics Box */}
                  <div className="bg-black/40 rounded-xl p-3 border border-white/5 space-y-2 text-xs mb-6 font-mono">
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Model Access:</span>
                      <span className="text-white font-semibold">{plan.modelAccess}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Chat Requests:</span>
                      <span className="text-white font-semibold">{plan.chatDaily}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Voice Requests:</span>
                      <span className="text-white font-semibold">{plan.voiceDaily}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Image Requests:</span>
                      <span className="text-white font-semibold">{plan.imageDaily}</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-300">
                        <Check className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => window.open("https://app.sreeai.qzz.io/pricing", "_blank")}
                  className={`w-full py-3.5 px-6 rounded-2xl font-bold text-sm transition-all duration-300 cursor-pointer ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-[0_0_25px_rgba(59,130,246,0.4)]"
                      : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                  }`}
                >
                  {plan.ctaText}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Expandable Comparison Matrix */}
        <div className="text-center">
          <button
            onClick={() => setShowTable(!showTable)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-semibold transition-all cursor-pointer"
          >
            <span>{showTable ? "Hide Full Feature Comparison" : "Compare All Plan Details"}</span>
            {showTable ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>

          <AnimatePresence>
            {showTable && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="mt-10 overflow-hidden"
              >
                <div className="glass-panel rounded-3xl border border-white/10 overflow-x-auto text-left">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-white/5 border-b border-white/10 text-zinc-300 font-mono text-xs uppercase">
                      <tr>
                        <th className="py-4 px-6">Features & Limits</th>
                        <th className="py-4 px-6">Free</th>
                        <th className="py-4 px-6 text-blue-400">Starter</th>
                        <th className="py-4 px-6 text-purple-400">Pro</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {COMPARISON_ROWS.map((row, idx) => (
                        <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                          <td className="py-3.5 px-6 font-medium text-white">{row.feature}</td>
                          <td className="py-3.5 px-6 text-zinc-400">{row.free}</td>
                          <td className="py-3.5 px-6 text-zinc-200 font-semibold">{row.starter}</td>
                          <td className="py-3.5 px-6 text-blue-300 font-semibold">{row.pro}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
