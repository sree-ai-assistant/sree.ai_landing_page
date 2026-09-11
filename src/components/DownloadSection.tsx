"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
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
  ChevronRight,
} from "lucide-react";
import { FaAndroid, FaApple, FaWindows } from "react-icons/fa6";

interface DownloadSectionProps {
  onOpenWaitlist?: (targetName?: string) => void;
}

export default function DownloadSection({ onOpenWaitlist }: DownloadSectionProps) {
  const [copiedHash, setCopiedHash] = useState(false);

  const handleCopyHash = () => {
    navigator.clipboard.writeText("ae6d6d05b13d370a64df281e17c6a5490abc677a031dfe7d007ac2f225743140");
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  return (
    <section id="download" className="relative py-10 md:py-14 border-t border-white/5 overflow-hidden">
      {/* Background ambient neon glow spheres */}
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Cross-Platform Ecosystem</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            Bring Sree AI Everywhere{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
              You Build & Create.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto"
          >
            Harness sub-50ms conversational voice, deep multimodal vision, and ultra-fast generation natively on mobile and desktop.
          </motion.p>
        </div>

        {/* Platforms Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch mb-6 md:mb-8">
          {/* ANDROID FEATURED CARD - Always prominent */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 relative group rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-[#0a1815]/95 via-[#070e17]/85 to-[#050614]/95 p-5 sm:p-7 md:p-10 backdrop-blur-2xl shadow-[0_0_50px_rgba(16,185,129,0.15)] flex flex-col justify-between overflow-hidden"
          >
            {/* Top decorative ambient light */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16 group-hover:bg-emerald-500/20 transition-all duration-500" />
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent pointer-events-none" />

            <div>
              {/* Header with status - fixed un-wrapped pill */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.3)] shrink-0">
                    <FaAndroid className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">Android</h3>
                    <p className="text-xs text-zinc-400 font-medium">Native Mobile APK</p>
                  </div>
                </div>

                {/* Available Now Badge - strictly non-wrapping */}
                <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] sm:text-xs font-semibold whitespace-nowrap shrink-0">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span className="whitespace-nowrap">Available Now</span>
                </div>
              </div>

              <p className="text-sm md:text-base text-zinc-300 leading-relaxed mb-6">
                Direct native install for all modern Android devices. Includes full real-time speech dialogue, camera vision streaming, and local cached workflows.
              </p>

              {/* Specs pill badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 mb-6 sm:mb-8">
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
              <ul className="space-y-2.5 mb-6 sm:mb-8 text-xs sm:text-sm text-zinc-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Ultra-lightweight APK footprint (<strong className="text-white">&lt; 1 MB</strong> download size)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Sub-50ms microphone speech streaming without third-party delay</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Private edge connection with Zero-Data-Retention architecture</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons & Hash Info */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="/downloads/sree-ai.apk"
                download="sree-ai.apk"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-500 text-black shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] transition-all duration-200 hover:scale-[1.02] cursor-pointer"
              >
                <Download className="h-4 w-4 shrink-0" />
                <span>Download APK (Direct)</span>
              </a>

              <button
                type="button"
                onClick={handleCopyHash}
                title="Copy SHA-256 Checksum"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 sm:py-4 rounded-xl font-medium text-xs bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white transition duration-200 cursor-pointer shrink-0"
              >
                {copiedHash ? (
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
          </motion.div>

          {/* ======================================================== */}
          {/* MOBILE ONLY (< lg): COMBINED ALL-IN-ONE COMING SOON CARD */}
          {/* ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="block lg:hidden relative rounded-3xl border border-purple-500/25 bg-gradient-to-b from-[#0e0720]/90 via-[#0a0518]/90 to-[#07051a]/95 p-5 sm:p-7 backdrop-blur-2xl shadow-[0_0_40px_rgba(168,85,247,0.12)] overflow-hidden"
          >
            {/* Top decorative ambient light */}
            <div className="absolute top-0 right-0 w-52 h-52 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -mr-12 -mt-12" />
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                  <Sparkles className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-tight">More Platforms</h3>
                  <p className="text-xs text-zinc-400">iOS, Windows & macOS</p>
                </div>
              </div>

              {/* Coming Soon Badge - strictly non-wrapping */}
              <span className="text-[11px] font-semibold text-purple-300 bg-purple-500/15 border border-purple-500/30 px-3 py-1 rounded-full whitespace-nowrap shrink-0">
                Coming Soon
              </span>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed mb-4">
              Native client apps are in active development. Tap below to receive early beta and TestFlight access.
            </p>

            {/* Compact 3-Row List for Mobile */}
            <div className="space-y-2.5 mb-5">
              {/* Row 1: iOS & iPadOS */}
              <div className="flex items-center justify-between gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-purple-500/30 transition duration-200">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="h-9 w-9 rounded-lg bg-purple-500/15 border border-purple-500/25 flex items-center justify-center text-zinc-200 shrink-0">
                    <FaApple className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs sm:text-sm font-bold text-white truncate">iOS & iPadOS</h4>
                      <span className="text-[9px] uppercase font-semibold text-purple-300 bg-purple-500/15 px-1.5 py-0.2 rounded border border-purple-500/25 whitespace-nowrap">
                        TestFlight
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-400 truncate">iPhone Dynamic Island & iPad</p>
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

              {/* Row 2: Windows Desktop */}
              <div className="flex items-center justify-between gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition duration-200">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="h-9 w-9 rounded-lg bg-blue-500/15 border border-blue-500/25 flex items-center justify-center text-blue-400 shrink-0">
                    <FaWindows className="h-3.5 w-3.5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs sm:text-sm font-bold text-white truncate">Windows Desktop</h4>
                      <span className="text-[9px] uppercase font-semibold text-blue-300 bg-blue-500/15 px-1.5 py-0.2 rounded border border-blue-500/25 whitespace-nowrap">
                        Win 10/11
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-400 truncate">DirectML GPU • x64 & ARM64</p>
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

              {/* Row 3: macOS Desktop */}
              <div className="flex items-center justify-between gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/30 transition duration-200">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="h-9 w-9 rounded-lg bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center text-zinc-200 shrink-0">
                    <FaApple className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs sm:text-sm font-bold text-white truncate">macOS Desktop</h4>
                      <span className="text-[9px] uppercase font-semibold text-indigo-300 bg-indigo-500/15 px-1.5 py-0.2 rounded border border-indigo-500/25 whitespace-nowrap">
                        Apple Silicon
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-400 truncate">Universal DMG • Menu Bar Widget</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenWaitlist?.("macOS App")}
                  className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600/25 hover:bg-indigo-600/40 border border-indigo-500/35 text-indigo-200 hover:text-white transition duration-150 cursor-pointer whitespace-nowrap"
                >
                  <Bell className="h-3 w-3" />
                  <span>Notify</span>
                </button>
              </div>
            </div>

            {/* Unified All-Platforms Notification Trigger */}
            <button
              type="button"
              onClick={() => onOpenWaitlist?.("All Upcoming Platforms")}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/15 border border-white/15 text-white transition duration-200 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            >
              <Bell className="h-3.5 w-3.5 text-purple-400 shrink-0" />
              <span>Notify Me For All Platforms</span>
            </button>
          </motion.div>

          {/* ======================================================== */}
          {/* DESKTOP ONLY (lg:grid): 3 DETAILED CARDS                 */}
          {/* ======================================================== */}
          <div className="hidden lg:grid lg:col-span-6 grid-cols-1 gap-5">
            {/* iOS CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative group rounded-2xl border border-purple-500/20 bg-[#07051a]/70 hover:border-purple-500/40 p-6 sm:p-7 backdrop-blur-xl transition duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-zinc-200 shrink-0 group-hover:scale-105 transition-transform duration-200">
                  <FaApple className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2.5 mb-1">
                    <h4 className="text-lg font-bold text-white">iOS & iPadOS</h4>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-purple-300 bg-purple-500/15 border border-purple-500/30 px-2.5 py-0.5 rounded-full whitespace-nowrap shrink-0">
                      Coming Soon
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 max-w-sm leading-relaxed mb-2.5">
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
                className="shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 hover:border-purple-500/50 text-purple-200 hover:text-white transition duration-200 cursor-pointer shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:scale-105 whitespace-nowrap"
              >
                <Bell className="h-3.5 w-3.5" />
                <span>Notify Me</span>
              </button>
            </motion.div>

            {/* WINDOWS CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative group rounded-2xl border border-blue-500/20 bg-[#07051a]/70 hover:border-blue-500/40 p-6 sm:p-7 backdrop-blur-xl transition duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-105 transition-transform duration-200">
                  <FaWindows className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2.5 mb-1">
                    <h4 className="text-lg font-bold text-white">Windows Desktop</h4>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-blue-300 bg-blue-500/15 border border-blue-500/30 px-2.5 py-0.5 rounded-full whitespace-nowrap shrink-0">
                      Coming Soon
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 max-w-sm leading-relaxed mb-2.5">
                    Native 64-bit and ARM64 installer (.exe / .msi) with DirectML GPU acceleration and global hotkeys.
                  </p>
                  <div className="flex items-center gap-2 text-[11px] text-zinc-400">
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 whitespace-nowrap">Windows 10 / 11</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 whitespace-nowrap">x64 / ARM64</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onOpenWaitlist?.("Windows App")}
                className="shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 hover:border-blue-500/50 text-blue-200 hover:text-white transition duration-200 cursor-pointer shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:scale-105 whitespace-nowrap"
              >
                <Bell className="h-3.5 w-3.5" />
                <span>Notify Me</span>
              </button>
            </motion.div>

            {/* MACOS CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative group rounded-2xl border border-indigo-500/20 bg-[#07051a]/70 hover:border-indigo-500/40 p-6 sm:p-7 backdrop-blur-xl transition duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-zinc-200 shrink-0 group-hover:scale-105 transition-transform duration-200">
                  <FaApple className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2.5 mb-1">
                    <h4 className="text-lg font-bold text-white">macOS Desktop</h4>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-indigo-300 bg-indigo-500/15 border border-indigo-500/30 px-2.5 py-0.5 rounded-full whitespace-nowrap shrink-0">
                      Coming Soon
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 max-w-sm leading-relaxed mb-2.5">
                    Universal binary (.dmg) for Apple Silicon (M1/M2/M3/M4) & Intel. Includes persistent menu bar widget.
                  </p>
                  <div className="flex items-center gap-2 text-[11px] text-zinc-400">
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 whitespace-nowrap">macOS 13.0+</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 whitespace-nowrap">Apple Silicon Native</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onOpenWaitlist?.("macOS App")}
                className="shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 hover:border-indigo-500/50 text-indigo-200 hover:text-white transition duration-200 cursor-pointer shadow-[0_0_15px_rgba(99,102,241,0.15)] hover:scale-105 whitespace-nowrap"
              >
                <Bell className="h-3.5 w-3.5" />
                <span>Notify Me</span>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Security & Reliability Assurances Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-[#07051a]/50 p-5 sm:p-6 md:p-8 backdrop-blur-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          <div className="flex items-center gap-3.5">
            <div className="h-10 w-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white uppercase tracking-wider">100% Virus-Free</h5>
              <p className="text-[11px] text-zinc-400 mt-0.5">Scanned & verified clean binary</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="h-10 w-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white uppercase tracking-wider">Instant Voice Sync</h5>
              <p className="text-[11px] text-zinc-400 mt-0.5">Sub-50ms WebSocket pipelines</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="h-10 w-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
              <Cpu className="h-5 w-5" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white uppercase tracking-wider">BYOK & Self-Host</h5>
              <p className="text-[11px] text-zinc-400 mt-0.5">Direct custom API key routing</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="h-10 w-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <HardDrive className="h-5 w-5" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white uppercase tracking-wider">Zero Bloat</h5>
              <p className="text-[11px] text-zinc-400 mt-0.5">Ultra-compact 942 KB runtime</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
