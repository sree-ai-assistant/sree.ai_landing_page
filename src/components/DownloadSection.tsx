"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Sparkles,
  Bell,
  HardDrive,
  Key,
  Check,
  Info,
  ChevronDown,
  Globe,
  ArrowRight,
} from "lucide-react";
import { FaAndroid, FaApple, FaWindows } from "react-icons/fa6";

interface DownloadSectionProps {
  onOpenWaitlist?: (targetName?: string) => void;
}

type InstallOption = "web" | "native";

export default function DownloadSection({ onOpenWaitlist }: DownloadSectionProps) {
  const [activeOption, setActiveOption] = useState<InstallOption>("web");
  const [copiedAndroidHash, setCopiedAndroidHash] = useState(false);
  const [copiedMacHash, setCopiedMacHash] = useState(false);
  const [showMacTips, setShowMacTips] = useState(false);

  const handleCopyAndroidHash = () => {
    navigator.clipboard.writeText("ae6d6d05b13d370a64df281e17c6a5490abc677a031dfe7d007ac2f225743140");
    setCopiedAndroidHash(true);
    setTimeout(() => setCopiedAndroidHash(false), 2000);
  };

  const handleCopyMacHash = () => {
    navigator.clipboard.writeText("07ab455e79d546b1a559c49ed1f250b3cc549a626c68a4c05c3a2e1a4b737ce5");
    setCopiedMacHash(true);
    setTimeout(() => setCopiedMacHash(false), 2000);
  };

  return (
    <section id="download" className="relative py-12 md:py-16 border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide mb-3"
          >
            <Download className="h-3.5 w-3.5 shrink-0" />
            <span>Get Sree AI</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight"
          >
            Choose How You Want to{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Access Sree AI
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-xs sm:text-base text-zinc-300 leading-relaxed"
          >
            Launch instantly in your browser as an installable Web App, or download native packages for Android and macOS.
          </motion.p>
        </div>

        {/* Responsive Segmented Switcher */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="w-full max-w-md grid grid-cols-2 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-lg">
            {/* OPTION 1: WEB APP */}
            <button
              type="button"
              onClick={() => setActiveOption("web")}
              className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeOption === "web"
                  ? "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.35)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Globe className="h-4 w-4 shrink-0" />
              <span>Web App</span>
              <span
                className={`text-[9px] px-1.5 py-0.5 rounded font-semibold uppercase ${
                  activeOption === "web"
                    ? "bg-black/20 text-black"
                    : "bg-emerald-500/15 text-emerald-400"
                }`}
              >
                PWA
              </span>
            </button>

            {/* OPTION 2: NATIVE APP FILES */}
            <button
              type="button"
              onClick={() => setActiveOption("native")}
              className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeOption === "native"
                  ? "bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 text-black shadow-[0_0_20px_rgba(6,182,212,0.35)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <HardDrive className="h-4 w-4 shrink-0" />
              <span>Native Apps</span>
              <span
                className={`text-[9px] px-1.5 py-0.5 rounded font-semibold uppercase ${
                  activeOption === "native"
                    ? "bg-black/20 text-black"
                    : "bg-white/5 text-zinc-300"
                }`}
              >
                APK / Mac
              </span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeOption === "web" ? (
            /* ==================================================== */
            /* OPTION 1: INSTANT WEB APP (PWA) CARD                 */
            /* ==================================================== */
            <motion.div
              key="web-option"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mb-8"
            >
              <div className="relative rounded-3xl border border-emerald-500/25 bg-gradient-to-b from-[#0a1614]/90 via-[#070e17]/80 to-[#050614]/90 p-5 sm:p-7 md:p-8 backdrop-blur-2xl shadow-[0_0_40px_rgba(16,185,129,0.1)] overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent pointer-events-none" />

                <div className="max-w-3xl mx-auto">
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.25)] shrink-0">
                        <Globe className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                          Sree AI Cloud Web App
                        </h3>
                        <p className="text-xs sm:text-sm text-emerald-400/90 font-mono">
                          app.sreeai.qzz.io
                        </p>
                      </div>
                    </div>

                    <div className="self-start sm:self-center flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold whitespace-nowrap shrink-0">
                      <span className="relative flex h-2 w-2 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                      </span>
                      <span>Zero Install • Instant Access</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-5 sm:mb-6">
                    Access the complete Sree AI multimodal workspace directly in any browser. You can also install it to your Desktop, Dock, or Mobile Home Screen for a borderless standalone experience.
                  </p>

                  {/* 3 Concise Key Points */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                    <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="flex items-center gap-2 mb-1">
                        <Zap className="h-4 w-4 text-emerald-400 shrink-0" />
                        <h4 className="text-xs sm:text-sm font-semibold text-white">Instant Launch</h4>
                      </div>
                      <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed">
                        Open instantly on any device with no download or setup.
                      </p>
                    </div>

                    <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="flex items-center gap-2 mb-1">
                        <Sparkles className="h-4 w-4 text-teal-400 shrink-0" />
                        <h4 className="text-xs sm:text-sm font-semibold text-white">Full AI Features</h4>
                      </div>
                      <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed">
                        Access Chat, Real-Time Voice, Image & Video generation.
                      </p>
                    </div>

                    <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="flex items-center gap-2 mb-1">
                        <HardDrive className="h-4 w-4 text-cyan-400 shrink-0" />
                        <h4 className="text-xs sm:text-sm font-semibold text-white">Installable PWA</h4>
                      </div>
                      <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed">
                        Add directly to your desktop or mobile home screen.
                      </p>
                    </div>
                  </div>

                  {/* CTA Area */}
                  <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <p className="text-xs text-zinc-400">
                      Opens in browser at <span className="text-zinc-200 font-medium">app.sreeai.qzz.io</span>
                    </p>

                    <a
                      href="https://app.sreeai.qzz.io/?install=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-black shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] cursor-pointer whitespace-nowrap shrink-0 min-h-[44px]"
                    >
                      <Globe className="h-4 w-4 shrink-0" />
                      <span>Install Sree AI Web App</span>
                      <Download className="h-4 w-4 shrink-0" />
                    </a>
                  </div>

                  {/* Switch to native files link */}
                  <div className="mt-4 text-center">
                    <button
                      type="button"
                      onClick={() => setActiveOption("native")}
                      className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-emerald-300 transition duration-150 cursor-pointer"
                    >
                      <span>Looking for Android APK or macOS ZIP?</span>
                      <strong className="text-emerald-400 underline underline-offset-4">
                        View Native Files
                      </strong>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            /* ==================================================== */
            /* OPTION 2: NATIVE APP FILES (ANDROID & MACOS)         */
            /* ==================================================== */
            <motion.div
              key="native-option"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mb-8"
            >
              {/* Top return helper */}
              <div className="mb-4 p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-between gap-3 text-xs">
                <span className="text-zinc-300">
                  Offline installer binaries for supported operating systems.
                </span>
                <button
                  type="button"
                  onClick={() => setActiveOption("web")}
                  className="text-cyan-400 hover:text-white font-semibold cursor-pointer underline underline-offset-4 whitespace-nowrap"
                >
                  Switch to Web App
                </button>
              </div>

              {/* 2 FEATURED NATIVE CARDS (ANDROID & MACOS) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch mb-6">
                {/* ANDROID CARD */}
                <div className="rounded-2xl border border-emerald-500/25 bg-gradient-to-b from-[#0a1614]/90 via-[#070e17]/80 to-[#050614]/90 p-4 sm:p-6 backdrop-blur-xl flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                          <FaAndroid className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                        <div>
                          <h3 className="text-base sm:text-xl font-bold text-white leading-tight">
                            Android App
                          </h3>
                          <p className="text-[11px] sm:text-xs text-zinc-400 font-mono">
                            APK Package • Universal
                          </p>
                        </div>
                      </div>

                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] sm:text-xs font-semibold whitespace-nowrap shrink-0">
                        Available
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                      Direct APK package for Android smartphones and tablets. Compatible with Android 8.0 and above.
                    </p>

                    {/* Specs Pills */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10 text-center">
                        <span className="block text-[9px] uppercase font-semibold text-zinc-400">Version</span>
                        <span className="text-xs font-bold text-white">v1.0.0</span>
                      </div>
                      <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10 text-center">
                        <span className="block text-[9px] uppercase font-semibold text-zinc-400">Size</span>
                        <span className="text-xs font-bold text-emerald-400">~942 KB</span>
                      </div>
                      <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10 text-center">
                        <span className="block text-[9px] uppercase font-semibold text-zinc-400">System</span>
                        <span className="text-xs font-bold text-white">Android 8+</span>
                      </div>
                    </div>

                    {/* Feature bullets */}
                    <ul className="space-y-1.5 mb-5 text-xs text-zinc-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                        <span>Lightweight &lt;1 MB installer</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                        <span>Direct installation with no store login</span>
                      </li>
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    <a
                      href="/downloads/sree-ai.apk"
                      download="sree-ai.apk"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.35)] transition duration-200 cursor-pointer min-h-[42px]"
                    >
                      <Download className="h-4 w-4 shrink-0" />
                      <span>Download APK</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyAndroidHash}
                      title="Copy SHA-256 Checksum"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition duration-200 cursor-pointer shrink-0 min-h-[42px]"
                    >
                      {copiedAndroidHash ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                          <span className="text-emerald-400 text-xs">Copied</span>
                        </>
                      ) : (
                        <>
                          <ShieldCheck className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                          <span className="text-xs">Checksum</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* MACOS CARD */}
                <div className="rounded-2xl border border-cyan-500/25 bg-gradient-to-b from-[#06121f]/90 via-[#070b1a]/80 to-[#050614]/90 p-4 sm:p-6 backdrop-blur-xl flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-white shrink-0">
                          <FaApple className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                        <div>
                          <h3 className="text-base sm:text-xl font-bold text-white leading-tight">
                            macOS App
                          </h3>
                          <p className="text-[11px] sm:text-xs text-zinc-400 font-mono">
                            ZIP Archive • Universal
                          </p>
                        </div>
                      </div>

                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] sm:text-xs font-semibold whitespace-nowrap shrink-0">
                        Available
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                      Standalone desktop app for Mac. Supports Apple Silicon (M1–M4) and Intel running macOS 12+.
                    </p>

                    {/* Specs Pills */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10 text-center">
                        <span className="block text-[9px] uppercase font-semibold text-zinc-400">Version</span>
                        <span className="text-xs font-bold text-white">v1.0.0</span>
                      </div>
                      <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10 text-center">
                        <span className="block text-[9px] uppercase font-semibold text-zinc-400">Size</span>
                        <span className="text-xs font-bold text-cyan-400">~1.0 MB</span>
                      </div>
                      <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10 text-center">
                        <span className="block text-[9px] uppercase font-semibold text-zinc-400">System</span>
                        <span className="text-xs font-bold text-white">macOS 12+</span>
                      </div>
                    </div>

                    {/* Feature bullets */}
                    <ul className="space-y-1.5 mb-3 text-xs text-zinc-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                        <span>Universal binary for Apple Silicon & Intel</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                        <span>Portable: Unzip and move to Applications</span>
                      </li>
                    </ul>

                    {/* First launch guide accordion */}
                    <div className="mb-4">
                      <button
                        type="button"
                        onClick={() => setShowMacTips(!showMacTips)}
                        className="flex items-center gap-1 text-[11px] text-cyan-400 hover:text-cyan-300 font-medium transition cursor-pointer"
                      >
                        <Info className="h-3 w-3 shrink-0" />
                        <span>macOS First Launch Note</span>
                        <ChevronDown className={`h-3 w-3 transition-transform duration-200 shrink-0 ${showMacTips ? "rotate-180" : ""}`} />
                      </button>

                      {showMacTips && (
                        <div className="mt-2 p-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] text-zinc-300 leading-relaxed space-y-1">
                          <p>1. Double-click <code className="text-cyan-300">sree-ai-mac.zip</code> to extract.</p>
                          <p>2. Drag <code className="text-white">Sree AI.app</code> to your <strong>Applications</strong> folder.</p>
                          <p className="text-zinc-400 text-[10px]">
                            <em>Tip: If prompted by macOS Gatekeeper, Right-Click (Control-Click) Sree AI.app &gt; Open.</em>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    <a
                      href="/downloads/sree-ai-mac.zip"
                      download="sree-ai-mac.zip"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.35)] transition duration-200 cursor-pointer min-h-[42px]"
                    >
                      <Download className="h-4 w-4 shrink-0" />
                      <span>Download for Mac (.zip)</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyMacHash}
                      title="Copy SHA-256 Checksum"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition duration-200 cursor-pointer shrink-0 min-h-[42px]"
                    >
                      {copiedMacHash ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                          <span className="text-cyan-400 text-xs">Copied</span>
                        </>
                      ) : (
                        <>
                          <ShieldCheck className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                          <span className="text-xs">Checksum</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* UPCOMING PLATFORMS: iOS & WINDOWS */}
              <div className="rounded-2xl border border-purple-500/20 bg-[#07051a]/60 p-4 sm:p-5 backdrop-blur-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-purple-400" />
                      <span>Upcoming Platforms</span>
                    </h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      iOS (TestFlight Beta) &amp; Windows Desktop are currently in development.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenWaitlist?.("All Upcoming Platforms")}
                    className="self-start sm:self-center inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 text-purple-200 hover:text-white transition duration-150 cursor-pointer whitespace-nowrap"
                  >
                    <Bell className="h-3.5 w-3.5" />
                    <span>Join Early Access Waitlist</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-white/5">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-2">
                      <FaApple className="h-4 w-4 text-zinc-300" />
                      <div>
                        <span className="text-xs font-semibold text-white block">iOS &amp; iPadOS</span>
                        <span className="text-[10px] text-zinc-400">TestFlight Beta</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => onOpenWaitlist?.("iOS App")}
                      className="text-xs text-purple-300 hover:text-purple-200 font-medium cursor-pointer"
                    >
                      Notify me
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-2">
                      <FaWindows className="h-4 w-4 text-blue-400" />
                      <div>
                        <span className="text-xs font-semibold text-white block">Windows Desktop</span>
                        <span className="text-[10px] text-zinc-400">Win 10/11 x64</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => onOpenWaitlist?.("Windows App")}
                      className="text-xs text-blue-300 hover:text-blue-200 font-medium cursor-pointer"
                    >
                      Notify me
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Clean, Honest Reliability & Trust Bar */}
        <div className="rounded-2xl border border-white/10 bg-[#07051a]/40 p-4 sm:p-5 backdrop-blur-xl grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <div>
              <h5 className="text-xs font-semibold text-white">Verified Binaries</h5>
              <p className="text-[10px] text-zinc-400">Clean &amp; checked</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
              <Globe className="h-4 w-4" />
            </div>
            <div>
              <h5 className="text-xs font-semibold text-white">Direct CDN</h5>
              <p className="text-[10px] text-zinc-400">Fast downloads</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
              <Key className="h-4 w-4" />
            </div>
            <div>
              <h5 className="text-xs font-semibold text-white">BYOK Support</h5>
              <p className="text-[10px] text-zinc-400">Your API keys</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
              <HardDrive className="h-4 w-4" />
            </div>
            <div>
              <h5 className="text-xs font-semibold text-white">~1 MB Size</h5>
              <p className="text-[10px] text-zinc-400">Lightweight apps</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
