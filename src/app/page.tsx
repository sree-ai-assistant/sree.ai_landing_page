"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import { 
  Zap, 
  Cpu, 
  Globe, 
  Sparkles, 
  Mic, 
  ImageIcon, 
  MessageSquare, 
  ArrowRight, 
  Activity, 
  TrendingUp, 
  Clock, 
  Video, 
  Code, 
  Terminal, 
  Shield, 
  FileText, 
  Database, 
  Server, 
  Star, 
  Play, 
  Pause,
  ChevronDown,
  Volume2,
  Check,
  Code2,
  Share2
} from "lucide-react";
import { FiPlus, FiMenu, FiX, FiMail, FiPhone } from "react-icons/fi";
import { FaGithub, FaBuilding } from "react-icons/fa";
import CircuitBoardSvg from "@/components/CircuitBoardSvg";

// AI Models & Tech Stack Logos
const partnerLogos = [
  { name: "Meta Llama 3", desc: "Open Weights LLM" },
  { name: "Mistral AI", desc: "Mixture of Experts" },
  { name: "FLUX.1", desc: "State-of-the-art Image Gen" },
  { name: "Runway Gen-3", desc: "Cinematic Video Gen" },
  { name: "Luma AI", desc: "Dream Machine Video API" },
  { name: "Stable Diffusion", desc: "Open Diffusion Models" },
  { name: "Deno Deploy", desc: "Edge Runtime Infrastructure" },
  { name: "Supabase DB", desc: "Vector Database Core" }
];

// Testimonials data
const testimonials = [
  {
    quote: "Sree AI's real-time voice latency is mind-blowing. Our users can hold natural verbal conversations with less than 50ms audio latency, completely removing the awkward robotic pauses.",
    name: "Dr. Elena Rostova",
    role: "Director of Conversational AI",
    company: "NeuralFlow Systems",
    metrics: "Voice Latency: 42ms"
  },
  {
    quote: "By integrating Sree Image and Video models directly into our design workflow, we've cut our asset conceptualization cycles from days to under ten minutes. The FLUX.1 speed nodes are incredibly stable.",
    name: "Aiko Tanaka",
    role: "Lead Creative Technologist",
    company: "Dimension Studios",
    metrics: "Generation Speed: 3.2s"
  },
  {
    quote: "The ability to self-host the entire Sree AI infrastructure with Deno and Supabase gave us total security compliance. We spun up our private cluster in under an hour.",
    name: "Marcus Vance",
    role: "VP of Engineering & Security",
    company: "Cognitive Security Corp",
    metrics: "Self-Hosted Cluster Setup: <1hr"
  },
  {
    quote: "Web search tool integration inside Sree Chat is outstanding. It automatically aggregates search indexes and outputs fully cited markdown summaries without hallucinating.",
    name: "Sarah Jenkins",
    role: "Lead Knowledge Graph Engineer",
    company: "Contextual AI",
    metrics: "Citation Precision: 99.4%"
  },
  {
    quote: "Our global enterprise clients require local inference options. Sree AI's decentralized Edge nodes automatically route queries to the lowest latency node, keeping billing completely predictable.",
    name: "David Chen",
    role: "Chief Technology Officer",
    company: "Grid Computing Global",
    metrics: "Global Node Uptime: 99.99%"
  }
];

// FAQ data
const faqItems = [
  {
    id: 1,
    question: "Is Sree AI fully open-source?",
    answer: "Yes. Sree AI is licensed under the Apache 2.0 license. The entire tech stack—including the React/Next.js frontend, the Deno Edge Functions gateway, and the Supabase database migrations—is public and fully self-hostable on your own hardware or cloud providers."
  },
  {
    id: 2,
    question: "How does Sree Voice achieve sub-50ms latency?",
    answer: "Sree Voice bypasses traditional HTTP REST polling. It uses persistent WebSocket streams directly connected to optimized Deno Edge nodes. Text-to-Speech (TTS) synthesis and Automatic Speech Recognition (ASR) pipelines run concurrently, streaming audio buffers bidirectionally to ensure natural, zero-latency interactions."
  },
  {
    id: 3,
    question: "What models power Sree Image and Sree Video?",
    answer: "Sree AI incorporates the highest-performing open models: FLUX.1 (Schnell & Dev) and Stable Diffusion 3 for image generation, combined with Luma Dream Machine and Runway Gen-3 APIs for cinematic video synthesis. You can swap, fine-tune, or add custom LoRAs to match your specific brand voice."
  },
  {
    id: 4,
    question: "Can I host Sree AI on-premise for high-security environments?",
    answer: "Absolutely. Sree AI is containerized and built on modular backend principles. You can deploy it within your private AWS VPC, GCP project, or on bare-metal hardware. All database queries use Supabase self-hosted containers, ensuring customer prompts and datasets never leave your network boundaries."
  },
  {
    id: 5,
    question: "How is the pricing structured for api integration?",
    answer: "The open-source core is 100% free. If you use our hosted cloud platform, we offer a generous Free tier, a Creator/Pro tier at $29/mo with dedicated compute nodes, and a scale-to-fit Enterprise tier billed directly based on raw token, voice-minute, and image generation API consumption."
  }
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  // Playground State
  const [activeTab, setActiveTab] = useState<"chat" | "voice" | "image" | "video">("chat");
  const [chatProgress, setChatProgress] = useState<"idle" | "typing" | "running" | "done">("idle");
  const [voiceActive, setVoiceActive] = useState(false);
  const [voiceProfile, setVoiceProfile] = useState("alloy");
  const [imageGenerating, setImageGenerating] = useState(false);
  const [imageDone, setImageDone] = useState(false);
  const [imagePrompt, setImagePrompt] = useState("cybernetic neural network core glowing in violet and sapphire, highly detailed, 8k render");
  const [videoGenerating, setVideoGenerating] = useState(false);
  const [videoDone, setVideoDone] = useState(false);
  const [videoPrompt, setVideoPrompt] = useState("Obsidian monolith structure floating in a shifting stellar nebula, cinematic camera rotate");

  // Force dark mode on mount
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("dark");
    root.style.colorScheme = "dark";
  }, []);

  // Initialize Lenis scroll
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

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Chat playground runner
  const runChatMock = () => {
    if (chatProgress !== "idle") return;
    setChatProgress("typing");
    setTimeout(() => {
      setChatProgress("running");
      setTimeout(() => {
        setChatProgress("done");
      }, 2500);
    }, 1200);
  };

  const resetChatMock = () => {
    setChatProgress("idle");
  };

  // Image playground runner
  const runImageMock = () => {
    if (imageGenerating) return;
    setImageGenerating(true);
    setImageDone(false);
    setTimeout(() => {
      setImageGenerating(false);
      setImageDone(true);
    }, 3000);
  };

  // Video playground runner
  const runVideoMock = () => {
    if (videoGenerating) return;
    setVideoGenerating(true);
    setVideoDone(false);
    setTimeout(() => {
      setVideoGenerating(false);
      setVideoDone(true);
    }, 3500);
  };

  return (
    <div className="w-full min-h-full bg-[#030014] text-zinc-100 relative overflow-x-hidden">
      
      {/* Background Glow effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none z-0 animate-pulse" style={{ animationDuration: "8s" }}></div>

      {/* Navigation */}
      <nav 
        className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#030014]/80 backdrop-blur-xl transition duration-200 ease-in-out"
        style={{
          animation: "header-slide-down-fade 0.5s ease-out forwards"
        }}
      >
        {/* Desktop Nav */}
        <div className="mx-auto hidden h-[68px] w-full flex-row items-center justify-between px-6 md:flex md:max-w-7xl">
          <a className="flex items-center gap-2" href="/">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 p-[1px]">
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-zinc-950">
                <Sparkles className="h-4 w-4 text-blue-400" />
              </div>
            </div>
            <h1 className="bg-gradient-to-r from-blue-400 via-purple-300 to-indigo-200 bg-clip-text text-2xl font-bold tracking-tighter text-transparent">
              Sree AI
            </h1>
          </a>
          
          <div className="mx-auto flex items-center text-sm font-medium gap-8 text-zinc-300">
            <a className="transition duration-200 hover:text-white hover:scale-105" href="#features">Features</a>
            <a className="transition duration-200 hover:text-white hover:scale-105" href="#playground">Playground</a>
            <a className="transition duration-200 hover:text-white hover:scale-105" href="#architecture">Architecture</a>
            <a className="transition duration-200 hover:text-white hover:scale-105" href="#testimonials">Testimonials</a>
            <a className="transition duration-200 hover:text-white hover:scale-105" href="#pricing">Pricing</a>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/sree-ai-assistant/sree.ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-400 hover:text-white transition duration-200"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <button className="text-sm relative group flex items-center justify-center gap-2 rounded-full px-5 py-2.5 font-medium bg-zinc-900 border border-white/10 hover:border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-300 hover:scale-105 cursor-pointer">
              <span className="text-zinc-100 group-hover:text-blue-400 transition-colors">Launch Console</span>
              <ArrowRight className="h-3.5 w-3.5 text-zinc-400 group-hover:translate-x-1 group-hover:text-blue-400 transition-all" />
            </button>
          </div>
        </div>

        {/* Mobile Nav Header */}
        <div className="mx-auto flex h-[60px] w-full items-center justify-between px-6 md:hidden">
          <a className="flex items-center gap-2" href="/">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 p-[1px]">
              <div className="flex h-full w-full items-center justify-center rounded-lg bg-zinc-950">
                <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              </div>
            </div>
            <h1 className="bg-gradient-to-r from-blue-400 via-purple-300 to-indigo-200 bg-clip-text text-xl font-bold tracking-tighter text-transparent">
              Sree AI
            </h1>
          </a>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-300 hover:text-white transition duration-150 p-1"
            >
              {mobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu expanded */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="w-full bg-[#030014]/95 border-b border-white/10 md:hidden px-6 py-5 flex flex-col gap-4 text-md font-semibold text-zinc-100 backdrop-blur-xl"
            >
              <a onClick={() => setMobileMenuOpen(false)} href="#features" className="hover:text-white text-zinc-300 py-1 transition-colors">Features</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#playground" className="hover:text-white text-zinc-300 py-1 transition-colors">Playground</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#architecture" className="hover:text-white text-zinc-300 py-1 transition-colors">Architecture</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#testimonials" className="hover:text-white text-zinc-300 py-1 transition-colors">Testimonials</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#pricing" className="hover:text-white text-zinc-300 py-1 transition-colors">Pricing</a>
              <hr className="border-white/5 my-1" />
              <div className="flex items-center justify-between">
                <a 
                  href="https://github.com/sree-ai-assistant/sree.ai" 
                  target="_blank" 
                  className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                >
                  <FaGithub className="h-5 w-5" />
                  <span>GitHub Repository</span>
                </a>
                <button className="text-sm bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 rounded-full font-medium text-white hover:shadow-lg transition duration-200">
                  Launch Console
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <div className="overflow-x-clip font-sans">
        
        {/* HERO SECTION */}
        <section id="about" className="relative min-h-screen flex items-center justify-center pt-24 pb-16">
          {/* Blackhole background video */}
          <video 
            muted 
            autoPlay 
            loop 
            playsInline
            className="absolute left-0 top-[-380px] z-[1] h-full w-full rotate-180 object-cover opacity-75 mix-blend-screen pointer-events-none"
          >
            <source src="blackhole.webm" type="video/webm" />
          </video>

          {/* Circuit Board watermark */}
          <div className="w-full overflow-hidden absolute inset-0 z-10 pointer-events-none">
            <CircuitBoardSvg className="hidden sm:flex absolute left-1/4 top-[-60px] brightness-[0.3] opacity-35" />
          </div>

          {/* Grid lines columns background */}
          <div className="absolute left-0 top-0 z-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-b border-white/5 pointer-events-none">
            <div className="border-r border-white/5 h-full"></div>
            <div></div>
            <div className="border-l border-white/5 h-full"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center">
            
            {/* Tagline Badge */}
            <div className="mb-8 flex flex-col items-center">
              <div className="flex items-center gap-2 border border-blue-500/20 px-4 py-2 bg-blue-500/5 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                ✨ Open Source Multimodal Grid
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-white text-pretty text-center text-4xl font-semibold leading-tight tracking-tight sm:text-6xl md:max-w-screen-lg lg:text-[72px]">
              The Omni-Capable AI Infrastructure.
            </h1>
            
            {/* Subheading */}
            <h2 className="text-md mt-6 max-w-2xl text-pretty text-center text-zinc-400/90 md:text-lg leading-relaxed">
              Connect, create, and converse. Sree AI consolidates text understanding, real-time responsive voice dialogue, high-fidelity image composition, and cinematic video synthesis in one open-source framework.
            </h2>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap gap-4 items-center justify-center">
              <button className="relative group flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-[0_0_30px_rgba(59,130,246,0.25)] hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-105 cursor-pointer">
                <span>Start Interacting</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a 
                href="https://github.com/sree-ai-assistant/sree.ai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 font-semibold bg-zinc-900 border border-white/10 hover:border-white/20 text-zinc-200 hover:text-white transition-all duration-200 hover:scale-105"
              >
                <FaGithub className="h-5 w-5 text-zinc-300" />
                <span>Star on GitHub</span>
              </a>
            </div>

            {/* Tech Stack Partner Logos */}
            <div className="w-full mt-24 py-6 border-t border-b border-white/5 bg-[#030014]/50 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-6">Powered by Advanced Open Models & Infrastructure</p>
              
              <div 
                className="group relative flex gap-6 overflow-hidden p-2" 
                style={{ maskImage: "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)" }}
              >
                <div className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-16 min-w-full">
                  {partnerLogos.map((logo, idx) => (
                    <div key={idx} className="flex flex-col items-center justify-center shrink-0">
                      <span className="text-zinc-300 font-bold tracking-tight text-md">{logo.name}</span>
                      <span className="text-[9px] uppercase tracking-wider text-zinc-500 font-medium mt-0.5">{logo.desc}</span>
                    </div>
                  ))}
                </div>
                <div className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-16 min-w-full" aria-hidden="true">
                  {partnerLogos.map((logo, idx) => (
                    <div key={`dup-${idx}`} className="flex flex-col items-center justify-center shrink-0">
                      <span className="text-zinc-300 font-bold tracking-tight text-md">{logo.name}</span>
                      <span className="text-[9px] uppercase tracking-wider text-zinc-500 font-medium mt-0.5">{logo.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CORE FEATURES PILLARS GRID */}
        <section id="features" className="relative scroll-mt-20 py-24 border-t border-white/5">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-sm font-semibold tracking-wider text-purple-400 uppercase">Core Modalities</span>
              <h2 className="mt-3 font-semibold text-3xl sm:text-5xl tracking-tight text-white">
                Four Pillars of Multimodal AI.
              </h2>
              <p className="mt-4 text-zinc-400 text-lg">
                Instead of managing isolated models and accounts, access real-time conversation, workspace logic, and creative suites from a single neural platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Feature 1: Sree Chat */}
              <div className="glass-panel rounded-3xl p-8 hover:border-blue-500/20 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-blue-600/10 flex items-center justify-center border border-blue-500/20 mb-6">
                    <MessageSquare className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-tight">Sree Chat & Reasoning</h3>
                  <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
                    Interactive conversational assistant equipped with web search indexing, PDF/CSV file parser nodes, and a python code execution sandbox. Write scripts, build charts, and interpret complex data in real-time.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center text-sm font-medium text-blue-400 group-hover:text-blue-300">
                  <span>Code Interpreter Included</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Feature 2: Sree Voice */}
              <div className="glass-panel rounded-3xl p-8 hover:border-purple-500/20 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-purple-600/10 flex items-center justify-center border border-purple-500/20 mb-6">
                    <Mic className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-tight">Sree Voice (Low Latency)</h3>
                  <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
                    Zero-lag conversational agent designed for natural speech flows. Uses WebSocket audio chunk streams, leading to sub-50ms synthesis. Select from neural vocal templates or clone your own voice profile.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center text-sm font-medium text-purple-400 group-hover:text-purple-300">
                  <span>Ultra-low Latency (42ms)</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Feature 3: Sree Image */}
              <div className="glass-panel rounded-3xl p-8 hover:border-indigo-500/20 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-indigo-600/10 flex items-center justify-center border border-indigo-500/20 mb-6">
                    <ImageIcon className="h-6 w-6 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-tight">Sree Image Studio</h3>
                  <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
                    Creative visual suite built on FLUX.1 models and Stable Diffusion 3. Select image sizes, aspect ratios, prompting styles, and custom seed controls. Generate stunning 4K creative graphics in seconds.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center text-sm font-medium text-indigo-400 group-hover:text-indigo-300">
                  <span>FLUX & SDXL Pipelines</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Feature 4: Sree Video */}
              <div className="glass-panel rounded-3xl p-8 hover:border-pink-500/20 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-pink-600/10 flex items-center justify-center border border-pink-500/20 mb-6">
                    <Video className="h-6 w-6 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-tight">Sree Video Synthesis</h3>
                  <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
                    Cinematic video generation leveraging Runway Gen-3 and Luma Dream Machine pipelines. Create looping assets, detailed product mock videos, or expand existing imagery into 60fps high-definition animations.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center text-sm font-medium text-pink-400 group-hover:text-pink-300">
                  <span>Dream Machine Integration</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* INTERACTIVE PLAYGROUND SANDBOX */}
        <section id="playground" className="relative scroll-mt-20 py-24 border-t border-white/5 bg-[#08051a]/30">
          <div className="mx-auto max-w-7xl px-6">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold tracking-wider text-blue-400 uppercase">Live Sandbox</span>
              <h2 className="mt-3 font-semibold text-3xl sm:text-5xl tracking-tight text-white">
                Experience the Sandbox.
              </h2>
              <p className="mt-4 text-zinc-400 text-lg">
                Click through the workspace tabs below to interact with simulations of Sree AI's multimodal nodes in action.
              </p>
            </div>

            {/* Playground Console Container */}
            <div className="glass-panel rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.05)] border-white/10 max-w-5xl mx-auto">
              
              {/* Console Tabs */}
              <div className="flex border-b border-white/5 bg-[#0c0926]/60 p-2 overflow-x-auto gap-2">
                <button 
                  onClick={() => setActiveTab("chat")}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${activeTab === "chat" ? "bg-blue-600/15 border border-blue-500/20 text-blue-400" : "text-zinc-400 hover:text-white"}`}
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Sree Chat & Code</span>
                </button>
                <button 
                  onClick={() => setActiveTab("voice")}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${activeTab === "voice" ? "bg-purple-600/15 border border-purple-500/20 text-purple-400" : "text-zinc-400 hover:text-white"}`}
                >
                  <Mic className="h-4 w-4" />
                  <span>Sree Voice (42ms)</span>
                </button>
                <button 
                  onClick={() => setActiveTab("image")}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${activeTab === "image" ? "bg-indigo-600/15 border border-indigo-500/20 text-indigo-400" : "text-zinc-400 hover:text-white"}`}
                >
                  <ImageIcon className="h-4 w-4" />
                  <span>Image Studio</span>
                </button>
                <button 
                  onClick={() => setActiveTab("video")}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${activeTab === "video" ? "bg-pink-600/15 border border-pink-500/20 text-pink-400" : "text-zinc-400 hover:text-white"}`}
                >
                  <Video className="h-4 w-4" />
                  <span>Video Synthesis</span>
                </button>
              </div>

              {/* Console Body */}
              <div className="p-6 sm:p-8 min-h-[420px] bg-zinc-950/60 relative flex flex-col justify-between">
                
                {/* 1. CHAT TAB CONTENT */}
                {activeTab === "chat" && (
                  <div className="flex flex-col gap-6 w-full animate-fadeIn">
                    <div className="flex items-center justify-between border-b border-white/5 pb-4">
                      <div className="flex items-center gap-2">
                        <Terminal className="h-4 w-4 text-blue-400" />
                        <span className="text-xs font-mono text-zinc-400">Node-ID: TOKYO-EDGE-09</span>
                      </div>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 font-mono">Status: Connected</span>
                    </div>

                    <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                      <div className="flex gap-3 justify-end">
                        <div className="bg-zinc-800 rounded-2xl rounded-tr-none px-4 py-3 max-w-[80%] text-sm text-zinc-200">
                          Verify Sree AI's low latency and generate a python script mapping it.
                        </div>
                      </div>

                      {chatProgress !== "idle" && (
                        <div className="flex gap-3 justify-start">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-[10px] font-bold text-white shrink-0">S</div>
                          <div className="bg-zinc-900 border border-white/5 rounded-2xl rounded-tl-none px-4 py-3 max-w-[85%] text-sm text-zinc-300">
                            {chatProgress === "typing" && (
                              <div className="flex gap-1.5 items-center py-1">
                                <span className="text-xs text-zinc-500 font-mono">Inference pipeline processing...</span>
                                <div className="h-1.5 w-1.5 bg-blue-400 rounded-full animate-ping"></div>
                              </div>
                            )}

                            {chatProgress === "running" && (
                              <div className="space-y-3 font-mono text-xs">
                                <div className="text-yellow-400 font-semibold">Executing Sandbox python runtime...</div>
                                <pre className="p-3 bg-black/60 rounded-lg text-zinc-400 border border-white/5 overflow-x-auto text-[11px]">
{`import numpy as np
import time

latencies = [42, 45, 38, 41, 44]
print(f"Avg Deno Edge Latency: {np.mean(latencies):.1f}ms")`}
                                </pre>
                                <div className="text-green-400">Out: Avg Deno Edge Latency: 42.0ms</div>
                              </div>
                            )}

                            {chatProgress === "done" && (
                              <div className="space-y-3">
                                <p>Sree Voice and Sree Chat run on decentralized edge instances. Here is the comparative latency grid across model providers:</p>
                                
                                <div className="border border-white/10 rounded-xl overflow-hidden text-xs">
                                  <div className="grid grid-cols-3 bg-white/5 p-2 font-semibold border-b border-white/10 text-zinc-200">
                                    <span>Provider</span>
                                    <span>Architecture</span>
                                    <span>Latency (ms)</span>
                                  </div>
                                  <div className="grid grid-cols-3 p-2 border-b border-white/5 text-zinc-400">
                                    <span className="font-semibold text-zinc-300">Sree AI Edge</span>
                                    <span>Deno WebSocket</span>
                                    <span className="text-blue-400 font-semibold">42ms</span>
                                  </div>
                                  <div className="grid grid-cols-3 p-2 border-b border-white/5 text-zinc-400">
                                    <span>Deepgram TTS</span>
                                    <span>REST API Chunk</span>
                                    <span>380ms</span>
                                  </div>
                                  <div className="grid grid-cols-3 p-2 text-zinc-400">
                                    <span>OpenAI Audio</span>
                                    <span>HTTP Segment</span>
                                    <span>620ms</span>
                                  </div>
                                </div>
                                
                                <p className="text-xs text-zinc-500 italic mt-2">Verified in Tokio-09 edge node. Inference execution complete.</p>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex gap-3 justify-between items-center mt-6 pt-4 border-t border-white/5">
                      <button 
                        onClick={chatProgress === "done" ? resetChatMock : runChatMock}
                        className="px-5 py-2.5 rounded-full text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition cursor-pointer flex items-center gap-1.5"
                      >
                        {chatProgress === "idle" && "Trigger Chat Analysis"}
                        {chatProgress === "typing" && "Analyzing Query..."}
                        {chatProgress === "running" && "Executing Python Sandbox..."}
                        {chatProgress === "done" && "Reset Chat Sandbox"}
                      </button>
                      <span className="text-xs text-zinc-500">Run code safe inside custom sandbox environment.</span>
                    </div>
                  </div>
                )}

                {/* 2. VOICE TAB CONTENT */}
                {activeTab === "voice" && (
                  <div className="flex flex-col items-center justify-center gap-6 w-full animate-fadeIn py-4">
                    <div className="text-center">
                      <span className="text-xs font-mono text-zinc-500">WebSocket connection latency: </span>
                      <span className="text-xs font-mono text-purple-400 font-bold">42ms</span>
                    </div>

                    {/* Microphone Pulse Circle */}
                    <div className="relative flex items-center justify-center h-32 w-32 mt-4">
                      {voiceActive && (
                        <>
                          <div className="absolute inset-0 rounded-full bg-purple-500/10 border border-purple-500/20 animate-ping"></div>
                          <div className="absolute inset-2 rounded-full bg-blue-500/10 border border-blue-500/20 animate-pulse" style={{ animationDuration: "2s" }}></div>
                        </>
                      )}
                      <button 
                        onClick={() => setVoiceActive(!voiceActive)}
                        className={`h-24 w-24 rounded-full flex items-center justify-center border transition-all duration-300 cursor-pointer ${voiceActive ? "bg-purple-600/20 border-purple-500 shadow-[0_0_30px_rgba(139,92,246,0.3)]" : "bg-zinc-900 border-white/10 hover:border-purple-500/30"}`}
                      >
                        <Mic className={`h-8 w-8 transition-colors duration-300 ${voiceActive ? "text-purple-400" : "text-zinc-400"}`} />
                      </button>
                    </div>

                    <div className="text-center max-w-sm mt-2">
                      <p className="text-sm font-semibold text-zinc-200">
                        {voiceActive ? "Sree Voice Listening... speak naturally" : "Click mic to simulate Sree Voice stream"}
                      </p>
                      <p className="text-xs text-zinc-500 mt-1">
                        {voiceActive ? "Audio packets streaming at 24kHz Deno edge channel." : "Converse in real-time with customizable vocal attributes."}
                      </p>
                    </div>

                    {/* Voice Attribute Selectors */}
                    <div className="flex gap-2 mt-4 border-t border-white/5 pt-6 w-full justify-center flex-wrap">
                      {["alloy", "echo", "nova", "shimmer"].map((profile) => (
                        <button
                          key={profile}
                          onClick={() => setVoiceProfile(profile)}
                          className={`px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider border transition-colors cursor-pointer ${voiceProfile === profile ? "bg-purple-500/15 border-purple-500/40 text-purple-400" : "bg-transparent border-white/5 text-zinc-400 hover:text-white"}`}
                        >
                          {profile}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. IMAGE TAB CONTENT */}
                {activeTab === "image" && (
                  <div className="flex flex-col gap-6 w-full animate-fadeIn">
                    <div className="flex flex-col sm:flex-row gap-4 border-b border-white/5 pb-4 items-center justify-between">
                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <span className="text-xs text-zinc-400 font-mono">Model: FLUX.1-schnell</span>
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-xs font-mono text-zinc-500">Assigned Compute: 8x RTX 4090 Cluster</div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <label className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Prompt Canvas</label>
                          <textarea 
                            value={imagePrompt}
                            onChange={(e) => setImagePrompt(e.target.value)}
                            rows={3}
                            className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-xs text-zinc-200 focus:outline-none focus:border-indigo-500 transition-colors"
                          />
                        </div>
                        <button 
                          onClick={runImageMock}
                          disabled={imageGenerating}
                          className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition cursor-pointer"
                        >
                          {imageGenerating ? "De-noising image steps..." : "Generate Creative Asset"}
                        </button>
                      </div>

                      {/* Image Preview Canvas */}
                      <div className="h-44 rounded-2xl border border-white/10 overflow-hidden relative bg-zinc-900 flex items-center justify-center">
                        {imageGenerating && (
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-6 w-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                            <span className="text-xs font-mono text-zinc-500">Running inference loop...</span>
                          </div>
                        )}
                        {!imageGenerating && !imageDone && (
                          <div className="text-center p-4">
                            <ImageIcon className="h-8 w-8 text-zinc-700 mx-auto mb-2" />
                            <span className="text-xs text-zinc-500">Trigger generation to view result canvas</span>
                          </div>
                        )}
                        {imageDone && (
                          <>
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 via-purple-900/30 to-blue-900/40 animate-pulse"></div>
                            <div className="absolute inset-4 rounded-xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-pink-500/20 to-purple-500/20 flex flex-col justify-end p-3">
                              <span className="text-[10px] font-mono uppercase bg-black/60 px-2 py-0.5 rounded text-indigo-400 self-start">4K FLUX.1 Core Output</span>
                              <span className="text-xs text-white font-semibold mt-1 truncate">{imagePrompt}</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. VIDEO TAB CONTENT */}
                {activeTab === "video" && (
                  <div className="flex flex-col gap-6 w-full animate-fadeIn">
                    <div className="flex flex-col sm:flex-row gap-4 border-b border-white/5 pb-4 items-center justify-between">
                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <span className="text-xs text-zinc-400 font-mono">Model: Luma Dream Machine API</span>
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-xs font-mono text-zinc-500">Codec: H.264 HEVC HD</div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <label className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Video Prompt</label>
                          <textarea 
                            value={videoPrompt}
                            onChange={(e) => setVideoPrompt(e.target.value)}
                            rows={3}
                            className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-xs text-zinc-200 focus:outline-none focus:border-pink-500 transition-colors"
                          />
                        </div>
                        <button 
                          onClick={runVideoMock}
                          disabled={videoGenerating}
                          className="w-full py-2.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-semibold text-xs transition cursor-pointer"
                        >
                          {videoGenerating ? "Rendering video timeline..." : "Synthesize Video Clip"}
                        </button>
                      </div>

                      {/* Video Preview Canvas */}
                      <div className="h-44 rounded-2xl border border-white/10 overflow-hidden relative bg-zinc-900 flex items-center justify-center">
                        {videoGenerating && (
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-6 w-6 border-2 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
                            <span className="text-xs font-mono text-zinc-500">Processing keyframes...</span>
                          </div>
                        )}
                        {!videoGenerating && !videoDone && (
                          <div className="text-center p-4">
                            <Video className="h-8 w-8 text-zinc-700 mx-auto mb-2" />
                            <span className="text-xs text-zinc-500">Trigger synthesis to output high-fidelity video clip</span>
                          </div>
                        )}
                        {videoDone && (
                          <>
                            <div className="absolute inset-0 bg-gradient-to-tr from-pink-900/30 via-purple-900/30 to-indigo-900/40 animate-pulse"></div>
                            {/* Simulated moving light inside card representing video player */}
                            <div className="absolute top-0 left-[-100%] h-full w-[200%] bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shimmer_3s_infinite]"></div>
                            <div className="absolute inset-4 rounded-xl border border-white/10 bg-zinc-950/80 flex flex-col justify-between p-3">
                              <div className="flex justify-between items-center w-full">
                                <span className="text-[10px] font-mono uppercase bg-pink-500/10 px-2 py-0.5 rounded text-pink-400">1080p 60fps</span>
                                <span className="text-[9px] font-mono text-zinc-500">Duration: 4.0s</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="h-6 w-6 rounded-full bg-pink-600/20 border border-pink-500/30 flex items-center justify-center">
                                  <Play className="h-3 w-3 text-pink-400" />
                                </div>
                                <span className="text-xs text-white font-semibold truncate flex-1">{videoPrompt}</span>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </section>

        {/* TECHNICAL ARCHITECTURE BENTO BLOCK */}
        <section id="architecture" className="relative scroll-mt-20 py-24 border-t border-white/5 overflow-hidden">
          <div className="w-full overflow-hidden absolute inset-0 z-0 pointer-events-none">
            <CircuitBoardSvg className="hidden sm:flex absolute right-10 top-0 brightness-[0.2] opacity-40" />
          </div>

          <div className="mx-auto max-w-7xl px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-sm font-semibold tracking-wider text-blue-400 uppercase">Hardware & Platform Metrics</span>
              <h2 className="mt-3 font-semibold text-3xl sm:text-5xl tracking-tight text-white">
                Engineered for Velocity.
              </h2>
              <p className="mt-4 text-zinc-400 text-lg">
                Decentralized nodes, optimized WebSocket pipelines, and light Edge integrations ensure lightning-fast global deliveries.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Architecture block 1: Average Latency */}
              <div className="glass-panel rounded-3xl p-8 transform-gpu hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between [box-shadow:0_-30px_60px_-15px_rgba(59,130,246,0.08)_inset]">
                <div>
                  <div className="flex justify-between items-center mb-10">
                    <span className="text-xs font-mono uppercase text-blue-400 font-bold bg-blue-500/10 px-3 py-1 rounded-full">Speed Index</span>
                    <Clock className="h-5 w-5 text-zinc-500" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-5xl font-bold tracking-tight text-white">42ms</p>
                    <p className="text-lg font-semibold tracking-tight text-zinc-200">Average Inference Latency</p>
                  </div>
                </div>
                <p className="mt-6 text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-6">
                  WebSocket connections paired with cached Deno Edge functions ensure instantaneous voice and data processing.
                </p>
              </div>

              {/* Architecture block 2: Global Reach */}
              <div className="glass-panel rounded-3xl p-8 transform-gpu hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between [box-shadow:0_-30px_60px_-15px_rgba(139,92,246,0.08)_inset]">
                <div>
                  <div className="flex justify-between items-center mb-10">
                    <span className="text-xs font-mono uppercase text-purple-400 font-bold bg-purple-500/10 px-3 py-1 rounded-full">Global Reach</span>
                    <Globe className="h-5 w-5 text-zinc-500" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-5xl font-bold tracking-tight text-white">18 Nodes</p>
                    <p className="text-lg font-semibold tracking-tight text-zinc-200">Decentralized Neural Cluster</p>
                  </div>
                </div>
                <p className="mt-6 text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-6">
                  Distributed cluster architecture spanning 6 regions, providing fail-safes and local computation access.
                </p>
              </div>

              {/* Architecture block 3: Processing Capacity */}
              <div className="glass-panel rounded-3xl p-8 transform-gpu hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between [box-shadow:0_-30px_60px_-15px_rgba(59,130,246,0.08)_inset]">
                <div>
                  <div className="flex justify-between items-center mb-10">
                    <span className="text-xs font-mono uppercase text-blue-400 font-bold bg-blue-500/10 px-3 py-1 rounded-full">Processing</span>
                    <Cpu className="h-5 w-5 text-zinc-500" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-5xl font-bold tracking-tight text-white">2.4 TFLOPS</p>
                    <p className="text-lg font-semibold tracking-tight text-zinc-200">Processing Grid Capacity</p>
                  </div>
                </div>
                <p className="mt-6 text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-6">
                  Massive scale cluster logic that automatically adjusts compute requirements across complex rendering cycles.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CLIENT TESTIMONIALS SLIDER SECTION */}
        <section id="testimonials" className="relative scroll-mt-20 py-24 border-t border-white/5 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold tracking-wider text-purple-400 uppercase">Testimonials</span>
              <h2 className="mt-3 font-semibold text-3xl sm:text-5xl tracking-tight text-white">
                What Creators Say.
              </h2>
              <p className="mt-4 text-zinc-400 text-lg">
                See how AI engineers, designers, and CTOs scale their products using Sree AI's modular architecture.
              </p>
            </div>

            <div 
              style={{ maskImage: "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)" }} 
              className="flex relative overflow-hidden gap-6 py-4"
            >
              <div className="flex shrink-0 animate-logo-cloud flex-row gap-6">
                {testimonials.map((t, idx) => (
                  <div key={idx} className="glass-panel border border-white/5 flex flex-col justify-between rounded-2xl shrink-0 w-[450px] p-6 hover:border-purple-500/20 transition-colors">
                    <p className="text-pretty text-md font-light text-zinc-200 leading-relaxed italic">
                      &quot;{t.quote}&quot;
                    </p>
                    <div className="border-t border-white/5 w-full mt-6 pt-4 flex gap-4 items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-xs font-semibold text-white">
                          {t.name[0]}
                        </div>
                        <div className="flex flex-col">
                          <h5 className="text-sm font-medium text-zinc-100">{t.name}</h5>
                          <p className="text-zinc-500 text-xs">
                            {t.role}, {t.company}
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-blue-400 font-mono font-semibold bg-blue-500/5 px-2.5 py-1 rounded-full border border-blue-500/10">
                        {t.metrics}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex shrink-0 animate-logo-cloud flex-row gap-6" aria-hidden="true">
                {testimonials.map((t, idx) => (
                  <div key={`dup-${idx}`} className="glass-panel border border-white/5 flex flex-col justify-between rounded-2xl shrink-0 w-[450px] p-6 hover:border-purple-500/20 transition-colors">
                    <p className="text-pretty text-md font-light text-zinc-200 leading-relaxed italic">
                      &quot;{t.quote}&quot;
                    </p>
                    <div className="border-t border-white/5 w-full mt-6 pt-4 flex gap-4 items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-xs font-semibold text-white">
                          {t.name[0]}
                        </div>
                        <div className="flex flex-col">
                          <h5 className="text-sm font-medium text-zinc-100">{t.name}</h5>
                          <p className="text-zinc-500 text-xs">
                            {t.role}, {t.company}
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-blue-400 font-mono font-semibold bg-blue-500/5 px-2.5 py-1 rounded-full border border-blue-500/10">
                        {t.metrics}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROUDLY OPEN SOURCE / GITHUB BADGE */}
        <section className="relative py-24 border-t border-white/5 overflow-hidden">
          <div className="w-full overflow-hidden absolute inset-0 z-0 pointer-events-none">
            <CircuitBoardSvg className="absolute top-[-80px] brightness-[0.2] opacity-35" />
          </div>

          <div className="mx-auto max-w-7xl px-6 relative z-10 text-center flex flex-col items-center justify-center">
            <div className="h-12 w-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center mb-6">
              <FaGithub className="h-6 w-6 text-zinc-300 animate-pulse" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight">
              Fully Open Source. Self-Host in Minutes.
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-zinc-400 text-md leading-relaxed">
              Sree AI's complete architecture is containerized and open. Integrate custom model weights, self-host database schemas, and modify routing layers to match your data privacy compliance rules.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
              <a 
                href="https://github.com/sree-ai-assistant/sree.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold bg-zinc-900 border border-white/10 hover:border-white/20 hover:scale-105 transition duration-200 cursor-pointer"
              >
                <Star className="h-4 w-4 text-yellow-400 group-hover:scale-110 transition-transform" />
                <span>Star on GitHub</span>
              </a>
              
              <button className="flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold bg-blue-600 hover:bg-blue-500 text-white hover:scale-105 transition duration-200 cursor-pointer">
                <Code2 className="h-4 w-4" />
                <span>Read Self-Hosting Docs</span>
              </button>
            </div>
          </div>
        </section>

        {/* PRICING COMPARISON SECTION */}
        <section id="pricing" className="relative overflow-hidden py-24 border-t border-white/5">
          {/* Subtle dotted background grid pattern */}
          <div 
            className="absolute opacity-30 inset-0 h-full w-full pointer-events-none" 
            style={{
              backgroundColor: "transparent",
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233f3f46' fillOpacity='0.4' fillRule='evenodd'%3E%3Ccircle cx='1.2' cy='1.2' r='1.2'/%3E%3C/g%3E%3C/svg%3E")`,
              maskImage: "radial-gradient(circle, white 10%, transparent 90%)",
              WebkitMaskImage: "radial-gradient(circle, white 10%, transparent 90%)"
            }}
          ></div>

          <div className="mx-auto max-w-7xl px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-sm font-semibold tracking-wider text-blue-400 uppercase">Billing Schemes</span>
              <h2 className="mt-3 font-semibold text-3xl sm:text-5xl tracking-tight text-white">
                Simple, Modular Pricing.
              </h2>
              <p className="mt-4 text-zinc-400 text-lg">
                Self-host the repository for free, or run on our high-speed edge clusters with dedicated compute units.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16 items-stretch">
              
              {/* Pricing 1: Free Starter */}
              <div className="glass-panel rounded-3xl p-8 flex flex-col justify-between hover:border-blue-500/10 transition-colors">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-300">Starter Core</h3>
                  <p className="text-zinc-500 text-xs mt-1">For testing and personal deployments</p>
                  
                  <div className="flex items-baseline mt-6">
                    <span className="text-4xl font-bold tracking-tight text-white">$0</span>
                    <span className="text-zinc-500 text-sm ml-1">/forever</span>
                  </div>
                  
                  <ul className="space-y-4 mt-8 text-sm text-zinc-400">
                    <li className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-green-400 shrink-0" />
                      <span>Standard chat models (Llama 3)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-green-400 shrink-0" />
                      <span>Web search tool capabilities</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-green-400 shrink-0" />
                      <span>Standard rates limits (60 RPM)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-green-400 shrink-0" />
                      <span>Full access to open-source repository</span>
                    </li>
                  </ul>
                </div>

                <button className="w-full py-3 rounded-xl border border-white/10 hover:border-white/20 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs transition duration-200 mt-8 cursor-pointer">
                  Deploy Free Instance
                </button>
              </div>

              {/* Pricing 2: Creator Pro (Featured) */}
              <div className="glass-panel rounded-3xl p-8 flex flex-col justify-between border-blue-500/30 relative [box-shadow:0_0_40px_rgba(59,130,246,0.06)]">
                <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  Most Popular
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white">Creator Pro</h3>
                  <p className="text-zinc-400 text-xs mt-1">For advanced creators & power users</p>
                  
                  <div className="flex items-baseline mt-6">
                    <span className="text-4xl font-bold tracking-tight text-white">$29</span>
                    <span className="text-zinc-500 text-sm ml-1">/mo</span>
                  </div>
                  
                  <ul className="space-y-4 mt-8 text-sm text-zinc-300">
                    <li className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-blue-400 shrink-0" />
                      <span>FLUX.1 image models included</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-blue-400 shrink-0" />
                      <span>Sree Voice real-time channel (2hrs/mo)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-blue-400 shrink-0" />
                      <span>Luma & Runway Video synthesis (60 clips/mo)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-blue-400 shrink-0" />
                      <span>Priority inference queue (42ms)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-blue-400 shrink-0" />
                      <span>Advanced Sandbox (Python/Data science)</span>
                    </li>
                  </ul>
                </div>

                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-xs shadow-[0_0_20px_rgba(59,130,246,0.2)] transition duration-200 mt-8 cursor-pointer">
                  Upgrade to Pro
                </button>
              </div>

              {/* Pricing 3: Enterprise Scale */}
              <div className="glass-panel rounded-3xl p-8 flex flex-col justify-between hover:border-purple-500/10 transition-colors">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-300">Enterprise Core</h3>
                  <p className="text-zinc-500 text-xs mt-1">For teams requiring scaling & custom configs</p>
                  
                  <div className="flex items-baseline mt-6">
                    <span className="text-4xl font-bold tracking-tight text-white">Custom</span>
                  </div>
                  
                  <ul className="space-y-4 mt-8 text-sm text-zinc-400">
                    <li className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-purple-400 shrink-0" />
                      <span>Unlimited scale token usage quotas</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-purple-400 shrink-0" />
                      <span>Dedicated, isolated compute clusters</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-purple-400 shrink-0" />
                      <span>Custom model weights / fine-tunes</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-purple-400 shrink-0" />
                      <span>Dedicated SLA support & integration care</span>
                    </li>
                  </ul>
                </div>

                <button className="w-full py-3 rounded-xl border border-white/10 hover:border-white/20 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs transition duration-200 mt-8 cursor-pointer">
                  Contact Enterprise Rep
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS SECTION */}
        <section className="relative z-20 border-t border-white/5 py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold tracking-wider text-purple-400 uppercase">Support Index</span>
              <h2 className="mt-3 font-semibold text-3xl sm:text-5xl tracking-tight text-white">
                Frequently Asked Questions.
              </h2>
              <p className="mt-4 text-zinc-400 text-lg">
                Answers to questions about open source integration, models, latency, and customization.
              </p>
            </div>

            <dl className="mt-12 space-y-6 divide-y divide-white/10">
              {faqItems.map((item, idx) => (
                <div key={item.id} className="pt-6">
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="cursor-pointer flex w-full items-start justify-between text-left text-white focus:outline-none"
                  >
                    <span className="text-base font-semibold leading-7 text-zinc-100 hover:text-white transition-colors">
                      {item.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <FiPlus 
                        className={`h-5 w-5 transform transition-transform duration-300 ${expandedFaq === idx ? "rotate-45 text-purple-400" : "text-zinc-500"}`} 
                      />
                    </span>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {expandedFaq === idx && (
                      <motion.dd
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden pr-12 mt-3"
                      >
                        <p className="text-sm leading-relaxed text-zinc-400">
                          {item.answer}
                        </p>
                      </motion.dd>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* CONTACT FORM SECTION */}
        <section id="contact" className="relative border-t border-white/5 overflow-hidden">
          <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 relative z-10">
            <div className="relative px-6 pb-20 pt-24 lg:static lg:px-8 lg:py-32">
              <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg relative z-20">
                
                <div className="w-full overflow-hidden absolute inset-0 z-10 pointer-events-none">
                  <CircuitBoardSvg className="hidden sm:flex absolute left-[-100px] top-10 brightness-[0.15] opacity-25" />
                </div>

                <h2 className="text-3xl font-bold tracking-tight text-white">
                  Connect With Us
                </h2>
                <p className="mt-4 text-md leading-relaxed text-zinc-400">
                  Have questions about custom model deployments, security compliance standards, or scaling requirements? Send our integration team a message.
                </p>

                <dl className="mt-10 space-y-6 text-sm text-zinc-300">
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <FaBuilding className="h-6 w-6 text-zinc-500" />
                    </dt>
                    <dd className="leading-6">Sree AI Research Lab<br/>128 Neural Way, San Francisco, CA 94107</dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <FiMail className="h-6 w-6 text-zinc-500" />
                    </dt>
                    <dd>
                      <a href="mailto:support@sree.ai" className="hover:text-white transition">
                        support@sree.ai
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <form className="px-6 pb-24 pt-20 lg:px-8 lg:py-32 border-t lg:border-t-0 lg:border-l border-white/5 relative z-20" onSubmit={(e) => e.preventDefault()}>
              <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-xs font-semibold leading-6 text-zinc-400 uppercase tracking-wider">First name</label>
                    <div className="mt-2">
                      <input id="first-name" type="text" autoComplete="given-name" suppressHydrationWarning className="block w-full rounded-xl border border-white/10 bg-zinc-900/50 focus:bg-zinc-900 px-4 py-2.5 text-white shadow-sm placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" name="first-name"/>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-xs font-semibold leading-6 text-zinc-400 uppercase tracking-wider">Last name</label>
                    <div className="mt-2">
                      <input id="last-name" type="text" autoComplete="family-name" suppressHydrationWarning className="block w-full rounded-xl border border-white/10 bg-zinc-900/50 focus:bg-zinc-900 px-4 py-2.5 text-white shadow-sm placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" name="last-name"/>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-xs font-semibold leading-6 text-zinc-400 uppercase tracking-wider">Email</label>
                    <div className="mt-2">
                      <input id="email" type="email" autoComplete="email" suppressHydrationWarning className="block w-full rounded-xl border border-white/10 bg-zinc-900/50 focus:bg-zinc-900 px-4 py-2.5 text-white shadow-sm placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" name="email"/>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-xs font-semibold leading-6 text-zinc-400 uppercase tracking-wider">Message</label>
                    <div className="mt-2">
                      <textarea id="message" name="message" rows={4} suppressHydrationWarning className="block w-full rounded-xl border border-white/10 bg-zinc-900/50 focus:bg-zinc-900 px-4 py-2.5 text-white shadow-sm placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <button className="relative group flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transition duration-200 cursor-pointer">
                    <span>Send Message</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="overflow-x-hidden border-t border-white/5 py-16 bg-zinc-950/20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 py-8 sm:grid-cols-12 md:py-12">
              <div className="space-y-4 sm:col-span-12 lg:col-span-4">
                <a className="flex items-center gap-2" href="/">
                  <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 p-[1px]">
                    <div className="flex h-full w-full items-center justify-center rounded-lg bg-zinc-950">
                      <Sparkles className="h-3.5 w-3.5 text-blue-400" />
                    </div>
                  </div>
                  <h2 className="bg-gradient-to-r from-blue-400 via-purple-300 to-indigo-200 bg-clip-text text-xl font-bold tracking-tighter text-transparent">
                    Sree AI
                  </h2>
                </a>
                <div className="text-xs text-zinc-500 font-medium">
                  © 2026 Sree AI. Licensed under Apache 2.0.
                </div>
              </div>
              
              <div className="space-y-3 sm:col-span-6 md:col-span-3 lg:col-span-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Product</h3>
                <ul className="space-y-2 text-sm">
                  <li><a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#features">Features</a></li>
                  <li><a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#playground">Playground</a></li>
                  <li><a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#pricing">Pricing Plans</a></li>
                  <li><a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="https://github.com/sree-ai-assistant/sree.ai">GitHub Core</a></li>
                </ul>
              </div>
              
              <div className="space-y-3 sm:col-span-6 md:col-span-3 lg:col-span-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Open-Source</h3>
                <ul className="space-y-2 text-sm">
                  <li><a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="https://github.com/sree-ai-assistant/sree.ai">Repository</a></li>
                  <li><a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="https://github.com/sree-ai-assistant/sree.ai/blob/main/LICENSE">Apache 2.0 License</a></li>
                  <li><a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="https://github.com/sree-ai-assistant/sree.ai/issues">Report Issue</a></li>
                </ul>
              </div>

              <div className="space-y-3 sm:col-span-6 md:col-span-3 lg:col-span-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="https://github.com/sree-ai-assistant/sree.ai">Developer Docs</a></li>
                  <li><a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="https://github.com/sree-ai-assistant/sree.ai">Self-Hosting Guide</a></li>
                  <li><a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#0">API Credentials</a></li>
                </ul>
              </div>

              <div className="space-y-3 sm:col-span-6 md:col-span-3 lg:col-span-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Social</h3>
                <ul className="flex gap-3">
                  <li>
                    <a className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white hover:border-zinc-700 transition" aria-label="Twitter" href="#0">
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white hover:border-zinc-700 transition" aria-label="Github" href="https://github.com/sree-ai-assistant/sree.ai">
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
