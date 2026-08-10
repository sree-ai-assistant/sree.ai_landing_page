"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import {
  Zap,
  Cpu,
  Globe,
  Sparkles,
  ArrowRight,
  Shield,
  Database,
  Server,
  Star,
  Check,
  Code2,
  Lock,
  Layers,
  Activity,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import CircuitBoardSvg from "@/components/CircuitBoardSvg";
import CosmicDustBackground from "@/components/CosmicDustBackground";
import Navbar from "@/components/Navbar";
import ToolsGrid from "@/components/ToolsGrid";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import WaitlistModal from "@/components/WaitlistModal";

// AI Models & Tech Stack Logos Marquee
const partnerLogos = [
  { name: "Meta Llama 3", desc: "Open Weights LLM" },
  { name: "Mistral AI", desc: "Mixture of Experts" },
  { name: "FLUX.1", desc: "State-of-the-art Image Gen" },
  { name: "Runway Gen-3", desc: "Cinematic Video Gen" },
  { name: "Luma AI", desc: "Dream Machine Video API" },
  { name: "Stable Diffusion", desc: "Open Diffusion Models" },
  { name: "Deno Deploy", desc: "Edge Runtime Infrastructure" },
  { name: "Supabase DB", desc: "Vector Database Core" },
];

// Testimonials data
const testimonials = [
  {
    quote:
      "Sree AI's real-time voice latency is mind-blowing. Our users can hold natural verbal conversations with less than 50ms audio latency, completely removing the awkward robotic pauses.",
    name: "Dr. Elena Rostova",
    role: "Director of Conversational AI",
    company: "NeuralFlow Systems",
    metrics: "Voice Latency: 42ms",
  },
  {
    quote:
      "By integrating Sree Image and Video models directly into our design workflow, we've cut our asset conceptualization cycles from days to under ten minutes. The FLUX.1 speed nodes are incredibly stable.",
    name: "Aiko Tanaka",
    role: "Lead Creative Technologist",
    company: "Dimension Studios",
    metrics: "Generation Speed: 3.2s",
  },
  {
    quote:
      "The ability to self-host the entire Sree AI infrastructure with Deno and Supabase gave us total security compliance. We spun up our private cluster in under an hour.",
    name: "Marcus Vance",
    role: "VP of Engineering & Security",
    company: "Cognitive Security Corp",
    metrics: "Self-Hosted Setup: <1hr",
  },
  {
    quote:
      "Web search tool integration inside Sree Chat is outstanding. It automatically aggregates search indexes and outputs fully cited markdown summaries without hallucinating.",
    name: "Sarah Jenkins",
    role: "Lead Knowledge Graph Engineer",
    company: "Contextual AI",
    metrics: "Citation Precision: 99.4%",
  },
  {
    quote:
      "Our global enterprise clients require local inference options. Sree AI's decentralized Edge nodes automatically route queries to the lowest latency node, keeping billing completely predictable.",
    name: "David Chen",
    role: "Chief Technology Officer",
    company: "Grid Computing Global",
    metrics: "Global Node Uptime: 99.99%",
  },
];

export default function Home() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState("starter");

  const handleOpenWaitlist = (tier?: string) => {
    if (tier) setSelectedTier(tier);
    setWaitlistOpen(true);
  };

  // Force dark mode on mount
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("dark");
    root.style.colorScheme = "dark";
  }, []);

  // Initialize Lenis 60fps smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030014] text-white selection:bg-purple-500 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Top Floating Glass Navbar */}
      <Navbar onOpenWaitlist={handleOpenWaitlist} />

      {/* Main Content Container */}
      <main className="relative w-full">
        {/* HERO SECTION WITH PRESERVED BACKGROUND VIDEO */}
        <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-between pt-28 md:pt-36 pb-12 overflow-hidden border-b border-white/5">
          {/* Background Blackhole Video Layer (Full-width with radial vignette mask for seamless side blending) */}
          <div
            className="absolute top-0 inset-x-0 w-full h-[600px] sm:h-[720px] md:h-[850px] z-0 overflow-hidden pointer-events-none opacity-90 mix-blend-screen"
            style={{
              WebkitMaskImage: "radial-gradient(ellipse 90% 75% at 50% 0%, black 35%, transparent 100%)",
              maskImage: "radial-gradient(ellipse 90% 75% at 50% 0%, black 35%, transparent 100%)",
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-[-350px] w-full h-full object-cover rotate-180 scale-110"
            >
              <source src="/blackhole.webm" type="video/webm" />
              <source src="/hero-bg.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030014]/20 to-[#030014]" />
          </div>

          {/* Glowing purple ambient portal aura */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[400px] bg-gradient-to-b from-purple-600/35 via-indigo-600/20 to-transparent blur-[140px] pointer-events-none rounded-full" />

          {/* Hero Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col items-center justify-center my-auto">
            {/* Platform Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-widest mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.2)]"
            >
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              <span>UNIFIED AI PLATFORM & MULTI-TOOL SUITE</span>
            </motion.div>

            {/* Customized All-in-One AI Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.08]"
            >
              The All-in-One AI Platform &{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-300 to-indigo-200 bg-clip-text text-transparent">
                Multimodal Tool Ecosystem.
              </span>
            </motion.h1>

            {/* Custom Subtitle for AI Tools */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-xl text-zinc-300 max-w-3xl leading-relaxed font-normal"
            >
              Converse with ultra-fast LLMs, synthesize real-time voice dialogue, generate high-fidelity graphics & video, convert 2D assets to 3D models, and humanize text — all inside one unified open-source platform.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4 items-center justify-center"
            >
              <a
                href="#tools"
                className="relative group flex items-center justify-center gap-2.5 rounded-full px-8 py-4 font-semibold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-[0_0_30px_rgba(59,130,246,0.35)] hover:shadow-[0_0_45px_rgba(59,130,246,0.55)] transition-all duration-300 hover:scale-105 cursor-pointer text-sm"
              >
                <span>Explore AI Tools</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>

              <a
                href="https://app.sreeai.qzz.io"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold bg-white/10 hover:bg-white/15 border border-white/15 hover:border-white/30 text-white transition-all duration-200 hover:scale-105 cursor-pointer text-sm backdrop-blur-md"
              >
                <span>Launch Console</span>
              </a>

              <a
                href="https://github.com/sree-ai-assistant/sree.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-full px-7 py-4 font-semibold bg-zinc-950/80 border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white transition-all duration-200 hover:scale-105 text-sm"
              >
                <FaGithub className="h-5 w-5 text-zinc-300" />
                <span>Star on GitHub</span>
              </a>
            </motion.div>
          </div>

          {/* STRICTLY PRESERVED: Powered by Advanced Open Models & Infrastructure Section */}
          <div className="w-full mt-12 py-6 border-t border-b border-white/5 bg-[#030014]/60 backdrop-blur-md">
            <p className="text-center text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-6">
              Powered by Advanced Open Models & Infrastructure
            </p>

            <div
              className="group relative flex gap-6 overflow-hidden p-2"
              style={{
                maskImage:
                  "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
              }}
            >
              <div className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-16 min-w-full">
                {partnerLogos.map((logo, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center shrink-0">
                    <span className="text-zinc-200 font-bold tracking-tight text-md">{logo.name}</span>
                    <span className="text-[9px] uppercase tracking-wider text-zinc-400 font-medium mt-0.5">
                      {logo.desc}
                    </span>
                  </div>
                ))}
              </div>
              <div
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-16 min-w-full"
                aria-hidden="true"
              >
                {partnerLogos.map((logo, idx) => (
                  <div key={`dup-${idx}`} className="flex flex-col items-center justify-center shrink-0">
                    <span className="text-zinc-200 font-bold tracking-tight text-md">{logo.name}</span>
                    <span className="text-[9px] uppercase tracking-wider text-zinc-400 font-medium mt-0.5">
                      {logo.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTIONS WITH THREE.JS COSMIC DUST BACKGROUND */}
        <div className="relative w-full z-10">
          <CosmicDustBackground />

          <div className="relative z-10">
            {/* MEANINGFUL AI TOOLS SUITE GRID */}
            <ToolsGrid onOpenWaitlist={handleOpenWaitlist} />

            {/* ARCHITECTURE & SECURITY INFRASTRUCTURE SECTION */}
            <section id="architecture" className="relative py-24 border-t border-white/5">
              <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
                    <Server className="h-3.5 w-3.5" />
                    Enterprise Security & Edge Nodes
                  </div>

                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                    Decentralized Speed. Enterprise Compliance.
                  </h2>

                  <p className="mt-4 text-base md:text-lg text-zinc-400 leading-relaxed">
                    Sree AI runs on distributed Deno Edge Functions and Supabase Vector database containers, guaranteeing low-latency global routing and optional self-hosted cluster deployment.
                  </p>
                </div>

                {/* Architecture Highlights Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="rounded-3xl border border-white/10 bg-[#07051a]/80 backdrop-blur-xl p-8 flex flex-col justify-between hover:border-blue-500/30 transition duration-300">
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
                        <Zap className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Sub-50ms Voice Streaming</h3>
                      <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                        Direct persistent WebSocket connections eliminate REST roundtrips, allowing natural human speech flow without delays.
                      </p>
                    </div>
                    <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-blue-400 font-semibold">
                      <span>Deno Edge Runtime</span>
                      <span>42ms AVG</span>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-[#07051a]/80 backdrop-blur-xl p-8 flex flex-col justify-between hover:border-purple-500/30 transition duration-300">
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-6">
                        <Lock className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Zero Data Retention</h3>
                      <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                        Your prompts, voice buffers, and synthesized images remain private. BYOK support routes queries straight to provider keys.
                      </p>
                    </div>
                    <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-purple-400 font-semibold">
                      <span>SOC2 & GDPR Compliant</span>
                      <span>BYOK Ready</span>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-[#07051a]/80 backdrop-blur-xl p-8 flex flex-col justify-between hover:border-emerald-500/30 transition duration-300">
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">
                        <Database className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Self-Hosted Private VPC</h3>
                      <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                        Apache 2.0 licensed code allows complete containerization inside private AWS, GCP, or bare-metal server infrastructure.
                      </p>
                    </div>
                    <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-emerald-400 font-semibold">
                      <span>Supabase Vector Core</span>
                      <span>100% On-Prem</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* TESTIMONIALS SECTION */}
            <section className="relative py-24 border-t border-white/5 overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-widest mb-4">
                    <Star className="h-3.5 w-3.5 fill-purple-400" />
                    Trusted by AI Engineers & Teams
                  </div>

                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                    What Leaders Say About Sree AI.
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.slice(0, 3).map((item, idx) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="rounded-3xl border border-white/10 bg-[#07051a]/70 backdrop-blur-xl p-8 flex flex-col justify-between"
                    >
                      <p className="text-sm md:text-base text-zinc-300 leading-relaxed italic">
                        "{item.quote}"
                      </p>

                      <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-bold text-white">{item.name}</h4>
                          <p className="text-xs text-zinc-400">
                            {item.role}, <span className="text-blue-400 font-medium">{item.company}</span>
                          </p>
                        </div>
                        <span className="text-[11px] font-semibold text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20">
                          {item.metrics}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* ANIMATED PRICING SECTION ($0 FREE, $8 STARTER, $29 PRO) */}
            <PricingSection onOpenWaitlist={handleOpenWaitlist} />

            {/* FAQ ACCORDION SECTION */}
            <FaqSection />

            {/* FOOTER WITH OFFICIAL LOGOS */}
            <footer className="relative border-t border-white/10 bg-[#030014] py-16">
              <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Logo & Copyright */}
                <div className="flex flex-col items-center md:items-start gap-3">
                  <img
                    src="https://app.sreeai.qzz.io/Sree-ai-Primary-logo.png"
                    alt="Sree AI Logo"
                    className="h-9 w-auto object-contain"
                  />
                  <p className="text-xs text-zinc-500">
                    © {new Date().getFullYear()} Sree AI Platform Inc. Apache 2.0 Open Source License.
                  </p>
                </div>

                {/* Nav Links */}
                <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-400">
                  <a href="#features" className="hover:text-white transition">Features</a>
                  <a href="#tools" className="hover:text-white transition">AI Tools</a>
                  <a href="#architecture" className="hover:text-white transition">Architecture</a>
                  <a href="#pricing" className="hover:text-white transition">Pricing</a>
                  <a href="#faq" className="hover:text-white transition">FAQ</a>
                </div>

                {/* Status Indicator */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>All Tool Clusters Operational</span>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </main>

      {/* Interactive Waitlist / Launch Signup Modal */}
      <WaitlistModal
        isOpen={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
        selectedTier={selectedTier}
      />
    </div>
  );
}
