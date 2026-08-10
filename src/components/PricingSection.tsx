"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles, HelpCircle, ChevronDown, ArrowRight } from "lucide-react";
import { FiCheck, FiMinus } from "react-icons/fi";

interface PricingSectionProps {
  onOpenWaitlist?: (tier?: string) => void;
}

export default function PricingSection({ onOpenWaitlist }: PricingSectionProps) {
  const [annualBilling, setAnnualBilling] = useState(false);
  const [showComparison, setShowComparison] = useState(false);

  // Prices: Free $0, Starter $8 ($6.40 annual), Pro $29 ($23.20 annual)
  const plans = [
    {
      id: "free",
      name: "FREE",
      priceMonthly: 0,
      priceAnnual: 0,
      badge: null,
      description: "Perfect for exploring Sree AI with no initial commitment.",
      buttonText: "Sign Up",
      buttonVariant: "secondary",
      specs: [
        { label: "Model Access", val: "18+ Models" },
        { label: "Chat Requests", val: "10/day" },
        { label: "Voice Requests", val: "20/day" },
        { label: "Image Requests", val: "5/day" },
        { label: "BYOK Support", val: "BYOK ✓" },
      ],
      features: [
        "Chat, image & video storage (30 days auto-delete)",
        "Limited chat history search",
        "Access to limited tools (Humanizer, Enhancer)",
      ],
    },
    {
      id: "starter",
      name: "STARTER",
      priceMonthly: 8,
      priceAnnual: 6.4,
      discountText: "-20% OFF",
      badge: "BEST VALUE",
      description: "Ideal for creators and professionals needing reliable daily limits.",
      buttonText: "Upgrade to Starter",
      buttonVariant: "primary",
      specs: [
        { label: "Model Access", val: "70+ Models" },
        { label: "Chat Requests", val: "50/day" },
        { label: "Voice Requests", val: "60/day" },
        { label: "Image Requests", val: "30/day" },
        { label: "Video Requests", val: "10/day" },
        { label: "BYOK Support", val: "BYOK ✓" },
      ],
      features: [
        "Chat, image & video storage (3 months auto-delete)",
        "Unlimited chat history search",
        "Standard processing queues",
        "Access to all tools (incl. 2D to 3D Convertor)",
      ],
    },
    {
      id: "pro",
      name: "PRO",
      priceMonthly: 29,
      priceAnnual: 23.2,
      discountText: "-20% OFF",
      badge: "UNLEASHED",
      description: "Designed for power users demanding highest limits & priority GPU speeds.",
      buttonText: "Upgrade to Pro",
      buttonVariant: "accent",
      specs: [
        { label: "Model Access", val: "75+ Models" },
        { label: "Chat Requests", val: "200/day" },
        { label: "Voice Requests", val: "100/day" },
        { label: "Image Requests", val: "70/day" },
        { label: "Video Requests", val: "30/day" },
        { label: "BYOK Support", val: "BYOK ✓" },
      ],
      features: [
        "Chat, image & video storage (no expiration)",
        "Unlimited chat history search",
        "Highest priority GPU queues",
        "Dedicated 24/7 VIP developer support",
        "Access to all tools (incl. 2D to 3D Convertor)",
      ],
    },
  ];

  // Feature Comparison Data
  const comparisonRows = [
    { name: "Monthly Pricing", free: "$0", starter: "$8/mo", pro: "$29/mo" },
    { name: "Annual Discount Rate", free: "—", starter: "$6.40/mo (Save 20%)", pro: "$23.20/mo (Save 20%)" },
    { name: "Model Access", free: "18+ models", starter: "70+ models", pro: "75+ models" },
    { name: "Daily Chat Requests", free: "10 / day", starter: "50 / day", pro: "200 / day" },
    { name: "Monthly Chat Quota", free: "50 / month", starter: "600 / month", pro: "3,000 / month" },
    { name: "Chat Limit per Minute", free: "5 / min", starter: "10 / min", pro: "20 / min" },
    { name: "Daily Voice Synthesis", free: "20 / day", starter: "60 / day", pro: "100 / day" },
    { name: "Monthly Voice Synthesis", free: "50 / month", starter: "500 / month", pro: "1,000 / month" },
    { name: "Daily Image Generations", free: "5 / day", starter: "30 / day", pro: "70 / day" },
    { name: "Monthly Image Generations", free: "30 / month", starter: "70 / month", pro: "1,000 / month" },
    { name: "Daily Video Generations", free: "—", starter: "10 / day", pro: "30 / day" },
    { name: "Monthly Video Generations", free: "—", starter: "50 / month", pro: "200 / month" },
    { name: "Database Auto-Delete Period", free: "30 days", starter: "3 months", pro: "Unlimited (∞)" },
    { name: "Tools Access", free: "Limited (Humanizer, Enhancer)", starter: "All Tools (incl. 2D to 3D)", pro: "All Tools (incl. 2D to 3D)" },
    { name: "Access to Flagship Models", free: false, starter: true, pro: true },
    { name: "Priority GPU Queues", free: false, starter: false, pro: true },
    { name: "Bring Your Own Keys (BYOK)", free: true, starter: true, pro: true },
    { name: "Support SLA Priority", free: "Standard", starter: "Standard", pro: "24/7 VIP Priority" },
  ];

  return (
    <section id="pricing" className="relative py-24 md:py-32 overflow-hidden">
      {/* Glow aura */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-indigo-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Simple, Transparent Pricing
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white"
          >
            Predictable Costs for Every AI Workflow.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base md:text-lg text-zinc-400 leading-relaxed"
          >
            Choose the perfect tier to unlock intelligent AI chats, high-fidelity voice synthesis, and professional graphics generation.
          </motion.p>

          {/* Animated Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <span
              className={`text-sm font-medium transition-colors cursor-pointer ${
                !annualBilling ? "text-white font-semibold" : "text-zinc-400"
              }`}
              onClick={() => setAnnualBilling(false)}
            >
              Monthly
            </span>

            {/* Toggle Switch */}
            <button
              onClick={() => setAnnualBilling(!annualBilling)}
              className="relative flex h-8 w-16 items-center rounded-full bg-white/10 p-1 border border-white/15 transition-colors duration-300 focus:outline-none cursor-pointer"
            >
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`h-6 w-6 rounded-full bg-gradient-to-r ${
                  annualBilling
                    ? "from-purple-500 to-indigo-500 translate-x-8 shadow-[0_0_12px_rgba(168,85,247,0.5)]"
                    : "from-blue-500 to-indigo-500 translate-x-0 shadow-[0_0_12px_rgba(59,130,246,0.5)]"
                }`}
              />
            </button>

            <span
              className={`flex items-center gap-2 text-sm font-medium transition-colors cursor-pointer ${
                annualBilling ? "text-white font-semibold" : "text-zinc-400"
              }`}
              onClick={() => setAnnualBilling(true)}
            >
              <span>Annually</span>
              <span className="rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 px-2.5 py-0.5 text-xs font-semibold">
                Save 20%
              </span>
            </span>
          </motion.div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const price = annualBilling ? plan.priceAnnual : plan.priceMonthly;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col justify-between rounded-3xl p-8 backdrop-blur-2xl transition-all duration-300 ${
                  plan.badge === "BEST VALUE"
                    ? "border-2 border-blue-500/50 bg-[#0b0826]/90 shadow-[0_0_50px_rgba(59,130,246,0.25)] lg:-translate-y-2"
                    : plan.badge === "UNLEASHED"
                    ? "border border-purple-500/40 bg-[#090621]/80 shadow-[0_0_40px_rgba(168,85,247,0.2)]"
                    : "border border-white/10 bg-[#07051a]/70 hover:border-white/20"
                }`}
              >
                {/* Top Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 right-6">
                    <span
                      className={`px-3 py-1 text-xs font-extrabold uppercase tracking-wider rounded-full shadow-lg ${
                        plan.badge === "BEST VALUE"
                          ? "bg-blue-600 text-white shadow-blue-500/40"
                          : "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-purple-500/40"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tag */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold tracking-wider text-white uppercase">
                      {plan.name}
                    </h3>
                    {annualBilling && plan.discountText && (
                      <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                        {plan.discountText}
                      </span>
                    )}
                  </div>

                  {/* Animated Price Counter */}
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-zinc-300">$</span>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={price}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="text-5xl md:text-6xl font-extrabold tracking-tight text-white"
                      >
                        {price % 1 === 0 ? price : price.toFixed(2)}
                      </motion.span>
                    </AnimatePresence>
                    <span className="text-sm font-medium text-zinc-400 ml-1">
                      {plan.priceMonthly === 0 ? "forever" : "/mo"}
                    </span>
                  </div>

                  {annualBilling && plan.priceMonthly > 0 && (
                    <p className="text-xs text-zinc-400 mt-1">
                      Billed annually (normally ${plan.priceMonthly}/mo)
                    </p>
                  )}

                  <p className="mt-4 text-sm text-zinc-400 leading-relaxed min-h-[40px]">
                    {plan.description}
                  </p>

                  {/* Action Button */}
                  <a
                    href="https://app.sreeai.qzz.io/pricing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 w-full block text-center py-3.5 px-6 rounded-2xl font-semibold text-sm transition-all duration-200 cursor-pointer shadow-lg ${
                      plan.buttonVariant === "primary"
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-blue-500/30 hover:shadow-blue-500/50"
                        : plan.buttonVariant === "accent"
                        ? "bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 text-white shadow-purple-500/30 hover:shadow-purple-500/50"
                        : "bg-white/10 hover:bg-white/20 text-white border border-white/15"
                    }`}
                  >
                    {plan.buttonText}
                  </a>

                  {/* Specs Table */}
                  <div className="mt-8 rounded-2xl bg-white/5 border border-white/10 p-4 space-y-2.5 text-xs">
                    {plan.specs.map((spec) => (
                      <div key={spec.label} className="flex items-center justify-between text-zinc-300">
                        <span className="text-zinc-400 font-medium">{spec.label}</span>
                        <span className="font-semibold text-white">{spec.val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Features List */}
                  <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-300">
                        <Check className="h-4 w-4 shrink-0 text-blue-400 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Expandable Detailed Plan Comparison Table */}
        <div className="mt-20">
          <div className="text-center">
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-sm transition duration-200 cursor-pointer shadow-lg"
            >
              <span>{showComparison ? "Hide Plan Details" : "Compare Plan Details"}</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  showComparison ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </div>

          <AnimatePresence>
            {showComparison && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden mt-8"
              >
                <div className="rounded-3xl border border-white/15 bg-[#07051a]/90 backdrop-blur-2xl p-4 md:p-8 overflow-x-auto shadow-2xl">
                  <table className="w-full text-left text-sm text-zinc-300 min-w-[650px]">
                    <thead>
                      <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-zinc-400">
                        <th className="py-4 px-4 font-semibold w-1/3">Features & Limits</th>
                        <th className="py-4 px-4 font-semibold text-center w-1/5">Free ($0)</th>
                        <th className="py-4 px-4 font-semibold text-center w-1/5 text-blue-400">Starter ($8)</th>
                        <th className="py-4 px-4 font-semibold text-center w-1/5 text-purple-400">Pro ($29)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-xs md:text-sm">
                      {comparisonRows.map((row) => (
                        <tr key={row.name} className="hover:bg-white/5 transition duration-150">
                          <td className="py-3.5 px-4 font-medium text-white">{row.name}</td>
                          <td className="py-3.5 px-4 text-center">
                            {typeof row.free === "boolean" ? (
                              row.free ? (
                                <FiCheck className="h-4 w-4 mx-auto text-emerald-400" />
                              ) : (
                                <FiMinus className="h-4 w-4 mx-auto text-zinc-600" />
                              )
                            ) : (
                              row.free
                            )}
                          </td>
                          <td className="py-3.5 px-4 text-center font-medium text-blue-300">
                            {typeof row.starter === "boolean" ? (
                              row.starter ? (
                                <FiCheck className="h-4 w-4 mx-auto text-emerald-400" />
                              ) : (
                                <FiMinus className="h-4 w-4 mx-auto text-zinc-600" />
                              )
                            ) : (
                              row.starter
                            )}
                          </td>
                          <td className="py-3.5 px-4 text-center font-semibold text-purple-300">
                            {typeof row.pro === "boolean" ? (
                              row.pro ? (
                                <FiCheck className="h-4 w-4 mx-auto text-emerald-400" />
                              ) : (
                                <FiMinus className="h-4 w-4 mx-auto text-zinc-600" />
                              )
                            ) : (
                              row.pro
                            )}
                          </td>
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
