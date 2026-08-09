"use client";

import React, { useState, useEffect } from "react";
import Lenis from "lenis";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import PricingSection from "@/components/PricingSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import WaitlistModal from "@/components/WaitlistModal";
import Footer from "@/components/Footer";
import CosmicDustBackground from "@/components/CosmicDustBackground";

export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
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
    <main className="relative min-h-screen bg-[#030014] text-white overflow-hidden selection:bg-blue-500 selection:text-white">
      {/* Background Interactive Cosmic Canvas */}
      <CosmicDustBackground />

      {/* Floating Header Navbar */}
      <Navbar onOpenWaitlist={() => setIsWaitlistOpen(true)} />

      {/* Page Sections */}
      <HeroSection onOpenWaitlist={() => setIsWaitlistOpen(true)} />
      
      <CapabilitiesSection />

      <PricingSection />

      <ArchitectureSection />

      <TestimonialsSection />

      <FaqSection />

      <Footer onOpenWaitlist={() => setIsWaitlistOpen(true)} />

      {/* Early Access / Waitlist Modal */}
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </main>
  );
}
