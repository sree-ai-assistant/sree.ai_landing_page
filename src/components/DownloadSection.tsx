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
  Cpu,
  Check,
  Info,
  ChevronDown,
  Globe,
  ExternalLink,
  Laptop,
  Smartphone,
  Layers,
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
    <section id="download" className="relative py-10 md:py-14 border-t border-white/5 overflow-hidden">
      {/* Ambient background glow spheres */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[11px] sm:text-xs font-semibold uppercase tracking-widest mb-3 sm:mb-4 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
          >
            <Download className="h-3.5 w-3.5 shrink-0" />
            <span>Cross-Platform Ecosystem</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            Bring Sree AI Everywhere{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              You Build & Create.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 sm:mt-4 text-xs sm:text-base md:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto"
          >
            Choose your preferred installation method: Launch instantly in your browser as a standalone web app, or install native offline packages.
          </motion.p>
        </div>

        {/* ======================================================== */}
        {/* 2-OPTION INTERACTIVE SEGMENTED SWITCHER                  */}
        {/* ======================================================== */}
        <div className="flex justify-center mb-7 sm:mb-9">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] max-w-full overflow-x-auto">
            {/* OPTION 1: INSTANT WEB APP (PWA) */}
            <button
              type="button"
              onClick={() => setActiveOption("web")}
              className={`relative flex items-center gap-2 px-3.5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeOption === "web"
                  ? "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-black shadow-[0_0_25px_rgba(16,185,129,0.4)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Globe className="h-4 w-4 shrink-0" />
              <span>1. Instant Web App (PWA)</span>
              <span
                className={`text-[9px] px-2 py-0.5 rounded-full font-semibold uppercase ${
                  activeOption === "web"
                    ? "bg-black/25 text-black"
                    : "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25"
                }`}
              >
                Recommended
              </span>
            </button>

            {/* OPTION 2: NATIVE APP FILES (APK & ZIP) */}
            <button
              type="button"
              onClick={() => setActiveOption("native")}
              className={`relative flex items-center gap-2 px-3.5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeOption === "native"
                  ? "bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 text-black shadow-[0_0_25px_rgba(6,182,212,0.4)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <HardDrive className="h-4 w-4 shrink-0" />
              <span>2. Install Native App Files</span>
              <span
                className={`text-[9px] px-2 py-0.5 rounded-full font-semibold uppercase ${
                  activeOption === "native"
                    ? "bg-black/25 text-black"
                    : "bg-white/5 text-zinc-300 border border-white/10"
                }`}
              >
                APK & ZIP
              </span>
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* CONDITIONAL CONTENT BASED ON SELECTED OPTION             */}
        {/* ======================================================== */}
        <AnimatePresence mode="wait">
          {activeOption === "web" ? (
            /* ==================================================== */
            /* OPTION 1: INSTANT WEB APP (PWA) SPOTLIGHT            */
            /* ==================================================== */
            <motion.div
              key="web-option"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="mb-6 md:mb-8"
            >
              <div className="relative rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-[#0a1815]/95 via-[#070e17]/85 to-[#050614]/95 p-5 sm:p-8 md:p-10 backdrop-blur-2xl shadow-[0_0_60px_rgba(16,185,129,0.15)] overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent pointer-events-none" />

                <div className="max-w-4xl mx-auto">
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3.5">
                      <div className="h-13 w-13 sm:h-16 sm:w-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)] shrink-0">
                        <Globe className="h-7 w-7 sm:h-8 sm:w-8" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2.5">
                          <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                            Sree AI Cloud Web App
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-emerald-400/90 font-mono mt-0.5">
                          app.sreeai.qzz.io • Progressive Web App
                        </p>
                      </div>
                    </div>

                    <div className="self-start sm:self-center flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold whitespace-nowrap shrink-0">
                      <span className="relative flex h-2 w-2 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                      </span>
                      <span>Zero Download • Instant Launch</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-base text-zinc-300 leading-relaxed mb-6">
                    Experience the complete Sree AI multimodal workspace natively in your browser. Install it to your <strong>Desktop, Dock, or Mobile Home Screen</strong> as a standalone borderless window with instant sub-50ms WebSocket speech dialogue and vision streaming.
                  </p>

                  {/* 3 Core Web App Advantages */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/30 transition duration-200">
                      <div className="h-9 w-9 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-400 mb-2.5">
                        <Zap className="h-4 w-4" />
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1">Sub-50ms Edge Engine</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        Hardware microphone & camera audio-visual streaming with zero local compile latency.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-teal-500/30 transition duration-200">
                      <div className="h-9 w-9 rounded-xl bg-teal-500/15 flex items-center justify-center text-teal-400 mb-2.5">
                        <HardDrive className="h-4 w-4" />
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1">Zero Storage Footprint</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        No bulky multi-gigabyte setup files or manual folder extraction required on your disk.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 transition duration-200">
                      <div className="h-9 w-9 rounded-xl bg-cyan-500/15 flex items-center justify-center text-cyan-400 mb-2.5">
                        <Layers className="h-4 w-4" />
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1">Runs Everywhere</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        Works seamlessly across Windows, macOS, Linux, ChromeOS, iOS Safari, and Android.
                      </p>
                    </div>
                  </div>

                  {/* CTA Action Area */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-zinc-200 mb-1">
                        <Sparkles className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                        <span>Instant 1-Click Installation</span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-zinc-400 max-w-lg">
                        Click below to open <strong>app.sreeai.qzz.io</strong>. Your browser will immediately prompt to <em>&ldquo;Install this page as an app&rdquo;</em> into your OS window.
                      </p>
                    </div>

                    <a
                      href="https://app.sreeai.qzz.io/?install=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-black shadow-[0_0_35px_rgba(16,185,129,0.5)] hover:shadow-[0_0_45px_rgba(16,185,129,0.7)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.99] cursor-pointer whitespace-nowrap shrink-0"
                    >
                      <Globe className="h-4 w-4 shrink-0" />
                      <span>Launch & Install Web App</span>
                      <ExternalLink className="h-4 w-4 shrink-0" />
                    </a>
                  </div>

                  {/* Secondary toggle link to native files */}
                  <div className="mt-4 text-center">
                    <button
                      type="button"
                      onClick={() => setActiveOption("native")}
                      className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-emerald-300 transition duration-150 cursor-pointer"
                    >
                      <span>Need offline installer packages instead?</span>
                      <strong className="text-emerald-400 underline underline-offset-4">
                        View Android APK & Mac ZIP files
                      </strong>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            /* ==================================================== */
            /* OPTION 2: NATIVE APP FILES (APK, MAC ZIP, UPCOMING)  */
            /* ==================================================== */
            <motion.div
              key="native-option"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {/* Notice banner */}
              <div className="mb-5 sm:mb-6 p-3.5 sm:p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2.5 text-cyan-300">
                  <HardDrive className="h-4 w-4 shrink-0" />
                  <span>
                    <strong>Standalone Installer Binaries:</strong> Download verified offline packages directly to your device.
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveOption("web")}
                  className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-white font-semibold cursor-pointer underline underline-offset-4 whitespace-nowrap"
                >
                  <span>Switch back to Instant Web App</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>

              {/* AVAILABLE NOW: 2 FEATURED CARDS (ANDROID & MACOS) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-8 items-stretch mb-6 md:mb-8">
                {/* ANDROID FEATURED CARD */}
                <div className="relative group rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-[#0a1815]/95 via-[#070e17]/85 to-[#050614]/95 p-4 sm:p-7 md:p-8 backdrop-blur-2xl shadow-[0_0_50px_rgba(16,185,129,0.15)] flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16 group-hover:bg-emerald-500/20 transition-all duration-500" />
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent pointer-events-none" />

                  <div>
                    {/* Header with status */}
                    <div className="flex items-center justify-between gap-2.5 sm:gap-3 mb-4 sm:mb-5">
                      <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                        <div className="h-11 w-11 sm:h-14 sm:w-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.3)] shrink-0">
                          <FaAndroid className="h-5 w-5 sm:h-7 sm:w-7" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight leading-tight truncate">
                            Android
                          </h3>
                          <p className="text-[11px] sm:text-xs text-zinc-400 font-medium truncate">
                            Native Mobile APK
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] sm:text-xs font-semibold whitespace-nowrap shrink-0">
                        <span className="relative flex h-2 w-2 shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                        </span>
                        <span className="whitespace-nowrap">Available Now</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4 sm:mb-5">
                      Direct native install for all modern Android devices. Includes real-time speech dialogue, camera vision streaming, and local cached workflows.
                    </p>

                    {/* Specs pill badges */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 mb-4 sm:mb-5">
                      <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                        <span className="block text-[10px] uppercase font-semibold tracking-wider text-zinc-400">Version</span>
                        <span className="text-xs sm:text-sm font-bold text-white">v1.0.0 Stable</span>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                        <span className="block text-[10px] uppercase font-semibold tracking-wider text-zinc-400">File Size</span>
                        <span className="text-xs sm:text-sm font-bold text-emerald-400">~942 KB</span>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                        <span className="block text-[10px] uppercase font-semibold tracking-wider text-zinc-400">Compatibility</span>
                        <span className="text-xs sm:text-sm font-bold text-white">Android 8.0+</span>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                        <span className="block text-[10px] uppercase font-semibold tracking-wider text-zinc-400">Architecture</span>
                        <span className="text-xs sm:text-sm font-bold text-white">Universal</span>
                      </div>
                    </div>

                    {/* Android Highlights */}
                    <ul className="space-y-2 mb-5 sm:mb-6 text-xs sm:text-sm text-zinc-300">
                      <li className="flex items-start sm:items-center gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5 sm:mt-0" />
                        <span>Ultra-lightweight APK footprint (<strong className="text-white">&lt; 1 MB</strong> download size)</span>
                      </li>
                      <li className="flex items-start sm:items-center gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5 sm:mt-0" />
                        <span>Sub-50ms microphone speech streaming without third-party delay</span>
                      </li>
                      <li className="flex items-start sm:items-center gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5 sm:mt-0" />
                        <span>Private edge connection with Zero-Data-Retention architecture</span>
                      </li>
                    </ul>
                  </div>

                  {/* Action Buttons & Hash Info */}
                  <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                    <a
                      href="/downloads/sree-ai.apk"
                      download="sree-ai.apk"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm min-h-[44px] bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-500 text-black shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                    >
                      <Download className="h-4 w-4 shrink-0" />
                      <span>Download APK (Direct)</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyAndroidHash}
                      title="Copy Android SHA-256 Checksum"
                      className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl font-medium text-xs min-h-[44px] bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white transition duration-200 cursor-pointer shrink-0"
                    >
                      {copiedAndroidHash ? (
                        <>
                          <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                          <span className="text-emerald-400 whitespace-nowrap">Checksum Copied</span>
                        </>
                      ) : (
                        <>
                          <ShieldCheck className="h-4 w-4 text-zinc-400 shrink-0" />
                          <span className="whitespace-nowrap">Verified APK</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* MACOS FEATURED CARD */}
                <div className="relative group rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-[#06121f]/95 via-[#070b1a]/85 to-[#050614]/95 p-4 sm:p-7 md:p-8 backdrop-blur-2xl shadow-[0_0_50px_rgba(6,182,212,0.15)] flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16 group-hover:bg-cyan-500/20 transition-all duration-500" />
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent pointer-events-none" />

                  <div>
                    {/* Header with status */}
                    <div className="flex items-center justify-between gap-2.5 sm:gap-3 mb-4 sm:mb-5">
                      <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                        <div className="h-11 w-11 sm:h-14 sm:w-14 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-zinc-100 shadow-[0_0_25px_rgba(6,182,212,0.3)] shrink-0">
                          <FaApple className="h-5 w-5 sm:h-7 sm:w-7" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight leading-tight truncate">
                            macOS
                          </h3>
                          <p className="text-[11px] sm:text-xs text-zinc-400 font-medium truncate">
                            Native Mac App (.zip)
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] sm:text-xs font-semibold whitespace-nowrap shrink-0">
                        <span className="relative flex h-2 w-2 shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                        </span>
                        <span className="whitespace-nowrap">Available Now</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4 sm:mb-5">
                      Native desktop experience for Apple Silicon (M1–M4) and Intel Macs. Instant voice dialogue, menu bar quick-access, and lightning performance.
                    </p>

                    {/* Specs pill badges */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 mb-4 sm:mb-5">
                      <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                        <span className="block text-[10px] uppercase font-semibold tracking-wider text-zinc-400">Version</span>
                        <span className="text-xs sm:text-sm font-bold text-white">v1.0.0 Stable</span>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                        <span className="block text-[10px] uppercase font-semibold tracking-wider text-zinc-400">File Size</span>
                        <span className="text-xs sm:text-sm font-bold text-cyan-400">~1.0 MB</span>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                        <span className="block text-[10px] uppercase font-semibold tracking-wider text-zinc-400">Compatibility</span>
                        <span className="text-xs sm:text-sm font-bold text-white">macOS 12.0+</span>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                        <span className="block text-[10px] uppercase font-semibold tracking-wider text-zinc-400">Architecture</span>
                        <span className="text-xs sm:text-sm font-bold text-white">Universal</span>
                      </div>
                    </div>

                    {/* macOS Highlights */}
                    <ul className="space-y-2 mb-4 text-xs sm:text-sm text-zinc-300">
                      <li className="flex items-start sm:items-center gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5 sm:mt-0" />
                        <span>Universal binary for Apple Silicon (M1/M2/M3/M4) & Intel</span>
                      </li>
                      <li className="flex items-start sm:items-center gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5 sm:mt-0" />
                        <span>Sub-50ms conversational speech directly through edge sockets</span>
                      </li>
                      <li className="flex items-start sm:items-center gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5 sm:mt-0" />
                        <span>Portable & self-contained: Unzip and drag to Applications</span>
                      </li>
                    </ul>

                    {/* First Launch Tip Accordion */}
                    <div className="mb-4">
                      <button
                        type="button"
                        onClick={() => setShowMacTips(!showMacTips)}
                        className="flex items-center gap-1.5 text-[11px] text-cyan-400 hover:text-cyan-300 font-medium transition cursor-pointer"
                      >
                        <Info className="h-3.5 w-3.5 shrink-0" />
                        <span>First Launch on macOS Guide</span>
                        <ChevronDown className={`h-3 w-3 transition-transform duration-200 shrink-0 ${showMacTips ? "rotate-180" : ""}`} />
                      </button>

                      {showMacTips && (
                        <div className="mt-2.5 p-3 sm:p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-[11px] sm:text-xs text-zinc-300 leading-relaxed space-y-1.5">
                          <p>
                            <strong>1.</strong> Double-click <code className="text-cyan-300 bg-white/5 px-1 py-0.5 rounded">sree-ai-mac.zip</code> to extract <code className="text-white">Sree AI.app</code>.
                          </p>
                          <p>
                            <strong>2.</strong> Drag <code className="text-white">Sree AI.app</code> into your <strong>Applications</strong> folder.
                          </p>
                          <p className="text-zinc-400 pt-0.5">
                            <strong>Tip:</strong> If macOS shows an unidentified developer warning, <strong>Right-Click (Control-Click) Sree AI.app ➔ Click Open ➔ Click Open</strong>.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons & Hash Info */}
                  <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                    <a
                      href="/downloads/sree-ai-mac.zip"
                      download="sree-ai-mac.zip"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm min-h-[44px] bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                    >
                      <Download className="h-4 w-4 shrink-0" />
                      <span>Download for Mac (.zip)</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyMacHash}
                      title="Copy macOS SHA-256 Checksum"
                      className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl font-medium text-xs min-h-[44px] bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white transition duration-200 cursor-pointer shrink-0"
                    >
                      {copiedMacHash ? (
                        <>
                          <Check className="h-4 w-4 text-cyan-400 shrink-0" />
                          <span className="text-cyan-400 whitespace-nowrap">Checksum Copied</span>
                        </>
                      ) : (
                        <>
                          <ShieldCheck className="h-4 w-4 text-zinc-400 shrink-0" />
                          <span className="whitespace-nowrap">Verified Mac Zip</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* UPCOMING PLATFORMS: DESKTOP (2 CARDS) & MOBILE (1 CARD) */}
              {/* MOBILE VIEW (< md): COMBINED SINGLE CARD FOR iOS & WINDOWS */}
              <div className="block md:hidden relative rounded-3xl border border-purple-500/25 bg-gradient-to-b from-[#0e0720]/90 via-[#0a0518]/90 to-[#07051a]/95 p-4 sm:p-6 backdrop-blur-2xl shadow-[0_0_40px_rgba(168,85,247,0.12)] overflow-hidden mb-6">
                <div className="absolute top-0 right-0 w-52 h-52 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -mr-12 -mt-12" />
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent pointer-events-none" />

                <div className="flex items-center justify-between gap-2.5 mb-3 sm:mb-4">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="h-10 w-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                      <Sparkles className="h-4 w-4 text-purple-400" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight truncate">
                        More Platforms
                      </h3>
                      <p className="text-[11px] sm:text-xs text-zinc-400 truncate">
                        iOS & Windows Desktop
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] sm:text-[11px] font-semibold text-purple-300 bg-purple-500/15 border border-purple-500/30 px-2.5 sm:px-3 py-1 rounded-full whitespace-nowrap shrink-0">
                    Coming Soon
                  </span>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed mb-3.5 sm:mb-4">
                  Native clients for iPhone and Windows PC are in active beta preparation. Reserve your invite below.
                </p>

                <div className="space-y-2.5 mb-3.5 sm:mb-4">
                  {/* iOS ROW */}
                  <div className="flex items-center justify-between gap-2.5 p-2.5 sm:p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-purple-500/30 transition duration-200">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="h-9 w-9 rounded-lg bg-purple-500/15 border border-purple-500/25 flex items-center justify-center text-zinc-200 shrink-0">
                        <FaApple className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <h4 className="text-xs sm:text-sm font-bold text-white truncate">iOS & iPadOS</h4>
                          <span className="text-[9px] uppercase font-semibold text-purple-300 bg-purple-500/15 px-1.5 py-0.2 rounded border border-purple-500/25 whitespace-nowrap">
                            TestFlight
                          </span>
                        </div>
                        <p className="text-[10px] sm:text-[11px] text-zinc-400 truncate">iPhone Dynamic Island & iPad</p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenWaitlist?.("iOS App")}
                      className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-purple-600/25 hover:bg-purple-600/40 border border-purple-500/35 text-purple-200 hover:text-white transition duration-150 cursor-pointer whitespace-nowrap"
                    >
                      <Bell className="h-3 w-3" />
                      <span>Notify</span>
                    </button>
                  </div>

                  {/* WINDOWS ROW */}
                  <div className="flex items-center justify-between gap-2.5 p-2.5 sm:p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition duration-200">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="h-9 w-9 rounded-lg bg-blue-500/15 border border-blue-500/25 flex items-center justify-center text-blue-400 shrink-0">
                        <FaWindows className="h-3.5 w-3.5" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <h4 className="text-xs sm:text-sm font-bold text-white truncate">Windows Desktop</h4>
                          <span className="text-[9px] uppercase font-semibold text-blue-300 bg-blue-500/15 px-1.5 py-0.2 rounded border border-blue-500/25 whitespace-nowrap">
                            Win 10/11
                          </span>
                        </div>
                        <p className="text-[10px] sm:text-[11px] text-zinc-400 truncate">DirectML GPU • x64 & ARM64</p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenWaitlist?.("Windows App")}
                      className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600/25 hover:bg-blue-600/40 border border-blue-500/35 text-blue-200 hover:text-white transition duration-150 cursor-pointer whitespace-nowrap"
                    >
                      <Bell className="h-3 w-3" />
                      <span>Notify</span>
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenWaitlist?.("All Upcoming Platforms")}
                  className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 rounded-xl text-xs font-bold min-h-[44px] bg-white/10 hover:bg-white/15 border border-white/15 text-white transition duration-200 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                >
                  <Bell className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                  <span>Notify Me For Upcoming Platforms</span>
                </button>
              </div>

              {/* DESKTOP VIEW (md+): 2 SIDE-BY-SIDE CARDS FOR iOS & WINDOWS */}
              <div className="hidden md:grid md:grid-cols-2 gap-5 mb-6 md:mb-8">
                {/* iOS CARD */}
                <div className="relative group rounded-2xl border border-purple-500/20 bg-[#07051a]/70 hover:border-purple-500/40 p-5 sm:p-6 backdrop-blur-xl transition duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                  <div className="flex items-start gap-3.5">
                    <div className="h-11 w-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-zinc-200 shrink-0 group-hover:scale-105 transition-transform duration-200">
                      <FaApple className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-base font-bold text-white">iOS & iPadOS</h4>
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-purple-300 bg-purple-500/15 border border-purple-500/30 px-2 py-0.5 rounded-full whitespace-nowrap shrink-0">
                          Coming Soon
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed mb-2">
                        Apple TestFlight beta in preparation. Tailored for iPhone Dynamic Island and iPad multitasking.
                      </p>
                      <div className="flex items-center gap-2 text-[11px] text-zinc-400">
                        <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 whitespace-nowrap">iOS 16.0+</span>
                        <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 whitespace-nowrap">TestFlight Beta</span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenWaitlist?.("iOS App")}
                    className="shrink-0 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 hover:border-purple-500/50 text-purple-200 hover:text-white transition duration-200 cursor-pointer shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:scale-105 whitespace-nowrap min-h-[40px]"
                  >
                    <Bell className="h-3.5 w-3.5" />
                    <span>Notify Me</span>
                  </button>
                </div>

                {/* WINDOWS CARD */}
                <div className="relative group rounded-2xl border border-blue-500/20 bg-[#07051a]/70 hover:border-blue-500/40 p-5 sm:p-6 backdrop-blur-xl transition duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                  <div className="flex items-start gap-3.5">
                    <div className="h-11 w-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-105 transition-transform duration-200">
                      <FaWindows className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-base font-bold text-white">Windows Desktop</h4>
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-blue-300 bg-blue-500/15 border border-blue-500/30 px-2 py-0.5 rounded-full whitespace-nowrap shrink-0">
                          Coming Soon
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed mb-2">
                        Native 64-bit installer with DirectML GPU acceleration and global hotkeys.
                      </p>
                      <div className="flex items-center gap-2 text-[11px] text-zinc-400">
                        <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 whitespace-nowrap">Windows 10 / 11</span>
                        <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 whitespace-nowrap">x64 & ARM64</span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenWaitlist?.("Windows App")}
                    className="shrink-0 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 hover:border-blue-500/50 text-blue-200 hover:text-white transition duration-200 cursor-pointer shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:scale-105 whitespace-nowrap min-h-[40px]"
                  >
                    <Bell className="h-3.5 w-3.5" />
                    <span>Notify Me</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Security & Reliability Assurances Strip (always visible at bottom) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-[#07051a]/50 p-4 sm:p-6 md:p-8 backdrop-blur-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-6"
        >
          <div className="flex items-center gap-3 sm:gap-3.5">
            <div className="h-10 w-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white uppercase tracking-wider">100% Virus-Free</h5>
              <p className="text-[11px] text-zinc-400 mt-0.5">Scanned & verified clean binary</p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-3.5">
            <div className="h-10 w-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white uppercase tracking-wider">Instant Voice Sync</h5>
              <p className="text-[11px] text-zinc-400 mt-0.5">Sub-50ms WebSocket pipelines</p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-3.5">
            <div className="h-10 w-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
              <Cpu className="h-5 w-5" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white uppercase tracking-wider">BYOK & Self-Host</h5>
              <p className="text-[11px] text-zinc-400 mt-0.5">Direct custom API key routing</p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-3.5">
            <div className="h-10 w-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
              <HardDrive className="h-5 w-5" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white uppercase tracking-wider">Zero Bloat</h5>
              <p className="text-[11px] text-zinc-400 mt-0.5">Ultra-compact ~1 MB runtimes</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
