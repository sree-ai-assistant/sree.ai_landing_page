"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiCheckCircle, FiSend } from "react-icons/fi";
import { Sparkles } from "lucide-react";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTier?: string;
}

export default function WaitlistModal({ isOpen, onClose, selectedTier = "starter" }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [tier, setTier] = useState(selectedTier);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
          className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-[#07051a]/95 p-6 md:p-8 shadow-[0_0_60px_rgba(59,130,246,0.3)] backdrop-blur-2xl z-10"
        >
          {/* Top glow ambient effect */}
          <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-blue-600/30 blur-3xl" />
          <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-purple-600/30 blur-3xl" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition duration-150"
          >
            <FiX className="h-5 w-5" />
          </button>

          {!submitted ? (
            <div className="relative z-10 flex flex-col gap-5">
              <div className="flex items-center gap-2.5">
                <img
                  src="https://app.sreeai.qzz.io/Sree-Ai-icon-only-Sree-AI-brandmark.png"
                  alt="Sree AI Icon"
                  className="h-8 w-8 object-contain"
                />
                <span className="text-xs uppercase tracking-widest font-semibold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                  Early Access Console
                </span>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                  Join Sree AI Early Access
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Get priority invite keys to experience sub-50ms voice dialogue, FLUX.1 speed nodes, and our multi-tool suite before official SaaS launch.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                    Select Your Preferred Plan
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "free", label: "Free ($0)" },
                      { id: "starter", label: "Starter ($8)" },
                      { id: "pro", label: "Pro ($29)" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setTier(item.id)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all duration-200 ${
                          tier === item.id
                            ? "bg-blue-600/20 border-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                            : "bg-white/5 border-white/10 text-zinc-400 hover:text-white"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                    Work Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-200"
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-3.5 px-6 font-semibold text-white shadow-[0_0_25px_rgba(59,130,246,0.4)] transition duration-200 cursor-pointer"
                >
                  {loading ? (
                    <span className="flex items-center gap-2 text-sm">
                      <Sparkles className="h-4 w-4 animate-spin text-white" />
                      Reserving Spot...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2 text-sm font-semibold tracking-wide">
                      <FiSend className="h-4 w-4" />
                      Reserve Priority Access
                    </span>
                  )}
                </motion.button>

                <p className="text-center text-xs text-zinc-500 mt-1">
                  🔒 No spam. Instant access code will be emailed upon cluster provisioning.
                </p>
              </form>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative z-10 flex flex-col items-center justify-center text-center py-6 gap-4"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                <FiCheckCircle className="h-8 w-8" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">Access Key Reserved!</h3>
                <p className="mt-2 text-sm text-zinc-300 leading-relaxed max-w-sm">
                  We've added <span className="font-semibold text-blue-400">{email}</span> to the priority launch queue for the <span className="uppercase text-purple-300 font-semibold">{tier}</span> tier.
                </p>
              </div>

              <button
                onClick={handleReset}
                className="mt-4 rounded-xl bg-white/10 px-6 py-2.5 text-xs font-semibold text-white hover:bg-white/20 transition duration-150"
              >
                Back to Sree AI Platform
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
