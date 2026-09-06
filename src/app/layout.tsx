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
    "DeepSeek V4",
    "DeepSeek V4 Pro",
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
    icon: "/Sree-Ai-Fav-icon.png",
    shortcut: "/Sree-Ai-Fav-icon.png",
    apple: "/Sree-Ai-Fav-icon.png",
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
    "description": "Unified multimodal AI platform featuring 75+ open LLMs, sub-50ms real-time voice, FLUX.1 & Nano Banana image generation, Google Veo 3.1 & Omni Flash 4K video, 2D to 3D spatial models, and BYOK zero-markup architecture."
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Sree AI Platform",
    "operatingSystem": "Web, Cloud, Self-Hosted",
    "applicationCategory": "MultimediaApplication",
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
        "name": "Is Sree AI self-hostable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Sree AI is designed to be fully self-hostable. You can deploy our application frontend, API gateway, and database containers directly into your private cloud (AWS VPC, GCP project) or on-premise hardware infrastructure."
        }
      },
      {
        "@type": "Question",
        "name": "What AI tools and models are included in Sree AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sree AI unifies Sree Chat (75+ open LLMs), Sree Voice (sub-50ms real-time audio synthesis), Sree Image (FLUX.1 & Nano Banana), Sree Video (Google Veo 3.1 & Google Omni Flash), 2D to 3D Convertor, and AI Humanizer & Enhancer under one unified account."
        }
      },
      {
        "@type": "Question",
        "name": "How does Bring Your Own Keys (BYOK) work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BYOK allows you to connect your own API keys from inference providers like NVIDIA, Google, Groq, and Deepgram (with Anthropic & OpenAI support coming soon). When enabled, your requests route directly through your keys with zero platform markups across all plans."
        }
      },
      {
        "@type": "Question",
        "name": "What are the storage retention policies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "On the Free plan ($0 / ₹0), generated chats, audio streams, images, and videos are automatically purged after 30 days. On Starter ($8/mo or ₹399/mo), data is retained for 3 months. On Pro ($29/mo or ₹899/mo), your data has no expiration period."
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
        <meta name="theme-color" content="#030014" />
        <link rel="icon" type="image/png" href="/Sree-Ai-Fav-icon.png" />
        <link rel="apple-touch-icon" href="/Sree-Ai-Fav-icon.png" />
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
