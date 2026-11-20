import type { Metadata } from "next";
import "./globals.css";
import PostHogProvider from "@/components/PostHogProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://sreeai.qzz.io"),
  title: "Sree AI — The Next-Gen Multimodal AI Platform",
  description:
    "Experience next-generation AI with Sree Chat (75+ models), Sub-50ms Real-Time Voice, FLUX.1 & Nano Banana Image Gen, 4K Veo Video, and 2D-to-3D Spatial Models.",
  applicationName: "Sree AI",
  authors: [{ name: "Sree AI Platform Inc." }],
  keywords: [
    "Sree AI",
    "Multimodal AI",
    "Open Weights LLM",
    "DeepSeek V3",
    "DeepSeek-R1",
    "Gemini Live API",
    "Real-time Voice AI",
    "FLUX.1",
    "Nano Banana",
    "Google Veo 3.1",
    "AI Workspace",
    "NilStudio",
    "Nilkantha Dwibedi",
    "Sree AI Company",
    "Sree AI Platform Inc",
    "Sree Ai",
    "Nil Studio",
    "Enterprise AI",
    "Multimodal AI Platform",
    "sreeai",
    "sree.ai",
    "sree ai app",
    "sree ai studio",
    "sree ai chat",
    "sree ai voice",
    "sree ai vision",
    "sree ai convertor",
    "Sree Chat",
    "Sree Voice",
    "Sree Vision",
    "Sree Studio",
    "Sree Convertor",
    "Sree AI Platform Inc.",
    "Sree AI Workspace",
    "Sree AI Chat",
    "Sree AI Voice",
    "Sree AI Vision",
    "Sree AI Studio",
    "Sree AI Convertor",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/Sree-Ai-Fav-icon-round.png", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sreeai.qzz.io",
    siteName: "Sree AI",
    title: "Sree AI — The Next-Gen Multimodal AI Platform",
    description:
      "All-in-one AI platform unifying 75+ LLMs, Sub-50ms Voice Agents, Studio-Grade Image & Video Generation, and 2D to 3D Convertor.",
    images: [
      {
        url: "https://sreeai.qzz.io/og-image.jpg",
        secureUrl: "https://sreeai.qzz.io/og-image.jpg",
        width: 512,
        height: 512,
        alt: "Sree AI Multimodal Platform Logo",
        type: "image/jpeg",
      },
      {
        url: "https://sreeai.qzz.io/og-image.png",
        secureUrl: "https://sreeai.qzz.io/og-image.png",
        width: 512,
        height: 512,
        alt: "Sree AI Multimodal Platform Logo",
        type: "image/png",
      },
    ],
  },
  alternates: {
    canonical: "https://sreeai.qzz.io",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary",
    title: "Sree AI — The Next-Gen Multimodal AI Platform",
    description:
      "All-in-one AI platform unifying 75+ LLMs, Sub-50ms Voice Agents, Studio-Grade Image & Video Generation, and 2D to 3D Convertor.",
    images: ["https://sreeai.qzz.io/og-image.jpg"],
  },
};

const jsonLdData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sree AI Platform Inc.",
    "url": "https://sreeai.qzz.io",
    "logo": "https://app.sreeai.qzz.io/Sree-ai-Primary-logo.png",
    "sameAs": [
      "https://github.com/sree-ai-assistant/sree.ai",
      "https://x.com",
      "https://discord.gg",
      "https://linkedin.com"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "support@sreeai.qzz.io",
      "contactType": "customer support"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Sree AI",
    "url": "https://sreeai.qzz.io",
    "description": "Unified multimodal AI platform featuring 75+ open LLMs, real-time voice powered by Gemini Live API and WebSockets, FLUX.1 & Nano Banana image generation, Google Veo 4K video, 2D to 3D spatial models, and BYOK zero-markup architecture."
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Sree AI Platform",
    "operatingSystem": "Web, Android, macOS, Cloud, Self-Hosted",
    "applicationCategory": "MultimediaApplication",
    "softwareVersion": "1.0.0",
    "downloadUrl": "https://sreeai.qzz.io/#download",
    "offers": [
      {
        "@type": "Offer",
        "name": "Free Plan (USD)",
        "price": "0",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "name": "Free Plan (INR)",
        "price": "0",
        "priceCurrency": "INR"
      },
      {
        "@type": "Offer",
        "name": "Starter Plan (USD)",
        "price": "8",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "name": "Starter Plan (INR)",
        "price": "399",
        "priceCurrency": "INR"
      },
      {
        "@type": "Offer",
        "name": "Pro Plan (USD)",
        "price": "29",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "name": "Pro Plan (INR)",
        "price": "899",
        "priceCurrency": "INR"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does Sree Voice achieve low latency in real-time voice mode?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sree Voice achieves ultra-low latency by leveraging the Google Gemini Live API over persistent bidirectional WebSockets. Instead of standard REST requests that wait for entire audio files to record and upload, WebSockets stream audio chunks continuously in real time as you speak, enabling instant speech synthesis and natural conversational flow without awkward robotic pauses."
        }
      },
      {
        "@type": "Question",
        "name": "Is Sree AI self-hostable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Sree AI provides containerized deployment options for enterprise customers. Organizations requiring isolated private cloud environments can deploy the frontend, API gateway, and database containers directly within private AWS, GCP, or on-premise infrastructure under custom enterprise setups."
        }
      },
      {
        "@type": "Question",
        "name": "What AI tools and models are included in Sree AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sree AI unifies Sree Chat (75+ models including DeepSeek-V3, DeepSeek-R1, Llama 3.3, and Qwen), Sree Voice (powered by Google Gemini Live API via WebSockets), Sree Image (FLUX.1 and Nano Banana), Sree Video (Google Veo), plus upcoming 2D to 3D Convertor and AI Humanizer under a single unified dashboard."
        }
      },
      {
        "@type": "Question",
        "name": "How does Bring Your Own Keys (BYOK) work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BYOK allows you to connect your own API keys from supported inference providers like Google Gemini, NVIDIA Cloud, and Groq (with OpenAI and Anthropic integrations in active progress). When enabled, your requests route directly through your personal keys with zero platform markups across all plans."
        }
      },
      {
        "@type": "Question",
        "name": "What are the storage retention policies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "On the Free plan ($0 / ₹0), generated chats, audio streams, and images are stored for 30 days before automatic cleanup. On Starter ($8/mo or ₹399/mo), data is retained for 3 months. On Pro ($29/mo or ₹899/mo), your saved history and generations do not expire."
        }
      }
    ]
  }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased dark"
      suppressHydrationWarning
    >
      <head>
        {/* Google AdSense */}
        <meta name="google-adsense-account" content="ca-pub-2859422528584446" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2859422528584446"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#030014" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" href="/Sree-Ai-Fav-icon-round.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
        {/* AEO & SEO JSON-LD Structured Data */}
        {jsonLdData.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
