"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  ShieldCheck,
  Zap,
  Sparkles,
  Bell,
  HardDrive,
  Check,
  Info,
  ChevronDown,
  Globe,
  ArrowRight,
  MessageSquare,
  Mic,
  ImageIcon,
  Laptop,
  CheckCircle2,
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
  const [webIconLoaded, setWebIconLoaded] = useState(false);

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
    <section
      id="download"
      className="relative py-10 sm:py-14 md:py-16 lg:py-14 border-t border-white/[0.06] overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500/[0.05] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-500/[0.05] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-semibold tracking-wide mb-2.5">
            <Download className="h-3 w-3 shrink-0" />
            <span>Downloads &amp; Web App</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Get Sree AI for{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Any Device
            </span>
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-lg mx-auto">
            Launch instantly in your browser as an installable Web App, or download verified native binaries for Android and macOS.
          </p>
        </div>

        {/* Compact, Auto-Sized Pill Switcher (Never excessively wide, single-line text) */}
        <div className="flex justify-center mb-5 sm:mb-6">
          <div className="inline-flex items-center p-1 rounded-full bg-zinc-900/90 border border-white/10 backdrop-blur-xl shadow-inner">
            {/* Tab 1: Web App */}
            <button
              type="button"
              onClick={() => setActiveOption("web")}
              className={`flex items-center gap-1.5 px-3.5 sm:px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${activeOption === "web"
                ? "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-black shadow-md font-bold"
                : "text-zinc-400 hover:text-white"
                }`}
            >
              <Globe className="h-3.5 w-3.5 shrink-0" />
              <span>Web App</span>
              <span
                className={`text-[9px] px-1.5 py-0.2 rounded-full font-semibold ${activeOption === "web" ? "bg-black/20 text-black" : "bg-white/10 text-zinc-400"
                  }`}
              >
                PWA
              </span>
            </button>

            {/* Tab 2: Native Apps */}
            <button
              type="button"
              onClick={() => setActiveOption("native")}
              className={`flex items-center gap-1.5 px-3.5 sm:px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${activeOption === "native"
                ? "bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 text-black shadow-md font-bold"
                : "text-zinc-400 hover:text-white"
                }`}
            >
              <HardDrive className="h-3.5 w-3.5 shrink-0" />
              <span>Native Apps</span>
              <span
                className={`text-[9px] px-1.5 py-0.2 rounded-full font-semibold ${activeOption === "native" ? "bg-black/20 text-black" : "bg-white/10 text-zinc-400"
                  }`}
              >
                APK &amp; Mac
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
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
            >
              <div className="relative rounded-2xl md:rounded-xl border border-white/[0.09] bg-gradient-to-b from-zinc-900/80 via-[#0B0E14]/90 to-zinc-950/95 p-5 sm:p-6 md:p-7 backdrop-blur-xl shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/[0.06] rounded-full blur-3xl pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent pointer-events-none" />

                {/* Top Section: App Header + DIRECT PROMINENT CTA (Visible immediately on mobile & desktop) */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
                  {/* App Identity */}
                  <div className="flex items-start gap-3 sm:gap-3.5 min-w-0">
                    <div className="relative h-11 w-11 sm:h-12 sm:w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.2)] overflow-hidden">
                      {/* Web internet icon placeholder while loading or on error */}
                      {!webIconLoaded && (
                        <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-400 animate-pulse" />
                      )}
                      <img
                        src="/Sree-Ai-Fav-icon.png"
                        alt="Sree AI"
                        width={48}
                        height={48}
                        ref={(img) => {
                          if (img?.complete && !webIconLoaded) {
                            setWebIconLoaded(true);
                          }
                        }}
                        onLoad={() => setWebIconLoaded(true)}
                        onError={() => setWebIconLoaded(false)}
                        className={`w-full h-full object-contain p-1.5 ${
                          webIconLoaded ? "block" : "hidden"
                        }`}
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                          Sree AI Cloud Web App
                        </h3>
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-300 text-[10px] font-semibold">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>Instant Cloud Access</span>
                        </span>
                      </div>
                      <p className="text-xs text-emerald-400/90 font-mono mt-0.5">
                        app.sreeai.qzz.io
                      </p>
                      <p className="text-xs text-zinc-300 leading-relaxed mt-1.5 max-w-lg">
                        Launch in any browser or install to your Desktop Dock, Taskbar, or Mobile Home Screen for a dedicated borderless window.
                      </p>
                    </div>
                  </div>

                  {/* Primary CTA Cluster - Always front & center */}
                  <div className="shrink-0 flex flex-col items-stretch sm:items-end gap-2 pt-2 md:pt-0">
                    <a
                      href="https://app.sreeai.qzz.io/?install=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg font-bold text-xs sm:text-sm bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-black shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] cursor-pointer whitespace-nowrap min-h-[46px]"
                    >
                      <Globe className="h-4 w-4 shrink-0" />
                      <span>Install Sree AI Web App</span>
                      <Download className="h-4 w-4 shrink-0" />
                    </a>

                    <div className="flex items-center justify-between sm:justify-end gap-3 text-[11px] text-zinc-400 px-1">
                      <span className="flex items-center gap-1 text-zinc-300">
                        <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                        <span>Zero download size</span>
                      </span>
                      <span className="text-zinc-600">•</span>
                      <button
                        type="button"
                        onClick={() => setActiveOption("native")}
                        className="text-emerald-400 hover:text-emerald-300 font-medium underline underline-offset-2 cursor-pointer"
                      >
                        Native APK/ZIP &rarr;
                      </button>
                    </div>
                  </div>
                </div>

                {/* Clean Horizontal Divider */}
                <div className="h-[1px] bg-white/[0.08] my-4 sm:my-5" />

                {/* Bottom Row: 4 Uniform Feature Cards with 100% Perfectly Aligned Borders */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 items-stretch">
                  <div className="h-full flex flex-col justify-between p-3 rounded-lg bg-white/[0.025] border border-white/[0.07] hover:border-blue-500/30 transition duration-200">
                    <div className="flex items-center gap-2 mb-1.5">
                      <MessageSquare className="h-4 w-4 text-blue-400 shrink-0" />
                      <h4 className="text-xs sm:text-sm font-semibold text-white">LLM Chat &amp; Search</h4>
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      75+ open-weight AI models with real-time web citations.
                    </p>
                  </div>

                  <div className="h-full flex flex-col justify-between p-3 rounded-lg bg-white/[0.025] border border-white/[0.07] hover:border-purple-500/30 transition duration-200">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Mic className="h-4 w-4 text-purple-400 shrink-0" />
                      <h4 className="text-xs sm:text-sm font-semibold text-white">Real-Time Voice</h4>
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      Sub-50ms natural speech dialogue via persistent WebSockets.
                    </p>
                  </div>

                  <div className="h-full flex flex-col justify-between p-3 rounded-lg bg-white/[0.025] border border-white/[0.07] hover:border-emerald-500/30 transition duration-200">
                    <div className="flex items-center gap-2 mb-1.5">
                      <ImageIcon className="h-4 w-4 text-emerald-400 shrink-0" />
                      <h4 className="text-xs sm:text-sm font-semibold text-white">Studio Image &amp; Video</h4>
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      FLUX.1 photorealism and Google Veo motion synthesis.
                    </p>
                  </div>

                  <div className="h-full flex flex-col justify-between p-3 rounded-lg bg-white/[0.025] border border-white/[0.07] hover:border-cyan-500/30 transition duration-200">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Laptop className="h-4 w-4 text-cyan-400 shrink-0" />
                      <h4 className="text-xs sm:text-sm font-semibold text-white">Desktop &amp; Mobile PWA</h4>
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      Standalone borderless window with auto background updates.
                    </p>
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
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
            >
              {/* 2 Symmetrical Native Cards with Perfectly Aligned Bottom Borders */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-4 items-stretch">
                {/* ANDROID CARD */}
                <div className="h-full rounded-2xl border border-white/[0.09] bg-gradient-to-b from-zinc-900/80 via-[#0B0E14]/90 to-zinc-950/95 p-5 sm:p-6 backdrop-blur-xl flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-3 mb-2.5">
                      <div className="flex items-center gap-3">
                        <div className="h-11 w-11 rounded-xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0">
                          <FaAndroid className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                            Android App
                          </h3>
                          <p className="text-xs text-zinc-400 font-mono">
                            APK Package • Universal
                          </p>
                        </div>
                      </div>

                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-300 text-xs font-semibold">
                        v1.0.0
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                      Direct APK installer binary for Android phones and tablets running Android 8.0 and above.
                    </p>

                    {/* Micro Specs */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10 text-center">
                        <span className="block text-[9px] uppercase font-semibold text-zinc-400">Size</span>
                        <span className="text-xs font-bold text-emerald-400">~942 KB</span>
                      </div>
                      <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10 text-center">
                        <span className="block text-[9px] uppercase font-semibold text-zinc-400">System</span>
                        <span className="text-xs font-bold text-white">Android 8+</span>
                      </div>
                      <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10 text-center">
                        <span className="block text-[9px] uppercase font-semibold text-zinc-400">Arch</span>
                        <span className="text-xs font-bold text-white">Universal</span>
                      </div>
                    </div>

                    <ul className="space-y-1.5 mb-5 text-xs text-zinc-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                        <span>Ultra-compact footprint (&lt; 1 MB download)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                        <span>Direct package installation with no store login</span>
                      </li>
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-white/10 flex items-center gap-2.5">
                    <a
                      href="/downloads/sree-ai.apk"
                      download="sree-ai.apk"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-500 text-black shadow-md transition duration-200 cursor-pointer min-h-[44px]"
                    >
                      <Download className="h-4 w-4 shrink-0" />
                      <span>Download APK</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyAndroidHash}
                      title="Copy SHA-256 Checksum"
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-3 rounded-xl text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition duration-200 cursor-pointer shrink-0 min-h-[44px]"
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
                <div className="h-full rounded-2xl border border-white/[0.09] bg-gradient-to-b from-zinc-900/80 via-[#0B0E14]/90 to-zinc-950/95 p-5 sm:p-6 backdrop-blur-xl flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-3 mb-2.5">
                      <div className="flex items-center gap-3">
                        <div className="h-11 w-11 rounded-xl bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center text-white shrink-0">
                          <FaApple className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                            macOS App
                          </h3>
                          <p className="text-xs text-zinc-400 font-mono">
                            ZIP Package • Universal
                          </p>
                        </div>
                      </div>

                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-300 text-xs font-semibold">
                        v1.0.0
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                      Standalone desktop app for macOS 12.0+. Universal support for Apple Silicon (M1–M4) &amp; Intel Macs.
                    </p>

                    {/* Micro Specs */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10 text-center">
                        <span className="block text-[9px] uppercase font-semibold text-zinc-400">Size</span>
                        <span className="text-xs font-bold text-cyan-400">~1.0 MB</span>
                      </div>
                      <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10 text-center">
                        <span className="block text-[9px] uppercase font-semibold text-zinc-400">System</span>
                        <span className="text-xs font-bold text-white">macOS 12+</span>
                      </div>
                      <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10 text-center">
                        <span className="block text-[9px] uppercase font-semibold text-zinc-400">Chips</span>
                        <span className="text-xs font-bold text-white">M1-M4/Intel</span>
                      </div>
                    </div>

                    {/* First launch accordion */}
                    <div className="mb-4">
                      <button
                        type="button"
                        onClick={() => setShowMacTips(!showMacTips)}
                        className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition cursor-pointer"
                      >
                        <Info className="h-3.5 w-3.5 shrink-0" />
                        <span>macOS First Launch Guide</span>
                        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${showMacTips ? "rotate-180" : ""}`} />
                      </button>

                      {showMacTips && (
                        <div className="mt-2 p-3 rounded-lg bg-white/[0.03] border border-white/10 text-xs text-zinc-300 leading-relaxed space-y-1">
                          <p>1. Double-click <code className="text-cyan-300">sree-ai-mac.zip</code> to extract.</p>
                          <p>2. Move <code className="text-white">Sree AI.app</code> to your <strong>Applications</strong> folder.</p>
                          <p className="text-zinc-400 text-[11px] pt-1">
                            <em>Tip: On first launch, Right-Click (Control-Click) Sree AI.app &gt; Open to grant permission.</em>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-white/10 flex items-center gap-2.5">
                    <a
                      href="/downloads/sree-ai-mac.zip"
                      download="sree-ai-mac.zip"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black shadow-md transition duration-200 cursor-pointer min-h-[44px]"
                    >
                      <Download className="h-4 w-4 shrink-0" />
                      <span>Download for Mac</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyMacHash}
                      title="Copy SHA-256 Checksum"
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-3 rounded-xl text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition duration-200 cursor-pointer shrink-0 min-h-[44px]"
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

              {/* Sleek Upcoming Platforms Bar */}
              <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2.5 text-zinc-300">
                  <div className="flex items-center gap-1 text-zinc-400">
                    <FaApple className="h-3.5 w-3.5" />
                    <FaWindows className="h-3.5 w-3.5" />
                  </div>
                  <span>
                    <strong>iOS TestFlight &amp; Windows Desktop</strong> are currently in private beta testing.
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenWaitlist?.("All Upcoming Platforms")}
                  className="inline-flex items-center gap-1 text-purple-300 hover:text-white font-semibold cursor-pointer underline underline-offset-4 whitespace-nowrap self-start sm:self-auto"
                >
                  <Bell className="h-3.5 w-3.5" />
                  <span>Notify Me</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Clean, Honest Reliability & Trust Bar */}
        <div className="mt-5 sm:mt-6 rounded-2xl border border-white/10 bg-[#07051a]/40 p-3.5 sm:p-4 backdrop-blur-xl grid grid-cols-2 sm:grid-cols-4 gap-3">
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
              <Zap className="h-4 w-4" />
            </div>
            <div>
              <h5 className="text-xs font-semibold text-white">Instant Sync</h5>
              <p className="text-[10px] text-zinc-400">Real-time edge</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
              <HardDrive className="h-4 w-4" />
            </div>
            <div>
              <h5 className="text-xs font-semibold text-white">&lt; 1 MB Size</h5>
              <p className="text-[10px] text-zinc-400">Lightweight packages</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
