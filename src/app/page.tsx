"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import { FiPlus, FiMenu, FiX, FiMail, FiPhone } from "react-icons/fi";
import { FaGithub, FaBuilding } from "react-icons/fa";
import CircuitBoardSvg from "@/components/CircuitBoardSvg";

// Partner logos
const partnerLogos = [
  { name: "Vercel", url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg" },
  { name: "Nextjs", url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881475/nextjs_logo_dark_gfkf8m.svg" },
  { name: "Prime", url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/t2awrrfzdvmg1chnzyfr.svg" },
  { name: "Trustpilot", url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tkfspxqmjflfllbuqxsi.svg" },
  { name: "Webflow", url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/nymiivu48d5lywhf9rpf.svg" },
  { name: "Airbnb", url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/pmblusboe7vkw8vxdknx.svg" },
  { name: "Tina", url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/afqhiygywyphuou6xtxc.svg" },
  { name: "Stackoverflow", url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/ts1j4mkooxqmscgptafa.svg" },
  { name: "mistral", url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tyos2ayezryjskox3wzs.svg" }
];

// Testimonials data
const testimonials = [
  {
    quote: "Simple is the perfect tool for building user interfaces. It's easy to use and has a lot of features. I've been using it for a while now and I'm really happy with the results.",
    name: "Alena Zhukova",
    role: "Software Engineer",
    companyLogo: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg"
  },
  {
    quote: "Simple is a great tool for building user interfaces. It's easy to use and has a lot of features. I've been using it for a while now and I'm really happy with the results.",
    name: "Aiko",
    role: "Design Engineer",
    companyLogo: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg"
  },
  {
    quote: "Simple is the perfect tool for building user interfaces. It's easy to use and has a lot of features. I've been using it for a while now and I'm really happy with the results..",
    name: "Alena Zhukova",
    role: "Software Engineer",
    companyLogo: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg"
  },
  {
    quote: "Simple is the perfect tool for building user interfaces. It's easy to use and has a lot of features. I've been using it for a while now and I'm really happy with the results.",
    name: "Lisa Kemp",
    role: "Product Designer",
    companyLogo: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg"
  },
  {
    quote: "Simple is the perfect tool for building user interfaces. It's easy to use and has a lot of features. I've been using it for a while now and I'm really happy with the results.",
    name: "Saud",
    role: "Fullstack Developer",
    companyLogo: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg"
  },
  {
    quote: "Simple is the perfect tool for building user interfaces. It's easy to use and has a lot of features. I've been using it for a while now and I'm really happy with the results.",
    name: "Paula Smith",
    role: "UX Designer",
    companyLogo: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg"
  }
];

// FAQ data
const faqItems = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
  },
  {
    id: 2,
    question: "What's the best thing?",
    answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
  },
  {
    id: 3,
    question: "What's about Switzerland?",
    answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
  },
  {
    id: 4,
    question: "What's the best thing about Switzerland?",
    answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
  },
  {
    id: 5,
    question: "What's the best thing about Switzerland?",
    answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
  }
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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

  return (
    <div className="w-full min-h-full bg-[#030014] text-zinc-100">
      
      {/* Navigation */}
      <nav 
        className="sticky top-0 z-30 w-full border-b border-white/10 bg-[#030014]/92 pb-3 backdrop-blur-3xl transition duration-200 ease-in-out"
        style={{
          animation: "header-slide-down-fade 0.5s ease-out forwards"
        }}
      >
        {/* Desktop Nav */}
        <div className="mx-auto hidden h-[58px] w-full flex-row items-center justify-between px-6 pt-3 md:mx-auto md:flex md:max-w-full lg:max-w-7xl">
          <a className="w-[100px] pt-10 md:pt-0 lg:w-[180px]" href="/">
            <h1 className="bg-gradient-to-tr from-purple-400 via-purple-200 to-pink-200 bg-clip-text text-3xl font-bold uppercase tracking-tighter text-transparent">
              Remak.
            </h1>
          </a>
          
          <div className="mx-auto flex items-center text-sm font-semibold gap-6 text-zinc-100">
            <a className="transition duration-300 ease-in-out text-zinc-100/90 hover:text-white hover:scale-105" href="#about">About</a>
            <a className="transition duration-300 ease-in-out text-zinc-100/90 hover:text-white hover:scale-105" href="#blog">Blog</a>
            <a className="transition duration-300 ease-in-out text-zinc-100/90 hover:text-white hover:scale-105" href="#pricing">Pricing</a>
            <a className="transition duration-300 ease-in-out text-zinc-100/90 hover:text-white hover:scale-105" href="#changelog">Changelog</a>
            <a className="transition duration-300 ease-in-out text-zinc-100/90 hover:text-white hover:scale-105" href="#docs">Docs</a>
          </div>
          
          <div className="flex items-center gap-5">
            <button className="text-md group relative flex flex-row items-center justify-center gap-2 rounded-full px-4 py-3 font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
              <div className="animate-gradient absolute inset-0 block h-full w-full bg-gradient-to-r from-purple-600/50 to-purple-800/50 bg-[length:300%_100%] p-[1px] [border-radius:inherit] ![mask-composite:subtract] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"></div>
              <div className="h-4 w-[1px] shrink-0 bg-white/10" role="none" data-orientation="vertical"></div>
              <span className="animate-gradient inline whitespace-pre bg-gradient-to-r from-purple-200/70 via-[#9c40ff] to-[#ffaa40] bg-[length:300%_100%] bg-clip-text text-center text-transparent">
                SignUp Now
              </span>
              <svg strokeLinecap="round" className="text-[#9c40ff] ml-1" strokeWidth="1.5" aria-hidden="true" viewBox="0 0 10 10" height="11" width="11" stroke="currentColor" fill="none">
                <path strokeLinecap="round" d="M0 5h7" className="opacity-0 transition duration-500 group-hover:opacity-100 group-hover:duration-500"></path>
                <path strokeLinecap="round" d="M1 1l4 4-4 4" className="transition duration-500 group-hover:translate-x-[3px] group-hover:duration-500"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="mx-auto mt-0 flex h-[58px] w-full max-w-5xl items-center justify-between px-6 backdrop-blur-xl md:hidden md:max-w-7xl">
          <a className="lg:w-[180px]" href="/">
            <h1 className="bg-gradient-to-tr from-purple-400 via-purple-200 to-pink-200 bg-clip-text text-3xl font-bold uppercase tracking-tighter text-transparent">
              Remak.
            </h1>
          </a>
          <div className="flex gap-4 items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-300 hover:text-white transition duration-150"
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
              className="w-full bg-[#030014]/98 border-b border-white/10 md:hidden px-6 py-4 flex flex-col gap-4 text-md font-semibold text-zinc-100"
            >
              <a onClick={() => setMobileMenuOpen(false)} href="#about" className="hover:text-white text-zinc-100 py-1">About</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#blog" className="hover:text-white text-zinc-100 py-1">Blog</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#pricing" className="hover:text-white text-zinc-100 py-1">Pricing</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#changelog" className="hover:text-white text-zinc-100 py-1">Changelog</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#docs" className="hover:text-white text-zinc-100 py-1">Docs</a>
              <hr className="border-white/5 my-1" />
              <button className="text-md group relative flex w-full flex-row items-center justify-center gap-2 rounded-full px-4 py-3 font-medium shadow-[inset_0_-8px_10px_#8fdfff1f]">
                <div className="animate-gradient absolute inset-0 block h-full w-full bg-gradient-to-r from-purple-600/50 to-purple-800/50 bg-[length:300%_100%] p-[1px] [border-radius:inherit] ![mask-composite:subtract] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"></div>
                <span className="animate-gradient inline whitespace-pre bg-gradient-to-r from-purple-200/70 via-[#9c40ff] to-[#ffaa40] bg-[length:300%_100%] bg-clip-text text-center text-transparent">
                  SignUp Now
                </span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <div className="overflow-x-clip font-dm">
        
        {/* HERO SECTION */}
        <section id="about" className="relative min-h-full">
          {/* Blackhole background video */}
          <video 
            muted 
            autoPlay 
            loop 
            playsInline
            className="absolute left-0 top-[-380px] z-[1] h-full w-full rotate-180 object-cover opacity-100"
          >
            <source src="blackhole.webm" type="video/webm" />
          </video>

          {/* Circuit Board watermark */}
          <div className="w-full overflow-hidden absolute inset-0 z-10 pointer-events-none">
            <CircuitBoardSvg className="hidden sm:flex absolute left-1/4 top-[-100px] brightness-50" />
          </div>

          {/* Grid lines columns background */}
          <div className="absolute left-0 top-0 z-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-b border-white/5 pointer-events-none">
            <div className="border-r border-white/5 h-full"></div>
            <div></div>
            <div className="border-l border-white/5 h-full"></div>
          </div>

          <div className="relative z-10 flex flex-col pt-[180px] pb-12">
            <div className="flex flex-col items-center justify-end">
              <div className="flex items-center gap-2 border border-white/5 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider text-purple-400">
                ✨ Remak Platform
              </div>
            </div>

            <div className="mx-auto flex h-[288px] max-w-5xl shrink-0 flex-col items-center justify-center gap-2 px-6 py-4 text-center">
              <h1 className="text-white text-pretty text-center text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:max-w-screen-lg md:text-6xl lg:text-[clamp(50px,7vw,75px)]">
                Scaling your business to million in a seconds.
              </h1>
              <h2 className="text-md mt-4 max-w-lg text-pretty text-center text-gray-300/70 md:text-lg">
                You can put any thing as sub heading for SDK wrrapper thing here with some details
              </h2>
            </div>

            <div className="flex items-start justify-center px-8 sm:px-24">
              <div className="flex w-full max-w-[80vw] flex-col items-center justify-start md:max-w-[392px]">
                <button className="text-md group relative mt-3 flex flex-row items-center justify-center gap-2 rounded-full px-6 py-3 font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
                  <div className="animate-gradient absolute inset-0 block h-full w-full bg-gradient-to-r from-purple-600/50 to-purple-800/50 bg-[length:300%_100%] p-[1px] [border-radius:inherit] ![mask-composite:subtract] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"></div>
                  <div className="h-4 w-[1px] shrink-0 bg-white/10" role="none" data-orientation="vertical"></div>
                  <span className="animate-gradient inline whitespace-pre bg-gradient-to-r from-purple-200/70 via-[#9c40ff] to-[#ffaa40] bg-[length:300%_100%] bg-clip-text text-center text-transparent">
                    Get Started Now
                  </span>
                  <svg strokeLinecap="round" className="text-[#9c40ff] ml-1" strokeWidth="1.5" aria-hidden="true" viewBox="0 0 10 10" height="11" width="11" stroke="currentColor" fill="none">
                    <path strokeLinecap="round" d="M0 5h7" className="opacity-0 transition duration-500 group-hover:opacity-100 group-hover:duration-500"></path>
                    <path strokeLinecap="round" d="M1 1l4 4-4 4" className="transition duration-500 group-hover:translate-x-[3px] group-hover:duration-500"></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Logo Cloud Ticker */}
            <div className="mx-auto max-w-7xl w-full py-16 mt-8">
              <div className="mx-auto w-full px-4 md:px-8">
                <div 
                  className="group relative mt-6 flex gap-6 overflow-hidden p-2" 
                  style={{ maskImage: "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)" }}
                >
                  <div className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-12">
                    {partnerLogos.map((logo, idx) => (
                      <img 
                        key={idx} 
                        src={logo.url} 
                        className="h-10 w-28 px-2 flex-none brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300" 
                        alt={logo.name} 
                      />
                    ))}
                  </div>
                  <div className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-12" aria-hidden="true">
                    {partnerLogos.map((logo, idx) => (
                      <img 
                        key={`dup-${idx}`} 
                        src={logo.url} 
                        className="h-10 w-28 px-2 flex-none brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300" 
                        alt={logo.name} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* FEATURES GRID SECTION */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <section id="features" aria-labelledby="resources-title" className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32">
            <div>
              <p className="mt-8 max-w-2xl mx-auto font-geist text-center text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-zinc-200">
                Tools and resources  that you can utilize with cheap.
              </p>
              <p className="mt-4 max-w-xl mx-auto text-lg text-center tracking-tight text-zinc-400">
                Design assets, icon teardowns, and a community of fellow icon designers where you can ask questions.
              </p>
            </div>
            
            <div className="mt-16">
              <ol role="list" className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-zinc-400/20">
                {/* Feature 1 */}
                <li className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12">
                  <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                    <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
                      <img alt="Figma Icon" loading="lazy" width="160" height="144" src="/figma.svg" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-medium tracking-tight text-zinc-200">
                      Figma icon templates
                    </h3>
                    <p className="mt-2 text-sm text-zinc-400">
                      Pefectly structured templates for quickly designing new icons at dozens of common sizes.
                    </p>
                  </div>
                </li>

                {/* Feature 2 */}
                <li className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12">
                  <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img alt="Abstract Background" loading="lazy" className="absolute inset-0 h-full w-full object-cover" src="/abstract-background.png" />
                      <img alt="Video Player Icon" loading="lazy" width="160" height="144" className="relative z-10" src="/video-player.svg" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-medium tracking-tight text-zinc-200">
                      Weekly icon teardowns
                    </h3>
                    <p className="mt-2 text-sm text-zinc-400">
                      Weekly videos where we dissect and recreate beautiful icons we find on the web.
                    </p>
                  </div>
                </li>

                {/* Feature 3 */}
                <li className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12">
                  <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                    <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
                      <img alt="Video Player Icon" loading="lazy" width="160" height="144" src="/video-player.svg" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-medium tracking-tight text-zinc-200">
                      Community of icon designers
                    </h3>
                    <p className="mt-2 text-sm text-zinc-400">
                      A private Discord server where you can get help and give feedback on each others' work.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </section>
        </div>

        {/* BLOG CARD TEASER */}
        <div id="blog" className="relative border-t border-white/5 py-14">
          <div className="w-full overflow-hidden absolute inset-0 z-10 pointer-events-none">
            <CircuitBoardSvg className="hidden sm:flex absolute right-10 top-0 brightness-100 opacity-50" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="relative bg-inherit py-24 sm:py-12">
              <div className="mx-auto max-w-full px-6 lg:px-8">
                <div className="absolute left-0 top-44 h-56 w-[90%] overflow-x-hidden bg-[#9560EB] bg-opacity-40 opacity-45 blur-[337.4px]" style={{ transform: "rotate(-30deg)" }}></div>
                
                <div className="mr-auto max-w-2xl lg:max-w-5xl relative z-10">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    From the blog
                  </h2>
                  <p className="mr-auto mt-2 max-w-lg text-lg leading-8 text-gray-300">
                    Learn how to grow your business with our expert advice. - image taken from{" "}
                    <a href="https://resend.com" target="_blank" rel="noopener noreferrer" className="text-white underline underline-offset-1">
                      Resend
                    </a>
                  </p>
                  
                  <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                    <article className="relative isolate flex flex-col gap-8 lg:flex-row">
                      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-80 lg:shrink-0">
                        <img 
                          alt="Webhooks" 
                          src="https://resend.com/_next/image?url=%2Fstatic%2Fposts%2Fwebhooks.jpg&w=640&q=75" 
                          className="absolute inset-0 h-full w-full rounded-2xl bg-zinc-900 object-cover invert brightness-[0.85] contrast-[1.15]"
                        />
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"></div>
                      </div>
                      
                      <div className="flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-x-4 text-xs">
                            <time dateTime="2022-09-02" className="text-zinc-500">2022-09-02</time>
                            <a href="#blog" className="relative z-10 rounded-full bg-white/5 border border-white/10 px-3 py-1.5 font-medium text-purple-400 hover:text-purple-300">
                              Introducting Docy: Developer first headless CMS
                            </a>
                          </div>
                          
                          <div className="group relative max-w-xl">
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-zinc-200 group-hover:text-white md:text-2xl lg:text-3xl">
                              <a href="#blog">
                                <span className="absolute inset-0"></span>
                                Introducting Docy: Developer first headless CMS
                              </a>
                            </h3>
                            <p className="mt-5 text-sm leading-6 text-zinc-400">
                              When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.
                            </p>
                          </div>
                        </div>

                        <div className="mt-6 flex border-t border-white/5 pt-6">
                          <div className="relative flex items-center gap-x-4">
                            <img 
                              alt="Adam Smith" 
                              src="https://assets.basehub.com/fa068a12/uXVXN7g1Fc2EjO8OWn0HG/09.png?width=64&quality=90&format=auto" 
                              className="h-10 w-10 rounded-full bg-zinc-800"
                            />
                            <div className="text-sm leading-6">
                              <p className="font-semibold text-zinc-300">
                                <span className="absolute inset-0"></span>
                                Adam Smith
                              </p>
                              <p className="text-zinc-400">Dev Rel</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PRICING COMPARISON & CHECKLIST GRID */}
        <section id="pricing" className="relative overflow-hidden py-14 border-t border-white/5">
          {/* Subtle dotted background grid pattern */}
          <div 
            className="absolute opacity-50 inset-0 h-full w-full pointer-events-none" 
            style={{
              backgroundColor: "transparent",
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233f3f46' fillOpacity='0.4' fillRule='evenodd'%3E%3Ccircle cx='1.2' cy='1.2' r='1.2'/%3E%3C/g%3E%3C/svg%3E")`,
              maskImage: "radial-gradient(circle, white 10%, transparent 90%)",
              WebkitMaskImage: "radial-gradient(circle, white 10%, transparent 90%)"
            }}
          ></div>

          <div className="mx-auto max-w-screen-xl text-zinc-400 md:px-8 relative z-10">
            <div className="relative max-w-xl space-y-3 px-4 md:px-0">
              <div className="absolute left-0 top-44 h-56 w-[90%] overflow-x-hidden bg-[#9560EB] bg-opacity-40 opacity-55 blur-[337.4px]" style={{ transform: "rotate(-30deg)" }}></div>
              <h3 className="font-semibold text-zinc-400">Pricing</h3>
              <p className="mt-2 font-geist text-4xl font-normal tracking-tighter text-white/90 sm:text-5xl">
                The right price for you <br className="hidden sm:inline lg:hidden"/>whoever you are
              </p>
              <div className="max-w-xl text-zinc-300">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur consequat nunc.</p>
              </div>
            </div>

            <div className="mt-16 justify-between gap-8 md:flex">
              {/* Left Column features checklist */}
              <ul className="max-w-md flex-1 space-y-10 px-4 md:px-0">
                {/* Scalable */}
                <li className="flex gap-x-3">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-transparent text-zinc-300 [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-geist text-lg font-normal tracking-tight text-zinc-100">Scalable</h4>
                    <p className="mt-2 text-zinc-400 md:text-sm">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                    </p>
                  </div>
                </li>

                {/* Flexible */}
                <li className="flex gap-x-3">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-transparent text-zinc-300 [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-geist text-lg font-normal tracking-tight text-zinc-100">Flexible</h4>
                    <p className="mt-2 text-zinc-400 md:text-sm">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                    </p>
                  </div>
                </li>

                {/* Smooth */}
                <li className="flex gap-x-3">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-transparent text-zinc-300 [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-geist text-lg font-normal tracking-tight text-zinc-100">Smooth</h4>
                    <p className="mt-2 text-zinc-400 md:text-sm">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                    </p>
                  </div>
                </li>

                {/* Secure */}
                <li className="flex gap-x-3">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-transparent text-zinc-300 [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-geist text-lg font-normal tracking-tight text-zinc-100">Secure</h4>
                    <p className="mt-2 text-zinc-400 md:text-sm">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                    </p>
                  </div>
                </li>
              </ul>

              {/* Right Column Price Card */}
              <div className="md:border-x-none mt-6 flex flex-1 transform-gpu flex-col border-y backdrop-blur-xl bg-white/5 border-white/10 [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#8686f01f_inset] md:mt-0 md:max-w-xl md:rounded-xl md:border md:shadow-lg">
                <div className="border-b border-white/10 p-4 py-8 md:p-8">
                  <div className="flex justify-between items-start">
                    <div className="max-w-xs">
                      <span className="font-geist text-2xl font-semibold tracking-tighter text-zinc-100 sm:text-3xl">Basic plan</span>
                      <p className="mt-3 text-zinc-200 sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="flex-none font-geist text-2xl font-semibold text-zinc-100 sm:text-3xl">
                      $32 <span className="text-xl font-normal text-zinc-400">/mo</span>
                    </div>
                  </div>
                  
                  <button className="text-md group relative mt-5 flex w-full flex-row items-center justify-center gap-2 rounded-xl px-4 py-3 font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
                    <div className="animate-gradient absolute inset-0 block h-full w-full bg-gradient-to-r from-purple-600/50 to-purple-800/50 bg-[length:300%_100%] p-[1px] [border-radius:inherit] ![mask-composite:subtract] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"></div>
                    <span className="animate-gradient inline whitespace-pre bg-gradient-to-r from-purple-200/70 via-[#9c40ff] to-[#ffaa40] bg-[length:300%_100%] bg-clip-text text-center text-transparent">
                      Get Started Now
                    </span>
                    <svg strokeLinecap="round" className="text-[#9c40ff] ml-1" strokeWidth="1.5" aria-hidden="true" viewBox="0 0 10 10" height="11" width="11" stroke="currentColor" fill="none">
                      <path strokeLinecap="round" d="M0 5h7" className="opacity-0 transition duration-500 group-hover:opacity-100 group-hover:duration-500"></path>
                      <path strokeLinecap="round" d="M1 1l4 4-4 4" className="transition duration-500 group-hover:translate-x-[3px] group-hover:duration-500"></path>
                    </svg>
                  </button>
                </div>

                <ul className="space-y-3 p-4 sm:grid sm:grid-cols-2 md:block md:p-8 lg:grid border-t border-white/5">
                  <div className="col-span-2 pb-2 font-medium text-zinc-100">
                    <p>Features</p>
                  </div>
                  {Array.from({ length: 8 }).map((_, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-zinc-200 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zinc-400 flex-none" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Curabitur faucibus
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* BENTO STATS CARDS SECTION */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-t border-white/5 pt-12">
          <div className="relative overflow-x-hidden mx-auto mt-24 max-w-7xl px-6 sm:mt-24 sm:mb-24 lg:px-8">
            <p className="mt-8 max-w-2xl mx-auto font-geist text-center text-4xl sm:text-5xl font-normal tracking-tight text-gray-200">
              We scale you to milions.
            </p>
            
            <div className="w-full overflow-hidden absolute inset-0 z-10 pointer-events-none">
              <CircuitBoardSvg className="hidden sm:flex absolute top-[-100px] brightness-50" />
            </div>

            <p className="mt-4 max-w-xl mx-auto text-lg text-center tracking-tight text-slate-400 relative z-20">
              Design assets, icon teardowns, and a community of fellow icon designers where you can ask questions.
            </p>
            
            <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end relative z-20">
              {/* Card 1 */}
              <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-white/5 border border-white/10 bg-glass-gradient transform-gpu [box-shadow:0_-40px_80px_-20px_#8686f01f_inset] p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
                <p className="flex-none text-3xl font-bold tracking-tight text-white">250k</p>
                <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                  <p className="text-lg font-semibold tracking-tight text-white">Users on the platform</p>
                  <p className="mt-2 text-base leading-7 text-zinc-400">Vel labore deleniti veniam consequuntur sunt nobis.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-white/5 border border-white/10 bg-page-gradient p-8 sm:flex-row-reverse sm:items-end lg:w-full transform-gpu [box-shadow:0_-20px_80px_-20px_#8686f01f_inset] lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
                <p className="flex-none text-3xl font-bold tracking-tight text-white">$8.9 billion</p>
                <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                  <p className="text-lg font-semibold tracking-tight text-white">We’re proud that our customers have made over $8 billion in total revenue.</p>
                  <p className="mt-2 text-base leading-7 text-zinc-400">Eu duis porta aliquam ornare. Elementum eget magna egestas.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-white/5 border border-white/10 bg-page-gradient p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none transform-gpu [box-shadow:0_-20px_80px_-20px_#8686f01f_inset] lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
                <p className="flex-none text-3xl font-bold tracking-tight text-white">401,093</p>
                <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                  <p className="text-lg font-semibold tracking-tight text-white">Transactions this year</p>
                  <p className="mt-2 text-base leading-7 text-zinc-400">Eu duis porta aliquam ornare. Elementum eget magna egestas. Eu duis porta aliquam ornare.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CLIENT TESTIMONIALS SLIDER SECTION */}
        <div className="max-w-8xl mx-auto border-t border-white/10 pt-12 pb-16">
          <div className="w-full mx-auto px-10">
            <div className="mb-10">
              <p className="mt-8 max-w-2xl mx-auto font-geist text-center text-4xl sm:text-5xl font-normal tracking-tight text-zinc-200">
                What clients says
              </p>
              <p className="mt-4 max-w-xl mx-auto text-lg text-center tracking-tight text-zinc-400">
                Design assets, icon teardowns, and a community of fellow icon designers where you can ask questions.
              </p>
            </div>

            <div 
              style={{ maskImage: "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)" }} 
              className="flex relative overflow-hidden gap-5 justify-around shrink-0 py-4"
            >
              <div className="flex shrink-0 animate-logo-cloud flex-row gap-6">
                {testimonials.map((t, idx) => (
                  <div key={idx} className="border border-white/10 flex flex-col bg-white/5 bg-page-gradient rounded-lg shrink-0 grow-0 w-[500px] h-full justify-between">
                    <p className="px-5 py-5 text-pretty text-lg font-extralight text-zinc-200 tracking-tighter">
                      &quot;{t.quote}&quot;
                    </p>
                    <div className="border-t border-white/10 w-full flex gap-1 overflow-hidden">
                      <div className="w-3/4 flex gap-3 items-center px-4 py-3">
                        <img src="https://assets.basehub.com/fa068a12/uXVXN7g1Fc2EjO8OWn0HG/09.png?width=64&quality=90&format=auto" className="h-10 w-10 rounded-full bg-zinc-800" alt="avatar" />
                        <div className="flex flex-col flex-1 gap-0 justify-start items-start">
                          <h5 className="text-sm font-medium md:text-md text-zinc-100">{t.name}</h5>
                          <p className="text-zinc-400 mt-[-2px] text-xs font-normal">
                            {t.role}
                          </p>
                        </div>
                      </div>
                      <div className="w-[1px] bg-white/10"></div>
                      <div className="max-w-full self-center pl-2 flex items-center justify-center">
                        <img src={t.companyLogo} className="h-8 w-20 px-2 flex-none invert opacity-70" alt="company_logo" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex shrink-0 animate-logo-cloud flex-row gap-6" aria-hidden="true">
                {testimonials.map((t, idx) => (
                  <div key={`dup-${idx}`} className="border border-white/10 flex flex-col bg-white/5 bg-page-gradient rounded-lg shrink-0 grow-0 w-[500px] h-full justify-between">
                    <p className="px-5 py-5 text-pretty text-lg font-extralight text-zinc-200 tracking-tighter">
                      &quot;{t.quote}&quot;
                    </p>
                    <div className="border-t border-white/10 w-full flex gap-1 overflow-hidden">
                      <div className="w-3/4 flex gap-3 items-center px-4 py-3">
                        <img src="https://assets.basehub.com/fa068a12/uXVXN7g1Fc2EjO8OWn0HG/09.png?width=64&quality=90&format=auto" className="h-10 w-10 rounded-full bg-zinc-800" alt="avatar" />
                        <div className="flex flex-col flex-1 gap-0 justify-start items-start">
                          <h5 className="text-sm font-medium md:text-md text-zinc-100">{t.name}</h5>
                          <p className="text-zinc-400 mt-[-2px] text-xs font-normal">
                            {t.role}
                          </p>
                        </div>
                      </div>
                      <div className="w-[1px] bg-white/10"></div>
                      <div className="max-w-full self-center pl-2 flex items-center justify-center">
                        <img src={t.companyLogo} className="h-8 w-20 px-2 flex-none invert opacity-70" alt="company_logo" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PROUDLY OPEN SOURCE SECTION */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="relative mx-auto flex flex-col items-center justify-center overflow-hidden py-20 text-zinc-400 md:px-8">
            <p className="mx-auto mt-8 max-w-2xl text-center font-geist text-4xl sm:text-5xl font-normal tracking-tight text-zinc-200">
              Proudly OpenSource.
            </p>
            
            <div className="w-full overflow-hidden absolute inset-0 z-10 pointer-events-none">
              <CircuitBoardSvg className="absolute top-[-100px] brightness-50" />
            </div>

            <p className="mx-auto mt-4 max-w-xl text-center text-lg tracking-tight text-zinc-400 relative z-20">
              Design assets, icon teardowns, and a community of fellow icon designers where you can ask questions.
            </p>
            
            <div className="relative flex flex-col items-center justify-center gap-6 z-20 mt-4">
              <button className="text-md group relative mt-3 flex flex-row items-center justify-center gap-2 rounded-full px-6 py-3 font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
                <div className="animate-gradient absolute inset-0 block h-full w-full bg-gradient-to-r from-purple-600/50 to-purple-800/50 bg-[length:300%_100%] bg-clip-text p-[1px] [border-radius:inherit] ![mask-composite:subtract] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"></div>
                <FaGithub className="h-4 w-4 text-zinc-300" />
                <div className="h-4 w-[1px] shrink-0 bg-white/10" role="none" data-orientation="vertical"></div>
                <span className="animate-gradient inline whitespace-pre bg-gradient-to-r from-purple-200/70 via-[#9c40ff] to-[#ffaa40] bg-[length:300%_100%] bg-clip-text text-center text-transparent">
                  Get Started
                </span>
                <svg strokeLinecap="round" className="text-[#9c40ff] ml-1" strokeWidth="1.5" aria-hidden="true" viewBox="0 0 10 10" height="11" width="11" stroke="currentColor" fill="none">
                  <path strokeLinecap="round" d="M0 5h7" className="opacity-0 transition duration-500 group-hover:opacity-100 group-hover:duration-500"></path>
                  <path strokeLinecap="round" d="M1 1l4 4-4 4" className="transition duration-500 group-hover:translate-x-[3px] group-hover:duration-500"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* FREQUENTLY ASKED QUESTIONS SECTION */}
        <div className="bg-transparent z-20 relative border-t border-white/10">
          <div className="mx-auto max-w-7xl px-8 py-24 sm:py-32 lg:px-10 lg:py-36 relative">
            <div className="absolute left-0 top-44 h-56 w-[90%] opacity-35 overflow-x-hidden bg-[#9560EB] bg-opacity-40 blur-[337.4px]" style={{ transform: "rotate(-30deg)" }}></div>
            
            <div className="mx-auto max-w-4xl divide-y divide-white/5 relative z-10">
              <p className="mt-8 max-w-2xl mx-auto font-geist text-center text-4xl sm:text-5xl font-normal tracking-tight text-zinc-200">
                Frequently Asked Questions.
              </p>
              <p className="mt-4 max-w-xl mx-auto pt-4 text-lg text-center tracking-tight text-zinc-400">
                Design assets, icon teardowns, and a community of fellow icon designers where you can ask questions.
              </p>

              <dl className="mt-10 space-y-6 divide-y divide-white/10">
                {faqItems.map((item, idx) => (
                  <div key={item.id} className="pt-6">
                    <button 
                      onClick={() => toggleFaq(idx)}
                      className="cursor-pointer flex w-full items-start justify-between text-left text-white focus:outline-none"
                    >
                      <span className="text-base font-semibold leading-7">
                        {item.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        <FiPlus 
                          className={`h-6 w-6 transform transition-transform duration-300 ${expandedFaq === idx ? "rotate-45 text-purple-500" : ""}`} 
                        />
                      </span>
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {expandedFaq === idx && (
                        <motion.dd
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden pr-12 mt-2"
                        >
                          <p className="text-sm leading-6 text-zinc-400">
                            {item.answer}
                          </p>
                        </motion.dd>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* CONTACT FORM SECTION */}
        <div id="contact" className="relative border-t border-white/10 overflow-hidden">
          <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 relative z-10">
            <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
              <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg relative z-20">
                
                <div className="w-full overflow-hidden absolute inset-0 z-10 pointer-events-none">
                  <CircuitBoardSvg className="hidden sm:flex absolute left-[-100px] top-20 brightness-30" />
                </div>

                <div className="absolute left-0 top-10 h-56 w-[90%] overflow-x-hidden bg-[#9560EB] bg-opacity-20 opacity-40 blur-[337.4px]" style={{ transform: "rotate(-30deg)" }}></div>

                <h2 className="text-3xl font-bold tracking-tight text-zinc-200">
                  Get in touch
                </h2>
                <p className="mt-6 text-lg leading-8 text-zinc-400">
                  Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.
                </p>

                <dl className="mt-10 space-y-4 text-base leading-7 text-zinc-300">
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Address</span>
                      <FaBuilding className="h-7 w-6 text-zinc-400" />
                    </dt>
                    <dd className="text-sm">545 Mavis Island<br/>Chicago, IL 99191</dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Telephone</span>
                      <FiPhone className="h-7 w-6 text-zinc-400" />
                    </dt>
                    <dd className="text-sm">
                      <a href="tel:+1 (555) 234-5678" className="hover:text-white transition">
                        +1 (555) 234-5678
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Email</span>
                      <FiMail className="h-7 w-6 text-zinc-400" />
                    </dt>
                    <dd className="text-sm">
                      <a href="mailto:hello@example.com" className="hover:text-white transition">
                        hello@example.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <form className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48 border-t lg:border-t-0 lg:border-l border-white/10 relative z-20" onSubmit={(e) => e.preventDefault()}>
              <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-zinc-300">First name</label>
                    <div className="mt-2.5">
                      <input id="first-name" type="text" autoComplete="given-name" suppressHydrationWarning className="block w-full rounded-md border border-white/10 bg-transparent px-3.5 py-2 text-white shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 sm:text-sm sm:leading-6" name="first-name"/>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-zinc-300">Last name</label>
                    <div className="mt-2.5">
                      <input id="last-name" type="text" autoComplete="family-name" suppressHydrationWarning className="block w-full rounded-md border border-white/10 bg-transparent px-3.5 py-2 text-white shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 sm:text-sm sm:leading-6" name="last-name"/>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-zinc-300">Email</label>
                    <div className="mt-2.5">
                      <input id="email" type="email" autoComplete="email" suppressHydrationWarning className="block w-full rounded-md border border-white/10 bg-transparent px-3.5 py-2 text-white shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 sm:text-sm sm:leading-6" name="email"/>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-zinc-300">Phone number</label>
                    <div className="mt-2.5">
                      <input id="phone-number" type="tel" autoComplete="tel" suppressHydrationWarning className="block w-full rounded-md border border-white/10 bg-transparent px-3.5 py-2 text-white shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 sm:text-sm sm:leading-6" name="phone-number"/>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-zinc-300">Message</label>
                    <div className="mt-2.5">
                      <textarea id="message" name="message" rows={4} suppressHydrationWarning className="block w-full rounded-md border border-white/10 bg-transparent px-3.5 py-2 text-white shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 sm:text-sm sm:leading-6"></textarea>
                    </div>
                  </div>
                </div>
                
                <div className="justify-start mt-8 flex">
                  <button className="text-md group relative flex flex-row items-center justify-center gap-2 rounded-full px-6 py-3 font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
                    <div className="animate-gradient absolute inset-0 block h-full w-full bg-gradient-to-r from-purple-600/50 to-purple-800/50 bg-[length:300%_100%] p-[1px] [border-radius:inherit] ![mask-composite:subtract] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"></div>
                    <span className="animate-gradient inline whitespace-pre bg-gradient-to-r from-purple-200/70 via-[#9c40ff] to-[#ffaa40] bg-[length:300%_100%] bg-clip-text text-center text-transparent">
                      Message Now
                    </span>
                    <svg strokeLinecap="round" className="text-[#9c40ff] ml-1" strokeWidth="1.5" aria-hidden="true" viewBox="0 0 10 10" height="11" width="11" stroke="currentColor" fill="none">
                      <path strokeLinecap="round" d="M0 5h7" className="opacity-0 transition duration-500 group-hover:opacity-100 group-hover:duration-500"></path>
                      <path strokeLinecap="round" d="M1 1l4 4-4 4" className="transition duration-500 group-hover:translate-x-[3px] group-hover:duration-500"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="overflow-x-hidden border-t border-white/10 py-12">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-10 py-8 sm:grid-cols-12 md:py-12">
              <div className="space-y-4 sm:col-span-12 lg:col-span-4">
                <h2 className="bg-gradient-to-tr from-purple-400 via-purple-200 to-pink-200 bg-clip-text text-2xl font-bold uppercase tracking-tighter text-transparent">
                  Remak.
                </h2>
                <div className="text-sm text-zinc-500">
                  © ReMak - All rights reserved.
                </div>
              </div>
              
              <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
                <h3 className="text-sm font-semibold text-zinc-200">Product</h3>
                <ul className="space-y-2 text-sm">
                  <li><a className="text-zinc-400 transition hover:text-white" href="#features">Features</a></li>
                  <li><a className="text-zinc-400 transition hover:text-white" href="#0">Integrations</a></li>
                  <li><a className="text-zinc-400 transition hover:text-white" href="#pricing">Pricing &amp; Plans</a></li>
                  <li><a className="text-zinc-400 transition hover:text-white" href="#changelog">Changelog</a></li>
                  <li><a className="text-zinc-400 transition hover:text-white" href="#0">Our method</a></li>
                </ul>
              </div>
              
              <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
                <h3 className="text-sm font-semibold text-zinc-200">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li><a className="text-zinc-400 transition hover:text-white" href="#about">About us</a></li>
                  <li><a className="text-zinc-400 transition hover:text-white" href="#0">Diversity &amp; Inclusion</a></li>
                  <li><a className="text-zinc-400 transition hover:text-white" href="#blog">Blog</a></li>
                  <li><a className="text-zinc-400 transition hover:text-white" href="#0">Careers</a></li>
                  <li><a className="text-zinc-400 transition hover:text-white" href="#0">Financial statements</a></li>
                </ul>
              </div>

              <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
                <h3 className="text-sm font-semibold text-zinc-200">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><a className="text-zinc-400 transition hover:text-white" href="#0">Community</a></li>
                  <li><a className="text-zinc-400 transition hover:text-white" href="#0">Terms of service</a></li>
                  <li><a className="text-zinc-400 transition hover:text-white" href="#0">Report a vulnerability</a></li>
                </ul>
              </div>

              <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
                <h3 className="text-sm font-semibold text-zinc-200">Social</h3>
                <ul className="flex gap-2">
                  <li>
                    <a className="flex items-center justify-center text-zinc-400 transition hover:text-white" aria-label="Twitter" href="#0">
                      <svg className="h-6 w-6 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center justify-center text-zinc-400 transition hover:text-white" aria-label="Medium" href="#0">
                      <svg className="h-6 w-6 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 8H9a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm-1.708 3.791-.858.823a.251.251 0 0 0-.1.241V18.9a.251.251 0 0 0 .1.241l.838.823v.181h-4.215v-.181l.868-.843c.085-.085.085-.11.085-.241v-4.887l-2.41 6.131h-.329l-2.81-6.13V18.1a.567.567 0 0 0 .156.472l1.129 1.37v.181h-3.2v-.181l1.129-1.37a.547.547 0 0 0 .146-.472v-4.749a.416.416 0 0 0-.138-.351l-1-1.209v-.181H13.8l2.4 5.283 2.122-5.283h2.971l-.001.181Z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center justify-center text-zinc-400 transition hover:text-white" aria-label="Github" href="#0">
                      <svg className="h-6 w-6 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
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
