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
    icon: "https://app.sreeai.qzz.io/Sree-Ai-Fav-icon.png",
    shortcut: "https://app.sreeai.qzz.io/Sree-Ai-Fav-icon.png",
    apple: "https://app.sreeai.qzz.io/Sree-Ai-Fav-icon.png",
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
        url: "https://app.sreeai.qzz.io/Sree-Ai-Fav-icon.png",
        width: 1200,
        height: 630,
        alt: "Sree AI Multimodal Platform",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sree AI — The Next-Gen Multimodal AI Platform",
    description:
      "All-in-one AI platform unifying 75+ LLMs, Sub-50ms Voice Agents, Studio-Grade Image & Video Generation, and 2D to 3D Convertor.",
    images: ["https://app.sreeai.qzz.io/Sree-Ai-Fav-icon.png"],
  },
};

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
        <link rel="icon" type="image/png" href="https://app.sreeai.qzz.io/Sree-Ai-Fav-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
