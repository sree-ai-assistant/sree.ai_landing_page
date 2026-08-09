"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

export default function CosmicDustBackground() {
  // Deterministic floating particles to prevent hydration mismatches
  const particles = useMemo(() => {
    return Array.from({ length: 28 }).map((_, i) => {
      const size = (i % 4) * 2 + 2; // 2px to 8px
      const left = ((i * 17) % 95) + 2.5; // % across width
      const top = ((i * 23) % 95) + 2.5; // % down height
      const duration = 12 + (i % 8) * 3; // 12s to 33s smooth loop
      const delay = (i % 7) * 1.5;
      const isCyan = i % 2 === 0;
      const yDelta = (i % 3 === 0 ? -1 : 1) * (40 + (i % 5) * 20);
      const xDelta = (i % 2 === 0 ? 1 : -1) * (20 + (i % 4) * 15);

      return {
        id: i,
        size,
        left: `${left}%`,
        top: `${top}%`,
        duration,
        delay,
        isCyan,
        yDelta,
        xDelta,
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-transparent">
      {/* Top Transition Overlay - Seamlessly blends from hero background color #030014 to transparent */}
      <div className="absolute top-0 left-0 right-0 h-56 bg-gradient-to-b from-[#030014] via-[#030014]/70 to-transparent z-10 pointer-events-none" />

      {/* Bottom Transition Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-[#030014] via-[#030014]/70 to-transparent z-10 pointer-events-none" />

      {/* Ambient Gradient Orbs (Neon Cyan & Electric Purple) - Light GPU Accelerated */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 -left-40 w-[600px] h-[600px] rounded-full bg-cyan-500/20 blur-[120px] pointer-events-none"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
          x: [0, -50, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 -right-40 w-[700px] h-[700px] rounded-full bg-purple-600/25 blur-[140px] pointer-events-none"
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
          x: [0, 30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 -left-30 w-[650px] h-[650px] rounded-full bg-indigo-600/20 blur-[130px] pointer-events-none"
      />

      {/* Subtle Dotted Grid Pattern */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
        }}
      />

      {/* Ultra-light Floating Cosmic Dust Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            x: 0,
            y: 0,
            opacity: 0.2,
          }}
          animate={{
            x: [0, p.xDelta, 0],
            y: [0, p.yDelta, 0],
            opacity: [0.15, 0.7, 0.15],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
          className={`absolute rounded-full pointer-events-none ${
            p.isCyan
              ? "bg-cyan-400 shadow-[0_0_10px_#00f0ff]"
              : "bg-purple-400 shadow-[0_0_10px_#b026ff]"
          }`}
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: p.left,
            top: p.top,
          }}
        />
      ))}
    </div>
  );
}
