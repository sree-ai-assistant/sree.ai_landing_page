# Sree AI — Landing Page & Client Portal

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-blue?style=flat-square)](#-license--legal)

> The official marketing landing page, product showcase, and cross-platform client distribution portal for **[Sree AI](https://sreeai.qzz.io)** — a unified, multimodal artificial intelligence platform.

---

## 🌟 Overview

**Sree AI** unifies text intelligence, real-time voice synthesis, photorealistic graphics, and motion synthesis into a single workspace. This repository powers the official landing page and client distribution portal at **`https://sreeai.qzz.io`**, linking users to the cloud SaaS web application at **`https://app.sreeai.qzz.io`** and hosting offline installer packages for Android and macOS.

### Key Capabilities

* **🧠 Sree Chat (75+ Flagship LLMs):** DeepSeek-V3, Llama 3.3 70B, Qwen 2.5 Coder, Mistral Large, and Gemma with live web search and citations.
* **🎙️ Sree Voice (Sub-50ms Speech):** Direct bidirectional WebSocket edge pipelines connecting text-to-speech & speech recognition with zero local compile delay.
* **🎨 Sree Image & Video:** FLUX.1 (Schnell & Dev) photorealism, Nano Banana, Google Veo 3.1, and Google Omni Flash cinematic 4K generation.
* **🔑 Zero-Markup BYOK:** Direct client-side key routing through NVIDIA Cloud, Google Gemini, Groq, and Deepgram with 0% platform markup.
* **🛡️ Self-Hostable:** Dockerized container architecture deployable inside private VPCs (AWS, GCP, Azure) or on-premise infrastructure.
* **📦 Cross-Platform Distribution:** Instant Web App (PWA) plus verified native offline installer binaries for Android and macOS.

---

## 📦 Client Applications & Downloads Matrix

| Platform | Type | Version | File Size | Compatibility | Download Link | SHA-256 Checksum |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Cloud Web App** | PWA (Desktop & Mobile) | `v1.0.0` | `0 KB` (Cloud) | Any modern browser (Chrome, Edge, Safari, Brave) | [Launch & Install](https://app.sreeai.qzz.io/?install=true) | N/A |
| **Android** | Universal APK | `v1.0.0` | `~942 KB` | Android 8.0+ (Phones & Tablets) | [`sree-ai.apk`](/downloads/sree-ai.apk) | `ae6d6d05b13d370a64df281e17c6a5490abc677a031dfe7d007ac2f225743140` |
| **macOS** | Universal App (.zip) | `v1.0.0` | `~1.0 MB` | macOS 12.0+ (Apple Silicon M1–M4 & Intel) | [`sree-ai-mac.zip`](/downloads/sree-ai-mac.zip) | `07ab455e79d546b1a559c49ed1f250b3cc549a626c68a4c05c3a2e1a4b737ce5` |
| **iOS / iPadOS** | Native App | Beta | — | iOS 16.0+ | [Apple TestFlight Waitlist](https://sreeai.qzz.io/#download) | Upcoming |
| **Windows** | Native Desktop | Beta | — | Windows 10 / 11 (x64 & ARM64) | [Windows Beta Waitlist](https://sreeai.qzz.io/#download) | Upcoming |

### Checksum Verification

To verify binary package integrity before running:

```bash
# macOS / Linux
shasum -a 256 public/downloads/sree-ai-mac.zip
shasum -a 256 public/downloads/sree-ai.apk

# Windows PowerShell
Get-FileHash -Path public\downloads\sree-ai-mac.zip -Algorithm SHA256
Get-FileHash -Path public\downloads\sree-ai.apk -Algorithm SHA256
```

---

## 🛠️ Technology Stack

* **Framework:** [Next.js 16](https://nextjs.org/) (App Router with Turbopack)
* **Runtime / Library:** [React 19](https://react.dev/)
* **Language:** [TypeScript 5](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with hardware-accelerated CSS animations
* **Smooth Scrolling:** [@studio-freight/lenis](https://github.com/darkroomengineering/lenis) (1.3.x)
* **Animation:** [Framer Motion](https://www.framer.com/motion/) (12.x)
* **Icons:** [Lucide React](https://lucide.dev/) & [React Icons (FontAwesome 6)](https://react-icons.github.io/react-icons/)
* **Telemetry & Analytics:** [PostHog](https://posthog.com/)

---

## 📁 Repository Structure

```text
Sree-Ai-Landing-Page/
├── public/
│   ├── downloads/               # Verified binary distribution packages
│   │   ├── sree-ai.apk          # Android APK universal binary (~942 KB)
│   │   └── sree-ai-mac.zip      # macOS Universal app ZIP (~1.0 MB)
│   ├── Sree-Ai-Fav-icon.png     # Official high-res brandmark icon
│   ├── llms.txt                 # Structured platform documentation for AI search engines
│   ├── llms-full.txt            # Deep RAG context file for LLM answer engines
│   ├── robots.txt               # SEO & AEO (AI answer engine) crawling directives
│   └── sitemap.xml              # Search engine XML sitemap
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout with JSON-LD Schema.org structured data
│   │   ├── page.tsx             # Main landing page assembling all feature sections
│   │   └── globals.css          # Tailwind CSS v4 design system tokens
│   └── components/
│       ├── Navbar.tsx           # Floating glass navbar with focal-point scroll spy
│       ├── Hero.tsx             # Hero section with interactive CTA & live metrics
│       ├── ToolsGrid.tsx        # 6 core platform capabilities showcase
│       ├── DownloadSection.tsx  # 2-option responsive download section (Web vs Native)
│       ├── PricingSection.tsx   # Dual currency (USD/INR) & annual/monthly pricing
│       ├── FaqSection.tsx       # Interactive FAQ accordion
│       ├── WaitlistModal.tsx    # Multi-platform early access waitlist modal
│       └── Footer.tsx           # Compliance, social links, legal disclaimers
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

* **Node.js**: `v18.18.0` or higher (Node 20+ recommended)
* **Package Manager**: `npm`, `pnpm`, or `bun`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sree-ai-assistant/sree.ai.git
   cd Sree-Ai-Landing-Page
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the landing page.

### Production Build & Verification

```bash
# Type check without emitting files
npx tsc --noEmit

# Build production bundle
npm run build

# Start production server
npm run start
```

---

## 🔍 SEO & AEO (AI Engine Optimization)

This project implements modern **Generative Engine Optimization (GEO)** and **Answer Engine Optimization (AEO)**:

1. **Structured LLM Manifests (`/llms.txt` & `/llms-full.txt`):**
   * Curated Markdown summaries indexed by ChatGPT, Perplexity, Claude, and Gemini to ensure accurate platform citation.
   * Covers capabilities, pricing, API key routing, and download links with cryptographic checksums.

2. **Crawler Directives (`/robots.txt`):**
   * Explicitly welcomes major AI search crawlers (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `Applebot-Extended`).

3. **Schema.org Structured Data (`layout.tsx`):**
   * `Organization`: Entity definition and official social graph.
   * `WebSite`: Search authority definition.
   * `SoftwareApplication`: Declares operating systems (`Web`, `Android`, `macOS`, `Cloud`), version (`1.0.0`), and download URLs.
   * `FAQPage`: Rich snippet FAQ schema.

---

## 📄 License & Legal

* **Proprietary Software:** © 2026 Sree AI Platform Inc. All rights reserved.
* **License:** Closed Source / Commercial Proprietary License. All code, design, and branding are the exclusive intellectual property of Sree AI. Unauthorized copying, distribution, or decompilation is strictly prohibited.
* **Terms of Service:** [https://app.sreeai.qzz.io/terms](https://app.sreeai.qzz.io/terms)
* **Privacy Policy:** [https://app.sreeai.qzz.io/privacy](https://app.sreeai.qzz.io/privacy)
* **Security & BYOK:** [https://app.sreeai.qzz.io/security](https://app.sreeai.qzz.io/security)

---

## 💬 Community & Support

* **Web Application:** [https://app.sreeai.qzz.io](https://app.sreeai.qzz.io)
* **Feature Requests:** [https://app.sreeai.qzz.io/feature-request](https://app.sreeai.qzz.io/feature-request)
* **Support Email:** [support@sreeai.qzz.io](mailto:support@sreeai.qzz.io)
